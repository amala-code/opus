

import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag, FaChevronDown, FaChevronUp } from 'react-icons/fa';
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
      title: "Revolutionary Steel Manufacturing: The Future of Industrial Construction",
      excerpt: "Discover how advanced steel manufacturing techniques are transforming modern industrial construction with unprecedented precision and efficiency. From high-strength alloys to automated fabrication processes.",
      content: `In today's rapidly evolving industrial landscape, steel manufacturing has undergone a remarkable transformation. Advanced technologies like automated welding systems, precision cutting equipment, and intelligent quality control mechanisms have revolutionized how we approach large-scale construction projects.

      The integration of artificial intelligence and machine learning in steel fabrication has enabled manufacturers to achieve unprecedented levels of precision and efficiency. Modern facilities now utilize robotic systems that can perform complex welding operations with millimeter accuracy, significantly reducing human error and improving overall product quality.

      High-strength alloys and specialized coatings have expanded the applications of steel in harsh industrial environments. These innovations allow structures to withstand extreme temperatures, corrosive chemicals, and heavy mechanical loads while maintaining structural integrity over decades of operation.

      The environmental impact of steel manufacturing has also been significantly reduced through the implementation of energy-efficient processes and recycling programs. Modern steel plants can now recycle up to 95% of their waste materials, making steel one of the most sustainable construction materials available today.`,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Dr. Sarahcc Mitchell",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Steel Manufacturing",
      tags: ["Innovation", "Technology", "Steel"],
      featured: true
    },
    {
      id: 2,
      title: "Pipeline Engineering Excellence: Modern Installation Techniques",
      excerpt: "Exploring cutting-edge pipeline installation methods that ensure maximum safety and efficiency in industrial applications.",
      content: `Pipeline engineering has evolved significantly with the introduction of advanced installation techniques and materials. Modern pipeline systems incorporate sophisticated monitoring technologies, leak detection systems, and automated control mechanisms that ensure optimal performance and safety.

      The use of high-density polyethylene (HDPE) and other advanced materials has revolutionized pipeline durability and corrosion resistance. These materials can withstand extreme environmental conditions while maintaining structural integrity for decades.

      Installation techniques now utilize precision GPS mapping, laser-guided boring equipment, and robotic welding systems to ensure accurate placement and secure connections. These technologies have reduced installation time by up to 40% while improving overall system reliability.

      Safety protocols have been enhanced through the implementation of real-time monitoring systems that can detect potential issues before they become critical problems. Advanced pressure sensors, temperature monitors, and flow meters provide continuous data streams that enable proactive maintenance and prevent costly failures.`,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Pipeline Works",
      tags: ["Pipeline", "Engineering", "Safety"]
    },
    {
      id: 3,
      title: "Industrial Tank Design: Precision Engineering for Maximum Efficiency",
      excerpt: "How modern tank manufacturing combines structural integrity with operational excellence for diverse industrial needs.",
      content: `Industrial tank design has reached new heights of sophistication with the integration of advanced engineering principles and cutting-edge materials. Modern tanks are designed using computational fluid dynamics (CFD) analysis to optimize flow patterns and minimize energy consumption.

      The implementation of smart sensors and IoT connectivity has transformed tank monitoring and management. These systems provide real-time data on liquid levels, temperature, pressure, and chemical composition, enabling operators to maintain optimal conditions and prevent contamination.

      Advanced corrosion protection systems, including cathodic protection and specialized coatings, have significantly extended tank lifespan. These technologies protect against chemical corrosion, environmental damage, and mechanical wear, ensuring decades of reliable operation.

      Modular construction techniques have made tank installation more efficient and cost-effective. Pre-fabricated sections can be assembled on-site, reducing construction time and minimizing disruption to ongoing operations. This approach also allows for easier maintenance and future modifications.`,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      author: "Emily Chen",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Tank Manufacturing",
      tags: ["Tanks", "Design", "Engineering"]
    },
    {
      id: 4,
      title: "Structural Steel Innovation: Building Tomorrow's Infrastructure",
      excerpt: "Advanced structural steel solutions that are reshaping modern industrial architecture and construction methodologies.",
      content: `Structural steel innovation continues to push the boundaries of what's possible in modern construction. Advanced high-strength steels now offer superior load-bearing capabilities while using less material, resulting in more efficient and sustainable structures.

      Building Information Modeling (BIM) has revolutionized the design and construction process. Engineers can now create detailed 3D models that simulate real-world conditions, allowing for optimization before construction begins. This technology has reduced design errors by up to 60% and shortened project timelines significantly.

      Prefabrication techniques have reached new levels of sophistication, with entire structural sections manufactured in controlled factory environments. This approach ensures consistent quality, reduces on-site construction time, and minimizes weather-related delays.

      Seismic engineering advances have made steel structures more resilient to earthquakes and other natural disasters. Modern designs incorporate energy dissipation systems and flexible connections that allow buildings to withstand extreme forces while protecting occupants and equipment.`,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "James Wilson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Structural Steel",
      tags: ["Structure", "Innovation", "Construction"]
    },
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
      // Scroll to top of the page smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setExpandedPost(postId);
      // Scroll to top of the page smoothly
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const getExpandedPost = () => {
    return [...filteredPosts].find(post => post.id === expandedPost);
  };

  return (
    <>
    <Navbar/>
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        {/* Expanded Post View */}
        {expandedPost && (
          <div className="expanded-post-container">
            <div className="expanded-post">
              {(() => {
                const post = getExpandedPost();
                return (
                  <>
                    <div className="expanded-header">
                      <button 
                        className="close-expanded-btn"
                        onClick={() => handleReadMore(expandedPost)}
                      >
                        <FaChevronUp /> Close Article
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

        {/* Regular Blog Content */}
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