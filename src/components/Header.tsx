"use client";
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import React from 'react'
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => {
        setMenuOpen(!menuOpen)
    }
    const pathname = usePathname();
    return (
        <nav className='bg-[#E07B3B]'>
            <div className='container mx-auto  h-28  flex items-center justify-between '>
                <Link href='/'>
                    <Image src='/logo.png' alt='' width={200} height={200} />
                </Link>

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

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-4 pb-4 text-white">
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="#"
                        aria-label="X (Twitter)"
                        className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                    >
                        {/* X (Twitter) SVG logo */}
                        <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="currentColor" d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0ZM849.338 111.684H1072.09L649.877 670.246L849.338 111.684ZM150.662 111.684H373.415L751.123 631.246L373.415 1115.32H150.662L572.875 556.754L150.662 111.684ZM1072.09 1115.32H849.338L471.63 595.246L849.338 111.684H1072.09L649.877 670.246L1072.09 1115.32Z"/>
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                    >
                        <FaFacebookF size={20} />
                    </a>
                </div>
            </div>


        </nav >

    )
}

export default Header