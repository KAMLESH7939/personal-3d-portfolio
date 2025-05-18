import React, { useRef } from 'react';
import { motion, px } from 'framer-motion';
import { styles } from '../styles';
import ComputersCanvas from "../Components/canvas/Computers";
import vedioBGG from '../assets/vedioBGG.mp4';
import infinit from '../assets/infinit.mp4';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Aboutt from '../Components/Aboutt';
import Experience from '../Components/Experience';

import Foot from '../Components/Foot';
import Myapproach from './Myapproach';
import LetsContact from '../Components/LetsContact';
import degree from "../assets/degree.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import sakura from '../assets/sakura.mp3';
import Product from '../Components/Product.jsx';
import { items } from '../assets/data.jsx';
import pic01 from '../assets/icons/pic01.png';
import pic02 from '../assets/icons/pic02.png';
import pic03 from '../assets/icons/pic03.png';
import pic04 from '../assets/icons/pic04.png';
import pic05 from '../assets/icons/pic05.png';
import pic06 from '../assets/icons/pic06.png';
import pic07 from '../assets/icons/pic07.png';
import pic08 from '../assets/icons/pic08.png';
import pic09 from '../assets/icons/pic09.png';
import pic10 from '../assets/icons/pic10.png';
import pic11 from '../assets/icons/pic11.png';
import mainpic from '../assets/icons/mainpic.png';
import portImg from '../assets/icons/portImg.png'
import high from '../assets/icons/high.png';
import inter from '../assets/icons/inter.png';
import cou1 from '../assets/icons/cou1.png';
import cou2 from '../assets/icons/cou2.png';
import cou3 from '../assets/icons/cou3.png';
import mmmutlogo from '../assets/icons/mmmutlogo.jpg';
import Scroll from '../Components/Scroll.jsx';
import CanvasCursor from '../Components/CanvasCursor .jsx';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/indexed.js';
import { useState } from 'react';
import certi from '../assets/CERTIFICATE.jpg'
import nertii from '../assets/NPTELCERTIFICATE.png'
import gate from '../assets/Gatelogo.png'
import grade from '../assets/grade.png'
import { FaArrowRight } from "react-icons/fa6";
import np from '../assets/np.jpg'
const About = () => {




    const hd1 = useRef();
    const hd2 = useRef();
    const hd3 = useRef();

    useGSAP(() => {

        gsap.from(hd1.current, {
            x: 150,
            opacity: 0,
            duration: 2,
        })
    })
    useGSAP(() => {
        gsap.from(hd2.current, {
            scale: 0.8,
            opacity: 0,
            duration: 2,
            y: 150
        })
    })





    const [typeEffect] = useTypewriter({
        words: [' React Developer ', ' Frontend Developer', '  Software Developer', ' Web Developer', ' Coder '],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })


    const [showPopup, setShowPopup] = useState(false);
    const [showPopupp, setShowPopupp] = useState(false);
    const [showPopuppp, setShowPopuppp] = useState(false);







    if (window.innerWidth < 764) {
        return (
            <section className='bg-primary'>
                <section className='relative w-full h-screen bg-primary'>

                    {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' /> */}
                    <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen mx-auto '>
                        <div className={`${styles.paddingX} absolute inset-0 top-[100px] left-[2px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                            <div ref={hd1} className='flex flex-col justify-center items-center mt-5'>
                                <div className='w-5 h-5 rounded-full bg-[#c770f0]' />
                                <div className='w-1 sm:h-80 h-40 violet-gradient' />
                            </div>
                            <div ref={hd1} className=''>
                                <h1 ref={hd1} className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#c770f0]'>Kamlesh</span> </h1>
                                <p ref={hd1} className={`${styles.heroSubText} mt-2`}>
                                    <span className='hand text-[1.5em]'>👀</span>I am a
                                    <span className='text-[#c770f0] font-[700]'>
                                        {typeEffect}
                                    </span>
                                </p>

                                <p ref={hd3} className='text-[1em] mt-2 text-white w-[80%]' >
                                    I’m a software developer <br />  and here is my portfolio website .
                                </p>
                                <div className='mx-auto flex justify-center items-center mt-[3.2rem] mb-[1rem]'>
                                    <img src={mainpic} alt='no' width={300} height={300} />
                                </div>

                            </div>
                        </div>

                        {/* <ComputersCanvas />

                            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                                <a href='#about'>
                                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                                        <motion.div
                                            animate={{
                                                y: [0, 24, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                            }}
                                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                                        />
                                    </div></a>
                            </div> */}

                    </div>
                </section>
                <Aboutt />
                <div className='py-16'>

                    <h2 className="text-white font-black text-[3rem] text-center">Education.</h2>

                    <div className='mt-12 flex'>
                        <VerticalTimeline>


                            <VerticalTimelineElement
                                date={<h3 className='text-white'>(2022 - present)</h3>}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full rounded-full' />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: "solid",
                                    borderBottomColor: "#584ba1",
                                    boxShadow: "none"
                                }}
                            >
                                <div className=''>
                                    <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>Bachelor of Technology (B.Tech.) </h2>
                                    <h3 className='text-black-500 font-medium font-poppins uppercase mb-2'>Madan Mohan Malaviya University Of Technology, Gorakhpur, Uttar Pradesh (INDIA)</h3>
                                    <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>CGPA-(present) : 9.09</h6>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                date={<h3 className='text-white'>(2022 - present)</h3>}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img src={cou1} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: "solid",
                                    borderBottomColor: "#2f98c4",
                                    boxShadow: "none"
                                }}
                            >
                                <div>
                                    <h2 className='text-black text-xl font-semibold font-poppins mb-2'>COURSES</h2>
                                    <h3 className='text-black-500 font-medium font-poppins uppercase' >Computer Science & Engineering (C. S. E)</h3>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                date={<h3 className='text-white'>(2020 - 2021)</h3>}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img src={inter} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: "solid",
                                    borderBottomColor: "#76d184",
                                    boxShadow: "none"
                                }}
                            >
                                <div>
                                    <h2 className='text-black text-xl font-semibold font-poppins mb-2'>XII Standard</h2>
                                    <h3 className='text-black-500 font-medium font-poppins mb-2'>SATYA NARAYAN SINGH NATIONAL SCHOOL SADAR VARANASI, UTTAR PRADESH (INDIA)</h3>
                                    <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>Aggregate percentage : 90.8%</h6>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                date={<h3 className='text-white'>(2018 - 2019)</h3>}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img src={high} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: "solid",
                                    borderBottomColor: "#bf4e14",
                                    boxShadow: "none"
                                }}
                            >
                                <div>
                                    <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>X Standard </h2>
                                    <h3 className='text-black-500 font-medium font-poppins mb-2' >DR KKR's GOWTHAM INTERNATIONAL SCHOOL GUDAVALLI, VIJAYAWADA (INDIA)</h3>
                                    <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>Aggregate percentage : 85.6%</h6>
                                </div>
                            </VerticalTimelineElement>


                        </VerticalTimeline>
                    </div>
                </div>
                <Experience />
                {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-[27rem] object-cover' /> */}

                {/* <Project />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[27rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' />


                <ProjectTwo />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[14rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' />

                <ProjectThree />
                <video src={vedioBGG} loop autoPlay muted className='w-full h-[10rem] object-cover' /><video src={vedioBGG} loop autoPlay muted className='w-full h-[40rem] object-cover' /> */}
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-white font-poppins text-[2em] font-medium text-center  mt-4'><span className='honey'>My Recent </span><span className='text-happy text-[2.7rem] fredericka-the-great-regular'>Works</span></h1>
                    <p className='text-white font-poppins mx-3 text-center'>Here are a few projects I've worked on recently.</p>
                </div>

                <div className='w-full flex justify-center items-center mb-5'>
                    <p className='mt-3 mb-3 text-secondary font-medium text-[14px] leading-[16px] text-left mx-5 '>
                        Following projects showcases my skills and experience through
                        real-world examples of my work. Each project is briefly described with
                        links to code repositories and live demos in it. It reflects my
                        ability to solve complex problems, work with different technologies,
                        and manage projects effectively.
                    </p>
                </div>

                <div className="grid gridcols-1 max-w-7xl  pb-2 pt-2 pr-[1.2rem] mx-auto space-y-10 space-x-5 min-h-[80vh]">

                    <Product
                        title="Ecomzy Shopping Cart"
                        description="Ecomzy Cart demonstrates the basic functionality of a shopping cart, allowing users to add products, adjust quantities, and calculate the total price."
                        image={pic11}
                        gitUrl="https://github.com/KAMLESH7939/EcomzyApp"
                        demoUrl="https://shoppingcart-kamlesh.vercel.app/"
                        desc="#React #Redux #html #Javascript #Css(TailwindCSS)"
                    />
                    <Product
                        title="Weather Application"
                        description="Weather Application allows you to view the current temperature, wind speed, humidity, and cloud cover."
                        image={pic03}
                        gitUrl="https://github.com/KAMLESH7939/Weather-Application-Kamlesh"
                        demoUrl="https://kamlesh7939.github.io/Weather-Application-Kamlesh"
                        desc="#Html #Css #Javascript #TailwindCSS"
                    />
                    <Product
                        title="3D-PORTFOLIO"
                        description="Hey everyone! I hope you're all doing well. I have made this portfolio website from scratch using WebGL (Web Graphics Library) a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser"
                        image={portImg}
                        gitUrl=""
                        demoUrl="https://kamlesh3dportfolio.netlify.app"
                        desc="#Html5 #Javascript #TailwindCSS #ReactJs+Vite ThreeJs #FramerMotion #WebGL #3D-rendering #WebDevelopment"
                    />
                    <Product
                        title="Elite Courses App"
                        description="Elite Courses App website is a great example of purchasing online courses available on platforms like Udemy, Coursera, and edX."
                        image={pic06}
                        gitUrl="https://github.com/KAMLESH7939/Elite_Courses"
                        demoUrl="https://kamlesh7939.github.io/Elite_Courses/"
                        desc="#Html #Javascript #TailwindCSS #ReactJs"
                    />
                    <Product
                        title="Password Generator App"
                        description="One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols. • One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak."
                        image={pic07}
                        gitUrl="https://github.com/KAMLESH7939/Password_Generator"
                        demoUrl="https://kamlesh7939.github.io/Password_Generator/"
                        desc="#Html #Css #Javascript"
                    />
                    <Product
                        title="Tic Tac Twist OX "
                        description="TicTacTwist is a modern application for playing Tic Tac Toe with two players."
                        image={pic01}
                        gitUrl="https://github.com/KAMLESH7939/Tic_Tac_Toe_App.github.io"
                        demoUrl="https://kamlesh7939.github.io/Tic_Tac_Toe_App.github.io/"
                        desc="#Html #Css #Javascript #TailwindCSS"
                    />
                    <Product
                        title="Random Gif's Generator"
                        description="The Random Gif Generator is a web application that allows users to generate random GIFs or GIFs based on a specific tag or keyword. It uses the Giphy API to fetch GIFs and display them in a visually appealing manner."
                        image={pic10}
                        gitUrl="https://github.com/KAMLESH7939/Gif-generator"
                        demoUrl="https://gifs-generator-kamlesh.vercel.app/"
                        desc="#React #Axios #Css(TailwindCss) #Html"
                    />
                    <Product
                        title="Razorpay Clone"
                        description="It serves as a practical implementation of web development concepts using the Tailwind CSS framework. Razorpay is a popular payment gateway in India."
                        image={pic08}
                        gitUrl="https://github.com/KAMLESH7939/RAZorpay_CLone"
                        demoUrl="https://kamlesh7939.github.io/RAZorpay_CLone/"
                        desc="#Html #Css #Javascript #TailwindCSS"
                    />
                    <Product
                        title="Plan With Kamlesh"
                        description="This app is a personalized tourism plan designed for individuals with varying travelling levels and goals."
                        image={pic09}
                        gitUrl=""
                        demoUrl=""
                        desc="#Html #Css #Javascript #TailwindCSS"
                    />
                    <Product
                        title="Telford Longue"
                        description="Telford Longue allow users to choose various type of designs in order to buy the chair in any e-commerce plateform like flipKart"
                        image={pic02}
                        gitUrl="https://github.com/KAMLESH7939/Mordern_chair_project"
                        demoUrl="https://modern-chair-app.netlify.app/"
                        desc="#Html #Css #Javascript #TailwindCSS"
                    />
                    <Product
                        title="Parallax Effect"
                        description=" As visitors scroll down the Parallex site, creates a 3D effect, adding depth and creating immersive experience."
                        image={pic04}
                        gitUrl="https://github.com/KAMLESH7939/Parallex_effect_website"
                        demoUrl="https://codehelp-parallax-website.netlify.app"
                        desc="#Html #Css"
                    />
                    <Product
                        title="My Gallery"
                        description="This is a beautiful image gallary with some nice transitions and hover effects."
                        image={pic05}
                        gitUrl="https://github.com/KAMLESH7939/Image_Gallery_slide"
                        demoUrl="flex justify-center items-center gap-4 text-white"
                        desc="#Html #Css"
                    />

                </div>

                <div className='py-16'>

                <h2 className="text-white font-black text-[3rem] text-center">My Achievements.</h2>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                    


                        <VerticalTimelineElement
                            date={<h3 className='text-white'></h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={gate} alt='mmmut' loading='lazy' className='w-full h-full rounded-full' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#584ba1",
                                boxShadow: "none"
                            }}
                        >
                            <div className=''>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>Graduate Aptitude Test in Engineering</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase mb-2'>Computer Science and Information Technology (CS) </h3>
                                <h4 className='text-black-500 font-medium font-poppins uppercase text-sm'>ALL INDIA RANK : 7593 </h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2022 - present) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={gate} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#2f98c4",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>Graduate Aptitude Test in Engineering</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase' >Data Science and Artificial Intelligence (DA)</h3>
                                <h4 className='text-black-500 font-medium font-poppins uppercase text-sm mt-2'>ALL INDIA RANK : 7217  </h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2020 - 2021) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#76d184",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>CERTIFICATE OF APPRECIATION</h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2'>For assisting the panel of the expert members constituted for the evaluation of candidates’ technical knowledge and teaching abilities applied for the post of Assistant Professors of the Department of Computer Science & Engineering by in-depth discussions and querying the technical questions.</h3>
                                <div className="">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2' onClick={() => setShowPopup(true)}><div>VIEW CERTIFICATE</div><FaArrowRight /></button>

                                    {showPopup && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                                            <img src={certi} alt="Popup" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2018 - 2019) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={np} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#bf4e14",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>NPTEL ELITE CERTIFICATE</h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2' >GETTING STARTED WITH COMPETITIVE PROGRAMMING</h3>
                                <div className="">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2' onClick={() => setShowPopupp(true)}><div>VIEW CERTIFICATE</div><FaArrowRight /></button>

                                    {showPopupp && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopupp(false)}>&times;</span>
                                            <img src={nertii} alt="Popup" />
                                        </div>
                                    )}
                                </div>

                            </div>
                        </VerticalTimelineElement>

                         <VerticalTimelineElement
                            date={<h3 className='text-white'> 
                            {/* (2022 - present) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#2f98c4",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>CURRENT CGPA : 9.08</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase' >Computer Science & Engineering (C. S. E)</h3>
                                <div className="mt-1">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2 ' onClick={() => setShowPopuppp(true)}><div>VIEW RECENT SCORECARD</div> <FaArrowRight /></button>

                                    {showPopuppp && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopuppp(false)}>&times;</span>
                                            <img src={grade} alt="Popup" />
                                        </div>
                                    )}
                                </div>

                            </div>
                        </VerticalTimelineElement>



                    </VerticalTimeline>
                </div>
            </div>

                <Myapproach />


                <LetsContact />

            </section>

        )
    }


    //   return (
    //     <div className='h-[100vh] w-[100vw] bg-black flex justify-center items-center'>

    //        <Canvas className='h-[50%] w-[50%]'
    //                camera={{ near: 0.1, far: 1000}}
    //        >
    //        {/* Suspense is wrapper , fallback is time req to loa out */}

    //          <Suspense fallback={<Loader/>}>

    //               <directionalLight position={[10,10,10] } intensity={7}/>
    //              <ambientLight intensity={1}/> 


    //              <hemisphereLight skyColor="yellow" groundColor="#efefef" intensity={1} />  
    //              <Environment preset='studio'/>
    //              <OrbitControls enableRotate={true}  autoRotate={false} autoRotateSpeed={4} rotateSpeed={2} enableZoom={false} />
    //              <Spiderman 
    //               scale={[200,200,200]}

    //              />
    //              {/* <Desk
    //              rotation={[1,-2,1]}

    //               scale={[2,2,2]}
    //              /> */}


    //          </Suspense>
    //        </Canvas>


    //        <div className='h-[50%] w-[50%]'>
    //          <h1 className='text-center text-4xl font-bold text-white'>About</h1>
    //          <p className='text-center text-xl text-white'>This is a 3D model of Spiderman.</p>
    //          <p className='text-center text-xl text-white'>Click on the model to rotate it.</p>
    //        </div>

    //     </div>
    //   )
    // }

    // export default About

    // function moveHandler(dets) {
    //     gsap.to(cur.current, {
    //         x: dets.clientX,
    //         y: dets.clientY,
    //         duration: 0.5,
    //         ease: "elastic.out"
    //     });
    // }
    return (
        // <section className='bg-primary' onMouseMove={moveHandler} >
        <section className='bg-primary '  >
            {/* <section className='fixed h-[20px] w-[20px] bg-white rounded-full z-[1] cur' ref={cur}>

            </section> */}
            <CanvasCursor />

            <section className='relative w-full h-screen bg-primary'>


                {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' /> */}
                <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-screen mx-auto '>
                    <div className={`${styles.paddingX} absolute inset-0 top-[100px] left-[2px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                        <div ref={hd2} className='flex flex-col justify-center items-center mt-5'>
                            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
                            <div className='w-1 sm:h-80 h-40 violet-gradient' />
                        </div>
                        <div className='relative' ref={hd1} >
                            <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-happy font-poppins'>Kamlesh</span> </h1>
                            <p className={`${styles.heroSubText} mt-[0.15rem]`}>
                                <span className='hand text-[1.2em]'>👀 </span> I am a
                                <span className='text-happy font-[700]'>
                                    {typeEffect}
                                </span>
                            </p>

                            <p className='text-[1em] mt-2 text-white w-[80%]' >
                                I’m a software developer <br />  and here is my portfolio website .
                            </p>

                            <img src={degree} alt='no' className='w-16 h-16 absolute  xs:left-[140%] xs:top-[40%] ' />

                        </div>
                    </div>

                    <ComputersCanvas />

                    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                        <a href='#about'>
                            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                                <motion.div
                                    animate={{
                                        y: [0, 24, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                    }}
                                    className='w-3 h-3 rounded-full bg-secondary mb-1'
                                />
                            </div></a>
                    </div>

                </div>
            </section>
            <Aboutt />
            <div className='py-16'>

                <h2 className="text-white font-black text-[3rem] text-center">Education.</h2>

                <div className='mt-12 flex'>
                    <VerticalTimeline>


                        <VerticalTimelineElement
                            date={<h3 className='text-white'>(2022 - present)</h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full rounded-full' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#584ba1",
                                boxShadow: "none"
                            }}
                        >
                            <div className=''>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>Bachelor of Technology (B.Tech.) </h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase mb-2'>Madan Mohan Malaviya University Of Technology, Gorakhpur, Uttar Pradesh (INDIA)</h3>
                                <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>CGPA-(present) : 9.09</h6>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>(2022 - present)</h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={cou1} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#2f98c4",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>COURSES</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase' >Computer Science & Engineering (C. S. E)</h3>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>(2020 - 2021)</h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={inter} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#76d184",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>XII Standard</h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2'>SATYA NARAYAN SINGH NATIONAL SCHOOL SADAR VARANASI, UTTAR PRADESH (INDIA)</h3>
                                <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>Aggregate percentage : 90.8%</h6>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>(2018 - 2019)</h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={high} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#bf4e14",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>X Standard </h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2' >DR KKR's GOWTHAM INTERNATIONAL SCHOOL GUDAVALLI, VIJAYAWADA (INDIA)</h3>
                                <h6 className='text-black-500 font-medium font-poppins uppercase text-sm'>Aggregate percentage : 85.6%</h6>
                            </div>
                        </VerticalTimelineElement>


                    </VerticalTimeline>
                </div>
            </div>




            <Experience />

            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-white font-poppins text-[2.3rem] font-medium  mt-7'><span className='honey'>My Recent </span><span className='text-happy text-[2.7rem]'>Works</span></h1>
                <p className='text-white font-poppins'>Here are a few projects I've worked on recently.</p>
            </div>

            <div className='w-full flex justify-center items-center'>
                <p className='mt-3 mb-4 text-secondary font-medium sm:text-[15px] text-[14px] max-w-3xl  leading-[30px] text-center '>
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </p>
            </div>
            <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 max-w-6xl pr-4 pb-2 pt-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {/* {
                    items.map((item) => {
                        return (
                            <Product key={item.id} item={item} />
                        )
                    })
                } */}
                <Product
                    title="Ecomzy Shopping Cart"
                    description="Ecomzy Cart demonstrates the basic functionality of a shopping cart, allowing users to add products, adjust quantities, and calculate the total price."
                    image={pic11}
                    gitUrl="https://github.com/KAMLESH7939/EcomzyApp"
                    demoUrl="https://shoppingcart-kamlesh.vercel.app/"
                    desc="#React #Redux #html #Javascript #Css(TailwindCSS)"
                />
                <Product
                    title="My 3D-PORTFOLIO"
                    description="Hey everyone! I hope you're all doing well. I have made this portfolio website from scratch using WebGL (Web Graphics Library) a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser"
                    image={portImg}
                    gitUrl=""
                    demoUrl="https://kamlesh3dportfolio.netlify.app"
                    desc="#Html5 #Javascript #TailwindCSS #ReactJs+Vite ThreeJs #FramerMotion #WebGL #3D-rendering #WebDevelopment"
                />
                <Product
                    title="Weather Application"
                    description="Weather Application allows you to view the current temperature, wind speed, humidity, and cloud cover."
                    image={pic03}
                    gitUrl="https://github.com/KAMLESH7939/Weather-Application-Kamlesh"
                    demoUrl="https://kamlesh7939.github.io/Weather-Application-Kamlesh"
                    desc="#Html #Css #Javascript #TailwindCSS"
                />
                <Product
                    title="Elite Courses App"
                    description="Elite Courses App website is a great example of purchasing online courses available on platforms like Udemy, Coursera, and edX."
                    image={pic06}
                    gitUrl="https://github.com/KAMLESH7939/Elite_Courses"
                    demoUrl="https://kamlesh7939.github.io/Elite_Courses/"
                    desc="#Html #Javascript #TailwindCSS #ReactJs"
                />
                <Product
                    title="Password Generator App"
                    description="One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols. • One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak."
                    image={pic07}
                    gitUrl="https://github.com/KAMLESH7939/Password_Generator"
                    demoUrl="https://kamlesh7939.github.io/Password_Generator/"
                    desc="#Html #Css #Javascript"
                />
                <Product
                    title="Tic Tac Twist OX "
                    description="TicTacTwist is a modern application for playing Tic Tac Toe with two players."
                    image={pic01}
                    gitUrl="https://github.com/KAMLESH7939/Tic_Tac_Toe_App.github.io"
                    demoUrl="https://kamlesh7939.github.io/Tic_Tac_Toe_App.github.io/"
                    desc="#Html #Css #Javascript #TailwindCSS"
                />
                <Product
                    title="Random Gif's Generator"
                    description="The Random Gif Generator is a web application that allows users to generate random GIFs or GIFs based on a specific tag or keyword. It uses the Giphy API to fetch GIFs and display them in a visually appealing manner."
                    image={pic10}
                    gitUrl="https://github.com/KAMLESH7939/Gif-generator"
                    demoUrl="https://gifs-generator-kamlesh.vercel.app/"
                    desc="#React #Axios #Css(TailwindCss) #Html"
                />
                <Product
                    title="Razorpay Clone"
                    description="It serves as a practical implementation of web development concepts using the Tailwind CSS framework. Razorpay is a popular payment gateway in India."
                    image={pic08}
                    gitUrl="https://github.com/KAMLESH7939/RAZorpay_CLone"
                    demoUrl="https://kamlesh7939.github.io/RAZorpay_CLone/"
                    desc="#Html #Css #Javascript #TailwindCSS"
                />
                <Product
                    title="Plan With Kamlesh"
                    description="This app is a personalized tourism plan designed for individuals with varying travelling levels and goals."
                    image={pic09}
                    gitUrl=""
                    demoUrl=""
                    desc="#Html #Css #Javascript #TailwindCSS"
                />
                <Product
                    title="Telford Longue"
                    description="Telford Longue allow users to choose various type of designs in order to buy the chair in any e-commerce plateform like flipKart"
                    image={pic02}
                    gitUrl="https://github.com/KAMLESH7939/Mordern_chair_project"
                    demoUrl="https://modern-chair-app.netlify.app/"
                    desc="#Html #Css #Javascript #TailwindCSS"
                />
                <Product
                    title="Parallax Effect"
                    description=" As visitors scroll down the Parallex site, creates a 3D effect, adding depth and creating immersive experience."
                    image={pic04}
                    gitUrl="https://github.com/KAMLESH7939/Parallex_effect_website"
                    demoUrl="https://codehelp-parallax-website.netlify.app"
                    desc="#Html #Css"
                />
                <Product
                    title="My Gallery"
                    description="This is a beautiful image gallary with some nice transitions and hover effects."
                    image={pic05}
                    gitUrl="https://github.com/KAMLESH7939/Image_Gallery_slide"
                    demoUrl="flex justify-center items-center gap-4 text-white"
                    desc="#Html #Css"
                />

            </div>

            {/* <Project /> */}

            {/* <ProjectTwo />

            <ProjectThree />
            <ProjectFour /> */}

            <div className='py-16'>

                <h2 className="text-white font-black text-[3rem] text-center">My Achievements.</h2>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                    


                        <VerticalTimelineElement
                            date={<h3 className='text-white'></h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={gate} alt='mmmut' loading='lazy' className='w-full h-full rounded-full' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#584ba1",
                                boxShadow: "none"
                            }}
                        >
                            <div className=''>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>Graduate Aptitude Test in Engineering</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase mb-2'>Computer Science and Information Technology (CS) </h3>
                                <h4 className='text-black-500 font-medium font-poppins uppercase text-sm'>ALL INDIA RANK : 7593 </h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2022 - present) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={gate} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#2f98c4",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>Graduate Aptitude Test in Engineering</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase' >Data Science and Artificial Intelligence (DA)</h3>
                                <h4 className='text-black-500 font-medium font-poppins uppercase text-sm mt-2'>ALL INDIA RANK : 7217  </h4>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2020 - 2021) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#76d184",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>CERTIFICATE OF APPRECIATION</h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2'>For assisting the panel of the expert members constituted for the evaluation of candidates’ technical knowledge and teaching abilities applied for the post of Assistant Professors of the Department of Computer Science & Engineering by in-depth discussions and querying the technical questions.</h3>
                                <div className="">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2' onClick={() => setShowPopup(true)}><div>VIEW CERTIFICATE</div><FaArrowRight /></button>

                                    {showPopup && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                                            <img src={certi} alt="Popup" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            date={<h3 className='text-white'>
                                {/* (2018 - 2019) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={np} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#bf4e14",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins uppercase mb-2'>NPTEL ELITE CERTIFICATE</h2>
                                <h3 className='text-black-500 font-medium font-poppins mb-2' >GETTING STARTED WITH COMPETITIVE PROGRAMMING</h3>
                                <div className="">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2' onClick={() => setShowPopupp(true)}><div>VIEW CERTIFICATE</div><FaArrowRight /></button>

                                    {showPopupp && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopupp(false)}>&times;</span>
                                            <img src={nertii} alt="Popup" />
                                        </div>
                                    )}
                                </div>

                            </div>
                        </VerticalTimelineElement>

                         <VerticalTimelineElement
                            date={<h3 className='text-white'> 
                            {/* (2022 - present) */}
                            </h3>}
                            icon={
                                <div className='flex justify-center items-center w-full h-full'>
                                    <img src={mmmutlogo} alt='mmmut' loading='lazy' className='w-full h-full text-white rounded-full object-cover bg-white' />
                                </div>
                            }
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: "solid",
                                borderBottomColor: "#2f98c4",
                                boxShadow: "none"
                            }}
                        >
                            <div>
                                <h2 className='text-black text-xl font-semibold font-poppins mb-2'>CURRENT CGPA : 9.08</h2>
                                <h3 className='text-black-500 font-medium font-poppins uppercase' >Computer Science & Engineering (C. S. E)</h3>
                                <div className="mt-1">
                                    <button className='cursor-pointer text-black-500 flex justify-center items-center gap-2 ' onClick={() => setShowPopuppp(true)}><div>VIEW RECENT SCORECARD</div> <FaArrowRight /></button>

                                    {showPopuppp && (
                                        <div className="popup">
                                            <span className="close" onClick={() => setShowPopuppp(false)}>&times;</span>
                                            <img src={grade} alt="Popup" />
                                        </div>
                                    )}
                                </div>

                            </div>
                        </VerticalTimelineElement>



                    </VerticalTimeline>
                </div>
            </div>
            <Myapproach />


            <LetsContact />

        </section>

    )

}

export default About
