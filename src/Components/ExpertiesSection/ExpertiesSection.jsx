// import React from 'react'
// import './ExpertiesSection.css'
// import StructureFabricationImg from '../../Images/Ex1.png';
// import MachineManufacturingImg from '../../Images/Ex2.png';
// import TanksPipesFabricationImg from '../../Images/Ex3.png';

// const ExpertiesSection = () => {

//     const expertiseData = [
//         {
//           image: StructureFabricationImg,
//           title: 'Structure Fabrication',
//           description: 'Custom steel structures for industrial applications',
//         },
//         {
//           image: MachineManufacturingImg,
//           title: 'Machine Manufacturing',
//           description: 'Precision machinery for various industries',
//         },
//         {
//           image: TanksPipesFabricationImg,
//           title: 'Tanks & Pipes Fabrication',
//           description: 'Industrial-grade storage solutions',
//         },
//       ];

//   return (
//      <section className="expertise-section">
//       <h2 className="expertise-heading">Our Core Expertise</h2>
//       <div className="expertise-grid">
//         {expertiseData.map((item, index) => (
//           <div key={index} className="expertise-card">
//             <div className="expertise-image">
//               <img src={item.image} alt={item.title} />
//             </div>
//             <div className="expertise-content">
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default ExpertiesSection


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
          description: 'Custom steel structures engineered for industrial applications with precision and durability',
          icon: '🏗️'
        },
        {
          image: MachineManufacturingImg,
          title: 'Machine Manufacturing',
          description: 'Advanced precision machinery designed for various industries with cutting-edge technology',
          icon: '⚙️'
        },
        {
          image: TanksPipesFabricationImg,
          title: 'Tanks & Pipes Fabrication',
          description: 'Industrial-grade storage and pipeline solutions built to the highest quality standards',
          icon: '🔧'
        },
    ];

    return (
        <section className="expertise-section">
            <div className="expertise-container">
                <div className="expertise-header">
                    <h2 className="expertise-heading">Our Core Expertise</h2>
                    <p className="expertise-subtext">Engineering excellence across specialized manufacturing domains</p>
                </div>
                
                <div className="expertise-grid">
                    {expertiseData.map((item, index) => (
                        <div key={index} className="expertise-card">
                            <div className="expertise-image-wrapper">
                                <div className="expertise-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="image-overlay">
                                        <span className="expertise-icon">{item.icon}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="expertise-content">
                                <h3 className="expertise-title">{item.title}</h3>
                                <p className="expertise-description">{item.description}</p>
                                <div className="expertise-cta">
                                    <span className="learn-more">Learn More</span>
                                    <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertiesSection