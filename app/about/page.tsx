import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const about = () => {
  return (
    <div className="about bg-gray-100 min-h-screen ">
      <div>
        <Link href='https://wa.me/923040535970'
        target='_blank'
      className="fixed bottom-6 right-6 cursor-pointer z-101 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
        <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover who we are, our journey, and the values that drive us to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className='bg-gray-300 p-6 rounded-md'>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to empower businesses by creating innovative, scalable, and user-friendly digital
                solutions tailored to their unique needs.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be a global leader in delivering cutting-edge technology and design that drives success and growth
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div  className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-24 h-24 mx-auto overflow-hidden mb-4 rounded-full bg-gray-200">
                  <img src="/myphoto.jpg" alt="" />
                </div>
                <h3 className="text-xl font-semibold">Sajid Ali</h3>
                <p className="text-gray-500 font-semibold">Admin</p>
              </div>
              <div  className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full bg-gray-200">
                <img src="/testi1.jpg" className='cover' alt="" />

                </div>
                <h3 className="text-xl font-semibold">Raja Sartaj</h3>
                <p className="text-gray-500">UI/UX Designer</p>
              </div>
              <div  className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-24 h-24 mx-auto overflow-hidden mb-4 rounded-full bg-gray-200">
                  <img src="/testi3.jpg" alt="" />
                </div>
                <h3 className="text-xl font-semibold">Mahboob Ali</h3>
                <p className="text-gray-500">Project Management</p>
              </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Integrity", description: "We Develop Best full functionaly websites and Mobile Apps." },
              { title: "Innovation", description: "We embrace innovation to drive success." },
              { title: "Commitment", description: "We are committed to exceeding expectations." },
            ].map((value, index) => (
              <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join us on our mission to deliver exceptional results and drive innovation.
          </p>
          <Link href='/contact' className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default about;
