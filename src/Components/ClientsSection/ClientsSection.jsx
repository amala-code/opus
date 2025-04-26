import React from 'react'
import './ClientsSection.css'

import Client1 from '../../Images/C1.png';
import Client2 from '../../Images/C2.png';
import Client3 from '../../Images/C3.png';
import Client4 from '../../Images/C4.png';
import Client5 from '../../Images/C5.png';
import Client6 from '../../Images/C6.png';
import Client7 from '../../Images/C7.png';
import Client8 from '../../Images/C8.png';
import Client9 from '../../Images/C1.png';
import Client10 from '../../Images/C2.png';

const ClientsSection = () => {

    const clients = [
        Client1, Client2, Client3, Client4, Client5, Client6,
        Client7, Client8, Client9, Client10,
      ];

  return (

      <section className="clients-section">
      <h2 className="clients-heading">Trusted By Industry Leaders</h2>
      <div className="clients-grid">
        {clients.map((logo, index) => (
          <div key={index} className="client-card">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientsSection
