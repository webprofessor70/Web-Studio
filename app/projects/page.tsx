"use client"
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce React App",
    description: "A fully functional e-commerce application built with React.",
    category: "React",
    image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b", // Add image assets in the public folder
    link: "https://example.com/ecommerce",
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "UI/UX design for a mobile application.",
    category: "UI/UX",
    image: "https://img.freepik.com/free-vector/application-learn-languages_23-2148624202.jpg",
    link: "https://example.com/mobile-app",
  },
  {
    id: 3,
    title: "WordPress Portfolio",
    description: "A stunning WordPress portfolio website.",
    category: "WordPress",
    image: "https://www.figma.com/community/resource/4d7fca45-10fa-4960-87d5-3087922d4532/thumbnail",
    link: "https://example.com/portfolio",
  },
  {
    id: 4,
    title: "Online Services Web",
    description: "A stunning Online Services Web portfolio website.",
    category: "React",
    image: "https://images01.nicepagecdn.com/page/48/82/website-design-preview-488288.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Online Services Web",
    description: "A stunning WordPress Online Services Web website.",
    category: "Wordpress",
    image: "https://themewagon.com/wp-content/uploads/2020/09/Courses-1-1200x736.png",
    link: "https://rajascholl.online",
  },
  {
    id: 6,
    title: "Shopify Store",
    description: "Online eCommerce shopify store.",
    category: "Wordpress",
    image: "https://www.webibazaar.com/blog/wp-content/uploads/2022/03/digital-marketing-website-templates-837x445.jpg",
    link: "https://example.com/portfolio",
  },
  
];

const categories = ["All", "React", "UI/UX", "WordPress"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div>
        <Link href='https://wa.me/923040535970'
        target='_blank'
      className="fixed bottom-6 right-6 cursor-pointer z-101 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
        >
        <FaWhatsapp className="text-white text-2xl" />
        </Link>
      </div>
      <div className="container mx-auto">
      <section className="bg-blue-600 text-white py-10 pb-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Created Projects</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover who we are, our journey, and the values that drive us to deliver exceptional results.
          </p>
        </div>
      </section>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 pt-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-semibold text-[14px] border-2 p-3 rounded-md"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
