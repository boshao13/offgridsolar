import React from 'react';
import NavBar from './NavBar'; // Ensure the path is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BatteryCalculator from './BatteryCalculator'; // Placeholder for your components
import Contact from './Contact';
import FAQ from './FAQ';
import MainComponent from './MainComponent';
import styled from 'styled-components'; // Assuming you have this imported for styling

// If you have additional content sections, you can define and style them here
const MainContent = styled.main`
  // Style adjustments for main content container, if needed
`;

const RouterPage = () => {
    return (
      <MainContent>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/battery-calculator" element={<BatteryCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </MainContent>
    );
  };
  
  export default RouterPage;
