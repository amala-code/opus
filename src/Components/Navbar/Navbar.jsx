import React, { useState } from 'react';
import './Navbar.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
    const [isServicesOpen, setServicesOpen] = useState(false);

    const toggleServicesMenu = () => {
      setServicesOpen(!isServicesOpen);
    };
  return (
    <div>
      <nav className="navbar">
    <div className="navbar-container">
      <div className="logo">Opus Technology</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li
          className="dropdown"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="dropbtn nav-links" onClick={toggleServicesMenu}>Services <FaChevronDown/></button>
          <div className={`mega-menu ${isServicesOpen ? 'show' : ''}`}>
            <div className="mega-menu-grid">
              <div className="mega-item">
                <h4>Manufacturing Machinery'</h4>
                <p>State-of-the-art machinery manufacturing with precision engineering.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              <div className="mega-item">
                <h4>Structural Steel Work</h4>
                <p>Custom structural steel solutions for diverse industrial needs.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              <div className="mega-item">
                <h4>Tanks & Receivers</h4>
                <p>Industrial-grade tanks and receivers built to exact specifications.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              <div className="mega-item">
                <h4>Pipeline Works</h4>
                <p>Comprehensive pipeline solutions for industrial applications.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              <div className="mega-item">
                <h4>Panel Building</h4>
                <p>Custom electrical panel design and manufacturing.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              <div className="mega-item">
                <h4>Erection Works</h4>
                <p>Professional installation and erection services.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div>
              {/* <div className="mega-item">
                <h4>SAP</h4>
                <p>Streamline operations with custom SAP enterprise solutions.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div> */}
              {/* <div className="mega-item">
                <h4>Staffing</h4>
                <p>Quick access to IT talent without the hiring headache.</p>
                <span>
                <FaArrowRight/>
                </span>
              </div> */}
            </div>
          </div>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>

    </div>
  )
}

export default Navbar
