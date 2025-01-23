import React from 'react'

export default function Contact() {
  return (
   <section className='bg-cyan-50'>
    <div className='pt-32 text-3xl font-semibold text-center text-gray-500 mb-10'>
      <h1>Contact Me</h1>
    </div>
    <div className='flex flex-col gap-2 px-10 font-serif text-lg'>
      <h1>I’d love to hear from you! Whether you’re interested in collaborating on a project, have a question about my work, or just want to chat about tech, feel free to reach out.</h1>
      <p>You can get in touch with me through the form below or by using any of the following methods:</p>
      <li>[Your email address]</li>
      <li>[LinkedIn profile]</li>
      <li>[GitHub profile]</li>
      <p>Looking forward to connecting!</p>
    </div>
   </section>
  )
}
