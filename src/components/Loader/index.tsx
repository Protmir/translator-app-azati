import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const StyledAppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledAppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${StyledAppLogoSpin} infinite 5s linear;
  }
`;

const StyledLoaderContainer = styled.div`
  background-color: #282c34;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => (
    <StyledLoaderContainer>
        <StyledAppLogo src={logo} alt="logo" />
    </StyledLoaderContainer>
);
