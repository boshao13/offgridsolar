// App.js
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Ensure this path is correct
import RouterPage from './RouterPage'; // Adjust with your main component
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

// Optionally create a styled container for your app
const AppContainer = styled.div`
  // Your app container styles here (if needed)
`;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or integrate with your actual loading logic
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <GlobalStyle />
    <AppContainer>
      {loading ? (
        <Spinner />
      ) : (
        <RouterPage /> // Replace with your main content component
      )}
    </AppContainer>
    </>
  );
};

export default App;
