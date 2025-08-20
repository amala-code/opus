import React from 'react';
import './Videos.css';
import v1 from "../../Images/v2.mp4";

const VideoSection = () => {
  return (
    <section className="video-section">
      <video autoPlay muted loop className="background-video">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <div className="video-content">
          <h1 className="headline">Crafting the Future with Steel & Vision</h1>
          <p className="subtext">
        We've combined engineering brilliance with unwavering dedication — 
            building not just machines, but legacies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
