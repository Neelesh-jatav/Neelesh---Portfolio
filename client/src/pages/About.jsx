import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              Hello! I'm a passionate Software Development Engineering student with a knack for building clean, efficient, and user-friendly web applications.
            </p>
            <p className="about-description">
              My journey began with a curiosity for how things work on the internet, which led me to dive deep into the world of full-stack development. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and love exploring new technologies.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new coffee shops, reading tech blogs, or contributing to open-source projects.
            </p>
            
            <div className="skills-section">
              <h3>Skills</h3>
              <ul className="skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>HTML5 & CSS3</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
