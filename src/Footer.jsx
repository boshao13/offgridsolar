import React, { memo } from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0d2a0a 0%, #091f07 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 222, 89, 0.2), transparent);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BrandColumn = styled.div``;

const BrandName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffde59;
  margin-bottom: 1rem;
`;

const BrandDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 300px;

  @media (max-width: 580px) {
    max-width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 222, 89, 0.1);
    border-color: rgba(255, 222, 89, 0.3);
    color: #ffde59;
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffde59;
  margin-bottom: 1.25rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    padding-left: 4px;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffde59;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: 580px) {
    justify-content: center;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin-bottom: 1.5rem;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 580px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
`;

const DeveloperCredit = styled.a`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;

  span {
    color: #ffde59;
    font-weight: 500;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);

    span {
      color: #f5c842;
    }
  }
`;

// Icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <Container>
        <TopSection>
          <BrandColumn>
            <BrandName>Off Grid Land Development</BrandName>
            <BrandDescription>
              New Mexico's trusted partner for complete off-grid infrastructure. 
              Solar, wells, and septic — everything you need to live independently.
            </BrandDescription>
            <SocialLinks>
              <SocialLink
                href="https://www.instagram.com/nmoffgridsolar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/offgridland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialLink>
            </SocialLinks>
          </BrandColumn>

          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  Off-Grid Solar
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  Well Drilling
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('services')}>
                  Septic Systems
                </FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLinks>
              <FooterLinkItem>
                <FooterLink onClick={scrollToTop}>
                  Home
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('about')}>
                  About Us
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('why-off-grid')}>
                  Why Off-Grid
                </FooterLink>
              </FooterLinkItem>
              <FooterLinkItem>
                <FooterLink onClick={() => scrollToSection('contact')}>
                  Contact
                </FooterLink>
              </FooterLinkItem>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactInfo>
              <ContactItem href="tel:+15053524674">
                <PhoneIcon />
                (505) 352-4674
              </ContactItem>
              <ContactItem href="mailto:offgridlanddev@gmail.com">
                <EmailIcon />
                offgridlanddev@gmail.com
              </ContactItem>
              <ContactItem href="#">
                <LocationIcon />
                New Mexico
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>
            © {currentYear} Off Grid Land Development. All rights reserved.
          </Copyright>
          <DeveloperCredit 
            href="https://codelabs88.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Developed by <span>CodeLabs88</span>
          </DeveloperCredit>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
};

export default memo(Footer);