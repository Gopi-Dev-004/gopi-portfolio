

import { useState } from 'react'  
import './global.css'
import Navbar from './component/Navbar'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
