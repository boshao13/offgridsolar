import React from 'react';
import styled from 'styled-components';
import batteryImage from './assets/eg4battery.png';
import { useNavigate } from 'react-router-dom';

// Styled components
const BatteryRecommendationContainer = styled.div`
  margin: 0; /* Remove outer margin to avoid white edges */
  background-color: #12360e; /* Green background */
  border-radius: 0; /* Remove border-radius for full-width */

  box-sizing: border-box; /* Padding included in width */
`;

const ContentWrapper = styled.div`
  max-width: 1200px; /* Keeps content centered and readable */
  margin: 0 auto; /* Centers content horizontally */
`;

const SubHeading = styled.h3`
  color: white; /* Lighter yellow for emphasis */
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem; /* Add a small margin on top */
    margin-left: auto; /* Center align horizontally */
    margin-right: auto;
    width: 90%; /* Reduce the width on smaller screens */
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically by default */
  align-items: center;
  gap: 2rem; /* Reduced gap for cleaner layout */
  margin-top: 1rem;
`;

const BatteryImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  justify-content: center; /* Center align the battery images */
  gap: 1.5rem; /* Uniform gap */
`;

const BatteryImage = styled.img`
  width: 120px; /* Default size for web view */
  height: auto;
  background-color: white; /* White background for battery images */
  border-radius: 8px;
  border: 2px solid #ffde59; /* Yellow border for battery images */
  padding: 0.5rem; /* Add padding to ensure the image doesn't touch the border */

  @media (max-width: 768px) {
    width: ${({ batteriesRequired }) =>
      batteriesRequired === 1 ? '80vw' : '90px'}; /* Larger image if only one battery is recommended */
  }
`;

const BulletPointsContainer = styled.div`
  text-align: center; /* Center-align the bullet points container */
  margin-top: 1rem; /* Space above the bullet points */
`;

const BulletPoints = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin: 0 auto; /* Center-align the bullet points */
  max-width: 500px; /* Limit width for readability */

  li {
    font-size: 1rem;
    margin-bottom: 0.5rem; /* Reduced gap between bullet points */
    color: #ffde59; /* Yellow text for bullet points */
    text-align: left; /* Align text to the left */
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: #ffde59; /* Yellow button background */
    color: #12360e; /* Green text for button */
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6cd4e; /* Slightly darker yellow on hover */
    }
  }
`;

const BatteryRecommendation = ({ batteriesRequired, handlePrint }) => {
  const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    sessionStorage.setItem('scrollToContact', 'true'); // Persist scroll intent
    navigate('/'); // Navigate to the homepage
  };

  return (
    <BatteryRecommendationContainer>
      <ContentWrapper>
        <h2 style={{ color: '#ffde59', fontSize: '2rem', textAlign: 'center' }}>Battery Recommendation</h2>
        <SubHeading>
          Discover your optimal battery setup for reliable off-grid power. Print this page or get a
          quote to secure your energy independence today!
        </SubHeading>
        <ColumnsContainer>
          <BatteryImagesContainer batteriesRequired={batteriesRequired}>
            {Array.from({ length: batteriesRequired }, (_, index) => (
              <BatteryImage
                key={index}
                src={batteryImage}
                alt="Battery"
                batteriesRequired={batteriesRequired}
              />
            ))}
          </BatteryImagesContainer>
          <BulletPointsContainer>
            <BulletPoints>
              <li>Battery Type: LiFePO4 (Lithium Iron Phosphate)</li>
              <li>Capacity per Battery: 14.3 kWh</li>
              <li>Recommended Quantity: {batteriesRequired}</li>
            </BulletPoints>
          </BulletPointsContainer>
        </ColumnsContainer>
        <ButtonContainer>
          <button onClick={handlePrint}>Print Summary</button>
          <button onClick={handleGetQuoteClick}>Get a Quote</button>
        </ButtonContainer>
      </ContentWrapper>
    </BatteryRecommendationContainer>
  );
};

export default BatteryRecommendation;
