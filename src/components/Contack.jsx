import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";

const Contack = () => {
   return (
      <div id='kontak' className='w-full mt-20'>
         <div className="flex flex-col justify-center text-center w-full mb-24">
            <p className="text-[#39FAC5] mb-8">K O N T A K</p>
            <div className="flex justify-center relative ">
               <h1 className="text-black md:text-4xl font-bold bg-[rgba(57,250,197,0.2)] md:hidden px-20 md:px-60 py-3  relative">
                  Hubungi kami.</h1>
               <h1 className="hidden text-black md:text-4xl font-bold bg-[rgba(57,250,197,0.2)] px-20 md:block md:px-60 py-3 text-contack relative">
                  Hubungi kami.</h1>
            </div>
            <div className="w-full flex justify-center items-center">
               <p className="text-gray-500 text-md md:w-6/12 ">Ceritakan ide tentang project Anda melalui <span
                  className="text-[#39FAC5]">email</span> di bawah atau melalui <span className="text-[#39FAC5]">form</span> ,
                  dan kami akan segera menghubungi Anda untuk berdiskusi terkait apa yang dapat kita lakukan bersama.</p>
            </div>
         </div>

         <div className="w-full relative px-3">
            <div className="bg-[#39FAC5] w-full rounded-xl py-16">
               <div className="flex flex-col justify-center gap-5 items-center md:flex-row md:gap-80">
                  <div className="max-w-md ">
                     <h1 className="mb-2 font-semibold">Kantor Yogyakarta</h1>
                     <p className="max-w-60 text-gray-500">Jalan Pintu Selatan UPN No 2A Caturtunggal, Depok, Sleman Yogyakarta
                     </p>
                  </div>
                  <div className="max-w-md ">
                     <h1 className="mb-2 font-semibold">Kantor Jakarta</h1>
                     <p className="max-w-60 text-gray-500">Cibis Nine Building Lantai 11 Jl. TB Simatupang No. 2 Jakarta Selatan
                     </p>
                  </div>
               </div>

               <div className="flex flex-col w-full justify-between px-6 mt-16 gap-2 md:flex-row">
                  <div className="w-full  py-20 flex justify-center bg-white rounded-xl">
                     <div className="">
                        <h1 className="gap-2 font-bold mb-2 flex">
                           <HiOutlineMailOpen className='text-xl font-bold' />
                           Sapa Kami
                        </h1>
                        <h1 className="text-xl font-bold text-[#48D6D7] md:text-4xl">Hello@transisi.id</h1>
                     </div>
                  </div>

                  <div className="w-full  py-20 flex justify-center bg-black rounded-xl">
                     <div className="">
                        <h1 className="gap-2 font-bold mb-2 text-white">
                           <i className="fa-regular fa-paper-plane"></i>
                           Mulai ide Hebat Bersama
                        </h1>
                        <h1 className="text-xl font-bold text-[#48D6D7] md:text-4xl">Let’s Talk Amazing Project</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contack