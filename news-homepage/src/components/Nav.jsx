import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import Logo from '../images/logo.svg'
function Nav() {
  const [nav, setNav] = useState(false)
  return (

        <div className="nav-bar flex items-center justify-between">
            <img src={Logo} alt=""  className='w-13'/>
            <nav className="links list-none hidden lg:flex hover:cursor-pointer font-Inter">
                <li className='mr-8  hover:text-red'>Home</li>
                <li className='mr-8 hover:text-red'>New</li>
                <li className='mr-8  hover:text-red'>Popular</li>
                <li className='mr-8  hover:text-red'>Trending</li>
                <li className='mr-8  hover:text-red'>Categories</li>
            </nav>
            <AiOutlineMenu  onClick = {()=> setNav(!nav)}className='flex items-center lg:hidden'  size={35}/>
            
            {nav ? <div className="bg-Very-dark-blue/80 fixed w-full h-screen z-10 top-0 right-0"></div> : ""}
<div className={nav ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
            <AiOutlineClose onClick={()=> setNav(!nav)}
            size={30} className='absolute right-4 top-4 cursor-pointer'/>
            
        <nav>
            <ul className='flex flex-col pt-40 font-semibold pl-6 leading-10 text-Very-dark-blue'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
                </ul>
        </nav>
        </div>
       

        </div>
       
      
   
  )
}

export default Nav