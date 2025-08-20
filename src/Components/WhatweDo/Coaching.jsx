import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Coaching.css";
import Coaching_card from "./Coaching_card";
import { coachingData } from "./Coachingdata";

const Coaching = () => {
  const [data, setData] = useState(coachingData);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, totalItems, itemWidth, slidesToShow } } = rest;
    const isLastSlide = currentSlide >= totalItems - slidesToShow;
    
    return (
      <div className="custom-button-group">
        <button 
          className={`custom-nav-btn prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={previous}
          disabled={currentSlide === 0}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        <button 
          className={`custom-nav-btn next-btn ${isLastSlide ? 'disabled' : ''}`}
          onClick={next}
          disabled={isLastSlide}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="coaching_mainContainer" ref={sectionRef}>      
      <div className={`coaching_flexContainer ${isVisible ? 'animate-in' : ''}`}>
        <div className="coaching_flexDiv1">
          <div className="coaching_textContainer">
            <div className="coaching_badge">
              <span>Manufacturing Excellence</span>
            </div>
            
            {/* <div className="coaching_headtext">
              <span className="main-title">Our Manufacturing Services</span>
              <div className="title-underline"></div>
            </div> */}
            
            <div className="coaching_subtext">
              <p class="intro-text">
                We provide comprehensive manufacturing solutions with state-of-the-art technology 
                and decades of industry expertise.
              </p>
              
              <div className="service-list">
                {[
                  {
                    title: "Fast & Cost-Effective Construction",
                    desc: "Pre-Engineered Buildings (PEB) reduce construction time by 50% and cut costs with optimized material usage."
                  },
                  {
                    title: "Scalable & Efficient Infrastructure:", 
                    desc: "Customizable PEB structures allow seamless expansion, maximizing space utilization and reducing maintenance."
                  },
                  {
                    title: "Sustainable & Eco-Friendly Solutions", 
                    desc: "Energy-efficient materials and minimal waste production support green building initiatives and reduce carbon footprints."
                  },
            
                
                ].map((service, index) => (
                  <div key={index} className={`service-item delay-${index}`}>
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="coaching_flexDiv2">
          <div className="carousel-container">
            <div className="carousel-header">
              <h3>Our Capabilities</h3>
              <p>Explore our comprehensive manufacturing and engineering solutions</p>
            </div>
            
            <Carousel
              responsive={responsive}
              infinite={false}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="transform 400ms ease-in-out"
              transitionDuration={400}
              containerClass="carousel-container-inner"
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<CustomButtonGroup />}
              showDots={true}
              itemClass="carousel-item-padding"
              dotListClass="custom-dot-list"
            >
              {coachingData.map((item, index) => (
                <div key={item.id} className="card-wrapper">
                  <Coaching_card
                    background={item.background}
                    tittle={item.tittle}
                    data={item.data}
                    index={index}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;