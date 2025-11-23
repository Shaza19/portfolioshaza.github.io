import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React Apps' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const projects = [
    {
      id: 1,
      title: 'To be seen soon',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      category: 'react',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'To be seen soon',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'react',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'To be seen soon',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'To be seen soon',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'To be seen soon',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'soon , soon , soon , soon ,soon ,soon',
      technologies: ['React', 'Framer Motion', 'EmailJS', 'Vercel'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work in web development and mobile applications
          </p>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card glass ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <span className="placeholder-icon">💻</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>🐙</span>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>🔗</span>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="glass card text-center">
            <h3>Interested in Working Together?</h3>
            <p>
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;