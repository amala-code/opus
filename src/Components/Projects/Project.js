// ProjectsShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import "./project.css";
import { useNavigate } from 'react-router-dom'

import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaIndustry, FaTools, FaEye, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: "proj-001",
    label: "CHIMNEY FABRICATION",
    heading: "Amruta Herbals - Industrial Chimney System",
    description: "Complete fabrication and erection of a 30-meter industrial chimney for Amruta Herbals. This project involved precision engineering, structural calculations, and safety compliance for pharmaceutical manufacturing operations with optimal emission control and environmental standards.",
    background: "/Images/wh1.png",
    location: "Madhya Pradesh, India",
    completionDate: "February 2024",
    projectType: "Chimney Engineering",
    value: "₹12 Lakhs",
    duration: "8 weeks",
    features: ["30m Height Structure", "Emission Control Systems", "Safety Compliance", "Weather Resistant Design"],
    status: "Completed",
    client: "Amruta Herbals"
  },
  {
    id: "proj-002",
    label: "PEB STRUCTURE",
    heading: "Ayursatva - Pre-Engineered Building Complex",
    description: "Design, fabrication and erection of a 50-ton Pre-Engineered Building (PEB) structure at Sanwer Road sector for Ayursatva. The project includes complete structural framework, roofing systems, and industrial-grade construction for manufacturing operations.",
    background: "/Images/wh7.jpeg",
    location: "Sanwer Road, Indore",
    completionDate: "March 2024",
    projectType: "PEB Construction",
    value: "₹25 Lakhs",
    duration: "10 weeks",
    features: ["50 Ton Steel Structure", "Pre-Engineered Design", "Quick Assembly", "Cost-Effective Solution"],
    status: "Completed",
    client: "Ayursatva"
  },
  {
    id: "proj-003",
    label: "MULTI-PHASE PROJECT",
    heading: "CMYK Laticrete - Comprehensive Industrial Solutions",
    description: "A comprehensive multi-phase project including MS shuttle pallets, tubular pallets, 65-ton PEB fabrication, mezzanine structures, 60m³ silo cone fabrication, equipment erection, and complete denseveyor with bulker pipeline systems for advanced material handling operations.",
    background: "/Images/wh3.png",
    location: "Industrial Area, Indore",
    completionDate: "April 2024",
    projectType: "Multi-Phase Industrial",
    value: "₹45 Lakhs",
    duration: "16 weeks",
    features: ["65 Ton PEB Structure", "60m³ Silo Cone", "Material Handling Systems", "Mezzanine Structures"],
    status: "Completed",
    client: "CMYK Laticrete"
  },
  {
    id: "proj-004",
    label: "CHEMICAL PROCESSING",
    heading: "Angeloak Specialty Chemtech - Complete Plant Setup",
    description: "End-to-end fabrication and erection services including MS factory structures, MS & SS tanks and receivers, PEB warehouse construction, stainless steel and mild steel heat exchangers for specialized chemical processing operations with highest quality standards.",
    background: "/Images/wh1.png",
    location: "Chemical Hub, Gujarat",
    completionDate: "May 2024",
    projectType: "Chemical Plant Construction",
    value: "₹65 Lakhs",
    duration: "20 weeks",
    features: ["SS Heat Exchangers", "Chemical Grade Tanks", "PEB Warehouse", "Complete Plant Setup"],
    status: "In Progress",
    client: "Angeloak Specialty Chemtech"
  }
];

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate()
  

  const handleButtonClick = () => {
    navigate('/contact')
  }

  const currentProject = projectsData[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewProject = (projectId) => {
    // Replace with your actual project page navigation
    console.log(`Opening project: ${projectId}`);
    // Example: navigate(`/projects/${projectId}`);
    // Or open in new tab: window.open(`/projects/${projectId}`, '_blank');
  };

  const handleContactForProject = () => {
    console.log("Opening contact form");
  };

  return (
    <div
      ref={containerRef}
      className={`projects-container ${isVisible ? 'animate-in' : ''}`}
      style={{ backgroundImage: `url(${currentProject.background})` }}
    >
      <div className="projects-overlay"></div>
      
      {/* Background Pattern */}
      <div className="small-bg-pattern"></div>
      
      <div className="projects-content-wrapper">
        {/* Header Section */}
        <div className="projects-header">
          <div className="section-badge">
            <FaIndustry className="badge-icon" />
            <span>Our Projects</span>
          </div>
          <h2 className="projects-main-title">
            Engineering Excellence in 
            <span className="title-highlight"> Action</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="projects-tabs">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="tab-content">
                <span className="tab-label">{project.label}</span>
                <div className="tab-indicator"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Content */}
        <div className="project-showcase">
          <div className="project-info">
            {/* Project Header */}
            <div className="project-header">
              <div className="project-status">
                <span className={`status-badge ${currentProject.status.toLowerCase().replace(' ', '-')}`}>
                  {currentProject.status}
                </span>
                <span className="project-type">{currentProject.projectType}</span>
              </div>
              <h1 className="project-title">{currentProject.heading}</h1>
            </div>

            {/* Project Meta Info */}
            <div className="project-meta">
              <div className="meta-item-project">
                <FaMapMarkerAlt className="meta-icon" />
                <span>{currentProject.location}</span>
              </div>
              <div className="meta-item-project">
                <FaCalendarAlt className="meta-icon" />
                <span>{currentProject.completionDate}</span>
              </div>
              <div className="meta-item-project">
                <FaTools className="meta-icon" />
                <span>{currentProject.duration}</span>
              </div>
            </div>

            {/* Description */}
            <p className="project-description">{currentProject.description}</p>

            {/* Project Stats */}
            <div className="project-stats">
              {/* <div className="stat-item">
                <span className="stat-label">Project Value</span>
                <span className="stat-value">{currentProject.value}</span>
              </div> */}
              <div className="stat-item">
                <span className="stat-label-project">Client</span>
                <span className="stat-value">{currentProject.client}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="project-features">
              <h4>Key Features</h4>
              <div className="features-grid">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-dot"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="project-actions">
              <button 
                className="view-project-btn"
                onClick={() => handleButtonClick()}
                >
                <FaEye className="btn-icon" />
                <span>Discuss Similar Project</span>
                <FaArrowRight className="arrow-icon" />
              </button>
          
            </div>
          </div>

          {/* Project Visual Info */}
          <div className="project-visual">
            <div className="visual-card">
              <div className="card-header">
                <h4>Project Overview</h4>
                {/* <div className="progress-ring">
                  <span>{currentProject.status === 'Completed' ? '100' : '75'}%</span>
                </div> */}
              </div>
              <div className="visual-stats">
                <div className="visual-stat">
                  <span className="stat-number-project">{currentProject.duration}</span>
                  <span className="stat-text">Duration</span>
                </div>
                {/* <div className="visual-stat">
                  <span className="stat-number-project">{currentProject.value}</span>
                  <span className="stat-text">Investment</span>
                </div> */}
                <div className="visual-stat">
                  <span className="stat-number-project">{currentProject.features.length}</span>
                  <span className="stat-text">Key Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="project-indicators">
          {projectsData.map((_, index) => (
            <div
              key={index}
              className={`indicator ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;