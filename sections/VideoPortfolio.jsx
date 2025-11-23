import React, { useState } from 'react';
import './VideoPortfolio.css';

const VideoPortfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoProjects = [
    {
      id: 1,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '2:30',
      category: 'Motion Graphics',
      featured: true,
      techniques: ['After Effects', 'Kinetic Typography', 'Logo Animation', 'Visual Effects']
    },
    {
      id: 2,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '1:45',
      category: 'Commercial',
      featured: true,
      techniques: ['After Effects', '3D Animation', 'Color Grading', 'Sound Design']
    },
    {
      id: 3,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '1:20',
      category: 'Branding',
      featured: false,
      techniques: ['After Effects', 'Illustrator', 'Brand Design', 'Animation']
    },
    {
      id: 4,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '3:15',
      category: 'Educational',
      featured: false,
      techniques: ['After Effects', 'Data Visualization', 'Infographics', 'Narration']
    },
    {
      id: 5,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '2:00',
      category: 'Event',
      featured: true,
      techniques: ['Premiere Pro', 'Color Grading', 'Audio Sync', 'Transitions']
    },
    {
      id: 6,
      title: 'To be seen soon',
      description: 'Soon , soon soon ,sooon ,soon soon.',
      duration: '0:45',
      category: 'Social Media',
      featured: false,
      techniques: ['After Effects', 'Social Optimization', 'Quick Cuts', 'Trending Effects']
    }
  ];

  const handleVideoClick = (videoId) => {
    setActiveVideo(activeVideo === videoId ? null : videoId);
  };

  return (
    <section id="videos" className="video-portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Video Portfolio</h2>
          <p className="section-subtitle">
            Showcasing my expertise in video editing, motion graphics, and After Effects
          </p>
        </div>

        <div className="video-stats">
          <div className="stats-grid">
            <div className="stat-item glass">
              <span className="stat-icon">🎬</span>
              <div className="stat-content">
                <h3>100+</h3>
                <p>Videos Created</p>
              </div>
            </div>
            <div className="stat-item glass">
              <span className="stat-icon">✨</span>
              <div className="stat-content">
                <h3>50+</h3>
                <p>After Effects Projects</p>
              </div>
            </div>
            <div className="stat-item glass">
              <span className="stat-icon">👀</span>
              <div className="stat-content">
                <h3>500k+</h3>
                <p>Total Views</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video-grid">
          {videoProjects.map((video, index) => (
            <div
              key={video.id}
              className={`video-card glass ${video.featured ? 'featured' : ''}`}
            >
              <div className="video-thumbnail" onClick={() => handleVideoClick(video.id)}>
                <div className="video-placeholder">
                  <span className="play-icon">▶️</span>
                </div>
                <div className="video-overlay">
                  <div className="video-duration">{video.duration}</div>
                  {video.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
                {activeVideo === video.id && (
                  <div className="video-player">
                    <div className="player-placeholder">
                      <span className="pause-icon">⏸️</span>
                      <p>Video Player</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="video-content">
                <div className="video-category">{video.category}</div>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
                
                <div className="video-techniques">
                  {video.techniques.map((technique, techIndex) => (
                    <span key={techIndex} className="technique-tag">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="video-process">
          <div className="glass card">
            <h3>My Video Production Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Concept & Planning</h4>
                  <p>Brainstorming ideas, creating storyboards, and planning the visual narrative.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Asset Creation</h4>
                  <p>Designing graphics, creating animations, and preparing all visual elements.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Animation & Effects</h4>
                  <p>Bringing everything to life with After Effects animations and visual effects.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Editing & Polish</h4>
                  <p>Final editing, color grading, sound design, and quality assurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;