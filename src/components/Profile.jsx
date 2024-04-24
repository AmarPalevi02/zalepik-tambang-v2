import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { handpone } from '../assets'
import { team, logo2 } from '../assets'

const Profile = () => {
   return (
      <div id='profil' classNameName='w-full h-full'>
         <div classNameName="flex w-full flex-col items-center ">
            <div className="flex flex-col md:flex-row md:justify-between ">
               <div className="flex flex-col justify-center bg-black py-4 md:w-[50%]">
                  <p className="text-[#39FAC5] px-8">P R O F I L</p>
                  <div className="bg-[rgba(57,250,197,0.2)] w-full my-3">
                     <div className=" flex items-center py-2  gap-2 relative title-profile z-10 text-white px-8 ">
                        < MdWavingHand className='text-7xl my-auto text-bold shadow-hero' />
                        <h1 className="text-3xl font-bold shadow-hero max-w-sm ">
                           Halo, kami adalah Transisi!
                        </h1>
                     </div>
                  </div>
                  <p className="px-8 text-white ">Kami <span className="text-green-400">mengembangkan aplikasi bagi enterprise </span>
                     berdasarkan pemahaman mendalam kami tentang teknologi. Dengan professional mindset kami, kami tidak hanya
                     melihat dari sisi teknologi, namun lebih dari itu, kami menawarkan solusi terbaik yang dirancang khusus
                     untuk bisnis Anda.</p>
               </div>
               <div className="w-full md:w-[50%] flex">
                  <img src={handpone} className='object-cover w-full' alt="" />
               </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between relative">
               <div className="w-full md:w-[50%] flex bg-red-600">
                  <img
                     src={team}
                     className='object-cover w-full'
                     alt=""
                  />
               </div>

               <div className="flex flex-col justify-center  py-4 md:w-[50%] items-center">
                  <img
                     src={logo2}
                     className='w-80'
                     alt=""
                  />
                  <p class="text-gray-500 px-5">Transisi merupakan perusahaan konsultan IT berbasis di Yogyakarta yang berfokus pada
                     pengembangan aplikasi web dan mobile untuk segmen enterprise. Transisi membantu klien melalui integrasi
                     teknologi ke dalam proses bisnis mulai dari tahap perencanaan, perancangan, pengembangan, implementasi, dan
                     pemeliharaan. Kami percaya bahwa masa depan sepenuhnya digital. Tanpa pelibatan teknologi, bisnis hanya akan
                     menunda pertumbuhannya.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile