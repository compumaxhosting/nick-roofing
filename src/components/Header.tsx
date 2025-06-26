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
            <div className='container mx-auto  h-28  flex items-center justify-between '>
                <Image src='/logo.png' alt='' width={200} height={200} />

                <ul className="hidden lg:flex text-sm gap-6 font-semibold text-white cursor-pointer">
                    {/* HOME */}
                    <li className="relative group">
                        <Link href="/">
                            <span className={`transition-colors duration-300 ${pathname === '/' ? 'text-[#36454f]' : 'text-white'}`}>
                                HOME
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    </li>

                    {/* ABOUT */}
                    <li className="relative group">
                        <Link href="/about">
                            <span className={`transition-colors duration-300 ${pathname === '/about' ? 'text-[#36454f]' : 'text-white'}`}>
                                ABOUT
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    </li>

                    {/* SERVICES */}
                    <li className="relative group">
                        <Link href="/services">
                            <span
                                className={`transition-colors duration-300 ${pathname === '/services' ? 'text-[#36454f]' : 'text-white'
                                    }`}
                            >
                                SERVICES
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    </li>

                    {/* GALLERY */}
                    <li className="relative group">
                        <Link href="/gallery">
                            <span
                                className={`transition-colors duration-300 ${pathname === '/gallery' ? 'text-[#36454f]' : 'text-white'
                                    }`}
                            >
                                GALLERY
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${pathname === '/gallery' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    </li>

                    {/* CONTACT */}
                    <li className="relative group">
                        <Link href="/contact">
                            <span
                                className={`transition-colors duration-300 ${pathname === '/contact' ? 'text-[#36454f]' : 'text-white'
                                    }`}
                            >
                                CONTACT US
                            </span>
                            <span
                                className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            ></span>
                        </Link>
                    </li>
                </ul>

                <div onClick={toggle} className='lg:hidden pr-4 text-white cursor-pointer'>
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={25} />}
                </div>

            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col items-center gap-4 mt-6 px-4 pb-4 text-white">
                    <li className="w-full text-center">
                        <Link href="/">
                            <span className={`${pathname === '/' ? 'text-[#36454f]' : 'text-white'} inline-block w-full transition-colors duration-300`}>
                                HOME
                            </span>
                        </Link>
                        <div className={`border-b-2 mt-1 w-3/4 mx-auto ${pathname === '/' ? 'border-[#36454f]' : 'border-white'}`}></div>
                    </li>

                    <li className="w-full text-center">
                        <Link href="/about">
                            <span className={`${pathname === '/about' ? 'text-[#36454f]' : 'text-white'} inline-block w-full transition-colors duration-300`}>
                                ABOUT
                            </span>
                        </Link>
                        <div className={`border-b-2 mt-1 w-3/4 mx-auto ${pathname === '/about' ? 'border-[#36454f]' : 'border-white'}`}></div>
                    </li>

                    <li className="w-full text-center">
                        <Link href="/services">
                            <span className={`${pathname === '/services' ? 'text-[#36454f]' : 'text-white'} inline-block w-full transition-colors duration-300`}>
                                SERVICES
                            </span>
                        </Link>
                        <div className={`border-b-2 mt-1 w-3/4 mx-auto ${pathname === '/services' ? 'border-[#36454f]' : 'border-white'}`}></div>
                    </li>

                    <li className="w-full text-center">
                        <Link href="/gallery">
                            <span className={`${pathname === '/gallery' ? 'text-[#36454f]' : 'text-white'} inline-block w-full transition-colors duration-300`}>
                                GALLERY
                            </span>
                        </Link>
                        <div className={`border-b-2 mt-1 w-3/4 mx-auto ${pathname === '/gallery' ? 'border-[#36454f]' : 'border-white'}`}></div>
                    </li>

                    <li className="w-full text-center">
                        <Link href="/contact">
                            <span className={`${pathname === '/contact' ? 'text-[#36454f]' : 'text-white'} inline-block w-full transition-colors duration-300`}>
                                CONTACT
                            </span>
                        </Link>
                        <div className={`border-b-2 mt-1 w-3/4 mx-auto ${pathname === '/contact' ? 'border-[#36454f]' : 'border-white'}`}></div>
                    </li>
                </ul>
            </div>

        </nav >

    )
}

export default Header