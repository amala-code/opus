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
//         Client1, Client2, Client3, Client4,  Client6, Client7,
//         Client8, Client9, Client10,
//       ];

//   return (

//       <section className="clients-section">
//       <h2 className="clients-heading">Trusted By Industry Leaders</h2>
//       <div className="clients-grid">
//         {clients.map((logo, index) => (
//           <div key={index} className="client-card">
//             <img src={logo} alt={`Client ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
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

const ClientsSection = () => {

    const clients = [
        Client1, Client2, Client3, Client4, Client6, Client7,
        Client8, Client9, Client10,
    ];

    return (
        <section className="clients-section">
            <div className="clients-container">
                <div className="clients-header">
                    <h2 className="clients-heading">Trusted By Industry Leaders</h2>
                    <p className="clients-subtext">Partnering with forward-thinking organizations worldwide</p>
                </div>
                
                <div className="clients-grid">
                    {clients.map((logo, index) => (
                        <div key={index} className="client-card">
                            <div className="client-logo-wrapper">
                                <img src={logo} alt={`Client ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientsSection