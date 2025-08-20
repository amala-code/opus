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
import Coaching from '../../Components/WhatweDo/Coaching'
import QualityTabs from '../../Components/QualityTabs/QualityTabs';
import SmallSection from '../../Components/SmallSection/SmallSection';
import ElegantBanner from '../../Components/Elegant/Elegant';
import BlogSection from '../../Components/Blog/Blog_Mini';
import VideoSection from '../../Components/Video/Videos';
import ProjectsShowcase from '../../Components/Projects/Project';

const Home = () => {
   
  
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Coaching/>
    {/* <ElegantBanner/> */}
    <SmallSection/>
    <ServiceSection/>
    {/* <VideoSection/> */}
    <ClientsSection/>
    <ProjectsShowcase/>
    <BlogSection/>
    {/* <ExpertiesSection/> */}
    <ContactSection/>
   
    <Footer/>
    </>
  )
}

export default Home
