import React from 'react'
import aboutimg from '../assets/about2.jpg'

const about = () => {
  return (
   <div className='text-white max-w-[1200px] mx-auto  bg-slate-900 py-12' id='about'  >
    <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left md:flex md:space-between'>
            <div className='my-auto mx-6'>
                <h2 className='text-3xl md:text-5xl text-center font-bold mb-4 text-pink-600'>About Me</h2>
                <p className='text-base lg:text-lg text-white'>
                👋 Hello! I'm Garima, an Information Technology student pursuing my Bachelor's degree. For the passion of programming, I solve DSA problems on platforms like GeeksforGeeks and LeetCode trying to write clean and efficient code. <br />
                💻 As a MERN developer, I specialize in creating user-friendly web applications that blend functionality with seamless user experiences. I am dedicated to acquiring and incorporating new skills into my skill set. <br />
                🌱 I keep seeking new opportunities and exploring industry trends to expand my horizons and collaborate with like-minded individuals. Let us connect to discuss projects, share ideas, or explore potential collaborations.   
                </p>
            </div>
          
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0 ' src={aboutimg} alt="aboutimage" width={300} height={300}
             />
    </div>
   </div>

  )
}

export default about