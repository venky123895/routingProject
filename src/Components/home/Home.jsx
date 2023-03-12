import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
       <div className="main">
            <div className="leftContainer">
                    <h1 className='text'>Leading MEP & Facility<br/>management company in <br/> Dubai</h1>
                    <p className='disc'>Urban Science is always ready to accept your challenges <br/>
Meeting your goals is our main objective. Professional<br/> services for facility management & MEP works.</p>
            <button className='but' style={{marginTop:"25px"}}>Company Profile</button>
            </div>
             <div className="rightContainer">
                <img className='homeimage' src='https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png' alt='homeimage'/>
            </div>
       </div>
    </div>
  )
}

export default Home