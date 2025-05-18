
import { NavLink } from 'react-router-dom'
import '../index.css'
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { menu, close, logo } from '../assets'
import { MdAddIcCall } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import Kaml from '../assets/icons/Kaml.jpg'
import { IoGitBranch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import gsap from 'gsap';
/*************  ✨ Codeium Command ⭐  *************/
/**
 * A functional component that renders a navigation bar. The navigation bar
 * includes the logo in the leftmost side and 4 links: About, Projects, Skills, and
 * Contact Me. The links are rendered as NavLink components. The links are
 * conditionally styled to have a blue color if the current route matches the
 * link's to prop.
 * @returns {JSX.Element} The rendered navigation bar.
 */
/******  f1cbf41a-9626-48fa-90d9-15df3b8dcedb  *******/
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    //     if (window.outerWidth < 768) {
    //     const side = useRef();
    //     const heading = useRef();
    //     let tl;

    // useGSAP( () => {


    //     tl = gsap.timeline();

    //     tl.to(side.current , {
    //        right : 0,
    //        duration: 0.6,
    //     })
    //     tl.from('nav h1', {
    //        x:150,
    //        duration: 0.6,
    //        stagger: 0.1,
    //        opacity: 0
    //     })
    //     tl.from('nav i', {
    //        opacity:0
    //     })

    //     tl.pause();


    // })
    // function menuHandler(){
    //     tl.play();
    // }
    // function crosshandler(){
    //     tl.reverse();
    // }

    //         return (
    //             <div>
    //                 <header className='header lol'>
    //                     <NavLink to={'/'} className="h-16 w-16 shadow-md ">
    //                         <img src='./src/job204-wan-11.jpg' alt='no' className='rounded-lg shadow-xl' />
    //                     </NavLink>
    //                     <i className="ri-menu-3-line" onClick={menuHandler}></i>
    //                 </header>

    //                 <div className='full' ref={side}>
    //                     <nav className='flex flex-col text-lg  md:gap-12 gap-5 font-medium' >
    //                         <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-blue-500' : "text-black"} ref={heading}>
    //                             <h1 >About</h1>
    //                         </NavLink>
    //                         <NavLink to={'/projects'} className={({ isActive }) => isActive ? 'text-blue-500' : "text-black"} ref={heading}>
    //                             <h1 >Projects</h1>
    //                         </NavLink>
    //                         <NavLink to={'/skills'} className={({ isActive }) => isActive ? 'text-blue-500' : "text-black"} ref={heading}>
    //                             <h1 > Skills</h1>
    //                         </NavLink>
    //                         <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-blue-500' : "text-black" } ref={heading}>
    //                             <h1 >Contact Me</h1>
    //                         </NavLink>
    //                         <i className="ri-close-large-line" onClick={crosshandler}></i>
    //                     </nav>
    //                 </div>
    //             </div>



    //         );
    //     }
   

    return (


        <header className='header bg-blur header1'>
           
            <NavLink to={'/'} className="h-16 w-16 shadow-md  ">
                <img src={Kaml} alt='no' className='rounded-lg shadow-xl' />
            </NavLink>
            <nav className='flex text-lg items-center md:gap-12 gap-7 font-medium'>
                <div className='sm:flex hidden text-lg items-center md:gap-12 gap-7 font-medium'>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-happy' : "text-[#582178]"}>
                        <div className='flex flex-col md:flex-row justify-center items-center  gap-[0px] md:gap-[12px] git1'> <RiContactsLine className='text-[1.2rem]' /> About </div>
                    </NavLink>
                    <NavLink to={'/skills'} className={({ isActive }) => isActive ? 'text-happy' : "text-[#582178]"}>
                        <div className='flex flex-col md:flex-row justify-center items-center  gap-[0px] md:gap-[10px] git1'> <GiBrain className='text-[1.2rem]' /> Skills </div>
                    </NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-happy' : "text-[#582178]"}>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-[0px] md:gap-[10px] git1'> <MdAddIcCall className='text-[1.2rem]' /> Contact Me </div>
                    </NavLink>
                    <a href='https://github.com/KAMLESH7939' className=''>
                       <button className='btn1'>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-[0px] md:gap-[10px] px-1 py-0'>
                        <IoGitBranch className='text-white h-5 w-5'/>
                        <FaStar className='text-white h-5 w-5'/>
                        </div>
                       </button>
                    </a>
                </div>

                <div className='sm:hidden flex fex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer '
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute  top-[15rem] right-0 riw-[ght-0 mx-3 my-2 min-140px] rounded-xl z-10`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-2'>
                            <NavLink to={'/about'} onClick={() => { setToggle(!toggle) }} className={({ isActive }) => isActive ? 'text-white p-1 text-[17px] font-medium font-poppins mt-2' : "text-[#aaa6c3] hover:text-white  font-medium cursor-pointer font-poppins  text-[16px] p-1 hover:scale-110 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"} >
                                About
                            </NavLink>
                            <NavLink to={'/skills'} onClick={() => { setToggle(!toggle) }} className={({ isActive }) => isActive ? 'text-white p-1 text-[17px] font-medium font-poppins' : "text-[#aaa6c3] hover:text-white  font-medium cursor-pointer font-poppins  text-[16px] p-1 hover:scale-110 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}>
                                Skills
                            </NavLink>
                            <NavLink to={'/contact'} onClick={() => { setToggle(!toggle) }} className={({ isActive }) => isActive ? 'text-white p-1 text-[17px] font-medium font-poppins' : "text-[#aaa6c3] hover:text-white  font-medium cursor-pointer font-poppins  text-[16px] p-1 hover:scale-110 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"}>
                                Contact Me
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
