import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';
import '../Pages/OPUSFAQTestimonials.css';

const OpusFAQTestimonials = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is Opus Engineering's core specialization?",
      answer: "Opus Engineering specializes in Pre-Engineered Buildings (PEB) and turnkey infrastructure solutions. We deliver cost-effective, high-quality steel structures for factories, warehouses, stadiums, malls, and offices with an innovative, time-efficient approach."
    },
    {
      question: "What industries does Opus Engineering serve?",
      answer: "We serve diverse industries including Pharmaceutical, Chemical Processing, Feed & Food Processing, Grain & Agricultural Storage, Oil & Solvent Storage, Industrial Manufacturing, High Tension/Low Tension Electrical, and Residential & Commercial Construction."
    },
    {
      question: "What types of storage solutions do you provide?",
      answer: "We fabricate and install various storage solutions including Mild Steel and Stainless Steel tanks, mother tanks, day tanks, pressure and non-pressure vessels, underground tanks, and specialized peso tanks for water, oil, and solvent storage."
    },
    {
      question: "Do you handle complete greenfield projects?",
      answer: "Yes, our structural division handles complete greenfield project execution from the ground up. This means we manage entire new-build industrial projects including full fabrication and erection services."
    },
    {
      question: "What material handling systems does Opus Engineering offer?",
      answer: "We provide comprehensive bulk material handling and conveying systems including silos and hoppers for grain storage, chain conveyors, bucket elevators, screw conveyors, and densephase piping systems for efficient material transport."
    },
    {
      question: "What sets Opus Engineering apart from competitors?",
      answer: "Since our establishment in 2021, we've built a strong team of experts from engineering, commercial, and financial backgrounds. Our innovative approach ensures durable, scalable construction with time-efficient execution, making us a trusted partner for industrial and commercial projects."
    },
    {
      question: "What types of industrial equipment do you manufacture?",
      answer: "We manufacture process equipment for HT/LT, pharmaceutical, chemical, feed, and food industries including reactors, condensers, heat exchangers, mixers, grinders, feeders, and cyclone separators tailored to specific industry requirements."
    },
    {
      question: "Do you provide piping solutions?",
      answer: "Yes, we offer comprehensive piping systems including utility piping, industrial process piping, fire and bleed systems (low pressure and high pressure), and specialized densephase pneumatic conveying piping systems."
    },
    
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Plant Manager",
      company: "ABC Pharmaceuticals Ltd.",
      text: "Opus Engineering delivered our 50,000 sq ft pharmaceutical warehouse ahead of schedule. Their PEB solution was cost-effective and the structural integrity exceeded our expectations. The team's professionalism throughout the project was exemplary.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Project Director",
      company: "GreenTech Industries",
      text: "We engaged Opus Engineering for a complete greenfield project including storage tanks, silos, and conveying systems. Their turnkey approach and expertise in handling complex industrial equipment made the entire process seamless.",
      rating: 5
    },
    {
      name: "Anil Verma",
      position: "Operations Head",
      company: "National Food Processing Co.",
      text: "The process piping and equipment installation by Opus Engineering transformed our facility. Their attention to detail in feed processing equipment and cyclone separators has significantly improved our operational efficiency.",
      rating: 5
    },
    {
      name: "Meera Patel",
      position: "CEO",
      company: "Skyline Warehousing",
      text: "Opus Engineering constructed three warehouses for us in record time. The quality of their PEB structures and the innovative design solutions they provided have given us a competitive advantage in the logistics industry.",
      rating: 5
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="opus-container">
      {/* FAQ Section */}
          <section className="testimonials-section">
                
        <div className="section-header">
                <div className="testimonial-header">
           
                        <h2 className="section-title">
                    What Our 
                    <span className="title-highlight"> Clients Says about us </span>
                  </h2>

                  <div className="title-underline"></div>
                  </div>
          <p className="section-subtitle">
            Trusted by leading companies across pharmaceutical, food processing, warehousing, and industrial sectors.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <Quote />
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-position">{testimonial.position}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section">
        <div className="section-header">
   <div className="testimonial-header">
           
                        <h2 className="section-title">
                    Frequently Asked
                    <span className="title-highlight"> Questions </span>
                  </h2>

                  <div className="title-underline"></div>
                  </div>          <p className="section-subtitle">
            Learn more about Opus Engineering's services, capabilities, and how we can support your industrial infrastructure needs.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFAQ === index ? 'active' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
              >
                <span className="question-text">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="chevron-icon" />
                ) : (
                  <ChevronDown className="chevron-icon" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p style={{color:"white", fontSize:"18px", width:"60%", margin:"0 auto", marginBottom:"20px"}}>
            Get in touch with our team to discuss your industrial infrastructure needs.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">View Projects</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpusFAQTestimonials;