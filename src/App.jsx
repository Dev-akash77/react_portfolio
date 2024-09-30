import React from 'react'
import Nav from './Pages/Nav'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Skills from './Layout/Skills'
import Technology from './Layout/Technology'
const App = () => {
  return (
    <div className='bg-white'>
      <Nav />
      <Home />
      <Project />
      <Skills />
      <Technology />
    </div>
  )
}

export default App 