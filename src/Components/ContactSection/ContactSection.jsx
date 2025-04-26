import React from 'react'
import './ContactSection.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Let's discuss how we can help with your industrial needs</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>+1 (555) 123–4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>contact@opustech.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>123 Industrial Avenue, Tech City</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
