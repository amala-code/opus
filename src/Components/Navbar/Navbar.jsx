// import React, { useState, useRef, useEffect } from 'react';
// import './Navbar.css';
// import { FaArrowRight } from "react-icons/fa6";
// import { FaChevronDown } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const [isServicesOpen, setServicesOpen] = useState(false);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navLinksRef = useRef(null);
//   const megaMenuRef = useRef(null);


//   const toggleServicesMenu = () => {
//     setServicesOpen(!isServicesOpen);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//           if (
//             navLinksRef.current &&
//             !navLinksRef.current.contains(event.target) &&
//             megaMenuRef.current &&
//             !megaMenuRef.current.contains(event.target) &&
//             isMobileMenuOpen
//           ) {
//             setMobileMenuOpen(false);
//           }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//           document.removeEventListener('mousedown', handleClickOutside);
//         };
//       }, [isMobileMenuOpen]);

//   return (

//       <nav className="navbar">
//         <div className="navbar-container">
//           <div className="logo">Opus Technology</div>
//           {/* Hamburger Button for Mobile */}
//           <div className="mobile-menu-button" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </div>
//           <div
//             className={`nav-links-container ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}
//             ref={navLinksRef}
//           >
//             <ul className="nav-links">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   end
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/projects"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Projects
//                 </NavLink>
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => {
//                     if (!isMobileMenuOpen) {
//                       setServicesOpen(true);
//                     }
//                   }}
//                 onMouseLeave={() => {
//                     if (!isMobileMenuOpen) {
//                       setServicesOpen(false);
//                     }
//                   }}
//               >
//                 <NavLink
//                   to="/services"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <button className="dropbtn nav-links" onClick={isMobileMenuOpen ? toggleServicesMenu : () => {}}>
//                   Services <FaChevronDown />
//                 </button>
//                 </NavLink>
                
//                 <div className={`mega-menu ${isServicesOpen ? 'show' : ''}`}  ref={megaMenuRef}>
//                   <div className="mega-menu-grid">
//                     <div className="mega-item">
//                       <h4>Manufacturing Machinery</h4>
//                       <p>State-of-the-art machinery manufacturing with precision engineering.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                     <div className="mega-item">
//                       <h4>Structural Steel Work</h4>
//                       <p>Custom structural steel solutions for diverse industrial needs.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                     <div className="mega-item">
//                       <h4>Tanks & Receivers</h4>
//                       <p>Industrial-grade tanks and receivers built to exact specifications.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                     <div className="mega-item">
//                       <h4>Pipeline Works</h4>
//                       <p>Comprehensive pipeline solutions for industrial applications.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                     <div className="mega-item">
//                       <h4>Panel Building</h4>
//                       <p>Custom electrical panel design and manufacturing.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                     <div className="mega-item">
//                       <h4>Erection Works</h4>
//                       <p>Professional installation and erection services.</p>
//                       {/* <span><FaArrowRight /></span> */}
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <NavLink
//                   to="/blogs"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Blogs & Articles
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//   );
// };

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaArrowRight, FaChevronDown, FaTimes, FaBars, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const megaMenuRef = useRef(null);
  const projectsMenuRef = useRef(null);
  const languageMenuRef = useRef(null);

  const toggleServicesMenu = () => {
    setServicesOpen(!isServicesOpen);
    setProjectsOpen(false);
    setLanguageOpen(false);
  };

  const toggleProjectsMenu = () => {
    setProjectsOpen(!isProjectsOpen);
    setServicesOpen(false);
    setLanguageOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageOpen(!isLanguageOpen);
    setServicesOpen(false);
    setProjectsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeAllMenus = () => {
    setServicesOpen(false);
    setProjectsOpen(false);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navLinksRef.current &&
        !navLinksRef.current.contains(event.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target) &&
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target) &&
        isMobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const projectsData = [
    {
      title: "Industrial Manufacturing",
      description: "Large-scale manufacturing facility projects and equipment installations.",
      category: "Manufacturing"
    },
    {
      title: "Structural Engineering",
      description: "Complex structural steel projects for commercial and industrial buildings.",
      category: "Construction"
    },
    {
      title: "Pipeline Infrastructure",
      description: "Major pipeline installation and maintenance projects across industries.",
      category: "Infrastructure"
    },
    {
      title: "Tank & Vessel Systems",
      description: "Custom tank and pressure vessel manufacturing for various applications.",
      category: "Manufacturing"
    },
    {
      title: "Electrical Panel Solutions",
      description: "Advanced electrical panel systems for industrial automation.",
      category: "Electrical"
    },
    {
      title: "Erection & Installation",
      description: "Professional installation services for industrial equipment and structures.",
      category: "Installation"
    }
  ];

  return (
    <nav className="navbar-modern">
      <div className="navbar-modern-container">
        {/* Logo Section */}
        <div className="navbar-modern-logo">
          <div className="navbar-modern-logo-icon">
            <div className="navbar-modern-logo-symbol">O</div>
          </div>
          <div className="navbar-modern-logo-text">
            <span className="navbar-modern-logo-name">Opus Technology</span>
            <span className="navbar-modern-logo-tagline">Engineering Excellence</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="navbar-modern-contact">
          <div className="navbar-modern-phone">
            <FaPhone className="navbar-modern-phone-icon" />
            <span>+91-9826430661</span>
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="navbar-modern-mobile-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div
          className={`navbar-modern-links-container ${isMobileMenuOpen ? 'navbar-modern-show-mobile' : ''}`}
          ref={navLinksRef}
        >
          <ul className="navbar-modern-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                end
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
            </li>

            {/* Projects Dropdown */}
            <li
              className="navbar-modern-dropdown"
              onMouseEnter={() => {
                if (!isMobileMenuOpen) {
                  setProjectsOpen(true);
                  setServicesOpen(false);
                  setLanguageOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (!isMobileMenuOpen) {
                  setProjectsOpen(false);
                }
              }}
            >
              <button 
                className="navbar-modern-dropdown-btn" 
                onClick={isMobileMenuOpen ? toggleProjectsMenu : () => {}}
              >
                Projects <FaChevronDown className={`navbar-modern-chevron ${isProjectsOpen ? 'navbar-modern-rotate' : ''}`} />
              </button>
              
              <div className={`navbar-modern-mega-menu ${isProjectsOpen ? 'navbar-modern-show' : ''}`} ref={projectsMenuRef}>
                <div className="navbar-modern-mega-header">
                  <h3>Our Projects</h3>
                  <p>Explore our diverse portfolio of engineering excellence</p>
                </div>
                <div className="navbar-modern-mega-grid">
                  {projectsData.map((project, index) => (
                    <div key={index} className="navbar-modern-mega-item">
                      <div className="navbar-modern-mega-category">{project.category}</div>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="navbar-modern-mega-arrow">
                        <FaArrowRight />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="navbar-modern-mega-footer">
                  <NavLink to="/projects" className="navbar-modern-mega-view-all">
                    View All Projects <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            </li>

            {/* Services Dropdown */}
            <li
              className="navbar-modern-dropdown"
              onMouseEnter={() => {
                if (!isMobileMenuOpen) {
                  setServicesOpen(true);
                  setProjectsOpen(false);
                  setLanguageOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (!isMobileMenuOpen) {
                  setServicesOpen(false);
                }
              }}
            >
              <button 
                className="navbar-modern-dropdown-btn" 
                onClick={isMobileMenuOpen ? toggleServicesMenu : () => {}}
              >
                Services <FaChevronDown className={`navbar-modern-chevron ${isServicesOpen ? 'navbar-modern-rotate' : ''}`} />
              </button>
              
              <div className={`navbar-modern-mega-menu ${isServicesOpen ? 'navbar-modern-show' : ''}`} ref={megaMenuRef}>
                <div className="navbar-modern-mega-header">
                  <h3>Our Services</h3>
                  <p>Comprehensive engineering solutions for every industry need</p>
                </div>
                <div className="navbar-modern-mega-grid">
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Manufacturing</div>
                    <h4>Manufacturing Machinery</h4>
                    <p>State-of-the-art machinery manufacturing with precision engineering.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Construction</div>
                    <h4>Structural Steel Work</h4>
                    <p>Custom structural steel solutions for diverse industrial needs.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Industrial</div>
                    <h4>Tanks & Receivers</h4>
                    <p>Industrial-grade tanks and receivers built to exact specifications.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Infrastructure</div>
                    <h4>Pipeline Works</h4>
                    <p>Comprehensive pipeline solutions for industrial applications.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Electrical</div>
                    <h4>Panel Building</h4>
                    <p>Custom electrical panel design and manufacturing.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                  <div className="navbar-modern-mega-item">
                    <div className="navbar-modern-mega-category">Installation</div>
                    <h4>Erection Works</h4>
                    <p>Professional installation and erection services.</p>
                    <div className="navbar-modern-mega-arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                </div>
                <div className="navbar-modern-mega-footer">
                  <NavLink to="/services" className="navbar-modern-mega-view-all">
                    View All Services <FaArrowRight />
                  </NavLink>
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            {/* Language Selector */}
            <li
              className="navbar-modern-dropdown navbar-modern-language"
              onMouseEnter={() => {
                if (!isMobileMenuOpen) {
                  setLanguageOpen(true);
                  setServicesOpen(false);
                  setProjectsOpen(false);
                }
              }}
              onMouseLeave={() => {
                if (!isMobileMenuOpen) {
                  setLanguageOpen(false);
                }
              }}
            >
              <button 
                className="navbar-modern-language-btn" 
                onClick={isMobileMenuOpen ? toggleLanguageMenu : () => {}}
              >
                <span className="navbar-modern-flag">🇺🇸</span>
                EN
                <FaChevronDown className={`navbar-modern-chevron ${isLanguageOpen ? 'navbar-modern-rotate' : ''}`} />
              </button>
              
              <div className={`navbar-modern-language-menu ${isLanguageOpen ? 'navbar-modern-show' : ''}`} ref={languageMenuRef}>
                <div className="navbar-modern-language-item navbar-modern-language-active">
                  <span className="navbar-modern-flag">🇺🇸</span>
                  <span>English (US)</span>
                </div>
                <div className="navbar-modern-language-item">
                  <span className="navbar-modern-flag">🇬🇧</span>
                  <span>English (UK)</span>
                </div>
                <div className="navbar-modern-language-item">
                  <span className="navbar-modern-flag">🇪🇸</span>
                  <span>Español</span>
                </div>
              </div>
            </li>
          </ul>

          {/* Mobile Contact Info */}
          <div className="navbar-modern-mobile-contact">
            <div className="navbar-modern-mobile-phone">
              <FaPhone />
              <span>+91-9826430661</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;