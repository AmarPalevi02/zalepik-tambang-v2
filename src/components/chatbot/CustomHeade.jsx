import React from 'react'
import CloseButton from './CloseButton'

const CustomHeade = ({ botName, onClickClose }) => {
   return (
      <div className='bg-black p-2 flex items-center justify-between'>
         <span className='text-white text-xl'>{botName}</span>
         <CloseButton onClick={onClickClose} />
      </div>
   )
}

export default CustomHeade