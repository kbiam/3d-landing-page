import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React from 'react'
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import * as THREE from "three"

function Canvas3d({progress}) {
  return (
    <div className='fixed z-50 top-0 left-1/2 -translate-x-1/2 h-full w-[30%] pointer-events-none' style={{pointerEvents:"none"}}>
        <Canvas style={{pointerEvents:"none"}} className='pointer-events-none' gl={{antialias:true, shadowMap:true, toneMapping:THREE.ACESFilmicToneMapping, alpha:true}} >
            <PerspectiveCamera  makeDefault position={[0,0,2.5]}/>
      {/* Ambient Light */}
      <ambientLight color="#ffffff" intensity={0.75} />
      
      {/* Main Directional Light */}
      <directionalLight 
        color="#ffffff"
        intensity={3}
        position={[0.5, 7.5, 2.5]}
      />
      
      {/* Fill Directional Light */}
      <directionalLight 
        color="#ffffff"
        intensity={2}
        position={[-15, 0, -5]}
      />
      
      {/* Hemisphere Light */}
      <hemisphereLight
        color="#ffffff"
        groundColor="#ffffff"
        intensity={1.5}
        position={[0, 0, 0]}
      />
            <spotLight position={[-15,0,15]}/>
            <Model progress ={progress}/>
        </Canvas>
    </div>
  )
}

export default Canvas3d