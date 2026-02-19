import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ElectricalDevicesGrid from './ElectricalDevicesGrid';
import BatteryRecommendation from './BatteryRecommendation';
import NavBar from './NavBar';
import Footer from './Footer';
import BatteryPrint from './BatteryPrint';

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
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #12360e;
`;
const Container = styled.div`
  flex: 1;
  text-align: center;
  background-color: #12360e;
  width: 100vw;
  box-sizing: border-box;
  padding: 0 1rem; /* Add padding to prevent touching edges */

  @media (max-width: 768px) {
    padding: 0 0.5rem; /* Reduce padding on smaller screens */
  }
`;


const Header = styled.h1`
  font-size: 2.5rem;
  color: #ffde59;
  margin-bottom: 1rem;
  margin-top: 120px;
`;

const SubHeader = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin: 0 auto 2rem auto;
  max-width: 700px;
  line-height: 1.5;
`;

const AddressInputContainer = styled.div`
  margin: 1.5rem 0;

  input {
    padding: 0.75rem;
    border: 2px solid #ffde59;
    border-radius: 8px;
    width: 60%;
    max-width: 500px;
    font-size: 1rem;
    background-color: #f0f0f0;
    color: #12360e;
  }

  button {
    margin-left: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #ffde59;
    color: #12360e;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e6cd4e;
    }
  }
`;

const AddressDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 1rem 0;
`;

const KwhDisplay = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffde59;
  margin: 1rem 0;
`;

const RestartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const RestartButton = styled.button`
  background-color: #ffde59;
  color: #12360e;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 50px;

  &:hover {
    background-color: #e6cd4e;
  }
`;

const BatteryCalculator = () => {
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [submittedAddress, setSubmittedAddress] = useState(localStorage.getItem('submittedAddress') || '');
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(!!localStorage.getItem('isAddressSubmitted'));
  const [kwh, setKwh] = useState(0);
  const [dailyKwh, setDailyKwh] = useState(parseFloat(localStorage.getItem('dailyKwh')) || 0);
  const [resetKey, setResetKey] = useState(0);
  const [batteriesRequired, setBatteriesRequired] = useState(0);
  const printRef = useRef();

  useEffect(() => {
    let batteries = Math.floor(dailyKwh / 7);
    if ((dailyKwh / 7) % 1 >= 0.7) {
      batteries += 1;
    }
    setBatteriesRequired(batteries);
  }, [dailyKwh]);

  useEffect(() => {
    localStorage.setItem('address', address);
    localStorage.setItem('submittedAddress', submittedAddress);
    localStorage.setItem('isAddressSubmitted', isAddressSubmitted);
    localStorage.setItem('dailyKwh', dailyKwh);
  }, [address, submittedAddress, isAddressSubmitted, dailyKwh]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedAddress(address);
    setIsAddressSubmitted(true);
  };

  const handleDevicesChange = (totalWattHours) => {
    const totalKwh = totalWattHours;
    setDailyKwh(totalKwh);
    setKwh(totalWattHours);
  };

  const handleRestart = () => {
    localStorage.clear();
    setAddress('');
    setSubmittedAddress('');
    setIsAddressSubmitted(false);
    setDailyKwh(0);
    setKwh(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <NavBar />
        <Container>
          <Header>Off Grid Load Calculator</Header>
          <SubHeader>
            Use this calculator to estimate your daily energy consumption and determine how many batteries you need to power your appliances off-grid.
            Enter the details for your appliances below, including quantity, power rating, and daily usage.
          </SubHeader>
          {!isAddressSubmitted ? (
            <>
              <SubHeader>Enter Your Address</SubHeader>
              <AddressInputContainer>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Start typing address..."
                />
                <button onClick={handleSubmit}>Submit</button>
              </AddressInputContainer>
            </>
          ) : (
            <>
              <AddressDisplay>Address: {submittedAddress}</AddressDisplay>
              <KwhDisplay>{kwh} KiloWatt Hours Daily</KwhDisplay>
              <ElectricalDevicesGrid onDevicesChange={handleDevicesChange} resetKey={resetKey} />
              <BatteryRecommendation
                batteriesRequired={batteriesRequired}
                handlePrint={handlePrint}
              />
              <RestartButtonContainer>
                <RestartButton onClick={handleRestart}>Restart</RestartButton>
              </RestartButtonContainer>
            </>
          )}
        </Container>
        <Footer />
        <div ref={printRef} style={{ display: 'none' }}>
          <BatteryPrint
            address={submittedAddress}
            dailyKwh={dailyKwh}
            batteriesRequired={batteriesRequired}
          />
        </div>
      </PageWrapper>
    </>
  );
};

export default BatteryCalculator;
