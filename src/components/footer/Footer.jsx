import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <footer className='footer section'>
<div className="footer-content">
      <div className="footer-logo">
        <img src={assets.logo1} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos nihil beatae facilis error? Ducimus dolor deleniti a nihil! Deserunt quibusdam temporibus laborum ullam facilis adipisci dolores, mollitia praesentium cum?</p>
      </div>
      <div className="footer-links">
        <p>Company</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Collection</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-contact">
        
      <p>Get In Touch</p>
        <ul>
          <li>+91 9214632096</li>
          <li>gauravnagpal24854@gmail.Com</li>
          
        </ul>
      </div>
      </div>
      

    </footer>
    </>
  )
}

export default Footer