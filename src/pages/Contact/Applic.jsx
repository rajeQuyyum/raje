import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Applic() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("Application Sent!")

    emailjs
      .sendForm('service_3rxg6l9', 'template_7p20hm', form.current, {
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
    <div className="flex justify-center py-12">
    <form ref={form} onSubmit={sendEmail} action="" className='w-[90%] md:w-[700px]'>
        <h1 className="text-center font-semibold text-2xl py-10 mb-6">Contact <span className='text-orange-600'>Me</span></h1>

        <input type="Name" name="user_name" id="" placeholder='Name' required className="w-full h-10 border rounded-md mb-3 px-2" />
        <input type="Email" name="user_email" id="" placeholder='Email' required className="w-full h-10 border rounded-md mb-3 px-2" />
        <textarea type="message" name="message" id="" placeholder='Message' className="w-full h-[150px] border rounded-md mb-3 px-2 resize-none" ></textarea>
        <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105'>Submit</button>
    </form>
</div>

  )
}
