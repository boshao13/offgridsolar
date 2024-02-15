import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import solarbattery from './assets/solarbattery.jpeg'
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  align-items: center; // Center children horizontally
  padding: 2rem;
  justify-content:center;
  gap: 2rem;
  height:100vh;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 500px; // Adjust based on your preference
    height: auto;
  }
`;

const TextColumn = styled.div`
  flex: 1;
`;

const Header = styled.h2`
  font-size: 2.4rem;
  color: #004d99;
  text-align: center; // Center the header text
`;

const SubHeader = styled.h3`
  font-size: 1.8rem;
  color: #0073e6;
  margin-bottom: 0.5rem;
`;

const CTAButton = styled(NavLink)`
  padding: 1rem 2rem;
  background-color: #ff9900; // Eye-popping color
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 8px;
  &:hover {
    background-color: #cc7a00;
  }
`;

const BatteryInfo = () => {
  return (
    <InfoContainer>
      <Header>The Battery Matters</Header>
      <ColumnsContainer>
        <ImageColumn>
          <img src={solarbattery} alt="Solar Battery" />
        </ImageColumn>
        <TextColumn>
          <SubHeader>Long Life Cycle</SubHeader>
          <SubHeader>High Energy Density</SubHeader>
          <SubHeader>Safe and Reliable</SubHeader>
        </TextColumn>
      </ColumnsContainer>
      <CTAButton to="/battery-calculator">Calculate Your Electrical Load</CTAButton>
    </InfoContainer>
  );
};

export default BatteryInfo;
