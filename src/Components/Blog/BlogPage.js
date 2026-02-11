// import React, { useState, useEffect, useRef } from 'react';
// import './Blog.css';
// import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag } from 'react-icons/fa';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

// const BlogSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const blogPosts = [
//     {
//       id: 1,
//       title: "Revolutionary Steel Manufacturing: The Future of Industrial Construction",
//       excerpt: "Discover how advanced steel manufacturing techniques are transforming modern industrial construction with unprecedented precision and efficiency. From high-strength alloys to automated fabrication processes.",
//       content: "In today's rapidly evolving industrial landscape, steel manufacturing has undergone a remarkable transformation...",
//       image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       author: "Dr. Sarah Mitchell",
//       date: "March 15, 2024",
//       readTime: "8 min read",
//       category: "Steel Manufacturing",
//       tags: ["Innovation", "Technology", "Steel"],
//       featured: true
//     },
//     {
//       id: 2,
//       title: "Pipeline Engineering Excellence: Modern Installation Techniques",
//       excerpt: "Exploring cutting-edge pipeline installation methods that ensure maximum safety and efficiency in industrial applications.",
//       image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       author: "Mike Rodriguez",
//       date: "March 12, 2024",
//       readTime: "6 min read",
//       category: "Pipeline Works",
//       tags: ["Pipeline", "Engineering", "Safety"]
//     },
//     {
//       id: 3,
//       title: "Industrial Tank Design: Precision Engineering for Maximum Efficiency",
//       excerpt: "How modern tank manufacturing combines structural integrity with operational excellence for diverse industrial needs.",
//       image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
//       author: "Emily Chen",
//       date: "March 10, 2024",
//       readTime: "5 min read",
//       category: "Tank Manufacturing",
//       tags: ["Tanks", "Design", "Engineering"]
//     },
//     {
//       id: 4,
//       title: "Structural Steel Innovation: Building Tomorrow's Infrastructure",
//       excerpt: "Advanced structural steel solutions that are reshaping modern industrial architecture and construction methodologies.",
//       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       author: "James Wilson",
//       date: "March 8, 2024",
//       readTime: "7 min read",
//       category: "Structural Steel",
//       tags: ["Structure", "Innovation", "Construction"]
//     },

//   ];

//   const categories = ['All', 'Steel Manufacturing', 'Pipeline Works', 'Tank Manufacturing', 'Structural Steel', 'Manufacturing', 'Electrical'];

//   const filteredPosts = activeCategory === 'All' 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === activeCategory);

//   const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
//   const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

//   return (
//     <>
//     <Navbar/>
//     <section className="blog-section" ref={sectionRef}>
//       <div className="blog-container">
//         {/* Header Section */}
//         <div className={`blog-header ${isVisible ? 'animate-in' : ''}`}>
//           <div className="section-badge-blog">
//             <FaTag className="badge-icon" />
//             <span>Latest Insights</span>
//           </div>
//           <h2 className="section-title">
//             Manufacturing
//             <span className="title-highlight"> Insights & Innovation</span>
//           </h2>
//           <div className="title-underline"></div>
//           <p className="section-subtitle">
//             Stay ahead with the latest trends, technologies, and best practices in 
//             industrial manufacturing, steel fabrication, and engineering excellence.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className={`category-filter ${isVisible ? 'animate-in' : ''}`}>
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Blog Content */}
//         <div className={`blog-content ${isVisible ? 'animate-in' : ''}`}>
//           {/* Featured Post */}
//           {featuredPost && (
//             <div className="featured-post">
//               <div className="featured-image">
//                 <img src={featuredPost.image} alt={featuredPost.title} />
//                 <div className="featured-overlay">
//                   <div className="featured-badge">Featured Article</div>
//                 </div>
//               </div>
//               <div className="featured-content">
//                 <div className="post-meta">
//                   <span className="post-category">{featuredPost.category}</span>
//                   <div className="meta-divider"></div>
//                   <span className="post-date">
//                     <FaCalendarAlt className="meta-icon" />
//                     {featuredPost.date}
//                   </span>
//                   <div className="meta-divider"></div>
//                   <span className="read-time">
//                     <FaClock className="meta-icon" />
//                     {featuredPost.readTime}
//                   </span>
//                 </div>
//                 <h3 className="featured-title">{featuredPost.title}</h3>
//                 <p className="featured-excerpt">{featuredPost.excerpt}</p>
//                 <div className="post-tags">
//                   {featuredPost.tags.map((tag, index) => (
//                     <span key={index} className="tag">{tag}</span>
//                   ))}
//                 </div>
//                 <div className="post-footer">
//                   <div className="author-info">
//                     <div className="author-avatar">
//                       <FaUser />
//                     </div>
//                     <span className="author-name">{featuredPost.author}</span>
//                   </div>
//                   <button className="read-more-btn">
//                     <span>Read Full Article</span>
//                     <FaArrowRight className="arrow-icon" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Regular Posts Grid */}
//           <div className="posts-grid">
//             {regularPosts.map((post, index) => (
//               <article key={post.id} className={`blog-card card-${index + 1}`}>
//                 <div className="card-image">
//                   <img src={post.image} alt={post.title} />
//                   <div className="image-overlay">
//                     <span className="card-category">{post.category}</span>
//                   </div>
//                 </div>
//                 <div className="card-content">
//                   <div className="card-meta">
//                     <span className="card-date">
//                       <FaCalendarAlt className="meta-icon" />
//                       {post.date}
//                     </span>
//                     <span className="card-read-time">
//                       <FaClock className="meta-icon" />
//                       {post.readTime}
//                     </span>
//                   </div>
//                   <h4 className="card-title">{post.title}</h4>
//                   <p className="card-excerpt">{post.excerpt}</p>
//                   <div className="card-tags">
//                     {post.tags.slice(0, 2).map((tag, tagIndex) => (
//                       <span key={tagIndex} className="card-tag">{tag}</span>
//                     ))}
//                   </div>
//                   <div className="card-footer">
//                     <div className="card-author">
//                       <div className="author-avatar-small">
//                         <FaUser />
//                       </div>
//                       <span>{post.author}</span>
//                     </div>
//                     <button className="card-read-btn">
//                       <span>Read More</span>
//                       <FaArrowRight className="card-arrow" />
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA */}

//       </div>
//     </section>
//     <Footer/>
//     </>
//   );

// };

// export default BlogSection;

import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const blogPosts = [
  {
    id: 1,
    title: "Revolutionary Steel Manufacturing: The Future of Industrial Construction in India",
    excerpt: "Discover how advanced steel manufacturing techniques are transforming modern industrial construction with unprecedented precision and efficiency. From high-strength alloys to automated fabrication processes, Indian manufacturers are leading the global revolution.",
    content: `In today's rapidly evolving industrial landscape, steel manufacturing has undergone a remarkable transformation, with India emerging as one of the world's largest steel producers. Advanced technologies like automated welding systems, precision CNC cutting equipment, and intelligent quality control mechanisms have revolutionized how we approach large-scale construction projects across major industrial hubs like Mumbai, Pune, Ahmedabad, and Chennai.

    The integration of artificial intelligence and machine learning in steel fabrication has enabled manufacturers to achieve unprecedented levels of precision and efficiency. Modern steel fabrication facilities now utilize state-of-the-art robotic systems that can perform complex welding operations with millimeter accuracy, significantly reducing human error and improving overall product quality. These automated systems work 24/7, increasing production capacity by 40-50% while maintaining consistent quality standards that meet international specifications like ASTM, BS, and IS codes.

    High-strength alloys and specialized coatings have expanded the applications of steel in harsh industrial environments. These innovations allow structures to withstand extreme temperatures ranging from -40°C to +600°C, exposure to corrosive chemicals including acids and alkalis, and heavy mechanical loads exceeding 500 MPa while maintaining structural integrity over decades of operation. The development of weather-resistant steel grades specifically designed for India's diverse climate conditions—from humid coastal regions to arid northern plains—has been transformative for infrastructure and construction projects.

    The environmental impact of steel manufacturing has also been significantly reduced through the implementation of energy-efficient electric arc furnaces, waste heat recovery systems, and comprehensive recycling programs. Modern steel plants can now recycle up to 95% of their waste materials, making steel one of the most sustainable construction materials available today. Indian steel manufacturers have invested heavily in green steel production technologies, including the use of renewable energy sources and carbon capture systems, aligning with the government's sustainability goals and international climate commitments.

    Advanced manufacturing processes including continuous casting, hot rolling, cold forming, and precision machining have improved production efficiency while reducing material waste. The adoption of lean manufacturing principles and Six Sigma quality management systems has streamlined operations across the entire production chain, from raw material procurement to final product delivery. This has resulted in cost savings of 15-20% while simultaneously improving product quality and customer satisfaction.

    Quality assurance in modern steel manufacturing involves sophisticated testing methods including spectroscopy for chemical composition analysis, tensile testing for mechanical properties, ultrasonic testing for internal defects, and magnetic particle inspection for surface flaws. These comprehensive quality control measures ensure that every steel product meets stringent international standards and customer specifications, guaranteeing reliability and safety in critical structural applications.

    Digital transformation has revolutionized steel plant operations with the implementation of Industry 4.0 technologies. Real-time monitoring systems, predictive maintenance algorithms, and integrated supply chain management platforms have optimized production efficiency and reduced downtime. Smart sensors throughout the manufacturing process collect millions of data points daily, enabling continuous process optimization and quality improvement.

    The future of steel manufacturing in India looks exceptionally promising with ongoing research into nano-structured steels, self-healing materials, ultra-high-strength alloys, and bio-inspired designs. These cutting-edge innovations will further enhance the performance, durability, and sustainability of steel products, cementing India's position as a global steel manufacturing powerhouse and supporting the nation's ambitious infrastructure development goals under initiatives like Make in India and Atmanirbhar Bharat.`,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Dr. Rajesh Kumar Sharma",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Steel Manufacturing",
    tags: ["Steel Manufacturing", "Industrial Construction", "Advanced Materials", "Make in India", "Sustainable Steel", "Quality Control", "Automation", "Green Technology"],
    featured: true
  },
  {
    id: 2,
    title: "Pipeline Engineering Excellence: Modern Installation Techniques for Indian Infrastructure",
    excerpt: "Exploring cutting-edge pipeline installation methods that ensure maximum safety and efficiency in industrial applications. Comprehensive guide to pipeline design, materials, and maintenance across India's expanding energy and water distribution networks.",
    content: `Pipeline engineering has evolved significantly with the introduction of advanced installation techniques and specialized materials, playing a pivotal role in India's rapidly expanding energy infrastructure and water distribution systems. Modern pipeline networks incorporate sophisticated SCADA monitoring technologies, real-time leak detection systems, and automated control mechanisms that ensure optimal performance, safety, and efficiency across thousands of kilometers of pipeline infrastructure spanning the entire nation.

    The use of high-density polyethylene (HDPE), ductile iron pipes, carbon steel, stainless steel, and fiber-reinforced polymer (FRP) materials has revolutionized pipeline durability and corrosion resistance. These advanced materials can withstand extreme environmental conditions—from the scorching heat of Rajasthan's deserts exceeding 50°C to the flood-prone areas of Assam and West Bengal—while maintaining structural integrity for 50+ years with minimal maintenance requirements. Material selection depends on various factors including fluid characteristics, pressure ratings, temperature requirements, soil conditions, and seismic considerations.

    Installation techniques now utilize precision GPS mapping systems, laser-guided horizontal directional drilling (HDD) equipment, and advanced robotic welding systems to ensure accurate placement and secure leak-proof connections. These modern technologies have reduced installation time by up to 40% while improving overall system reliability and reducing project costs. HDD techniques allow pipeline installation beneath rivers, highways, railways, and ecologically sensitive areas without disrupting surface activities or causing environmental damage, making them ideal for urban and environmentally protected zones.

    Safety protocols have been enhanced through the implementation of real-time monitoring systems that can detect potential issues before they escalate into critical problems. Advanced pressure sensors, temperature monitors, flow meters, and acoustic emission detectors provide continuous data streams that enable proactive predictive maintenance and prevent costly failures or environmental incidents. Integrated SCADA systems allow operators in centralized control rooms to monitor and manage pipeline networks spanning entire states, responding instantly to anomalies and optimizing flow parameters for maximum efficiency.

    Pipeline coating technologies have advanced significantly with innovations like fusion-bonded epoxy (FBE), three-layer polyethylene (3LPE), polyurethane coatings, and coal tar enamel providing superior protection against corrosion, mechanical damage, bacterial degradation, and chemical attack. These multi-layer protective systems are essential for pipelines transporting crude oil, natural gas, refined petroleum products, water, chemicals, and slurry across India's diverse and challenging terrain including coastal areas with high salinity, industrial zones with soil contamination, and agricultural regions with varying water tables.

    Cathodic protection systems, including both impressed current cathodic protection (ICCP) and sacrificial anode systems, have been integrated into modern pipeline networks to prevent electrochemical corrosion. Regular monitoring using reference electrodes, automated data logging systems, and periodic surveys ensure these protection systems maintain optimal performance throughout the pipeline's operational life. This proactive approach has extended pipeline lifespans from 20-25 years to 50-75 years in challenging soil conditions.

    Pre-commissioning and commissioning activities are critical phases that include hydrostatic pressure testing at 1.5 times the design pressure, intelligent pigging operations for cleaning and inspection, air blowing to remove debris, chemical cleaning for internal surfaces, and nitrogen purging for inert atmospheres. These comprehensive procedures verify structural integrity, remove construction debris, confirm leak-free operations, and ensure pipelines meet stringent quality and safety standards before being placed into active service.

    Pipeline integrity management programs incorporate regular inline inspections using intelligent pigs equipped with magnetic flux leakage (MFL) sensors, ultrasonic transducers, and geometry measurement tools. These advanced inspection tools can detect corrosion, cracks, dents, mechanical damage, and coating defects while the pipeline remains in operation, allowing operators to schedule repairs before failures occur. Risk-based inspection strategies prioritize high-consequence areas including river crossings, road crossings, and densely populated regions for more frequent monitoring.

    The future of pipeline engineering in India involves smart pipeline technologies with embedded fiber optic sensors for distributed temperature and acoustic sensing, AI-powered predictive maintenance algorithms, drone-based aerial surveillance systems, and satellite monitoring for right-of-way encroachment detection. These innovative technologies will further enhance safety, reduce operational costs, minimize environmental impact, and support India's ambitious infrastructure development goals including city gas distribution networks, inter-regional crude oil pipelines, and cross-country gas transmission systems.`,
    author: "Priya Deshmukh",
    image: "https://images.unsplash.com/photo-1441802763029-b621005a04a5?q=80&w=1219&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 12, 2024",
    readTime: "9 min read",
    category: "Pipeline Works",
    tags: ["Pipeline Engineering", "Infrastructure Development", "HDPE Pipes", "Oil & Gas", "Water Distribution", "SCADA Systems", "Corrosion Protection", "Safety Standards"]
  },
  {
    id: 3,
    title: "Industrial Tank Design: Precision Engineering for Maximum Efficiency in Indian Industries",
    excerpt: "How modern tank manufacturing combines structural integrity with operational excellence for diverse industrial needs. Comprehensive analysis of storage tank design, materials, safety systems, and applications across petrochemical, pharmaceutical, and food processing sectors.",
    content: `Industrial tank design has reached new heights of sophistication with the integration of advanced engineering principles, cutting-edge materials, and smart monitoring technologies, supporting India's thriving petrochemical, pharmaceutical, food processing, and chemical industries. Modern storage tanks are designed using computational fluid dynamics (CFD) analysis, finite element modeling (FEM), and advanced stress analysis software to optimize flow patterns, minimize energy consumption, ensure structural integrity, and maximize operational efficiency throughout their 30-50 year service life.

    The implementation of smart sensors and Industrial Internet of Things (IIoT) connectivity has transformed tank monitoring and management into a highly automated, data-driven operation. These systems provide real-time data on liquid levels using radar and ultrasonic sensors, temperature profiles using thermocouples and RTDs, pressure measurements using precision transducers, and chemical composition using online analyzers. This enables operators to maintain optimal storage conditions, prevent contamination, detect leaks immediately, and optimize inventory management. Cloud-based monitoring platforms allow facility managers to oversee multiple tank installations across different geographic locations from a single integrated dashboard, improving operational efficiency and emergency response times.

    Advanced corrosion protection systems, including impressed current cathodic protection (ICCP), sacrificial magnesium or zinc anode systems, specialized epoxy linings, glass-flake coatings, and rubber linings, have significantly extended tank lifespan in aggressive chemical environments. These multi-layered protection technologies defend against chemical corrosion from acids, alkalis, and solvents, environmental damage from UV radiation and weathering, microbial-induced corrosion in water storage applications, and mechanical wear from agitation systems and flow turbulence, ensuring decades of reliable operation with minimal maintenance. Indian manufacturers have developed indigenous coating formulations specifically engineered for tropical climate conditions, high humidity environments, and the specific requirements of local petrochemical and pharmaceutical industries.

    Modular construction techniques have revolutionized tank installation by making it more efficient, cost-effective, and flexible. Pre-fabricated tank sections including shell courses, roof sections, bottom plates, and nozzle assemblies manufactured in ISO-certified factory environments under strict quality control can be transported to site and assembled rapidly, reducing construction time by 30-50% and minimizing disruption to ongoing plant operations. This approach also facilitates easier access for future maintenance, internal inspections using robotic crawlers, modifications to add new nozzles or internal equipment, and capacity expansions as production requirements grow or change over time.

    Tank design now incorporates sophisticated stress analysis using finite element methods to optimize shell thickness distributions, reinforcement pad sizing, support design, nozzle orientations, and foundation requirements. This ensures complete structural integrity under all loading conditions including hydrostatic pressure, wind loads, seismic forces, vacuum conditions, thermal expansion, and settlement while minimizing material usage and construction costs. Seismic design considerations following IS 1893 standards are particularly critical for installations in earthquake-prone regions including Gujarat, Himachal Pradesh, Uttarakhand, Northeast India, and the Kutch region where significant seismic activity has been recorded.

    Storage tank applications span remarkably diverse industries including petroleum refineries storing crude oil and refined products, chemical processing plants handling acids, solvents, and intermediates, water treatment facilities for potable water and wastewater, food and beverage production facilities for oils, juices, and dairy products, pharmaceutical manufacturing for bulk drug substances and intermediates, and power plants for fuel oil and demineralized water. Each application requires specialized design considerations regarding material compatibility with stored substances, temperature control systems for heated or refrigerated storage, pressure ratings for volatile liquids, and regulatory compliance with industry-specific standards such as API 650 for atmospheric storage tanks, API 620 for low-pressure tanks, and relevant Indian Standards (IS codes).

    Comprehensive safety features including emergency pressure relief systems, foam-based fire suppression systems, secondary containment dikes with sufficient capacity to hold 110% of tank volume, automated high-level alarms and interlocks, earthing and lightning protection systems, and vapor recovery units protect personnel, surrounding equipment, and the environment from potential hazards. Regular inspection programs mandated by regulatory authorities use advanced non-destructive testing techniques including acoustic emission testing to detect active defects, vacuum box testing for weld integrity, magnetic flux leakage detection for corrosion mapping, and ultrasonic thickness measurements to ensure ongoing structural integrity throughout the tank's operational life.

    Sustainable design practices are increasingly important in modern tank engineering, incorporating rainwater harvesting systems to reduce potable water consumption, waste heat recovery from product cooling, energy-efficient thermal insulation to minimize heating and cooling costs, and solar-powered instrumentation to reduce electrical consumption. Indian industries are adopting these green tank technologies not only to meet increasingly stringent environmental regulations and corporate sustainability commitments but also to reduce operational costs and improve their environmental footprint in line with national climate action goals.

    The future of industrial tank design promises exciting innovations including self-monitoring smart tanks with embedded structural health monitoring sensors, predictive maintenance capabilities using machine learning algorithms to forecast failures before they occur, modular expandable designs that grow with production capacity, advanced composite materials like carbon fiber-reinforced polymers for specialized corrosive applications, and fully automated cleaning systems using robotics. These breakthrough technologies will continue driving efficiency improvements, safety enhancements, and sustainability advances across India's rapidly growing industrial sectors.`,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    author: "Arjun Patel",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Tank Manufacturing",
    tags: ["Industrial Tanks", "Storage Solutions", "Design Engineering", "API Standards", "Corrosion Protection", "Safety Systems", "IoT Monitoring", "Petrochemical"]
  },
  {
    id: 4,
    title: "Structural Steel Innovation: Building Tomorrow's Infrastructure Across India",
    excerpt: "Advanced structural steel solutions that are reshaping modern industrial architecture and construction methodologies. Explore how cutting-edge technologies, sustainable practices, and innovative engineering are transforming India's infrastructure landscape.",
    content: `Structural steel innovation continues to push the boundaries of what's possible in modern construction, with India's unprecedented infrastructure boom driving explosive demand for advanced steel solutions across highways, bridges, metros, airports, industrial facilities, commercial complexes, and residential towers. Advanced high-strength steels with yield strengths exceeding 550 MPa now offer superior load-bearing capabilities while using 20-30% less material compared to conventional grades, resulting in lighter, more efficient, sustainable, and cost-effective structures that can span greater distances and reach greater heights while reducing foundation requirements and overall project costs.

    Building Information Modeling (BIM) has fundamentally revolutionized the design and construction process for structural steel projects of all scales. Engineers, architects, fabricators, and contractors can now create detailed 3D digital models that simulate real-world conditions including wind loads from monsoons and cyclones, seismic forces from potential earthquakes, thermal expansion from India's extreme temperature variations, live loads from occupancy and equipment, and construction sequences. This comprehensive digital approach allows for complete optimization before any physical construction begins, enabling clash detection between different building systems, quantity takeoffs for accurate cost estimation, construction sequencing simulation, and 4D scheduling. This technology has demonstrably reduced design errors by up to 60% and shortened project timelines significantly, saving millions of rupees in construction costs, preventing expensive rework, and avoiding project delays that can cripple budgets.

    Prefabrication techniques have reached unprecedented levels of sophistication, with entire structural sections including multi-story columns with base plates, long-span beams with welded connections, complex roof trusses, stair assemblies, and building facades manufactured in climate-controlled factory environments. This industrialized approach ensures consistent quality through standardized welding procedures qualified to AWS and IS standards, automated CNC cutting and drilling operations with micron-level precision, robotic welding cells for repetitive connections, and rigorous multi-stage quality inspections including dimensional verification and non-destructive testing. On-site construction time is dramatically reduced by 40-60%, labor requirements decrease substantially, and weather-related delays are minimized since most fabrication occurs indoors under controlled conditions, making project schedules more predictable and reliable.

    Seismic engineering advances have made steel structures significantly more resilient to earthquakes and other natural disasters, which is absolutely crucial for construction in seismically active zones across India including Delhi NCR, Gujarat, Himachal Pradesh, Uttarakhand, Kashmir, and Northeast states. Modern seismic designs incorporate sophisticated energy dissipation systems like buckling-restrained braces (BRBs) that yield in controlled ways, moment-resisting frames with ductile connections, base isolation systems using elastomeric bearings or friction pendulum bearings, and viscous dampers that absorb seismic energy. Performance-based seismic design methodologies ensure structures not only survive major seismic events as required by IS 1893 but remain functional afterward, protecting human lives, critical equipment, valuable inventory, and business continuity.

    High-strength bolted connections using HSFG (High Strength Friction Grip) bolts and advanced welding techniques including friction stir welding, laser hybrid welding, and submerged arc welding have dramatically improved structural integrity, fatigue resistance, and construction speed. These modern connection methods provide superior strength compared to traditional riveted connections, excellent ductility for seismic performance, and resistance to cyclic loading, ensuring long-term structural performance under varying load conditions including wind oscillations, live load variations, and thermal cycling. Quality control procedures including bolt torque verification using calibrated torque wrenches or direct tension indicators, and weld inspection using radiography, ultrasonic testing, and magnetic particle inspection ensure connection reliability.

    Fire protection for structural steel has evolved with advanced intumescent coatings that expand when exposed to heat to form insulating char layers, cementitious spray-applied fireproofing materials, fire-resistant board encasement systems, and water-filled hollow structural sections that absorb heat. These sophisticated protection systems are carefully engineered to maintain structural integrity and load-bearing capacity during fire events for specified durations of 60, 90, 120, or even 240 minutes depending on building occupancy classification and local regulations, ensuring adequate time for complete evacuation, firefighting operations, and preventing catastrophic structural collapse that could endanger first responders.

    Sustainable steel construction practices incorporating high percentages of recycled steel content (often 25-90%), energy-efficient fabrication processes using electric arc furnaces powered increasingly by renewable energy, design for deconstruction principles that allow future building adaptability, and life cycle assessment methodologies support India's ambitious environmental goals and commitments under the Paris Climate Agreement. Steel's inherent 100% recyclability means that structures can be dismantled at end-of-life and materials reused infinitely in new construction projects without quality degradation, creating a true circular economy for building materials and reducing the environmental footprint of the built environment.

    Corrosion protection through hot-dip galvanizing providing 30-50 year protection, metallized coatings for severe environments, weather-resistant Corten steel that forms protective patina, and high-performance paint systems extends structural lifespan in challenging environments including coastal regions with salt spray, industrial areas with chemical exposure, and humid tropical climates. Proper multi-layer corrosion protection systems can extend steel structure life expectancy from 20-30 years to 75-100 years with minimal maintenance, providing superior long-term value and reducing life cycle costs dramatically.

    Advanced fabrication technologies including CNC plasma and laser cutting tables, robotic welding cells with multiple torch configurations, automated shot blasting and painting lines, and integrated material handling systems have increased production capacity, improved dimensional accuracy, and ensured quality consistency. Indian steel fabrication facilities now compete globally in terms of technological capability, production efficiency, quality management systems certified to ISO 9001 and ISO 3834, and competitive pricing, supporting not only domestic mega-projects but also international exports to Middle East, Africa, and Southeast Asian markets.

    The future of structural steel in India includes exciting developments such as ultra-high-strength steels exceeding 700 MPa yield strength enabling even lighter structures, self-healing coatings incorporating microcapsules that automatically repair surface damage, integrated sensor networks for real-time structural health monitoring detecting stress, vibration, and corrosion, and advanced composite steel-concrete systems optimizing both materials. These transformative innovations will enable construction of even taller skyscrapers, longer cable-stayed and suspension bridges, more complex industrial facilities, and innovative architectural forms while ensuring safety, durability, sustainability, and economic viability for India's growing infrastructure needs.`,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Vikram Singh Rathore",
    date: "March 8, 2024",
    readTime: "11 min read",
    category: "Structural Steel",
    tags: ["Structural Engineering", "Infrastructure Development", "BIM Technology", "Seismic Design", "Prefabrication", "Sustainable Construction", "High-Strength Steel", "Fire Protection"]
  }
];
  

  const categories = ['All', 'Steel Manufacturing', 'Pipeline Works', 'Tank Manufacturing', 'Structural Steel', 'Manufacturing', 'Electrical'];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  const handleReadMore = (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
      // Scroll to top after a small delay to let the component render
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const getExpandedPost = () => {
    return blogPosts.find(post => post.id === expandedPost);
  };

  return (
    <>
      <Navbar/>
      <section className="blog-section" ref={sectionRef}>
        <div className="blog-container">
          
          {/* Expanded Post View - Shows at the top when a post is expanded */}
          {expandedPost && (
            <div className="expanded-post-container">
              <div className="expanded-post">
                {(() => {
                  const post = getExpandedPost();
                  if (!post) return null;
                  
                  return (
                    <>
                      <div className="expanded-header">
                        <button 
                          className="close-expanded-btn"
                          onClick={() => handleReadMore(expandedPost)}
                        >
                          <FaTimes /> Close Article
                        </button>
                        <div className="expanded-meta">
                          <span className="expanded-category">{post.category}</span>
                          <div className="meta-divider"></div>
                          <span className="expanded-date">
                            <FaCalendarAlt className="meta-icon" />
                            {post.date}
                          </span>
                          <div className="meta-divider"></div>
                          <span className="expanded-read-time">
                            <FaClock className="meta-icon" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <div className="expanded-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      
                      <div className="expanded-content">
                        <h1 className="expanded-title">{post.title}</h1>
                        
                        <div className="expanded-author-info">
                          <div className="author-avatar">
                            <FaUser />
                          </div>
                          <div className="author-details">
                            <span className="author-name">{post.author}</span>
                            <span className="author-title">Engineering Expert</span>
                          </div>
                        </div>
                        
                        <div className="expanded-tags">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="expanded-tag">{tag}</span>
                          ))}
                        </div>
                        
                        <div className="expanded-text">
                          {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph.trim()}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Regular Blog Content - Hidden when a post is expanded */}
          <div className={`regular-blog-content ${expandedPost ? 'hidden' : ''}`}>
            {/* Header Section */}
            <div className={`blog-header ${isVisible ? 'animate-in' : ''}`}>
          
              <h2 className="section-title">
                Manufacturing
                <span className="title-highlight"> Insights & Innovation</span>
              </h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                Stay ahead with the latest trends, technologies, and best practices in 
                industrial manufacturing, steel fabrication, and engineering excellence.
              </p>
            </div>

            {/* Category Filter */}
            <div className={`category-filter ${isVisible ? 'animate-in' : ''}`}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Content */}
            <div className={`blog-content ${isVisible ? 'animate-in' : ''}`}>
              {/* Featured Post */}
              {featuredPost && (
                <div className="featured-post">
                  <div className="featured-image">
                    <img src={featuredPost.image} alt={featuredPost.title} />
                    <div className="featured-overlay">
                      <div className="featured-badge">Featured Article</div>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="post-meta">
                      <span className="post-category">{featuredPost.category}</span>
                      <div className="meta-divider"></div>
                      <span className="post-date">
                        <FaCalendarAlt className="meta-icon" />
                        {featuredPost.date}
                      </span>
                      <div className="meta-divider"></div>
                      <span className="read-time">
                        <FaClock className="meta-icon" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h3 className="featured-title">{featuredPost.title}</h3>
                    <p className="featured-excerpt">{featuredPost.excerpt}</p>
                    <div className="post-tags">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="post-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          <FaUser />
                        </div>
                        <span className="author-name">{featuredPost.author}</span>
                      </div>
                      <button 
                        className="read-more-btn"
                        onClick={() => handleReadMore(featuredPost.id)}
                      >
                        <span>Read Full Article</span>
                        <FaChevronDown className="arrow-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="posts-grid">
                {regularPosts.map((post, index) => (
                  <article key={post.id} className={`blog-card card-${index + 1}`}>
                    <div className="card-image">
                      <img src={post.image} alt={post.title} />
                      <div className="image-overlay">
                        <span className="card-category">{post.category}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-meta">
                        <span className="card-date">
                          <FaCalendarAlt className="meta-icon" />
                          {post.date}
                        </span>
                        <span className="card-read-time">
                          <FaClock className="meta-icon" />
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="card-title">{post.title}</h4>
                      <p className="card-excerpt">{post.excerpt}</p>
                      <div className="card-tags">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="card-tag">{tag}</span>
                        ))}
                      </div>
                      <div className="card-footer">
                        <div className="card-author">
                          <div className="author-avatar-small">
                            <FaUser />
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <button 
                          className="card-read-btn"
                          onClick={() => handleReadMore(post.id)}
                        >
                          <span>Read More</span>
                          <FaChevronDown className="card-arrow" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BlogSection;