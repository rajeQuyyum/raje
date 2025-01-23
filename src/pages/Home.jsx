import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Home() {
    
  return (
    


   <section className='bg-cyan-50'>
    <div className='pt-36 text-center mb-10'>
      <h1 className='text-3xl font-semibold text-gray-500'>Welcome to My Creative Space!</h1>
    </div>
    <div className='px-10 font-serif mb-20'>
      <h1>Hi there, I’m Raje Quyyum. I’m a passionate your profession developer with a love for turning ideas into impactful solutions. On this site, you’ll find a collection of my work, showcasing my skills, creativity, and dedication to delivering high-quality results.</h1>

      <p>Feel free to explore, and if you see something you like or want to collaborate, don’t hesitate to reach out!</p>
      <p>Let’s create something amazing together.</p>
    </div>

    <div className='px-10 mb-24'>
      <h1>You can adjust it to better fit your personality or style! Would you like me to tailor it more specifically to your field or preferences?</h1>
    </div>

    <div className='flex gap-20 justify-center items-center text-5xl md:px-0 px-3'>
    <FaFacebook />
    <FaInstagram />
    <FaWhatsapp />
    <FaTwitter />
    <FaTiktok />
    </div>
   </section>

  )
}
