import React, { useState } from 'react';
import './Services.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Feature from '../../Components/Feature/Feature';
import Global from '../../Components/Global/Global';
import ContactSection from '../../Components/ContactSection/ContactSection';
import ServicesShowcase from '../../Components/Servicesdetail/Servicedetail';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  // Service data including details for modal
  const services = [
    {
      id: "pre-engineered",
      title: "Pre-Engineered Buildings",
      summary: "High-quality, pre-fabricated steel structures for warehouses, factories, malls, offices, and more.",
      image: "/Images/Wh7.jpeg",
      details: `Pre-Engineered Buildings (PEB) represent the cutting edge of modern construction technology. Our PEB solutions are engineered to deliver maximum efficiency while minimizing material usage and construction time.

      Key Benefits:
      • 30-40% faster construction compared to conventional methods
      • Precision engineering ensures structural integrity and safety
      • Easy expansion and modification capabilities
      • Lower foundation requirements reducing overall project costs
      • Superior resistance to seismic activities and environmental factors
      
      Our team handles every stage from design to erection, ensuring quality control throughout the entire process. We specialize in designing PEBs for diverse applications including industrial plants, warehouses, commercial complexes, and specialized facilities like aircraft hangars and sports arenas.`
    },
    {
      id: "factory-industrial",
      title: "Factory & Industrial Setup",
      summary: "End-to-end solutions for setting up industrial plants and commercial establishments with precision and efficiency.",
      image: "/Images/Wh2.png",
      details: `Our factory and industrial setup solutions provide comprehensive support for establishing operational facilities from the ground up. We understand the unique requirements of industrial environments and design spaces that optimize workflow and productivity.

      Our Industrial Setup Services Include:
      • Site analysis and preparation
      • Customized facility planning based on production requirements
      • Installation of specialized industrial equipment
      • Integration of utility systems (power, water, HVAC)
      • Implementation of safety systems and compliance measures
      • Process optimization and workflow design
      
      We partner with clients across diverse sectors including manufacturing, food processing, pharmaceuticals, and logistics to create industrial spaces that enhance operational efficiency while meeting strict regulatory requirements.`
    },
    {
      id: "customizable-steel",
      title: "Customizable Steel Structures",
      summary: "Tailor-made buildings designed to suit specific business needs with flexibility and durability.",
      image: "/Images/Wh3.png",
      details: `Our customizable steel structures offer unparalleled flexibility to meet your specific operational requirements. Unlike conventional buildings, our steel structures can be designed to accommodate unique dimensions, spans, and load-bearing requirements.

      Customization Options:
      • Clear span designs up to 90 meters without intermediate columns
      • Variable building heights and roof pitches
      • Specialized crane systems and load-bearing capabilities
      • Custom mezzanine floors and multi-level configurations
      • Integrated canopies, lean-tos, and expansion provisions
      • Variety of cladding and insulation options for climate control
      
      Each structure is engineered to balance aesthetic appeal with functional efficiency, creating spaces that align perfectly with your business needs while maintaining cost-effectiveness. Our design team works closely with clients to transform operational requirements into structural solutions.`
    },
    {
      id: "sustainable-solutions",
      title: "Sustainable Solutions",
      summary: "Eco-friendly materials with minimal construction waste, supporting green building initiatives.",
      image: "/Images/Wh5.png",
      details: `Our sustainable building solutions prioritize environmental responsibility without compromising on performance. We employ green building technologies and practices that reduce environmental impact while enhancing operational efficiency.

      Sustainability Features:
      • High-efficiency insulation systems reducing energy consumption
      • Solar panel integration and renewable energy preparedness
      • Rainwater harvesting and water management systems
      • Recyclable steel components with minimal construction waste
      • Cool roof technologies to reduce heat island effect
      • Natural lighting optimization reducing artificial lighting needs
      
      Our sustainable buildings comply with international green building standards and can help clients achieve certifications like LEED, GRIHA, or IGBC ratings. We continually research and implement the latest sustainable technologies to ensure our structures remain at the forefront of environmental responsibility.`
    },
    {
      id: "maintenance-retrofitting",
      title: "Maintenance & Retrofitting",
      summary: "Ongoing support, modifications, and upgrades for existing PEB structures to ensure longevity.",
      image:"/Images/wh8.jpeg",
      details: `Our maintenance and retrofitting services extend the life and enhance the functionality of existing structures. We specialize in evaluating, upgrading, and modifying buildings to meet changing operational needs or regulatory requirements.

      Maintenance & Retrofitting Services:
      • Structural assessment and integrity evaluation
      • Corrosion prevention and treatment
      • Roof and wall panel replacement
      • Structural reinforcement and capacity enhancement
      • Energy efficiency upgrades and insulation improvements
      • Expansion of existing facilities with minimal disruption
      
      Our experienced team ensures that all retrofitting work is performed with minimal disruption to ongoing operations. We employ non-destructive testing methods and advanced diagnostic tools to accurately assess structural conditions before planning interventions, ensuring cost-effective solutions that extend building lifespan.`
    },
    {
      id: "turnkey-projects",
      title: "Turnkey Projects",
      summary: "Complete project handling from design to on-site assembly for seamless execution and delivery.",
      image: "/Images/wh6.jpeg",
      details: `Our turnkey project solutions provide end-to-end management of construction projects, giving clients the convenience of a single point of responsibility. From initial concept to final handover, we manage every aspect of the project lifecycle.

      Our Turnkey Approach Includes:
      • Comprehensive project planning and scheduling
      • Design engineering and architectural services
      • Regulatory approvals and documentation
      • Procurement and supply chain management
      • Construction and on-site assembly
      • Quality control and inspection services
      • Commissioning and operational handover
      
      By managing the entire project ecosystem, we eliminate coordination challenges and ensure seamless integration between various project elements. Our turnkey solutions deliver cost savings through optimized scheduling, bulk procurement, and efficient resource allocation, while guaranteeing quality standards are maintained throughout the project lifecycle.`
    }
  ];

  // Function to open the modal with service details
  const openServiceDetails = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    setSelectedService(service);
  };

  // Function to close the modal
  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <>
    <Navbar/>
    

    <ServicesShowcase/>
    {/* <Feature/> */}
    <Global/>
    <ContactSection/>
    <Footer/>
    </>
  );
};

export default Service;
