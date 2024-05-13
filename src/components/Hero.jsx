import React from 'react'
import heroimage from "../../src/assets/GarimaProfile.png" 
import {TypeAnimation} from "react-type-animation";
import resume from '../../src/assets/'


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[100vw] md:h-[70vh] py-8 px-5 bg-slate-900 md:pb-11' >
        <div className=' col-span-1 my-auto h-auto md:w[500px]'>
            <img src={heroimage} alt="heroimage"  />
        </div>
        <div className='col-span-2 px-5 my-auto '>
        <h1 className='text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold'>
            <span className='text-slate-200'> I am a </span> <br />
            <TypeAnimation className='text-pink-600'
            sequence={
                ["Web Developer", 1000, "Programmer", 1000, "Tech Enthusiast", 1000,]
            }
            wrapper="span"
            speed=
            {60}
            repeat=
            {Infinity} />
 
        </h1>

        <p className='text-white sm:text-lg my-6 lg:text-xl md:mr-8'>
          My name is Garima and I specialize in DSA problem solving using C++. I also enjoy building websites with MERN stack. Looking forward to exploring more opportunites and foster new connections.
        </p>
        <div className='my-8 '>
          <a href={resume} download="resume" className='px-6
          py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-pink-500 to-pink-900 text-white'>Resume</a>

          <a href="https://www.linkedin.com/in/garimasingh10u/" className="px-6
          py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-pink-500 to-pink-900 text-white hover:border-none">LinkedIn</a>
        </div>
        
          
        

        </div>
   
    </div>
  )
}

export default Hero