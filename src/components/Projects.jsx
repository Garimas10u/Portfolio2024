import React from 'react'
import educore from'../assets/Educore.png'
import envirocast from'../assets/Envirocast.png'
import foodeasy from'../assets/Foodeasy.png'
import pulsesync from'../assets/Pulsesync.png'
import netflicl from'../assets/netflix.png'
import tempconv from'../assets/Tempconv.png'


const Projects = () => {
  return (
    <div className='max-w-[100vw] px-16 py-5 pt-16 bg-slate-900 'id='work'>
        <div className='pb-8'>
            <p className='py-4 text-pink-600 text-3xl md:text-5xl mb-2 font-bold text-center'>My Projects</p>
            <p className='text-gray-400 text-center md:text-2xl'>Check about my projects here</p>

        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={educore} alt="" layout="fill"object-fit="cover"  />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="https://662d570b52d90f14ae907748--educore10.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={envirocast} alt="" layout="fill"object-fit="cover"  />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="https://envirocast.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={foodeasy} alt="" layout="fill"object-fit="cover"  />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="garimas10u.github.io/Foodeasy/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={netflicl} alt="" layout="fill" object-fit="cover"  />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="https://garimas10u.github.io/Netflix-Clone/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={pulsesync} alt="" layout="fill" object-fit="cover"  />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="https://pulsesync.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover shadow-lg shadow-[
            #040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative my-4'>
                <img src={tempconv} alt="" layout="fill" object-fit="contain" />
                <div className='opacity:0 group-hover:opacity-90 bg-[gray]/50 absolute inset-0 flex flex-col justify-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center '>
                        <a href="https://garimas10u.github.io/Temperature-Converter/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects