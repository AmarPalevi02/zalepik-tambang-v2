import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LiveChat from '../components/LiveChat'
import Profile from '../components/Profile'
import Idea from '../components/Idea'
import Services from '../components/Services'
import Client from '../components/Client'
import Contack from '../components/Contack'
import Footer from '../components/Footer'

const IndexPaege = () => {
   return (
      <div className='w-[100%] h-[100vh] relative '>
         <Navbar />
         <Hero />
         <LiveChat />
         <Profile />
         <Idea />
         <Services />
         <Client />
         <Contack />
         <Footer />
      </div>
   )
}

export default IndexPaege