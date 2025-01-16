// pages/services.tsx

import Link from 'next/link';
import React from 'react';
import { FaCreativeCommonsRemix, FaWhatsapp } from "react-icons/fa";


const services = [
  {
    title: 'Web Development',
    description: 'We provide responsive and user-friendly websites using modern technologies.',
    icon: '🌐',
    link: 'Get',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting stunning and intuitive designs that prioritize user experience.',
    icon: '🎨',
    link: 'Get',
  },
  {
    title: 'React js',
    description: 'We Develop website and mobile app in react js and ts. Fully customized and Responsive.',
    icon: '❄',
    link: 'Get',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Build and optimize your online store for better user engagement and sales.',
    icon: '🚒',
    link: 'Get',
  },
  {
    title: 'Online Courses',
    description: 'We Provide best digital online courses for new comer student for learn skills.',
    icon: '💻',
    link: 'Get',
     
  },
  {
    title: 'Premium Software',
    description: 'We have a pc and mobile premium software and apps for use our new customer free.',
    icon: '📳',
    link: 'Get',
     
  },
  {
    title: 'Digital Marketing Services',
    description: 'We provide a online digital marketing services for grow your online and offline business.',
    icon: '🛒',
    link: 'Get',
     
  },
  {
    title: 'E-commerce Development',
    description: 'Build and optimize your online store for better user engagement and sales.',
    icon: '🛒',
    link: 'Get',
     
  },

];

const Services = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div>
        <Link href='https://wa.me/923040535970'
        target='_blank'
      className="fixed bottom-6 right-6 cursor-pointer z-100 overflow-hidden bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
        <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto text-center z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer a variety of services to take your business to the next level. Explore the options below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 pb-4">{service.description}</p>
              <Link href='/'className="p-2 px-4 rounded-lg bg-blue-500 text-white mt-3">
                {service.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
