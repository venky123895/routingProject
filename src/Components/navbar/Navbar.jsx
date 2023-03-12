import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <img src='https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png' alt='logo' className='logo'/>
        <ul className='sec'>
          <Link to="home">
          <li>Home</li>
          </Link>
          <Link to="about">
          <li>About</li>
          </Link>
          <Link to="project">
          <li>Project</li>
          </Link>
          <Link to="services">
          <li>Services</li>
          </Link>
          <Link to="contact">
          <li>Contact</li>
          </Link>
            
            
          
           
            
        </ul>
        <button className='but'>Enquire Now</button>
    </div>
  )
}

export default Navbar