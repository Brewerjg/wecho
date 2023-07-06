import React from 'react'
import {TfiEmail} from 'react-icons/tfi'
import {BsChatRightText} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className=' w-full z-10  p-4 bg-[#e4e4e4]' >
        <div className='flex justify-center mt-10 mb-10'>
            <h1 className='text-4xl font-bold'>Contact Us</h1>
        </div>
        <div className='flex justify-center gap-10'>
            <a href="">
            <h3 className='flex justify-around rounded-full gap-4 p-4 hover:scale-110 text-white bg-[#0b57a3] '><TfiEmail className='m-1'/>Click to Email</h3>
            </a>
            
            <a href="">
            <h3 className='flex justify-around gap-4 rounded-full p-4 hover:scale-110 text-white bg-[#0b57a3] '><BsChatRightText className='m-1'/>Click to Chat</h3>
            </a>
            <a href="">
            <h3 className='rounded-full p-4 hover:scale-110 text-white bg-[#0b57a3] '>Text to TALKNOW to 55678</h3>
            </a>
        </div>
        <div className=' m-4 flex justify-center'>
            <h3>Customer Support Hours: Monday-Friday 7:30 AM-8:00 PM CT | Saturday 9:00 AM-8:00 PM</h3>
        </div>
        <div className='flex justify-center m-4'>
            <h1 className='text-4xl font-bold'>Call: (800) 903-0508</h1>
        </div>
    </div>
  )
}

export default Contact