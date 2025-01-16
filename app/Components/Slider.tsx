'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
          <a href="/getServices" 
          id='#wordpress'
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="/wordpress.webp"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden items-end pb-10 transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center  rounded-lg">
                <p className="text-white font-bold">Wordpress Development</p>
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
        <a href="/" 
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="web-develop.jpeg"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-10 rounded-lg">
                <p className="text-white font-bold">Code Develop</p>
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
        <a href="/" 
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="/3.jpg"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-10  rounded-lg">
                <p className="text-white font-bold">UI/UX Design</p>
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
        <a href="/" 
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="/4.jpg"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-10 rounded-lg">
                <p className="text-white font-bold">Online Courses </p>
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
        <a href="/" 
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="/5.jpg"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-10 rounded-lg">
                <p className="text-white font-bold">Digital Products</p>
              </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-1/2 h-1/4 m-2 flex justify-center items-center">
        <a href="/" 
           className="relative hover:scale-110 overflow-hidden transition-all duration-300 ease-in-out">
          <img
            src="/1.jpg"
            alt="Nature"
            className='hover:scale-110 overflow-hidden transition-all duration-300'
            style={{ width: '300px', height: '350px', objectFit: 'cover', borderRadius: '8px' }}
          />
             <div className="hover:scale-105 overflow-hidden transition-all duration-300 absolute  w[300px] h-[350px] inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-10  rounded-lg">
                <p className="text-white font-bold">Hacking Courses</p>
              </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
