import React, {  useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import CustomHeade from './chatbot/CustomHeade';

import {steps} from '../constans/cutomChat'
import { livechat } from '../assets'

const LiveChat = () => {
   const [active, setActive] = useState(false)

   const handleLiveChat = () => {
      setActive(!active)
   }

   return (
      <div className='fixed z-40 bottom-0 right-0 bottom-5 right-4'>
         <button
            onClick={handleLiveChat}
            className={`${active === true ? 'hidden' : ''} `}
         >
            <img src={livechat} alt="" />
         </button>

         {active ? (
            <ChatBot
               steps={steps}
               headerComponent={<CustomHeade botName={'Transisi'} onClickClose={handleLiveChat} />}
            />
         ) : ("")
         }

      </div>
   )
}

export default LiveChat