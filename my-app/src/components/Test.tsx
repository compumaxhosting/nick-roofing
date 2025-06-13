"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative p-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">MySite</h1>

        {/* Menu Icon for Mobile */}
        <div onClick={toggleMenu} className="text-2xl cursor-pointer md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mt-4 space-y-2 md:hidden">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">About</a></li>
          <li><a href="#" className="block">Services</a></li>
          <li><a href="#" className="block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
