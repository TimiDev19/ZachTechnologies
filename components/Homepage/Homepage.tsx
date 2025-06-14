import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Partnerships from './sections/Partnerships'
import Projects from './sections/Projects'
import Services from './sections/Services'

const Homepage = () => {
  return (
    <div className=" w-[100vw] h-[100vh] overflow-y-scroll scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partnerships />
    </div>
  )
}

export default Homepage