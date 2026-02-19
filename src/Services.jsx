import React, { memo, useState } from 'react';
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

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

// Styled Components
const Section = styled.section`
  position: relative;
  padding: 8rem 2rem;
  background: #12360e;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top:-50px;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ServiceCard = styled.div`
  position: relative;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || '#ffde59'};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.$accentColor || '#ffde59'}40;
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.4),
      0 0 100px ${props => props.$accentColor || '#ffde59'}10;

    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$bgColor || 'rgba(255, 222, 89, 0.1)'};
  border-radius: 20px;
  margin-bottom: 1.75rem;

  svg {
    width: 32px;
    height: 32px;
    color: ${props => props.$iconColor || '#ffde59'};
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 1.75rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0.75rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: ${props => props.$checkColor || '#ffde59'};
    margin-top: 2px;
  }
`;

const LearnMoreLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.$linkColor || '#ffde59'};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    gap: 0.75rem;

    svg {
      transform: translateX(4px);
    }
  }
`;

// Process Section
const ProcessSection = styled.div`
  margin-top: 2rem;
`;

const ProcessTitle = styled.h3`
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;

  span {
    color: #ffde59;
  }
`;

const ProcessSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 600px;
  margin: 0 auto 3.5rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 222, 89, 0.3) 20%,
      rgba(255, 222, 89, 0.3) 80%,
      transparent
    );

    @media (max-width: 968px) {
      display: none;
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a4a14 0%, #12360e 100%);
  border: 2px solid rgba(255, 222, 89, 0.3);
  border-radius: 50%;
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffde59;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  ${ProcessStep}:hover & {
    border-color: #ffde59;
    box-shadow: 0 0 30px rgba(255, 222, 89, 0.2);
    transform: scale(1.05);
  }
`;

const StepTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  max-width: 200px;
  margin: 0 auto;
`;

const CTABanner = styled.div`
  margin-top: 5rem;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(255, 222, 89, 0.1) 0%,
    rgba(255, 222, 89, 0.05) 100%
  );
  border: 1px solid rgba(255, 222, 89, 0.2);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAContent = styled.div`
  flex: 1;
`;

const CTATitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const CTAText = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
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
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 222, 89, 0.4);
  }
`;

// Icons
const SolarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const WellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 3h14"/>
    <path d="M12 3v18"/>
    <path d="M8 8c0 2.5 1.5 4 4 4s4-1.5 4-4"/>
    <path d="M6 21h12"/>
    <path d="M3 21l3-3"/>
    <path d="M21 21l-3-3"/>
  </svg>
);

const SepticIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="20" height="10" rx="2"/>
    <path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2"/>
    <path d="M2 12h20"/>
    <path d="M12 18v4"/>
    <path d="M8 22h8"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

// Service Data
const services = [
  {
    id: 'solar',
    title: 'Off-Grid Solar Power',
    description: 'Complete solar energy systems designed for total independence. We size, design, and install systems that keep your lights on year-round.',
    icon: SolarIcon,
    accentColor: '#ffde59',
    bgColor: 'rgba(255, 222, 89, 0.1)',
    features: [
      'Custom system design & sizing',
      'Premium solar panels & inverters',
      'Battery backup systems',
      'Generator integration',
      'Remote monitoring setup',
      '25-year panel warranties',
    ],
  },
  {
    id: 'well',
    title: 'Well Drilling',
    description: 'Professional well drilling for reliable, clean water on your property. We navigate permits, test water quality, and install complete pump systems.',
    icon: WellIcon,
    accentColor: '#5eb3e4',
    bgColor: 'rgba(94, 179, 228, 0.1)',
    features: [
      'Site assessment & permitting',
      'Residential & agricultural wells',
      'Solar-powered pump systems',
      'Water quality testing',
      'Pressure tank installation',
      'Well rehabilitation services',
    ],
  },
  {
    id: 'septic',
    title: 'Septic Systems',
    description: 'Code-compliant septic solutions for any terrain. From conventional systems to advanced treatment units for challenging sites.',
    icon: SepticIcon,
    accentColor: '#7ed67e',
    bgColor: 'rgba(126, 214, 126, 0.1)',
    features: [
      'Soil & perc testing',
      'Engineered system design',
      'Conventional septic tanks',
      'Advanced treatment systems',
      'Full permit management',
      'Maintenance programs',
    ],
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'We visit your land and assess your needs',
  },
  {
    number: '2',
    title: 'Design',
    description: 'Custom plans tailored to your property',
  },
  {
    number: '3',
    title: 'Permits',
    description: 'We handle all paperwork and approvals',
  },
  {
    number: '4',
    title: 'Build',
    description: 'Professional installation, done right',
  },
];

const Services = ({ onContactClick }) => {
  return (
    <Section id="services">
      <BackgroundPattern />
      <Container>
        <Header>
          <Eyebrow>What We Do</Eyebrow>
          <Title>
            Complete <span>Off-Grid Infrastructure</span>
          </Title>
          <Subtitle>
            Everything you need to transform raw land into a self-sufficient 
            homestead — all from one trusted team.
          </Subtitle>
        </Header>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id} $accentColor={service.accentColor}>
              <ServiceIconWrapper $bgColor={service.bgColor} $iconColor={service.accentColor}>
                <service.icon />
              </ServiceIconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeatureList>
                {service.features.map((feature, index) => (
                  <FeatureItem key={index} $checkColor={service.accentColor}>
                    <CheckIcon />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
              <LearnMoreLink $linkColor={service.accentColor} onClick={onContactClick}>
                Get a Quote <ArrowIcon />
              </LearnMoreLink>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ProcessSection>
          <ProcessTitle>
            How We <span>Work</span>
          </ProcessTitle>
          <ProcessSubtitle>
            From first call to final inspection, we make off-grid development simple.
          </ProcessSubtitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <ProcessStep key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessSection>

        <CTABanner>
          <CTAContent>
            <CTATitle>Ready to Go Off-Grid?</CTATitle>
            <CTAText>
              Get a free consultation and custom quote for your property.
            </CTAText>
          </CTAContent>
          <CTAButton onClick={onContactClick}>
            Start Your Project
          </CTAButton>
        </CTABanner>
      </Container>
    </Section>
  );
};

export default memo(Services);