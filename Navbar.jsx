import React, { useState } from 'react'
import Logo from "../img/logo.png"
import "./Navbar.css"
import TitleDesign from "../img/TitleDesign.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="Navbar-title">
      <div className='content-logo'>
        <img className="PIH-logo" src={Logo} alt="PIH Logo"/>
        <h1 className='PIH-title'>Philippine <span className='PIH-title1'>
          Innovation Hub<ion-icon name="rocket-sharp"></ion-icon></span></h1>
        <img className='Title-Design' src={TitleDesign} alt="Title Design"/>
      </div>
      
      {/* Mobile menu button */}
      <div className='mobile-menu-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
      </div>

      <div className={`navbar-content ${isMenuOpen ? 'show' : ''}`}>
        <li className='navbar-link'>HOME</li>
        <li className='navbar-link'>VISION</li>
        <li className='navbar-link'>ABOUT</li>
        <li className='navbar-link'>EVENTS</li>
        <li className='navbar-link'>TEAM</li>
        <li className='navbar-link'>CONTACT US</li>
      </div>
    </div>
  )
}

export default Navbar