import React from 'react'
import './services.css'
import { Link, Outlet } from 'react-router-dom'
const Services = () => {
  return (
    <div className='sericeslist'>
        <ul className='service'>
            <Link to="buildingservice">
            <li>Building Service</li>
            </Link>
            <Link to="firesystem">
            <li>Fire System</li>
            </Link>

        </ul>
        <Outlet/>
    </div>
  )
}

export default Services