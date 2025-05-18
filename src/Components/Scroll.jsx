import React from 'react'
import img1 from '../assets/icons/img1-1.png'

const Scroll = () => {
  return (

      <div className='w-full h-screen '>
      <div className='Header'>
         <div className='letters text-red-300'>
            <div>A</div>
            <div>R</div>
            <div>T</div>
            <div>W</div>
         </div>
         <div className='letters text-red-300' >
            <div>O</div>
            <div>R</div>
            <div>K</div>
            <div>S</div>
         </div>
      </div>

      <div className='website-content'>
      <div className='img-holder'>
      <img src={img1} alt='no' className=''/>
      </div>
      </div>
      </div>

  )
}

export default Scroll
