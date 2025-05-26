// ProjectsShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import "./project.css";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaIndustry, FaTools, FaEye, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: "proj-001",
    label: "STEEL FABRICATION PROJECT",
    heading: "Advanced Steel Manufacturing Complex",
    description: "A state-of-the-art steel fabrication facility featuring automated production lines, precision cutting equipment, and quality control systems. This project showcases our expertise in heavy industrial construction and advanced manufacturing solutions.",
    background: "/Images/wh1.png",
    location: "Industrial Zone, Mumbai",
    completionDate: "March 2024",
    projectType: "Steel Manufacturing",
    value: "₹45 Crores",
    duration: "18 months",
    features: ["Automated Production Lines", "Quality Control Systems", "Environmental Compliance", "Safety Protocols"],
    status: "In Progress",
    client: "Tata Steel Industries"
  },
  {
    id: "proj-002",
    label: "PIPELINE INFRASTRUCTURE",
    heading: "Industrial Pipeline Network",
    description: "Comprehensive pipeline installation project covering 25km of industrial-grade pipelines with advanced monitoring systems, safety valves, and environmental protection measures for chemical processing facilities.",
    background: "/Images/wh7.jpeg",
    location: "Vadodara, Gujarat",
    completionDate: "January 2024",
    projectType: "Pipeline Engineering",
    value: "₹32 Crores",
    duration: "14 months",
    features: ["Advanced Monitoring", "Safety Systems", "Environmental Protection", "Leak Detection"],
    status: "In Progress",
    client: "Reliance Industries"
  },
  {
    id: "proj-003",
    label: "TANK MANUFACTURING",
    heading: "Industrial Storage Tank Complex",
    description: "Design and construction of large-capacity industrial storage tanks with advanced corrosion protection, temperature control systems, and automated monitoring for petrochemical applications.",
    background: "/Images/wh3.png",
    location: "Jamnagar, Gujarat",
    completionDate: "Ongoing",
    projectType: "Tank Construction",
    value: "₹28 Crores",
    duration: "12 months",
    features: ["Corrosion Protection", "Temperature Control", "Automated Monitoring", "Safety Systems"],
    status: "In Progress",
    client: "Indian Oil Corporation"
  },
];

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

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
    // Replace with your contact form or modal
    console.log("Opening contact form");
    // Example: setShowContactModal(true);
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
                onClick={() => handleViewProject(currentProject.id)}
              >
                <FaEye className="btn-icon" />
                <span>View Project Details</span>
                <FaExternalLinkAlt className="external-icon" />
              </button>
              <button 
                className="contact-btn"
                onClick={handleContactForProject}
              >
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
                <div className="progress-ring">
                  <span>{currentProject.status === 'Completed' ? '100' : '75'}%</span>
                </div>
              </div>
              <div className="visual-stats">
                <div className="visual-stat">
                  <span className="stat-number-project">{currentProject.duration}</span>
                  <span className="stat-text">Duration</span>
                </div>
                <div className="visual-stat">
                  <span className="stat-number-project">{currentProject.value}</span>
                  <span className="stat-text">Investment</span>
                </div>
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