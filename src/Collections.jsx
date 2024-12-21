import React from 'react'

function Collections({title, style, item}) {
  return (
    <div className='w-full flex flex-col gap-12 opacity-40 relative z-1 hover:opacity-100 ease-in-out transition-all '>
        <h1 className='text-9xl'>{title}</h1>
        <div className='flex gap-12 uppercase  justify-center'>
            <p>US/EU</p>
            <p>DESIGN CONCEPT</p>
            <p>{item}</p>
            <p>{style}</p>
        </div>
    </div>
  )
}

export default Collections