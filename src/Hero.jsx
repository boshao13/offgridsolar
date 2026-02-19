import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroVideo from './assets/heromovieedited-optimized.webm';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// Styled Components
const MainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 54, 14, 0.75) 0%,
    rgba(18, 54, 14, 0.5) 50%,
    rgba(18, 54, 14, 0.85) 100%
  );
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 2rem;
`;

const Tagline = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.2s;
  
  &::before,
  &::after {
    content: '—';
    margin: 0 0.75rem;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
`;

const HeroHeadline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.4s;
  
  span {
    color: #ffde59;
  }
`;

const HeroSubheadline = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 650px;
  margin: 0 auto 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.6s;
`;

const ServicePills = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.8s;
`;

const Pill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;

  svg {
    width: 18px;
    height: 18px;
    color: #ffde59;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 1s;
`;

const CTAButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #ffffff;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #ffde59;
    color: #ffde59;
    background: rgba(255, 222, 89, 0.1);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease forwards 1.4s;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ScrollLine = styled.div`
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #ffde59, transparent);
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Icons
const SolarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const WellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v6M12 22v-6M4.93 10.93l1.41 1.41M17.66 10.93l-1.41 1.41"/>
    <path d="M2 12h2M20 12h2"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 15v7"/>
  </svg>
);

const SepticIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="10" rx="2"/>
    <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2"/>
    <path d="M12 18v4M8 22h8"/>
  </svg>
);

const Hero = ({ scrollToContact }) => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/webm" />
      </BackgroundVideo>
      
      <Overlay />
      
      <Content>
        <Tagline>New Mexico's Off-Grid Specialists</Tagline>
        
        <HeroHeadline>
          Turn Raw Land into <span>Your Off-Grid Home</span>
        </HeroHeadline>
        
        <HeroSubheadline>
          We transform remote properties into fully functional, self-sufficient 
          homesteads. From well drilling to solar power to septic systems — 
          everything you need to live off the grid.
        </HeroSubheadline>

        <ServicePills>
          <Pill>
            <SolarIcon />
            Solar Power Systems
          </Pill>
          <Pill>
            <WellIcon />
            Well Drilling
          </Pill>
          <Pill>
            <SepticIcon />
            Septic Installation
          </Pill>
        </ServicePills>
        
        <ButtonGroup>
          <CTAButton onClick={scrollToContact}>
            Start Your Project
          </CTAButton>
          <SecondaryButton onClick={() => navigate('/solarpackage')}>
            Solar Packages
          </SecondaryButton>
        </ButtonGroup>
      </Content>

      <ScrollIndicator >
        <span>Explore</span>
        <ScrollLine />
      </ScrollIndicator>
    </MainContainer>
  );
};

export default memo(Hero);
