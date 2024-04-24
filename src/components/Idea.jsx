import React from 'react'
import { GoPaperAirplane } from "react-icons/go";
import { bego2 } from '../assets'

const Idea = () => {
   return (
      <div className='w-full relative px-3 mt-20 '>
         <div className="flex flex-col justify-center items-center bg-black rounded-xl py-12">
            <div class="w-full relative flex justify-center  ">
               <div class="w-[650px]  text-center  relative z-10">
                  <p class="text-[#39FAC5] mb-2">PUNYA IDE HEBAT UNTUK KEHIDUPAN?</p>
                  <h1 class="text-white sm:text-xl md:text-4xl font-bold bg-[rgba(57,250,197,0.2)] px-5 py-3 shadow-custom ">Mari
                     Ceritakan Ide Anda, Dan Mari Membangun Sesuatu Yang
                     Hebat.</h1>
               </div>
               <div class="w-[90%] h-2 bg-[#48D6D7] absolute top-[55%]"></div>
            </div>

            <div className="my-14">
               <button className="bg-[#39FAC5] text-white leading-4 flex items-center px-3 py-4 rounded-xl gap-2 text-start">
                  Mari Kembangkan
                  <br />
                  Project Bersama
                  <GoPaperAirplane className='text-xl fornt-bold' />
               </button>
            </div>

            <img src={bego2} alt="" />
         </div>
      </div>
   )
}

export default Idea