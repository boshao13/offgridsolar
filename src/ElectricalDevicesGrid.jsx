import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 900px; // Limit table size on larger screens
  text-align: left;
  border-collapse: collapse;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto; // Enables horizontal scrolling for smaller devices
  }
`;

const Th = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px 8px;

  @media (max-width: 768px) {
    padding: 8px 5px;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin: 4px 0; // Slightly reduce margin
  width: calc(100% - 16px); // Ensure input does not overflow its container

  @media (max-width: 768px) {
    padding: 6px;
    margin: 2px 0;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #007bff;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const initialDevices = [
    { id: 1, appliance: 'Refrigerator', powerRating: 150, quantity: 1, usage: 24 },
    { id: 2, appliance: 'LED Light Bulb', powerRating: 10, quantity: 10, usage: 5 },
    { id: 3, appliance: 'Ceiling Fan', powerRating: 70, quantity: 3, usage: 6 },
    { id: 4, appliance: 'LCD Television', powerRating: 150, quantity: 2, usage: 4 },
    { id: 5, appliance: 'Desktop Computer', powerRating: 200, quantity: 1, usage: 4 },
    { id: 6, appliance: 'Laptop', powerRating: 50, quantity: 2, usage: 8 },
    { id: 7, appliance: 'Washing Machine', powerRating: 500, quantity: 1, usage: 1 },
    { id: 8, appliance: 'Dryer', powerRating: 3000, quantity: 1, usage: 1 },
    { id: 9, appliance: 'Dishwasher', powerRating: 1500, quantity: 1, usage: 1.5 },
    { id: 10, appliance: 'Electric Oven', powerRating: 2150, quantity: 1, usage: 1 },
    { id: 11, appliance: 'Microwave Oven', powerRating: 1000, quantity: 1, usage: 0.5 },
    { id: 12, appliance: 'Coffee Maker', powerRating: 800, quantity: 1, usage: 0.5 },
    { id: 13, appliance: 'Toaster', powerRating: 850, quantity: 1, usage: 0.2 },
    { id: 14, appliance: 'Vacuum Cleaner', powerRating: 650, quantity: 1, usage: 0.5 },
    { id: 15, appliance: 'Hair Dryer', powerRating: 1500, quantity: 1, usage: 0.2 },
    { id: 16, appliance: 'Air Conditioner', powerRating: 2500, quantity: 1, usage: 3 },
    { id: 17, appliance: 'Space Heater', powerRating: 1500, quantity: 2, usage: 5 },
    { id: 18, appliance: 'Water Heater', powerRating: 4000, quantity: 1, usage: 3 },
    { id: 19, appliance: 'Portable Fan', powerRating: 50, quantity: 2, usage: 4 },
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
                  min={1}
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
                  min={0}
                  step={0.1}
                  onChange={(e) => handleInputChange(device.id, 'usage', e.target.value)}
                />
              </Td>
              <Td>{calculateWattHoursPerDay(device)}</Td>
              <Td>
                <button onClick={() => removeDevice(device.id)} style={{color: 'red', fontWeight: 'bold'}}>X</button>
              </Td>
            </tr>
          ))}
          <tr>
            <Td colSpan="6">
              <button onClick={addDevice}>Add Device</button>
            </Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ElectricalDevicesGrid;
