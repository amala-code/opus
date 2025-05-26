// import React, { useState, useEffect } from 'react'
// import './HeroSection.css'
// import img1 from '../../Images/st.jpg'
// import img2 from '../../Images/al.jpg'

// import img3 from '../../Images/all.jpg'


// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       image: img1,
//       title: 'Forged with Pride, Built on Trust — Three Decades of Dedication',
//       subtitle: 'Pioneering Industrial Solutions in Manufacturing and Infrastructure',
//       buttonText: 'Explore Our Services'
//     },
//     {
//       image: img2, 
//       title: 'Innovation Meets Excellence in Every Project',
//       subtitle: 'Leading the Way in Advanced Manufacturing Technologies',
//       buttonText: 'Know more about us'
//     },
//     {
//       image: img3, 
//       title: 'Building Tomorrow\'s Infrastructure Today',
//       subtitle: 'Sustainable Solutions for Modern Industrial Challenges',
//       buttonText: 'Contact Us'
//     }
//   ]

//   // Auto-advance carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000) // Change slide every 5 seconds

//     return () => clearInterval(interval)
//   }, [slides.length])

//   const goToSlide = (index) => {
//     setCurrentSlide(index)
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   return (
//     <div className="hero-carousel">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
//           style={{
//             backgroundImage: `url(${slide.image})`
//           }}
//         >
//           <div className="hero-overlay"></div>
//           <div className="hero-content">
//             <h1 className="hero-title">{slide.title}</h1>
//             <p className="hero-subtitle">{slide.subtitle}</p>
//             <button className="hero-button">{slide.buttonText}</button>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//       <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>

//       {/* Dot Indicators */}
//       <div className="carousel-dots">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="carousel-progress">
//         <div 
//           className="carousel-progress-bar"
//           style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
//         />
//       </div>
//     </div>
//   )
// }

// export default HeroSection

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSection.css'
import img1 from '../../Images/st.jpg'
import img2 from '../../Images/al.jpg'
import img3 from '../../Images/all.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const slides = [
    {
      image: img1,
      title: 'Forged with Pride, Built on Trust — Three Decades of Dedication',
      subtitle: 'Pioneering Industrial Solutions in Manufacturing and Infrastructure',
      buttonText: 'Explore Our Services',
      route: '/services'
    },
    {
      image: img2, 
      title: 'Innovation Meets Excellence in Every Project',
      subtitle: 'Leading the Way in Advanced Manufacturing Technologies',
      buttonText: 'Know more about us',
      route: '/about'
    },
    {
      image: img3, 
      title: 'Building Tomorrow\'s Infrastructure Today',
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