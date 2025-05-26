// import React, { useState, useEffect, useRef } from 'react';
// import './Servicedetail.css';
// import { 
//   MdPrecisionManufacturing, 
//   MdEngineering, 
//   MdArchitecture,
//   MdBuild,
//   MdElectricBolt,
//   MdConstruction 
// } from "react-icons/md";
// import { 
//   FaIndustry, 
//   FaTools, 
//   FaClipboardCheck,
//   FaCog,
//   FaShieldAlt,
//   FaRocket
// } from "react-icons/fa";

// const ServicesShowcase = () => {
//   const [activeService, setActiveService] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       id: 1,
//       icon: <MdPrecisionManufacturing />,
//       title: 'Manufacturing Machinery',
//       category: 'Production Systems',
//       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//       shortDesc: 'State-of-the-art machinery manufacturing with precision engineering',
//       fullDescription: 'We specialize in designing and manufacturing custom industrial machinery that meets the highest standards of precision and reliability. Our advanced manufacturing processes ensure optimal performance, reduced downtime, and exceptional longevity for all equipment.',
//       features: [
//         'Custom Design & Engineering',
//         'CNC Precision Manufacturing',
//         'Quality Control Systems',
//         'Performance Optimization'
//       ],
//       process: [
//         { step: 'Consultation', desc: 'Understanding your specific requirements' },
//         { step: 'Design', desc: 'Creating detailed engineering blueprints' },
//         { step: 'Manufacturing', desc: 'Precision fabrication and assembly' },
//         { step: 'Testing', desc: 'Comprehensive quality assurance' }
//       ],
//       benefits: ['50% Faster Production', '99% Accuracy Rate', '24/7 Support'],
//       timeline: '8-12 weeks',
//       complexity: 'High'
//     },
//     {
//       id: 2,
//       icon: <MdArchitecture />,
//       title: 'Structural Steel Work',
//       category: 'Infrastructure',
//       image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
//       shortDesc: 'Custom structural steel solutions for diverse industrial applications',
//       fullDescription: 'Our structural steel work encompasses everything from simple frameworks to complex architectural structures. We combine traditional craftsmanship with modern technology to deliver structures that are both aesthetically pleasing and structurally sound.',
//       features: [
//         'Custom Structural Design',
//         'Fabrication & Welding',
//         'Surface Treatment',
//         'Installation Services'
//       ],
//       process: [
//         { step: 'Site Survey', desc: 'Detailed site analysis and measurements' },
//         { step: 'Structural Design', desc: 'Engineering calculations and drawings' },
//         { step: 'Fabrication', desc: 'Cutting, welding, and assembly' },
//         { step: 'Installation', desc: 'On-site erection and finishing' }
//       ],
//       benefits: ['Earthquake Resistant', '100+ Year Lifespan', 'Cost Effective'],
//       timeline: '6-10 weeks',
//       complexity: 'Medium'
//     },
//     {
//       id: 3,
//       icon: <FaIndustry />,
//       title: 'Industrial Tanks & Receivers',
//       category: 'Storage Solutions',
//       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//       shortDesc: 'Industrial-grade tanks and receivers built to exact specifications',
//       fullDescription: 'We manufacture a comprehensive range of industrial tanks and pressure vessels designed to handle various media under different operating conditions. Our tanks are built to international standards with rigorous testing protocols.',
//       features: [
//         'Pressure Vessel Design',
//         'Corrosion Resistance',
//         'Safety Systems',
//         'Compliance Certification'
//       ],
//       process: [
//         { step: 'Requirements', desc: 'Defining capacity and specifications' },
//         { step: 'Engineering', desc: 'Pressure calculations and design' },
//         { step: 'Fabrication', desc: 'Welding and assembly processes' },
//         { step: 'Testing', desc: 'Pressure testing and certification' }
//       ],
//       benefits: ['ASME Certified', 'Leak-Proof Design', 'Long Service Life'],
//       timeline: '4-8 weeks',
//       complexity: 'High'
//     },
//     {
//       id: 4,
//       icon: <MdBuild />,
//       title: 'Pipeline Systems',
//       category: 'Infrastructure',
//       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//       shortDesc: 'Comprehensive pipeline solutions with safety compliance',
//       fullDescription: 'Our pipeline systems are engineered for optimal flow characteristics and maximum durability. We handle everything from design and fabrication to installation and commissioning, ensuring seamless integration with existing infrastructure.',
//       features: [
//         'Flow Optimization',
//         'Leak Detection Systems',
//         'Insulation & Protection',
//         'Remote Monitoring'
//       ],
//       process: [
//         { step: 'Route Planning', desc: 'Optimal pathway design and surveying' },
//         { step: 'Pipe Fabrication', desc: 'Custom pipe manufacturing' },
//         { step: 'Installation', desc: 'Professional laying and connection' },
//         { step: 'Commissioning', desc: 'Testing and system activation' }
//       ],
//       benefits: ['Zero Leakage', 'Smart Monitoring', '50+ Year Design'],
//       timeline: '10-16 weeks',
//       complexity: 'High'
//     },
//     {
//       id: 5,
//       icon: <MdElectricBolt />,
//       title: 'Electrical Panel Building',
//       category: 'Control Systems',
//       image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
//       shortDesc: 'Custom electrical panels with advanced control systems',
//       fullDescription: 'We design and build sophisticated electrical control panels that integrate seamlessly with your industrial processes. Our panels feature advanced automation, safety systems, and user-friendly interfaces for optimal operational efficiency.',
//       features: [
//         'PLC Integration',
//         'HMI Interfaces',
//         'Safety Circuits',
//         'Remote Access'
//       ],
//       process: [
//         { step: 'System Design', desc: 'Electrical schematic development' },
//         { step: 'Component Selection', desc: 'Quality component sourcing' },
//         { step: 'Assembly', desc: 'Professional panel construction' },
//         { step: 'Programming', desc: 'Software configuration and testing' }
//       ],
//       benefits: ['Smart Automation', 'Energy Efficient', 'User Friendly'],
//       timeline: '3-6 weeks',
//       complexity: 'Medium'
//     },
//     {
//       id: 6,
//       icon: <MdConstruction />,
//       title: 'Installation & Erection',
//       category: 'Project Management',
//       image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//       shortDesc: 'Professional installation services with expert project management',
//       fullDescription: 'Our experienced installation teams handle complete project execution from planning to commissioning. We ensure minimal disruption to your operations while maintaining the highest safety and quality standards throughout the process.',
//       features: [
//         'Project Planning',
//         'Safety Management',
//         'Quality Assurance',
//         'Timeline Management'
//       ],
//       process: [
//         { step: 'Pre-Installation', desc: 'Site preparation and planning' },
//         { step: 'Installation', desc: 'Professional equipment installation' },
//         { step: 'Testing', desc: 'Comprehensive system testing' },
//         { step: 'Handover', desc: 'Training and documentation' }
//       ],
//       benefits: ['Zero Accidents', 'On-Time Delivery', 'Full Training'],
//       timeline: '2-8 weeks',
//       complexity: 'Variable'
//     }
//   ];

//   return (
//     <section className="services-showcase" ref={sectionRef}>
//       <div className="showcase-container">
//         {/* Header */}
//         <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
//           <div className="header-badge">
//             <span>Our Services</span>
//           </div>
//           <h2 className="showcase-title">
//             Engineering Excellence in
//             <span className="title-highlight"> Every Detail</span>
//           </h2>
//           <div className="title-divider"></div>
//           <p className="showcase-subtitle">
//             Comprehensive manufacturing and engineering solutions designed to transform 
//             your industrial operations with precision, efficiency, and innovation.
//           </p>
//         </div>

//         {/* Services Navigation */}
//         <div className={`services-nav ${isVisible ? 'animate-in' : ''}`}>
//           {services.map((service, index) => (
//             <button
//               key={service.id}
//               className={`nav-item ${activeService === index ? 'active' : ''}`}
//               onClick={() => setActiveService(index)}
//             >
//               <div className="nav-image">
//                 <img src={service.image} alt={service.title} />
//                 <div className="nav-overlay">
//                   <div className="nav-icon">{service.icon}</div>
//                 </div>
//               </div>
//               <div className="nav-content">
//                 <h4>{service.title}</h4>
//                 <span>{service.category}</span>
//               </div>
//             </button>
//           ))}
//         </div>

//         {/* Active Service Detail */}
//         <div className={`service-detail ${isVisible ? 'animate-in' : ''}`}>
//           <div className="detail-grid">
//             {/* Main Content */}
//             <div className="detail-main">
//               {/* Service Image Header */}
//               <div className="service-image-header">
//                 <img 
//                   src={services[activeService].image} 
//                   alt={services[activeService].title}
//                   className="service-main-image"
//                 />
//                 <div className="image-overlay">
//                   <div className="service-badge">
//                     <div className="badge-icon">
//                       {services[activeService].icon}
//                     </div>
//                     <span>{services[activeService].category}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="service-header">
//                 <div className="service-meta">
//                   <span className="category-tag">{services[activeService].category}</span>
//                   <div className="meta-items">
//                     <div className="meta-item">
//                       <FaClipboardCheck />
//                       <span>{services[activeService].timeline}</span>
//                     </div>
//                     <div className="meta-item">
//                       <FaCog />
//                       <span>{services[activeService].complexity}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="service-title">{services[activeService].title}</h3>
//                 <p className="service-description">{services[activeService].fullDescription}</p>
//               </div>

//               {/* Features */}
//               <div className="features-section">
//                 <h4>Key Features</h4>
//                 <div className="features-grid">
//                   {services[activeService].features.map((feature, index) => (
//                     <div key={index} className="feature-item">
//                       <FaShieldAlt />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Process */}
//               <div className="process-section">
//                 <h4>Our Process</h4>
//                 <div className="process-steps">
//                   {services[activeService].process.map((step, index) => (
//                     <div key={index} className="process-step">
//                       <div className="step-number">{index + 1}</div>
//                       <div className="step-content">
//                         <h5>{step.step}</h5>
//                         <p>{step.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="detail-sidebar">
//               {/* Benefits */}
//               <div className="benefits-card">
//                 <h4>Key Benefits</h4>
//                 <div className="benefits-list">
//                   {services[activeService].benefits.map((benefit, index) => (
//                     <div key={index} className="benefit-item">
//                       <FaRocket />
//                       <span>{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="stats-card">
//                 <h4>Project Insights</h4>
//                 <div className="stats-grid">
//                   <div className="stat">
//                     <div className="stat-number">98%</div>
//                     <div className="stat-label">Success Rate</div>
//                   </div>
//                   <div className="stat">
//                     <div className="stat-number">24/7</div>
//                     <div className="stat-label">Support</div>
//                   </div>
//                   <div className="stat">
//                     <div className="stat-number">ISO</div>
//                     <div className="stat-label">Certified</div>
//                   </div>
//                   <div className="stat">
//                     <div className="stat-number">50+</div>
//                     <div className="stat-label">Projects</div>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="cta-card">
//                 <h4>Ready to Get Started?</h4>
//                 <p>Let's discuss your project requirements and create a custom solution.</p>
//                 <button className="cta-button">
//                   <span>Request Quote</span>
//                   <FaTools />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesShowcase;

import React, { useState, useEffect, useRef } from 'react';
import './Servicedetail.css';
import { 
  MdPrecisionManufacturing, 
  MdEngineering, 
  MdArchitecture,
  MdBuild,
  MdElectricBolt,
  MdConstruction 
} from "react-icons/md";
import { 
  FaIndustry, 
  FaTools, 
  FaClipboardCheck,
  FaCog,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
      id: 1,
      icon: <MdPrecisionManufacturing />,
      title: 'Manufacturing Machinery',
      category: 'Production Systems',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      shortDesc: 'State-of-the-art machinery manufacturing with precision engineering',
      fullDescription: 'We specialize in designing and manufacturing custom industrial machinery that meets the highest standards of precision and reliability. Our advanced manufacturing processes ensure optimal performance, reduced downtime, and exceptional longevity for all equipment.',
      features: [
        'Custom Design & Engineering',
        'CNC Precision Manufacturing',
        'Quality Control Systems',
        'Performance Optimization'
      ],
      process: [
        { step: 'Consultation', desc: 'Understanding your specific requirements' },
        { step: 'Design', desc: 'Creating detailed engineering blueprints' },
        { step: 'Manufacturing', desc: 'Precision fabrication and assembly' },
        { step: 'Testing', desc: 'Comprehensive quality assurance' }
      ],
      benefits: ['50% Faster Production', '99% Accuracy Rate', '24/7 Support'],
      timeline: '8-12 weeks',
      complexity: 'High'
    },
    {
      id: 2,
      icon: <MdArchitecture />,
      title: 'Structural Steel Work',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      shortDesc: 'Custom structural steel solutions for diverse industrial applications',
      fullDescription: 'Our structural steel work encompasses everything from simple frameworks to complex architectural structures. We combine traditional craftsmanship with modern technology to deliver structures that are both aesthetically pleasing and structurally sound.',
      features: [
        'Custom Structural Design',
        'Fabrication & Welding',
        'Surface Treatment',
        'Installation Services'
      ],
      process: [
        { step: 'Site Survey', desc: 'Detailed site analysis and measurements' },
        { step: 'Structural Design', desc: 'Engineering calculations and drawings' },
        { step: 'Fabrication', desc: 'Cutting, welding, and assembly' },
        { step: 'Installation', desc: 'On-site erection and finishing' }
      ],
      benefits: ['Earthquake Resistant', '100+ Year Lifespan', 'Cost Effective'],
      timeline: '6-10 weeks',
      complexity: 'Medium'
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: 'Industrial Tanks & Receivers',
      category: 'Storage Solutions',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      shortDesc: 'Industrial-grade tanks and receivers built to exact specifications',
      fullDescription: 'We manufacture a comprehensive range of industrial tanks and pressure vessels designed to handle various media under different operating conditions. Our tanks are built to international standards with rigorous testing protocols.',
      features: [
        'Pressure Vessel Design',
        'Corrosion Resistance',
        'Safety Systems',
        'Compliance Certification'
      ],
      process: [
        { step: 'Requirements', desc: 'Defining capacity and specifications' },
        { step: 'Engineering', desc: 'Pressure calculations and design' },
        { step: 'Fabrication', desc: 'Welding and assembly processes' },
        { step: 'Testing', desc: 'Pressure testing and certification' }
      ],
      benefits: ['ASME Certified', 'Leak-Proof Design', 'Long Service Life'],
      timeline: '4-8 weeks',
      complexity: 'High'
    },
    {
      id: 4,
      icon: <MdBuild />,
      title: 'Pipeline Systems',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      shortDesc: 'Comprehensive pipeline solutions with safety compliance',
      fullDescription: 'Our pipeline systems are engineered for optimal flow characteristics and maximum durability. We handle everything from design and fabrication to installation and commissioning, ensuring seamless integration with existing infrastructure.',
      features: [
        'Flow Optimization',
        'Leak Detection Systems',
        'Insulation & Protection',
        'Remote Monitoring'
      ],
      process: [
        { step: 'Route Planning', desc: 'Optimal pathway design and surveying' },
        { step: 'Pipe Fabrication', desc: 'Custom pipe manufacturing' },
        { step: 'Installation', desc: 'Professional laying and connection' },
        { step: 'Commissioning', desc: 'Testing and system activation' }
      ],
      benefits: ['Zero Leakage', 'Smart Monitoring', '50+ Year Design'],
      timeline: '10-16 weeks',
      complexity: 'High'
    },
    {
      id: 5,
      icon: <MdElectricBolt />,
      title: 'Electrical Panel Building',
      category: 'Control Systems',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      shortDesc: 'Custom electrical panels with advanced control systems',
      fullDescription: 'We design and build sophisticated electrical control panels that integrate seamlessly with your industrial processes. Our panels feature advanced automation, safety systems, and user-friendly interfaces for optimal operational efficiency.',
      features: [
        'PLC Integration',
        'HMI Interfaces',
        'Safety Circuits',
        'Remote Access'
      ],
      process: [
        { step: 'System Design', desc: 'Electrical schematic development' },
        { step: 'Component Selection', desc: 'Quality component sourcing' },
        { step: 'Assembly', desc: 'Professional panel construction' },
        { step: 'Programming', desc: 'Software configuration and testing' }
      ],
      benefits: ['Smart Automation', 'Energy Efficient', 'User Friendly'],
      timeline: '3-6 weeks',
      complexity: 'Medium'
    },
    {
      id: 6,
      icon: <MdConstruction />,
      title: 'Installation & Erection',
      category: 'Project Management',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      shortDesc: 'Professional installation services with expert project management',
      fullDescription: 'Our experienced installation teams handle complete project execution from planning to commissioning. We ensure minimal disruption to your operations while maintaining the highest safety and quality standards throughout the process.',
      features: [
        'Project Planning',
        'Safety Management',
        'Quality Assurance',
        'Timeline Management'
      ],
      process: [
        { step: 'Pre-Installation', desc: 'Site preparation and planning' },
        { step: 'Installation', desc: 'Professional equipment installation' },
        { step: 'Testing', desc: 'Comprehensive system testing' },
        { step: 'Handover', desc: 'Training and documentation' }
      ],
      benefits: ['Zero Accidents', 'On-Time Delivery', 'Full Training'],
      timeline: '2-8 weeks',
      complexity: 'Variable'
    }
  ];

  return (
    <section className="services-showcase" ref={sectionRef}>
      <div className="showcase-container">
        {/* Header */}
        <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-badge">
            <span>Our Services</span>
          </div>
          <h2 className="showcase-title">
            Engineering Excellence in
            <span className="title-highlight"> Every Detail</span>
          </h2>
          <div className="title-divider"></div>
          <p className="showcase-subtitle">
            Comprehensive manufacturing and engineering solutions designed to transform 
            your industrial operations with precision, efficiency, and innovation.
          </p>
        </div>

        {/* Services Navigation */}
        <div className={`services-nav ${isVisible ? 'animate-in' : ''}`}>
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`nav-item ${activeService === index ? 'active' : ''}`}
              onClick={() => setActiveService(index)}
            >
              <div className="nav-image">
                <img src={service.image} alt={service.title} />
                <div className="nav-overlay">
                  <div className="nav-icon">{service.icon}</div>
                </div>
              </div>
              <div className="nav-content">
                <h4>{service.title}</h4>
                <span>{service.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Service Detail */}
        <div className={`service-detail-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="detail-grid">
            {/* Main Content */}
            <div className="detail-main">
              {/* Service Image Header */}
              <div className="service-image-header">
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="service-main-image"
                />
                <div className="image-overlay">
                  <div className="service-badge">
                    <div className="badge-icon">
                      {services[activeService].icon}
                    </div>
                    <span>{services[activeService].category}</span>
                  </div>
                </div>
              </div>

              <div className="service-header">
                <div className="service-meta">
                  <span className="category-tag">{services[activeService].category}</span>
                  <div className="meta-items">
                    <div className="meta-item">
                      <FaClipboardCheck />
                      <span>{services[activeService].timeline}</span>
                    </div>
                    <div className="meta-item">
                      <FaCog />
                      <span>{services[activeService].complexity}</span>
                    </div>
                  </div>
                </div>
                <h3 className="service-title">{services[activeService].title}</h3>
                <p className="service-description">{services[activeService].fullDescription}</p>
              </div>

              {/* Features */}
              <div className="features-section">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaShieldAlt />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="process-section">
                <h4>Our Process</h4>
                <div className="process-steps">
                  {services[activeService].process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h5>{step.step}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="detail-sidebar">
              {/* Benefits */}
              <div className="benefits-card">
                <h4>Key Benefits</h4>
                <div className="benefits-list">
                  {services[activeService].benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <FaRocket />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="stats-card">
                <h4>Project Insights</h4>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Success Rate</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">ISO</div>
                    <div className="stat-label">Certified</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Projects</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="cta-card">
                <h4>Ready to Get Started?</h4>
                <p>Let's discuss your project requirements and create a custom solution.</p>
                <button className="cta-button">
                  <span>Request Quote</span>
                  <FaTools />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;