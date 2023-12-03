import React from 'react';
import './AboutMe.css';

// Import the image
import avatarImage from '../images/avatar.JPG';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <img src={avatarImage} alt="Sonia Nyenkan" className="about-me-photo" />
                <h2>About Me</h2>
                <p>Web Developer 💻 & Social Media Manager 🤳 with a heart for inclusivity ✊🏾. In Full Stack Development, I blend art with tech to create engaging web experiences. As a Content Creator, I'm passionate about weaving stories that connect and inspire communities.
                Championing inclusivity, I amplify diverse voices in every project, striving to make the digital world welcoming for all 🌎. My aim is to impact positively with each line of code and social media post, bridging technology with empathy for a more inclusive future 🔮✨.</p>
            </div>
        </section>
    );
}

export default AboutMe;
