import React from 'react'
import yoo from '../assets/yoo.mp4'
import vedioBGG from '../assets/vedioBGG.mp4'
import { BallCanvas } from "../Components/canvas/Ball.jsx"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/indexed'
import free_icon_1 from "../assets/icons/free_icon_1.svg"
import free_icon_2 from "../assets/icons/free_icon_2.svg"
import free_icon_3 from "../assets/icons/free_icon_3.svg"
import free_icon_4 from "../assets/icons/free_icon_4.svg"
import free_icon_5 from "../assets/icons/free_icon_5.png"
import Kills from './Kills.jsx'
const Experience = () => {
  if(window.innerWidth <= 500){
    return (
      <section className='pl-3 pr-3 pb-2 pt-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
        <div className='w-full h-full flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center  mt-[20px] mb-3'>
            <h1 className='text-white mx-auto text-[2em] font-medium cursor text-center'>Professional <span className='text-happy font-bold text-[2rem] fredericka-the-great-regular'>SkillSet</span></h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-6  w-[80%] '>
            <Kills/>
          </div>
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-[2em] font-medium mt-6 mb-2'>Tools <span className='text-happy font-bold text-[2rem] fredericka-the-great-regular'>I use</span></h1>
         </div>
          <div className='flex flex-row flex-wrap justify-center gap-4 w-[80%]'>
            <div className='rekhad'>
              <img src={free_icon_2} alt='no' className='text-white w-[110px] h-[70px]' />
            </div>
            <div className='w-[160px] h-[80px] rekhaa'>
              <img src={free_icon_3}
           alt='no' className='text-white h-[70px] w-[70px]' />
            </div>
            <div className='rekhad '>
              <img src={free_icon_1} alt='no' className='text-white w-[140px] h-[80px]' />
            </div>
            <div className='rekhad'>
              <img src={free_icon_4} alt='no' className='text-white w-[110px] h-[70px]' />
            </div>
            <div className='rekhad'>
            <img src={free_icon_5} alt='no' className='text-white w-[70px] h-[70px]' />
            </div>
          </div>
        </div>
      </section>
    )
  }
  else if(window.innerWidth < 1300 && window.innerWidth > 500){
    return (
      <section className='w-full h-screen mx-auto'>
  
        <div className='w-full h-full flex justify-center items-center flex-col'>s
          <div className='flex justify-center items-center  xs:mt-[20px]   mb-6'>
            <h1 className='text-white  text-[2.3rem] font-medium cursor'><span className='honey'>Professional </span><span className='text-happy text-[2.7rem]'>SkillSet</span></h1>
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-4  w-[90%] '>
            {technologies.map((technology) => (
              <div className='flex justify-center items-center border-[2px] border-[#C889E6] h-[90px] w-[130px] rekhaa cursor-pointer' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))
  
            }
          </div>
  
          <div className='flex justify-center items-center'>
            <h1 className='text-white text-[2.3rem] font-medium mt-8 mb-5'><span className='honey'>Tools</span> <span className='text-happy font-bold text-[2.7rem]'>I Use</span></h1>
          </div>
  
          <div className='flex flex-row flex-wrap justify-center gap-4 w-[90%]'>
            <div className='rekhad'>
              <img src={free_icon_2} alt='no' className='text-white w-[70px] h-[70px]' />
            </div>
            <div className='w-[130px] h-[80px] rekhaa'>
              <img src={free_icon_3}
           alt='no' className='text-white h-[70px] w-[70px]' />
            </div>
            <div className='rekhad '>
              <img src={free_icon_1} alt='no' className='text-white w-[80px] h-[80px]' />
            </div>
            <div className='rekhad'>
              <img src={free_icon_4} alt='no' className='text-white w-[70px] h-[70px]' />
            </div>
            <div className='rekhad'>
            <img src={free_icon_5} alt='no' className='text-white  w-[70px] h-[70px]' />
            </div>
          </div>
  
        </div>
  
      </section>
    )
  }

  return (
    <section className='w-full h-screen mx-auto'>

      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center  xs:mt-[20px]   mb-6'>
          <h1 className='text-white  text-[2.3rem] font-medium cursor'><span className='honey'>Professional </span><span className='text-happy text-[2.7rem] '>SkillSet</span></h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-7  w-[90%] '>
          {technologies.map((technology) => (
            <div className='flex justify-center items-center border-[2px] border-[#C889E6] h-[135px] w-[200px] rekhaa cursor-pointer' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))

          }
        </div>

        <div className='flex justify-center items-center'>
          <h1 className='text-white text-[2.3rem] font-medium mt-8 mb-5'><span className='honey'>Tools </span><span className='text-happy text-[2.7rem]'>I Use</span></h1>
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-7 w-[90%]'>
          <div className='rekha'>
            <img src={free_icon_2} alt='no' className='text-white w-[100px] h-[100px]' />
          </div>
          <div className='rekha'>
            <img src={free_icon_3}
         alt='no' className='text-white h-24 w-24' />
          </div>
          <div className='rekha '>
            <img src={free_icon_1} alt='no' className='text-white w-[110px] h-[100px]' />
          </div>
          <div className='rekha'>
            <img src={free_icon_4} alt='no' className='text-white w-[110px] h-[100px]' />
          </div>
          <div className='rekha'>
            <img src={free_icon_5} alt='no' className='text-white ' />
            </div>
        </div>

      </div>

    </section>
  )
}

export default SectionWrapper(Experience, "");