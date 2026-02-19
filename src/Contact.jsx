import React, { memo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti';

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

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 222, 89, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(255, 222, 89, 0); }
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
    radial-gradient(ellipse at 30% 20%, rgba(255, 222, 89, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(255, 222, 89, 0.03) 0%, transparent 50%);
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 222, 89, 0.3);
    transform: translateX(8px);
  }
`;

const MethodIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.15) 0%, rgba(255, 222, 89, 0.05) 100%);
  border-radius: 12px;

  svg {
    width: 22px;
    height: 22px;
    color: #ffde59;
  }
`;

const MethodContent = styled.div``;

const MethodLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.25rem;
`;

const MethodValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
`;

const TrustBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    width: 18px;
    height: 18px;
    color: #ffde59;
  }
`;

const FormWrapper = styled.div`
  @media (max-width: 968px) {
    order: 1;
  }
`;

const FormCard = styled.div`
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;

  @media (max-width: 580px) {
    padding: 2rem 1.5rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    outline: none;
    border-color: #ffde59;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(255, 222, 89, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #ffffff;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }

  &:focus {
    outline: none;
    border-color: #ffde59;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(255, 222, 89, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.15rem 2rem;
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 12px;
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ThankYouContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.2) 0%, rgba(255, 222, 89, 0.1) 100%);
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;

  svg {
    width: 40px;
    height: 40px;
    color: #ffde59;
  }
`;

const ThankYouTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ThankYouText = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  max-width: 400px;
  margin: 0 auto;
`;

// Icons
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mnnqkknd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        alert('There was an issue submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={300}
          colors={['#ffde59', '#f5c842', '#12360e', '#ffffff']}
        />
      )}
      <BackgroundAccent />
      <Container>
        <Header>
          <Eyebrow>Get Started</Eyebrow>
          <Title>
            Let's Build Your <span>Off-Grid Future</span>
          </Title>
          <Subtitle>
            Ready to take the first step? Get a free consultation and custom quote 
            for your property — no obligation, just honest advice.
          </Subtitle>
        </Header>

        <ContentGrid>
          <ContactInfo>
            <InfoTitle>We're Here to Help</InfoTitle>
            <InfoText>
              Have questions about your project? Want to discuss what's possible 
              on your land? Reach out — we'd love to hear from you.
            </InfoText>

            <ContactMethods>
              <ContactMethod href="tel:+15055551234">
                <MethodIcon>
                  <PhoneIcon />
                </MethodIcon>
                <MethodContent>
                  <MethodLabel>Call us</MethodLabel>
                  <MethodValue>(505) 352-4674</MethodValue>
                </MethodContent>
              </ContactMethod>

              <ContactMethod href="mailto:info@offgridland.dev">
                <MethodIcon>
                  <EmailIcon />
                </MethodIcon>
                <MethodContent>
                  <MethodLabel>Email us</MethodLabel>
                  <MethodValue>offgridlanddev@gmail.com</MethodValue>
                </MethodContent>
              </ContactMethod>

              <ContactMethod href="#">
                <MethodIcon>
                  <LocationIcon />
                </MethodIcon>
                <MethodContent>
                  <MethodLabel>Service area</MethodLabel>
                  <MethodValue>All of New Mexico/Southern Colorado</MethodValue>
                </MethodContent>
              </ContactMethod>
            </ContactMethods>

            <TrustBadges>
              <Badge>
                <ShieldIcon />
                Licensed & Insured
              </Badge>
              <Badge>
                <ClockIcon />
                24hr Response Time
              </Badge>
              <Badge>
                <CheckIcon />
                Free Estimates
              </Badge>
            </TrustBadges>
          </ContactInfo>

          <FormWrapper>
            <FormCard>
              {!submitted ? (
                <>
                  <FormTitle>Request a Free Quote</FormTitle>
                  <FormSubtitle>Tell us about your project</FormSubtitle>
                  <Form onSubmit={handleSubmit}>
                    <InputGroup>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                    </InputGroup>

                    <InputGroup>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                      />
                    </InputGroup>

                    <InputGroup>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(505) 555-1234"
                        required
                      />
                    </InputGroup>

                    <InputGroup>
                      <Label htmlFor="message">Project Details</Label>
                      <TextArea
                        id="message"
                        name="message"
                        placeholder="Tell us about your land, location, and what you're looking to build..."
                        required
                      />
                    </InputGroup>

                    <SubmitButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                    </SubmitButton>
                  </Form>
                </>
              ) : (
                <ThankYouContainer>
                  <SuccessIcon>
                    <CheckIcon />
                  </SuccessIcon>
                  <ThankYouTitle>Thank You!</ThankYouTitle>
                  <ThankYouText>
                    We've received your request and will be in touch within 24 hours 
                    to discuss your project and provide a personalized quote.
                  </ThankYouText>
                </ThankYouContainer>
              )}
            </FormCard>
          </FormWrapper>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default memo(Contact);