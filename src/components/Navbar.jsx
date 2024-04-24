import React, { useState } from 'react'
import Button from './Button';

import { RxHamburgerMenu } from "react-icons/rx";
import { logo } from '../assets'
import { menuNavbar } from '../constans/navbar'
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

const Navbar = () => {
   const [togle, setTogle] = useState(false)
   return (
      <nav className='flex  justify-between px-2 py-2  fixed z-50 w-full top-3 items-center '>
         <div className="flex justify-between w-full items-center bg-black px-3 py-2 rounded-xl border-bottom-nav ">
            <div className="w-24 h-auto">
               <img
                  className='mt-2'
                  src={logo}
                  alt="logo"
               />
            </div>

            <div className="md:hidden">
               {togle ? (
                  <IoCloseSharp onClick={() => setTogle(!togle)} className='text-white text-xl font-bold' />
               ) : (
                  <RxHamburgerMenu onClick={() => setTogle(!togle)} className='text-white text-xl font-bold' />
               )
               }
            </div>

            <div className="hidden md:block">
               <ul className='flex gap-10'>
                  {menuNavbar.map((item, i) => {
                     return (
                        <li key={i} className='text-white'>{item.menu}</li>
                     )
                  })}
               </ul>
            </div>

            <div className="hidden md:block">
               <Button >
                  hello@transisi.id
                  <HiOutlineMailOpen />
               </Button>
            </div>

            <div className={`${togle ? "flex" : "hidden"} p-6 bg-black-gradient fixed z-50 top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
               {togle ? (
                  <div className='w-12 h-24 relative flex justify-center'>
                     <ul className="mt-[-6px]">
                        {menuNavbar.map((item, i) => {
                           return (
                              <ul key={i}>
                                 <li className='text-white'>{item.menu}</li>
                              </ul>
                           )
                        })}
                     </ul>
                  </div>
               ) : (
                  ""
               )}
            </div>
         </div>
      </nav>
   )
}

export default Navbar