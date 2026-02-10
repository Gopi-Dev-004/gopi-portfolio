

import { useState } from 'react'  
import './global.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Education from './component/Education'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App
