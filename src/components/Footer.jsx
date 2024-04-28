import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer = () => {
   return (
      <footer className='px-3 mt-20 '>
         <div className="flex justify-between pt-12 border-t-2 border-[#48D6D7] ">
            <p className="text-gray-500">&copy; Copyright 2024 Transisi</p>
            <div className="flex gap-3 items-center">
               <FaInstagram className='text-xl' />
               <LiaLinkedin className='text-2xl' />
               <TiSocialFacebookCircular className='text-2xl' />
            </div>
         </div>
      </footer >
   )
}

export default Footer