import React from 'react'
import Cablewhite from '../images/lynxwhite.webp'

const Footer = () => {
  return (
    <div className='z-10 w-full h-[250px] flex justify-around items-center px-4  bg-[#0b57a3] text-white '>

        {/* Logo */}
        <div>
            <a href="https://www.cablelynx.com/">
            <img className='rounded-full scale-125' src={Cablewhite} alt="intial"  />
            </a>
        </div>
        

    </div>
  )
}

export default Footer