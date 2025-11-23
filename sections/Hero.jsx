import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Shazyar Sherzad</span>
            </h1>
            
            <p className="hero-subtitle">
              CS Major specializing in React Development, Web Technologies, and Video Editing
            </p>
            
            <p className="hero-description">
              I create stunning web experiences and compelling video content using cutting-edge technologies. 
              Passionate about bringing ideas to life through code and visual storytelling.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-elements">
              <div className="floating-card card-1">
                <span className="icon">⚛️</span>
                <span>React Development</span>
              </div>
              
              <div className="floating-card card-2">
                <span className="icon">🎬</span>
                <span>After Effects</span>
              </div>
              
              <div className="floating-card card-3">
                <span className="icon">🎨</span>
                <span>Web Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;