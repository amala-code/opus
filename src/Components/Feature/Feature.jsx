
import React, { useState, useEffect, useRef } from 'react';
import './Feature.css';

const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: '50% quicker construction with optimized material usage for enhanced affordability and efficiency.',
      metric: '50% Faster'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Sustainable materials and processes that significantly reduce waste and environmental impact.',
      metric: '30% Less Waste'
    },
    {
      icon: '🛡️',
      title: 'Scalable & Durable',
      description: 'Customizable steel structures engineered for exceptional long-term strength and adaptability.',
      metric: '50+ Years'
    },
    {
      icon: '🔄',
      title: 'Turnkey Execution',
      description: 'Complete end-to-end project management from initial design to final on-site assembly.',
      metric: '100% Complete'
    }
  ];

  return (
    <section className="feature-what-section" ref={sectionRef}>
      <div className="feature-what-container">
        <div className="feature-what-wrapper">
          {/* Content Section */}
          <div className={`feature-what-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="content-badge">
              <span>Our Expertise</span>
            </div>
            <h2 className="feature-what-title">
              What Sets Us 
              <span className="title-accent"> Apart</span>
            </h2>
            <div className="title-decoration"></div>
            <p className="feature-what-description">
              At Opus Engineering, established in 2021, we combine technical expertise with 
              innovative thinking to deliver Pre-Engineered Building solutions that exceed 
              expectations. Our dedicated team of experts from engineering, commercial, and 
              financial backgrounds ensure superior quality and complete client satisfaction.
            </p>
            <button className="feature-what-cta">
              <span>Discover Our Approach</span>
              <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="button-bg"></div>
            </button>
          </div>

          {/* Features Grid */}
          <div className={`features-grid ${isVisible ? 'animate-in' : ''}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-what-item ${hoveredItem === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="feature-what-header">
                  <div className="feature-what-metric">
                    {feature.metric}
                  </div>
                </div>
                
                <div className="feature-what-icon-wrapper">
                  <div className="feature-what-icon">
                    {feature.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                
                <div className="feature-what-text">
                  <h3 className="feature-what-name">{feature.title}</h3>
                  <p className="feature-what-desc">{feature.description}</p>
                </div>
                
                <div className="feature-what-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className={`feature-what-stats ${isVisible ? 'animate-in' : ''}`}>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2021</div>
              <div className="stat-label">Established</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Feature;