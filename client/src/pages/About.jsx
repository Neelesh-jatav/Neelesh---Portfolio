import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about section">
      <div className="container">
        <div className="about-content resume-layout">
          <header className="resume-header">
            <h1 className="about-title">NEELESH KUMAR JATAV</h1>
            <p className="about-description">
              Full-Stack MERN & Python Flask Developer, DSA, MySQL
            </p>
            <p className="resume-contact">
              neeleshkumar22j@gmail.com | +91 6260416172 | IET DAVV Takshila Parisar, Indore, 452020
            </p>
            <p className="resume-links">
              <a href="/" className="resume-link-item">Portfolio</a>
              <span className="resume-link-sep">|</span>
              <a href="https://github.com/" className="resume-link-item" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span className="resume-link-sep">|</span>
              <a href="https://www.linkedin.com/" className="resume-link-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="resume-link-sep">|</span>
              <a href="/drives" className="resume-link-item">Drive</a>
            </p>
          </header>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <h3>IET, DAVV University Indore, M.P. India</h3>
              <p>B.E. Computer Engineering | August 2023 - May 2027</p>
              <p>CGPA: 7.82 | SGPA: 8.97</p>
            </div>
            <div className="resume-item">
              <h3>St Benedict's School Shivpuri, M.P. India</h3>
              <p>12th: 88.8% | 10th: 87.83% | 2020 - 2022</p>
            </div>
          </section>

          <section className="resume-section">
            <h2>Experience</h2>
            <div className="resume-item">
              <h3>Gram Panchayat | Beneficiary Enrollment Agent</h3>
              <p>Shivpuri, M.P., India | May 2025 - June 2025</p>
              <p>
                Worked at Gram Panchayat under Rural Welfare Department. Registered PM Awas
                Yojana land & residence data to the official portal. Successfully completed eKYC
                for over 600 persons.
              </p>
            </div>
            <div className="resume-item">
              <h3>
                C-DAC Noida | CDAC Cyber Gyan Project |{' '}
                <a
                  href="https://drive.google.com/file/d/1VpM4_qQL7xMeyrm5a-4B94CIYDuyCx8I/view?usp=drive_link"
                  className="resume-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </h3>
              <p>Noida, India | 16th September 2024 - 31st October 2024</p>
              <p>
                Successfully completed training and virtual internship in cybersecurity under the
                Ministry of Electronics & IT. Gained knowledge of cyber-attacks and their
                prevention, and cybersecurity tools and techniques used in implementation.
              </p>
            </div>
          </section>

          <section className="resume-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>Programming Languages: JAVA, JS, Python, C++</li>
              <li>Libraries / Frameworks: Python Flask, MERN Stack</li>
              <li>Tools / Platforms: GitHub, Roboflow, Google Colab, Postman, Canva, Figma, Vercel & Render</li>
              <li>Databases: MySQL, MongoDB</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Projects / Open-Source</h2>
            <div className="resume-item">
              <h3>
                VigilaxAI - Integrated Surveillance & Defense System |{' '}
                <a
                  href="https://drive.google.com/drive/folders/"
                  className="resume-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </h3>
              <p>Python Flask, MERN + AI + Hardware</p>
              <ul className="skills-list">
                <li>Hardware: Raspberry Pi, Camera, SD Card, Connectors</li>
                <li>Real-time surveillance using Python, Flask, OpenCV, YOLO for live face, weapon, and drone detection from video streams.</li>
                <li>Implemented audio + image ML models for drone propeller recognition with audio-video fusion to improve detection accuracy.</li>
                <li>Integrated GPS mapping, live weather APIs, and a MERN dashboard with JWT authentication.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h3>
                CivicConnect - Civic Issues Resolution Platform |{' '}
                <a
                  href="https://drive.google.com/file/d/1PPosyLNd4RD96tjfMMfGfzEl8P6qlmAj/view?usp=drive_link"
                  className="resume-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </h3>
              <p>MERN + AI</p>
              <ul className="skills-list">
                <li>Full-stack MERN app for reporting civic issues with photo/video in 3 quick steps using OTP-based authentication.</li>
                <li>Admin dashboard with role-based access and complaint workflow: Accept -&gt; Department -&gt; Officer -&gt; Close (OTP verified).</li>
                <li>Social feed for engagement, local travel posts, and area-wise sponsored ads model for revenue generation.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>Certifications</h2>
            <ul className="skills-list">
              <li>Diploma in Computer Applications (DCA) - 1 Year - A Grade - Makhanlal Chaturvedi National University of Journalism and Communication, December 2022 - June 2023, Bhopal, M.P., India</li>
              <li>Ethical Hacking and Penetration Testing and Virtual Internship - C-DAC (A Scientific Society of Ministry of Electronics & IT, Government of India)</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Main Domain</h2>
            <p className="about-description">DSA 500+ Q, MySQL, MERN, AI/ML, Python Flask, C++, Java, Python</p>
            <h2>Languages</h2>
            <p className="about-description">English, Hindi & French</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
