"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/services", text: "Services" },
    { href: "/courses", text: "Courses" },
  ];

  return (
    <header className="bg-gray-100 py-3 px-5 flex justify-between items-center">
      {/* Logo */}
      <div className="logo flex justify-center items-center gap-2 text-2xl font-semibold">
        <Link href="/" passHref className="flex items-center gap-2">
          <img width={40} height={10} src="/logo.jpeg" alt="logo" />
          Web <span className="text-blue-800">Studio</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        <nav>
          <ul
            className={`fixed top-0 right-0 z-40 pt-20 md:pt-0  ps-5 bg-gray-300 md:bg-gray-100 shadow-lg transform ${
              isMenuOpen
                ? "translate-x-0 transition-transform duration-300 ease-out"
                : "translate-x-full transition-transform duration-300 ease-in"
            } w-1/2 h-full md:flex md:static md:w-auto md:h-auto md:shadow-none md:translate-x-0 flex-col md:flex-row justify-center font-semibold gap-5`}
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  passHref
                  className={`text-xl font-sans hover:text-blue-500 transition-all duration-500 ${
                    pathname === link.href ? "text-blue-800 font-bold" : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1 ml-5 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      <div>
        <Link href="https://wa.me/923040535970">
          <FaWhatsapp className="text-white" />
        </Link>
        {/* Contact Button */}
        <Link
          href="/contact"
          className="border-2 font-semibold hover:text-blue-500 transition-all duration-500 border-blue-800 text-black px-3 py-2 text-semibold rounded-md hidden md:block"
          passHref
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
