import React, { useState, useEffect, memo } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import emailjs from '@emailjs/browser';

// ─── EMAILJS CONFIG ────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier = 200 emails/month)
// 2. Add a Gmail service → use nmoffgridsolar@gmail.com
// 3. Create an email template (see comments below for template vars)
// 4. Paste your IDs here:
const EMAILJS_SERVICE_ID = 'service_m9b1c18';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ids790r'; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'yvZUb28lhyB6eYY_z';    // e.g. 'aBcDeFgHiJkLmN'

/*
  EmailJS Template Variables (paste into your EmailJS template):

  Subject: Order Confirmed — {{package_name}} Solar Package
  
  Body:
  Hi {{customer_name}},

  Thank you for your order! Here's your confirmation:

  Order: {{order_id}}
  Package: {{package_name}} Solar Package
  Amount: {{amount}}
  
  Shipping to:
  {{shipping_address}}

  What happens next:
  1. Our team will review your order within 24 hours
  2. You'll receive a call to confirm delivery details
  3. Equipment ships within 5–7 business days via freight
  4. We'll schedule your first build support video call

  Questions? Reply to this email or call us at (505) 352-4674.

  — Off Grid Solar Team
*/

// ─── Animations ────────────────────────────────────────────
const fadeInUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;
const fadeIn = keyframes`from{opacity:0}to{opacity:1}`;
const checkDraw = keyframes`
  0%{stroke-dashoffset:100}
  100%{stroke-dashoffset:0}
`;
const circleDraw = keyframes`
  0%{stroke-dashoffset:283}
  100%{stroke-dashoffset:0}
`;
const scalePop = keyframes`
  0%{transform:scale(0)}
  50%{transform:scale(1.15)}
  100%{transform:scale(1)}
`;

// ─── Styles ────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height:100vh;width:100%;background:#080f07;
  overflow-x:hidden;font-family:'Plus Jakarta Sans',-apple-system,sans-serif;
  display:flex;align-items:center;justify-content:center;
  padding:2rem 1.25rem;box-sizing:border-box;
  *,*::before,*::after{box-sizing:border-box;}
`;

const Card = styled.div`
  width:100%;max-width:580px;background:rgba(255,255,255,.025);
  border:1px solid rgba(255,255,255,.07);border-radius:24px;
  padding:3rem 2.5rem;text-align:center;
  animation:${fadeInUp} .6s ease forwards;
  @media(max-width:480px){padding:2rem 1.5rem;border-radius:20px;}
`;

const CheckCircle = styled.div`
  width:80px;height:80px;margin:0 auto 2rem;
  animation:${scalePop} .6s cubic-bezier(.4,0,.2,1) forwards;
  svg{width:80px;height:80px;}
  .circle{fill:none;stroke:#22c55e;stroke-width:3;
    stroke-dasharray:283;stroke-dashoffset:283;
    animation:${circleDraw} .8s ease forwards .3s;}
  .check{fill:none;stroke:#22c55e;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;
    stroke-dasharray:100;stroke-dashoffset:100;
    animation:${checkDraw} .5s ease forwards .8s;}
`;

const Title = styled.h1`
  font-size:clamp(1.5rem,3vw,2rem);font-weight:800;color:#fff;
  margin-bottom:.5rem;letter-spacing:-.02em;
`;

const Subtitle = styled.p`
  font-size:clamp(.9rem,1.5vw,1.05rem);color:rgba(255,255,255,.55);
  line-height:1.7;margin-bottom:2rem;max-width:440px;margin-left:auto;margin-right:auto;
`;

const OrderCard = styled.div`
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);
  border-radius:16px;padding:1.5rem;text-align:left;margin-bottom:1.5rem;
  animation:${fadeIn} .5s ease forwards .4s;opacity:0;
`;

const OrderLabel = styled.div`
  font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);
  margin-bottom:1rem;
`;

const OrderRow = styled.div`
  display:flex;justify-content:space-between;align-items:flex-start;
  padding:.6rem 0;border-bottom:1px solid rgba(255,255,255,.04);
  &:last-child{border-bottom:none;}
  .label{font-size:.85rem;color:rgba(255,255,255,.45);font-weight:500;}
  .value{font-size:.85rem;color:#fff;font-weight:600;text-align:right;max-width:60%;}
  @media(max-width:480px){
    flex-direction:column;gap:.2rem;
    .value{text-align:left;max-width:100%;}
  }
`;

const AmountRow = styled(OrderRow)`
  padding-top:1rem;margin-top:.5rem;border-top:1px solid rgba(255,222,89,.1);border-bottom:none;
  .value{color:#ffde59;font-size:1.1rem;font-weight:800;}
`;

const StepsSection = styled.div`
  text-align:left;margin-bottom:2rem;
  animation:${fadeIn} .5s ease forwards .6s;opacity:0;
`;

const StepsTitle = styled.div`
  font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);
  margin-bottom:1rem;
`;

const Step = styled.div`
  display:flex;align-items:flex-start;gap:.75rem;padding:.6rem 0;
  .num{width:28px;height:28px;min-width:28px;border-radius:8px;
    background:rgba(255,222,89,.06);color:#ffde59;font-size:.75rem;font-weight:700;
    display:flex;align-items:center;justify-content:center;}
  .text{font-size:.88rem;color:rgba(255,255,255,.65);line-height:1.5;
    strong{color:rgba(255,255,255,.9);font-weight:600;}}
`;

const ContactBar = styled.div`
  display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;
  margin-bottom:2rem;animation:${fadeIn} .5s ease forwards .8s;opacity:0;
  a{display:inline-flex;align-items:center;gap:.5rem;padding:.65rem 1.25rem;
    background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
    border-radius:10px;color:rgba(255,255,255,.7);font-size:.85rem;font-weight:500;
    text-decoration:none;transition:all .2s;
    &:hover{border-color:rgba(255,222,89,.2);color:#ffde59;}
    svg{width:16px;height:16px;color:#ffde59;}}
`;

const BackButton = styled.a`
  display:inline-block;padding:.85rem 2rem;font-size:.9rem;font-weight:700;
  color:#12360e;background:linear-gradient(135deg,#ffde59,#f5c842);
  border-radius:12px;text-decoration:none;transition:all .3s;
  box-shadow:0 4px 15px rgba(255,222,89,.2);
  animation:${fadeIn} .5s ease forwards 1s;opacity:0;
  &:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(255,222,89,.3);}
`;

const LoadingState = styled.div`
  text-align:center;color:rgba(255,255,255,.5);font-size:1rem;
  .spinner{width:40px;height:40px;border:3px solid rgba(255,222,89,.1);
    border-top-color:#ffde59;border-radius:50%;margin:0 auto 1.5rem;
    animation:spin .8s linear infinite;}
  @keyframes spin{to{transform:rotate(360deg)}}
`;

const ErrorState = styled.div`
  text-align:center;
  h2{font-size:1.3rem;color:#ff6b6b;margin-bottom:.75rem;}
  p{color:rgba(255,255,255,.5);font-size:.95rem;line-height:1.6;margin-bottom:1.5rem;}
`;

// ─── Component ─────────────────────────────────────────────
const ThankYou = () => {
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | success | error
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    if (!sessionId) {
      setStatus('error');
      return;
    }

    fetch(`/api/verify-session/${sessionId}`)
      .then(res => res.json())
      .then(data => {
        if (data.order) {
          setOrder(data.order);
          setStatus('success');

          // Send confirmation email via EmailJS
          if (!emailSent && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID') {
            sendConfirmationEmail(data.order);
          }
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));

    // Clean URL
    window.history.replaceState({}, '', window.location.pathname);
  }, []);

  const sendConfirmationEmail = (orderData) => {
    const addr = orderData.shippingAddress;
    const addressHtml = addr
      ? `${orderData.shippingName}<br>${addr.line1}${addr.line2 ? '<br>' + addr.line2 : ''}<br>${addr.city}, ${addr.state} ${addr.postal_code}`
      : 'Address on file';

    const templateParams = {
      to_email: orderData.customerEmail,
      customer_name: orderData.customerName || 'there',
      order_id: orderData.id,
      package_name: orderData.packageName,
      amount: `$${(orderData.amount / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      shipping_address: addressHtml,
      customer_phone: orderData.customerPhone || '',
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        console.log('✅ Confirmation email sent');
        setEmailSent(true);
      })
      .catch((err) => {
        console.error('❌ EmailJS error:', err);
      });
  };

  const formatCurrency = (cents) =>
    `$${(cents / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const formatAddress = (addr, name) => {
    if (!addr) return 'On file';
    return `${name || ''}\n${addr.line1}${addr.line2 ? ', ' + addr.line2 : ''}\n${addr.city}, ${addr.state} ${addr.postal_code}`;
  };

  if (status === 'loading') {
    return (
      <PageWrapper>
        <Card>
          <LoadingState>
            <div className="spinner" />
            Confirming your order...
          </LoadingState>
        </Card>
      </PageWrapper>
    );
  }

  if (status === 'error') {
    return (
      <PageWrapper>
        <Card>
          <ErrorState>
            <h2>Something went wrong</h2>
            <p>We couldn't verify your order, but don't worry — if you were charged, your order is safe. Please contact us and we'll sort it out.</p>
            <ContactBar style={{ animation: 'none', opacity: 1 }}>
              <a href="tel:+15053524674">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                (505) 352-4674
              </a>
              <a href="mailto:nmoffgridsolar@gmail.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                nmoffgridsolar@gmail.com
              </a>
            </ContactBar>
            <BackButton href="/solarpackage">Back to Solar Packages</BackButton>
          </ErrorState>
        </Card>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Card>
        <CheckCircle>
          <svg viewBox="0 0 100 100">
            <circle className="circle" cx="50" cy="50" r="45" />
            <polyline className="check" points="30,52 45,67 72,35" />
          </svg>
        </CheckCircle>

        <Title>Order Confirmed!</Title>
        <Subtitle>
          Thank you, {order.customerName?.split(' ')[0] || 'friend'}! Your {order.packageName} Solar Package
          is being prepared. You'll receive a confirmation email shortly.
        </Subtitle>

        <OrderCard>
          <OrderLabel>Order Summary</OrderLabel>
          <OrderRow>
            <span className="label">Order ID</span>
            <span className="value" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '.8rem' }}>{order.id}</span>
          </OrderRow>
          <OrderRow>
            <span className="label">Package</span>
            <span className="value">{order.packageName} Solar Package</span>
          </OrderRow>
          <OrderRow>
            <span className="label">Email</span>
            <span className="value">{order.customerEmail}</span>
          </OrderRow>
          {order.customerPhone && (
            <OrderRow>
              <span className="label">Phone</span>
              <span className="value">{order.customerPhone}</span>
            </OrderRow>
          )}
          {order.shippingAddress && (
            <OrderRow>
              <span className="label">Ship to</span>
              <span className="value" style={{ whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                {formatAddress(order.shippingAddress, order.shippingName)}
              </span>
            </OrderRow>
          )}
          <AmountRow>
            <span className="label">Total</span>
            <span className="value">{formatCurrency(order.amount)}</span>
          </AmountRow>
        </OrderCard>

        <StepsSection>
          <StepsTitle>What Happens Next</StepsTitle>
          <Step>
            <div className="num">1</div>
            <div className="text"><strong>Order review</strong> — Our team confirms your order within 24 hours</div>
          </Step>
          <Step>
            <div className="num">2</div>
            <div className="text"><strong>Delivery call</strong> — We'll call to confirm freight delivery details</div>
          </Step>
          <Step>
            <div className="num">3</div>
            <div className="text"><strong>Equipment ships</strong> — Palletized freight within 5–7 business days</div>
          </Step>
          <Step>
            <div className="num">4</div>
            <div className="text"><strong>Build support</strong> — We schedule your first video call walkthrough</div>
          </Step>
        </StepsSection>

        <ContactBar>
          <a href="tel:+15053524674">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (505) 352-4674
          </a>
          <a href="mailto:nmoffgridsolar@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email Us
          </a>
        </ContactBar>

        <BackButton href="/">Back to Home</BackButton>
      </Card>
    </PageWrapper>
  );
};

export default memo(ThankYou);