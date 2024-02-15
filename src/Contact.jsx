import React from 'react';
import styled from 'styled-components';

// Styled components for the form and its elements
const ContactContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 90%;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 150px;
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message. We will be in touch soon!');
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Our team is here to help!</p>
      <h2>We're Here to Support You</h2>
      <p>Fill out the form below with your questions, and we'll get back to you as soon as possible.</p>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
