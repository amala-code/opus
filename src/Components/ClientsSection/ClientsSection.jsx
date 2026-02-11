

// import React from 'react'
// import './ClientsSection.css'

// import Client1 from '../../Images/l1.jpeg';
// import Client2 from '../../Images/l2.png';
// import Client3 from '../../Images/l3.png';
// import Client4 from '../../Images/l4.png';
// import Client6 from '../../Images/l6.png';
// import Client7 from '../../Images/l11.png';
// import Client8 from '../../Images/l8.png';
// import Client9 from '../../Images/l9.jpeg';
// import Client10 from '../../Images/l10.jpeg';

// const ClientsSection = () => {

//     const clients = [
//         Client1, Client2, Client3, Client4, Client6, Client7,
//         Client8, Client9, Client10,
//     ];

//     return (
//         <section className="clients-section">
//             <div className="clients-container">
//                 <div className="clients-header">
//                     <h2 className="clients-heading">Trusted By Industry Leaders</h2>
//                     <p className="clients-subtext">Partnering with forward-thinking organizations worldwide</p>
//                 </div>
                
//                 <div className="clients-grid">
//                     {clients.map((logo, index) => (
//                         <div key={index} className="client-card">
//                             <div className="client-logo-wrapper">
//                                 <img src={logo} alt={`Client ${index + 1}`} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ClientsSection

import React from 'react'
import './ClientsSection.css'

import Client1 from '../../Images/l1.jpeg';
import Client2 from '../../Images/l2.png';
import Client3 from '../../Images/l3.png';
import Client4 from '../../Images/l4.png';
import Client6 from '../../Images/l6.png';
import Client7 from '../../Images/l11.png';
import Client8 from '../../Images/l8.png';
import Client9 from '../../Images/l9.jpeg';
import Client10 from '../../Images/l10.jpeg';

import Client11 from '../../Images/logo1.jpeg';
import Client12 from '../../Images/logo2.png';

import Client13 from '../../Images/logo3.jpeg';

import Client14 from '../../Images/logo4.jpg';
import Client15 from '../../Images/logo5.png';
import Client16 from '../../Images/logo6.png';
import Client17 from '../../Images/logo7.png';
import Client18 from '../../Images/logo8.png';



const ClientsSection = () => {

    const clients = [
        Client1, Client2, Client3, Client4, Client6, Client7,
        Client8, Client9, Client10,Client11,Client12,Client13,Client14,Client15,Client16,Client17,Client18  
    ];

    return (
        <section className="clients-section">
                            <div className="testimonial-header">
           
                {/* </div> */}
                        <h2 className="section-title">
                    Trusted By 
                    <span className="title-highlight"> Industry Leaders </span>
                  </h2>

                  <div className="title-underline"></div>
                  </div>
            <div className="clients-container">
               
             
                <div className="clients-header">
            
                    <p className="clients-subtext">Partnering with forward-thinking organizations worldwide</p>
                </div>
                
                <div className="clients-marquee">
                    <div className="clients-track">
                        {/* First set of logos */}
                        {clients.map((logo, index) => (
                            <div key={`first-${index}`} className="client-card">
                                <div className="client-logo-wrapper">
                                    <img src={logo} alt={`Client ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {clients.map((logo, index) => (
                            <div key={`second-${index}`} className="client-card">
                                <div className="client-logo-wrapper">
                                    <img src={logo} alt={`Client ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection