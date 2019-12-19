import React from 'react'

export default function Navbar() {
    return (
    <nav className="nav"> 
      <ul className="links">        
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Sponsor Us</a></li>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>Contact Us</a></li>
        
      </ul>
      <div id="nav-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    )
}
