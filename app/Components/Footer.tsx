import Link from 'next/link';
import React from 'react';
import { FaAddressBook, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
<footer className="text-white body-font bg-gray-700">

  <div className="bg-gray-900">
    <div className="container mx-auto py-4 px-5 flex flex-wrap gap-3 md:gap-0 flex-col sm:flex-row">

      <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Web Studio —
        <Link href="https://.wa.me/923040535970" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">SAJID ALI</Link>
      </p>

      <ul className='flex flex-wrap gap-3 md:ms-60 text-gray-400  justify-center items-center  text-center '>
        <li><Link href='/about' className='hover:text-gray-100 transition-all duration-500'>About</Link></li>
        <li><Link href='/courses' className='hover:text-gray-100 transition-all duration-500'>Online Courses</Link></li>
        <li><Link href='/services' className='hover:text-gray-100 transition-all duration-500'>Services</Link></li>
      </ul>

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href='/https://wa.me/923040535970' target='_blank' className="text-gray-500">
          <FaWhatsapp className='text-xl hover:text-gray-100 transition-all duration-500 '/>
        </Link>
        <Link href='/www.facebook.com' target='_blank' className="ml-3 text-gray-500">
          <FaFacebook className='text-xl hover:text-gray-100 transition-all duration-500 '/>
        </Link>
        <Link href='/websprofessor@gmail.com' target='_blank' className="ml-3 text-gray-500">
          <FaEnvelope className='text-xl hover:text-gray-100 transition-all duration-500 ' />
        </Link>
        <Link href='/www.twitter.com' target='_blank' className="ml-3 text-gray-500">
         <FaTwitter className='text-xl hover:text-gray-100 transition-all duration-500 '/>
        </Link>
      </span>
    </div>
  </div>
</footer>



    
  );
};

export default Footer;

{/* <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p> */}