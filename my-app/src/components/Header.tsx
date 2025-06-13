"use client";
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => {
        setMenuOpen(!menuOpen)
    }
    const pathname = usePathname();
    return (
        <nav className='bg-[#E07B3B]'>
            <div className='container mx-auto  h-20  flex items-center justify-between '>
                <Image src='/logo.png' alt='' width={200} height={200} />

                <ul className='hidden lg:flex gap-6 text-white cursor-pointer'>
                    <Link href={'/'} className={`${pathname == '/' ? "text-black" : "text-white"}`}>
                        <li>HOME</li>
                    </Link>
                    <li className="relative group">
                        <span className="text-white group-hover:text-black transition-colors duration-300">
                            ABOUT
                        </span>
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                    </li>


                    <li>SERVICES</li>
                    <li>GALLERY</li>
                    <li>CONTACT</li>
                </ul>

                <div onClick={toggle} className='lg:hidden pr-4 text-white cursor-pointer'>
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={25} />}
                </div>

            </div><div className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden  ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className='flex flex-col items-center lg:hidden gap-4 mt-6 px-4 pb-4 text-white'>
                    <li>HOME</li>
                    <div className='border-b-2 w-3/4'></div>
                    <li>ABOUT</li>
                    <div className='border-b-2 w-3/4'></div>
                    <li>SERVICES</li>
                    <div className='border-b-2 w-3/4'></div>
                    <li>GALLERY</li>
                    <div className='border-b-2 w-3/4'></div>
                    <li>CONTACT</li>
                </ul>
            </div>

        </nav >

    )
}

export default Header