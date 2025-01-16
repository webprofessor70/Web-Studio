"use client"
import React, { useRef } from 'react'
import Slider from './Components/Slider'
import { Codesandbox } from 'lucide-react';
import Testimonials from './Components/Testimonials';
import WhatsAppButton from './Components/WhatsAppButton';
import { FaPhoneAlt, FaSwatchbook } from 'react-icons/fa';
import { CgMail, CgWebsite } from 'react-icons/cg';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

import { SiTaichigraphics } from "react-icons/si";
// import getServices from './Components/getServices'
import HomeSlider from './Components/HomeSlider';


 
const page = () => {

  return (
    <div>
      <div>
        <Link href='https://wa.me/923040535970'
        target='_blank'
      className="fixed bottom-6 right-6 cursor-pointer z-101 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
        <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>

      <div className='w-100 h-[80vh] md:h-[70vh] '>
        <HomeSlider /> 
    </div>

 

       <div className='pt-60 md:pt-10'>
            <img width={150} className='-m-20' src="/circle.png" alt="" />
          </div>
          <div className='pb-5 md:flex justify-center items-center'>
         
          <div className='flex flex-col text-center items-center gap-2'>
          
          <CgWebsite width={100} className=' text-slate-950 text-3xl' />
            <h2 className='font-semibold'>website Development</h2>
            <p>Best place for develop websites</p>
          </div>
          <div className='px-5 flex flex-col items-center gap-2'>
          {/* <SiTaichigraphics /> */}
          <SiTaichigraphics className='w-[100px] text-slate-950 text-3xl' />
            <h2 className='font-semibold'>Graphics Designing</h2>
            <p className='text-center'>Best Assets of Graphic Designing data </p>
          </div>
          <div className='flex flex-col items-center gap-2'>
          <FaSwatchbook className='w-[100px] text-slate-950 text-3xl' />
            <h2 className='font-semibold'>Online Courses</h2>
            <p>Digital Online Skills</p>
          </div>
          
      </div>

      <div className=''>
        <div className='md:flex justify-center items-center  justify-between  '>
          <div>
            <h1 className='text-3xl text-center md:text-start md:ps-14 py-5 md:py-0 font-semibold'>Get Your Dream Website <br />
              Website Today Dears</h1>
          </div>
          
          <div className='z-100 md:ms-40'>
          <div className='z-10 md:flex  justify-center items-center z-100 rounded-md gap-2 border-1 border-gray-400 p-3'>
           <div className='px-4 md:flex text-center md:text-start flex-col justify-center items-center'>
            <Codesandbox className='text-center md:w-[100px] w-[300] text-slate-950' />
            <h5 className='font-semibold text-space-3'>Contact Me</h5>
           </div>
            <div className='flex justify-center items-center gap-5 '>
            {/* <FaPhoneAlt /> */}
            <FaPhoneAlt className='text-white p-2 rounded-full bg-blue-500 w-[40px] h-[40px] text-slate-950' />
            <div>
              <h2 className='font-semibold'>Phone</h2>
              <h4>+923040535970</h4>
            </div>
            </div>
            <div className='flex justify-center items-center gap-2'>
           
            <CgMail className='text-white p-2 rounded-full bg-blue-500 w-[40px] h-[40px] text-slate-950' />
            <div>
              <h2 className='font-semibold'>Gmail</h2>
              <h4>websprofessor@gmail.com</h4>
            </div>
            </div>
            
          </div>
          
         
          </div>

          <div className='flex justify-end mt-0  hidden md:flex z-1 '>
             <img width={100} className='-z-1' src="/circle2.png" alt="" />
          </div>
         
        </div>
    
      </div>


      <div className='slider mt-20 py-5 px-8 bg-gray-300 h-50vh'>
        <h1 className='text-center font-semibold text-2xl py-3'>Our Categories</h1>
         <Slider />
      </div>

     

      <div className='py-10'>
       <img width={150} className='-m-20' src="/circle.png" alt="" />
        <Testimonials />

      </div>
    </div>
  )
}

export default page;