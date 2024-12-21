import React from 'react'
import Collections from './Collections'

function Collection() {
  return (
    <div className='w-full flex flex-col p-6 py-36 text-center gap-12 tracking-tighter relative z-[2]'>
        <h1 className='italic '>Collection</h1>
        <Collections title={"Ripple Bench"} style={"Outdoor"} item={"Bench"}/>
        <Collections title={"Arc Table"} style={"Modern"} item={"Table"}/>
        <Collections title={"Orb Vase"} style={"Contemporary"} item={"Decor"}/>
        <Collections title={"Grid Shelving"} style={"Industrial"} item={"Shelving"}/>
        <Collections title={"Halo Pendant"} style={"Modern"} item={"Lightning"}/>
        <Collections title={"FLow Chair"} style={"Minimalist"} item={"Arm Chair"}/>
    </div>
  )
}

export default Collection