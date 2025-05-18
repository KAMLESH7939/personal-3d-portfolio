import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from 'react';
import Fox from '../Models/Fox';
import Loader from '../Components/Loader';
import { OrbitControls } from "@react-three/drei"
import useAlert from "../hooks/useAlert";
import Alert from "../Components/Alert";
import Footer from "../Components/Footer";
import vedioBGG from '../assets/vedioBGG.mp4'
import vedioBGD from '../assets/vedioBGD.mp4'
import vedio from '../assets/vedio.mp4'
import ved01 from '../assets/ved01.mp4'
import ved02 from '../assets/ved02.mp4'
import ved03 from '../assets/ved03.mp4'
import ved04 from '../assets/ved04.mp4'
import ved05 from '../assets/ved05.mp4'
import ved06 from '../assets/ved06.mp4'
import { useGSAP } from '@gsap/react';
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from '../Components/MagicButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import gsap from 'gsap';
import sakura from '../assets/sakura.mp3'
import CanvasCursor from '../Components/CanvasCursor .jsx';





const Contact = () => {


  const hd3 =  useRef();
  const hd4 =  useRef();


  useGSAP(()=>{
    gsap.from(hd3.current,{
          x: -350,
          duration:2,
          opacity:0,
          ease: "circ.out"
    })
  })
  useGSAP(()=>{
    gsap.from(hd4.current,{
      x: 350,
      duration:2,
      opacity:0
    })
  })

  // useGSAP(()=>{
  //   gsap.from(hd5.current,{
  //     y:50,
  //     duration:2,
  //     opacity:0
  //   })
  // })



  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();








  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "KAMLESH",
        from_email: form.email,
        to_email: 'kamleshguru2611@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({
        show: true, text: 'Message sent successfully!', type: 'success'
      })
      //TODO: hide alert
      setTimeout(() => {
        setCurrentAnimation('idle');
        setForm({ name: "", email: "", message: "" });
        hideAlert();
      }, [3000])
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({
        show: true, text: 'I didnt receive your message', type: 'danger'
      })
    })



  };

  if (window.innerWidth < 768) {
    return (
      <section className="relative w-full h-screen " >

        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
        <section className="absolute top-0 left-0 w-full h-full">
          <section className='relative flex lg:flex-row flex-col max-container gap-10 '>
            {alert.show && <Alert {...alert} />}

            <div ref={hd3} className='flex-1 min-w-[50%] flex flex-col'>
              <h1 className='head-text text-white'><span className="text-[2.5rem] font-poppins honey">Get In</span> <span className="text-happy text-[2.8rem] font-poppins">Touch</span>  </h1>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='w-full flex flex-col gap-8 mt-14'
              >
                <label className='text-white font-semibold font-poppins'>
                  Name
                  <input
                    type='text'
                    name='name'
                    className='input'
                    placeholder='John'
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>
                <label className='text-white font-semibold font-poppins'>
                  Email
                  <input
                    type='email'
                    name='email'
                    className='input'
                    placeholder='John@gmail.com'
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>
                <label className='text-white font-semibold font-poppins'>
                  Your Message
                  <textarea
                    name='message'
                    rows='4'
                    className='textarea'
                    placeholder='Write your thoughts here...'
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>

                <button
                  type='submit'
                  disabled={isLoading}
                  className='btn'
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
              <Canvas
                camera={{
                  position: [0, 0, 5],
                  fov: 75,
                  near: 0.1,
                  far: 1000
                }}
              >
                <directionalLight position={[0, 0, 1]} intensity={2.5} />
                <ambientLight intensity={0.5} />
                {/* <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}s
            penumbra={1}
            intensity={2}
          /> */}

                <Suspense fallback={<Loader />}>
                  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} enablePan={false} />
                  <Fox
                    position={[0.5, 0.35, 0]}
                    rotation={[12.629, -0.6, 0]}
                    scale={[0.5, 0.5, 0.5]}
                    currentAnimation={currentAnimation}
                  />
                </Suspense>
              </Canvas>
            </div>
          </section>
          <div className="relative w-full h-[30%] mt-[-1rem]">
            <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
            <section className="absolute xs:left-[20%] md:left-[40%] top-[10%] left-[18%]">
              <div className='big'>
                FIND ME <span className='text-happy font-poppins ml-4'>  ON</span>
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
      </section>
    )
  }

  else if (window.innerWidth > 768 && window.innerWidth < 1300) {
    return (
      <section className="relative w-full h-screen ">
        <CanvasCursor/>
        <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
        <video src={vedioBGG} loop autoPlay muted className='w-full h-[60%] object-cover ' />
        {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' /> */}
        <section className="absolute top-0 left-0 w-full h-full">
          <section className='relative flex lg:flex-row flex-col max-container gap-10 '>
            {alert.show && <Alert {...alert} />}

            <div className='flex-1 min-w-[50%] flex flex-col'>
              <h1 className='head-text text-white'><span className="text-[2.5rem] font-poppins honey">Get In</span> <span className="text-happy text-[2.9rem] font-poppins">Touch</span>  </h1>


              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='w-full flex flex-col gap-5 mt-14'
              >
                <label className='text-white font-semibold font-poppins'>
                  Name
                  <input
                    type='text'
                    name='name'
                    className='input'
                    placeholder='John'
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>
                <label className='text-white font-semibold font-poppins'>
                  Email
                  <input
                    type='email'
                    name='email'
                    className='input'
                    placeholder='John@gmail.com'
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>
                <label className='text-white font-semibold font-poppins'>
                  Your Message
                  <textarea
                    name='message'
                    rows='4'
                    className='textarea'
                    placeholder='Write your thoughts here...'
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </label>

                <button
                  type='submit'
                  disabled={isLoading}
                  className='btn'
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            <div ref={hd4} className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
              <Canvas
                camera={{
                  position: [0, 0, 5],
                  fov: 75,
                  near: 0.1,
                  far: 1000
                }}
              >
                <directionalLight position={[0, 0, 1]} intensity={2.5} />
                <ambientLight intensity={0.5} />
                {/* <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}s
              penumbra={1}
              intensity={2}
            /> */}

                <Suspense fallback={<Loader />}>
                  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} enablePan={false} />
                  <Fox
                    position={[0.5, 0.35, 0]}
                    rotation={[12.629, -0.6, 0]}
                    scale={[0.5, 0.5, 0.5]}
                    currentAnimation={currentAnimation}
                  />
                </Suspense>
              </Canvas>
            </div>

          </section>

          <div className="relative w-full h-[30%] mt-[-1rem]">
            <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
            <section className="absolute xs:left-[20%] md:left-[40%] top-[10%] left-[18%]">
              <div className='big'>
                FIND ME <span className='text-happy font-poppins ml-4'>  ON</span>
              </div>
              <p className='text-white text-center mt-2 mb-5'>© 2024 Kamlesh-All Rights Reserved.</p>
              <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
                <a href='https://github.com/KAMLESH7939'><FaGithub className='h-10 w-10 text-white abc hello' /></a>
                <a href='https://www.linkedin.com/in/kamlesh-b08306259/'><FaLinkedin className='h-10 w-10 text-white abc hello' /></a>
                <FaInstagram className='h-10 w-[4rem] text-white abc  hello' />
              </div>
            </section>

          </div>
        </section>
      </section>
    )
  }

  return (
    <section className="relative w-full h-screen ">
    
      <CanvasCursor/>
      <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' />
      {/* <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover ' /> */}
      <section className="absolute top-0 left-0 w-full h-full">
        <section className='relative flex lg:flex-row flex-col max-container gap-10 '>
          {alert.show && <Alert {...alert} />}

          <div ref={hd3} className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text text-white'><span className="text-[2.5rem] font-poppins honey">Get In</span> <span className="text-happy text-[3rem] font-poppins">Touch</span>  </h1>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='w-full flex flex-col gap-8 mt-14'
            >
              <label className='text-white font-semibold font-poppins'>
                Name
                <input
                  type='text'
                  name='name'
                  className='input'
                  placeholder='John'
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </label>
              <label className='text-white font-semibold font-poppins'>
                Email
                <input
                  type='email'
                  name='email'
                  className='input'
                  placeholder='John@gmail.com'
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}

                />
              </label>
              <label className='text-white font-semibold font-poppins'>
                Your Message
                <textarea
                  name='message'
                  rows='4'
                  className='textarea'
                  placeholder='Write your thoughts here...'
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}

                />
              </label>

              <button
                type='submit'
                disabled={isLoading}
                className='btn'
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div ref={hd4} className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000
              }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={0.5} />
              {/* <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}s
            penumbra={1}
            intensity={2}
          /> */}

              <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} enablePan={false} />
                <Fox

                  position={[0.5, 0.35, 0]}
                  rotation={[12.629, -0.6, 0]}
                  scale={[0.5, 0.5, 0.5]}
                  currentAnimation={currentAnimation}
                />
              </Suspense>
            </Canvas>
          </div>
        </section>
        <div className="relative w-full h-[30%] mt-[-1rem]">
          <video src={vedioBGG} loop autoPlay muted className='w-full h-full object-cover' />
          <section className="absolute xs:left-[20%] md:left-[40%] top-[10%] left-[18%]">
            <div className='big'>
              FIND ME <span className='text-happy font-poppins ml-4'>  ON</span>
            </div>
            <p className='text-white text-center mt-2 mb-5'>© 2024 Kamlesh-All Rights Reserved.</p>
            <div className='flex flex-row justify-center items-center gap-[4rem] mt-2'>
              <a href='https://github.com/KAMLESH7939'><FaGithub className='h-10 w-10 text-white abc hello' /></a>
              <a href='https://www.linkedin.com/in/kamlesh-b08306259/'><FaLinkedin className='h-10 w-10 text-white abc hello' /></a>
              <FaInstagram className='h-10 w-[4rem] text-white abc  hello' />
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}

export default Contact

