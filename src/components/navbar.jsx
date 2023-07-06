import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FcList, FcRedo} from 'react-icons/fc'
import Cablewhite from "../images/lynxwhite.webp"

const  Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [menu, setMenu] = useState(false)
    const handleMenu = () => setMenu(!menu)

  return (
    <div className='z-10 fixed w-full h-[160px] flex justify-around items-center px-4  bg-[#2e2e2e] text-white '>

        {/* Logo */}
        <div>
            <a href="https://www.cablelynx.com/">
            <img className='rounded-full scale-125' src={Cablewhite} alt="intial"  />
            </a>
        </div>
        <div className=''>
            <ul className='gap-20 text-2xl hidden md:flex '>
                <li className='bg-[#0b57a3] p-3 rounded-md hover:scale-110'>
                    <a href="https://www.cablelynx.com/">Home</a>
                </li>
                <li className='bg-[#0b57a3] p-3 rounded-md hover:scale-110'>
                    <a href="https://www.cablelynx.com/broadband">Residential Services</a>
                </li>
                <li className='bg-[#0b57a3] p-3 rounded-md hover:scale-110'>
                    <a href="https://www.cablelynx.com/business-services">Business Services</a>
                </li>
                <li className='bg-[#0b57a3] p-3 rounded-md hover:scale-110'>
                    <a href="https://www.cablelynx.com/support">Support</a>
                </li>
            </ul>
            <div onClick={handleMenu} className='mt-2 p-3 rounded-lg w-36 ml-40 flex justify-center hidden:md z-10'>
                    {!nav ? <FcList size={32}/> : <FcRedo/>}
            </div>
        </div>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        <ul className={!menu ? 'hidden' : 'absolute top-40 left-100 w-[30%] h-screen text-white bg-transparent flex flex-col justify-start items-center'}>
            <li className='bg-[#0b57a3] shadow-black shadow-lg p-3 my-3 rounded-full hover:scale-110 py-6 text-2xl'>
                <a href="https://secure.wehcovideo.com/feature/login/default.aspx?path=/Default.aspx">My Account</a>
            </li>
            <li className='bg-[#0b57a3] shadow-black shadow-lg my-3 p-3 rounded-full hover:scale-110 py-6 text-2xl'>
                <a href="https://webmail.cablelynx.com/login.php">Cablelynx Email</a>
            </li>
            <li className='bg-[#0b57a3] shadow-black shadow-lg my-3 p-3 rounded-full hover:scale-110 py-6 text-2xl'>
                <a href="https://www.cablelynx.com/speed-test">Speed Test</a>
            </li>
            <li className='bg-[#0b57a3] shadow-black shadow-lg my-3 p-3 rounded-full hover:scale-110 py-6 text-2xl'>
                <a href="https://www.cablelynx.com/">Click to Chat</a>
            </li>
        </ul>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-black bg-gradient-to-r from-[#0b57a3] via-[#0b57a3] to-[#ffffff] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <a href="https://www.cablelynx.com/">Home</a>
            </li>
            <li className='py-6 text-4xl'>
                <a href="https://www.cablelynx.com/broadband">Residential Services</a>
            </li>
            <li className='py-6 text-4xl'>
                <a href="https://www.cablelynx.com/business-services">Business Services</a>
            </li>
            <li className='py-6 text-4xl'>
                <a href="https://www.cablelynx.com/support">Support</a>
            </li>
        </ul>

    </div>
  )
}

export default Navbar
