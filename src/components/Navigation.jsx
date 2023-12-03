import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const StyledNav = styled.nav`
    background-color: #2c3e50; /* Dark background for the nav */
    padding: 10px 20px; /* Padding around the nav */
    display: flex; /* lay the nav items horizontally */
    justify-content: center; /* Centering the nav items */
    align-items: center; /* Align items vertically */
`;

const StyledNavLink = styled(NavLink)`
    color: #ecf0f1; /* Light color for the links */
    text-decoration: none; /* Remove underline */
    margin: 15PX 15px; /* Spacing between links */
    padding: 10px 0; /* Padding for larger clickable area */
    font-size: 1.3em; /* Slightly larger font size */
    transition: color 0.3s ease-in-out; /* Smooth transition for hover effect */

    &:hover {
        color: #f39c12; /* Color change on hover */
    }

    &.active {
        color: #f39c12; /* Highlight for the active page */
        border-bottom: 2px solid #f39c12; /* Underline effect for the active link */
    }
`;

const Navigation = () => {
    return (
        <StyledNav>
            <StyledNavLink to="/" className="link-hover-effect"  activeClassName="active">About</StyledNavLink>
            <StyledNavLink to="/portfolio" className="link-hover-effect" activeClassName="active">Portfolio</StyledNavLink>
            <StyledNavLink to="/contact" className="link-hover-effect" activeClassName="active">Contact</StyledNavLink>
            <StyledNavLink to="/resume" className="link-hover-effect" activeClassName="active">Resume</StyledNavLink>
        </StyledNav>
    );
}

export default Navigation;
