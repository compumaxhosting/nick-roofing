"use client";
import Link from 'next/link';
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
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mt-4 space-y-2 md:hidden">
          <li><Link href="/" className="block">Home</Link></li>
          <li><Link href="/about" className="block">About</Link></li>
          <li><Link href="/services" className="block">Services</Link></li>
          <li><Link href="/contact" className="block">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
