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
const BatteryRecommendationContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const BatteryInfo = styled.p`
  margin-top: 5px;
  font-size: 1 rem;
  font-weight: bold; // Make the font bold, similar to the bullet points
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;


const SubHeader = styled.h2`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
`;

const BatteryImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Force two columns layout
  gap: 10px; // Adjust the gap between images as needed
  justify-items: center;
  align-items: center;
  width:500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column on smaller screens
  }
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

const ImagesSubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column; // Stack items vertically
  align-items: center; // Center items horizontally
  justify-content: center; // Center items vertically, if needed
  text-align:center;
  width: 100%; // Take up full width of the parent container
  margin-top: 10px; // Add some space above this container
`;


const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 100%;
`;

const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // Vertically center the content
  align-items: flex-start; // Align items to the left for the right column
  text-align: left; // Ensure text is left-aligned
  height: 100%; // Make sure the container takes up full height for vertical centering to work effectively
`;


const BulletPoints = styled.ul`
  padding-left: 20px;
  list-style-type: disc; // Ensure bullet points are shown
  text-align: left; // Explicitly align text to the left
  max-width:500px;
  li {
    font-size: 1rem; // Increase font size
    font-weight: bold; // Make text bolder
    margin-bottom: 10px; // Add space between bullet points
    text-align: left; // Ensure each bullet point's text is aligned to the left
  }
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;


  &:not(:last-child) {
margin-right:50px;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 0; // No margin for smaller screens
    }
  }
`;



const BatterySectionContainer = styled.div`
  width: 500px; // Ensures it takes up the full width
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Aligns the content to the right
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

    <BatteryRecommendationContainer>
      <h2>Battery Recommendation</h2>
      <ColumnsContainer>
        <Column>
        <LeftColumnContainer>
        <BatterySectionContainer> 
          <BatteryImagesContainer>
            {Array.from({ length: batteriesRequired }, (_, index) => (
              <BatteryImage key={index} src={batteryImage} alt="Battery" />
            ))}
          </BatteryImagesContainer>
          <ImagesSubHeaderContainer>
          <BatteryInfo>Model: EG4 PowerPro WallMount All Weather Battery</BatteryInfo>
          <BatteryInfo>Recommended Quantity: x {batteriesRequired}</BatteryInfo>
          </ImagesSubHeaderContainer>
          </BatterySectionContainer> 
          </LeftColumnContainer>
        </Column>
        <Column>
    <RightColumnContainer>
    <BulletPoints>
    <li>Battery Type: LiFePO4 (Lithium Iron Phosphate, Grade A)</li>
    <li>Capacity per Battery: 14.3kWh</li>
    <li>Total Battery Capacity: {totalBatteryCapacity.toFixed(1)} kWh</li>
    <li>Days Lasting with Zero Solar/Generator Input: {typeof daysLasting === "number" ? daysLasting.toFixed(2) : daysLasting} days</li>
    <li>10-year warranty for peace of mind</li>
    <li>Over 8000 cycles at 80% DoD for long-lasting performance</li>
    <li>Integrated self-heating feature for optimal performance in low temperatures</li>
    <li>Designed to work with a wide range of inverters for flexible installation options</li>
    <li>UL certified for safety and reliability</li>
    <li>No maintenance required, simplifying ownership</li>
    </BulletPoints>
    </RightColumnContainer>
        </Column>
      </ColumnsContainer>
      <ButtonContainer>
        <QuoteButton onClick={() => setShowModal(true)}>Print Your Summary</QuoteButton>
        <QuoteButton onClick={handleGetQuote}>Get a Quote Today!</QuoteButton>
      </ButtonContainer>
    </BatteryRecommendationContainer>

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