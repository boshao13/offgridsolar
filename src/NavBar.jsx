import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import ogsLogo from './assets/offgridlogo2.png';

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  background: ${({ $scrolled }) => 
    $scrolled 
      ? 'rgba(18, 54, 14, 0.95)' 
      : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  border-bottom: ${({ $scrolled }) => 
    $scrolled 
      ? '1px solid rgba(255, 222, 89, 0.1)' 
      : '1px solid transparent'};
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 1001;

  img {
    height: 55px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    img {
      height: 45px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavItem = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0.6rem 1.1rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: #ffde59;
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover {
    color: #ffffff;

    &::after {
      width: 60%;
    }
  }

  &.active {
    color: #ffde59;

    &::after {
      width: 60%;
    }
  }
`;

const CTAButton = styled.button`
  padding: 0.7rem 1.5rem;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 10px rgba(255, 222, 89, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 222, 89, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: ${({ $isOpen }) => 
    $isOpen ? 'rgba(255, 222, 89, 0.1)' : 'transparent'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.3s ease;

  @media (max-width: 968px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  width: 22px;
  height: 16px;
  position: relative;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffde59;
    border-radius: 2px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: 0;
      transform: ${({ $isOpen }) => 
        $isOpen ? 'translateY(7px) rotate(45deg)' : 'none'};
    }

    &:nth-child(2) {
      top: 7px;
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      top: 14px;
      transform: ${({ $isOpen }) => 
        $isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none'};
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: linear-gradient(180deg, #12360e 0%, #0d2a0a 100%);
  padding: 6rem 2rem 2rem;
  transform: ${({ $isOpen }) => 
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  box-shadow: ${({ $isOpen }) => 
    $isOpen ? '-10px 0 40px rgba(0, 0, 0, 0.3)' : 'none'};

  @media (min-width: 969px) {
    display: none;
  }
`;

const MobileNavItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:hover, &.active {
    color: #ffde59;
    padding-left: 0.5rem;
  }
`;

const MobileCTAButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #12360e;
  background: linear-gradient(135deg, #ffde59 0%, #f5c842 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(255, 222, 89, 0.4);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 998;

  @media (min-width: 969px) {
    display: none;
  }
`;

const MobileContactInfo = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const MobileContactLabel = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
`;

const MobileContactLink = styled.a`
  display: block;
  font-size: 1rem;
  color: #ffde59;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// Navigation items — 'scroll' targets a section on the homepage, 'route' navigates to a page
const navItems = [
  { id: 'about', label: 'About', type: 'scroll' },
  { id: 'services', label: 'Services', type: 'scroll' },
  { id: 'why-off-grid', label: 'Why Off-Grid', type: 'scroll' },
  { id: 'solarpackage', label: 'Solar Packages', type: 'route', path: '/solarpackage' },
];

// Secret admin access — persists across remounts
let _tapCount = 0;
let _tapTimer = null;

const NavBar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track scroll-based active sections on homepage
      if (location.pathname !== '/') return;

      const scrollItems = navItems.filter(item => item.type === 'scroll');
      for (const item of [...scrollItems].reverse()) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Set active state for route-based nav items
  useEffect(() => {
    const routeItem = navItems.find(item => item.type === 'route' && item.path === location.pathname);
    if (routeItem) {
      setActiveSection(routeItem.id);
    }
  }, [location.pathname]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLogoClick = () => {
    _tapCount++;
    clearTimeout(_tapTimer);

    if (_tapCount >= 5) {
      _tapCount = 0;
      navigate('/nm-ops-7x2k');
      setIsOpen(false);
      return;
    }

    // Only do normal nav on single click (after a short delay)
    _tapTimer = setTimeout(() => {
      if (_tapCount > 0 && _tapCount < 5) {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
        }
      }
      _tapCount = 0;
    }, 400);

    setIsOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.type === 'route') {
      navigate(item.path);
      setIsOpen(false);
      return;
    }

    // Scroll-based navigation
    if (location.pathname !== '/') {
      // Navigate home first, then scroll
      navigate('/', { state: { scrollTo: item.id } });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(item.id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
    setIsOpen(false);
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo onClick={handleLogoClick}>
          <img src={ogsLogo} alt="Off Grid Land Development" />
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </NavItem>
          ))}
          <CTAButton onClick={handleContactClick}>
            Get a Quote
          </CTAButton>
        </NavLinks>

        <HamburgerButton 
          $isOpen={isOpen} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon $isOpen={isOpen}>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        </HamburgerButton>
      </Nav>

      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <MobileMenu $isOpen={isOpen}>
        {navItems.map((item) => (
          <MobileNavItem
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item)}
          >
            {item.label}
          </MobileNavItem>
        ))}
        <MobileCTAButton onClick={handleContactClick}>
          Get a Quote
        </MobileCTAButton>

        <MobileContactInfo>
          <MobileContactLabel>Contact Us</MobileContactLabel>
          <MobileContactLink href="tel:+15053524674">
            (505) 352-4674
          </MobileContactLink>
          <MobileContactLink href="mailto:nmoffgridsolar@gmail.com">
            nmoffgridsolar@gmail.com
          </MobileContactLink>
        </MobileContactInfo>
      </MobileMenu>
    </>
  );
};

export default memo(NavBar);