import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const megaMenuRef = useRef(null);


  const toggleServicesMenu = () => {
    setServicesOpen(!isServicesOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            navLinksRef.current &&
            !navLinksRef.current.contains(event.target) &&
            megaMenuRef.current &&
            !megaMenuRef.current.contains(event.target) &&
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

  return (

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Opus Technology</div>
          {/* Hamburger Button for Mobile */}
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <div
            className={`nav-links-container ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}
            ref={navLinksRef}
          >
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => {
                    if (!isMobileMenuOpen) {
                      setServicesOpen(true);
                    }
                  }}
                onMouseLeave={() => {
                    if (!isMobileMenuOpen) {
                      setServicesOpen(false);
                    }
                  }}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="dropbtn nav-links" onClick={isMobileMenuOpen ? toggleServicesMenu : () => {}}>
                  Services <FaChevronDown />
                </button>
                </NavLink>
                
                <div className={`mega-menu ${isServicesOpen ? 'show' : ''}`}  ref={megaMenuRef}>
                  <div className="mega-menu-grid">
                    <div className="mega-item">
                      <h4>Manufacturing Machinery</h4>
                      <p>State-of-the-art machinery manufacturing with precision engineering.</p>
                      <span><FaArrowRight /></span>
                    </div>
                    <div className="mega-item">
                      <h4>Structural Steel Work</h4>
                      <p>Custom structural steel solutions for diverse industrial needs.</p>
                      <span><FaArrowRight /></span>
                    </div>
                    <div className="mega-item">
                      <h4>Tanks & Receivers</h4>
                      <p>Industrial-grade tanks and receivers built to exact specifications.</p>
                      <span><FaArrowRight /></span>
                    </div>
                    <div className="mega-item">
                      <h4>Pipeline Works</h4>
                      <p>Comprehensive pipeline solutions for industrial applications.</p>
                      <span><FaArrowRight /></span>
                    </div>
                    <div className="mega-item">
                      <h4>Panel Building</h4>
                      <p>Custom electrical panel design and manufacturing.</p>
                      <span><FaArrowRight /></span>
                    </div>
                    <div className="mega-item">
                      <h4>Erection Works</h4>
                      <p>Professional installation and erection services.</p>
                      <span><FaArrowRight /></span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
