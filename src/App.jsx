

import { useState } from 'react'  
import './global.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
