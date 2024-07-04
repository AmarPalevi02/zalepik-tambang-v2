import React from 'react'
import { cloud, card2, card3, card4 } from '../assets'

const Services = () => {
   return (
      <div id='layanan' className='w-full relative mt-20'>
         <div className="w-full relative flex justify-center">
            <div className="w-[450px]  text-center relative md:h-48 z-10">
               <p className="text-[#39FAC5] mb-2">L A Y A N A N</p>
               <h1 className="text-black sm:text-2xl md:text-4xl font-bold bg-[rgba(57,250,197,0.2)] px-5 py-3 shadow-custom ">Mari
                  Apa yang dapat kami lakukan?</h1>
            </div>
            <div className="hidden md:block w-[90%] h-2 bg-[#48D6D7] absolute  top-[32%] "></div>
         </div>

         <div className="w-full mt-10 px-3">
            <div className="w-full grid md:grid-cols-2 md:grid-rows-2 gap-4 md:bg-black rounded-xl md:py-16 md:px-36  ">
               <div className="">
                  <div className="bg-white px-10 py-11 rounded-xl border-2 border-[#39FAC5]">
                     <div className="flex justify-between">
                        <div
                           className="p-8 bg-[#39FAC5] w-14 h-14 text-2xl font-normal flex justify-center items-center rounded-md text-center">
                           01.</div>
                        <img
                           src={cloud}
                           className="w-16 h-16"
                           alt=""
                        />
                     </div>
                     <h1 className="text-card text-xl font-bold mt-7">Enterprise Cloud Apps</h1>
                     <div className="w-32 h-[4px] bg-[#48D6D7] my-2.5"></div>
                     <p className="text-gray-500">Mengembangkan aplikasi berbasis web dan mobile untuk skala enterprise, baik
                        sebuah brand new app
                        maupun sebuah modul fungsional spesifik. Transisi membantu bisnis Anda untuk mengadopsi pendekatan
                        SaaS dengan mengembangkan solusi yang dibangun spesifik untuk model bisnis Anda.</p>
                  </div>
               </div>

               <div className="bg-white px-10 py-11 rounded-xl border-2 border-[#39FAC5]">
                  <div className="flex justify-between">
                     <div
                        className="p-8 bg-[#39FAC5] w-14 h-14 text-2xl font-normal flex justify-center items-center rounded-md text-center">
                        02.</div>
                     <img
                        src={card2}
                        className='w-16 h-16'
                        alt=""
                     />
                  </div>
                  <h1 className="text-card text-xl font-bold mt-7">Enterprise Application Integration</h1>
                  <div className="w-32 h-[4px] bg-[#48D6D7] my-2.5"></div>
                  <p className="text-gray-500">Memadukan berbagai platform aplikasi yang ada dan sumber data yang ada sehingga
                     dengan mudah berbagi berbagai proses bisnis dan data. Transisi membantu mendefinisikan pendekatan
                     standar sehingga aplikasi dan sumber data yang ada dapat saling berkomunikasi dan terhubung.</p>
               </div>

               <div className="bg-[#48D6D7] px-10 py-11 rounded-xl border-2 border-[#39FAC5]">
                  <div className="flex justify-between">
                     <div
                        className="p-8 bg-white w-14 h-14 text-2xl font-normal flex justify-center items-center rounded-md text-center">
                        03.</div>
                     <img
                        src={card3}
                        className="w-16 h-16"
                        alt=""
                     />
                  </div>
                  <h1 className="text-card text-xl font-bold mt-7">ESmart Automation</h1>
                  <div className="w-32 h-[4px] bg-white my-2.5"></div>
                  <p className="text-gray-500">Melakukan pengembangan machine learning model, mulai dari tahap pengembangan
                     model, traning, tuning, hingga deployment. Transisi membantu mengembangan model yang menjadi basis
                     kecerdasan bisnis yang disesuaikan secara spesifik sesuai kebutuhan bisnis Anda.</p>
               </div>

               <div className="bg-black px-10 py-11 rounded-xl border-2">
                  <div className="flex justify-between">
                     <div
                        className="p-8 bg-[#39FAC5] w-14 h-14 text-2xl font-normal flex justify-center items-center rounded-md text-center">
                        04.</div>
                     <img
                        src={card4}
                        className="w-16 h-16"
                        alt=""
                     />
                  </div>
                  <h1 className="text-card text-xl font-bold mt-7 text-white">ESmart Automation</h1>
                  <div className="w-32 h-[4px] bg-white my-2.5"></div>
                  <p className="text-white">Melakukan pengembangan machine learning model, mulai dari tahap pengembangan
                     model, traning, tuning, hingga deployment. Transisi membantu mengembangan model yang menjadi basis
                     kecerdasan bisnis yang disesuaikan secara spesifik sesuai kebutuhan bisnis Anda.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services