import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: '#61dafb',
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'TypeScript', level: 70 },
        { name: 'Next.js', level: 75 }
      ]
    },
    {
      title: 'Backend & Tools',
      color: '#68d391',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Git', level: 70 },
        
      ]
    },
    {
      title: 'Design & Video',
      color: '#f093fb',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'After Effects', level: 90 },
        { name: 'Premiere Pro', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'Illustrator', level: 75 },
        { name: 'Motion Graphics', level: 50 }
      ]
    },
    
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and creative abilities
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category glass">
              <div className="category-header">
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ 
                          backgroundColor: category.color,
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                    
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="glass card">
            <h3>Continuous Learning</h3>
            <p>
              I'm constantly exploring new technologies and frameworks to stay at the forefront 
              of web development and video production. Currently diving deep into Web3 technologies, 
              advanced React patterns, and cutting-edge video effects techniques.
            </p>
            <div className="learning-badges">
              <span className="badge">Web3</span>
              <span className="badge">AI/ML</span>
              <span className="badge">3D Graphics</span>
              <span className="badge">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;