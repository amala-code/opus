
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaArrowRight, FaChevronDown, FaTimes, FaBars, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../Images/o_logo.png'

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
              {/* <div className="navbar-modern-logo-symbol"></div> */}
              <img src={logo} alt="Opus Engineering Logo" />
            </div>
            <div className="navbar-modern-logo-text">
              <span className="navbar-modern-logo-name">Opus Engineering</span>
              <span className="navbar-modern-logo-tagline">Engineering Excellence</span>
            </div>
          </div>

          {/* Contact Info & Download Brochure Button */}
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
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => isActive ? "navbar-modern-link navbar-modern-active" : "navbar-modern-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              {/* ...existing code for dropdowns and other links... */}
            {/* Projects Dropdown */}
            {/* <li
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
            </li> */}

            {/* Services Dropdown */}
            {/* <li
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
            </li> */}

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
              {/* <button 
                className="navbar-modern-language-btn" 
                onClick={isMobileMenuOpen ? toggleLanguageMenu : () => {}}
              >
                <span className="navbar-modern-flag">🇺🇸</span>
                EN
                <FaChevronDown className={`navbar-modern-chevron ${isLanguageOpen ? 'navbar-modern-rotate' : ''}`} />
              </button> */}
              
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
                   {/* <a
              href="/opus.pdf"
              download
              className="navbar-modern-download-btn"
              style={{ marginLeft: '16px', padding: '8px 16px', background: '#2e3338ff', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}
            >
              Download Brochure
            </a> */}
      </div>
    </nav>
  );
};

export default Navbar;