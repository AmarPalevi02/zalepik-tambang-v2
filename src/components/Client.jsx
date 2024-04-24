import React from 'react'
import { clients } from '../constans/clients'
const Client = () => {
   return (
      <div id='klient' className='w-full px-3 md:mt-20'>
         <div className="bg-gray-50 py-20 rounded-xl">
            <div class="w-full relative flex justify-center  ">
               <div class="w-[650px]  text-center  relative z-10">
                  <p class="text-[#39FAC5] mb-2">K L I E N K A M I</p>
                  <h1 class="text-black sm:text-xl md:text-4xl font-bold bg-[rgba(57,250,197,0.2)] px-5 py-3 shadow-hero ">Siapa Saja Yang Sudah Bekerja Sama Dengan Kami</h1>
               </div>
               <div class="w-[90%] h-2 bg-[#48D6D7] absolute top-[55%]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2">
               {clients.map((client, i) => {
                  return (
                     <div className="">
                        <img src={client.logo} alt="" />
                     </div>
                  )
               })}
            </div>

            <h1 class="text-center text-more text-white">D A N L A I N N Y A</h1>
         </div>
      </div>
   )
}

export default Client