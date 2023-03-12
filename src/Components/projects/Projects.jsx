import React from 'react'
import imagep from '../imageFolder/projectImage.PNG'
import './project.css'
const Projects = () => {
  return (
    <div className='project'>
        <h1 className='projecttitle'>Projects</h1>
        <a href='https://venky123895.github.io/ourproject/'><img src={imagep} alt='project' className='size'/></a>
    </div>
  )
}

export default Projects