import React, { useState, useEffect, useRef } from 'react';
import './Company.css';
import { 
  FaAward, 
  FaUsers, 
  FaGlobeAmericas,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaRocket,
  FaCog,
  FaHeart,
  FaEye,
  FaIndustry,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate,
  FaTools
} from "react-icons/fa";

const CompanyJourney = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const journeyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: '2021',
      title: 'Foundation & Vision',
      description: 'Started with a vision to revolutionize industrial manufacturing through precision engineering and innovative solutions.',
      milestone: 'Company Founded',
      icon: <FaRocket />,
      achievements: ['First workshop established', 'Initial team of 5 engineers', 'First manufacturing project completed']
    },
    {
      year: '2022',
      title: 'Expansion & Growth',
      description: 'Expanded operations with advanced machinery and established our reputation for quality structural steel work.',
      milestone: 'Major Expansion',
      icon: <FaIndustry />,
      achievements: ['New 10,000 sq ft facility', 'Team expanded to 25 members', 'First major industrial contract']
    },
    {
      year: '2023',
      title: 'Technology Integration',
      description: 'Integrated cutting-edge technology and automation systems to enhance precision and efficiency.',
      milestone: 'Digital Transformation',
      icon: <FaCog />,
      achievements: ['CNC machinery installation', 'CAD/CAM implementation', 'Quality management system']
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Achieved industry certifications and recognition for excellence in manufacturing and project delivery.',
      milestone: 'Certification & Awards',
      icon: <FaAward />,
      achievements: ['ISO 9001:2015 certification', 'Best Manufacturer Award', '50+ successful projects']
    },
    {
      year: '2025',
      title: 'Innovation Leadership',
      description: 'Became a leader in sustainable manufacturing practices and innovative engineering solutions.',
      milestone: 'Market Leadership',
      icon: <FaLightbulb />,
      achievements: ['Eco-friendly processes', 'Smart manufacturing systems', '100+ team members']
    },
    {
      year: '2026',
      title: 'Future Forward',
      description: 'Continuing to push boundaries with AI-driven manufacturing and global expansion plans.',
      milestone: 'Global Vision',
      icon: <FaGlobeAmericas />,
      achievements: ['AI integration', 'International partnerships', 'Next-gen facilities']
    }
  ];

  const companyStats = [
    { number: '15+', label: 'Years Experience', icon: <FaCalendarAlt /> },
    { number: '200+', label: 'Projects Completed', icon: <FaTools /> },
    { number: '100+', label: 'Team Members', icon: <FaUsers /> },
    { number: '50+', label: 'Happy Clients', icon: <FaHandshake /> }
  ];

  const coreValues = [
    {
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality in every project we undertake.',
      icon: <FaAward />,
      color: '#374151'
    },
    {
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology and creative solutions.',
      icon: <FaLightbulb />,
      color: '#4b5563'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices.',
      icon: <FaShieldAlt />,
      color: '#6b7280'
    },
    {
      title: 'Partnership',
      description: 'Fostering long-term relationships with clients, suppliers, and communities.',
      icon: <FaHandshake />,
      color: '#9ca3af'
    }
  ];

  return (
    <section className="journey-section" ref={journeyRef}>
      <div className="journey-container">
        
        {/* Header */}
        <div className={`journey-header ${isVisible ? 'journey-animate-in' : ''}`}>
          <div className="journey-badge">
            <FaHeart />
            <span>Our Journey</span>
          </div>
          <h2 className="journey-title">
            Crafting Excellence Since
            <span className="journey-title-highlight"> 2021</span>
          </h2>
          <div className="journey-title-divider"></div>
          <p className="journey-subtitle">
            From a small workshop to an industry leader, our journey is built on passion, 
            precision, and an unwavering commitment to engineering excellence.
          </p>
        </div>

        {/* Company Story */}
        <div className={`journey-story ${isVisible ? 'journey-animate-in' : ''}`}>
          <div className="journey-story-grid">
            <div className="journey-story-content">
              <div className="journey-story-header">
                <div className="journey-story-icon">
                  <FaIndustry />
                </div>
                <div>
                  <h3>Our Story</h3>
                  <p className="journey-story-tagline">Building the future, one project at a time</p>
                </div>
              </div>
              
              <div className="journey-story-text">
         
                <p>
                Opus Engineering, established in 2021, is a dynamic
partnership firm specializing in Pre-Engineered
Buildings (PEB) and turnkey infrastructure
solutions. With a strong team of experts from
engineering, commercial, and financial
backgrounds, we deliver cost-effective, high-
quality steel structures for factories, warehouses,
stadiums, malls, offices, and more. Our innovative,
time-efficient approach ensures durable and
scalable construction, making us a trusted partner
for industrial and commercial projects
                </p>
                <p>
                  What began as a vision to transform industrial manufacturing has evolved into 
                  a legacy of engineering excellence. Founded in 2021 by a team of passionate 
                  engineers, our company emerged from the belief that precision, innovation, 
                  and dedication could redefine industry standards.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when engineering expertise 
                  meets entrepreneurial spirit, creating solutions that not only meet current 
                  needs but anticipate future challenges.
                </p>
              </div>

              <div className="journey-mission-vision">
                <div className="journey-mission">
                  <div className="journey-mv-icon">
                    <FaIndustry />
                  </div>
                  <div>
                    <h4>Our Mission</h4>
                    <p>To deliver innovative manufacturing solutions that empower businesses to achieve their operational goals through precision engineering and exceptional service.</p>
                  </div>
                </div>
                
                <div className="journey-vision">
                  <div className="journey-mv-icon">
                    <FaEye />
                  </div>
                  <div>
                    <h4>Our Vision</h4>
                    <p>To be the global leader in sustainable industrial manufacturing, setting new standards for quality, innovation, and environmental responsibility.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="journey-stats-container">
              <div className="journey-stats-grid">
                {companyStats.map((stat, index) => (
                  <div key={index} className="journey-stat-card">
                    <div className="journey-stat-icon">
                      {stat.icon}
                    </div>
                    <div className="journey-stat-number">{stat.number}</div>
                    <div className="journey-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="journey-highlights">
                <h4>Key Highlights</h4>
                <div className="journey-highlights-list">
                  <div className="journey-highlight-item">
                    <FaCertificate />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="journey-highlight-item">
                    <FaMapMarkerAlt />
                    <span>State-of-the-art Facility</span>
                  </div>
                  <div className="journey-highlight-item">
                    <FaAward />
                    <span>Industry Excellence Awards</span>
                  </div>
                  <div className="journey-highlight-item">
                    <FaShieldAlt />
                    <span>Zero Safety Incidents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`journey-timeline-section ${isVisible ? 'journey-animate-in' : ''}`}>
          <div className="journey-timeline-header">
            <h3>Our Journey Through Time</h3>
            <p>Milestones that shaped our growth and success</p>
          </div>
          
          <div className="journey-timeline-container">
            <div className="journey-timeline-nav">
              {timelineData.map((item, index) => (
                <button
                  key={index}
                  className={`journey-timeline-nav-item ${activeTimeline === index ? 'journey-active' : ''}`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="journey-timeline-nav-icon">
                    {item.icon}
                  </div>
                  <div className="journey-timeline-nav-content">
                    <div className="journey-timeline-year">{item.year}</div>
                    <div className="journey-timeline-milestone">{item.milestone}</div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="journey-timeline-content">
              <div className="journey-timeline-card">
                <div className="journey-timeline-card-header">
                  <div className="journey-timeline-card-icon">
                    {timelineData[activeTimeline].icon}
                  </div>
                  <div>
                    <div className="journey-timeline-card-year">{timelineData[activeTimeline].year}</div>
                    <h4 className="journey-timeline-card-title">{timelineData[activeTimeline].title}</h4>
                  </div>
                </div>
                
                <p className="journey-timeline-card-description">
                  {timelineData[activeTimeline].description}
                </p>
                
                <div className="journey-timeline-achievements">
                  <h5>Key Achievements</h5>
                  <ul>
                    {timelineData[activeTimeline].achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`journey-values-section ${isVisible ? 'journey-animate-in' : ''}`}>
          <div className="journey-values-header">
            <h3>Our Core Values</h3>
            <p>The principles that guide every decision and action</p>
          </div>
          
          <div className="journey-values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="journey-value-card">
                <div className="journey-value-icon" style={{ color: value.color }}>
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`journey-cta ${isVisible ? 'journey-animate-in' : ''}`}>
          <div className="journey-cta-content">
            <h3>Ready to Be Part of Our Journey?</h3>
            <p>Join us in shaping the future of industrial manufacturing with innovative solutions and exceptional service.</p>
            <div className="journey-cta-buttons">
              <button className="journey-cta-primary">
                <span>Start Your Project</span>
                <FaRocket />
              </button>
              <button className="journey-cta-secondary">
                <span>Learn More</span>
                <FaUsers />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyJourney;