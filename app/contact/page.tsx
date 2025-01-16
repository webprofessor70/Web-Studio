"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAddressBook, FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXiN3YV_WnTpU_BH9l-ELhTMXR8KrQgKE",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "web-studio-547f5",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:281398345726:web:9d8e992f2fd7e451ec0aaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (

    <div>
      <div>
        <Link href='https://wa.me/923040535970'
        target='_blank'
      className="fixed bottom-6 right-6 cursor-pointer z-101 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
        <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Contact us and Discover who we are, our journey, and the values that drive us to deliver exceptional results.
          </p>
        </div>
      </section>

      <div>
        <h1 className="text-3xl text-center pt-5 font-semibold">Contact Me on Social Platforms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-20 px-5 pt-5">
        <div className='flex gap-40 justify-center items-center bg-gray-300 p-6 rounded-md'>
            <h1>Contact me on Whatsapp</h1>
            <Link href="https://wa.me/923040535970" target='_blank'>
              <FaWhatsapp className='text-3xl text-green-500 hover:text-green-900 hover:scale-105 duration-500 transition-all ' />
            </Link>
          </div>

          <div className='flex gap-40 justify-center items-center bg-gray-300 p-6 rounded-md'>
            <h1>Contact me on Facebook</h1>
            <Link href="https:www//.facebook.com" target='_blank'>
              <FaFacebook className='text-3xl text-green-500 hover:text-green-900 hover:scale-105 duration-500 transition-all ' />
            </Link>
          </div>
          <div className='flex gap-40 justify-center items-center bg-gray-300 p-6 rounded-md'>
          <h1>Contact me on Instagram</h1>
          <Link href="https//.www.instagram.com" target='_blank'>
              <FaInstagram className='text-3xl text-green-500 hover:text-green-900 hover:scale-105 duration-500 transition-all ' />
            </Link>
          </div>
        
          <div className='flex gap-40 justify-center items-center bg-gray-300 p-6 rounded-md'>
          <h1>Contact me on Twitter</h1>
          <Link href="https//.www.twitter.com" target='_blank'>
              <FaTwitter className='text-3xl text-green-500 hover:text-green-900 hover:scale-105 duration-500 transition-all ' />
            </Link>
          </div>

        </div>
      </div>

      <div className="py-5 md:px-20 px-5">
        <h1 className="text-4xl text-center font-bold mb-4 pt-10">Contact Us with Form</h1>
        <div className="md:flex gap-5 ">
          <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <div className="flex items-center space-x-4 border-2 p-3 md:w-[330px] w-[300px] border-gray-300 rounded-md">
              <FaEnvelope className="h-6 w-6 text-blue-500" />
              <p className="text-gray-700">websprofessor@example.com</p>
            </div>

            <div className="flex items-center space-x-4 border-2 p-3 md:w-[330px] w-[300px] border-gray-300 rounded-md">
              <FaPhone className="h-6 w-6 text-blue-500" />
              <p className="text-gray-700">+923040535970</p>
            </div>

            <div className="flex items-center space-x-4 border-2 p-3 md:w-[330px] w-[300px] border-gray-300 rounded-md">
              <FaAddressBook className="h-6 w-6 text-blue-500" />
              <p className="text-gray-700">Khudian khas kasur pakistan</p>
            </div>
            </div>
          </div>


        <section className="w-1/2  w-[350px] md:w-[600px] bg-gray-100 py-5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <form
              className="bg-white shadow-md rounded-lg md:p-8 p-4 space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block p-3 border-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-semibold block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block p-3 border-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block p-2 border-2 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;