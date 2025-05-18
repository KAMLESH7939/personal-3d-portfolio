// import React from 'react'

// const Skills = () => {
//   return (

//   )
// }

// export default Skills


import React from 'react'
import yoo from '../assets/yoo.mp4'
import vedioBGG from '../assets/vedioBGG.mp4'
import { BallCanvas } from "../Components/canvas/Ball.jsx"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/indexed'
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from '../Components/MagicButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import free_icon_1 from "../assets/icons/free_icon_1.svg"
import free_icon_2 from "../assets/icons/free_icon_2.svg"
import free_icon_3 from "../assets/icons/free_icon_3.svg"
import free_icon_4 from "../assets/icons/free_icon_4.svg"
import free_icon_5 from "../assets/icons/free_icon_5.png"
import gsap from 'gsap'
import { useRef } from 'react'
import sakura from '../assets/sakura.mp3'
import Kills from '../Components/Kills.jsx'
import CanvasCursor from '../Components/CanvasCursor .jsx'
import SpotlightCursor from '../Components/SpotlightCursor.jsx'
import { useGSAP } from '@gsap/react'


const Skills = () => {




  if (window.innerWidth < 500) {
    return (
      <div className='relative pb-2 pt-2 mx-auto space-y-10 space-x-5  h-screen bg-primary'>
        <div className=' flex flex-col justify-center items-center'>
          <div className='mt-[6rem]'>
            <div className='text-center select-none'>
              <h1 className='text-white  text-[1.3em] font-medium cursor'>Professional <span className='text-happy font-bold text-[1.5rem] fredericka-the-great-regular'>SkillSet</span></h1>
            </div>
            <Kills />
          </div>
          <div >
            <div className='flex justify-center items-center select-none'>
              <h1 className='text-white text-[1.5em] font-medium mt-7 mb-3'>Tools <span className='text-happy font-bold text-[1.5rem] fredericka-the-great-regular'>I use</span></h1>
            </div>


            <div className='flex flex-row flex-wrap justify-center gap-5'>
              <div className=''>
                <img src={free_icon_2} alt='no' className='text-white w-[55px] h-[55px]' />
              </div>
              <div className=''>
                <img src={free_icon_3} alt='no' className='text-white w-[3rem] h-[3rem]' />
              </div>
              <div className=''>
                <img src={free_icon_1} alt='no' className='text-white w-[55px] h-[55px]' />
              </div>
              <div className=''>
                <img src={free_icon_4} alt='no' className='text-white w-[55px] h-[55px]' />
              </div>
            </div>

          </div>
          {/* contact */}


          {/* <div className='absolute bottom-0  flex justify-center flex-col items-center mt-6 '>

                <div className='font-medium text-white text-[2rem]'>
                  <p >FIND ME <span className='text-happy'>ON</span></p>
                </div>
                <p className='text-white text-center mt-2 text-[0.8em] '>© 2024 Kamlesh-All Rights Reserved.</p>
                <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
                  <FaGithub className='h-7 w-7 text-white abc cursor-pointer' />
                  <FaLinkedin className='h-7 w-7 text-white abc cursor-pointer' />
                  <FaInstagram className='h-7 w-7 text-white abc cursor-pointer' />
                </div>
              </div> */}




        </div>

        <div className='absolute bottom-0 left-0 right-0  flex justify-center flex-col items-center mt-6 mb-2 '>

          <div className='font-medium text-white text-[2rem]'>
            <p >FIND ME <span className='text-happy'>ON</span></p>
          </div>
          <p className='text-white text-center mt-2 text-[0.8em] '>© 2024 Kamlesh-All Rights Reserved.</p>
          <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
            <FaGithub className='h-7 w-7 text-white abc cursor-pointer' />
            <FaLinkedin className='h-7 w-7 text-white abc cursor-pointer' />
            <FaInstagram className='h-7 w-7 text-white abc cursor-pointer' />
          </div>
        </div>


      </div>
    )
  }

  // <div className='flex justify-center items-center select-none'>
  //           <h1 className='text-white text-[2em] font-medium mt-3 mb-3'>Tools <span className='text-[#915eff] font-bold text-[3rem] fredericka-the-great-regular'>I use</span></h1>
  //         </div>

  //         <div className='flex flex-row flex-wrap justify-center gap-2 w-[90%] sm:gap:7'>
  //           <div className='rekha '>
  //             <img src={free_icon_2} alt='no' className='text-white w-[60px] h-[60px]' />
  //           </div>
  //           <div className='w-[196px] h-[130px] rekha'>
  //             <img src={free_icon_3}
  //               alt='no' className='text-white w-20 h-20' />
  //           </div>
  //           <div className='rekha '>
  //             <img src={free_icon_1} alt='no' className='text-whitew-[60px] h-[60px]' />
  //           </div>
  //           <div className='rekha'>
  //             <img src={free_icon_4} alt='no' className='text-white w-[60px] h-[60px]' />
  //           </div>
  //         </div>



  // <div className="relative w-full h-[50%] mt-[0rem]">
  //         <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
  //         <section className="absolute left-0 top-0">
  //           <div className='flex justify-center  flex-col items-center mx-12 '>

  //             <div className='big'>
  //               FIND ME ON
  //             </div>
  //             <p className='text-white text-center mt-2 mb-2'>© 2024 Kamlesh-All Rights Reserved.</p>
  //             <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
  //               <FaGithub className='h-10 w-10 text-white abc cursor-pointer' />
  //               <FaLinkedin className='h-10 w-10 text-white abc cursor-pointer' />
  //               <FaInstagram className='h-10 w-10 text-white abc cursor-pointer' />
  //             </div>
  //           </div>

  //         </section>

  //       </div>

  else if (window.innerWidth > 768 && window.innerWidth < 1300) {
    return (
      <section className='relative w-full h-screen mx-auto'>
      <CanvasCursor/>

        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center  xs:mt-[20px]   mb-6 select-none'>
            <h1 className='text-white  text-[2em] font-medium cursor'>Professional <span className='text-[#915eff] font-bold text-[2.2rem] fredericka-the-great-regular'>SkillSet</span></h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center w-[98%] gap-3'>
            {technologies.map((technology) => (
              <div className='flex justify-center items-center border-[2px] border-[#C889E6] h-[90px] w-[130px]  rekhaa cursor-pointer' key={technology.name}

              >
                <BallCanvas icon={technology.icon} />
              </div>
            ))
            }
          </div>

          <div className='flex justify-center items-center select-none'>
            <h1 className='text-white text-[2.3em] font-medium mt-5 mb-5'>Tools <span className='text-[#915eff] font-bold text-[3rem] fredericka-the-great-regular'>I use</span></h1>
          </div>

          <div className='flex flex-row flex-wrap justify-center gap-7 w-[90%] '>
            <div className='rekhad '>
              <img src={free_icon_2} alt='no' className='text-white w-[70px] h-[70px]' />
            </div>
            <div className='w-[130px] h-[80px] rekhaa'>
              <img src={free_icon_3}
                alt='no' className='text-white h-[70px] w-[70px]' />
            </div>
            <div className='rekhad'>
              <img src={free_icon_1} alt='no' className='text-white w-[80px] h-[80px]' />
            </div>
            <div className='rekhad'>
              <img src={free_icon_4} alt='no' className='text-white w-[70px] h-[70px]' />
            </div>
          </div>

        </div>

        <div className="relative w-full h-[40%] mt-[-1rem]">
          <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
          <section className="absolute xs:left-[20%] md:left-[40%] top-[27%]">
            <div className='big'>
              FIND ME <span className='text-[#915eff] font-poppins ml-4'>  ON</span>
            </div>
            <p className='text-white text-center mt-2 mb-5'>© 2024 Kamlesh-All Rights Reserved.</p>
            <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
              <FaGithub className='h-10 w-10 text-white abc cursor-pointer' />
              <FaLinkedin className='h-10 w-10 text-white abc cursor-pointer' />
              <FaInstagram className='h-10 w-10 text-white abc cursor-pointer' />
            </div>
          </section>

        </div>

      </section>
    )
  }



  return (
    <section className='relative w-full h-screen mx-auto'>
      <CanvasCursor/>
      {/* <SpotlightCursor/> */}

      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center mt-[60px]   mb-6 select-none'>
          <h1 className='text-white  text-[2.3rem] font-medium cursor'><span className='honey'>Professional</span> <span className='text-happy text-[2.7rem]'>SkillSet</span></h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-2 w-[95%] sm:gap-7'>
          {technologies.map((technology) => (
            <div className='flex justify-center items-center border-[2px] border-[#C889E6] h-[100px] w-[130px] sm:h-[135px] sm:w-[200px] rekhaa cursor-pointer' key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))
          }
        </div>

        <div className='flex justify-center items-center select-none'>
          <h1 className='text-white text-[2.3rem] font-medium mt-8 mb-5'><span className='honey'>Tools </span><span className='text-happy text-[2.7rem]'>I use</span></h1>
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-7 w-[90%] '>
          <div className='rekha '>
            <img src={free_icon_2} alt='no' className='text-white w-[100px] h-[90px]' />
          </div>
          <div className='w-[150px] h-[110px] rekhaa'>
            <img src={free_icon_3}
              alt='no' className='text-white h-20 w-20' />
          </div>
          <div className='rekha '>
            <img src={free_icon_1} alt='no' className='text-white w-[100px] h-[80px]' />
          </div>
          <div className='rekha'>
            <img src={free_icon_4} alt='no' className='text-white w-[100px] h-[90px]' />
          </div>
          <div className='rekha'>
            <img src={free_icon_5} alt='no' className='text-white ' />
          </div>
        </div>

      </div>

      <div className="relative w-full h-[40%] mt-[-1rem]">
        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
        <section className="absolute xs:left-[20%] md:left-[40%] top-[27%]">
          <div className='big'>
            FIND ME <span className='text-happy font-poppins ml-4'>  ON</span>
          </div>
          <p className='text-white text-center mt-2 mb-5'>© 2025 Kamlesh-All Rights Reserved.</p>
          <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
            <FaGithub className='h-10 w-10 text-white abc cursor-pointer hello' />
            <FaLinkedin className='h-10 w-10 text-white abc cursor-pointer hello' />
            <FaInstagram className='h-10 w-10 text-white abc cursor-pointer hello' />
          </div>
        </section>

      </div>

    </section>
  )
}

export default SectionWrapper(Skills, "");