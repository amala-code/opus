// src/components/Global.jsx
import React from 'react';
import './Global.css';

const Global = () => {
  return (
    <section className="global-section">
      <div className="global-container">
        <h2 className="global-heading">Going Global</h2>
        <p className="global-subtext">
          Opus Engineering is expanding its footprint across continents, bringing innovative Pre-Engineered Building solutions to international markets through digital connectivity and strategic partnerships.
        </p>

        <div className="global-stats">
          <div className="global-stat-item">
            <div className="global-stat-number">11.5%</div>
            <div className="global-stat-label">Global Market CAGR</div>
          </div>

          <div className="global-stat-item">
            <div className="global-stat-number">13.5%</div>
            <div className="global-stat-label">India Market CAGR</div>
          </div>

          <div className="global-stat-item">
            <div className="global-stat-number">50%</div>
            <div className="global-stat-label">Faster Construction</div>
          </div>
        </div>

        {/* <a href="#" className="global-cta-button">Explore Global Presence</a> */}
      </div>
    </section>
  );
};

export default Global;