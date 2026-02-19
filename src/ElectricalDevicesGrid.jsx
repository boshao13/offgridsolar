import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;

  font-size: 20px;
  margin-bottom: 50px;
  overflow-x: auto; // Allow horizontal scrolling on mobile
`;

const Table = styled.table`
  width: 100%;
  max-width: 1000px; // Limit table size on larger screens
  text-align: left;
  border-collapse: collapse;

  @media (max-width: 768px) {
    width: 100vw; // Ensure the table fits within the viewport width
    font-size: 12px; // Adjust font size for smaller screens
  }
`;

const Th = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 4px;
  font-size: 14px;

  &:nth-child(2),
  &:nth-child(3) {
    width: 50px; // Make these columns narrower
  }

  @media (max-width: 768px) {
    padding: 3px; // Reduce padding on mobile
    font-size: 12px;
  }
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 4px;
  font-size: 13px;

  &:nth-child(2),
  &:nth-child(3) {
    width: 50px; // Make these columns narrower
    text-align: center; // Center-align smaller cells
  }

  @media (max-width: 768px) {
    padding: 3px; // Reduce padding on mobile
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 2px;
  margin: 1px 0;
  width: calc(100% - 4px);
  font-size: 13px;

  @media (max-width: 768px) {
    padding: 2px;
    margin: 1px 0;
    font-size: 12px; // Smaller font size for mobile
  }
`;

const Button = styled.button`
  background-color: #ffde59; // Yellow background for buttons
  color: #12360e; // Dark green text for buttons
  border: none;
  padding: 4px 8px;
  margin-top: 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  font-size: 13px;

  &:hover {
    background-color: #e6cd4e; // Slightly darker yellow on hover
  }

  @media (max-width: 768px) {
    padding: 3px 6px; // Smaller padding for mobile
    font-size: 12px; // Smaller font size for mobile
  }
`;

const TdHighlight = styled(Td)`
  font-size: 18px; // Larger font size for emphasis
  font-weight: bold; // Make it bold
  color: #ffde59; // Yellow color for totals

  @media (max-width: 768px) {
    font-size: 14px; // Adjust font size for mobile
  }
`;

const initialDevices = [
  { id: 1, appliance: 'Refrigerator', powerRating: 150, quantity: 1, usage: 24 },
  { id: 2, appliance: 'LED Light Bulb', powerRating: 10, quantity: 10, usage: 5 },
  { id: 3, appliance: 'Ceiling Fan', powerRating: 70, quantity: 3, usage: 6 },
  { id: 4, appliance: 'LCD Television', powerRating: 150, quantity: 2, usage: 4 },
  { id: 5, appliance: 'Desktop Computer', powerRating: 200, quantity: 1, usage: 4 },
];

const ElectricalDevicesGrid = ({ onDevicesChange, resetKey }) => {
  const [devices, setDevices] = useState(initialDevices);

  // Reset devices when resetKey changes
  useEffect(() => {
    console.log('Resetting devices with resetKey:', resetKey);
    setDevices(initialDevices);
  }, [resetKey]);

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
    const quantity = Number(device.quantity) || 0;
    const usage = Number(device.usage) || 0;
    return device.powerRating * quantity * usage;
  };

  useEffect(() => {
    const totalKwh = devices.reduce((sum, device) => sum + calculateWattHoursPerDay(device), 0) / 1000;
    onDevicesChange(totalKwh);
  }, [devices, onDevicesChange]);

  const dailyKwh = devices.reduce((sum, device) => sum + calculateWattHoursPerDay(device), 0) / 1000;
  const annualKwh = dailyKwh * 365;

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
          {devices.map(device => (
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
                <Button onClick={() => removeDevice(device.id)}>X</Button>
              </Td>
            </tr>
          ))}
          <tr>
            <Td colSpan="6">
              <Button onClick={addDevice}>Add Device</Button>
            </Td>
          </tr>
          <tr>
            <Td colSpan="4" style={{ fontWeight: 'bold', textAlign: 'right' }}>Daily kWh Usage:</Td>
            <TdHighlight>{dailyKwh.toFixed(2)} kWh</TdHighlight>
            <Td></Td>
          </tr>
          <tr>
            <Td colSpan="4" style={{ fontWeight: 'bold', textAlign: 'right' }}>Annual kWh Usage:</Td>
            <TdHighlight>{annualKwh.toFixed(2)} kWh</TdHighlight>
            <Td></Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ElectricalDevicesGrid;
