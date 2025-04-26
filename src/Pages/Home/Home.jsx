import React from 'react';
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from '../../Components/Hero/HeroSection';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import ExpertiesSection from '../../Components/ExpertiesSection/ExpertiesSection';
import ClientsSection from '../../Components/ClientsSection/ClientsSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
   
  
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServiceSection/>
    <AboutSection/>
    <ExpertiesSection/>
    <ClientsSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Home
