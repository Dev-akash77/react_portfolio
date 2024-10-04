import React from 'react'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Skills from './Layout/Skills'
import Technology from './Layout/Technology'
import Services from './Pages/Services'
import Testimonial from './Pages/Testimonial'
const App = () => {
  return (
    <div className='bg-white'>
      <Nav />
      <Home />
      <Project />
      <Skills />
      <Technology />
      <Services />
      <Testimonial />
    </div>
  )
}

export default App 