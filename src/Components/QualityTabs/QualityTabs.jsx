// QualityTabs.jsx
import React, { useState } from "react";
import "./QualityTabs.css";

const tabData = [
  {
    label: "FOCUS ON QUALITY",
    heading: "Focus on Quality",
    description:
      "HAPBCO upholds the highest standards in every project, ensuring excellence through meticulous planning and execution.",
    background: "/Images/wh1.png",
  },
  {
    label: "OCCUPATIONAL HEALTH & SAFETY",
    heading: "Health & Safety",
    description:
      "We prioritize the well-being of our workforce by implementing rigorous safety protocols and training programs.",
      background: "/Images/wh7.jpeg",
  },
  {
    label: "ENVIRONMENTAL SUSTAINABILITY",
    heading: "Environmental Sustainability",
    description:
      "Committed to eco-conscious practices, we integrate sustainable methods in every phase of our construction projects.",
      background: "/Images/wh3.png",
  },
];

const QualityTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { heading, description, background } = tabData[activeTab];

  return (
    <div
      className="quality-container"
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className="quality-overlay"></div>
        <div className="tabs_block">

    
      <div className="tabs">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="quality-content">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
};

export default QualityTabs;
