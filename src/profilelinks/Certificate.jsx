import React from 'react'

export default function Certificate() {
  return (
    <section className='pt-24 bg-cyan-50'>
      <div  className='text-center font-bold text-3xl mb-10 text-gray-500'>
        <h1>Certifications</h1>
      </div>

      <div className='flex flex-col gap-3 font-serif text-lg px-10'>
        <h1>I believe in continuously improving my skills and keeping up with the latest technologies. Here are some of the certifications I’ve earned along the way:
       </h1>
       
       <li>[Certification Name] – [Issuing Organization]
         Date received
         [Brief description of what the certification covers, if desired]</li>
       <li>[Certification Name] – [Issuing Organization]
        Date received
        [Brief description]</li>

        <p>These certifications reflect my commitment to learning and mastering the tools and frameworks that help me build better solutions for my clients and projects.</p>

        <p>This gives a clean and professional look, while also highlighting your dedication to growth. You can tweak it to match the exact certifications you've earned. Let me know if you want it adjusted further!</p>
      </div>
     
    </section>
  )
}
