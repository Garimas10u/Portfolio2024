import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongo2.png'
import express from '../assets/Expressjs.png'
import github from '../assets/github.png'
import git from '../assets/git1.png'

import cpp from '../assets/cpp.png'
import clang from '../assets/Clang.png'
import python from '../assets/python.png'
import postman from '../assets/postman.jpg'
import firebase from '../assets/firebase.png'
import bootstrap from '../assets/bootstrap.png'



const Skills = () => {
  return (
    <>
         <h2 className='text-pink-600 md:h-[100px] max-w-[1200px] mx-auto bg-slate-900 text-3xl md:text-5xl font-bold py-4 text-center '>My Tech Stack</h2>
        <div className='bg-slate-900 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center' >
       

        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={html} alt="" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={css} alt="" />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={js} alt="" />
            <p className='mt-2'>Javascript</p>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={react} alt="" />
            <p className='mt-2'>React</p>
        </div>
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={bootstrap} alt="" />
            <p className='mt-2'>Bootstrap</p>
        </div>
        
   
    </div>
    <div className='bg-slate-900 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center'>
  
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={tailwind} alt="" />
            <p className='mt-4'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={node} alt="" />
            <p className='mt-10'>NodeJs</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[140px] '>
            <img src={express} alt="" />
            <p className='mt-14'>Expressjs</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[101px] '>
            <img src={mongodb} alt="" />
            <p className='mt-4'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center  md:m-4 sm:my-0 w-[60px] md:w-[90px] '>
            <img src={cpp} alt="" />
            <p className='mt-2'>C++</p>
        </div>
       
    </div>
    <div className='bg-slate-900 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center' >
        
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={git} alt="" />
            <p className='mt-2'>Git</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={github} alt="" />
            <p className='mt-2'>Github</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[100px] '>
            <img src={firebase} alt="" />
            <p className='mt-2'>Firebase</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[90px] '>
            <img src={clang} alt="" />
            <p className='mt-2'>C </p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[90px] '>
            <img src={python} alt="" />
            <p className='mt-2'>Python </p>
        </div>
       
        
   
    </div>
  


    </>

  )
}

export default Skills

