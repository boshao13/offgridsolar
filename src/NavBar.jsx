import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the navigation bar
const Nav = styled.nav`
  background: #004d99; // Example background color, adjust as needed
  display: flex;
  justify-content: space-between; // Space items out
  align-items: center;
  position: fixed; // Fix the navbar position
  width:100vw;
  height: 80px;
  margin-top:none;
  padding:none;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  color: white;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px; // Space between links
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #ffffff; // Link color
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &.active {
    background: #ffa500; // Highlight color for active link
    color: #000000;
  }

  &:hover {
    background: #0073e6; // Hover background color, adjust as needed
    color: #ffffff;
  }
`;

const NavBar = () => {
    return (
      <Nav>
        <Logo>
          {/* Logo as a NavLink to home */}
          <StyledNavLink to="/" end>
            Logo
          </StyledNavLink>
        </Logo>
        <NavLinks>
          {/* NavLink for Home, using className to determine active state */}
          <StyledNavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : undefined}
            end
          >
            Home
          </StyledNavLink>
          {/* Additional NavLinks for other pages */}
          <StyledNavLink
            to="/battery-calculator"
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Battery Calculator
          </StyledNavLink>
          <StyledNavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Contact Us
          </StyledNavLink>
          <StyledNavLink
            to="/faq"
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            FAQ
          </StyledNavLink>
        </NavLinks>
      </Nav>
    );
  };
  
  export default NavBar;