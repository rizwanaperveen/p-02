import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
           <div className='text-xl font-medium'>
           </div>
           <ul className='gap-10 lg:gap-16 hidden md:flex text-2xl'>
           <h1 data-aos="zoom-in-up" className='bg-left-top text-xl lg:text-xl mr-40 mt-2 bg-red-800 rounded-lg'>WELCOME TO MY PORTFOLIO</h1>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
            
           </ul>
           <AiOutlineMenu size={30} color='#fff' />
        </div>
    </div>
  )
}

export default Navbar