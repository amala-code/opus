import React from 'react'
import './ServiceSection.css'
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiSteelClaws } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { SiJfrogpipelines } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa6";
import { GiDamagedHouse } from "react-icons/gi";



const ServiceSection = () => {

    const services = [
        {
          icon: <MdPrecisionManufacturing/>,
          title: 'Manufacturing Machinery',
          description: 'State-of-the-art machinery manufacturing with precision engineering',
        },
        {
          icon: <GiSteelClaws/>,
          title: 'Structural Steel Work',
          description: 'Custom structural steel solutions for diverse industrial needs',
        },
        {
          icon: <FaIndustry/>,
          title: 'Tanks & Receivers',
          description: 'Industrial-grade tanks and receivers built to exact specifications',
        },
        {
          icon: <SiJfrogpipelines/>,
          title: 'Pipeline Works',
          description: 'Comprehensive pipeline solutions for industrial applications',
        },
        {
          icon: <FaWarehouse/>,
          title: 'Panel Building',
          description: 'Custom electrical panel design and manufacturing',
        },
        {
          icon: <GiDamagedHouse/>,
          title: 'Erection Works',
          description: 'Professional installation and erection services',
        },
      ];
      
  return (
      <section className="services-section">
      <h2>Our Comprehensive Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
