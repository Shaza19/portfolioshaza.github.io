import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'Shazyar.sherzad15@gmail.com',
      link: 'mailto:Shazyar.sherzad15@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+964 (774) 087-7856',
      link: 'tel:+9647740877856'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kurdistan , Sulaimany',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: '🐙', href: 'https://github.com', label: 'GitHub' },
    { icon: '💼', href: 'https://www.linkedin.com/in/shaz-yar-1aa9502a9?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: '📷', href: 'https://www.instagram.com/sha_zy_ar/', label: 'Instagram' }
    
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Wanna be in touch? Just hit me a meessage in one of these ways.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="glass card">
              <h3>Let's Connect</h3>
              <p>
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a stunning website, engaging video content, or both, I'm here to help!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="contact-item"
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links">
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
            </div>
          </div>

          <div className="contact-form-container">
            <div className="glass card">
              <h3>Send a Message</h3>
              
              {isSubmitted ? (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>📤</span>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="glass card text-center">
            <h3>Ready to Start Your Project?</h3>
            <p>
              I'm available for freelance work, internships, and full-time opportunities. 
              Let's create something amazing together!
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;