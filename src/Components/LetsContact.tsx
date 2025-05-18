import React from 'react'
import vedioBGG from '../assets/vedioBGG.mp4';
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './MagicButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import grid from '../assets/grid.svg'
const LetsContact = () => {


  function instaHandler(){

  }
  function linkHandler(){
       
  }

  
  return (
    <section className='w-full h-screen relative bg-primary' >
     
      <section className='absolute top-0 left-0 w-full h-[70%] flex justify-center items-center flex-col'>
        <div className='w-full h-screen'>
          <img src={grid} alt='no' className='w-full h-[70%]  brightness-200  ' />
        </div>


        <div className="absolute flex justify-center items-center flex-col  ">
          <h1 className=" text-white font-poppins text-[2em] sm:text-[2.3em] font-medium  mt-3 xs:p-6 text-center">
            Ready to take <span className="text-happy">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white md:mt-10 my-6 text-center xs:p-5">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:kamleshguru2611@gmail.com" className="cursor-pointer">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>





      </section>
      <section className='absolute top-[70%] w-full h-[30%]'>

        <div className='big text-center'>
          FIND ME <span className='text-happy font-poppins ml-4'>  ON</span>
        </div>
        <p className='text-white text-[0.7em] sm:text-[0.9em] text-center mt-4 mb-5'>© 2025 Kamlesh-All Rights Reserved.</p>
        <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>  
        <a href='https://github.com/KAMLESH7939'><FaGithub className='h-10 w-10 text-white abc hello' /></a>
        <a href='https://www.linkedin.com/in/kamlesh-b08306259/'><FaLinkedin className='h-10 w-10 text-white abc hello' onClick={linkHandler} /></a>
        <FaInstagram className='h-10 w-[4rem] text-white abc  hello' onClick={instaHandler} />
        </div>

      </section>
    </section>
  )
}

export default LetsContact
