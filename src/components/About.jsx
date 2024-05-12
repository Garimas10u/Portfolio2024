import React from 'react'
import aboutimg from '../assets/about.jpg'

const about = () => {
  return (
   <div className='text-white max-w-[100vw]  bg-slate-900 py-12 md:py-12 lg:pt-24' id='about'  >
    <div className='md:grid md:grid-cols-2  '>
        <div className='mt-4 md:mt-0 text-left px-10 md:flex md:space-between md:px-12'>
            <div className='my-auto mx-0 md:mx-4'>
                <h2 className='text-3xl md:text-5xl text-center font-bold mb-4 text-pink-600'>About Me</h2>
                <p className='text-base lg:text-lg text-white '>
                👋 Hello! I'm Garima, an Information Technology student pursuing my Bachelor's degree. For the passion of programming, I solve DSA problems on platforms like GeeksforGeeks and LeetCode trying to write clean and efficient code. <br />
                💻 As a MERN developer, I specialize in creating user-friendly web applications that blend functionality with seamless user experiences. I am dedicated to acquiring and incorporating new skills into my skill set. <br />
                🌱 I keep seeking new opportunities and exploring industry trends to expand my horizons and collaborate with like-minded individuals. Let us connect to discuss projects, share ideas, or explore potential collaborations.   
                </p>
            </div>
          
        </div> 
        <img className='mx-auto rounded-3xl px-8 py-6' src={aboutimg} alt="aboutimage" width={550} />
        
    </div>
   </div>

  )
}

export default about