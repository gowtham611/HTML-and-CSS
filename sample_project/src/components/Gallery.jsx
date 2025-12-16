import { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      category: 'drones',
      title: 'FPV Drone Cinematography',
      description: 'Professional aerial footage with cinematic quality and smooth stabilization.',
      icon: '🚁',
      image: 'https://via.placeholder.com/400x300?text=Drone+Shot+1'
    },
    {
      category: 'drones',
      title: 'Aerial Urban Exploration',
      description: 'High-speed FPV racing through urban landscapes and complex environments.',
      icon: '🚁',
      image: 'https://via.placeholder.com/400x300?text=Drone+Racing'
    },
    {
      category: 'manufacturing',
      title: '3D Printed Prototypes',
      description: 'Custom engineered parts with sub-micron precision manufacturing.',
      icon: '🖨️',
      image: 'https://via.placeholder.com/400x300?text=3D+Print+1'
    },
    {
      category: 'manufacturing',
      title: 'Rapid Prototyping',
      description: 'Fast-turnaround 3D printing for product development and testing.',
      icon: '🖨️',
      image: 'https://via.placeholder.com/400x300?text=3D+Print+2'
    },
    {
      category: 'web',
      title: 'React Web Dashboard',
      description: 'Real-time analytics dashboard with interactive data visualization.',
      icon: '💻',
      image: 'https://via.placeholder.com/400x300?text=Web+App+1'
    },
    {
      category: 'web',
      title: 'Mobile Application UI',
      description: 'Modern mobile app interface with seamless user experience.',
      icon: '💻',
      image: 'https://via.placeholder.com/400x300?text=Mobile+App'
    },
    {
      category: 'robotics',
      title: 'Robotics Assembly Line',
      description: 'Automated assembly solutions for manufacturing efficiency.',
      icon: '🤖',
      image: 'https://via.placeholder.com/400x300?text=Robotics+1'
    },
    {
      category: 'robotics',
      title: 'Precision Robot Calibration',
      description: 'Advanced robotic systems for complex manufacturing tasks.',
      icon: '🤖',
      image: 'https://via.placeholder.com/400x300?text=Robotics+2'
    },
    {
      category: 'photography',
      title: 'Product Photography Setup',
      description: 'Professional product shots with premium lighting and composition.',
      icon: '📸',
      image: 'https://via.placeholder.com/400x300?text=Product+Shot+1'
    },
    {
      category: 'photography',
      title: 'Studio Photography',
      description: 'High-quality product imagery for e-commerce and marketing.',
      icon: '📸',
      image: 'https://via.placeholder.com/400x300?text=Product+Shot+2'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Drones', value: 'drones' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Web', value: 'web' },
    { label: 'Robotics', value: 'robotics' },
    { label: 'Photography', value: 'photography' }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.gallery-item');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">

        <div className="header-section">
          <p className="eyebrow">Our Portfolio</p>
          <h2 className="section-title">Gallery</h2>
          <p className="subtitle">Explore our latest projects and creative works across multiple domains</p>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>


        <div className="gallery-wrapper">
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="gallery-item" data-category={item.category}>
                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">{item.icon}</span>
                      <h3 className="overlay-title">{item.title}</h3>
                      <p className="overlay-description">{item.description}</p>
                      <button className="view-btn">View Project</button>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                  <span className={`badge badge-${item.category}`}>
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="cta-section">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's bring your vision to life with our innovative solutions.</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
