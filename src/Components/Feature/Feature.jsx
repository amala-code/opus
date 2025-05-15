import React from 'react';
import './Feature.css';

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-container">
        <div className="feature-container-inner">
          <div className="feature-content">
            <h2>What Sets Us Apart</h2>
            <p>At Opus Engineering, established in 2021, we combine technical expertise with innovative thinking to deliver Pre-Engineered Building solutions that exceed expectations. Our strong team of experts from engineering, commercial, and financial backgrounds ensure superior quality and client satisfaction.</p>
            <a href="#" className="feature-cta-button">About Our Approach</a>
          </div>
          <div className="feature-grid">
            {/* Feature Item 1 */}
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>50% quicker construction with optimized material usage for affordability.</p>
            </div>
            
            {/* Feature Item 2 */}
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable materials reduce waste and lower carbon footprint.</p>
            </div>
            
            {/* Feature Item 3 */}
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Scalable & Durable</h3>
              <p>Customizable steel structures designed for long-term strength and flexibility.</p>
            </div>
            
            {/* Feature Item 4 */}
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>Turnkey Execution</h3>
              <p>Complete project handling from design to on-site assembly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;