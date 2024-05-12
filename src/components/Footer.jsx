import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiCodechef } from "react-icons/si";



const Footer = () => {
  return (
    <>
    <div className='bg-slate-950 text-gray-400 md:h-[140px] max-w-[100vw] p-4 md:px-auto  md:flex md:flex-col md:justify-between md:items-center' >
       

      <div className='flex justify-center px-auto '>
       <a href="https://github.com/Garimas10u/"><FaGithub  size={40}  className=' mx-4 md:mx-8' /></a>
  
       <a href="https://x.com/garimasingh10u/"><FaXTwitter size={40}  className='mx-4 md:mx-8'/></a>
       <a href="https://www.codechef.com/users/garima_010"><SiCodechef size={40}  className='mx-4 md:mx-8'/></a>
          
      </div>
      <div>
      <p className='flex items-center justify-center py-1'><MdOutlineMail size={20} /> <div className='pl-2'>garimasingh10u@gmail.com</div></p>
        <p className='text-center'>Garima Singh | Portfolio@2024</p>
        
      </div>
   
       
    </div>  
    </>
   
  )
}

export default Footer