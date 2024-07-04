import React from 'react'

const Button = ({ children }) => {
   return (
      <button className='bg-[#48D6D7] px-5 py-2 rounded-md flex items-center gap-2 text-[#323232] hover:brightness-90 hover:text-white transition duration-100 ease-in-out delay-200 cursor-pointer'>{children}</button>
   )
}

export default Button