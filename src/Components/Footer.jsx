import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (

    <div className='relative w-full bg-[#3586ff] min-h-[100px] px-10 py-5 md:mt-[9rem] sm:mt-4 flex justify-center itens-center flex-col' >
    <div className='big'>
         FIND ME ON          
    </div>
    <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
    </div>
       <ul className='relative flex justify-center mx-10 '>
           <li ><a href='#' className='socialLink'><ion-icon name="logo-linkedin"></ion-icon></a></li>
           <li ><a href='#' className='socialLink'><ion-icon name="location-outline"></ion-icon></a></li>
           <li><a href='#' className='socialLink'><ion-icon name="mail-outline"></ion-icon></a></li>
           <li><a href='#' className='socialLink'><ion-icon name="logo-github"></ion-icon></a></li>
       </ul>

       <p className='relative flex justify-center mx-10 text-sm mt-2 text-white'>© 2025 Kamlesh-All Rights Reserved.</p>
    </div>
  )
}

export default Footer

