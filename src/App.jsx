import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Spinner from './Spinner';
import Hero from './Hero';
import Mission from './Mission';
import Services from './Services';
import Why from './Why';
import Contact from './Contact';
import Footer from './Footer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #12360e;
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Roboto', Arial, sans-serif;
    font-weight: 700;
    color: #ffde59;
  }

  a {
    text-decoration: none;
    color: #ffde59;
    transition: color 0.3s ease;

    &:hover {
      color: #e6cd4e;
    }
  }

  button {
    font-family: 'Roboto', Arial, sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Roboto', Arial, sans-serif;
    color: #12360e;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const checkReadyState = () => {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setLoading(false);
      }
    };

    document.addEventListener('readystatechange', checkReadyState);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('readystatechange', checkReadyState);
    };
  }, []);

  useEffect(() => {
    const scrollToContact =
      sessionStorage.getItem('scrollToContact') === 'true' || location.state?.scrollToContact;

    if (scrollToContact) {
      const interval = setInterval(() => {
        if (contactRef.current) {
          sessionStorage.removeItem('scrollToContact');
          const elementPosition = contactRef.current.getBoundingClientRect().top + window.scrollY;
          const offset = -80;
          window.scrollTo({ top: elementPosition + offset, behavior: 'smooth' });
          clearInterval(interval);
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [location]);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      const elementPosition = contactRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = -80;
      window.scrollTo({ top: elementPosition + offset, behavior: 'smooth' });
    }
  };

  // Memoize components to avoid unnecessary re-renders
  const memoizedHero = useMemo(() => <Hero scrollToContact={handleScrollToContact} />, []);
  const memoizedMission = useMemo(() => <Mission onContactClick={handleScrollToContact} />, []);
  const memoizedServices = useMemo(() => <Services onContactClick={handleScrollToContact} />, []);
  const memoizedWhy = useMemo(() => <Why />, []);
  const memoizedFooter = useMemo(() => <Footer />, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <NavBar onContactClick={handleScrollToContact} />
            {memoizedHero}
            {memoizedMission}
            {memoizedServices}
            {memoizedWhy}
            <div ref={contactRef}>
              <Contact />
              {memoizedFooter}
            </div>
          </>
        )}
      </AppContainer>
    </>
  );
};

export default App;