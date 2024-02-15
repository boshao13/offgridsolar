import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import batteryImage from './assets/eg4battery.png'; // Adjust the path as needed

import ElectricalDevicesGrid from './ElectricalDevicesGrid';
const Container = styled.div`
  text-align: center;

`;

const Header = styled.h1`
  font-size: 2rem;
    margin-top:100px;
`;

const KwhDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const AddressInputContainer = styled.div`

`;

const SubHeader = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
`;
const BatteryRecommendationContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const BatteryImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px; // Adjust the gap between images as needed
`;

const BatteryImage = styled.img`
  width: 200px; // Adjust size as needed for multiple images
  height: auto;
`;

const Modal = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
const QuoteButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
// This function animates the kwh number change
const useAnimatedNumber = (targetNumber) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const difference = targetNumber - number;
    if (difference === 0) return;

    // How quickly the number changes per frame
    const step = difference > 0 ? Math.ceil(difference / 10) : Math.floor(difference / 10);

    const timeoutId = setTimeout(() => setNumber(number + step), 20);
    return () => clearTimeout(timeoutId);
  }, [number, targetNumber]);

  return number;
};

const BatteryCalculator = () => {
    const [address, setAddress] = useState('');
    const [submittedAddress, setSubmittedAddress] = useState('');
    const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
    const [kwh, setKwh] = useState(0); // Assuming this value is dynamically calculated
    const [dailyKwh, setDailyKwh] = useState(0);
    const [annualKwh, setAnnualKwh] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
    name: '',
    number: '',
    email: '',
    });
  
  
    const handleDevicesChange = (totalWattHours) => {
       
        const totalKwh = totalWattHours / 1000; // Convert watt-hours to kilowatt-hours
        setDailyKwh(totalKwh);
        setAnnualKwh(totalKwh * 365); // Calculate annual kWh usage
        setKwh(totalWattHours);
      };
      
    const animatedKwh = useAnimatedNumber(kwh);
    // Example function to simulate changing the kWh total
    const addKwh = () => {
      setKwh(kwh + Math.floor(Math.random() * 10 + 1));
    };
  
      // Handle address input change
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    setSubmittedAddress(address); // Save the submitted address
    setIsAddressSubmitted(true); // Hide the input form and show the address and kWh display
  };
  const handlePrint = (e) => {
    e.preventDefault();
    setShowModal(false);
    // Optional: Handle userInfo here
  
    window.print();
  };
  const handleGetQuote = () => {
    // For example, redirect to a contact form or quote page
    window.location.href = '/contact'; // Adjust the URL to your quote or contact page
  };
  const batteriesRequired = Math.ceil(dailyKwh / 14.3);
  const totalBatteryCapacity = batteriesRequired * 14.3;
  const daysLasting = dailyKwh > 0 ? totalBatteryCapacity / dailyKwh : "Infinite";

    return (
        <Container>
        <Header>Off Grid Battery Size Calculator</Header>
        {!isAddressSubmitted ? (
          <>
            <SubHeader>Enter Your Address</SubHeader>
            <AddressInputContainer>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                placeholder="Start typing address..."
              />
              <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </AddressInputContainer>
          </>
        ) : (
          <>
            <div>Address: {submittedAddress}</div>
            <KwhDisplay>{animatedKwh} Watt Hours Daily</KwhDisplay>
            <ElectricalDevicesGrid onDevicesChange={handleDevicesChange} />
            <div>
            <h2>Summary</h2>
            <p>Daily kWh Usage: {dailyKwh.toFixed(2)} kWh</p>
            <p>Annual kWh Usage: {annualKwh.toFixed(2)} kWh</p>
            {/* Additional stats as needed */}
          </div>
          <BatteryRecommendationContainer>
        <h2>Battery Recommendation</h2>
        <BatteryImagesContainer>
          {Array.from({ length: batteriesRequired }, (_, index) => (
            <BatteryImage key={index} src={batteryImage} alt="Battery" />
          ))}
        </BatteryImagesContainer>
        <p>Model: EG4 PowerPro WallMount All Weather Battery</p>
        <p>Battery Type: LiFePO4 (Lithium Iron Phosphate, Grade A)</p>
        <p>Capacity per Battery: 14.3kWh</p>
        <p>Recommended Quantity: x {batteriesRequired}</p>
        <p>Total Battery Capacity: {totalBatteryCapacity.toFixed(1)} kWh</p>
        <p>Days Lasting with Zero Solar/Generator Input: {typeof daysLasting === "number" ? daysLasting.toFixed(2) : daysLasting} days</p>
        </BatteryRecommendationContainer>
        <button onClick={() => setShowModal(true)}>Print Your Summary</button>
        <QuoteButton onClick={handleGetQuote}>Get a Quote Today!</QuoteButton>
        {showModal && (
         <Modal show={showModal}>
        <ModalContent>
        <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
        <h2>Please enter your details</h2>
        <form onSubmit={handlePrint}>
          <input type="text" placeholder="Name" value={userInfo.name} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} />
          <input type="text" placeholder="Number" value={userInfo.number} onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} />
          <input type="email" placeholder="Email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
          <SubmitButton type="submit">Submit & Print</SubmitButton>
        </form>
      </ModalContent>
        </Modal>
        )}
          </>
        )}
      </Container>
    );
  };
  
  export default BatteryCalculator;