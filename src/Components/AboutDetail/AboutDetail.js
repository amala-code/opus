// // import React, { useState, useEffect } from 'react';
// // import { ChevronRight, Building, Zap, Shield, Leaf, Clock, Users, Target, Eye } from 'lucide-react';
// // import './AboutDetail.css';

// // const OpusEngineering = () => {
// //   const [activeSection, setActiveSection] = useState('hero');
// //   const [isVisible, setIsVisible] = useState({});

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           setIsVisible(prev => ({
// //             ...prev,
// //             [entry.target.id]: entry.isIntersecting
// //           }));
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll('[id]').forEach((el) => {
// //       observer.observe(el);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   const services = [
// //     {
// //       icon: <Building className="service-icon" />,
// //       title: "Pre-Engineered Buildings (PEB)",
// //       description: "High-quality, pre-fabricated steel structures for warehouses, factories, malls, offices, and more."
// //     },
// //     {
// //       icon: <Zap className="service-icon" />,
// //       title: "Factory & Industrial Setup",
// //       description: "End-to-end solutions for setting up industrial plants and commercial establishments."
// //     },
// //     {
// //       icon: <Shield className="service-icon" />,
// //       title: "Customizable Steel Structures",
// //       description: "Tailor-made buildings designed to suit specific business needs."
// //     },
// //     {
// //       icon: <Leaf className="service-icon" />,
// //       title: "Sustainable & Energy-Efficient Solutions",
// //       description: "Eco-friendly materials with minimal construction waste."
// //     }
// //   ];

// //   const differentiators = [
// //     {
// //       icon: <Clock className="differentiator-icon" />,
// //       title: "Fast & Cost-Effective",
// //       description: "50% quicker construction with optimized material usage for affordability.",
// //       overlayClass: "overlay-blue"
// //     },
// //     {
// //       icon: <Shield className="differentiator-icon" />,
// //       title: "Scalable & Durable",
// //       description: "Customizable steel structures designed for long-term strength and flexibility.",
// //       overlayClass: "overlay-green"
// //     },
// //     {
// //       icon: <Leaf className="differentiator-icon" />,
// //       title: "Eco-Friendly Solutions",
// //       description: "Sustainable materials reduce waste and lower carbon footprint.",
// //       overlayClass: "overlay-emerald"
// //     },
// //     {
// //       icon: <Target className="differentiator-icon" />,
// //       title: "Turnkey Execution",
// //       description: "Complete project handling from design to on-site assembly.",
// //       overlayClass: "overlay-purple"
// //     }
// //   ];

// //   const problems = [
// //     { percentage: "70%", issue: "Projects face delays due to traditional methods" },
// //     { percentage: "60%", issue: "Businesses struggle with inflexible infrastructure" }
// //   ];

// //   return (
// //     <div className="opus-container">
// //       {/* Navigation */}
// //       <nav className="navbar">
// //         <div className="navbar-content">
// //           <div className="logo">Opus Engineering</div>
// //           <div className="nav-menu">
// //             {['About', 'Services', 'Differentiators', 'Vision'].map((item) => (
// //               <button
// //                 key={item}
// //                 className="nav-item"
// //                 onClick={() => setActiveSection(item.toLowerCase())}
// //               >
// //                 {item}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section id="hero" className="hero-section">
// //         <div className="max-width-container">
// //           <div className="hero-content">
// //             <div className={`fade-in ${isVisible.hero ? 'visible' : ''}`}>
// //               <h1 className="hero-title">Building the Future</h1>
// //               <p className="hero-subtitle">
// //                 with <span className="highlight">Strength</span>, 
// //                 <span className="highlight"> Speed</span>, and 
// //                 <span className="highlight"> Innovation</span>
// //               </p>
// //               <div className="established-badge">
// //                 <span className="established-text">Established</span>
// //                 <span className="established-year">2021</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* About Section */}
// //           <div className={`about-grid fade-in fade-in-delay-1 ${isVisible.hero ? 'visible' : ''}`}>
// //             <div className="about-content">
// //               <h2 className="section-title">Who We Are</h2>
// //               <p className="about-text">
// //                 Opus Engineering is a dynamic partnership firm specializing in 
// //                 <span className="highlight"> Pre-Engineered Buildings (PEB)</span> and 
// //                 turnkey infrastructure solutions. With a strong team of experts from engineering, 
// //                 commercial, and financial backgrounds, we deliver cost-effective, high-quality steel 
// //                 structures for factories, warehouses, stadiums, malls, offices, and more.
// //               </p>
// //               <p className="about-text">
// //                 Our innovative, time-efficient approach ensures durable and scalable construction, 
// //                 making us a trusted partner for industrial and commercial projects.
// //               </p>
// //             </div>
            
// //             <div className="vision-mission-grid">
// //               <div className="card">
// //                 <Eye className="card-icon" />
// //                 <h3 className="card-title">Vision</h3>
// //                 <p className="card-description">Leading the future with innovative, sustainable, and efficient PEB solutions.</p>
// //               </div>
// //               <div className="card">
// //                 <Target className="card-icon" />
// //                 <h3 className="card-title">Mission</h3>
// //                 <p className="card-description">Delivering quality, cost-effective, and eco-friendly PEB structures with precision.</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Market Problems */}
// //       <section id="problems" className="problems-section">
// //         <div className="max-width-container">
// //           <div className={`problems-header fade-in ${isVisible.problems ? 'visible' : ''}`}>
// //             <h2 className="section-title">Market Challenges We Solve</h2>
// //             <p className="hero-subtitle">Understanding the pain points in traditional construction</p>
// //           </div>
          
// //           <div className="problems-grid">
// //             {problems.map((problem, index) => (
// //               <div 
// //                 key={index}
// //                 className={`problem-card fade-in fade-in-delay-${index + 1} ${isVisible.problems ? 'visible' : ''}`}
// //               >
// //                 <div className="problem-percentage">{problem.percentage}</div>
// //                 <p className="problem-text">{problem.issue}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section id="services" className="services-section">
// //         <div className="max-width-container">
// //           <div className={`services-header fade-in ${isVisible.services ? 'visible' : ''}`}>
// //             <h2 className="section-title">Our Products & Services</h2>
// //             <p className="hero-subtitle">
// //               We go beyond conventional construction by delivering innovative, high-performance 
// //               Pre-Engineered Buildings and turnkey infrastructure solutions.
// //             </p>
// //           </div>

// //           <div className="services-grid">
// //             {services.map((service, index) => (
// //               <div 
// //                 key={index}
// //                 className={`service-card fade-in fade-in-delay-${index + 1} ${isVisible.services ? 'visible' : ''}`}
// //               >
// //                 {service.icon}
// //                 <h3 className="service-title">{service.title}</h3>
// //                 <p className="service-description">{service.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className={`services-highlight fade-in fade-in-delay-3 ${isVisible.services ? 'visible' : ''}`}>
// //             <div className="highlight-badge">
// //               <span>Speed • Cost Savings • Structural Durability</span>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* What Sets Us Apart */}
// //       <section id="differentiators" className="differentiators-section">
// //         <div className="max-width-container">
// //           <div className={`differentiators-header fade-in ${isVisible.differentiators ? 'visible' : ''}`}>
// //             <h2 className="section-title">What Sets Us Apart</h2>
// //             <p className="hero-subtitle">
// //               Opus Engineering delivers fast, cost-effective, durable, and sustainable 
// //               Pre-Engineered Building solutions with end-to-end turnkey execution.
// //             </p>
// //           </div>

// //           <div className="differentiators-grid">
// //             {differentiators.map((diff, index) => (
// //               <div 
// //                 key={index}
// //                 className={`differentiator-card fade-in fade-in-delay-${index + 1} ${isVisible.differentiators ? 'visible' : ''}`}
// //               >
// //                 <div className={`differentiator-overlay ${diff.overlayClass}`}></div>
// //                 <div className="differentiator-content">
// //                   {diff.icon}
// //                   <h3 className="differentiator-title">{diff.title}</h3>
// //                   <p className="differentiator-description">{diff.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="cta-section">
// //         <div className="cta-content">
// //           <h2 className="cta-title">Ready to Build the Future?</h2>
// //           <p className="cta-description">
// //             Partner with Opus Engineering for innovative, sustainable, and efficient 
// //             Pre-Engineered Building solutions that deliver results.
// //           </p>
// //           <button className="cta-button">
// //             <Shieldspan> <span>Get Started Today</span></Shieldspan>
// //            <ChevronRight className="cta-icon" />
// //          </button>
// //        </div>
// //      </section>

// //      {/* Footer */}
// //      <footer className="footer">
// //        <div className="footer-content">
// //          <div className="footer-logo">Opus Engineering</div>
// //          <p className="footer-tagline">Building the Future with Strength, Speed, and Innovation</p>
// //          <div className="footer-copyright">
// //            © 2025 Opus Engineering. All rights reserved.
// //          </div>
// //        </div>
// //      </footer>
// //    </div>
// //  );
// // };

// // export default OpusEngineering;

// import React, { useState, useEffect } from 'react';
// import { 
//   FiChevronRight, 
//   FiClock, 
//   FiShield, 
//   FiTarget, 
//   FiEye,
//   FiUsers
// } from 'react-icons/fi';
// import { 
// //   HiOutlineBuilding, 
// //   HiOutlineBolt, 
//   HiOutlineLeaf 
// } from 'react-icons/hi';
// import { 
//   BsBuilding, 
//   BsLightning, 
//   BsShield, 
// //   BsLeaf 
// } from 'react-icons/bs';
// import './AboutDetail.css';

// const OpusEngineering = () => {
//   const [activeSection, setActiveSection] = useState('hero');
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       icon: <FiShield className="service-icon" />,
//       title: "Pre-Engineered Buildings (PEB)",
//       description: "High-quality, pre-fabricated steel structures for warehouses, factories, malls, offices, and more."
//     },
//     {
//       icon: <FiShield className="service-icon" />,
//       title: "Factory & Industrial Setup",
//       description: "End-to-end solutions for setting up industrial plants and commercial establishments."
//     },
//     {
//       icon: <FiShield className="service-icon" />,
//       title: "Customizable Steel Structures",
//       description: "Tailor-made buildings designed to suit specific business needs."
//     },
//     {
//       icon: <FiShield className="service-icon" />,
//       title: "Sustainable & Energy-Efficient Solutions",
//       description: "Eco-friendly materials with minimal construction waste."
//     }
//   ];

//   const differentiators = [
//     {
//       icon: <FiClock className="differentiator-icon" />,
//       title: "Fast & Cost-Effective",
//       description: "50% quicker construction with optimized material usage for affordability.",
//       overlayClass: "overlay-blue"
//     },
//     {
//       icon: <BsShield className="differentiator-icon" />,
//       title: "Scalable & Durable",
//       description: "Customizable steel structures designed for long-term strength and flexibility.",
//       overlayClass: "overlay-green"
//     },
//     {
//       icon: <BsShield className="differentiator-icon" />,
//       title: "Eco-Friendly Solutions",
//       description: "Sustainable materials reduce waste and lower carbon footprint.",
//       overlayClass: "overlay-emerald"
//     },
//     {
//       icon: <FiTarget className="differentiator-icon" />,
//       title: "Turnkey Execution",
//       description: "Complete project handling from design to on-site assembly.",
//       overlayClass: "overlay-purple"
//     }
//   ];

//   const problems = [
//     { percentage: "70%", issue: "Projects face delays due to traditional methods" },
//     { percentage: "60%", issue: "Businesses struggle with inflexible infrastructure" }
//   ];

//   return (
//     <div className="opus-container">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="navbar-content">
//           <div className="logo">Opus Engineering</div>
//           <div className="nav-menu">
//             {['About', 'Services', 'Differentiators', 'Vision'].map((item) => (
//               <button
//                 key={item}
//                 className="nav-item"
//                 onClick={() => setActiveSection(item.toLowerCase())}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="hero-section">
//         <div className="max-width-container">
//           <div className="hero-content">
//             <div className={`fade-in ${isVisible.hero ? 'visible' : ''}`}>
//               <h1 className="hero-title">Building the Future</h1>
//               <p className="hero-subtitle">
//                 with <span className="highlight">Strength</span>, 
//                 <span className="highlight"> Speed</span>, and 
//                 <span className="highlight"> Innovation</span>
//               </p>
//               <div className="established-badge">
//                 <span className="established-text">Established</span>
//                 <span className="established-year">2021</span>
//               </div>
//             </div>
//           </div>

//           {/* About Section */}
//           <div className={`about-grid fade-in fade-in-delay-1 ${isVisible.hero ? 'visible' : ''}`}>
//             <div className="about-content">
//               <h2 className="section-title">Who We Are</h2>
//               <p className="about-text">
//                 Opus Engineering is a dynamic partnership firm specializing in 
//                 <span className="highlight"> Pre-Engineered Buildings (PEB)</span> and 
//                 turnkey infrastructure solutions. With a strong team of experts from engineering, 
//                 commercial, and financial backgrounds, we deliver cost-effective, high-quality steel 
//                 structures for factories, warehouses, stadiums, malls, offices, and more.
//               </p>
//               <p className="about-text">
//                 Our innovative, time-efficient approach ensures durable and scalable construction, 
//                 making us a trusted partner for industrial and commercial projects.
//               </p>
//             </div>
            
//             <div className="vision-mission-grid">
//               <div className="card">
//                 <FiEye className="card-icon" />
//                 <h3 className="card-title">Vision</h3>
//                 <p className="card-description">Leading the future with innovative, sustainable, and efficient PEB solutions.</p>
//               </div>
//               <div className="card">
//                 <FiTarget className="card-icon" />
//                 <h3 className="card-title">Mission</h3>
//                 <p className="card-description">Delivering quality, cost-effective, and eco-friendly PEB structures with precision.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Market Problems */}
//       <section id="problems" className="problems-section">
//         <div className="max-width-container">
//           <div className={`problems-header fade-in ${isVisible.problems ? 'visible' : ''}`}>
//             <h2 className="section-title">Market Challenges We Solve</h2>
//             <p className="hero-subtitle">Understanding the pain points in traditional construction</p>
//           </div>
          
//           <div className="problems-grid">
//             {problems.map((problem, index) => (
//               <div 
//                 key={index}
//                 className={`problem-card fade-in fade-in-delay-${index + 1} ${isVisible.problems ? 'visible' : ''}`}
//               >
//                 <div className="problem-percentage">{problem.percentage}</div>
//                 <p className="problem-text">{problem.issue}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="services-section">
//         <div className="max-width-container">
//           <div className={`services-header fade-in ${isVisible.services ? 'visible' : ''}`}>
//             <h2 className="section-title">Our Products & Services</h2>
//             <p className="hero-subtitle">
//               We go beyond conventional construction by delivering innovative, high-performance 
//               Pre-Engineered Buildings and turnkey infrastructure solutions.
//             </p>
//           </div>

//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className={`service-card fade-in fade-in-delay-${index + 1} ${isVisible.services ? 'visible' : ''}`}
//               >
//                 {service.icon}
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-description">{service.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className={`services-highlight fade-in fade-in-delay-3 ${isVisible.services ? 'visible' : ''}`}>
//             <div className="highlight-badge">
//               <span>Speed • Cost Savings • Structural Durability</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What Sets Us Apart */}
//       <section id="differentiators" className="differentiators-section">
//         <div className="max-width-container">
//           <div className={`differentiators-header fade-in ${isVisible.differentiators ? 'visible' : ''}`}>
//             <h2 className="section-title">What Sets Us Apart</h2>
//             <p className="hero-subtitle">
//               Opus Engineering delivers fast, cost-effective, durable, and sustainable 
//               Pre-Engineered Building solutions with end-to-end turnkey execution.
//             </p>
//           </div>

//           <div className="differentiators-grid">
//             {differentiators.map((diff, index) => (
//               <div 
//                 key={index}
//                 className={`differentiator-card fade-in fade-in-delay-${index + 1} ${isVisible.differentiators ? 'visible' : ''}`}
//               >
//                 <div className={`differentiator-overlay ${diff.overlayClass}`}></div>
//                 <div className="differentiator-content">
//                   {diff.icon}
//                   <h3 className="differentiator-title">{diff.title}</h3>
//                   <p className="differentiator-description">{diff.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2 className="cta-title">Ready to Build the Future?</h2>
//           <p className="cta-description">
//             Partner with Opus Engineering for innovative, sustainable, and efficient 
//             Pre-Engineered Building solutions that deliver results.
//           </p>
//           <button className="cta-button">
//             <span>Get Started Today</span>
//             <FiChevronRight className="cta-icon" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-logo">Opus Engineering</div>
//           <p className="footer-tagline">Building the Future with Strength, Speed, and Innovation</p>
//           <div className="footer-copyright">
//             © 2025 Opus Engineering. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default OpusEngineering;