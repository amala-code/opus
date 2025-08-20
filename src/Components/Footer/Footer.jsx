import React from 'react'
import './Footer.css'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h3>Opus Engineering</h3>
        <p>Leading the way in industrial innovation and manufacturing excellence.</p>
      </div>

      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Manufacturing</a></li>
          <li><a href="#">Steel Work</a></li>
          <li><a href="#">Pipeline Works</a></li>
          <li><a href="#">Tank Fabrication</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <a href="#"><FaLinkedin /></a>

        </div>
      </div>
    </div>

    <hr />

    <div className="footer-bottom">
      <p>© 2024 Opus Engineering. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
