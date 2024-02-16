import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  font-size:20px;
  margin-bottom: 50px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 1000px; // Limit table size on larger screens
  text-align: left;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto; // Enables horizontal scrolling for smaller devices
  }
`;
const Th = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 4px; // Further reduced padding
  font-size: 14px; // Smaller font size to save space
  &:nth-child(1) {
    width: 25%; // Keep or adjust the first column width as needed
  }
  @media (max-width: 768px) {
    padding: 4px; // Consistent reduced padding for smaller screens
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 4px; // Matched to Th padding for a tighter look
  font-size: 13px; // Further reduced for space efficiency
  @media (max-width: 768px) {
    padding: 4px; // Consistent with Th adjustments for smaller screens
  }
`;

const Input = styled.input`
  padding: 2px; // Minimal padding to make input fields smaller
  margin: 1px 0; // Minimal margin to compact the layout further
  width: calc(100% - 4px); // Adjusted width for new padding
  font-size: 13px; // Reduced font size for compactness
  @media (max-width: 768px) {
    padding: 2px;
    margin: 1px 0;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #007bff;
  border: none;
  padding: 4px 8px; // Further reduced padding for a smaller button
  margin-top: 4px; // Reduced margin top
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  font-size: 13px; // Reduced font size for button text

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }
  `
  const TdHighlight = styled(Td)`
  font-size: 18px; // Larger font size for emphasis
  font-weight: bold; // Make it bold
  color: #007bff; // Optional: Change the color to make it stand out more
`;

const initialDevices = [
    { id: 1, appliance: 'Refrigerator', powerRating: 150, quantity: 1, usage: 24 },
    { id: 2, appliance: 'LED Light Bulb', powerRating: 10, quantity: 10, usage: 5 },
    { id: 3, appliance: 'Ceiling Fan', powerRating: 70, quantity: 3, usage: 6 },
    { id: 4, appliance: 'LCD Television', powerRating: 150, quantity: 2, usage: 4 },
    { id: 5, appliance: 'Desktop Computer', powerRating: 200, quantity: 1, usage: 4 },
    { id: 7, appliance: 'Washing Machine', powerRating: 500, quantity: 1, usage: 1 },
    { id: 8, appliance: 'Dryer', powerRating: 3000, quantity: 1, usage: 1 },
    { id: 9, appliance: 'Dishwasher', powerRating: 1500, quantity: 1, usage: 1.5 },
    { id: 10, appliance: 'Electric Oven', powerRating: 2150, quantity: 1, usage: 1 },
    { id: 11, appliance: 'Microwave Oven', powerRating: 1000, quantity: 1, usage: 0.5 },
    { id: 12, appliance: 'Coffee Maker', powerRating: 800, quantity: 1, usage: 0.5 },
    { id: 13, appliance: 'Toaster', powerRating: 850, quantity: 1, usage: 0.2 },
    { id: 15, appliance: 'Hair Dryer', powerRating: 1500, quantity: 1, usage: 0.2 },
    { id: 16, appliance: 'Air Conditioner', powerRating: 2500, quantity: 1, usage: 3 },
    { id: 17, appliance: 'Space Heater', powerRating: 1500, quantity: 2, usage: 5 },
    { id: 18, appliance: 'Water Heater', powerRating: 4000, quantity: 1, usage: 3 },
    { id: 20, appliance: 'Electric Kettle', powerRating: 1200, quantity: 1, usage: 0.5 },
    // Add more devices as needed
  ];
  



const ElectricalDevicesGrid = ({onDevicesChange }) => {
  const [devices, setDevices] = useState(initialDevices);

  const handleInputChange = (id, field, value) => {
    setDevices(devices.map(device => {
      if (device.id === id) {
        return { ...device, [field]: Number(value) || value };
      }
      return device;
    }));
  };
  const removeDevice = (id) => {
    setDevices(devices.filter(device => device.id !== id));
  };
  const calculateWattHoursPerDay = (device) => {
    // Ensure quantity and usage are numbers to avoid NaN results
    const quantity = Number(device.quantity) || 0;
    const usage = Number(device.usage) || 0;
    return device.powerRating * quantity * usage;
  };
  useEffect(() => {
    // Calculate and update the total kWh usage
    const totalKwh = devices.reduce((sum, device) => sum + calculateWattHoursPerDay(device), 0) / 1000;
    onDevicesChange(totalKwh); // Pass the total kWh back up to the parent component
  }, [devices, onDevicesChange]);

  // Calculate summary data
  const dailyKwh = devices.reduce((sum, device) => sum + calculateWattHoursPerDay(device), 0) / 1000;
  const annualKwh = dailyKwh * 365;


  useEffect(() => {
    // Sum the Watt Hours per Day for all devices
    const totalKwh = devices.reduce((sum, device) => sum + calculateWattHoursPerDay(device), 0);
    onDevicesChange(totalKwh); // Pass the total kWh back up to the parent component
  }, [devices, onDevicesChange]); // Include onDevicesChange to the dependency array if eslint-plugin-react-hooks recommends it

  const addDevice = () => {
    const newId = devices.length > 0 ? Math.max(...devices.map(d => d.id)) + 1 : 1;
    const newDevice = { id: newId, appliance: '', powerRating: 0, quantity: 1, usage: 1 };
    setDevices([...devices, newDevice]);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Appliance</Th>
            <Th>Quantity</Th>
            <Th>Power Rating (Watts)</Th>
            <Th>Average Daily Usage (Hours)</Th>
            <Th>Watt Hours per Day</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <Td>
                <Input
                  type="text"
                  value={device.appliance}
                  onChange={(e) => handleInputChange(device.id, 'appliance', e.target.value)}
                  placeholder="Appliance Name"
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={device.quantity}
                  min="1"
                  onChange={(e) => handleInputChange(device.id, 'quantity', e.target.value)}
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={device.powerRating}
                  onChange={(e) => handleInputChange(device.id, 'powerRating', e.target.value)}
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={device.usage}
                  min="0"
                  step="0.1"
                  onChange={(e) => handleInputChange(device.id, 'usage', e.target.value)}
                />
              </Td>
              <Td>{calculateWattHoursPerDay(device).toFixed(2)}</Td>
              <Td>
                <Button onClick={() => removeDevice(device.id)} style={{color: 'red', fontWeight: 'bold'}}>X</Button>
              </Td>
            </tr>
          ))}
          <tr>
            <Td colSpan="6">
              <Button onClick={addDevice}>Add Device</Button>
            </Td>
          </tr>
          <tr>
          <Td colSpan="4" style={{fontWeight: 'bold', textAlign: 'right'}}>Daily kWh Usage:</Td>
          <TdHighlight style={{textAlign: 'right'}}>{dailyKwh.toFixed(2)} kWh</TdHighlight>
          <Td></Td> {/* Empty cell for the Action column */}
        </tr>
        <tr>
          <Td colSpan="4" style={{fontWeight: 'bold', textAlign: 'right'}}>Annual kWh Usage:</Td>
          <TdHighlight style={{textAlign: 'right'}}>{annualKwh.toFixed(2)} kWh</TdHighlight>
          <Td></Td> {/* Empty cell for the Action column */}
        </tr>
        </tbody>
      </Table>
    </Container>
  );
  
  
  
          }  

export default ElectricalDevicesGrid;
