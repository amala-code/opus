import React, { useState, useEffect, useRef } from 'react';
import './Feature.css';
import { 
  FaAward, 
  FaGlobeAmericas,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaCog,
  FaHeart,
  FaEye,
  FaIndustry,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
  FaTools,
  FaRocket,
  FaUsers
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

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
    <>
    <section className="feature-what-section-about" ref={sectionRef}>
      <div className="feature-what-container-about">
        <div className="feature-what-wrapper-about">

          {/* Content Section */}
          <div className={`feature-what-content-about ${isVisible ? 'animate-in-about' : ''}`}>
            <div className="content-badge-about">
              <span>Our Expertise</span>
            </div>

            <h2 className="feature-what-title-about">
              What Sets Us 
              <span className="title-accent-about"> Apart</span>
            </h2>

            <div className="title-decoration-about"></div>

            <p className="feature-what-description-about">
              At Opus Engineering, established in 2021, we combine technical expertise with 
              innovative thinking to deliver Pre-Engineered Building solutions that exceed 
              expectations. Our dedicated team of experts from engineering, commercial, and 
              financial backgrounds ensure superior quality and complete client satisfaction.
            </p>
          </div>

          {/* Features Grid */}
          <div className={`features-grid-about ${isVisible ? 'animate-in-about' : ''}`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-what-item-about ${hoveredItem === index ? 'hovered-about' : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="feature-what-header-about">
                  <div className="feature-what-metric-about">
                    {feature.metric}
                  </div>
                </div>

                <div className="feature-what-icon-wrapper-about">
                  <div className="feature-what-icon-about">
                    {feature.icon}
                  </div>
                  <div className="icon-glow-about"></div>
                </div>

                <div className="feature-what-text-about">
                  <h3 className="feature-what-name-about">{feature.title}</h3>
                  <p className="feature-what-desc-about">{feature.description}</p>
                </div>

                <div className="feature-what-overlay-about"></div>
              </div>
            ))}
          </div>

        </div>

        <div>
   
     
        </div>
        

      </div>
              
    </section>
      <section className="cta-section">
    <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p style={{color:"white", fontSize:"18px", width:"60%", margin:"0 auto", marginBottom:"20px"}}>
            Get in touch with our team to discuss your industrial infrastructure needs.
          </p>
          <div className="cta-buttons" >
            <a href="/contact">
            <button className="btn-primary">Contact Us</button></a>
            <a href="/projects">
            <button className="btn-secondary">View Projects</button></a>
          </div>
        </div>
      </section>
      </>
  );
};

export default Feature;
