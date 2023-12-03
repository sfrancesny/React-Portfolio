import React from 'react';
import Project from '../components/Project.jsx';
import './PortfolioSection.css';

const PortfolioSection = () => {
    const collaborationProjects = [
        {
            title: 'RecipeRadar',
            imageUrl: "/images/reciperadar.PNG",
            description: 'Savor the Worlds Flavors at Your Fingertips',
            projectUrl: 'https://hidden-badlands-25759-537e248c2de6.herokuapp.com/',
            repoUrl: 'https://github.com/sfrancesny/GroupProject3-RecipeRadar'
        },
        {
            title: 'RestroPOS',
            imageUrl: "/images/restropos.PNG",
            description: 'Online Restaurant POS System: Lets Simplify Your Dining Experience',
            projectUrl: 'https://restro-pos-1a58ccf47cea.herokuapp.com/',
            repoUrl: 'https://github.com/Hans-Doderlein/RestroPos'
        },
        {
            title: 'Joke Translator',
            imageUrl: "/images/joketranslator.JPG",
            description: 'Embrace the fun & share the joy, one translated joke at a time',
            projectUrl: 'https://sfrancesny.github.io/Joke-Translator/',
            repoUrl: 'https://github.com/sfrancesny/Joke-Translator'
        },
    ];
    
    const personalProjects = [
        {
            title: 'NoteTaker',
            imageUrl: "/images/notetaker.PNG",
            description: 'Never Forget A Task Again!',
            projectUrl: 'https://secret-refuge-98302-59c89899381f.herokuapp.com/',
            repoUrl: 'https://github.com/sfrancesny/Note-Taker'
        },
        {
            title: 'House of Renaissance',
            imageUrl: "/images/Hor.JPG",
            description: 'Keep Up With The Hottest Tour Of The Year',
            projectUrl: 'https://sfrancesny.github.io/House-Of-Renaissance/',
            repoUrl: 'https://github.com/sfrancesny/House-Of-Renaissance'
        },
        {
            title: 'Web Development Quiz',
            imageUrl: "/images/webdevelopmentquiz.PNG",
            description: 'Quiz Your Knowledge On Web Development',
            projectUrl: 'https://sfrancesny.github.io/Web-Development-Quiz/',
            repoUrl: 'https://github.com/sfrancesny/Web-Development-Quiz'
        },
    ];


    return (
        <section className="portfolio-section">
            <h2>My Portfolio</h2>

            {/* Collaboration Projects Section */}
            <h3> Most Recent Collaborations</h3>
            <div className="projects-grid">
                {collaborationProjects.map(project => (
                    <div className="project-wrapper">
                        <Project
                            key={project.title}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            description={project.description}
                            projectUrl={project.projectUrl}
                            repoUrl={project.repoUrl}
                        />
                    </div>
                ))}
            </div>

            {/* Personal Projects Section */}
            <h3> Most Recent Personal Projects</h3>
            <div className="projects-grid">
                {personalProjects.map(project => (
                    <div className="project-wrapper">
                        <Project
                            key={project.title}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            description={project.description}
                            projectUrl={project.projectUrl}
                            repoUrl={project.repoUrl}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}


export default PortfolioSection;
