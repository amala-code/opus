import React from 'react'
import './AboutSection.css'
import AboutImage from '../../Images/AboutSection.png';
import { BsGraphUpArrow } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";


const AboutSection = () => {

    const highlights = [
        { icon: <BsGraphUpArrow/>, title: 'Industry Leader' },
        { icon: <FaAward/>, title: 'Quality Certified' },
        { icon: <RiTeamFill/>, title: 'Expert Team' },
        { icon: <GiArtificialIntelligence/>, title: 'Modern Technology' },
      ];
  return (
       <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>30 Years of Excellence in Industrial Solutions</h2>
          <p>
            Since 1993, Opus Technology has been at the forefront of industrial innovation,
            delivering exceptional manufacturing and infrastructure solutions. Our commitment
            to quality and precision has made us a trusted partner in the industry.
          </p>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img src={AboutImage} alt="About us" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
