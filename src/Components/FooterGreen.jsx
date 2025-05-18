import React from 'react'
import { NavLink } from 'react-router-dom'
const FooterGreen = () => {
  return (

    <div className='relative w-full bg-[#2db71e] min-h-[100px] px-10 py-5 md:mt-[9rem] sm:mt-4 flex justify-center itens-center flex-col' >
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
       <ul className='relative flex justify-center mx-10 my-0'>
                <NavLink to={'/about'} className='bob' >
                    About
                </NavLink>
                <NavLink to={'/projects'} className='bob'>  
                    Projects
                </NavLink>
                <NavLink to={'/skills'} className= 'bob'>
                    Skills
                </NavLink>
                <NavLink to={'/contact'} className='bob' >
                    Contact Me
                </NavLink>
       </ul>
       <p className='relative flex justify-center mx-10 text-sm mt-2 text-white'>© 2024 Kamlesh-All Rights Reserved.</p>
    </div>
  )
}

export default FooterGreen

