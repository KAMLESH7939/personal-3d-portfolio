import React from 'react'

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './MagicButton';

const Product = (props) => {

  if (window.innerWidth < 764){
    return (
      <div className="w-[93%] flex flex-col items-center justify-between  beauty gap-2 rounded-xl ">
      <div className="w-[98%] mt-2 text-center">
        <img src={props.image} alt='no' className="h-full w-[97%] pl-2" />
      </div>
      <div className=''>
        <h1 className="text-gray-900 font-semibold text-[1.2rem] text-center font-poppins">{props.title}</h1>
      </div>
      <div >
        <p className=" text-gray-500 font-normal text-[12px] text-left font-poppins p-3 ">{props.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
      </div>

      <div>
        <a href={props.demoUrl} className="cursor-pointer">
          {/* <MagicButton
            title="DEMO"
            icon={<FaLocationArrow />}
            position="right"
          /> */}

          {/* <button class="pushable">
            <span class="front">
              DEMO
            </span>
          </button> */}

          <button className='loll'>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span >DEMO</span>
          </button>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center mb-3 '>
      <p className='text-gray-700 font-semibold text-[1rem] mt-2 font-poppins'>TECH STACK USED</p>
      <p className='text-[#0c430e] font-semibold text-[0.6rem] font-poppins text-center'>{props.desc}</p>
      </div>
    </div>
    )
 }
  return (
    <div className="flex flex-col items-center justify-between  beauty hover:scale-105 transition-all duration-300  ease-in gap-3 p-4 mt-8 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]  " >
      <div className="h-[180px]">
        <img src={props.image} alt='no' className="h-full w-full" />
      </div>
      <div>
        <h1 className="text-gray-900 font-semibold text-[1.5rem] text-left font-poppins">{props.title}</h1>
      </div>
      <div >
        <p className="w-[18rem] text-gray-500 font-normal text-[14px] text-left font-poppins ">{props.description.split(" ").slice(0, 18).join(" ") + "..."}</p>
      </div>

      <div>
        <a href={props.demoUrl} className="cursor-pointer">
          {/* <MagicButton
            title="DEMO"
            icon={<FaLocationArrow />}
            position="right"
          /> */}

          {/* <button class="pushable">
            <span class="front">
              DEMO
            </span>
          </button> */}

          <button className='loll'>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span >DEMO</span>
          </button>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center '>
      <p className='text-gray-700 font-semibold text-[1rem] mt-2 font-poppins'>TECH STACK USED</p>
      <p className='text-[#0c430e] font-semibold text-[0.8rem] font-poppins'>{props.desc}</p>
      </div>
    </div>
  )
}

export default Product
