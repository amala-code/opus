import React from 'react'
import './ContactUs.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const ContactUs = () => {
  return (
    <>
        <Navbar/>
        <div className="contactus-container">
      <div className="contactus-left"
      style={{ background: "url('/Images/wh3.png') center/cover no-repeat" , position: 'relative',
      overflow: 'hidden', }}
      
      >
         <div className="contactus-overlay" />
         <div className="contactus-content">
        <h2>Get In Touch</h2>
        <p>
        Have a project in mind? From machinery to steel works, tanks, pipelines, and more—we’re here to build your vision with precision.



        </p>
        </div>
      </div>
      <div className="contactus-right">
        <h2>Send Us a Message</h2>
        <form>
          <div className="contactus-input-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="contactus-input-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs
