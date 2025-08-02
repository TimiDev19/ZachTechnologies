import React from 'react'
import Hero from './sections/Hero'
import MeetCEO from './sections/MeetCEO'
import Mission from './sections/Mission'
import Vision from './sections/Vision'
import CoreValue from './sections/CoreValue'
import Team from './sections/Team'
import Expertise from './sections/Expertise'
import Client from './sections/Client'
import Partners from './sections/Partners'
import Contact from './sections/Contact'

const Homepage = () => {
  return (
    <div className=" w-[100vw] h-[auto] overflow-y-scroll scroll-smooth">
      <Hero />
      {/* <MeetCEO /> */}
      <Mission />
      <Vision />
      <CoreValue />
      <Expertise />
      <Team />
      <Client />
      <Partners /> 
       <Contact />
    </div>
  )
}

export default Homepage