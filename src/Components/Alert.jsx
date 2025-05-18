import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const Alert = ({ type, text }) => {
    const side=useRef();

    useGSAP( () => {


        var tl = gsap.timeline();
        tl.from(side.current, {
            top:0,
            opacity: 0,
            duration: 0.6
        })      
       })
    return (
      <div className='absolute top-[6.8rem] left-0 right-0 flex justify-center items-center' ref={side}>
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
          role='alert'
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className='mr-2 text-left'>{text}</p>
        </div>
      </div>
    );
  };
  
  export default Alert;
