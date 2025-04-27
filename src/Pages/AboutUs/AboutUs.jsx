import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutUs.css'
import aboutImage from '../../Images/AboutUs3.png';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
const AboutUs = () => {
  return (
    <>
    <Navbar/>
     <div>
       <div className="hero-about-container">
      <div className="hero-about-content">
        <h1>Building a Legacy of Innovation and Trust</h1>
        <p>Since 1993, we have been at the forefront of engineering excellence, delivering cutting-edge solutions that power the manufacturing and infrastructure industries.</p>
        <button className="hero-about-button">Explore Our Services</button>
      </div>
    </div>
    </div>
    <section className='aboutUs_counts'>
        <div className="aboutUs_count_flexBox">
            <div className="aboutUs_flex1">
            <img src={aboutImage} alt="About Opus Technology" />
            </div>
            <div className="aboutUs_flex2">
                <h1>About Us</h1>
                <p>For over three decades, Opus Technology has been at the forefront of industrial innovation, delivering exceptional manufacturing solutions and infrastructure development. Our commitment to quality and precision has made us a trusted partner in the industry.</p>
                <div className="aboutUs_flex2_backcontainer">
                    <h3>30+ Years of Excellence</h3>
                    <p>Leading the industry with innovative solutions and unmatched expertise.</p>
                </div>
                <div className="aboutUs_flex2_grid">
                <div className="aboutUs_flex2_gridDiv1">
                    <h4>500+</h4>
                    <p>Projects Completed</p>
                </div>
                <div className="aboutUs_flex2_gridDiv1">
                <h4>100+</h4>
                    <p>Expert Team Members</p>
                </div>
                <div className="aboutUs_flex2_gridDiv1">
                <h4>20+</h4>
                    <p>Years Experience</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    <ServiceSection/>
    <ContactSection/>
    <Footer/>
    </>
    
  )
}

export default AboutUs
