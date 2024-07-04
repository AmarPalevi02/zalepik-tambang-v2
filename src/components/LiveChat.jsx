import React, { useEffect} from 'react'

const LiveChat = () => {
   const TawkTo = () => {
      useEffect(() => {
         const script = document.createElement('script');
         script.async = true;
         script.src = 'https://embed.tawk.to/662fec62a0c6737bd1325919/1hslj6p33';
         document.head.appendChild(script);

         return () => {
            document.head.removeChild(script);
         };
      }, []);

      return null; 
   };

  

   return (
      <div className='fixed z-40 bottom-0 right-0 bottom-5 right-4'>
         <TawkTo />
      </div>
   )
}

export default LiveChat