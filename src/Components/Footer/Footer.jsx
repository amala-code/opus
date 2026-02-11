import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-social">
          OPUS ENGINEERING
        </div>

        <div className="footer-cta">
          <span>Have a project in mind?</span>
          <button>Get in Touch with Us</button>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>About Us</h4>
          <p>Who We Are</p>
          <p>Our Mission, Vision & Values</p>
          <p>Health, Safety & Environment</p>
          <p>Leadership Team</p>
          <p>Awards & Recognition</p>
        </div>

        <div>
          <h4>Products & Services</h4>
          <p>Pre-Engineered Steel Buildings (PEB)</p>
          <p>Structural Steel Solutions</p>
          <p>Why Choose OPUS</p>
          <p>Storage & Warehousing Solutions</p>
          <p>Accessories & Components</p>
        </div>

        <div>
          <h4>Projects</h4>
          <p>Client Testimonials</p>
          <p>Our Portfolio</p>
          <p>Design & Build Solutions</p>
        </div>

        <div>
          <h4>Careers</h4>
          <p>Life at OPUS</p>
          <p>Current Openings</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>Sales Network</p>
          <p>Manufacturing Facilities</p>
          <p>Request a Quote</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Opus Engineering — Engineering Excellence in Every Structure
        </span>

        <div className="footer-policy">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
