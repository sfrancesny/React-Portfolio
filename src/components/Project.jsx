import React from 'react';
import styled from 'styled-components';

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
`;

const ProjectTitle = styled.h3`
    color: #333;
    margin: 10px 0;
`;

const ProjectDescription = styled.p`
    color: #666;
    text-align: center;
`;

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 15px;
`;

const ProjectLink = styled.a`
    color: #0077b5;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out; // Added transform to transition
    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-5px); // Slight move upwards
    }
`;

const Project = ({ title, imageUrl, description, projectUrl, repoUrl }) => {
    return (
        <ProjectContainer>
            <ProjectImage src={imageUrl} alt={title} />
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectLinks>
                <ProjectLink href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
                <ProjectLink href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</ProjectLink>
            </ProjectLinks>
        </ProjectContainer>
    );
}

export default Project;