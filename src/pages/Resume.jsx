import React from 'react';
import './Resume.css'; 

const Resume = () => {
    const technicalSkills = [
        'XML,', 'JSON,', 'jQuery,', 'AJAX,', 'Application Programming Interfaces,',
        'Express.js,', 'MongoDB,', 'GraphQL,', 'React.js,', 'MVC Paradigm,',
        'HTML / CSS,', 'JavaScript ES6,', 'Node.js,', 'MYSQL / NoSQL,',
        'Database Management,', 'Jest Testing,', 'Content Management Systems (CMS),',
        'Digital Advertising,', 'Video Editing,', 'Search Engine Optimization (SEO),',
        'Social Media Advertising,', 'Graphic Design'
    ];

    const softSkills = [
        'Content Creation,', 'Effective Communication,', 'Time Management and Organization,',
        'Adaptability,', 'Creative Problem-Solving,', 'Teamwork & Collaboration,',
        'Copy Writing,', 'Analytical Skills,', 'Customer Service,', 'Conflict Resolution'
    ];

    const technologies = [
        'Git,', 'GitHub,', 'Visual Studio Code,', 'Insomnia REST Client,', 'Heroku,',
        'Netlify,', 'Webpack,', 'Shopify Plus,', 'Canva,', 'MS Office'
    ];

    const experiences = [
        {
            role: 'Social Media Manager',
            company: 'The Bun Hut Restaurant and Bar / Gather Restaurant',
            duration: 'Mar 2022 - Nov 2023',
            location: 'Asheboro, NC',
            responsibilities: [
                'Crafted and curated engaging content, increasing audience engagement.',
                'Led successful campaigns and managed targeted advertising, boosting brand visibility.',
                'Managed social media accounts, ensuring positive brand portrayal.',
            ]
        },

    ];

    const education = [
        {
            degree: "Information Technology, Associate's Degree",
            institution: "Randolph Community College",
            duration: "Aug 2022 - May 2024",
            location: "Asheboro, NC"
        },

    ];

    const certifications = [
        {
            title: "Full Stack Flex Coding",
            institution: "University of North Carolina Chapel Hill",
            duration: "May 2023 - Nov 2023"
        },
    ];

    return (
        <section className="resume">
            <h2>My Resume</h2>
            <a href="/SoniaNyenkan-Resume.pdf" download className="resume-download">Download Resume</a>
            
            {/* Technical Skills Section */}
            <div className="skills">
                <h3>Technical Skills</h3>
                <ul>{technicalSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            </div>

            {/* Soft Skills Section */}
            <div className="skills">
                <h3>Soft Skills</h3>
                <ul>{softSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            </div>

            {/* Technologies Section */}
            <div className="skills">
                <h3>Technologies</h3>
                <ul>{technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            </div>

            {/* Professional Experience Section */}
            <div className="experience">
                <h3>Professional Experience</h3>
                {experiences.map(exp => (
                    <div key={exp.role}>
                        <h4>{exp.role} - {exp.company}</h4>
                        <p>{exp.duration}</p>
                        <ul>{exp.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <div className="education">
                <h3>Education</h3>
                {education.map(edu => (
                    <div key={edu.degree}>
                        <h4>{edu.degree}</h4>
                        <p>{edu.institution} - {edu.duration}</p>
                    </div>
                ))}
            </div>

            {/* Certifications Section */}
            <div className="certifications">
                <h3>Certifications</h3>
                {certifications.map(cert => (
                    <div key={cert.title}>
                        <h4>{cert.title}</h4>
                        <p>{cert.institution} - {cert.duration}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Resume;
