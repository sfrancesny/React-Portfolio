import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    // Define your styles here
    const headerStyle = {
        // backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        textAlign: 'center', // Center the content
    };

    const titleStyle = {
        margin: 0,
        color: '#f6f7f7', //text color
    };

    const navStyle = {
        marginTop: '15px', // Space above navigation
    };

    const linkStyle = {
        textDecoration: 'none', // Remove underline from links
        color: '#f6f7f7', // Link color
        marginRight: '15px', // Space between links
        transition: 'transform 0.3s ease-in-out', 
    };
        
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Sonia Frances </h1>
            <nav style={navStyle}>
                <NavLink to="/" className="link-hover-effect" style={linkStyle} activeClassName="active">About</NavLink>
                <NavLink to="/portfolio" className="link-hover-effect" style={linkStyle} activeClassName="active">Portfolio</NavLink>
                <NavLink to="/contact" className="link-hover-effect" style={linkStyle} activeClassName="active">Contact</NavLink>
                <NavLink to="/resume" className="link-hover-effect" style={linkStyle} activeClassName="active">Resume</NavLink>
            </nav>
        </header>
    );
}

export default Header;
