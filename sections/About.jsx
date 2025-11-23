import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100+', label: 'Videos Created' },
    { number: '15+', label: 'Technologies Mastered' }
  ];

  const achievements = [
    {
      title: 'Web Development',
      description: 'Building responsive web applications with React, Node.js.',
      icon: '🚀'
    },
    {
      title: 'Video Production',
      description: 'Creating engaging video content using After Effects, Premiere Pro, and motion graphics.',
      icon: '🎬'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces with focus on accessibility and user experience.',
      icon: '🎨'
    },
    {
      title: 'Problem Solving',
      description: 'Analyzing complex problems and implementing efficient solutions through code.',
      icon: '🧠'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate CS student with a love for creating digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="glass card">
              <h3>My Story</h3>
              <p>
                I'm a Computer Science major with a passion for both web development and video editing. 
                My journey began when I discovered the power of code to create interactive experiences 
                and the magic of video editing to tell compelling stories.
              </p>
              <p>
                I specialize in React development, creating modern web applications that are both 
                functional and beautiful. My expertise in After Effects allows me to bring creative 
                visions to life through motion graphics and visual effects.
              </p>
              <p>
                When I'm not coding or editing videos, you'll find me exploring new technologies, 
                contributing to open-source projects, or working on personal creative projects that 
                push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-card glass">
                  <div className="stat-number text-gradient">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="achievements">
          <h3 className="achievements-title">What I Do Best</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="achievement-card glass">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;