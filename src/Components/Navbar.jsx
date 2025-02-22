import React, { useState } from 'react'
import logo from "../assets/dollar.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] =useState(false)
    // div ta 1aad ay ku jiraan  bg-gradient-to-r from-[#0D1B2A] to-[#778DA9]
  return (
    <>
    <div className='w-full h-full absolute  '>
        <header className='flex justify-between items-center text-black py-3 px-8 md:px-32 bg-white drop-shadow-md'>
        <a href="">
            <img src={logo} alt="" className='w-8 hover:scale-105 transition-all' />
        </a>
        <ul className='hidden md:flex items-center gap-12 font-semibold text-base'>
            <Link className='p-2 hover:bg-[#0D1B2A] hover:text-white rounded-md transition-all cursor-pointer' to="/">Home</Link>
            <Link className='p-2 hover:bg-[#0D1B2A] hover:text-white rounded-md transition-all cursor-pointer' to="/About">About</Link>
            <Link className='p-2 hover:bg-[#0D1B2A] hover:text-white rounded-md transition-all cursor-pointer' to="/Product">Product</Link>
            <Link className='p-2 hover:bg-[#0D1B2A] hover:text-white rounded-md transition-all cursor-pointer' to= "/Contact">Contact</Link>
        </ul>
        <div className='relative hidden md:flex items-center justify-center gap-3'>
            <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
            <input type="text" placeholder='Search...' className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500' />
        </div>
        <div className='xl:hidden block text-5xl cursor-pointer'>
        <i className='bx bx-menu' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        </div>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`} style={{transition: "transform 0.3s ease ,opacity 0.3s ease"}}>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Product</li>
        <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
        
        </div> 
        </header>
    </div>
    </>
  )
}

export default Navbar