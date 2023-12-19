import React from 'react'
import "../navbar/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="header">

    <div class="left">
        <img src="/images/logo.png" alt="logo"/>
    </div>
    <div class="mid">
        <ul class="navbar">
            <li><Link to="/productview">HOME</Link></li>
            <li><Link to="/aboutus">ABOUT US</Link></li>
            <li><Link to="/faq">FAQs/</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
        <div class="dropdown">
            <button class="dropbtn">Main Menu</button>
            <div class="dropdown-content">
              <a href="productview.html">HOME</a>
              <a href="aboutus.html">ABOUT US</a>
              <a href="faq.html">FAQs</a>
               <a href="contact.html">CONTACT US</a>
            </div>
          </div>
    </div>
    <div class="right">
        <button class="btn"><a href="login.html">Register/Login</a></button>
    </div>
</header>
  )
}

export default Navbar
