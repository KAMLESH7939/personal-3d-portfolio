import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/indexed'
import { fadeIn, textVariant } from '../utils/motion'
import yoo from '../assets/yoo.mp4'
import vedioBGG from '../assets/vedioBGG.mp4'
import { SectionWrapper } from '../hoc'
import gsap from 'gsap'
import { useRef } from 'react'
import cur from '../Pages/About.jsx'
import myImage from '../assets/icons/myImage.jpg'
import ic1 from '../assets/icons/circle.png'
import ic2 from '../assets/icons/dots.png'
import ic3 from '../assets/icons/cube.png'
import ic4 from '../assets/icons/plus.png'
import ic5 from '../assets/icons/zigzags.png'
function enterHandler() {

  gsap.to(cur.current, {
    scale: 2
  })
}

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[230px]  w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-[90%] green-pink-gradient p-[1px] rounded-[20px] shadow-card h-[242px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-3 px-8 min-h-[240px] flex justify-evenly items-center flex-col '
        onMouseEnter={enterHandler}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'

        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)
const Aboutt = () => {

  if (window.innerWidth <= 600) {
    return (
      <section className='pl-3 pr-4 pb-2 pt-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
        {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' /> */}
        <motion.div className='' variants={textVariant()}>
          <p className={`${styles.sectionSubText} font-bold font-poppins`} >Introduction </p>
          <h2 className="text-white font-black text-[25px]">Overview.</h2>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary font-medium text-[12px] max-w-3xl  leading-[16px]'>
            I'm a skilled software developer with experience in Javascript and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
          <div className='mt-20 flex flex-wrap gap-[2rem] mx-3 w-full '>
            {
              services.map((service, index) => {
                return (
                  <ServiceCard key={service.title} index={index} {...service} />
                );
              })
            }
          </div>
        </motion.div>
      </section>
    )
  }
  else if (window.innerWidth < 1300 && window.innerWidth > 600) {
    return (

      <section className='relative w-full h-screen mx-auto'>

        {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' /> */}
        <motion.div className='absolute top-[1%]   left-[6%]' variants={textVariant()}>
        <div className='flex flex-row justify-between items-center gap-4'>
         <div>
          <p className={`${styles.sectionSubText} font-bold font-poppins`} >Introduction </p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary font-medium text-[12px] max-w-3xl  leading-[30px]'>
            I'm a skilled software developer with experience in Javascript and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
          </div>
          <div className="relative">

            <div className="absolute icons icon-circle">
              <img src={ic1} alt="no" />
            </div>
            <div className="absolute icons icon-dots">
              <img src={ic2} alt="no" />
            </div>
            <div className="absolute icons icon-cube">
              <img src={ic3} alt="no" />
            </div>
            <div className="absolute icons icon-plus">
              <img src={ic4} alt="no" />
            </div>
            <div className="absolute icons icon-zigzak">
              <img src={ic5} alt="no" />
            </div>

            <div className='userimg'>
              <img src={myImage} alt="nope" width={300} height={400} className="object-cover w-[150px] h-[200px] rounded-lg"  />
            </div>
          </div>
        </div>


          <div className='mt-10 flex flex-wrap gap-[2rem] max-w-7xl'>
            {
              services.map((service, index) => {
                return (
                  <ServiceCard key={service.title} index={index} {...service} />
                );
              })
            }

          </div>



        </motion.div>
      </section>
    )
  }
  return (

    <section className='relative w-full h-screen mx-auto'>

      {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' /> */}
      <motion.div className='absolute top-[5%]  md:left-[7%] lg:left-[13%] left-[10%]' variants={textVariant()}>

        <div className='flex flex-row justify-between items-center gap-4'>
          <div>
            <p className={`${styles.sectionSubText} font-bold font-poppins`} >Introduction </p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary font-medium sm:text-[17px] text-[13px] max-w-3xl  leading-[30px]'>
              I am a Computer Science Engineering student at Madan Mohan Malaviya University of Technology, Gorakhpur. I'm a skilled software developer with experience in Javascript, programming, data structures and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
          </div>
          <div className="relative">

            <div className="absolute icons icon-circle">
              <img src={ic1} alt="no" />
            </div>
            <div className="absolute icons icon-dots">
              <img src={ic2} alt="no" />
            </div>
            <div className="absolute icons icon-cube">
              <img src={ic3} alt="no" />
            </div>
            <div className="absolute icons icon-plus">
              <img src={ic4} alt="no" />
            </div>
            <div className="absolute icons icon-zigzak">
              <img src={ic5} alt="no" />
            </div>

            <div className='userimg'>
              <img src={myImage} alt="nope" width={200} height={450} className="object-cover rounded-lg" />
            </div>
          </div>
        </div>



        <div className='mt-20 flex flex-wrap gap-[4rem] max-w-7xl'>
          {
            services.map((service, index) => {
              return (
                <ServiceCard key={service.title} index={index} {...service} />
              );
            })
          }

        </div>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Aboutt, "about")
