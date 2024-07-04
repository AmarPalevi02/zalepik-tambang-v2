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
               <a href="https://www.instagram.com/zalepik.dev/">
                  <FaInstagram className='text-xl  cursor-pointer' />
               </a>
               <a href="https://www.linkedin.com/company/zalepik-studio/">
                  <LiaLinkedin className='text-2xl cursor-pointer' />
               </a>
               <a href="https://web.facebook.com/ZalepikStudio?locale=id_ID">
                  <TiSocialFacebookCircular className='text-2xl cursor-pointer' />
               </a>
            </div>
         </div>
      </footer >
   )
}

export default Footer