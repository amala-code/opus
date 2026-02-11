
// import React, { useState, useEffect, useRef } from "react";
// import "./Coaching.css";
// import Coaching_card from "./Coaching_card";
// import { coachingData } from "./Coachingdata";

// const Coaching = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [flippedCards, setFlippedCards] = useState({});
//   const [activePointer, setActivePointer] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);

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

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const rect = container.getBoundingClientRect();
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;

//       // Calculate scroll progress
//       if (rect.top <= 0 && rect.bottom >= windowHeight) {
//         const scrolled = Math.abs(rect.top);
//         const totalScroll = containerHeight - windowHeight;
//         const progress = Math.min(scrolled / totalScroll, 1);
//         setScrollProgress(progress);

//         // Calculate active pointer based on progress
//         const totalCards = coachingData.length;
//         const activeIndex = Math.floor(progress * totalCards);
//         setActivePointer(Math.min(activeIndex, totalCards - 1));
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleFlip = (id) => {
//     setFlippedCards(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const serviceList = [
//     {
//       title: "Fast & Cost-Effective Construction",
//       desc: "Pre-Engineered Buildings (PEB) reduce construction time by 50% and cut costs with optimized material usage.",
//       icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//     },
//     {
//       title: "Scalable & Efficient Infrastructure", 
//       desc: "Customizable PEB structures allow seamless expansion, maximizing space utilization and reducing maintenance.",
//       icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
//     },
//     {
//       title: "Sustainable & Eco-Friendly Solutions", 
//       desc: "Energy-efficient materials and minimal waste production support green building initiatives and reduce carbon footprints.",
//       icon: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"
//     },
 
//   ];

//   // Calculate transform for right side based on scroll progress
//   const rightSideTransform = `translateY(-${scrollProgress * 100}%)`;

//   return (
//     <div className="coaching_mainContainer" ref={sectionRef}>
//       <div 
//         className={`coaching_scrollContainer ${isVisible ? 'animate-in' : ''}`}
//         ref={containerRef}
//         style={{ height: `${300}vh` }} // Adjust based on number of cards
//       >
//         <div className="coaching_fixedWrapper">
//           <div className="coaching_flexContainer">
            
//             {/* LEFT SIDE - COMPLETELY FIXED */}
//             <div className="coaching_flexDiv1">
//               <div className="coaching_content_wrapper">
//                 {/* Header */}
//                 {/* <div className="blog-header"> */}
//                   <h2 className="section-title">
//                     Why
//                     <span className="title-highlight"> Choose Us </span>
//                   </h2>
//                   <div className="title-underline"></div>
//                 {/* </div> */}

//                 <div className="coaching_textContainer">
//                   {/* <div className="coaching_badge">
//                     <span>Manufacturing Excellence</span>
//                   </div> */}
                  
//                   <div className="coaching_subtext">
                 
                    
//                     <div className="service-list">
//                       {serviceList.map((service, index) => (
//                         <div 
//                           key={index} 
//                           className={`service-item delay-${index} ${activePointer === index ? 'active' : ''}`}
//                         >
//                           <div className="service-icon">
//                             <svg viewBox="0 0 24 24" fill="currentColor">
//                               <path d={service.icon}/>
//                             </svg>
//                           </div>
//                           <div className="service-content">
//                             <h4>{service.title}</h4>
//                             <p>{service.desc}</p>
//                           </div>
//                           <div className="service-pulse"></div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="why-us-button-container">
//                       <button className="why-us-button">
//                         <span>Explore our projects</span>
//                         <svg viewBox="0 0 24 24" fill="currentColor">
//                           <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* RIGHT SIDE - SCROLLS WITH PAGE */}
//             <div className="coaching_flexDiv2">
//               <div 
//                 className="capabilities-container"
//                 style={{ transform: rightSideTransform, transition: 'transform 0.1s linear' }}
//               >
//                 <div className="flip-cards-grid">
//                   {coachingData.map((item, index) => (
//                     <div 
//                       key={item.id} 
//                       className={`flip-card-wrapper delay-${index}`}
//                       onMouseEnter={() => toggleFlip(item.id)}
//                       onMouseLeave={() => toggleFlip(item.id)}
//                     >
//                       <div className={`flip-card ${flippedCards[item.id] ? 'flipped' : ''}`}>
//                         {/* Front Side */}
//                         <div className="flip-card-front">
//                           <div 
//                             className="flip-card-image"
//                             style={{ backgroundImage: `url(${item.background})` }}
//                           >
//                             <div className="flip-card-overlay"></div>
//                             <div className="flip-card-front-content">
//                               <div className="flip-icon-wrapper">
//                                 <svg viewBox="0 0 24 24" fill="currentColor">
//                                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//                                 </svg>
//                               </div>
//                               <h4>{item.tittle}</h4>
//                               <div className="flip-indicator">
//                                 <span>Hover to learn more</span>
//                                 <svg viewBox="0 0 24 24" fill="currentColor">
//                                   <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
//                                 </svg>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* Back Side */}
//                         <div className="flip-card-back">
//                           <div className="flip-card-back-content">
//                             <div className="back-icon">
//                               <svg viewBox="0 0 24 24" fill="currentColor">
//                                 <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
//                               </svg>
//                             </div>
//                             <h4>{item.tittle}</h4>
//                             <div className="back-divider"></div>
//                             <p>{item.data}</p>
//                             {/* <div className="back-features">
//                               <div className="feature-badge">Professional</div>
//                               <div className="feature-badge">Certified</div>
//                             </div> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coaching;


import React, { useState, useEffect, useRef } from "react";
import "./Coaching.css";
import { coachingData } from "./Coachingdata";

const Coaching = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [activePointer, setActivePointer] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Only run scroll-driven animation on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const totalScroll = containerHeight - windowHeight;
        const progress = Math.min(scrolled / totalScroll, 1);
        setScrollProgress(progress);

        const totalCards = coachingData.length;
        const activeIndex = Math.floor(progress * totalCards);
        setActivePointer(Math.min(activeIndex, totalCards - 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // On mobile, use tap to flip instead of hover
  const handleCardInteraction = (id) => {
    if (isMobile) {
      toggleFlip(id);
    }
  };

  const serviceList = [
    {
      title: "Fast & Cost-Effective Construction",
      desc: "Pre-Engineered Buildings (PEB) reduce construction time by 50% and cut costs with optimized material usage.",
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    },
    {
      title: "Scalable & Efficient Infrastructure",
      desc: "Customizable PEB structures allow seamless expansion, maximizing space utilization and reducing maintenance.",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    },
    {
      title: "Sustainable & Eco-Friendly Solutions",
      desc: "Energy-efficient materials and minimal waste production support green building initiatives and reduce carbon footprints.",
      icon: "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z",
    },
  ];

  // Only apply scroll transform on desktop
  const rightSideStyle = isMobile
    ? {}
    : {
        transform: `translateY(-${scrollProgress * 100}%)`,
        transition: "transform 0.1s linear",
      };

  return (
    <div className="coaching_mainContainer" ref={sectionRef}>
      <div
        className={`coaching_scrollContainer ${isVisible ? "animate-in" : ""}`}
        ref={containerRef}
        style={isMobile ? {} : { height: "300vh" }}
      >
        <div className="coaching_fixedWrapper">
          <div className="coaching_flexContainer">
            {/* LEFT SIDE */}
            <div className="coaching_flexDiv1">
              <div className="coaching_content_wrapper">
                <h2 className="section-title">
                  Why
                  <span className="title-highlight"> Choose Us </span>
                </h2>
                <div className="title-underline"></div>

                <div className="coaching_textContainer">
                  <div className="coaching_subtext">
                    <div className="service-list">
                      {serviceList.map((service, index) => (
                        <div
                          key={index}
                          className={`service-item delay-${index} ${
                            activePointer === index ? "active" : ""
                          }`}
                        >
                          <div className="service-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d={service.icon} />
                            </svg>
                          </div>
                          <div className="service-content">
                            <h4>{service.title}</h4>
                            <p>{service.desc}</p>
                          </div>
                          <div className="service-pulse"></div>
                        </div>
                      ))}
                    </div>

                    <div className="why-us-button-container">
                      <button className="why-us-button">
                        <span>Explore our projects</span>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="coaching_flexDiv2">
              <div className="capabilities-container" style={rightSideStyle}>
                <div className="flip-cards-grid">
                  {coachingData.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flip-card-wrapper delay-${index}`}
                      onClick={() => handleCardInteraction(item.id)}
                      onMouseEnter={() => !isMobile && toggleFlip(item.id)}
                      onMouseLeave={() => !isMobile && toggleFlip(item.id)}
                    >
                      <div
                        className={`flip-card ${
                          flippedCards[item.id] ? "flipped" : ""
                        }`}
                      >
                        {/* Front Side */}
                        <div className="flip-card-front">
                          <div
                            className="flip-card-image"
                            style={{
                              backgroundImage: `url(${item.background})`,
                            }}
                          >
                            <div className="flip-card-overlay"></div>
                            <div className="flip-card-front-content">
                              <div className="flip-icon-wrapper">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                              </div>
                              <h4>{item.tittle}</h4>
                              <div className="flip-indicator">
                                <span>
                                  {isMobile
                                    ? "Tap to learn more"
                                    : "Hover to learn more"}
                                </span>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                >
                                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="flip-card-back">
                          <div className="flip-card-back-content">
                            <div className="back-icon">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                              </svg>
                            </div>
                            <h4>{item.tittle}</h4>
                            <div className="back-divider"></div>
                            <p>{item.data}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;