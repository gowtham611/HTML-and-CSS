const Services = () => {
  const services = [
    {
      icon: '🚁',
      title: 'FPV Drone Builds',
      description: 'Custom cinewhoop and long-range rigs tuned for cinematic capture.',
      features: ['4K Stabilization', 'Real-time Transmission', 'Professional Grade'],
      price: 'Custom Quote'
    },
    {
      icon: '🖨️',
      title: 'Rapid Prototyping',
      description: '3D printing and machining with 72-hour turnaround for quick iterations.',
      features: ['Sub-micron Precision', '72-hour Turnaround', 'Multiple Materials'],
      price: 'From $500'
    },
    {
      icon: '💻',
      title: 'Immersive Web Apps',
      description: 'React-based experiences with realtime dashboards and API integrations.',
      features: ['Real-time Updates', 'Responsive Design', 'API Integrations'],
      price: 'Custom Quote'
    },
    {
      icon: '🤖',
      title: 'Robotics Solutions',
      description: 'Automated systems and robotic solutions for manufacturing and complex tasks.',
      features: ['Custom Engineering', 'Full Automation', 'Industrial Grade'],
      price: 'Custom Quote'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance.',
      features: ['iOS & Android', 'Offline Support', 'Cloud Sync'],
      price: 'From $2,000'
    },
    {
      icon: '📸',
      title: 'Professional Photography',
      description: 'Product and commercial photography with professional lighting and composition.',
      features: ['Studio Setup', 'Drone Footage', 'Post-processing'],
      price: 'From $1,000'
    }
  ];

  const handleServiceClick = (serviceName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const subjectField = document.getElementById('subject');
        if (subjectField) {
          subjectField.value = `Inquiry about ${serviceName}`;
          subjectField.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Header */}
        <div className="header-section">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="subtitle">Comprehensive solutions across FPV cinematography, manufacturing, web development, and robotics</p>
        </div>

        <div className="grid-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <div className="card-border"></div>
                <div className="icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="checkmark">✓</span>{feature}
                    </li>
                  ))}
                </ul>
                <div className="price-section">
                  <span className="price">{service.price}</span>
                </div>
                <button 
                  className="service-button"
                  onClick={() => handleServiceClick(service.title)}
                >
                  Request Quote
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="why-section">
          <h3 className="why-title">Why Choose Us?</h3>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h4>Fast Delivery</h4>
              <p>Quick turnaround times without compromising on quality.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h4>Precision</h4>
              <p>Meticulous attention to detail in every project we undertake.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Cutting-edge technology and creative problem-solving.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h4>Support</h4>
              <p>Dedicated support throughout and after project completion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
