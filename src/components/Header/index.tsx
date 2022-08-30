import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../constants/routePath';
import { units } from '../../helpers/styles/units';
import { colors } from '../../constants/colors';
import { typography } from '../../helpers/styles/typography';

const StyledContainer = styled.div`
  display: flex;
  margin-left: ${units(8)};
  
  @media (max-width: 426px) {
    margin-left: ${units(1)};
  }
`;

const StyledNavLinkBrand = styled(NavLink)`
  padding: ${units(2)};
  text-decoration: none;
  color: ${colors.black};
  
  ${typography(30)}
`;

const StyledNavLink = styled(NavLink)`
  padding: ${units(2)};
  text-decoration: none;
  color: ${colors.black};

  ${typography(15)}
`;

export const Header = () => (
    <Navbar bg="light" expand="lg">
        <StyledContainer>
            <StyledNavLinkBrand to={routes.root}>Azati Translator</StyledNavLinkBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <StyledNavLink to={routes.root}>Translator</StyledNavLink>
                    <StyledNavLink to={routes.favourites}>Favourite</StyledNavLink>
                </Nav>
            </Navbar.Collapse>
        </StyledContainer>
    </Navbar>
);
