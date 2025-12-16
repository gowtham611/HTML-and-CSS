const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="header">
          <p className="eyebrow">Who We Are</p>
          <h2 className="title">Building Tomorrow's Solutions Today</h2>
        </div>

        <div className="mission-container">
          <div className="mission-icon">💡</div>
          <div className="mission-box">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              We provide innovative, high-quality technology solutions that empower businesses and
              individuals to achieve their goals and transform their visions into reality.
            </p>
          </div>
        </div>


        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4 className="value-title">Innovation First</h4>
            <p className="value-description">Pushing boundaries with cutting-edge technology and creative solutions.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h4 className="value-title">Fast Delivery</h4>
            <p className="value-description">Quick turnaround without compromising quality or excellence.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h4 className="value-title">Precision Engineering</h4>
            <p className="value-description">Meticulous attention to detail in every project we undertake.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4 className="value-title">Client Partnership</h4>
            <p className="value-description">Your success is our success. We work as an extension of your team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
