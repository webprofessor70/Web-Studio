"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full h-screen md:h-[1000px]"
      >
        <SwiperSlide className="pt-10 md:pt-0"> 
          <div className="w-full mt-10 h-[80vh] mt-[120px] md:mt-0 flex pb-4 md:pb-10 items-center justify-center">
            <div className="container mx-auto flex px-4 sm:px-6 md:px-8 flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="title-font text-2xl md:pt-10 sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                  Professional Website
                  <br className="hidden lg:inline-block" /> Development
                </h1>
                <p className="mb-6 text-sm sm:text-base leading-relaxed">
                  Web development and web design go hand in hand to create
                  functional and visually appealing websites. While web
                  development focuses on building the structure, functionality,
                  and interactivity of a site using technologies like HTML,
                  CSS, JavaScript, and frameworks such as React or Next.js, web
                  design ensures the interface is user-friendly and visually
                  engaging.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="https://wa.me/923040535970"
                    target="_blank"
                    className="inline-flex text-white bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href="/getServices"
                    className="inline-flex text-white ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full mt-6 md:mt-0 py-10">
                <img
                  
                  src="/home.png"
                  alt="Professional Website Development"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pt-10 md:pt-0">
          <div className="w-full h-[80vh]  md:py-0 mt-[120px] md:mt-0 flex items-center justify-center">
            <div className="container mx-auto flex px-4 sm:px-6 md:px-8 flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                  Professional Website
                  <br className="hidden lg:inline-block" /> Development Courses
                </h1>
                <p className="mb-6 text-sm sm:text-base leading-relaxed">
                  Web development and web design go hand in hand to create
                  functional and visually appealing websites. While web
                  development focuses on building the structure, functionality,
                  and interactivity of a site using technologies like HTML,
                  CSS, JavaScript, and frameworks such as React or Next.js, web
                  design ensures the interface is user-friendly and visually
                  engaging.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="https://wa.me/923040535970"
                    target="_blank"
                    className="inline-flex text-white bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href="/getServices"
                    className="inline-flex text-white ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full mt-6 md:mt-0">
                <img width={500} height={500} src="/web.png " className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto pb-20" alt="" />   
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[80vh] mt-[120px] md:mt-0 flex items-center justify-center">
            <div className="container mx-auto flex px-4 sm:px-6 md:px-8 flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="title-font text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                  Professional Website
                  <br className="hidden lg:inline-block" /> Development
                </h1>
                <p className="mb-6 text-sm sm:text-base leading-relaxed">
                Web development and
                         We collect Unlimited data and digital online Courses for Graphic designer, Web Developer and Web Designer. You can manage 
                         this data with your own commercial uses. We have Graphics Bundle, Courses Bundle with facebook marketing Course 
                         web designing course, web development cours ethycal hacking course, etc.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="https://wa.me/923040535970"
                    target="_blank"
                    className="inline-flex text-white bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Contact Us Now
                  </Link>
                  <Link
                    href="/getServices"
                    className="inline-flex text-white ml-4 bg-gradient-to-r from-sky-500 to-indigo-500 border-0 py-2 px-4 sm:px-6 rounded text-sm sm:text-lg"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 w-full mt-6 md:mt-0">
                <img width={500} height={500} src="/graphic.png" 
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] object-contain mx-auto"
                alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Repeat for other slides with similar structure */}
      </Swiper>
    </>
  );
};

export default HomeSlider;