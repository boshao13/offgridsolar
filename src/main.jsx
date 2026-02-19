import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import BatteryCalculator from './BatteryCalculator.jsx';
import BatteryPrint from './BatteryPrint.jsx'; // Import BatteryPrint
import FAQ from './FAQ.jsx';
import Contact from './Contact.jsx';
import NavBar from './NavBar.jsx'; // Import NavBar
import Footer from './Footer.jsx'; // Import Footer


// Layout Wrapper for Contact Page
const ContactPageLayout = () => (
  <>
    <NavBar />
    <Contact />
    <Footer />
  </>
);

// Layout Wrapper for BatteryPrint Page
const BatteryPrintLayout = () => (
  <>
    <NavBar />
    <BatteryPrint />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/battery-calculator',
    element: <BatteryCalculator />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
