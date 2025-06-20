import React from 'react'
import Appbar from '../shared/Appbar'
import Footer from '../shared/Footer'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <div className='bg-gray-900'>
        <Appbar/>
        <Projects/>
        
        <Footer/>
      
    </div>
  )
}

export default ProjectsPage
