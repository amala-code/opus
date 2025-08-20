import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const navigate=useNavigate()
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionary Steel Manufacturing: The Future of Industrial Construction",
      excerpt: "Discover how advanced steel manufacturing techniques are transforming modern industrial construction with unprecedented precision and efficiency. From high-strength alloys to automated fabrication processes.",
      content: "In today's rapidly evolving industrial landscape, steel manufacturing has undergone a remarkable transformation...",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Dr. Sarah Mitchell",
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

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        {/* Header Section */}
        <div className={`blog-header ${isVisible ? 'animate-in' : ''}`}>
         
          <h2 className="section-title">
            Manufacturing
            <span className="title-highlight"> Insights & Innovation</span>
          </h2>
          <div className="title-underline"></div>
          {/* <p className="section-subtitle">
            Stay ahead with the latest trends, technologies, and best practices in 
            industrial manufacturing, steel fabrication, and engineering excellence.
          </p> */}
        </div>

        {/* Category Filter */}
        {/* <div className={`category-filter ${isVisible ? 'animate-in' : ''}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Blog Content */}
        <div className={`blog-content ${isVisible ? 'animate-in' : ''}`}>
          {/* {featuredPost && (
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
                  <button className="read-more-btn">
                    <span>Read Full Article</span>
                    <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          )} */}

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
                    <button className="card-read-btn"
                    onClick={()=>navigate('/blogs')}
                    >

                      <span>Read More</span>
                      <FaArrowRight className="card-arrow" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className={`blog-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-content">
            <h3>Want to Stay Updated?</h3>
            <p>Subscribe to our newsletter for the latest manufacturing insights and industry trends.</p>
            <div className="cta-actions">
              <button className="newsletter-btn">
                <span>Subscribe to Newsletter</span>
                <div className="btn-shimmer"></div>
              </button>
              <button className="view-all-btn">
                <span>View All Articles</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );

};

export default BlogSection;