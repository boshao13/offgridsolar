import React, { useState } from 'react';
import styled from 'styled-components';

// Import your trailer images
import trailerImage1 from './assets/trailer1.webp';
import trailerImage2 from './assets/trailer2.webp';

// Outer container with white background
const OuterContainer = styled.div`
  background-color: #12360e; /* Green background */
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 1rem 0; /* Reduced bottom padding */
  margin-bottom:-30px;
  min-height: calc(100vh - 100px); /* Fits between header and footer */
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px; /* Keeps the component less wide */
  margin: 0 auto;
  padding: 0 1rem; /* Horizontal padding */
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #12360e; /* Green background */
  color: #ffffff;
  border-radius: 10px; /* Rounded edges */
  padding: 2rem 1.5rem 1rem; /* Reduced bottom padding */
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem; /* Smaller gap for mobile */
  }
`;

const CarouselContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Crop overflowing images */
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1; /* Square aspect ratio */
  border: 3px solid #ffffff; /* White border */
  border-radius: 10px;
  background-color: #ffffff; /* White background */
  padding: 0.5rem;

  @media (max-width: 768px) {
    width: 70vw;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures the entire image fits inside */
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ activeIndex, index }) => `translateX(${(index - activeIndex) * 100}%)`};
  transition: transform 0.3s ease;
`;

const NavChevron = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5); /* Light background */
  color: #12360e; /* Green for arrows */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  ${({ left }) => (left ? 'left: 10px;' : 'right: 10px;')}
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? '#ffffff' : '#cccccc')};
  border-radius: 50%;
  cursor: pointer;
`;

const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #ffde59;
  margin-bottom:20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SubHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
color: #ffde59;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #e6ffe6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #12360e;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 25px;
  margin-bottom:50px;
  &:hover {
    background-color: #e6e6e6;
    transform: scale(1.05);
  }
`;

const SolarTrailer = ({ onContactClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [trailerImage1, trailerImage2];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <OuterContainer>
      <Wrapper>
        <InfoContainer>
          <Header>Introducing Our Custom 20ft Solar Trailer</Header>
          <ColumnsContainer>
            <CarouselContainer>
              <NavChevron left onClick={handlePrev}>
                &#9664;
              </NavChevron>
              {images.map((src, index) => (
                <CarouselImage
                  key={index}
                  src={src}
                  alt={`Solar Trailer Image ${index + 1}`}
                  activeIndex={activeIndex}
                  index={index}
                />
              ))}
              <NavChevron onClick={handleNext}>&#9654;</NavChevron>
              <DotsContainer>
                {images.map((_, index) => (
                  <Dot
                    key={index}
                    active={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </DotsContainer>
            </CarouselContainer>
            <TextColumn>
              <SubHeader>Built for Remote Living</SubHeader>
              <Paragraph>
                Our prefabricated 20ft solar trailer is a game-changer for customers living in extremely remote areas. This trailer is built to order, featuring:
              </Paragraph>
              <Paragraph>
                - Custom welded racking supporting 8 x 400W panels <br />
                - A powerful 14.3kWh battery (expandable for more storage) <br />
                - Off-grid inverter with RV plugin and customizable 115V/220V outlets <br />
              </Paragraph>
              <SubHeader>Built to Last</SubHeader>
              <Paragraph>
                Engineered for durability and efficiency, our solar trailer provides a reliable energy solution wherever you are.
              </Paragraph>
            </TextColumn>
          </ColumnsContainer>
          <CTAButton onClick={onContactClick}>Contact Us to Build Your Custom Trailer</CTAButton>
        </InfoContainer>
      </Wrapper>
    </OuterContainer>
  );
};

export default SolarTrailer;
