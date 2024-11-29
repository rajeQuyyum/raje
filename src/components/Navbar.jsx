import React, { useState } from 'react'
import { BsExplicitFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from 'react-icons/fa';
import { GiDrowning } from "react-icons/gi";


export default function Navbar() {
    const [display, setDisplay] = useState(false)
  return (
    

    <nav className='flex justify-between py-5 px-5 items-center  lg:px-20 md:px-5 bg-cyan-500'>
        <div className='flex items-center'>
        <GiDrowning className='text-4xl' />
     <h1 className='md:text-2xl text-4xl md:hidden lg:block font-serif'>RAJ</h1>
     <BsExplicitFill className='md:text-2xl md:hidden lg:block text-4xl' />
     
     </div>

     


     <div className='outline-none border-none'>
        <input className='rounded-lg w-20 md:hidden block' type="text" />
     </div>

     <ul className={`flex flex-col md:flex-row justify-between md:w-[700px] w-full bg-white md:bg-transparent items-center text-2xl gap-2 font-serif top-20 py-6 md:py-0 absolute md:static ${display ? 'left-0' : 'left-[-100%]'}`}>
        <li className=''>
            <div className='flex items-center'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="/">Home</NavLink></li>

                <div className='link hover'>
                <IoMdArrowDropdown />

                <ul className=' font-sans text-black text-sm'>
                <div className='flex  flex-col gap-2 mb-2'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="appre">Appreciation</NavLink></li>
                <div className='border-b'>
                </div>
                </div>
                <div className='flex  flex-col gap-2 mb-2'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="hire">Hire</NavLink></li>
                <div className='border-b'>
                </div>
                </div>
               <div className='flex  flex-col gap-2'>
               <li onClick={() => setDisplay(prev => !prev)}><NavLink to="exp">Expirience</NavLink></li>
               <div className='border-b'>
               </div>
               </div>
                

            </ul>
                
                </div>
            </div>

        </li>

        <li className=''>
            <div className='flex items-center'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="about">About</NavLink></li>
               
               <div className='link hover'>
               <IoMdArrowDropdown />

               <ul>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="skills">Skills</NavLink></li>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="career">Career</NavLink></li>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="exp">Expirience</NavLink></li>
                

            </ul>
               </div>
            </div>

           
        </li>


        <li className=''>
            <div className='flex items-center'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="profile">Profile</NavLink></li>
                
                <div className='hover link'>
                <IoMdArrowDropdown />

                <ul>
                <li><NavLink to="seminar">Serminar</NavLink></li>
                <li><NavLink to="certifcate">Certificate</NavLink></li>
                
            </ul>
                </div>
            </div>

           
        </li>


        <li className=''>
            <div className='items-center flex'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="contact">Contact</NavLink></li>
               <div className='link hover'>
               <IoMdArrowDropdown />

               <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>

            </ul>
               </div>
            </div>

            
        </li>

        <li className=''>
            <div className='flex items-center'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="orders">Orders</NavLink></li>
                
                <div className='link hover'>
                <IoMdArrowDropdown />

                <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>

            </ul>
                </div>
            </div>

           
        </li>

        <li className=''>
            <div className='flex items-center'>
                <li onClick={() => setDisplay(prev => !prev)}><NavLink to="services">Services</NavLink></li>
               
               <div className='link hover'>
               <IoMdArrowDropdown />

               <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>

            </ul>
               </div>
            </div>

           
        </li>


     </ul>

     <i className='text-4xl md:hidden' onClick={() => setDisplay(prev => !prev)} ><FaBars /></i>
    </nav>
  )
}
