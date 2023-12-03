import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #800080; 
    color: #ecf0f1;
    text-align: center; 
    padding: 20px; 
    font-size: 0.9em; 
    h2 {
        color: #ecf0f1;
    }
`;

const SocialLinks = styled.div`
    margin-top: 10px; 
`;

const SocialLink = styled.a`
    margin: 0 10px; /* Spacing between each link */
    display: inline-block;
    transition: transform 0.3s ease-in-out; 
    color: #ecf0f1;

    &:hover {
        transform: scale(1.1);
    }

    img {
        height: 72px; 
        width: auto;
        vertical-align: middle;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <h2>Stay Updated</h2>
            <SocialLinks>
                <SocialLink href="https://github.com/sfrancesny" target="_blank" rel="noopener noreferrer">
                    <img src="/images/githublogo.JPG" alt="GitHub" />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/nyenkan-sonia" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedinlogo.PNG" alt="LinkedIn" />
                </SocialLink>
                <SocialLink href="https://instagram.com/sonianyenkan" target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagramlogo.PNG" alt="Instagram" />
                </SocialLink>
            </SocialLinks>
        </StyledFooter>
    );
}

export default Footer;

