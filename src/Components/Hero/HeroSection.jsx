import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'
// import img1 from '/Images/11.jpg'
// import img2 from '/Images/12.jpg'
// import img3 from '/Images/14.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const slides = [
    {
      image: '/Images/111.png',
      title: 'Designing and delivering robust Pipelines, Chimneys, and Structural Solutions for diverse sectors',
      subtitle: 'Pioneering Industrial Solutions in Manufacturing and Infrastructure',
      buttonText: 'Explore Our Services',
      route: '/services'
    },
    {
      image: '/Images/112.png', 
      title: 'Precision Engineering Excellence in Every Project',
      subtitle: 'Leading the Way in Advanced Manufacturing Technologies',
      buttonText: 'Know more about us',
      route: '/about'
    },
    {
      image: '/Images/113.png', 
      title: 'Trusted partners in Infrastructure with Sustainable PB Structures and Advanced Fabrication',
      subtitle: 'Sustainable Solutions for Modern Industrial Challenges',
      buttonText: 'Contact Us',
      route: '/contact'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleButtonClick = (route) => {
    navigate(route)
  }

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button 
              className="hero-button"
              onClick={() => handleButtonClick(slide.route)}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel-progress">
        <div 
          className="carousel-progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default HeroSection