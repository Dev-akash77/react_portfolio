import React from 'react'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Skills from './Layout/Skills'
import Technology from './Layout/Technology'
import Services from './Pages/Services'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer';
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
      <Contact />
      <Footer />
    </div>
  )
}

export default App 