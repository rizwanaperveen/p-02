import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
function Contact() {
  return (
    <div id="contact" className='p-2 container text-center h-full w-full hover:text-[orange] hover:underline'>
        <div className='gap-8'>
        <div data-aos="zoom-in-up" className='space-y-8'>
            <h2 className='text-5xl'>Contact</h2>
            <p className='text-white text-[18px] pt-1'>
          Drop me a line, give me a call or Drop me a message.
          </p>
          <div className='flex gap-3 text-center items-center'>
            <AiOutlineMail size={30} /> rizwanaperveen9020@gmail.com
            </div> 
            <div className='flex gap-3'>
            <BsTelephone size={30} items-center/> 03122229020
            </div>
        </div>
           <div className='space-y-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-gray-400 p-2 rounded-lg' id="name" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-gray-400 p-2 rounded-lg'
                id="email" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea className='bg-transparent border border-gray-400 p-2 rounded-lg'
                id="msg" rows-={8}>
                </textarea>
            </div>
            <button className='bg-[#ffa500] p-2 px-6 rounded-lg'>Send</button>
           </div>
    </div>
    
    </div>
  )
}

export default Contact