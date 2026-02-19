import React from 'react';
import styled from 'styled-components';
import logo from './assets/ogslogoblack2.webp'; // Replace with your actual logo path

// Styled Components
const PrintContainer = styled.div`
  font-family: 'Roboto', Arial, sans-serif; /* Modern font */
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid #12360e;
  border-radius: 8px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  color: #333333;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  height: 40px; /* Smaller logo */
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  color: #12360e;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555555;
  margin: 0;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #333333;
    line-height: 1.6;
  }

  strong {
    color: #12360e;
  }
`;

const FactsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-left: 5px solid #12360e;
  margin: 2rem 0;

  h3 {
    color: #12360e;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #333333;
  }
`;

const ContactSection = styled.div`
  background-color: #12360e;
  color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  a {
    color: #ffde59;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BatteryPrint = ({ address, dailyKwh, batteriesRequired }) => {
  return (
    <PrintContainer>
      <Header>
        <Logo src={logo} alt="Company Logo" />
        <Title>Your Off-Grid Energy Solution</Title>
        <Subtitle>Reliable, long-lasting, and tailored for your lifestyle</Subtitle>
      </Header>
      <Section>
  <p><strong>Address:</strong> {address}</p>
  <p><strong>Daily Energy Usage:</strong> {dailyKwh.toFixed(2)} kWh</p>
  <p><strong>Battery Type:</strong> LiFePO4 (Lithium Iron Phosphate)</p>
  <p>
    <strong>Recommended Quantity:</strong> {batteriesRequired} x 14.3 kWh LiFePO4 Batteries
  </p>
</Section>

      <FactsContainer>
        <h3>Why LiFePO4 Batteries are Perfect for Off-Grid Living</h3>
        <p>✅ Longer lifespan with up to 8000+ cycles at 80% Depth of Discharge (DoD).</p>
        <p>✅ High energy density ensures more storage in less space.</p>
        <p>✅ Integrated self-heating for optimal performance in all climates.</p>
        <p>✅ Lightweight and maintenance-free compared to lead-acid alternatives.</p>
        <p>✅ Safer operation with UL-certified safety standards.</p>
      </FactsContainer>

      <ContactSection>
        <p><strong>Contact Us Today</strong></p>
        <p>Phone: <a href="tel:5053524674">505-352-4674</a></p>
        <p>Email: <a href="mailto:nmoffgridsolar@gmail.com">nmoffgridsolar@gmail.com</a></p>
        <p>Website: <a href="https://www.nmoffgridsolar.com" target="_blank" rel="noopener noreferrer">www.nmoffgridsolar.com</a></p>
      </ContactSection>
    </PrintContainer>
  );
};

export default BatteryPrint;
