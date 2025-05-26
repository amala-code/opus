import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './AboutUs.css'
import aboutImage from '../../Images/AboutUs3.png';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
import VideoSection from '../../Components/Video/Vidos1';
import OpusEngineering from '../../Components/AboutDetail/AboutDetail';
import ManufacturingProjects from '../../Components/Projects/Projectlarge';
import Feature from '../../Components/Feature/Feature';
import CompanyJourney from '../../Components/Company/Company';
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <VideoSection/>
    <CompanyJourney/>
    <Feature/>
    <ServiceSection/>
    <ContactSection/>

      

    <Footer/>
    </>
    // import { FaTimes } from "react-icons/fa";
    // import { FaBars } from "react-icons/fa";
  )
}

export default AboutUs
