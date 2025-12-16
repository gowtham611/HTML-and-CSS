import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const handleScroll = () => {
      if (scrollIndicator) {
        if (window.scrollY > 300) {
          scrollIndicator.style.opacity = '0';
          scrollIndicator.style.pointerEvents = 'none';
        } else {
          scrollIndicator.style.opacity = '1';
          scrollIndicator.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
=
      <div className="background-animation">
=
        <div className="particle-container">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
=
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className="hero-container">

        <h1 className="hero-title">
          <span className="title-line">Shaping The Future</span>
          <span className="title-line">In Every Dimentions</span>
        </h1>


        <p className="hero-subtitle">
          FPV Drones • Web & App Development • 3D Printing • Robotics
        </p>


        <div className="hero-buttons">
          <a href="#services" className="btn-primary">
            View Services
            <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn-secondary">Get Started</a>
        </div>


        <div className="stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
