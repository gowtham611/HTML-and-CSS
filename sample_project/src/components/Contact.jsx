import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
 
    setIsSubmitted(true);
    

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        <div className="header-section">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's Collaborate</h2>
          <p className="subtitle">
            Tell us about your mission. Whether you need high-speed aerial coverage, robotics expertise, or a polished digital experience, we're here to help you deliver it faster.
          </p>
        </div>


        <div className="contact-methods-grid">
          <a href="mailto:3draxislabs@gmail.com" className="contact-method">
            <div className="method-icon">📧</div>
            <h4 className="method-title">Email</h4>
            <p className="method-value">3draxislabs@gmail.com</p>
          </a>
          <a href="tel:+917483482350" className="contact-method">
            <div className="method-icon">📱</div>
            <h4 className="method-title">Phone</h4>
            <p className="method-value">+91 74834 82350</p>
          </a>
          <div className="contact-method">
            <div className="method-icon">📍</div>
            <h4 className="method-title">Location</h4>
            <p className="method-value">Bangalore, India</p>
          </div>
          <div className="contact-method">
            <div className="method-icon">🕐</div>
            <h4 className="method-title">Response Time</h4>
            <p className="method-value">24-48 hours</p>
          </div>
        </div>


        <div className="main-grid">

          <div className="form-section">
            <h3 className="form-title">Send us a Message</h3>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project details..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="submit-button"
                style={isSubmitted ? {
                  background: 'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)'
                } : {}}
              >
                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>


          <div className="info-section">
            <h3 className="info-title">Why Work With Us?</h3>
            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">⚡</div>
                <h4>Fast Response</h4>
                <p>We typically respond within 24-48 hours to all inquiries.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🎯</div>
                <h4>Expert Team</h4>
                <p>Our specialists have years of experience across multiple domains.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">💡</div>
                <h4>Custom Solutions</h4>
                <p>Every project is tailored to meet your unique requirements.</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🤝</div>
                <h4>Dedicated Support</h4>
                <p>We provide ongoing support throughout your project lifecycle.</p>
              </div>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "Let's turn your vision into reality. We're ready to take on your next challenge."
              </p>
              <p className="quote-author">— 3Dr Axis Labs Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
