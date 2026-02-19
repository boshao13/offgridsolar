import React, { useState, useEffect, memo } from 'react';
import styled, { keyframes } from 'styled-components';

// ─── Animations ────────────────────────────────────────────
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// ─── Layout ────────────────────────────────────────────────
const AdminWrapper = styled.div`
  min-height: 100vh;
  background: #0d1b0a;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const LoginScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(165deg, #0a1f08 0%, #12360e 50%, #0f2b0b 100%);
`;

const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

const LoginTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
`;

const LoginSubtitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1.25rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  margin-bottom: 1rem;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    border-color: #ffde59;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  color: #12360e;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(255, 222, 89, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

// ─── Dashboard Layout ──────────────────────────────────────
const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 640px) {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

const Logo = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;

  span {
    color: #ffde59;
  }
`;

const LogoutBtn = styled.button`
  padding: 0.5rem 1.25rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }
`;

const DashContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

// ─── Stats ─────────────────────────────────────────────────
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.25rem;

  .label {
    font-size: 0.8rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.45);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #ffffff;
  }

  .value.revenue {
    color: #ffde59;
  }
`;

// ─── Filters ───────────────────────────────────────────────
const FilterBar = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterPill = styled.button`
  padding: 0.5rem 1rem;
  background: ${({ $active }) => $active ? 'rgba(255, 222, 89, 0.15)' : 'rgba(255, 255, 255, 0.04)'};
  border: 1px solid ${({ $active }) => $active ? 'rgba(255, 222, 89, 0.3)' : 'rgba(255, 255, 255, 0.08)'};
  color: ${({ $active }) => $active ? '#ffde59' : 'rgba(255, 255, 255, 0.6)'};
  border-radius: 50px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 222, 89, 0.2);
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  color: #ffffff;
  font-size: 0.85rem;
  outline: none;

  &:focus {
    border-color: rgba(255, 222, 89, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;

// ─── Orders Table ──────────────────────────────────────────
const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 0.85rem 1.25rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
`;

const Td = styled.td`
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
`;

const Tr = styled.tr`
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: capitalize;

  ${({ $status }) => {
    switch ($status) {
      case 'paid':
        return 'background: rgba(255, 222, 89, 0.15); color: #ffde59;';
      case 'shipped':
        return 'background: rgba(89, 165, 255, 0.15); color: #59a5ff;';
      case 'delivered':
        return 'background: rgba(89, 255, 130, 0.15); color: #59ff82;';
      default:
        return 'background: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.5);';
    }
  }}
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.95rem;
`;

// ─── Order Detail Drawer ───────────────────────────────────
const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const Drawer = styled.div`
  width: 100%;
  max-width: 480px;
  background: #111f0e;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;

  &:hover { color: #ffffff; }
`;

const DetailSection = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
  }
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.9rem;

  .label { color: rgba(255, 255, 255, 0.5); }
  .value { color: #ffffff; font-weight: 500; }
`;

const DetailDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: 0.5rem 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.7rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  margin-bottom: 0.75rem;

  &:focus { border-color: #ffde59; }

  option { background: #1a2e16; color: #ffffff; }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.7rem 1rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  box-sizing: border-box;

  &:focus { border-color: #ffde59; }

  &::placeholder { color: rgba(255, 255, 255, 0.25); }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  color: #12360e;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);
  }

  &:disabled { opacity: 0.5; cursor: wait; }
`;

const MobileHidden = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

// ─── Component ─────────────────────────────────────────────
const API_BASE = '/api';

const AdminDashboard = () => {
  const [token, setToken] = useState(localStorage.getItem('admin_token') || '');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({});
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editData, setEditData] = useState({});
  const [saving, setSaving] = useState(false);

  // ── Auth ──
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      localStorage.setItem('admin_token', data.token);
      setToken(data.token);
    } catch (err) {
      setLoginError(err.message || 'Login failed');
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setToken('');
    setOrders([]);
  };

  // ── Fetch Orders ──
  const fetchOrders = async () => {
    try {
      const params = new URLSearchParams();
      if (filter !== 'all') params.set('status', filter);
      if (search) params.set('search', search);

      const res = await fetch(`${API_BASE}/admin/orders?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) return logout();
      const data = await res.json();
      setOrders(data.orders || []);
      setStats(data.stats || {});
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token, filter, search]);

  // ── Order Detail ──
  const openOrder = (order) => {
    setSelectedOrder(order);
    setEditData({
      status: order.status,
      trackingNumber: order.trackingNumber || '',
      notes: order.notes || '',
    });
  };

  const saveOrder = async () => {
    if (!selectedOrder) return;
    setSaving(true);

    try {
      const res = await fetch(`${API_BASE}/admin/orders/${selectedOrder.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editData),
      });

      if (res.ok) {
        const updated = await res.json();
        setSelectedOrder(updated);
        fetchOrders();
      }
    } catch (err) {
      console.error('Save error:', err);
    } finally {
      setSaving(false);
    }
  };

  const formatCurrency = (cents) =>
    `$${(cents / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });

  // ── Idle Auto-Logout (30 min) ──
  useEffect(() => {
    if (!token) return;
    let idleTimer;
    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { logout(); }, 30 * 60 * 1000);
    };
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(e => window.addEventListener(e, resetIdle));
    resetIdle();
    return () => {
      clearTimeout(idleTimer);
      events.forEach(e => window.removeEventListener(e, resetIdle));
    };
  }, [token]);

  // ── Login Screen (stealth — no branding) ──
  if (!token) {
    return (
      <LoginScreen>
        <LoginCard>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,222,89,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffde59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
          </div>
          {loginError && <ErrorMsg>{loginError}</ErrorMsg>}
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="ID"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              autoComplete="off"
              spellCheck="false"
            />
            <Input
              type="password"
              placeholder="Key"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              autoComplete="off"
            />
            <LoginButton type="submit" disabled={loginLoading}>
              {loginLoading ? '...' : 'Go'}
            </LoginButton>
          </form>
        </LoginCard>
      </LoginScreen>
    );
  }

  // ── Dashboard ──
  return (
    <AdminWrapper>
      <TopBar>
        <Logo>
          Off Grid <span>Solar Orders</span>
        </Logo>
        <LogoutBtn onClick={logout}>Sign Out</LogoutBtn>
      </TopBar>

      <DashContent>
        {/* Stats */}
        <StatsGrid>
          <StatCard>
            <div className="label">Total Orders</div>
            <div className="value">{stats.total || 0}</div>
          </StatCard>
          <StatCard>
            <div className="label">Awaiting Ship</div>
            <div className="value">{stats.paid || 0}</div>
          </StatCard>
          <StatCard>
            <div className="label">Shipped</div>
            <div className="value">{stats.shipped || 0}</div>
          </StatCard>
          <StatCard>
            <div className="label">Revenue</div>
            <div className="value revenue">{formatCurrency(stats.totalRevenue || 0)}</div>
          </StatCard>
        </StatsGrid>

        {/* Filters */}
        <FilterBar>
          {['all', 'paid', 'shipped', 'delivered'].map((s) => (
            <FilterPill key={s} $active={filter === s} onClick={() => setFilter(s)}>
              {s === 'all' ? 'All Orders' : s.charAt(0).toUpperCase() + s.slice(1)}
            </FilterPill>
          ))}
          <SearchInput
            placeholder="Search orders, names, emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FilterBar>

        {/* Table */}
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Order</Th>
                <Th>Customer</Th>
                <Th><MobileHidden>Package</MobileHidden></Th>
                <Th>Amount</Th>
                <Th>Status</Th>
                <Th><MobileHidden>Date</MobileHidden></Th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <Td colSpan={6}>
                    <EmptyState>
                      {search ? 'No orders match your search' : 'No orders yet — they\'ll appear here after the first purchase'}
                    </EmptyState>
                  </Td>
                </tr>
              ) : (
                orders.map((order) => (
                  <Tr key={order.id} onClick={() => openOrder(order)}>
                    <Td style={{ fontWeight: 600, fontFamily: 'monospace', fontSize: '0.82rem' }}>{order.id}</Td>
                    <Td>
                      <div>{order.customerName}</div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{order.customerEmail}</div>
                    </Td>
                    <Td><MobileHidden>{order.packageName}</MobileHidden></Td>
                    <Td style={{ fontWeight: 600 }}>{formatCurrency(order.amount)}</Td>
                    <Td><StatusBadge $status={order.status}>{order.status}</StatusBadge></Td>
                    <Td style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                      <MobileHidden>{formatDate(order.createdAt)}</MobileHidden>
                    </Td>
                  </Tr>
                ))
              )}
            </tbody>
          </Table>
        </TableWrapper>
      </DashContent>

      {/* Order Detail Drawer */}
      {selectedOrder && (
        <DrawerOverlay onClick={(e) => e.target === e.currentTarget && setSelectedOrder(null)}>
          <Drawer>
            <DrawerHeader>
              <h2>{selectedOrder.id}</h2>
              <CloseBtn onClick={() => setSelectedOrder(null)}>×</CloseBtn>
            </DrawerHeader>

            <DetailSection>
              <h4>Order Info</h4>
              <DetailRow>
                <span className="label">Package</span>
                <span className="value">{selectedOrder.packageName} Solar Package</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Amount</span>
                <span className="value" style={{ color: '#ffde59' }}>
                  {formatCurrency(selectedOrder.amount)}
                </span>
              </DetailRow>
              <DetailRow>
                <span className="label">Ordered</span>
                <span className="value">{formatDate(selectedOrder.createdAt)}</span>
              </DetailRow>
              {selectedOrder.shippedAt && (
                <DetailRow>
                  <span className="label">Shipped</span>
                  <span className="value">{formatDate(selectedOrder.shippedAt)}</span>
                </DetailRow>
              )}
            </DetailSection>

            <DetailDivider />

            <DetailSection>
              <h4>Customer</h4>
              <DetailRow>
                <span className="label">Name</span>
                <span className="value">{selectedOrder.customerName}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Email</span>
                <span className="value">{selectedOrder.customerEmail}</span>
              </DetailRow>
              <DetailRow>
                <span className="label">Phone</span>
                <span className="value">{selectedOrder.customerPhone || '—'}</span>
              </DetailRow>
            </DetailSection>

            <DetailDivider />

            <DetailSection>
              <h4>Shipping Address</h4>
              {selectedOrder.shippingAddress ? (
                <>
                  <DetailRow>
                    <span className="value">{selectedOrder.shippingName}</span>
                  </DetailRow>
                  <DetailRow>
                    <span className="value" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {selectedOrder.shippingAddress.line1}
                      {selectedOrder.shippingAddress.line2 && <><br />{selectedOrder.shippingAddress.line2}</>}
                      <br />
                      {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.postal_code}
                    </span>
                  </DetailRow>
                </>
              ) : (
                <DetailRow><span className="value">No address on file</span></DetailRow>
              )}
            </DetailSection>

            <DetailDivider />

            <DetailSection>
              <h4>Update Order</h4>
              <Select
                value={editData.status}
                onChange={(e) => setEditData({ ...editData, status: e.target.value })}
              >
                <option value="paid">Paid — Awaiting Shipment</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </Select>

              <Input
                placeholder="Tracking number"
                value={editData.trackingNumber}
                onChange={(e) => setEditData({ ...editData, trackingNumber: e.target.value })}
                style={{ marginBottom: '0.75rem' }}
              />

              <TextArea
                placeholder="Internal notes..."
                value={editData.notes}
                onChange={(e) => setEditData({ ...editData, notes: e.target.value })}
              />

              <SaveButton onClick={saveOrder} disabled={saving}>
                {saving ? 'Saving...' : 'Save Changes'}
              </SaveButton>
            </DetailSection>
          </Drawer>
        </DrawerOverlay>
      )}
    </AdminWrapper>
  );
};

export default memo(AdminDashboard);