import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import SolarPackages from './SolarPackages.jsx';
import AdminDashboard from './AdminDashboard.jsx';
import ThankYou from './ThankYou.jsx';

// Layout Wrapper for Solar Packages Page
const SolarPackagesLayout = () => (
  <div style={{ overflowX: 'hidden', width: '100%', minHeight: '100vh' }}>
    <NavBar />
    <SolarPackages />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/solarpackage',
    element: <SolarPackagesLayout />,
  },
  {
    path: '/order-confirmed',
    element: <ThankYou />,
  },
  {
    path: '/nm-ops-7x2k',
    element: <AdminDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);