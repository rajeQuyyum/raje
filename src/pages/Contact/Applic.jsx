import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Applic() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("Application Sent!")

    emailjs
      .sendForm('service_mf3onfe', 'template_47uzenf', form.current, {
        publicKey: 'BJpoc-Ljr9diUCcu2',
      })
      .then(
        (Result) => {

          e.target.reset()
          console.log(Result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  
  



  
  
  return (
    <div className='py-20'>
        <h1 className='text-5xl text-center py-5 text-gray-300 font-extrabold'>Contact</h1>

    <div className='py-5 flex justify-center'>
    

        <form ref={form} onSubmit={sendEmail} action="" className='w-[90%] md:w-[700px]'>
            <div className='mb-4'>
                <label className='block' htmlFor="name">Name</label>
            <input className=' w-full h-10 rounded-md border border-gray-400 px-2' type="name" name='user_name' id='' placeholder='Name' />
            </div>

            <div className='mb-4'>
                <label className='block' htmlFor="email">Email</label>
            <input className='w-full h-10 rounded-md border border-gray-400 px-2' type="email" name='user_email' id='' placeholder='Email' />
            </div>

            <div className='mb-4'>
                <label className='block' htmlFor="email">State</label>
            <input className='w-full h-10 rounded-md border border-gray-400 px-2' type="address" name='user_state' id='' placeholder='State' />
            </div>

            <div className='mb-4'>
                <label className='block' htmlFor="email">Phone No</label>
            <input className='w-full rounded-md h-10 border border-gray-400 px-2' type="phone no" name='user_phoneNo' id='' placeholder='Phone No' />
            </div>

            <div className='mb-4'>
              <input type="checkbox" name="user_agree"  id="" required />
              <label htmlFor="">Accept terms and conditions</label>
            </div>

            <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105' >Submit</button>

        </form>
    </div>
    </div>

  )
}
