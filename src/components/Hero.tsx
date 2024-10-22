import React from 'react'
import Navbar from './Navbar';
const Hero = () => {
  return (
    
  <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/htpic2.png)]  bg-right lg:bg-[75%] bg-cover'
    style ={{backgroundSize: "25%"}}
    >
       <Navbar />
      
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      
       <div className='text-[65px] flex justify-center items-center'>
        <div data-aos="zoom-in-up" className='hover:text-[orange] hover:underline'>
          <p>I'm</p>
          <p>RIZWANA</p>
          <p>PERVEEN</p></div>
          </div>
      </div>
    </div>
  )
}

export default Hero