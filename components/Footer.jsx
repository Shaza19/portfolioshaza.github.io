import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: '🐙', href: 'https://github.com', label: 'GitHub' },
    { icon: '💼', href: 'https://www.linkedin.com/in/shaz-yar-1aa9502a9?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: '📧', href: 'mailto:Shazyar.sherzad15@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              Shazyar Sherzad
            </h3>
            <p className="footer-description">
              CS Major specializing in React Development, Web Technologies, and Video Editing. 
              Creating digital experiences that inspire and engage.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>React Applications</li>
              <li>Video Editing</li>
              <li>Motion Graphics</li>
              <li>UI/UX Design</li>
              <li>After Effects</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>📧 Shazyar.sherzad15@gmail.com</p>
              <p>📱 +964 (774) 087-7856</p>
              <p>📍 Kurdistan, Sulaimany</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Shazyar Sherzad. Made with <span className="heart-icon">❤️</span> and React.
            </p>
            <button
              className="scroll-to-top"
              onClick={scrollToTop}
            >
              ⬆️
            </button>
          </div>
        </div>
      </div>
          
    </footer>

      
  );
};

export default Footer;