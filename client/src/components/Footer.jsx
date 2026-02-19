import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-content">
          <h3>Let's work together.</h3>
          <p>Available for freelance projects and placement opportunities.</p>
          <a href="mailto:neeleshkumar22j@gmail.com" className="email-link">neeleshkumar22j@gmail.com</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Neelesh Kumar. All rights reserved.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
