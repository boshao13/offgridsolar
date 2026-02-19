import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Styled Components
const Section = styled.section`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #12360e 0%, #1a4a14 50%, #12360e 100%);
  overflow: hidden;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 222, 89, 0.08) 0%, transparent 70%);
  animation: ${float} 6s ease-in-out infinite;

  &:nth-child(1) {
    width: 400px;
    height: 400px;
    top: -100px;
    left: -100px;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: -50px;
    right: -50px;
    animation-delay: -2s;
  }

  &:nth-child(3) {
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -4s;
  }
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
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.8;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled.div`
  position: relative;
  padding: 2rem;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffde59, #f5c842);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 222, 89, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 60px rgba(255, 222, 89, 0.05);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 14px;
  margin-bottom: 1.25rem;

  svg {
    width: 26px;
    height: 26px;
    color: #ffde59;
  }

  @media (max-width: 640px) {
    margin: 0 auto 1.25rem;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
`;

const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 5rem;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 222, 89, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 50px;
    background: linear-gradient(180deg, transparent, rgba(255, 222, 89, 0.2), transparent);

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StatNumber = styled.div`
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffde59;
  line-height: 1;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

// Icons
const IndependenceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const SavingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
);

const SustainabilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const ReliabilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const PrivacyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const ValueIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

// Benefits Data
const benefits = [
  {
    icon: IndependenceIcon,
    title: 'True Independence',
    description: 'No utility bills, no grid dependency. Generate your own power and live on your own terms.',
  },
  {
    icon: SavingsIcon,
    title: 'Long-Term Savings',
    description: 'After initial investment, your monthly costs drop dramatically. No electric or water bills.',
  },
  {
    icon: ReliabilityIcon,
    title: 'Reliable Systems',
    description: 'Modern off-grid technology is proven and dependable, designed to last for decades.',
  },
  {
    icon: SustainabilityIcon,
    title: 'Sustainable Living',
    description: 'Reduce your carbon footprint and live in harmony with the land using clean energy.',
  },
  {
    icon: PrivacyIcon,
    title: 'Privacy & Peace',
    description: 'Build away from crowded subdivisions. Enjoy the quiet of your own remote sanctuary.',
  },
  {
    icon: ValueIcon,
    title: 'Property Value',
    description: 'Developed off-grid land with infrastructure is worth significantly more than raw land.',
  },
];

const stats = [
  { number: '$0', label: 'Monthly Utility Bills' },
  { number: '25+', label: 'Year System Lifespan' },
  { number: '100%', label: 'Energy Independence' },
  { number: '✓', label: 'Incentives Available' },
];

const WhyOffGrid = () => {
  return (
    <Section id="why-off-grid">
      <BackgroundOrbs>
        <Orb />
        <Orb />
        <Orb />
      </BackgroundOrbs>
      <Container>
        <Header>
          <Eyebrow>The Off-Grid Lifestyle</Eyebrow>
          <Title>
            Why Go <span>Off-Grid?</span>
          </Title>
          <Subtitle>
            More than just a trend — it's a lifestyle choice that offers freedom, 
            savings, and a deeper connection to the land you call home.
          </Subtitle>
        </Header>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <IconWrapper>
                <benefit.icon />
              </IconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <StatsBar>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsBar>
      </Container>
    </Section>
  );
};

export default memo(WhyOffGrid);