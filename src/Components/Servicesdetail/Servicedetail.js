// // // import React, { useState, useEffect, useRef } from 'react';
// // // import './Servicedetail.css';
// // // import { 
// // //   MdPrecisionManufacturing, 
// // //   MdEngineering, 
// // //   MdArchitecture,
// // //   MdBuild,
// // //   MdElectricBolt,
// // //   MdConstruction 
// // // } from "react-icons/md";
// // // import { 
// // //   FaIndustry, 
// // //   FaTools, 
// // //   FaClipboardCheck,
// // //   FaCog,
// // //   FaShieldAlt,
// // //   FaRocket
// // // } from "react-icons/fa";

// // // const ServicesShowcase = () => {
// // //   const [activeService, setActiveService] = useState(0);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const services = [
// // //     {
// // //       id: 1,
// // //       icon: <MdPrecisionManufacturing />,
// // //       title: 'Manufacturing Machinery',
// // //       category: 'Production Systems',
// // //       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// // //       shortDesc: 'State-of-the-art machinery manufacturing with precision engineering',
// // //       fullDescription: 'We specialize in designing and manufacturing custom industrial machinery that meets the highest standards of precision and reliability. Our advanced manufacturing processes ensure optimal performance, reduced downtime, and exceptional longevity for all equipment.',
// // //       features: [
// // //         'Custom Design & Engineering',
// // //         'CNC Precision Manufacturing',
// // //         'Quality Control Systems',
// // //         'Performance Optimization'
// // //       ],
// // //       process: [
// // //         { step: 'Consultation', desc: 'Understanding your specific requirements' },
// // //         { step: 'Design', desc: 'Creating detailed engineering blueprints' },
// // //         { step: 'Manufacturing', desc: 'Precision fabrication and assembly' },
// // //         { step: 'Testing', desc: 'Comprehensive quality assurance' }
// // //       ],
// // //       benefits: ['50% Faster Production', '99% Accuracy Rate', '24/7 Support'],
// // //       timeline: '8-12 weeks',
// // //       complexity: 'High'
// // //     },
// // //     {
// // //       id: 2,
// // //       icon: <MdArchitecture />,
// // //       title: 'Structural Steel Work',
// // //       category: 'Infrastructure',
// // //       image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
// // //       shortDesc: 'Custom structural steel solutions for diverse industrial applications',
// // //       fullDescription: 'Our structural steel work encompasses everything from simple frameworks to complex architectural structures. We combine traditional craftsmanship with modern technology to deliver structures that are both aesthetically pleasing and structurally sound.',
// // //       features: [
// // //         'Custom Structural Design',
// // //         'Fabrication & Welding',
// // //         'Surface Treatment',
// // //         'Installation Services'
// // //       ],
// // //       process: [
// // //         { step: 'Site Survey', desc: 'Detailed site analysis and measurements' },
// // //         { step: 'Structural Design', desc: 'Engineering calculations and drawings' },
// // //         { step: 'Fabrication', desc: 'Cutting, welding, and assembly' },
// // //         { step: 'Installation', desc: 'On-site erection and finishing' }
// // //       ],
// // //       benefits: ['Earthquake Resistant', '100+ Year Lifespan', 'Cost Effective'],
// // //       timeline: '6-10 weeks',
// // //       complexity: 'Medium'
// // //     },
// // //     {
// // //       id: 3,
// // //       icon: <FaIndustry />,
// // //       title: 'Industrial Tanks & Receivers',
// // //       category: 'Storage Solutions',
// // //       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// // //       shortDesc: 'Industrial-grade tanks and receivers built to exact specifications',
// // //       fullDescription: 'We manufacture a comprehensive range of industrial tanks and pressure vessels designed to handle various media under different operating conditions. Our tanks are built to international standards with rigorous testing protocols.',
// // //       features: [
// // //         'Pressure Vessel Design',
// // //         'Corrosion Resistance',
// // //         'Safety Systems',
// // //         'Compliance Certification'
// // //       ],
// // //       process: [
// // //         { step: 'Requirements', desc: 'Defining capacity and specifications' },
// // //         { step: 'Engineering', desc: 'Pressure calculations and design' },
// // //         { step: 'Fabrication', desc: 'Welding and assembly processes' },
// // //         { step: 'Testing', desc: 'Pressure testing and certification' }
// // //       ],
// // //       benefits: ['ASME Certified', 'Leak-Proof Design', 'Long Service Life'],
// // //       timeline: '4-8 weeks',
// // //       complexity: 'High'
// // //     },
// // //     {
// // //       id: 4,
// // //       icon: <MdBuild />,
// // //       title: 'Pipeline Systems',
// // //       category: 'Infrastructure',
// // //       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// // //       shortDesc: 'Comprehensive pipeline solutions with safety compliance',
// // //       fullDescription: 'Our pipeline systems are engineered for optimal flow characteristics and maximum durability. We handle everything from design and fabrication to installation and commissioning, ensuring seamless integration with existing infrastructure.',
// // //       features: [
// // //         'Flow Optimization',
// // //         'Leak Detection Systems',
// // //         'Insulation & Protection',
// // //         'Remote Monitoring'
// // //       ],
// // //       process: [
// // //         { step: 'Route Planning', desc: 'Optimal pathway design and surveying' },
// // //         { step: 'Pipe Fabrication', desc: 'Custom pipe manufacturing' },
// // //         { step: 'Installation', desc: 'Professional laying and connection' },
// // //         { step: 'Commissioning', desc: 'Testing and system activation' }
// // //       ],
// // //       benefits: ['Zero Leakage', 'Smart Monitoring', '50+ Year Design'],
// // //       timeline: '10-16 weeks',
// // //       complexity: 'High'
// // //     },
// // //     {
// // //       id: 5,
// // //       icon: <MdElectricBolt />,
// // //       title: 'Electrical Panel Building',
// // //       category: 'Control Systems',
// // //       image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
// // //       shortDesc: 'Custom electrical panels with advanced control systems',
// // //       fullDescription: 'We design and build sophisticated electrical control panels that integrate seamlessly with your industrial processes. Our panels feature advanced automation, safety systems, and user-friendly interfaces for optimal operational efficiency.',
// // //       features: [
// // //         'PLC Integration',
// // //         'HMI Interfaces',
// // //         'Safety Circuits',
// // //         'Remote Access'
// // //       ],
// // //       process: [
// // //         { step: 'System Design', desc: 'Electrical schematic development' },
// // //         { step: 'Component Selection', desc: 'Quality component sourcing' },
// // //         { step: 'Assembly', desc: 'Professional panel construction' },
// // //         { step: 'Programming', desc: 'Software configuration and testing' }
// // //       ],
// // //       benefits: ['Smart Automation', 'Energy Efficient', 'User Friendly'],
// // //       timeline: '3-6 weeks',
// // //       complexity: 'Medium'
// // //     },
// // //     {
// // //       id: 6,
// // //       icon: <MdConstruction />,
// // //       title: 'Installation & Erection',
// // //       category: 'Project Management',
// // //       image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// // //       shortDesc: 'Professional installation services with expert project management',
// // //       fullDescription: 'Our experienced installation teams handle complete project execution from planning to commissioning. We ensure minimal disruption to your operations while maintaining the highest safety and quality standards throughout the process.',
// // //       features: [
// // //         'Project Planning',
// // //         'Safety Management',
// // //         'Quality Assurance',
// // //         'Timeline Management'
// // //       ],
// // //       process: [
// // //         { step: 'Pre-Installation', desc: 'Site preparation and planning' },
// // //         { step: 'Installation', desc: 'Professional equipment installation' },
// // //         { step: 'Testing', desc: 'Comprehensive system testing' },
// // //         { step: 'Handover', desc: 'Training and documentation' }
// // //       ],
// // //       benefits: ['Zero Accidents', 'On-Time Delivery', 'Full Training'],
// // //       timeline: '2-8 weeks',
// // //       complexity: 'Variable'
// // //     }
// // //   ];

// // //   return (
// // //     <section className="services-showcase" ref={sectionRef}>
// // //       <div className="showcase-container">
// // //         {/* Header */}
// // //         <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
// // //           <div className="header-badge">
// // //             <span>Our Services</span>
// // //           </div>
// // //           <h2 className="showcase-title">
// // //             Engineering Excellence in
// // //             <span className="title-highlight"> Every Detail</span>
// // //           </h2>
// // //           <div className="title-divider"></div>
// // //           <p className="showcase-subtitle">
// // //             Comprehensive manufacturing and engineering solutions designed to transform 
// // //             your industrial operations with precision, efficiency, and innovation.
// // //           </p>
// // //         </div>

// // //         {/* Services Navigation */}
// // //         <div className={`services-nav ${isVisible ? 'animate-in' : ''}`}>
// // //           {services.map((service, index) => (
// // //             <button
// // //               key={service.id}
// // //               className={`nav-item ${activeService === index ? 'active' : ''}`}
// // //               onClick={() => setActiveService(index)}
// // //             >
// // //               <div className="nav-image">
// // //                 <img src={service.image} alt={service.title} />
// // //                 <div className="nav-overlay">
// // //                   <div className="nav-icon">{service.icon}</div>
// // //                 </div>
// // //               </div>
// // //               <div className="nav-content">
// // //                 <h4>{service.title}</h4>
// // //                 <span>{service.category}</span>
// // //               </div>
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Active Service Detail */}
// // //         <div className={`service-detail ${isVisible ? 'animate-in' : ''}`}>
// // //           <div className="detail-grid">
// // //             {/* Main Content */}
// // //             <div className="detail-main">
// // //               {/* Service Image Header */}
// // //               <div className="service-image-header">
// // //                 <img 
// // //                   src={services[activeService].image} 
// // //                   alt={services[activeService].title}
// // //                   className="service-main-image"
// // //                 />
// // //                 <div className="image-overlay">
// // //                   <div className="service-badge">
// // //                     <div className="badge-icon">
// // //                       {services[activeService].icon}
// // //                     </div>
// // //                     <span>{services[activeService].category}</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="service-header">
// // //                 <div className="service-meta">
// // //                   <span className="category-tag">{services[activeService].category}</span>
// // //                   <div className="meta-items">
// // //                     <div className="meta-item">
// // //                       <FaClipboardCheck />
// // //                       <span>{services[activeService].timeline}</span>
// // //                     </div>
// // //                     <div className="meta-item">
// // //                       <FaCog />
// // //                       <span>{services[activeService].complexity}</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <h3 className="service-title">{services[activeService].title}</h3>
// // //                 <p className="service-description">{services[activeService].fullDescription}</p>
// // //               </div>

// // //               {/* Features */}
// // //               <div className="features-section">
// // //                 <h4>Key Features</h4>
// // //                 <div className="features-grid">
// // //                   {services[activeService].features.map((feature, index) => (
// // //                     <div key={index} className="feature-item">
// // //                       <FaShieldAlt />
// // //                       <span>{feature}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* Process */}
// // //               <div className="process-section">
// // //                 <h4>Our Process</h4>
// // //                 <div className="process-steps">
// // //                   {services[activeService].process.map((step, index) => (
// // //                     <div key={index} className="process-step">
// // //                       <div className="step-number">{index + 1}</div>
// // //                       <div className="step-content">
// // //                         <h5>{step.step}</h5>
// // //                         <p>{step.desc}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Sidebar */}
// // //             <div className="detail-sidebar">
// // //               {/* Benefits */}
// // //               <div className="benefits-card">
// // //                 <h4>Key Benefits</h4>
// // //                 <div className="benefits-list">
// // //                   {services[activeService].benefits.map((benefit, index) => (
// // //                     <div key={index} className="benefit-item">
// // //                       <FaRocket />
// // //                       <span>{benefit}</span>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* Quick Stats */}
// // //               <div className="stats-card">
// // //                 <h4>Project Insights</h4>
// // //                 <div className="stats-grid">
// // //                   <div className="stat">
// // //                     <div className="stat-number">98%</div>
// // //                     <div className="stat-label">Success Rate</div>
// // //                   </div>
// // //                   <div className="stat">
// // //                     <div className="stat-number">24/7</div>
// // //                     <div className="stat-label">Support</div>
// // //                   </div>
// // //                   <div className="stat">
// // //                     <div className="stat-number">ISO</div>
// // //                     <div className="stat-label">Certified</div>
// // //                   </div>
// // //                   <div className="stat">
// // //                     <div className="stat-number">50+</div>
// // //                     <div className="stat-label">Projects</div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* CTA */}
// // //               <div className="cta-card">
// // //                 <h4>Ready to Get Started?</h4>
// // //                 <p>Let's discuss your project requirements and create a custom solution.</p>
// // //                 <button className="cta-button">
// // //                   <span>Request Quote</span>
// // //                   <FaTools />
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesShowcase;

// // import React, { useState, useEffect, useRef } from 'react';
// // import './Servicedetail.css';
// // import { 
// //   MdPrecisionManufacturing, 
// //   MdEngineering, 
// //   MdArchitecture,
// //   MdBuild,
// //   MdElectricBolt,
// //   MdConstruction 
// // } from "react-icons/md";
// // import { 
// //   FaIndustry, 
// //   FaTools, 
// //   FaClipboardCheck,
// //   FaCog,
// //   FaShieldAlt,
// //   FaRocket
// // } from "react-icons/fa";

// // const ServicesShowcase = () => {
// //   const [activeService, setActiveService] = useState(0);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.1 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   const services = [
// //     {
// //       id: 1,
// //       icon: <MdPrecisionManufacturing />,
// //       title: 'Manufacturing Machinery',
// //       category: 'Production Systems',
// //       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// //       shortDesc: 'State-of-the-art machinery manufacturing with precision engineering',
// //       fullDescription: 'We specialize in designing and manufacturing custom industrial machinery that meets the highest standards of precision and reliability. Our advanced manufacturing processes ensure optimal performance, reduced downtime, and exceptional longevity for all equipment.',
// //       features: [
// //         'Custom Design & Engineering',
// //         'CNC Precision Manufacturing',
// //         'Quality Control Systems',
// //         'Performance Optimization'
// //       ],
// //       process: [
// //         { step: 'Consultation', desc: 'Understanding your specific requirements' },
// //         { step: 'Design', desc: 'Creating detailed engineering blueprints' },
// //         { step: 'Manufacturing', desc: 'Precision fabrication and assembly' },
// //         { step: 'Testing', desc: 'Comprehensive quality assurance' }
// //       ],
// //       benefits: ['50% Faster Production', '99% Accuracy Rate', '24/7 Support'],
// //       timeline: '8-12 weeks',
// //       complexity: 'High'
// //     },
// //     {
// //       id: 2,
// //       icon: <MdArchitecture />,
// //       title: 'Structural Steel Work',
// //       category: 'Infrastructure',
// //       image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
// //       shortDesc: 'Custom structural steel solutions for diverse industrial applications',
// //       fullDescription: 'Our structural steel work encompasses everything from simple frameworks to complex architectural structures. We combine traditional craftsmanship with modern technology to deliver structures that are both aesthetically pleasing and structurally sound.',
// //       features: [
// //         'Custom Structural Design',
// //         'Fabrication & Welding',
// //         'Surface Treatment',
// //         'Installation Services'
// //       ],
// //       process: [
// //         { step: 'Site Survey', desc: 'Detailed site analysis and measurements' },
// //         { step: 'Structural Design', desc: 'Engineering calculations and drawings' },
// //         { step: 'Fabrication', desc: 'Cutting, welding, and assembly' },
// //         { step: 'Installation', desc: 'On-site erection and finishing' }
// //       ],
// //       benefits: ['Earthquake Resistant', '100+ Year Lifespan', 'Cost Effective'],
// //       timeline: '6-10 weeks',
// //       complexity: 'Medium'
// //     },
// //     {
// //       id: 3,
// //       icon: <FaIndustry />,
// //       title: 'Industrial Tanks & Receivers',
// //       category: 'Storage Solutions',
// //       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// //       shortDesc: 'Industrial-grade tanks and receivers built to exact specifications',
// //       fullDescription: 'We manufacture a comprehensive range of industrial tanks and pressure vessels designed to handle various media under different operating conditions. Our tanks are built to international standards with rigorous testing protocols.',
// //       features: [
// //         'Pressure Vessel Design',
// //         'Corrosion Resistance',
// //         'Safety Systems',
// //         'Compliance Certification'
// //       ],
// //       process: [
// //         { step: 'Requirements', desc: 'Defining capacity and specifications' },
// //         { step: 'Engineering', desc: 'Pressure calculations and design' },
// //         { step: 'Fabrication', desc: 'Welding and assembly processes' },
// //         { step: 'Testing', desc: 'Pressure testing and certification' }
// //       ],
// //       benefits: ['ASME Certified', 'Leak-Proof Design', 'Long Service Life'],
// //       timeline: '4-8 weeks',
// //       complexity: 'High'
// //     },
// //     {
// //       id: 4,
// //       icon: <MdBuild />,
// //       title: 'Pipeline Systems',
// //       category: 'Infrastructure',
// //       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// //       shortDesc: 'Comprehensive pipeline solutions with safety compliance',
// //       fullDescription: 'Our pipeline systems are engineered for optimal flow characteristics and maximum durability. We handle everything from design and fabrication to installation and commissioning, ensuring seamless integration with existing infrastructure.',
// //       features: [
// //         'Flow Optimization',
// //         'Leak Detection Systems',
// //         'Insulation & Protection',
// //         'Remote Monitoring'
// //       ],
// //       process: [
// //         { step: 'Route Planning', desc: 'Optimal pathway design and surveying' },
// //         { step: 'Pipe Fabrication', desc: 'Custom pipe manufacturing' },
// //         { step: 'Installation', desc: 'Professional laying and connection' },
// //         { step: 'Commissioning', desc: 'Testing and system activation' }
// //       ],
// //       benefits: ['Zero Leakage', 'Smart Monitoring', '50+ Year Design'],
// //       timeline: '10-16 weeks',
// //       complexity: 'High'
// //     },
// //     {
// //       id: 5,
// //       icon: <MdElectricBolt />,
// //       title: 'Electrical Panel Building',
// //       category: 'Control Systems',
// //       image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
// //       shortDesc: 'Custom electrical panels with advanced control systems',
// //       fullDescription: 'We design and build sophisticated electrical control panels that integrate seamlessly with your industrial processes. Our panels feature advanced automation, safety systems, and user-friendly interfaces for optimal operational efficiency.',
// //       features: [
// //         'PLC Integration',
// //         'HMI Interfaces',
// //         'Safety Circuits',
// //         'Remote Access'
// //       ],
// //       process: [
// //         { step: 'System Design', desc: 'Electrical schematic development' },
// //         { step: 'Component Selection', desc: 'Quality component sourcing' },
// //         { step: 'Assembly', desc: 'Professional panel construction' },
// //         { step: 'Programming', desc: 'Software configuration and testing' }
// //       ],
// //       benefits: ['Smart Automation', 'Energy Efficient', 'User Friendly'],
// //       timeline: '3-6 weeks',
// //       complexity: 'Medium'
// //     },
// //     {
// //       id: 6,
// //       icon: <MdConstruction />,
// //       title: 'Installation & Erection',
// //       category: 'Project Management',
// //       image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// //       shortDesc: 'Professional installation services with expert project management',
// //       fullDescription: 'Our experienced installation teams handle complete project execution from planning to commissioning. We ensure minimal disruption to your operations while maintaining the highest safety and quality standards throughout the process.',
// //       features: [
// //         'Project Planning',
// //         'Safety Management',
// //         'Quality Assurance',
// //         'Timeline Management'
// //       ],
// //       process: [
// //         { step: 'Pre-Installation', desc: 'Site preparation and planning' },
// //         { step: 'Installation', desc: 'Professional equipment installation' },
// //         { step: 'Testing', desc: 'Comprehensive system testing' },
// //         { step: 'Handover', desc: 'Training and documentation' }
// //       ],
// //       benefits: ['Zero Accidents', 'On-Time Delivery', 'Full Training'],
// //       timeline: '2-8 weeks',
// //       complexity: 'Variable'
// //     }
// //   ];

// //   return (
// //     <section className="services-showcase" ref={sectionRef}>
// //       <div className="showcase-container">
// //         {/* Header */}
// //         <div className={`showcase-header ${isVisible ? 'animate-in' : ''}`}>
// //           <div className="header-badge">
// //             <span>Our Services</span>
// //           </div>
// //           <h2 className="showcase-title">
// //             Engineering Excellence in
// //             <span className="title-highlight"> Every Detail</span>
// //           </h2>
// //           <div className="title-divider"></div>
// //           <p className="showcase-subtitle">
// //             Comprehensive manufacturing and engineering solutions designed to transform 
// //             your industrial operations with precision, efficiency, and innovation.
// //           </p>
// //         </div>

// //         {/* Services Navigation */}
// //         <div className={`services-nav ${isVisible ? 'animate-in' : ''}`}>
// //           {services.map((service, index) => (
// //             <button
// //               key={service.id}
// //               className={`nav-item ${activeService === index ? 'active' : ''}`}
// //               onClick={() => setActiveService(index)}
// //             >
// //               <div className="nav-image">
// //                 <img src={service.image} alt={service.title} />
// //                 <div className="nav-overlay">
// //                   <div className="nav-icon">{service.icon}</div>
// //                 </div>
// //               </div>
// //               <div className="nav-content">
// //                 <h4>{service.title}</h4>
// //                 <span>{service.category}</span>
// //               </div>
// //             </button>
// //           ))}
// //         </div>

// //         {/* Active Service Detail */}
// //         <div className={`service-detail-container ${isVisible ? 'animate-in' : ''}`}>
// //           <div className="detail-grid">
// //             {/* Main Content */}
// //             <div className="detail-main">
// //               {/* Service Image Header */}
// //               <div className="service-image-header">
// //                 <img 
// //                   src={services[activeService].image} 
// //                   alt={services[activeService].title}
// //                   className="service-main-image"
// //                 />
// //                 <div className="image-overlay">
// //                   <div className="service-badge">
// //                     <div className="badge-icon">
// //                       {services[activeService].icon}
// //                     </div>
// //                     <span>{services[activeService].category}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="service-header">
// //                 <div className="service-meta">
// //                   <span className="category-tag">{services[activeService].category}</span>
// //                   <div className="meta-items">
// //                     <div className="meta-item">
// //                       <FaClipboardCheck />
// //                       <span>{services[activeService].timeline}</span>
// //                     </div>
// //                     <div className="meta-item">
// //                       <FaCog />
// //                       <span>{services[activeService].complexity}</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <h3 className="service-title">{services[activeService].title}</h3>
// //                 <p className="service-description">{services[activeService].fullDescription}</p>
// //               </div>

// //               {/* Features */}
// //               <div className="features-section">
// //                 <h4>Key Features</h4>
// //                 <div className="features-grid">
// //                   {services[activeService].features.map((feature, index) => (
// //                     <div key={index} className="feature-item">
// //                       <FaShieldAlt />
// //                       <span>{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Process */}
// //               <div className="process-section">
// //                 <h4>Our Process</h4>
// //                 <div className="process-steps">
// //                   {services[activeService].process.map((step, index) => (
// //                     <div key={index} className="process-step">
// //                       <div className="step-number">{index + 1}</div>
// //                       <div className="step-content">
// //                         <h5>{step.step}</h5>
// //                         <p>{step.desc}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Sidebar */}
// //             <div className="detail-sidebar">
// //               {/* Benefits */}
// //               <div className="benefits-card">
// //                 <h4>Key Benefits</h4>
// //                 <div className="benefits-list">
// //                   {services[activeService].benefits.map((benefit, index) => (
// //                     <div key={index} className="benefit-item">
// //                       <FaRocket />
// //                       <span>{benefit}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Quick Stats */}
// //               <div className="stats-card">
// //                 <h4>Project Insights</h4>
// //                 <div className="stats-grid">
// //                   <div className="stat">
// //                     <div className="stat-number">98%</div>
// //                     <div className="stat-label">Success Rate</div>
// //                   </div>
// //                   <div className="stat">
// //                     <div className="stat-number">24/7</div>
// //                     <div className="stat-label">Support</div>
// //                   </div>
// //                   <div className="stat">
// //                     <div className="stat-number">ISO</div>
// //                     <div className="stat-label">Certified</div>
// //                   </div>
// //                   <div className="stat">
// //                     <div className="stat-number">50+</div>
// //                     <div className="stat-label">Projects</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* CTA */}
// //               <div className="cta-card">
// //                 <h4>Ready to Get Started?</h4>
// //                 <p>Let's discuss your project requirements and create a custom solution.</p>
// //                 <button className="cta-button">
// //                   <span>Request Quote</span>
// //                   <FaTools />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesShowcase;


// import { useState, useEffect, useRef } from "react";

// const services = [
//   {
//     id: "steel-structure",
//     number: "01",
//     title: "Steel Structure",
//     subtitle: "Industrial & High-Rise",
//     items: [
//       {
//         name: "PEB Warehouses",
//         detail:
//           "Pre-Engineered Building warehouse construction is our core specialty. We design and fabricate complete PEB solutions with precision-cut structural members, purlins, girts, and cladding systems — delivering faster project timelines and cost-efficient, durable industrial spaces.",
//       },
//       {
//         name: "Machine Platforms & Walkways",
//         detail:
//           "Heavy-duty structural steel platforms engineered to support industrial machinery loads, along with elevated walkways for safe personnel access. Designed per IS/AISC standards with anti-slip grating and safety handrails.",
//       },
//       {
//         name: "Steel Bridges",
//         detail:
//           "Custom steel bridge structures for industrial campuses and infrastructure projects. Engineered for load-bearing capacity, seismic compliance, and long-term durability with hot-dip galvanized or epoxy-coated finishes.",
//       },
//     ],
//     highlight: "Core Specialty",
//   },
//   {
//     id: "storage",
//     number: "02",
//     title: "Storage Solutions",
//     subtitle: "Tanks & Vessels",
//     items: [
//       {
//         name: "Tanks (MS / SS)",
//         detail:
//           "Fabrication of Mild Steel and Stainless Steel storage tanks for water, chemicals, oils, and solvents. Available in vertical and horizontal configurations with capacities ranging from 500 liters to 100,000+ liters.",
//       },
//       {
//         name: "Mother & Day Tanks",
//         detail:
//           "Large-capacity mother tanks for bulk storage of water, oil, and solvents, paired with smaller day tanks for daily operational supply. Designed with level indicators, manholes, and drain fittings.",
//       },
//       {
//         name: "Pressure Vessels",
//         detail:
//           "ASME and IS-coded pressure vessels for various industrial applications including air receivers, steam drums, and process vessels. Manufactured with full radiographic testing and hydrostatic proof testing.",
//       },
//       {
//         name: "Underground Tanks",
//         detail:
//           "Below-ground storage solutions with corrosion-resistant coatings and cathodic protection. Ideal for fuel storage, water harvesting, and chemical containment with leak detection systems.",
//       },
//       {
//         name: "Peso Tanks",
//         detail:
//           "Specialized tank configurations designed for specific industrial requirements with PESO (Petroleum and Explosives Safety Organisation) compliance for hazardous material storage.",
//       },
//     ],
//     highlight: "5 Types",
//   },
//   {
//     id: "bulk",
//     number: "03",
//     title: "Bulk Material Handling",
//     subtitle: "Silos & Hoppers",
//     items: [
//       {
//         name: "Grain Storage Silos",
//         detail:
//           "Large-capacity silos for grain, cement, fly ash, and other bulk materials. Constructed with bolted or welded steel panels, aeration floors, temperature monitoring systems, and discharge mechanisms.",
//       },
//       {
//         name: "Industrial Hoppers",
//         detail:
//           "Conical and pyramidal hoppers for controlled material discharge. Designed with optimal cone angles to prevent bridging and rat-holing, equipped with vibrators and flow-aid devices for reliable material flow.",
//       },
//       {
//         name: "Bulk Handling Systems",
//         detail:
//           "Complete turnkey bulk material handling solutions integrating storage, conveying, and dosing systems. Engineered for dust-free operation with enclosed transfer points and aspiration systems.",
//       },
//     ],
//     highlight: "Heavy Duty",
//   },
//   {
//     id: "conveying",
//     number: "04",
//     title: "Conveying Systems",
//     subtitle: "Transport & Elevation",
//     items: [
//       {
//         name: "Chain Conveyors",
//         detail:
//           "Enclosed chain conveyors including capsule-type drag conveyors for dust-free horizontal and inclined material transport. Ideal for grains, powders, and granular materials with minimal product degradation.",
//       },
//       {
//         name: "Bucket Elevators",
//         detail:
//           "Centrifugal and continuous bucket elevators for vertical material transport. Available in belt and chain types with capacities from 10 TPH to 500+ TPH, designed for abrasive and free-flowing materials.",
//       },
//       {
//         name: "Screw Conveyors",
//         detail:
//           "Shafted and shaftless screw conveyors for moving granular, semi-solid, and sticky materials. Customizable flight designs including standard, cut, folded, and ribbon flights for specific material characteristics.",
//       },
//     ],
//     highlight: "3 Systems",
//   },
//   {
//     id: "equipment",
//     number: "05",
//     title: "Equipment & Process Machinery",
//     subtitle: "HT/LT · Pharma · Chemical · Feed · Food",
//     items: [
//       {
//         name: "Reactors",
//         detail:
//           "Industrial reactors for HT/LT, pharmaceutical, and chemical applications. Includes agitated reactors, jacketed vessels, and limpet coil reactors in SS 304/316 and MS with glass-lined or rubber-lined options.",
//       },
//       {
//         name: "Heat Exchangers",
//         detail:
//           "Shell-and-tube heat exchangers, plate heat exchangers, and surface condensors for thermal processing. Designed per TEMA standards with optimized heat transfer coefficients and pressure drop calculations.",
//       },
//       {
//         name: "Mixers & Grinders",
//         detail:
//           "Ribbon blenders, paddle mixers, and hammer mills for feed and food industry applications. Built with food-grade stainless steel, easy-clean designs, and variable speed drives for precise mixing control.",
//       },
//       {
//         name: "Feeders",
//         detail:
//           "Vibratory feeders, rotary valve feeders, and belt feeders for precise material dosing. Designed for consistent feed rates with variable frequency drives and load cell integration for gravimetric control.",
//       },
//       {
//         name: "Cyclone Separators",
//         detail:
//           "High-efficiency cyclone separators for dust collection and material separation. Single and multi-cyclone configurations with collection efficiencies up to 99% for particles above 10 microns.",
//       },
//     ],
//     highlight: "Multi-Industry",
//   },
//   {
//     id: "residential",
//     number: "06",
//     title: "Residential & Misc Steel",
//     subtitle: "Railings & Safety",
//     items: [
//       {
//         name: "Railings",
//         detail:
//           "Custom-designed railings in MS, SS, and aluminum for residential buildings, commercial complexes, and industrial facilities. Includes balustrades, staircase railings, and balcony guards with powder-coated or polished finishes.",
//       },
//       {
//         name: "Fire Escape Installation",
//         detail:
//           "Fire safety staircase structures and escape route installations compliant with NBC fire safety norms. Includes external fire escape stairs, access ladders, and emergency exit frameworks with anti-corrosive treatment.",
//       },
//     ],
//     highlight: "Safety First",
//   },
//   {
//     id: "piping",
//     number: "07",
//     title: "Piping Systems",
//     subtitle: "Utility · Process · Fire · Densephase",
//     items: [
//       {
//         name: "Utility Piping",
//         detail:
//           "General utility and service piping for compressed air, water, steam, and gas distribution. Fabricated and installed with proper supports, expansion joints, and isolation valves per applicable codes.",
//       },
//       {
//         name: "Process Piping",
//         detail:
//           "Industrial process piping systems for chemical, pharmaceutical, and food processing plants. Includes SS and CS piping with orbital welding, passivation, and full documentation packages.",
//       },
//       {
//         name: "Fire / Bleed System (LP/HP)",
//         detail:
//           "Low pressure and high pressure fire suppression piping and bleed systems. Designed per NFPA standards with hydrant systems, sprinkler networks, and deluge systems including hydraulic calculations.",
//       },
//       {
//         name: "Densephase Piping",
//         detail:
//           "Dense phase pneumatic conveying piping systems for gentle, low-velocity transport of abrasive or fragile materials. Engineered with wear-resistant bends, diverter valves, and optimized pipeline routing.",
//       },
//     ],
//     highlight: "4 Categories",
//   },
//   {
//     id: "chimneys",
//     number: "08",
//     title: "Chimneys",
//     subtitle: "Industrial Grade",
//     items: [
//       {
//         name: "Industrial Chimneys",
//         detail:
//           "Self-supporting and guyed industrial chimneys ranging from 2 tons to 15 tons capacity. Fabricated with refractory lining, rain caps, inspection doors, and lightning protection systems per IS 6533 standards.",
//       },
//       {
//         name: "Custom Specifications",
//         detail:
//           "Chimneys engineered to specific emission requirements with flue gas analysis integration, damper systems, and multi-flue configurations. Available in carbon steel, stainless steel, and dual-wall insulated designs.",
//       },
//     ],
//     highlight: "Up to 15T",
//   },
//   {
//     id: "racking",
//     number: "09",
//     title: "Racking Systems",
//     subtitle: "Warehouse Organization",
//     items: [
//       {
//         name: "Pallet Racking",
//         detail:
//           "Selective, drive-in, and push-back pallet racking systems for warehouse storage optimization. Engineered for specific load capacities with seismic bracing, column protectors, and wire mesh decking options.",
//       },
//       {
//         name: "Plate Stacking",
//         detail:
//           "Specialized plate stacking and organization systems for steel service centers and fabrication shops. Includes cantilever racks, A-frame storage, and automated plate retrieval configurations.",
//       },
//     ],
//     highlight: "Storage",
//   },
// ];

// /* ─── Detail Modal ─── */
// const DetailModal = ({ service, onClose }) => {
//   const [activeItem, setActiveItem] = useState(0);
//   const [entering, setEntering] = useState(false);

//   useEffect(() => {
//     requestAnimationFrame(() => setEntering(true));
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   const handleClose = () => {
//     setEntering(false);
//     setTimeout(onClose, 300);
//   };

//   return (
//     <div
//       onClick={handleClose}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 1000,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: entering ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0)",
//         backdropFilter: entering ? "blur(6px)" : "blur(0px)",
//         transition: "all 0.3s ease",
//         padding: "24px",
//       }}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           background: "#ffffff",
//           borderRadius: "16px",
//           width: "100%",
//           maxWidth: "720px",
//           maxHeight: "85vh",
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           transform: entering ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
//           opacity: entering ? 1 : 0,
//           transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
//           boxShadow:
//             "0 24px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
//         }}
//       >
//         {/* Modal Header */}
//         <div
//           style={{
//             background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
//             padding: "28px 28px 24px",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               opacity: 0.05,
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
//               backgroundSize: "20px 20px",
//             }}
//           />
//           <div style={{ position: "relative", zIndex: 1 }}>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//               }}
//             >
//               <div>
//                 <div
//                   style={{
//                     fontFamily: "'IBM Plex Mono', monospace",
//                     fontSize: "11px",
//                     letterSpacing: "3px",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.55)",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   Service {service.number}
//                 </div>
//                 <h2
//                   style={{
//                     fontFamily: "'Outfit', sans-serif",
//                     fontSize: "26px",
//                     fontWeight: 700,
//                     color: "#fff",
//                     margin: 0,
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {service.title}
//                 </h2>
//                 <p
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     fontSize: "13px",
//                     color: "rgba(255,255,255,0.6)",
//                     margin: "4px 0 0",
//                   }}
//                 >
//                   {service.subtitle}
//                 </p>
//               </div>
//               <button
//                 onClick={handleClose}
//                 style={{
//                   width: "34px",
//                   height: "34px",
//                   borderRadius: "50%",
//                   border: "1.5px solid rgba(255,255,255,0.2)",
//                   background: "rgba(255,255,255,0.08)",
//                   color: "#fff",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "16px",
//                   flexShrink: 0,
//                   transition: "all 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "rgba(255,255,255,0.2)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "rgba(255,255,255,0.08)";
//                 }}
//               >
//                 ✕
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div
//           style={{
//             display: "flex",
//             gap: "2px",
//             padding: "12px 20px 0",
//             overflowX: "auto",
//             borderBottom: "1px solid #eee",
//           }}
//         >
//           {service.items.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveItem(i)}
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "12.5px",
//                 fontWeight: activeItem === i ? 600 : 400,
//                 color: activeItem === i ? "#1565C0" : "#888",
//                 background: "none",
//                 border: "none",
//                 padding: "10px 14px",
//                 cursor: "pointer",
//                 borderBottom:
//                   activeItem === i
//                     ? "2px solid #1565C0"
//                     : "2px solid transparent",
//                 whiteSpace: "nowrap",
//                 transition: "all 0.2s ease",
//                 marginBottom: "-1px",
//               }}
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div
//           style={{
//             padding: "24px 28px 28px",
//             overflowY: "auto",
//             flex: 1,
//           }}
//         >
//           <div key={activeItem} style={{ animation: "fadeSlideIn 0.3s ease forwards" }}>
//             <h3
//               style={{
//                 fontFamily: "'Outfit', sans-serif",
//                 fontSize: "19px",
//                 fontWeight: 600,
//                 color: "#1a1a1a",
//                 margin: "0 0 12px",
//               }}
//             >
//               {service.items[activeItem].name}
//             </h3>
//             <p
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "14.5px",
//                 lineHeight: 1.8,
//                 color: "#555",
//                 margin: 0,
//               }}
//             >
//               {service.items[activeItem].detail}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─── Service Card ─── */
// const ServiceCard = ({ service, index, isVisible, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => onClick(service)}
//       style={{
//         position: "relative",
//         background: isHovered ? "#f8faff" : "#ffffff",
//         borderRadius: "14px",
//         overflow: "hidden",
//         cursor: "pointer",
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible
//           ? isHovered
//             ? "translateY(-4px)"
//             : "translateY(0)"
//           : "translateY(40px)",
//         transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
//         border: isHovered ? "1px solid #1565C022" : "1px solid #e8ecf1",
//         display: "flex",
//         flexDirection: "column",
//         boxShadow: isHovered
//           ? "0 12px 40px rgba(21, 101, 192, 0.1), 0 2px 8px rgba(0,0,0,0.03)"
//           : "0 1px 4px rgba(0,0,0,0.04)",
//       }}
//     >
//       {/* Top accent */}
//       <div
//         style={{
//           height: "3px",
//           background: "linear-gradient(90deg, #1565C0, #42A5F5)",
//           transition: "all 0.4s ease",
//           width: isHovered ? "100%" : "0%",
//         }}
//       />

//       {/* Header */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           padding: "22px 22px 0",
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "'IBM Plex Mono', monospace",
//             fontSize: "36px",
//             fontWeight: 700,
//             color: isHovered ? "#1565C0" : "#e0e4ea",
//             transition: "color 0.4s ease",
//             lineHeight: 1,
//             letterSpacing: "-2px",
//           }}
//         >
//           {service.number}
//         </span>
//         <span
//           style={{
//             fontFamily: "'IBM Plex Mono', monospace",
//             fontSize: "10px",
//             letterSpacing: "1.5px",
//             textTransform: "uppercase",
//             color: "#1565C0",
//             background: "#E3F2FD",
//             padding: "4px 10px",
//             borderRadius: "6px",
//             fontWeight: 500,
//           }}
//         >
//           {service.highlight}
//         </span>
//       </div>

//       {/* Title */}
//       <div style={{ padding: "12px 22px 0" }}>
//         <h3
//           style={{
//             fontFamily: "'Outfit', sans-serif",
//             fontSize: "18px",
//             fontWeight: 700,
//             color: "#1a1a1a",
//             margin: 0,
//             lineHeight: 1.25,
//           }}
//         >
//           {service.title}
//         </h3>
//         <p
//           style={{
//             fontFamily: "'IBM Plex Mono', monospace",
//             fontSize: "11px",
//             color: "#999",
//             margin: "4px 0 0",
//             letterSpacing: "0.3px",
//           }}
//         >
//           {service.subtitle}
//         </p>
//       </div>

//       {/* Divider */}
//       <div
//         style={{
//           margin: "14px 22px",
//           height: "1px",
//           background: isHovered
//             ? "linear-gradient(90deg, #1565C025, transparent)"
//             : "#f0f0f0",
//           transition: "all 0.3s ease",
//         }}
//       />

//       {/* Items */}
//       <div style={{ padding: "0 22px 16px", flex: 1 }}>
//         {service.items.map((item, i) => (
//           <div
//             key={i}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               padding: "5px 0",
//               transition: `all 0.3s ease ${i * 0.04}s`,
//               transform: isHovered ? "translateX(4px)" : "translateX(0)",
//             }}
//           >
//             <div
//               style={{
//                 width: "5px",
//                 height: "5px",
//                 borderRadius: "50%",
//                 background: isHovered ? "#1565C0" : "#ccd2db",
//                 transition: "all 0.3s ease",
//                 flexShrink: 0,
//               }}
//             />
//             <span
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "13px",
//                 color: isHovered ? "#444" : "#888",
//                 transition: "color 0.3s ease",
//                 lineHeight: 1.4,
//               }}
//             >
//               {item.name}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Footer CTA */}
//       <div
//         style={{
//           padding: "0 22px 18px",
//           display: "flex",
//           alignItems: "center",
//           gap: "6px",
//           opacity: isHovered ? 1 : 0,
//           transform: isHovered ? "translateY(0)" : "translateY(6px)",
//           transition: "all 0.3s ease",
//         }}
//       >
//         <span
//           style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: "13px",
//             fontWeight: 600,
//             color: "#1565C0",
//           }}
//         >
//           View Details
//         </span>
//         <svg
//           width="14"
//           height="14"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#1565C0"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 12h14M12 5l7 7-7 7" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// /* ─── Main Section ─── */
// export default function ServiceSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeService, setActiveService] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.05 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const t = setTimeout(() => setIsVisible(true), 200);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <style>{`

//         * { margin: 0; padding: 0; box-sizing: border-box; }

//         .srv-section-wrap {
//           position: relative;
//           background: #f5f7fa;
//           min-height: 100vh;
//           padding: 80px 24px;
//           overflow: hidden;
//         }

//         .srv-container {
//           max-width: 1280px;
//           margin: 0 auto;
//         }

//         .srv-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 18px;
//         }

//         @media (max-width: 1024px) {
//           .srv-grid { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (max-width: 640px) {
//           .srv-grid { grid-template-columns: 1fr; }
//           .srv-section-wrap { padding: 48px 16px; }
//         }

//         @keyframes fadeSlideIn {
//           from { opacity: 0; transform: translateY(8px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <section className="srv-section-wrap" ref={sectionRef}>
//         {/* Decorative blobs */}
//         <div
//           style={{
//             position: "absolute",
//             top: "-200px",
//             right: "-200px",
//             width: "600px",
//             height: "600px",
//             borderRadius: "50%",
//             background: "radial-gradient(circle, #1565C008, transparent 70%)",
//             pointerEvents: "none",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "-150px",
//             left: "-150px",
//             width: "400px",
//             height: "400px",
//             borderRadius: "50%",
//             background: "radial-gradient(circle, #1565C006, transparent 70%)",
//             pointerEvents: "none",
//           }}
//         />

//         <div className="srv-container">
//           {/* Header */}
//           <div
//             style={{
//               marginBottom: "56px",
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateY(0)" : "translateY(30px)",
//               transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "12px",
//                 marginBottom: "18px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "36px",
//                   height: "2px",
//                   background: "#1565C0",
//                   borderRadius: "2px",
//                 }}
//               />
//               <span
//                 style={{
//                   fontFamily: "'IBM Plex Mono', monospace",
//                   fontSize: "11px",
//                   letterSpacing: "3.5px",
//                   textTransform: "uppercase",
//                   color: "#1565C0",
//                   fontWeight: 500,
//                 }}
//               >
//                 What We Build
//               </span>
//             </div>

//             <h2
//               style={{
//                 fontFamily: "'Outfit', sans-serif",
//                 fontSize: "clamp(30px, 4.5vw, 50px)",
//                 fontWeight: 700,
//                 color: "#111",
//                 lineHeight: 1.1,
//                 letterSpacing: "-1px",
//                 maxWidth: "650px",
//               }}
//             >
//               Comprehensive{" "}
//               <span style={{ color: "#1565C0" }}>Manufacturing</span>
//               <br />
//               Solutions
//             </h2>

//             <p
//               style={{
//                 fontFamily: "'DM Sans', sans-serif",
//                 fontSize: "16px",
//                 color: "#777",
//                 marginTop: "18px",
//                 maxWidth: "520px",
//                 lineHeight: 1.7,
//               }}
//             >
//               From pre-engineered steel structures to complex process machinery
//               — delivering precision-built industrial solutions across 9
//               specialized domains.
//             </p>

//             {/* Stats */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: "40px",
//                 marginTop: "32px",
//                 flexWrap: "wrap",
//               }}
//             >
//               {[
//                 { val: "9", label: "Service Domains" },
//                 { val: "30+", label: "Product Types" },
//                 { val: "5+", label: "Industries Served" },
//               ].map((s, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     display: "flex",
//                     alignItems: "baseline",
//                     gap: "8px",
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontFamily: "'Outfit', sans-serif",
//                       fontSize: "30px",
//                       fontWeight: 700,
//                       color: "#1565C0",
//                       letterSpacing: "-1px",
//                     }}
//                   >
//                     {s.val}
//                   </span>
//                   <span
//                     style={{
//                       fontFamily: "'IBM Plex Mono', monospace",
//                       fontSize: "11px",
//                       color: "#999",
//                       letterSpacing: "1px",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     {s.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Grid */}
//           <div className="srv-grid">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 index={index}
//                 isVisible={isVisible}
//                 onClick={setActiveService}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Detail Modal */}
//         {activeService && (
//           <DetailModal
//             service={activeService}
//             onClose={() => setActiveService(null)}
//           />
//         )}
//       </section>
//     </>
//   );
// }

import { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "steel-structure",
    number: "01",
    title: "Steel Structure",
    subtitle: "Industrial & High-Rise",
    items: [
      { name: "PEB Warehouses", detail: "Pre-Engineered Building warehouse construction is our core specialty. We design and fabricate complete PEB solutions with precision-cut structural members, purlins, girts, and cladding systems — delivering faster project timelines and cost-efficient, durable industrial spaces." },
      { name: "Machine Platforms & Walkways", detail: "Heavy-duty structural steel platforms engineered to support industrial machinery loads, along with elevated walkways for safe personnel access. Designed per IS/AISC standards with anti-slip grating and safety handrails." },
      { name: "Steel Bridges", detail: "Custom steel bridge structures for industrial campuses and infrastructure projects. Engineered for load-bearing capacity, seismic compliance, and long-term durability with hot-dip galvanized or epoxy-coated finishes." },
    ],
    highlight: "Core Specialty",
    icon: "🏗️",
  },
  {
    id: "storage",
    number: "02",
    title: "Storage Solutions",
    subtitle: "Tanks & Vessels",
    items: [
      { name: "Tanks (MS / SS)", detail: "Fabrication of Mild Steel and Stainless Steel storage tanks for water, chemicals, oils, and solvents. Available in vertical and horizontal configurations with capacities ranging from 500 liters to 100,000+ liters." },
      { name: "Mother & Day Tanks", detail: "Large-capacity mother tanks for bulk storage of water, oil, and solvents, paired with smaller day tanks for daily operational supply. Designed with level indicators, manholes, and drain fittings." },
      { name: "Pressure Vessels", detail: "ASME and IS-coded pressure vessels for various industrial applications including air receivers, steam drums, and process vessels. Manufactured with full radiographic testing and hydrostatic proof testing." },
      { name: "Underground Tanks", detail: "Below-ground storage solutions with corrosion-resistant coatings and cathodic protection. Ideal for fuel storage, water harvesting, and chemical containment with leak detection systems." },
      { name: "Peso Tanks", detail: "Specialized tank configurations designed for specific industrial requirements with PESO compliance for hazardous material storage." },
    ],
    highlight: "5 Types",
    icon: "🛢️",
  },
  {
    id: "bulk",
    number: "03",
    title: "Bulk Material Handling",
    subtitle: "Silos & Hoppers",
    items: [
      { name: "Grain Storage Silos", detail: "Large-capacity silos for grain, cement, fly ash, and other bulk materials. Constructed with bolted or welded steel panels, aeration floors, temperature monitoring systems, and discharge mechanisms." },
      { name: "Industrial Hoppers", detail: "Conical and pyramidal hoppers for controlled material discharge. Designed with optimal cone angles to prevent bridging and rat-holing, equipped with vibrators and flow-aid devices." },
      { name: "Bulk Handling Systems", detail: "Complete turnkey bulk material handling solutions integrating storage, conveying, and dosing systems. Engineered for dust-free operation with enclosed transfer points and aspiration systems." },
    ],
    highlight: "Heavy Duty",
    icon: "🏭",
  },
  {
    id: "conveying",
    number: "04",
    title: "Conveying Systems",
    subtitle: "Transport & Elevation",
    items: [
      { name: "Chain Conveyors", detail: "Enclosed chain conveyors including capsule-type drag conveyors for dust-free horizontal and inclined material transport. Ideal for grains, powders, and granular materials with minimal product degradation." },
      { name: "Bucket Elevators", detail: "Centrifugal and continuous bucket elevators for vertical material transport. Available in belt and chain types with capacities from 10 TPH to 500+ TPH, designed for abrasive and free-flowing materials." },
      { name: "Screw Conveyors", detail: "Shafted and shaftless screw conveyors for moving granular, semi-solid, and sticky materials. Customizable flight designs including standard, cut, folded, and ribbon flights." },
    ],
    highlight: "3 Systems",
    icon: "⚙️",
  },
  {
    id: "equipment",
    number: "05",
    title: "Equipment & Process Machinery",
    subtitle: "HT/LT · Pharma · Chemical · Feed · Food",
    items: [
      { name: "Reactors", detail: "Industrial reactors for HT/LT, pharmaceutical, and chemical applications. Includes agitated reactors, jacketed vessels, and limpet coil reactors in SS 304/316 and MS with glass-lined or rubber-lined options." },
      { name: "Heat Exchangers", detail: "Shell-and-tube heat exchangers, plate heat exchangers, and surface condensors for thermal processing. Designed per TEMA standards with optimized heat transfer coefficients." },
      { name: "Mixers & Grinders", detail: "Ribbon blenders, paddle mixers, and hammer mills for feed and food industry applications. Built with food-grade stainless steel, easy-clean designs, and variable speed drives." },
      { name: "Feeders", detail: "Vibratory feeders, rotary valve feeders, and belt feeders for precise material dosing. Designed for consistent feed rates with variable frequency drives and load cell integration." },
      { name: "Cyclone Separators", detail: "High-efficiency cyclone separators for dust collection and material separation. Single and multi-cyclone configurations with collection efficiencies up to 99%." },
    ],
    highlight: "Multi-Industry",
    icon: "🔧",
  },
  {
    id: "residential",
    number: "06",
    title: "Residential & Misc Steel",
    subtitle: "Railings & Safety",
    items: [
      { name: "Railings", detail: "Custom-designed railings in MS, SS, and aluminum for residential buildings, commercial complexes, and industrial facilities. Includes balustrades, staircase railings, and balcony guards with powder-coated finishes." },
      { name: "Fire Escape Installation", detail: "Fire safety staircase structures and escape route installations compliant with NBC fire safety norms. Includes external fire escape stairs, access ladders, and emergency exit frameworks." },
    ],
    highlight: "Safety First",
    icon: "🏠",
  },
  {
    id: "piping",
    number: "07",
    title: "Piping Systems",
    subtitle: "Utility · Process · Fire · Densephase",
    items: [
      { name: "Utility Piping", detail: "General utility and service piping for compressed air, water, steam, and gas distribution. Fabricated and installed with proper supports, expansion joints, and isolation valves." },
      { name: "Process Piping", detail: "Industrial process piping systems for chemical, pharmaceutical, and food processing plants. Includes SS and CS piping with orbital welding, passivation, and full documentation." },
      { name: "Fire / Bleed System (LP/HP)", detail: "Low pressure and high pressure fire suppression piping and bleed systems. Designed per NFPA standards with hydrant systems, sprinkler networks, and deluge systems." },
      { name: "Densephase Piping", detail: "Dense phase pneumatic conveying piping systems for gentle, low-velocity transport of abrasive or fragile materials. Engineered with wear-resistant bends and diverter valves." },
    ],
    highlight: "4 Categories",
    icon: "🔩",
  },
  {
    id: "chimneys",
    number: "08",
    title: "Chimneys",
    subtitle: "Industrial Grade",
    items: [
      { name: "Industrial Chimneys", detail: "Self-supporting and guyed industrial chimneys ranging from 2 tons to 15 tons capacity. Fabricated with refractory lining, rain caps, inspection doors, and lightning protection systems per IS 6533." },
      { name: "Custom Specifications", detail: "Chimneys engineered to specific emission requirements with flue gas analysis integration, damper systems, and multi-flue configurations. Available in carbon steel, stainless steel, and dual-wall insulated designs." },
    ],
    highlight: "Up to 15T",
    icon: "🏭",
  },
  {
    id: "racking",
    number: "09",
    title: "Racking Systems",
    subtitle: "Warehouse Organization",
    items: [
      { name: "Pallet Racking", detail: "Selective, drive-in, and push-back pallet racking systems for warehouse storage optimization. Engineered for specific load capacities with seismic bracing and column protectors." },
      { name: "Plate Stacking", detail: "Specialized plate stacking and organization systems for steel service centers and fabrication shops. Includes cantilever racks, A-frame storage, and automated plate retrieval." },
    ],
    highlight: "Storage",
    icon: "📦",
  },
];

/* ─── Detail Modal ─── */
const DetailModal = ({ service, onClose }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setEntering(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleClose = () => {
    setEntering(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: entering ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
        backdropFilter: entering ? "blur(8px)" : "blur(0px)",
        transition: "all 0.3s ease", padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff", borderRadius: "20px", width: "100%",
          maxWidth: "760px", maxHeight: "85vh", overflow: "hidden",
          display: "flex", flexDirection: "column",
          transform: entering ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
          opacity: entering ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        {/* Modal Header */}
        <div style={{
          background: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
          padding: "32px 32px 28px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.06,
            backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }} />
          {/* Large background number */}
          <div style={{
            position: "absolute", right: "24px", top: "-10px",
            fontFamily: "'Outfit', sans-serif", fontSize: "120px", fontWeight: 800,
            color: "rgba(255,255,255,0.06)", lineHeight: 1, pointerEvents: "none",
          }}>{service.number}</div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px",
                  letterSpacing: "3px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)", marginBottom: "8px",
                }}>Service {service.number} — {service.highlight}</div>
                <h2 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: "30px",
                  fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2,
                }}>{service.title}</h2>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
                  color: "rgba(255,255,255,0.6)", margin: "6px 0 0",
                }}>{service.subtitle}</p>
              </div>
              <button onClick={handleClose} style={{
                width: "36px", height: "36px", borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)", color: "#fff",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "16px", flexShrink: 0,
                transition: "all 0.2s ease",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              >✕</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", gap: "2px", padding: "14px 24px 0",
          overflowX: "auto", borderBottom: "1px solid #eee",
        }}>
          {service.items.map((item, i) => (
            <button key={i} onClick={() => setActiveItem(i)} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
              fontWeight: activeItem === i ? 700 : 400,
              color: activeItem === i ? "#1565C0" : "#888",
              background: activeItem === i ? "#E3F2FD" : "none",
              border: "none", padding: "10px 16px", cursor: "pointer",
              borderBottom: activeItem === i ? "2.5px solid #1565C0" : "2.5px solid transparent",
              whiteSpace: "nowrap", transition: "all 0.2s ease", marginBottom: "-1px",
              borderRadius: "8px 8px 0 0",
            }}>{item.name}</button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: "28px 32px 32px", overflowY: "auto", flex: 1 }}>
          <div key={activeItem} style={{ animation: "fadeSlideIn 0.3s ease forwards" }}>
            <div style={{
              display: "inline-block", background: "#E3F2FD", color: "#1565C0",
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px",
              letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600,
              padding: "5px 12px", borderRadius: "6px", marginBottom: "14px",
            }}>Detail</div>
            <h3 style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "22px",
              fontWeight: 700, color: "#0a0a0a", margin: "0 0 14px",
            }}>{service.items[activeItem].name}</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "15px",
              lineHeight: 1.85, color: "#444", margin: 0,
            }}>{service.items[activeItem].detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Service Card ─── */
const ServiceCard = ({ service, index, isVisible, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(service)}
      style={{
        position: "relative", background: "#ffffff",
        borderRadius: "16px", overflow: "hidden", cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? (isHovered ? "translateY(-6px)" : "translateY(0)") : "translateY(40px)",
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`,
        border: isHovered ? "1px solid #1565C030" : "1px solid #e2e6ed",
        display: "flex", flexDirection: "column",
        boxShadow: isHovered
          ? "0 16px 48px rgba(21, 101, 192, 0.12), 0 4px 12px rgba(0,0,0,0.04)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: "4px",
        background: "linear-gradient(90deg, #1565C0, #42A5F5, #90CAF9)",
        transition: "all 0.5s ease",
        width: isHovered ? "100%" : "0%",
      }} />

      {/* Background decorative number */}
      <div style={{
        position: "absolute", right: "-8px", top: "-12px",
        fontFamily: "'Outfit', sans-serif", fontSize: "140px", fontWeight: 900,
        color: isHovered ? "#1565C008" : "#f2f4f8",
        transition: "color 0.4s ease",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>{service.number}</div>

      {/* Subtle corner pattern */}
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        width: "80px", height: "80px",
        background: isHovered
          ? "linear-gradient(135deg, #1565C006, transparent)"
          : "linear-gradient(135deg, #f8f9fb, transparent)",
        transition: "all 0.4s ease",
        borderRadius: "0 80px 0 0", pointerEvents: "none",
      }} />

      {/* Card content wrapper */}
      <div style={{ position: "relative", zIndex: 1, padding: "26px 24px 0" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          {/* Icon circle */}
          <div style={{
            width: "48px", height: "48px", borderRadius: "14px",
            background: isHovered
              ? "linear-gradient(135deg, #1565C0, #1E88E5)"
              : "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "22px", transition: "all 0.4s ease",
            boxShadow: isHovered ? "0 4px 16px rgba(21,101,192,0.25)" : "none",
          }}>
            {service.icon}
          </div>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px",
            letterSpacing: "1.5px", textTransform: "uppercase",
            color: "#1565C0", background: "#E3F2FD",
            padding: "5px 12px", borderRadius: "8px", fontWeight: 600,
          }}>{service.highlight}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "21px",
          fontWeight: 800, color: "#0a0a0a", margin: 0, lineHeight: 1.25,
        }}>{service.title}</h3>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px",
          color: "#888", margin: "5px 0 0", letterSpacing: "0.3px",
        }}>{service.subtitle}</p>
      </div>

      {/* Divider */}
      <div style={{
        margin: "16px 24px", height: "1px", position: "relative", zIndex: 1,
        background: isHovered
          ? "linear-gradient(90deg, #1565C030, #1565C010, transparent)"
          : "linear-gradient(90deg, #e8ecf2, transparent)",
        transition: "all 0.3s ease",
      }} />

      {/* Items list */}
      <div style={{ padding: "0 24px 12px", flex: 1, position: "relative", zIndex: 1 }}>
        {service.items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "6px 0",
            transition: `all 0.3s ease ${i * 0.04}s`,
            transform: isHovered ? "translateX(6px)" : "translateX(0)",
          }}>
            <div style={{
              width: "6px", height: "6px", borderRadius: "2px",
              background: isHovered ? "#1565C0" : "#c8cfd8",
              transition: "all 0.3s ease", flexShrink: 0,
              transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "14px",
              color: isHovered ? "#222" : "#666",
              fontWeight: isHovered ? 500 : 400,
              transition: "all 0.3s ease", lineHeight: 1.4,
            }}>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        padding: "14px 24px 22px", position: "relative", zIndex: 1,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateX(0)" : "translateX(-8px)",
          transition: "all 0.35s ease",
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
            fontWeight: 700, color: "#1565C0",
          }}>View Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        {/* Item count pill */}
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px",
          color: "#999", background: "#f4f5f7", padding: "4px 10px",
          borderRadius: "6px", fontWeight: 500,
        }}>{service.items.length} items</div>
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
export default function ServiceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .srv-section-wrap {
          position: relative;
          background: #f3f5f9;
          min-height: 100vh;
          padding: 80px 24px 100px;
          overflow: hidden;
        }
        .srv-container { max-width: 1300px; margin: 0 auto; }
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) { .srv-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .srv-grid { grid-template-columns: 1fr; }
          .srv-section-wrap { padding: 48px 16px 64px; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="srv-section-wrap" ref={sectionRef}>
        {/* BG decorations */}
        <div style={{
          position: "absolute", top: "60px", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "800px", borderRadius: "50%",
          background: "radial-gradient(circle, #1565C006, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", right: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, #1565C005, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="srv-container">
          {/* ─── CENTERED HEADER ─── */}
          <div style={{
            marginBottom: "64px", textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              marginBottom: "20px",
            }}>
              <div style={{ width: "28px", height: "2px", background: "#1565C0", borderRadius: "2px" }} />
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px",
                letterSpacing: "4px", textTransform: "uppercase",
                color: "#1565C0", fontWeight: 600,
              }}>What We Build</span>
              <div style={{ width: "28px", height: "2px", background: "#1565C0", borderRadius: "2px" }} />
            </div>

            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(36px, 5.5vw, 60px)",
              fontWeight: 900, color: "#050505", lineHeight: 1.08,
              letterSpacing: "-2px",
            }}>
              Comprehensive{" "}
              <span style={{
                color: "#1565C0",
                backgroundImage: "linear-gradient(135deg, #1565C0, #1E88E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Manufacturing</span>
              <br />Solutions
            </h2>

            {/* Decorative underline */}
            <div style={{
              width: "60px", height: "4px", borderRadius: "4px",
              background: "linear-gradient(90deg, #1565C0, #42A5F5)",
              margin: "24px auto 0",
            }} />

            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "18px",
              color: "#555", marginTop: "22px", maxWidth: "580px",
              lineHeight: 1.7, marginLeft: "auto", marginRight: "auto",
            }}>
              From pre-engineered steel structures to complex process machinery —
              delivering precision-built industrial solutions across 9 specialized domains.
            </p>

            {/* Stats bar */}
            <div style={{
              display: "inline-flex", gap: "24px", marginTop: "36px",
              background: "#fff", padding: "18px 40px", borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e8ecf2", flexWrap: "wrap", justifyContent: "center",
            }}>
              {[
                { val: "9", label: "Domains" },
                { val: "30+", label: "Products" },
                { val: "5+", label: "Industries" },
              ].map((s, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "baseline", gap: "8px",
                  padding: "0 16px",
                  borderRight: i < 2 ? "1px solid #e8ecf2" : "none",
                }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: "32px",
                    fontWeight: 900, color: "#1565C0", letterSpacing: "-1px",
                  }}>{s.val}</span>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px",
                    color: "#777", letterSpacing: "1.5px", textTransform: "uppercase",
                    fontWeight: 500,
                  }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── GRID ─── */}
          <div className="srv-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={isVisible}
                onClick={setActiveService}
              />
            ))}
          </div>
        </div>

        {/* Detail Modal */}
        {activeService && (
          <DetailModal
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </section>
    </>
  );
}