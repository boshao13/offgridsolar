import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Section = styled.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0d2a0a 0%, #12360e 50%, #0d2a0a 100%);
  overflow: hidden;
`;

const BackgroundAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(ellipse at 20% 0%, rgba(255, 222, 89, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(255, 222, 89, 0.03) 0%, transparent 50%);
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Eyebrow = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #ffde59;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryContent = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  strong {
    color: #ffde59;
    font-weight: 600;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 968px) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 222, 89, 0.2);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffde59;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 222, 89, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 16px;

  svg {
    width: 28px;
    height: 28px;
    color: #ffde59;
  }
`;

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
`;

const ValueDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAButton = styled.button`
  padding: 1.1rem 2.8rem;
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
`;

// Icons
const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const LocalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const TurnkeyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

const Mission = ({ onContactClick }) => {
  return (
    <Section id="about">
      <BackgroundAccent />
      <Container>
        <Header>
          <Eyebrow>Who We Are</Eyebrow>
          <Title>
            New Mexico's Trusted <span>Off-Grid Experts</span>
          </Title>
          <Subtitle>
            A small, dedicated team with deep roots in the Land of Enchantment — 
            helping families achieve true independence on their own land.
          </Subtitle>
        </Header>

        <ContentGrid>
          <StoryContent>
            <Paragraph>
              <strong>Off Grid Land Development</strong> was born from a simple belief: 
              everyone deserves the freedom to live on their own terms. We've spent over 
              two decades mastering the art of off-grid living in New Mexico's diverse 
              and challenging terrain.
            </Paragraph>
            <Paragraph>
              Unlike big contractors who treat off-grid as an afterthought, it's 
              <strong> all we do</strong>. We understand the unique demands of remote 
              properties — from the high desert plains to mountain valleys. Every well 
              we drill, every solar panel we install, every septic system we design is 
              built for reliability when you're miles from the nearest utility line.
            </Paragraph>
            <Paragraph>
              We're not just building infrastructure. We're helping you build a life 
              of independence, sustainability, and connection to the land.
            </Paragraph>
          </StoryContent>

          <StatsGrid>
            <StatCard>
              <StatNumber>20+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>500+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>Off-Grid Focused</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>NM</StatNumber>
              <StatLabel>Statewide Service</StatLabel>
            </StatCard>
          </StatsGrid>
        </ContentGrid>

        <ValuesGrid>
          <ValueCard>
            <IconWrapper>
              <ExperienceIcon />
            </IconWrapper>
            <ValueTitle>Deep Expertise</ValueTitle>
            <ValueDescription>
              Two decades of specialized experience in off-grid solar, well drilling, 
              and septic systems across New Mexico's toughest terrain.
            </ValueDescription>
          </ValueCard>

          <ValueCard>
            <IconWrapper>
              <LocalIcon />
            </IconWrapper>
            <ValueTitle>Truly Local</ValueTitle>
            <ValueDescription>
              We live here, we work here, and we understand the unique challenges 
              of building off-grid in the Land of Enchantment.
            </ValueDescription>
          </ValueCard>

          <ValueCard>
            <IconWrapper>
              <TurnkeyIcon />
            </IconWrapper>
            <ValueTitle>Turnkey Solutions</ValueTitle>
            <ValueDescription>
              One team, one vision. We handle your entire project from raw land 
              to move-in ready — no juggling multiple contractors.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>

        <CTAWrapper>
          <CTAButton onClick={onContactClick}>
            Let's Build Your Off-Grid Dream
          </CTAButton>
        </CTAWrapper>
      </Container>
    </Section>
  );
};

export default memo(Mission);