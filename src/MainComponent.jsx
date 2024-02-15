// HeroSection.js
import React from 'react';
import styled from 'styled-components';
import BatteryInfo from './BatteryInfo';
// Styled components for the hero section
const MainContainer = styled.section`
  display: flex;
  flex-direction: column; // This stacks children vertically
  justify-content: center; // This centers children vertically in the container
  align-items: center; // This centers children horizontally in the container
  height: 100vh;
  background-image: url('/path-to-your-background-image.jpg'); // Add your background image path here
  background-size: cover;
  background-position: center;
  text-align: center; // Ensures that the text inside the container is centered
  color: white;
  width: 100%; // Ensure the container takes full width
`;


const HeroHeadline = styled.h1`
  font-size: 3rem; // Adjust based on your design
  margin: 0.5rem 0;
`;

const HeroSubheadline = styled.p`
  font-size: 1.5rem; // Adjust based on your design
  margin: 0.5rem 0;
  max-width: 600px; // Keeps the text readable
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #333; // Adjust button text color
  background-color: #ffd700; // Adjust button background color
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cca600; // Darken button on hover
  }
`;

const MainComponent = () => {
  return (
    <>
    <MainContainer>
      <HeroHeadline>Empower Your Home with Solar Energy</HeroHeadline>
      <HeroSubheadline>Reduce your energy bills and increase your sustainability with our off-grid solar solutions.</HeroSubheadline>
      <CTAButton>Get a Quote Today</CTAButton>
    </MainContainer>
    <BatteryInfo/>
    </>
  );
};

export default MainComponent;
