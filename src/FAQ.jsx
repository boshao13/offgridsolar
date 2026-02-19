import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

// Global Styles
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

// Styled Components
const FAQContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #12360e;
`;

const HeaderSection = styled.div`
  background-color: #12360e;
  color: #ffffff;
  padding: 2rem;
  text-align: center;
  margin-top: 55px;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin-top: 40px;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const QuestionContainer = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Question = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #ffde59;
  color: #12360e;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #e6cd4e;
  }
`;

const Answer = styled.div`
  padding: 0 1rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  line-height: 1.6;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-out, padding 0.4s ease-out;

  &.active {
    max-height: 1000px;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const ContactButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const ContactButton = styled.button`
  background-color: #ffffff; /* White background */
  color: #12360e; /* Green text */
  padding: 1rem 1.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #12360e; /* Green border */
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #14521a;
    color: #ffffff; /* White text on hover */
    transform: scale(1.05);
  }
`;

// Main Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleScrollToContact = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  const faqs = [
    {
      question: '1. What is an off-grid solar system?',
      answer:
        'An off-grid solar system operates independently from the traditional power grid, using solar panels to generate electricity and batteries to store it for later use.',
    },
    {
      question: '2. How much power do I need for my off-grid system?',
      answer:
        'Your power needs depend on the appliances and devices you plan to run. Calculating your daily energy usage in kilowatt-hours (kWh) will help determine the size of the system you need.',
    },
    {
      question: '3. How long do LiFePO4 batteries last?',
      answer:
        'LiFePO4 (Lithium Iron Phosphate) batteries can last up to 10 years or more, with a lifespan of approximately 8000+ cycles at 80% Depth of Discharge (DoD).',
    },
    {
      question: '4. Can I run my entire home on an off-grid system?',
      answer:
        'Yes, with a properly sized system that matches your energy needs, you can run your entire home independently from the grid.',
    },
    {
      question: '5. How much does an off-grid system cost?',
      answer:
        'Costs vary based on the size of the system, the number of solar panels and batteries, and additional components like inverters and charge controllers.',
    },
    {
      question: '6. How do I maintain my off-grid system?',
      answer:
        'Off-grid systems require minimal maintenance. Regularly clean solar panels, monitor battery health, and ensure components like inverters are functioning correctly.',
    },
    {
      question: '7. How reliable is off-grid solar in extreme weather?',
      answer:
        'High-quality systems perform well even in extreme weather conditions, with batteries and panels designed to withstand various climates.',
    },
    {
      question: '8. Can I upgrade my existing off-grid system?',
      answer:
        'Yes, you can upgrade components like solar panels, batteries, or inverters to expand your system as your energy needs grow.',
    },
    {
      question: '9. Do off-grid systems work during cloudy days?',
      answer:
        'Yes, batteries store excess energy generated during sunny days, allowing the system to operate even when it’s cloudy.',
    },
    {
      question: '10. Why choose us for your off-grid needs?',
      answer:
        'We specialize in reliable, high-quality systems designed for off-grid living, ensuring long-lasting performance and customer satisfaction.',
    },
  ];
  
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <HeaderSection>
        <HeaderTitle>Frequently Asked Questions</HeaderTitle>
        <HeaderSubtitle>
          Explore answers to the most common questions about off-grid solar systems.
        </HeaderSubtitle>
      </HeaderSection>

      <FAQContainer>
        {faqs.map((faq, index) => (
          <QuestionContainer key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </Question>
            <Answer className={activeIndex === index ? 'active' : ''}>{faq.answer}</Answer>
          </QuestionContainer>
        ))}

        {/* Get a Quote Button */}
        <ContactButtonContainer>
          <ContactButton onClick={handleScrollToContact}>Get a Quote</ContactButton>
        </ContactButtonContainer>
      </FAQContainer>
      <Footer />
    </>
  );
};

export default FAQ;
