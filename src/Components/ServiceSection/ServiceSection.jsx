
// import React, { useState, useEffect, useRef } from 'react';
// import './ServiceSection.css';
// import { MdPrecisionManufacturing } from "react-icons/md";
// import { GiSteelClaws } from "react-icons/gi";
// import { FaIndustry } from "react-icons/fa";
// import { SiJfrogpipelines } from "react-icons/si";
// import { FaWarehouse } from "react-icons/fa6";
// import { GiDamagedHouse } from "react-icons/gi";

// const ServiceSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       icon: <MdPrecisionManufacturing />,
//       title: 'Manufacturing Machinery',
//       description: 'State-of-the-art machinery manufacturing with precision engineering and cutting-edge technology',
//       stats: '5+ Projects',
//       category: 'Production'
//     },
//     {
//       icon: <GiSteelClaws />,
//       title: 'Structural Steel Work',
//       description: 'Custom structural steel solutions designed for diverse industrial applications and requirements',
//       stats: '10+ Tons',
//       category: 'Fabrication'
//     },
//     {
//       icon: <FaIndustry />,
//       title: 'Tanks & Receivers',
//       description: 'Industrial-grade tanks and receivers built to exact specifications with quality assurance',
//       stats: '20+ Units',
//       category: 'Equipment'
//     },
//     {
//       icon: <SiJfrogpipelines />,
//       title: 'Pipeline Works',
//       description: 'Comprehensive pipeline solutions for industrial applications with safety compliance',
//       stats: '50+ KM',
//       category: 'Infrastructure'
//     },
//     {
//       icon: <FaWarehouse />,
//       title: 'Panel Building',
//       description: 'Custom electrical panel design and manufacturing with advanced control systems',
//       stats: '30+ Panels',
//       category: 'Electrical'
//     },
//     {
//       icon: <GiDamagedHouse />,
//       title: 'Erection Works',
//       description: 'Professional installation and erection services with expert project management',
//       stats: '10+ Sites',
//       category: 'Installation'
//     },
//   ];

//   return (
//     <section className="services-section" ref={sectionRef}>
//       <div className="services-container">
//         {/* Header Section */}
//         <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
//           <div className="section-badge-service">
//             <span>Our Capabilities</span>
//           </div>
//           <h2 className="section-title">
//             Comprehensive Manufacturing
//             <span className="title-highlight"> Solutions</span>
//           </h2>
//           <div className="title-underline"></div>
//           <p className="section-subtitle">
//             From precision machinery to complete installations, we deliver excellence 
//             across every aspect of industrial manufacturing and engineering.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className={`services-grid ${isVisible ? 'animate-in' : ''}`}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`service-card card-${index + 1}`}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="card-header">
//                 <div className="service-category">
//                   {service.category}
//                 </div>
//                 <div className="service-stats">
//                   {service.stats}
//                 </div>
//               </div>
              
//               <div className="card-content">
//                 <div className="service-icon-wrapper">
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <div className="icon-bg"></div>
//                 </div>
                
//                 <div className="service-text">
//                   <h3 className="service-title">{service.title}</h3>
//                   <p className="service-description">{service.description}</p>
//                 </div>
//               </div>
              
//               <div className="card-footer">
//                 <button className="learn-more-btn">
//                   <span>Learn More</span>
//                   <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
//                     <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
              
//               <div className="card-overlay"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className={`services-cta ${isVisible ? 'animate-in' : ''}`}>
//           <div className="cta-content">
//             <h3>Ready to Transform Your Manufacturing Process?</h3>
//             <p>Let's discuss how our comprehensive solutions can optimize your operations.</p>
//             <button className="cta-button">
//               <span>Contact Us</span>
//               <div className="button-bg"></div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceSection;

import React, { useState, useEffect, useRef } from 'react';
import './ServiceSection.css';
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiSteelClaws } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { SiJfrogpipelines } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa6";
import { GiDamagedHouse } from "react-icons/gi";

const ServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const services = [
    {
      icon: <MdPrecisionManufacturing />,
      title: 'Manufacturing Machinery',
      description: 'State-of-the-art machinery manufacturing with precision engineering and cutting-edge technology for optimal performance.',
      stats: '15+ Projects',
      category: 'Production'
    },
    {
      icon: <GiSteelClaws />,
      title: 'Structural Steel Work',
      description: 'Custom structural steel solutions designed for diverse industrial applications with uncompromising quality standards.',
      stats: '50+ Tons',
      category: 'Fabrication'
    },
    {
      icon: <FaIndustry />,
      title: 'Tanks & Receivers',
      description: 'Industrial-grade tanks and receivers built to exact specifications with comprehensive quality assurance protocols.',
      stats: '30+ Units',
      category: 'Equipment'
    },
    {
      icon: <SiJfrogpipelines />,
      title: 'Pipeline Works',
      description: 'Comprehensive pipeline solutions for industrial applications with stringent safety compliance and durability.',
      stats: '100+ KM',
      category: 'Infrastructure'
    },
    {
      icon: <FaWarehouse />,
      title: 'Panel Building',
      description: 'Custom electrical panel design and manufacturing with advanced control systems and intelligent automation.',
      stats: '50+ Panels',
      category: 'Electrical'
    },
    {
      icon: <GiDamagedHouse />,
      title: 'Erection Works',
      description: 'Professional installation and erection services with expert project management and timeline optimization.',
      stats: '25+ Sites',
      category: 'Installation'
    },
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Header Section */}
        <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <span>Our Capabilities</span>
          </div>
          <h2 className="section-title">
            Comprehensive Manufacturing
            <span className="title-highlight"> Excellence</span>
          </h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">
            From precision machinery to complete installations, we deliver exceptional 
            quality across every aspect of industrial manufacturing and engineering solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${isVisible ? 'animate-in' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="service-category">
                  {service.category}
                </div>
                <div className="service-stats">
                  {service.stats}
                </div>
              </div>
              
              <div className="card-content">
                <div className="service-icon-container">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="icon-background"></div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
              
              <div className="card-footer">
                <button className="action-button">
                  <span>Learn More</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="card-gradient"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`services-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3>Ready to Elevate Your Manufacturing Process?</h3>
            <p>Let's collaborate to optimize your operations with our comprehensive manufacturing solutions.</p>
            <button className="primary-button">
              <span>Get Started Today</span>
              <div className="button-shine"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;