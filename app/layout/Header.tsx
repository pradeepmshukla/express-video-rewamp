"use client"; 

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServicesMenu = () => setServicesOpen(!servicesOpen);

  return (
    <div className="wrapper">
      <div className="container-fluid px-6 md:px-16 py-4 mx-auto flex items-center justify-between uppercase font-semibold">
        
        <div className="logo-text-wrapper flex gap-4 items-center justify-center">
         <Link href={"/"}><Image width="179" height="64" alt="logo" src="/header_logo.png" /></Link> 
        </div>

        <div className="quick-links hidden md:flex items-center">
          <Link href="/">Home</Link>
          <div className="relative">
            <button
              onClick={toggleServicesMenu}
              className="uppercase font-semibold flex items-center gap-2"
            >
              Services <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="dropdown absolute top-8 left-0 bg-white shadow-lg py-2 rounded-md z-10">
                <Link href="/service/2danimation" className="block px-4 py-2 hover:bg-gray-100">2D Animation</Link>
                <Link href="/service/3danimation" className="block px-4 py-2 hover:bg-gray-100">3D Animation</Link>
                <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
              </div>
            )}
          </div>

          <Link href="/">Our Process</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {menuOpen && (
        <div className="maninmenu flex flex-col items-center gap-4 py-4 uppercase font-semibold bg-gray-100 md:hidden">
          <Link href="/" onClick={toggleMenu}>Home</Link>

          <div className="relative w-full text-center">
            <button
              onClick={toggleServicesMenu}
              className="w-full uppercase font-semibold flex items-center justify-center gap-2"
            >
              Services <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="w-full bg-gray-200 py-2">
                <Link href="/service" onClick={toggleMenu} className="block py-2">Service</Link>
                <Link href="/service1" onClick={toggleMenu} className="block py-2">Service 1 </Link>
                <Link href="/service2" onClick={toggleMenu} className="block py-2">Service 2</Link>
              </div>
            )}
          </div>

          <Link href="/" onClick={toggleMenu}>Our Process</Link>
          <Link href="/" onClick={toggleMenu}>Blog</Link>
          <Link href="/" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
