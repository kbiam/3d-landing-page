import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Collection from './Collection'
import Lenis from 'lenis'
import Canvas3d from './Canvas3d'
import End from './End'
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf:true
    })
    lenis.on("scroll",(e)=>{
      console.log(e.scroll)
    })
  }, [])
  
  const [count, setCount] = useState(0)

  return (
    <>
    <Canvas3d/>
    <Navbar/>
    <Hero/>
    <Collection/>
    <End/>
    </>
  )
}

export default App
