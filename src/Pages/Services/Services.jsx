import React from 'react'
import './Services.css'
import Navbar from '../../Components/Navbar/Navbar'
import ExpertiesSection from '../../Components/ExpertiesSection/ExpertiesSection'
import Footer from '../../Components/Footer/Footer'

const Services = () => {
  return (
    <>
    <Navbar/>
    <div className="hero-container-services">
      <div className="hero-content">
        <h1>Engineering Strength, Delivering Excellence</h1>
        <p>From concept to completion, our services power the foundations of tomorrow's industries.</p>
      </div>
    </div>
    <div className="servcies_service1">
        <img className='servcies_service1_img' src="/Images/wh5.png" alt="" />
        <div className="servcies_service1_textDiv">
            <h1>Manufacturing Machinery</h1>
            <p>State-of-the-art machinery manufacturing with precision engineering, built to exceed the evolving demands of heavy industries. We specialize in designing and fabricating advanced machinery systems that optimize productivity, reduce downtime, and ensure consistent operational excellence. Every unit is crafted with durability, safety, and performance at its core.</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
        </div>
    </div>
    <div className="servcies_service1 reverse">
        <div className="servcies_service1_textDiv">
            <h1>Structural Steel Work</h1>
            <p>Custom structural steel solutions engineered to meet the unique demands of industrial, commercial, and infrastructure projects. We deliver precision-fabricated components with superior strength, ensuring structural integrity, load-bearing performance, and compliance with the most rigorous standards.

</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
            
        </div>
        <img className='servcies_service1_img' src="/Images/wh1.png" alt="" />
    </div>
    <div className="servcies_service1">
        <img className='servcies_service1_img' src="/Images/wh3.png" alt="" />
        <div className="servcies_service1_textDiv">
            <h1>Tanks & Receiversy</h1>
            <p>Industrial-grade tanks and receivers designed and manufactured to exact specifications for a wide range of storage and processing applications. Our solutions focus on safety, corrosion resistance, and operational efficiency, serving industries from chemical to manufacturing with unmatched reliability.</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
        </div>
    </div>
    <div className="servcies_service1 reverse">
        <div className="servcies_service1_textDiv">
            <h1>Pipeline Works</h1>
            <p>Comprehensive pipeline solutions tailored for critical industrial and utility applications. From fabrication to installation, we ensure seamless flow, leak-proof reliability, and long-term durability under high-pressure environments—backed by precision engineering and safety compliance.
</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
            
        </div>
        <img className='servcies_service1_img' src="/Images/wh4.png" alt="" />
    </div>
    <div className="servcies_service1">
        <img className='servcies_service1_img' src="/Images/wh6.jpeg" alt="" />
        <div className="servcies_service1_textDiv">
            <h1>Panel Building</h1>
            <p>Custom electrical panel design and manufacturing, built for control, safety, and integration across diverse industrial systems. Our panels are engineered for optimal power distribution, automation, and regulatory adherence, ensuring seamless performance and scalability.

</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
        </div>
    </div>
    <div className="servcies_service1 reverse">
        <div className="servcies_service1_textDiv">
            <h1>Erection Works</h1>
            <p>Professional installation and erection services executed with precision and adherence to safety protocols. From heavy machinery setups to steel structures, our experienced teams ensure fast-track implementation, structural alignment, and site efficiency from start to finish.


</p>
            <button className="servcies_service1_button">
                Explore More
            </button>
            
        </div>
        <img className='servcies_service1_img' src="/Images/wh7.jpeg" alt="" />
    </div>
    <ExpertiesSection/>
    <Footer/>

    </>
  )
}

export default Services
