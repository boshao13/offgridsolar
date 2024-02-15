// Spinner.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import ziaSymbol from './assets/ziaspinner.png'; // Adjust the path to your Zia symbol image

// Styled container
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #12360e;
`;

const AnimatedImage = styled(animated.img)`
  width: 100px;
  height: 100px;
`;


const Spinner = () => {
  const [isAnimating, setAnimating] = useState(false);

  const props = useSpring({
    to: { transform: isAnimating ? 'rotate(360deg)' : 'rotate(0deg)' },
    from: { transform: 'rotate(0deg)' },
    reset: true,
    onRest: () => {
      if (isAnimating) {
        // Pause for 1 second at the end of each animation before starting over
        setTimeout(() => {
          setAnimating(false);
          requestAnimationFrame(() => setAnimating(true)); // Ensures smooth restart
        }, 1000); // Adjust pause duration here
      }
    },
    config: { duration: 1000 }, // Adjust spin duration here
  });

  useEffect(() => {
    setAnimating(true); // Start the animation when the component mounts
  }, []);

  return (
    <SpinnerContainer>
      <AnimatedImage style={props} src={ziaSymbol} alt="Loading..." />
    </SpinnerContainer>
  );
};

export default Spinner;