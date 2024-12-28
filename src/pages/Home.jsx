import React, { useState } from 'react'

export default function Home() {
    const [display, setDisplay] = useState(false)
    const [display2, setDisplay2] = useState(false)
    const [display3, setDisplay3] = useState(false)
  return (
    


   <section className='flex justify-between'>
     <div className=' w-[420px] pt-28 px-4'>
        <img className=' w-[400px] mb-5'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s" alt="" />

        <button className='bg-black text-white ml-40 py-4 px-7 rounded-md mb-4' onClick={() => setDisplay(prev => !prev)}>view</button>
          
          <div className={` ${display ? 'block h-fit' : 'hidden h-0 overflow-hidden' } bg-slate-400`}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis nisi mollitia tenetur at aperiam cupiditate. Deleniti optio cumque consequuntur consectetur rerum nulla architecto voluptatem tempore, neque voluptas esse maiores!</p>

       <img src="https://media.istockphoto.com/id/1212042426/photo/car-interior-part-of-front-seats-close.jpg?s=612x612&w=0&k=20&c=KOiUoGDzZoTU_ChswUQudlpRpFLihWzBq7-aZN6NvLw=" alt="" />

       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoabXdPHKmoQXPXWKGF-_vYeH57EsElw7N_A&s" alt="" />

       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium distinctio at atque, asperiores, non cumque delectus quis animi quod unde cupiditate dolore culpa, aliquam nisi reiciendis in. Libero cumque dolorem similique accusantium reiciendis aperiam distinctio delectus natus earum. Aut repellat atque, tempore facilis iure, velit quibusdam est eligendi reprehenderit id possimus eveniet quo ipsa aliquam consequuntur similique doloremque modi quae tempora perferendis hic unde commodi. At sed quibusdam deserunt neque, illo, excepturi totam qui commodi assumenda modi autem obcaecati placeat? Voluptas laborum repellendus alias incidunt, quod consequatur cupiditate maiores sit at impedit eum delectus accusantium ab est. Repellat, aspernatur.</p>
       </div>

    </div>

    <div className=' w-[420px] pt-28 px-4'>
        <img className=' w-[400px] mb-5'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s" alt="" />

        <button className='bg-black text-white ml-40 py-4 px-7 rounded-md mb-4' onClick={() => setDisplay2(prev => !prev)}>view</button>
          
          <div className={` ${display2 ? 'block' : 'hidden' }`}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis nisi mollitia tenetur at aperiam cupiditate. Deleniti optio cumque consequuntur consectetur rerum nulla architecto voluptatem tempore, neque voluptas esse maiores!</p>

       <img src="https://media.istockphoto.com/id/1212042426/photo/car-interior-part-of-front-seats-close.jpg?s=612x612&w=0&k=20&c=KOiUoGDzZoTU_ChswUQudlpRpFLihWzBq7-aZN6NvLw=" alt="" />

       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoabXdPHKmoQXPXWKGF-_vYeH57EsElw7N_A&s" alt="" />

       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium distinctio at atque, asperiores, non cumque delectus quis animi quod unde cupiditate dolore culpa, aliquam nisi reiciendis in. Libero cumque dolorem similique accusantium reiciendis aperiam distinctio delectus natus earum. Aut repellat atque, tempore facilis iure, velit quibusdam est eligendi reprehenderit id possimus eveniet quo ipsa aliquam consequuntur similique doloremque modi quae tempora perferendis hic unde commodi. At sed quibusdam deserunt neque, illo, excepturi totam qui commodi assumenda modi autem obcaecati placeat? Voluptas laborum repellendus alias incidunt, quod consequatur cupiditate maiores sit at impedit eum delectus accusantium ab est. Repellat, aspernatur.</p>
       </div>

    </div>

    <div className=' w-[420px] pt-28 px-4'>
        <img className=' w-[400px] mb-5'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDE4cJvMUaRNtQKS6pJCi7je2_72uwO5USw&s" alt="" />

        <button className='bg-black text-white ml-40 py-4 px-7 rounded-md mb-4' onClick={() => setDisplay3(prev => !prev)}>view</button>
          
          <div className={` ${display3 ? 'block' : 'hidden' }`}>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente blanditiis nisi mollitia tenetur at aperiam cupiditate. Deleniti optio cumque consequuntur consectetur rerum nulla architecto voluptatem tempore, neque voluptas esse maiores!</p>

       <img src="https://media.istockphoto.com/id/1212042426/photo/car-interior-part-of-front-seats-close.jpg?s=612x612&w=0&k=20&c=KOiUoGDzZoTU_ChswUQudlpRpFLihWzBq7-aZN6NvLw=" alt="" />

       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoabXdPHKmoQXPXWKGF-_vYeH57EsElw7N_A&s" alt="" />

       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium distinctio at atque, asperiores, non cumque delectus quis animi quod unde cupiditate dolore culpa, aliquam nisi reiciendis in. Libero cumque dolorem similique accusantium reiciendis aperiam distinctio delectus natus earum. Aut repellat atque, tempore facilis iure, velit quibusdam est eligendi reprehenderit id possimus eveniet quo ipsa aliquam consequuntur similique doloremque modi quae tempora perferendis hic unde commodi. At sed quibusdam deserunt neque, illo, excepturi totam qui commodi assumenda modi autem obcaecati placeat? Voluptas laborum repellendus alias incidunt, quod consequatur cupiditate maiores sit at impedit eum delectus accusantium ab est. Repellat, aspernatur.</p>
       </div>

    </div>



    

  
    </section>



  )
}
