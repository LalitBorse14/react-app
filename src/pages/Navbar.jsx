import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="bg-[#00A300] text-white px-3 py-1">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

        {/* Logo / Title */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-gray-800 md:hidden">
            AGRI TRADE GLOBAL
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 w-full justify-start">
          <a href="#/home" className="hover:text-black">Home</a>
          <a href="#/about" className="hover:text-black">About Us</a>
          <a href="#/gallery" className="hover:text-black">Gallery</a>
          <a href="#/contact" className="hover:text-black">Contact Us</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-3 bg-[#00A300]">
          <a href="#/home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#/about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#/gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#/contact" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}