// ManufacturingProjects.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Projectlarge.css';
import { 
  FaIndustry, FaTools, FaCog, FaUsers, FaCalendarAlt, FaMapMarkerAlt, 
  FaRupeeSign, FaChevronDown, FaChevronUp, FaPlay, FaDownload, 
  FaShieldAlt, FaLeaf, FaCertificate, FaStar, FaArrowRight, FaEye,
  FaHardHat, FaFire, FaTruck, FaChartLine, FaAward, FaClock
} from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

const projectsData = [
  {
    id: 'steel-complex-2024',
    title: 'Advanced Steel Manufacturing Complex',
    shortDesc: 'State-of-the-art integrated steel production facility with automated systems',
    category: 'Steel Manufacturing',
    status: 'Completed',
    location: 'Rourkela, Odisha',
    client: 'Steel Authority of India Limited (SAIL)',
    projectValue: '₹285 Crores',
    duration: '36 months',
    completionDate: 'March 2024',
    teamSize: 450,
    mainImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
    ],
    
    overview: 'This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.This flagship project represents our expertise in constructing large-scale steel manufacturing facilities. The complex features integrated production lines from raw material processing to finished steel products, incorporating cutting-edge automation and environmental compliance systems.',
    
    technologies: [
      { name: 'Automated Rolling Mills', icon: FaCog, description: 'High-speed continuous rolling systems with precision control' },
      { name: 'Blast Furnace Technology', icon: FaFire, description: 'Advanced blast furnace with improved energy efficiency' },
      { name: 'EAF Systems', icon: FaIndustry, description: 'Electric Arc Furnace with automated charging systems' },
      { name: 'Quality Control Labs', icon: FaCertificate, description: 'State-of-the-art metallurgical testing facilities' },
      { name: 'Environmental Controls', icon: FaLeaf, description: 'Advanced emission control and waste management' },
    ],
    
    specifications: [
      { label: 'Production Capacity', value: '2.5 Million Tonnes/Year' },
      { label: 'Plant Area', value: '450 Acres' },
      { label: 'Steel Grades', value: '25+ Different Grades' },
      { label: 'Energy Efficiency', value: '15% Above Industry Standard' },
      { label: 'Automation Level', value: '85% Automated' },
      { label: 'Employment Generated', value: '1,200+ Direct Jobs' }
    ],
    
    keyFeatures: [
      'Fully integrated steel production line',
      'Advanced process automation and control systems',
      'Environmental compliance with zero liquid discharge',
      'Energy-efficient design with waste heat recovery',
      'Comprehensive safety management systems',
      'Quality assurance laboratories',],

    
    challenges: [
      {
        challenge: 'Complex Site Logistics',
        solution: 'Implemented advanced project management systems and coordinated multi-phase construction'
      },
      {
        challenge: 'Environmental Compliance',
        solution: 'Integrated advanced pollution control systems and sustainable practices'
      },
      {
        challenge: 'Technology Integration',
        solution: 'Collaborated with international technology partners for seamless integration'
      }
    ],
    
    sustainability: [
      'Water recycling and zero liquid discharge',
      'Waste heat recovery systems',
      'Green belt development around the facility',
      'Use of renewable energy sources',
      'Sustainable raw material sourcing'
    ],
    
    testimonial: {
      text: "The steel complex delivered by HAPBCO has exceeded our expectations in terms of quality, efficiency, and environmental compliance. Their expertise in large-scale industrial construction is truly remarkable.",
      author: "Rajesh Kumar",
      designation: "Project Director, SAIL"
    }
  },
  
  {
    id: 'pipe-manufacturing-2023',
    title: 'Seamless Pipe Manufacturing Plant',
    shortDesc: 'High-precision seamless steel pipe production facility for oil & gas industry',
    category: 'Pipe Manufacturing',
    status: 'Completed',
    location: 'Ankleshwar, Gujarat',
    client: 'Jindal Steel & Power Ltd',
    projectValue: '₹180 Crores',
    duration: '28 months',
    completionDate: 'August 2023',
    teamSize: 320,
    mainImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581094372319-02f1b687e031?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop'
    ],
    
    overview: 'Specialized manufacturing facility for producing high-quality seamless steel pipes used in oil & gas, petrochemical, and power generation industries. The plant incorporates advanced piercing and rolling technologies.',
    
    technologies: [
      { name: 'Rotary Piercing Mills', icon: FaTools, description: 'High-precision piercing technology for seamless pipes' },
      { name: 'Pilger Mills', icon: FaCog, description: 'Advanced cold pilger rolling systems' },
      { name: 'Heat Treatment', icon: FaFire, description: 'Controlled atmosphere heat treatment furnaces' },
      { name: 'NDT Systems', icon: FaCertificate, description: 'Non-destructive testing for quality assurance' },
      { name: 'Finishing Lines', icon: FaIndustry, description: 'Automated finishing and inspection systems' }
    ],
    
    specifications: [
      { label: 'Production Capacity', value: '200,000 Tonnes/Year' },
      { label: 'Pipe Diameter Range', value: '25mm to 350mm' },
      { label: 'Wall Thickness', value: '2mm to 50mm' },
      { label: 'Quality Standards', value: 'API 5L, ASTM, IS' },
      { label: 'Testing Facilities', value: '100% Ultrasonic Testing' }
    ],
    
    keyFeatures: [
      'Advanced rotary piercing technology',
      'Precision cold pilger rolling mills',
      'Comprehensive quality control systems',
      'Automated material handling',
      'Energy-efficient induction heating'
    ],
    
    challenges: [
      {
        challenge: 'Precision Requirements',
        solution: 'Implemented advanced control systems for dimensional accuracy'
      },
      {
        challenge: 'Quality Standards',
        solution: 'Established comprehensive testing protocols and quality labs'
      }
    ],
    
    sustainability: [
      'Energy-efficient induction heating systems',
      'Waste heat recovery for plant heating',
      'Recycling of steel scrap and cutting waste'
    ],
    
    testimonial: {
      text: "The seamless pipe plant has achieved exceptional quality standards and production efficiency. HAPBCO's attention to detail and technical expertise made this project a success.",
      author: "Suresh Patel",
      designation: "General Manager, Jindal Steel"
    }
  },

  {
    id: 'fabrication-workshop-2023',
    title: 'Heavy Steel Fabrication Workshop',
    shortDesc: 'Modern fabrication facility for heavy structural steel components',
    category: 'Steel Fabrication',
    status: 'Completed',
    location: 'Pune, Maharashtra',
    client: 'Larsen & Toubro Heavy Engineering',
    projectValue: '₹95 Crores',
    duration: '18 months',
    completionDate: 'December 2023',
    teamSize: 180,
    mainImage: 'https://images.unsplash.com/photo-1581094372319-02f1b687e031?w=800&h=600&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1581094372319-02f1b687e031?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
    ],
    
    overview: 'State-of-the-art heavy fabrication workshop designed for manufacturing large structural steel components, pressure vessels, and industrial equipment with precision welding and machining capabilities.',
    
    technologies: [
      { name: 'CNC Plasma Cutting', icon: FaTools, description: 'High-precision plasma cutting systems' },
      { name: 'Robotic Welding', icon: FaCog, description: 'Automated welding systems for consistent quality' },
      { name: 'Heavy Cranes', icon: FaTruck, description: '100-tonne overhead cranes for material handling' },
      { name: 'Shot Blasting', icon: FaIndustry, description: 'Automated surface preparation systems' },
      { name: 'Quality Labs', icon: FaCertificate, description: 'Advanced NDT and metallurgical testing' }
    ],
    
    specifications: [
      { label: 'Workshop Area', value: '25,000 sq.m' },
      { label: 'Crane Capacity', value: '100 Tonnes' },
      { label: 'Cutting Thickness', value: 'Up to 150mm' },
      { label: 'Annual Capacity', value: '15,000 Tonnes' },
      { label: 'Welding Standards', value: 'ASME, AWS, EN' }
    ],
    
    keyFeatures: [
      'Heavy-duty overhead crane systems',
      'Automated plasma and flame cutting',
      'Robotic welding stations',
      'Shot blasting and painting facilities',
      'Quality control and testing labs'
    ],
    
    challenges: [
      {
        challenge: 'Heavy Component Handling',
        solution: 'Designed specialized crane systems and material handling equipment'
      },
      {
        challenge: 'Welding Quality',
        solution: 'Implemented robotic welding systems with real-time monitoring'
      }
    ],
    
    sustainability: [
      'Energy-efficient lighting and equipment',
      'Waste steel recycling systems',
      'Dust collection and air filtration'
    ],
    
    testimonial: {
      text: "This fabrication workshop has significantly enhanced our production capabilities. The modern equipment and efficient layout have improved both quality and productivity.",
      author: "Amit Sharma",
      designation: "Plant Manager, L&T"
    }
  },

  {
    id: 'rolling-mill-2024',
    title: 'Continuous Rolling Mill Complex',
    shortDesc: 'Advanced continuous rolling mill for producing high-quality steel products',
    category: 'Rolling Mill',
    status: 'In Progress',
    location: 'Jamshedpur, Jharkhand',
    client: 'Tata Steel Limited',
    projectValue: '₹425 Crores',
    duration: '42 months',
    completionDate: 'Expected Dec 2025',
    teamSize: 520,
    mainImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
    ],
    
    overview: 'Next-generation continuous rolling mill complex featuring advanced automation, energy-efficient design, and capability to produce a wide range of steel products for automotive, construction, and engineering applications.',
    
    technologies: [
      { name: 'Walking Beam Furnace', icon: FaFire, description: 'Energy-efficient reheating furnace system' },
      { name: 'High-Speed Rolling', icon: FaCog, description: 'Advanced high-speed rolling mill stands' },
      { name: 'Laminar Cooling', icon: FaIndustry, description: 'Controlled cooling system for metallurgy' },
      { name: 'Coil Handling', icon: FaTruck, description: 'Automated coil handling and storage systems' },
      { name: 'Process Control', icon: FaChartLine, description: 'Advanced process automation and control' }
    ],
    
    specifications: [
      { label: 'Annual Capacity', value: '1.8 Million Tonnes' },
      { label: 'Product Range', value: '1.2mm to 25mm thickness' },
      { label: 'Rolling Speed', value: 'Up to 20 m/s' },
      { label: 'Coil Weight', value: 'Up to 35 Tonnes' },
      { label: 'Automation Level', value: '90% Automated' }
    ],
    
    keyFeatures: [
      'State-of-the-art walking beam furnace',
      'High-speed continuous rolling mill',
      'Advanced laminar cooling system',
      'Automated coil handling and storage',
      'Integrated quality control systems'
    ],
    
    challenges: [
      {
        challenge: 'High-Speed Operations',
        solution: 'Advanced control systems and precision engineering for high-speed rolling'
      },
      {
        challenge: 'Product Quality',
        solution: 'Integrated quality monitoring and feedback control systems'
      }
    ],
    
    sustainability: [
      'Energy recovery from hot steel products',
      'Optimized furnace design for fuel efficiency',
      'Water recycling and treatment systems'
    ],
    
    testimonial: {
      text: "This rolling mill project represents the future of steel production. The advanced technology and automation will set new benchmarks in the industry.",
      author: "Dr. Prashant Kumar",
      designation: "Chief Technology Officer, Tata Steel"
    }
  }
];

const ManufacturingProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [expandedProjects, setExpandedProjects] = useState(new Set([0]));
  const projectRefs = useRef([]);

  const toggleProject = (index) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
    
    if (!expandedProjects.has(index)) {
      setTimeout(() => {
        projectRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  };

  const ProjectCard = ({ project, index, isExpanded }) => (
    <div 
      ref={el => projectRefs.current[index] = el}
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
    >
      {/* Project Header */}
      <div className="project-card-header" onClick={() => toggleProject(index)}>
        <div className="project-header-content">
          <div className="project-meta-info">
            <span className="project-category">{project.category}</span>
            <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          </div>
          
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-short-desc">{project.shortDesc}</p>
          
          <div className="project-key-info">
            <div className="key-info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>{project.location}</span>
            </div>
            <div className="key-info-item">
              <FaRupeeSign className="info-icon" />
              <span>{project.projectValue}</span>
            </div>
            <div className="key-info-item">
              <FaClock className="info-icon" />
              <span>{project.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="expand-button">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="project-expanded-content">
          {/* Project Gallery */}
          <div className="project-gallery">
            <div className="main-image">
              <img src={project.mainImage} alt={project.title} />
              <div className="image-overlay">
                <button className="play-button">
                  <FaPlay />
                </button>
              </div>
            </div>
            <div className="gallery-thumbnails">
              {project.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`${project.title} ${idx + 1}`} />
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div className="project-overview">
            <h4>Project Overview</h4>
            <p>{project.overview}</p>
          </div>

          {/* Project Details Grid */}
          <div className="project-details-grid">
            {/* Basic Info */}
            <div className="detail-section">
              <h4><FaIndustry /> Project Information</h4>
              <div className="detail-items">
                <div className="detail-item">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">{project.client}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{project.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Project Value:</span>
                  <span className="detail-value">{project.projectValue}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{project.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Team Size:</span>
                  <span className="detail-value">{project.teamSize} professionals</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Completion:</span>
                  <span className="detail-value">{project.completionDate}</span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="detail-section">
              <h4><FaCog /> Technical Specifications</h4>
              <div className="specifications-grid">
                {project.specifications.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="technologies-section">
            <h4><FaTools /> Technologies & Equipment</h4>
            <div className="technologies-grid">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="technology-card">
                  <div className="tech-icon">
                    <tech.icon />
                  </div>
                  <div className="tech-content">
                    <h5>{tech.name}</h5>
                    <p>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="features-section">
            <h4><FaStar /> Key Features</h4>
            <div className="features-grid">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <div className="feature-bullet"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="challenges-section">
            <h4><FaShieldAlt /> Challenges & Solutions</h4>
            <div className="challenges-list">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="challenge-item">
                  <div className="challenge-header">
                    <strong>Challenge:</strong> {item.challenge}
                  </div>
                  <div className="solution">
                    <strong>Solution:</strong> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability */}
          <div className="sustainability-section">
            <h4><FaLeaf /> Sustainability Initiatives</h4>
            <div className="sustainability-list">
              {project.sustainability.map((initiative, idx) => (
                <div key={idx} className="sustainability-item">
                  <FaLeaf className="sustainability-icon" />
                  <span>{initiative}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="testimonial-section">
            <h4><FaAward /> Client Testimonial</h4>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"{project.testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{project.testimonial.author}</strong>
                  <span>{project.testimonial.designation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="project-actions">
            <button className="action-button primary">
              <FaEye />
              <span>View Detailed Case Study</span>
            </button>
            <button className="action-button secondary">
              <FaDownload />
              <span>Download Project Brochure</span>
            </button>
            <button className="action-button tertiary">
              <FaArrowRight />
              <span>Discuss Similar Project</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
    <Navbar/>
    <section className="manufacturing-projects">
        <div className="section-header">
          <div className="header-badge">
            <FaIndustry />
            <span>Manufacturing Excellence</span>
          </div>
          <h2 className="section-title">
            Our <span className="title-highlight">Manufacturing</span> Projects
          </h2>
          <p className="section-description">
            Explore our comprehensive portfolio of steel manufacturing, fabrication, and industrial 
            projects that showcase our engineering excellence and commitment to quality.
          </p>
          <div className="title-underline"></div>
        </div> 

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedProjects.has(index)}
            />
          ))}
        </div>

        <div className="projects-cta">
          <h3>Ready to Start Your Manufacturing Project?</h3>
          <p>Let's discuss how we can bring your industrial vision to life with our expertise and technology.</p>
          <button className="cta-button">
            <span>Start Your Project</span>
            <FaArrowRight />
          </button>
        </div>
    </section>
    <ContactSection/>
    <Footer/>
    
    </>
  );
};

export default ManufacturingProjects;