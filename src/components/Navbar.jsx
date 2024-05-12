import React , {useState} from 'react'
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const[nav, setNav]=useState(false)
    const [isOpen, setOpen] = useState(false)
    
    const handleNav=() => {
        setNav(!nav)
    }
  return (
    <div className='bg-slate-900 text-gray-400 h-[100px] max-w-[100vw] px-4 md:px-16 flex  justify-between items-center'>
        <h1 className='text-2xl md:text-3xl font-bold text-pink-600 ml-4'>Garima Singh</h1>
        <ul className='hidden md:flex text-xl'>
            <li className='p-5'><a href="#about">About</a></li>
            <li className='p-5'><a href="#work">Projects</a></li>
            <li className='p-5'><a href="#contact">Contact</a></li>
            
        </ul>
        
        <div onClick={handleNav}  className='block md:hidden m-6'>
            {
                        
                <Hamburger toggled={isOpen} toggle={setOpen} />
                

            }
        </div>
        <div className={nav? ' z-10 fixed h-[50%] right-0 top-0 w-[50%] bg-[#c4185afa]  ease-in-out duration-0' : 'fixed left-[-100%]'}>
            <div className='flex p-4 justify-end'>
            
            <ul className='p-8 text-2xl text-white '>
               
                <li className='p-2'><a href="#about">About</a></li>
                <li className='p-2'><a href="#work">Projects</a></li>
                <li className='p-2'><a href="https://github.com/Garimas10u/">Github</a></li>
                <li className='p-2'><a href="#contact">Contact</a></li>
                
            </ul>
            <div onClick={handleNav}> <Hamburger toggled={isOpen} toggle={setOpen} /> </div>
           
            </div>
            
        </div>
    </div>
  )
}

export default Navbar