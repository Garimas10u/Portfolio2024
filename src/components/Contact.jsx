import React from 'react'


const Contact = () => {
  return (
    <div className='max-w-[100vw] bg-slate-900 sm:py-20 p-5' id='contact'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight text-pink-600 '>Contact Me</h2>
        </div>
        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 rounded-xl bg-gray-700'>
                <div className='p-10 '>
                    <form action="https://getform.io/f/paqgymja" method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div>
                                <div className='mt-2.5 relative '> 
                                <input type="text" name='name' id='namein' placeholder='Your Name' className='bg-[#161616] w-full px-4 text-gray-400 border border-gray-700 rounded-md h-12 hover:bg-slate-950 focus:outline-none focus:border-pink-600' /></div>
                            </div>
                            <div>
                                <div className='mt-2.5 relative'> 
                                <input type="email" name='mail' id='mailin' placeholder='Your Email' className='bg-[#161616] w-full px-4 text-gray-400 border border-gray-700 rounded-md h-12 hover:bg-slate-950 focus:outline-none focus:border-pink-600' /></div>
                            </div>
                            <div className='sm:col-span-2'>
                                <div className='mt-2.5'>
                                <textarea name='message' id='messagein' placeholder='Your Message' className='bg-[#161616] w-full px-4 text-gray-400 border border-gray-700 rounded-md  hover:bg-slate-950 focus:outline-none  focus:border-pink-600 ' rows="6"  />
                                </div>
                            </div>
                            <div className='sm:col-span-2'>
                                <button type="submit" className='text-xl w-full p-2 mt-2 font-semibold text-white h-12 text-justify-center text-center bg-gradient-to-br from-pink-500 to-pink-900   rounded-md hover:bg-pink-950'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact