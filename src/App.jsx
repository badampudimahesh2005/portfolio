import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
     <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />

      <Footer/>

    </div>
  )
}

export default App