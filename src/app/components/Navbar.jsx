"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to control menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle the menu
  };

  return (
    <div>
        <div className='grid lg:grid-cols-3 grid-cols-2  md:grid-cols-2 justify-center items-center mt-8'>
            <div className=' text-center text-2xl font-semibold'>
              <Link href="/">Restaurent</Link>
            </div>
           
            <div className='text-center hidden lg:block '>
              <div className='grid grid-flow-col list-none grid-cols-5 sm:grid-cols-5 md:grid-cols-5'>
              <Link href="/"><li className='hover:cursor-pointer  hover:text-gray-500'>Home</li></Link>
                <Link href="Menu"><li className='hover:cursor-pointer  hover:text-gray-500'>Menu</li></Link>          
                <li className='hover:cursor-pointer hover:text-gray-500'>Gallery</li>
                <li className='hover:cursor-pointer hover:text-gray-500'>About</li>
                <li className='hover:cursor-pointer hover:text-gray-500'>Contact</li>
              </div>
            </div>
           
            <div className="flex items-center justify-center">
              {/* Hamburger menu for small screens */}
              <IoMenu 
                size={50} 
                className="block lg:hidden hover:cursor-pointer" 
                onClick={toggleMenu} // On click, toggle the menu state
              />

              {/* "Book Table" button - visible only on larger screens */}
              <Link href="login">
                <button className="hidden lg:block w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-2xl rounded-xl text-white">
                  Login
                </button>
              </Link>
            </div>
        </div>

        {/* Dropdown menu for small screens */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} text-end  mt-4 `}>
          <ul className="flex flex-col text-xl items-center bg-gray-200 gap-6">
          <li className="hover:cursor-pointer hover:text-gray-500"><Link href="/">Home</Link></li>
            <li className="hover:cursor-pointer hover:text-gray-500"><Link href="">Menu</Link></li>
           
            <li className="hover:cursor-pointer hover:text-gray-500">Gallery</li>
            <li className="hover:cursor-pointer hover:text-gray-500">About</li>
            <li className="hover:cursor-pointer hover:text-gray-500">Contact</li> 
            <hr />
            <li className="hover:cursor-pointer hover:text-gray-500 mb-4"><Link href="login">log in</Link></li>
            

          </ul>
        </div>
    </div>
  );
}

export default Navbar;
