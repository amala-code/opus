import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-social">
          <div className="logo-container">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2 className="company-logo">
                <span className="logo-opus">OPUS</span>
                <span className="logo-engineering">ENGINEERING</span>
              </h2>
            </Link>
            <p className="logo-tagline">Engineering Excellence in Every Structure</p>
          </div>
        </div>

        <div className="footer-cta">
          <span className="cta-text">Have a project in mind?</span>
          <Link to="/contact"><button className="cta-button">Get in Touch with Us</button></Link>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>About Us</h4>
          <p><Link to="/about">Who We Are</Link></p>
          <p><Link to="/about">Our Mission, Vision & Values</Link></p>
          <p><Link to="/about">Health, Safety & Environment</Link></p>
          <p><Link to="/about">Leadership Team</Link></p>
          <p><Link to="/about">Awards & Recognition</Link></p>
        </div>

        <div>
          <h4>Products & Services</h4>
          <p><Link to="/services">Pre-Engineered Steel Buildings (PEB)</Link></p>
          <p><Link to="/services">Structural Steel Solutions</Link></p>
          <p><Link to="/services">Why Choose OPUS</Link></p>
          <p><Link to="/services">Storage & Warehousing Solutions</Link></p>
          <p><Link to="/services">Accessories & Components</Link></p>
        </div>

        <div>
          <h4>Projects</h4>
          <p><Link to="/projects">Client Testimonials</Link></p>
          <p><Link to="/projects">Our Portfolio</Link></p>
          <p><Link to="/projects">Design & Build Solutions</Link></p>
        </div>

        <div>
          <h4>Careers</h4>
          <p><Link to="/contact">Life at OPUS</Link></p>
          <p><Link to="/contact">Current Openings</Link></p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p><Link to="/contact">Sales Network</Link></p>
          <p><Link to="/contact">Manufacturing Facilities</Link></p>
          <p><Link to="/contact">Request a Quote</Link></p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Opus Engineering — Engineering Excellence in Every Structure
        </span>

        <div className="footer-policy">
          <Link to="/terms" target="_blank">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
