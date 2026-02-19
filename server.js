// ─── Off Grid Land Development — Server ────────────────────
// Express server: Stripe checkout, webhooks, email notifications, admin order tracking
//
// ENV VARIABLES REQUIRED (.env):
//   STRIPE_SECRET_KEY=sk_test_...
//   STRIPE_WEBHOOK_SECRET=whsec_...
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=587
//   SMTP_USER=nmoffgridsolar@gmail.com
//   SMTP_PASS=your-app-password
//   NOTIFY_EMAIL=nmoffgridsolar@gmail.com
//   CLIENT_URL=https://offgridlanddevelopment.com
//   PORT=4000
//   JWT_SECRET=your-jwt-secret-here

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Lazy Stripe init — server starts even without keys, checkout will fail gracefully
let stripe;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
} else {
  console.warn('⚠️  STRIPE_SECRET_KEY not set — checkout will not work until you add it to .env');
}

// ─── Database Setup (lowdb — swap for MongoDB/Postgres in production) ──
const defaultData = { orders: [], admin: null };
let db;

async function initDB() {
  const adapter = new JSONFile(join(__dirname, 'db.json'));
  db = new Low(adapter, defaultData);
  await db.read();

  // Create default admin if none exists
  if (!db.data.admin) {
    const hash = await bcrypt.hash('NM$olar!Ops2025#', 12);
    db.data.admin = { username: 'nmadmin', passwordHash: hash };
    await db.write();
  }
}

// ─── Login Rate Limiter ──────────────────────────────────────
const loginAttempts = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip) || { attempts: 0, resetAt: now + 15 * 60 * 1000 };

  // Reset window if expired
  if (now > record.resetAt) {
    record.attempts = 0;
    record.resetAt = now + 15 * 60 * 1000;
  }

  record.attempts++;
  loginAttempts.set(ip, record);

  // Clean up old entries every 100 checks
  if (loginAttempts.size > 100) {
    for (const [key, val] of loginAttempts) {
      if (now > val.resetAt) loginAttempts.delete(key);
    }
  }

  return record.attempts <= 5; // 5 attempts per 15 minutes
}

// ─── Email Transporter ─────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Package Definitions (source of truth) ─────────────────
const PACKAGES = {
  starter: {
    name: 'Cabin Ready',
    capacity: '5.5kW · 16kWh',
    price: 1000000, // $10,000 in cents
    description: '10× Aptos 550W bifacial panels, 1× EG4 LL-S 16kWh LiFePO₄ battery, 1× EG4 18KPV inverter, full wiring kit',
  },
  homestead: {
    name: 'Homestead',
    capacity: '11kW · 32kWh',
    price: 1700000, // $17,000 in cents
    description: '20× Aptos 550W bifacial panels, 2× EG4 LL-S 16kWh LiFePO₄ batteries, 1× EG4 18KPV inverter, full wiring kit',
  },
  ranch: {
    name: 'Ranch',
    capacity: '16.5kW · 48kWh',
    price: 2500000, // $25,000 in cents
    description: '30× Aptos 550W bifacial panels, 3× EG4 LL-S 16kWh LiFePO₄ batteries, 1× EG4 18KPV inverter, paralleling kits, full wiring kit',
  },
};

// ─── Middleware ─────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));

// Raw body for Stripe webhooks (must come BEFORE express.json)
app.post('/api/webhook', express.raw({ type: 'application/json' }), handleWebhook);

// JSON parser for all other routes
app.use(express.json());

// ─── Auth Middleware ────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-change-me');
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// ─── Routes ────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Payment system not configured yet. Add STRIPE_SECRET_KEY to .env' });
  }

  try {
    const { packageId } = req.body;
    const pkg = PACKAGES[packageId];

    if (!pkg) {
      return res.status(400).json({ error: 'Invalid package selected' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pkg.name} Solar Package — ${pkg.capacity}`,
              description: pkg.description,
            },
            unit_amount: pkg.price,
          },
          quantity: 1,
        },
      ],
      customer_creation: 'always',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        packageId,
        packageName: pkg.name,
      },
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/solarpackage?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe session error:', err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Verify Stripe Session & Save Order (called from frontend on success redirect)
app.get('/api/verify-session/:sessionId', async (req, res) => {
  console.log(`🔍 Verifying session: ${req.params.sessionId}`);

  if (!stripe) {
    console.log('❌ Stripe not configured');
    return res.status(503).json({ error: 'Stripe not configured' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);

    console.log(`💳 Session status: ${session.payment_status}`);

    if (session.payment_status !== 'paid') {
      return res.status(400).json({ error: 'Payment not completed' });
    }

    // Check if order already exists (prevent duplicates)
    await db.read();
    const existing = db.data.orders.find(o => o.stripeSessionId === session.id);
    if (existing) {
      console.log(`⏭ Already saved: ${existing.id}`);
      return res.json({ order: existing, duplicate: true });
    }

    const order = {
      id: `ORD-${Date.now().toString(36).toUpperCase()}`,
      stripeSessionId: session.id,
      stripePaymentIntent: session.payment_intent,
      packageId: session.metadata.packageId,
      packageName: session.metadata.packageName,
      amount: session.amount_total,
      currency: session.currency,
      customerEmail: session.customer_details?.email || '',
      customerName: session.customer_details?.name || '',
      customerPhone: session.customer_details?.phone || '',
      shippingAddress: session.shipping_details?.address || session.customer_details?.address || null,
      shippingName: session.shipping_details?.name || session.customer_details?.name || '',
      status: 'paid',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: '',
      trackingNumber: '',
      shippedAt: null,
    };

    db.data.orders.unshift(order);
    await db.write();

    console.log(`✅ Order saved: ${order.id} — ${order.packageName} — $${(order.amount / 100).toFixed(2)}`);

    // Send email notifications (non-blocking)
    sendOrderNotifications(order).catch(err => console.error('Email error:', err));

    res.json({ order, duplicate: false });
  } catch (err) {
    console.error('❌ Session verify error:', err.message);
    res.status(500).json({ error: 'Failed to verify session' });
  }
});

// TEST ROUTE — create a fake order to verify admin dashboard (remove in production)
app.post('/api/test-order', async (req, res) => {
  await db.read();

  const order = {
    id: `ORD-${Date.now().toString(36).toUpperCase()}`,
    stripeSessionId: 'test_' + Date.now(),
    stripePaymentIntent: 'pi_test_' + Date.now(),
    packageId: 'homestead',
    packageName: 'Homestead',
    amount: 1700000,
    currency: 'usd',
    customerEmail: 'test@example.com',
    customerName: 'Test Customer',
    customerPhone: '(505) 555-0123',
    shippingAddress: {
      line1: '123 Desert Road',
      line2: '',
      city: 'Santa Fe',
      state: 'NM',
      postal_code: '87501',
      country: 'US',
    },
    shippingName: 'Test Customer',
    status: 'paid',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    notes: '',
    trackingNumber: '',
    shippedAt: null,
  };

  db.data.orders.unshift(order);
  await db.write();

  console.log(`🧪 Test order created: ${order.id}`);
  res.json({ order });
});

// Stripe Webhook Handler (backup — works once webhook secret is configured)
async function handleWebhook(req, res) {
  if (!stripe) {
    return res.status(503).send('Stripe not configured');
  }

  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Check if order already saved by verify-session route
    await db.read();
    const existing = db.data.orders.find(o => o.stripeSessionId === session.id);
    if (existing) {
      console.log(`⏭ Webhook skipped — order already saved: ${existing.id}`);
      return res.json({ received: true });
    }

    const order = {
      id: `ORD-${Date.now().toString(36).toUpperCase()}`,
      stripeSessionId: session.id,
      stripePaymentIntent: session.payment_intent,
      packageId: session.metadata.packageId,
      packageName: session.metadata.packageName,
      amount: session.amount_total,
      currency: session.currency,
      customerEmail: session.customer_details?.email || '',
      customerName: session.customer_details?.name || '',
      customerPhone: session.customer_details?.phone || '',
      shippingAddress: session.shipping_details?.address || null,
      shippingName: session.shipping_details?.name || '',
      status: 'paid',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      notes: '',
      trackingNumber: '',
      shippedAt: null,
    };

    // Save order
    await db.read();
    db.data.orders.unshift(order);
    await db.write();

    // Send email notifications
    await sendOrderNotifications(order);
  }

  res.json({ received: true });
}

// Email Notifications
async function sendOrderNotifications(order) {
  const formatAddress = (addr) => {
    if (!addr) return 'No address provided';
    return [addr.line1, addr.line2, `${addr.city}, ${addr.state} ${addr.postal_code}`]
      .filter(Boolean)
      .join('\n');
  };

  const priceFormatted = `$${(order.amount / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  // Notification to business
  const businessHTML = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #12360e; padding: 2rem; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #ffde59; margin: 0; font-size: 1.5rem;">🔆 New Solar Package Order!</h1>
      </div>
      <div style="background: #ffffff; padding: 2rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Order ID</td>
            <td style="padding: 8px 0; color: #555;">${order.id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Package</td>
            <td style="padding: 8px 0; color: #555;">${order.packageName} Solar Package</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Amount</td>
            <td style="padding: 8px 0; color: #12360e; font-weight: 700; font-size: 1.1rem;">${priceFormatted}</td>
          </tr>
          <tr><td colspan="2" style="border-bottom: 1px solid #eee; padding: 8px 0;"></td></tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Customer</td>
            <td style="padding: 8px 0; color: #555;">${order.customerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Email</td>
            <td style="padding: 8px 0; color: #555;">${order.customerEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Phone</td>
            <td style="padding: 8px 0; color: #555;">${order.customerPhone || 'Not provided'}</td>
          </tr>
          <tr><td colspan="2" style="border-bottom: 1px solid #eee; padding: 8px 0;"></td></tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #333;">Ship To</td>
            <td style="padding: 8px 0; color: #555; white-space: pre-line;">${order.shippingName}\n${formatAddress(order.shippingAddress)}</td>
          </tr>
        </table>
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f8f8f0; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #12360e; font-weight: 600;">Action Required: Prepare shipment & send tracking info</p>
        </div>
      </div>
    </div>
  `;

  // Confirmation to customer
  const customerHTML = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #12360e; padding: 2rem; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #ffde59; margin: 0; font-size: 1.5rem;">Your Solar Package is on its way!</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 0.5rem 0 0;">Off Grid Land Development</p>
      </div>
      <div style="background: #ffffff; padding: 2rem; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="color: #333; line-height: 1.6;">Hi ${order.customerName},</p>
        <p style="color: #555; line-height: 1.6;">
          Thank you for your order! We're preparing your <strong>${order.packageName} Solar Package</strong> 
          for shipment. Here's what happens next:
        </p>
        <ol style="color: #555; line-height: 1.8;">
          <li>Our team reviews your order and begins preparing equipment</li>
          <li>You'll receive tracking information via email within 5–7 business days</li>
          <li>We'll schedule your first support call to review your engineering plans</li>
        </ol>
        <div style="background: #f8f8f0; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0;">
          <p style="margin: 0 0 0.5rem; font-weight: 600; color: #12360e;">Order Summary</p>
          <p style="margin: 0; color: #555;">Order: ${order.id}</p>
          <p style="margin: 0; color: #555;">Package: ${order.packageName} Solar Package</p>
          <p style="margin: 0; color: #12360e; font-weight: 700; font-size: 1.1rem;">${priceFormatted}</p>
        </div>
        <p style="color: #555; line-height: 1.6;">
          If you have any questions, reply to this email or call us at (505) 352-4674.
        </p>
        <p style="color: #333; font-weight: 600;">— The Off Grid Land Development Team</p>
      </div>
    </div>
  `;

  try {
    // Email to business
    await transporter.sendMail({
      from: `"Off Grid Solar Orders" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
      subject: `🔆 New Order: ${order.packageName} Package — ${order.id}`,
      html: businessHTML,
    });

    // Email to customer
    if (order.customerEmail) {
      await transporter.sendMail({
        from: `"Off Grid Land Development" <${process.env.SMTP_USER}>`,
        to: order.customerEmail,
        subject: `Order Confirmed — ${order.packageName} Solar Package`,
        html: customerHTML,
      });
    }

    console.log(`✅ Order notifications sent for ${order.id}`);
  } catch (err) {
    console.error('Email send error:', err);
  }
}

// ─── Admin Auth Routes ─────────────────────────────────────

app.post('/api/admin/login', async (req, res) => {
  const clientIp = req.ip || req.connection.remoteAddress;

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: 'Too many attempts. Try again in 15 minutes.' });
  }

  const { username, password } = req.body;
  await db.read();

  if (!db.data.admin) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  if (username !== db.data.admin.username) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, db.data.admin.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Reset rate limit on success
  loginAttempts.delete(clientIp);

  const token = jwt.sign(
    { username, role: 'admin' },
    process.env.JWT_SECRET || 'dev-secret-change-me',
    { expiresIn: '4h' }
  );

  res.json({ token });
});

// ─── Admin Order Routes ────────────────────────────────────

// Get all orders
app.get('/api/admin/orders', authMiddleware, async (req, res) => {
  await db.read();
  const { status, search } = req.query;

  let orders = db.data.orders || [];

  if (status && status !== 'all') {
    orders = orders.filter((o) => o.status === status);
  }

  if (search) {
    const q = search.toLowerCase();
    orders = orders.filter(
      (o) =>
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.customerEmail.toLowerCase().includes(q) ||
        o.packageName.toLowerCase().includes(q)
    );
  }

  res.json({
    orders,
    stats: {
      total: db.data.orders.length,
      paid: db.data.orders.filter((o) => o.status === 'paid').length,
      shipped: db.data.orders.filter((o) => o.status === 'shipped').length,
      delivered: db.data.orders.filter((o) => o.status === 'delivered').length,
      totalRevenue: db.data.orders.reduce((sum, o) => sum + o.amount, 0),
    },
  });
});

// Get single order
app.get('/api/admin/orders/:id', authMiddleware, async (req, res) => {
  await db.read();
  const order = db.data.orders.find((o) => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

// Update order (status, tracking, notes)
app.patch('/api/admin/orders/:id', authMiddleware, async (req, res) => {
  await db.read();
  const index = db.data.orders.findIndex((o) => o.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Order not found' });

  const allowed = ['status', 'trackingNumber', 'notes', 'shippedAt'];
  for (const key of allowed) {
    if (req.body[key] !== undefined) {
      db.data.orders[index][key] = req.body[key];
    }
  }
  db.data.orders[index].updatedAt = new Date().toISOString();

  // If marking as shipped, set shippedAt
  if (req.body.status === 'shipped' && !db.data.orders[index].shippedAt) {
    db.data.orders[index].shippedAt = new Date().toISOString();
  }

  await db.write();
  res.json(db.data.orders[index]);
});

// ─── Change Admin Password ─────────────────────────────────
app.post('/api/admin/change-password', authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  await db.read();

  const valid = await bcrypt.compare(currentPassword, db.data.admin.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Current password is incorrect' });

  db.data.admin.passwordHash = await bcrypt.hash(newPassword, 12);
  await db.write();
  res.json({ success: true });
});

// ─── Start Server ──────────────────────────────────────────
const PORT = process.env.PORT || 4000;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🔆 Off Grid Solar API running on port ${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/api/health\n`);
  });
});