import React from 'react'
import { livechat } from '../assets'

const LiveChat = () => {
   const handleLiveChat = () => {
      console.log('live active')
   }
   return (
      <div className="fixed z-40 bottom-0 right-0 bottom-5 right-4">
         <button
            onClick={handleLiveChat}
         >
            <img src={livechat} alt="" />
         </button>
      </div>
   )
}

export default LiveChat