

import React, { useState, useRef } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaIndustry,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import { MdEngineering, MdLocationOn } from 'react-icons/md';
import './ContactSection.css';

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const services = [
    'Manufacturing Machinery',
    'Structural Steel Work',
    'Tanks & Receivers',
    'Pipeline Works',
    'Panel Building',
    'Erection Works',
    'Custom Engineering Solutions',
    'Maintenance & Support',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ──────────────────────────────────────────────
  // OPTION 1 — mailto: (opens user's email client)
  // Works 100% frontend-only, no third-party needed.
  // ──────────────────────────────────────────────
  const sendViaMailto = () => {
    const recipient = 'opus.eng.ind@gmail.com';
    const subject = encodeURIComponent(
      `New Project Inquiry — ${selectedService || 'General'} | ${formData.firstName} ${formData.lastName}`
    );

    const body = encodeURIComponent(
      `Hello Opus Engineering Team,\n\n` +
        `You have received a new project inquiry:\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `👤  Name:          ${formData.firstName} ${formData.lastName}\n` +
        `📧  Email:         ${formData.email}\n` +
        `📞  Phone:         ${formData.phone}\n` +
        `🏢  Company:       ${formData.company || 'N/A'}\n` +
        `🔧  Service:       ${selectedService || 'N/A'}\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📋 Project Details:\n${formData.message}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `Sent from Opus Engineering Website Contact Form`
    );

    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_self');
  };

  // ──────────────────────────────────────────────
  // OPTION 2 — FormSubmit.co (free, no-backend form endpoint)
  // Sends actual email to your inbox without any server.
  // Replace YOUR_EMAIL below with the destination email.
  //
  // First submission will ask you to confirm your email.
  // After that, all submissions go straight to your inbox.
  // ──────────────────────────────────────────────
  const sendViaFormSubmit = async () => {
    setSending(true);

    const payload = {
      _subject: `New Inquiry — ${selectedService || 'General'} | ${formData.firstName} ${formData.lastName}`,
      _template: 'table', // nicely formatted HTML table in email
      _captcha: 'false',
      Name: `${formData.firstName} ${formData.lastName}`,
      Email: formData.email,
      Phone: formData.phone,
      Company: formData.company || 'N/A',
      'Service Required': selectedService || 'N/A',
      'Project Details': formData.message,
    };

    try {
      // ⚠️  Replace the email below with your actual email address
      const res = await fetch('https://formsubmit.co/ajax/opus.eng.ind@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSent(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
        setSelectedService('');
        setTimeout(() => setSent(false), 5000);
      } else {
        // Fallback to mailto if FormSubmit fails
        sendViaMailto();
      }
    } catch {
      // Network error → fallback to mailto
      sendViaMailto();
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🔀  CHOOSE YOUR PREFERRED METHOD:
    //
    //     sendViaMailto();       ← opens mail client
    //     sendViaFormSubmit();   ← sends silently via FormSubmit.co
    //
    // By default we try FormSubmit first, falling back to mailto.
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    sendViaFormSubmit();
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="header-badge">
            <MdEngineering className="badge-icon" />
            <span>Get In Touch</span>
          </div>
          <h2>Transform Your Vision Into Reality</h2>
        </div>

        <div className="contact-content">
          {/* ─── Left Column: Info + Map ─── */}
          <div className="contact-info">
            <div className="info-card">
              <h3>
                <FaIndustry className="section-icon" />
                Connect With Our Team
              </h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="icon-wrapper phone">
                    <FaPhoneAlt className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Direct Line</span>
                    <a href="tel:+919826430661" className="value">
                      +91-9826430661
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper email">
                    <FaEnvelope className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Email Us</span>
                    <a href="mailto:opus.eng.ind@gmail.com" className="value">
                      opus.eng.ind@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper location">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Manufacturing Hub</span>
                    <span className="value">Indore, Madhya Pradesh, India</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper time">
                    <FaClock className="icon" />
                  </div>
                  <div className="contact-text">
                    <span className="label">Working Hours</span>
                    <span className="value">Monday – Saturday: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-card">
              <h4>
                <MdLocationOn className="map-icon" />
                Visit Our Facility
              </h4>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842590626!2d75.69903827312054!3d22.724110746690807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1734722001000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Opus Engineering Location"
                />
              </div>
            </div>
          </div>

          {/* ─── Right Column: Form ─── */}
          <div className="contact-form-wrapper">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Drop us a Message!</h3>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label>First Name *</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label>Last Name *</label>
                </div>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Business Email *</label>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98264 30661"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label>Phone Number *</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <label>Company / Organization</label>
                </div>
              </div>

              <div className="input-group">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">Select the service you're interested in</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <label>Service Required *</label>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Describe your project requirements, specifications, timeline, and any specific challenges you're facing..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <label>Project Details *</label>
              </div>

              <button
                type="submit"
                className={`submit-btn ${sending ? 'is-sending' : ''} ${sent ? 'is-sent' : ''}`}
                disabled={sending}
              >
                {sent ? (
                  <>
                    <FaCheckCircle className="btn-icon" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : sending ? (
                  <>
                    <span className="spinner" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    <span>Send Project Inquiry</span>
                    <div className="btn-shine" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;