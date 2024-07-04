import React from 'react'
import Button from './Button'

import { bego, traktor } from '../assets'
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaArrowDown } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";

const Hero = () => {
   return (
      <div id='beranda' className='w-full h-full relative'>
         <img
            src={bego}
            className='object-cover h-full w-full'
            alt=""
         />

         <div className="absolute w-full h-full bg-black opacity-80 top-0 z-10"></div>

         <div className=" overflow-x-hidden">
            <div className="absolute z-40 top-24">
               <p className="bg-[hsla(164,95%,60%,0.1)] text-[#39FAC5] text-start max-w-md  px-5 py-3 md:pl-[93px]">
                  HALO, KAMI ADALAH
                  TRANSISI
               </p>
               <div className="flex flex-row text-white bg-[rgba(57,250,197,0.2)] py-4 text-4xl max-w-2xl relative px-5">
                  <div className="hidden md:block md:flex h-12 gap-0.5 mr-3 items-center ">
                     <FiMonitor className='text-[#48D6D7]' />
                     <AiOutlineMobile className='text-lg text-[#48D6D7]' />
                  </div>
                  <h1 className="font-bold leading-10 title-hero shadow-hero">
                     Penyedia Solusi Aplikasi Enterprise Untuk Industri Pertambangan.
                  </h1>
               </div>

               <div className="px-5 my-14 md:pl-[93px] z-40">
                  <Button>
                     <a href="#profil">Kenali Kami Lebih Lanjut</a>
                     <FaArrowDown />
                  </Button>
               </div>
            </div>
         </div>

         <div className="flex w-full justify-between absolute top-0 bottom-6  z-30 ">
            <div className="flex flex-col justify-end gap-6 pl-5 z-40 items-center">
               <a href="https://www.instagram.com/zalepik.dev/">
                  <FaInstagram className='text-3xl text-white font-semibold cursor-pointer' />
               </a>
               <a href="https://www.linkedin.com/company/zalepik-studio/">
               <LiaLinkedin className='text-4xl text-white cursor-pointer' />
               </a>
               <a href="https://web.facebook.com/ZalepikStudio?locale=id_ID">
                  <TiSocialFacebookCircular className='text-4xl text-white cursor-pointer' />
               </a>
            </div>
            <div className="absolute bottom-6  right-0">
               <img
                  src={traktor}
                  className=' object-contain '
                  alt=""
               />
            </div>
         </div>
      </div>
   )
}

export default Hero