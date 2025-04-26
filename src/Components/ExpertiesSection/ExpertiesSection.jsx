import React from 'react'
import './ExpertiesSection.css'
import StructureFabricationImg from '../../Images/Ex1.png';
import MachineManufacturingImg from '../../Images/Ex2.png';
import TanksPipesFabricationImg from '../../Images/Ex3.png';

const ExpertiesSection = () => {

    const expertiseData = [
        {
          image: StructureFabricationImg,
          title: 'Structure Fabrication',
          description: 'Custom steel structures for industrial applications',
        },
        {
          image: MachineManufacturingImg,
          title: 'Machine Manufacturing',
          description: 'Precision machinery for various industries',
        },
        {
          image: TanksPipesFabricationImg,
          title: 'Tanks & Pipes Fabrication',
          description: 'Industrial-grade storage solutions',
        },
      ];

  return (
     <section className="expertise-section">
      <h2 className="expertise-heading">Our Core Expertise</h2>
      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div key={index} className="expertise-card">
            <div className="expertise-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="expertise-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiesSection
