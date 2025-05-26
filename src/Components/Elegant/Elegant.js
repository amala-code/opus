import React, { useState, useEffect, useRef } from "react";
import "./Elegant.css";

const ElegantBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="elegant-banner" ref={bannerRef}>
      <div className={`elegant-banner__container ${isVisible ? 'animate-in' : ''}`}>
        <div className="elegant-banner__content">
          <div className="elegant-banner__words">
            <span className="elegant-word elegant-word--1">
              <span className="word-text">Precision</span>
              <span className="word-dot">.</span>
            </span>
            <span className="elegant-word elegant-word--2">
              <span className="word-text">Strength</span>
              <span className="word-dot">.</span>
            </span>
            <span className="elegant-word elegant-word--3">
              <span className="word-text">Innovation</span>
              <span className="word-dot">.</span>
            </span>
          </div>
          
          <div className="elegant-banner__line"></div>
          
          <div className="elegant-banner__subtitle">
            Excellence in every detail, power in every solution, progress in every innovation.
          </div>
        </div>
        
        <div className="elegant-banner__decorative">
          <div className="decorative-line decorative-line--1"></div>
          <div className="decorative-line decorative-line--2"></div>
          <div className="decorative-line decorative-line--3"></div>
        </div>
      </div>
    </div>
  );
};

export default ElegantBanner;