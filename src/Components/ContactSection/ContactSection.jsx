// import React from 'react'
// import './ContactSection.css'
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// const ContactSection = () => {
//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>Let's discuss how we can help with your industrial needs</p>

//           <div className="contact-details">
//             <div className="contact-item">
//               <FaPhoneAlt className="icon" />
//               <span>+1 (555) 123–4567</span>
//             </div>
//             <div className="contact-item">
//               <FaEnvelope className="icon" />
//               <span>contact@opustech.com</span>
//             </div>
//             <div className="contact-item">
//               <FaMapMarkerAlt className="icon" />
//               <span>123 Industrial Avenue, Tech City</span>
//             </div>
//           </div>
//         </div>

//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <textarea placeholder="Your Message" rows="5" required />
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default ContactSection
import React from 'react'
import './ContactSection.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <p>Ready to discuss your next project? We're here to help bring your ideas to life.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaPhoneAlt className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Phone</span>
                    <span className="value">+91-9826430661</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaEnvelope className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Email</span>
                    <span className="value">opus.eng.ind@gmail.com</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Address</span>
                    <span className="value">Indore, 452001 Madhya Pradesh, India</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaClock className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Business Hours</span>
                    <span className="value">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
              
          
              
              <textarea placeholder="Tell us about your project..." rows="4" required />
              
              <button type="submit">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection