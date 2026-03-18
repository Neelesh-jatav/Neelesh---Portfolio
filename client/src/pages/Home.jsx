import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import './Home.css';

const defaultApiBase =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://neelesh-portfolio.onrender.com';

const API_BASE = (import.meta.env.VITE_API_URL || defaultApiBase).replace(/\/$/, '');

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [videoErrorIds, setVideoErrorIds] = useState({});
  const defaultGithubUrl = 'https://github.com/neelesh-jatav';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Try to fetch from backend
        const response = await fetch(`${API_BASE}/api/projects`);
        const data = await response.json();
        const sanitize = (items) => items.map(p => ({
          ...p,
          description: p.description && typeof p.description === 'string' && p.description.trim() !== ''
            ? p.description.trim()
            : null
        }));

        if (data.length > 0) {
          setProjects(sanitize(data));
        } else {
           // Seed if empty or failed
           await fetch(`${API_BASE}/api/seed`);
           const responseAfterSeed = await fetch(`${API_BASE}/api/projects`);
           const seeded = await responseAfterSeed.json();
           setProjects(sanitize(seeded));
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback: empty array when server is not running
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="home">
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-text">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              Hi, I'm <span className="accent">Neelesh Kumar</span><br />Python Flask/MERN Developer
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-subtitle"
            >
              I build real life apps with the Flask & MERN stack. Currently building next. Excited!
            </motion.p>
            <a href="/contact" className="hero-cta">Contact</a>
          </div>

          <div className="hero-visual">
            <div className="blob"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section className="projects section">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>

          <div className="ai-cards">
            {projects.map((project, index) => (
              <motion.article
                key={project._id || project.eyebrow || index}
                className="ai-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <a
                  href={project.projectUrl || '#'}
                  className="ai-card-main-link"
                  target={project.projectUrl && project.projectUrl !== '#' ? '_blank' : undefined}
                  rel={project.projectUrl && project.projectUrl !== '#' ? 'noopener noreferrer' : undefined}
                >
                  <div className="ai-card-media">
                    {project.videoUrl && !(videoErrorIds[project._id || index]) ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={project.imageUrl}
                        onError={() => setVideoErrorIds((prev) => ({ ...prev, [project._id || index]: true }))}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={project.imageUrl} alt={project.title} />
                    )}
                    <div className="ai-overlay"></div>
                  </div>

                  {project.badgeUrl && (
                    <div className="ai-badge-container">
                      <img src={project.badgeUrl} alt="Badge" className="ai-badge" />
                    </div>
                  )}

                  <div className="ai-card-content">
                    {project.eyebrow && <h3 className="ai-eyebrow">{project.eyebrow}</h3>}
                    <p className="ai-title">{project.title}</p>
                    {project.description && <p className="ai-description">{project.description}</p>}
                    <span className="ai-cta">{project.cta || 'View Project →'}</span>
                  </div>
                </a>

                <a
                  href={project.githubUrl || defaultGithubUrl}
                  className="ai-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.eyebrow || 'project'} repository`}
                  title="Open GitHub repository"
                >
                  🔗 GitHub Repo
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
