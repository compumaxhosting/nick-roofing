"use client";
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLLIElement>(null);
    const mobileServicesRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const toggle = () => {
        setMenuOpen(!menuOpen);
        // Close services dropdown when mobile menu closes
        if (menuOpen) {
            setServicesOpen(false);
        }
    }
    
    const pathname = usePathname();
    
    // Check if any service page is active
    const isServiceActive = 
        pathname === '/skylights' || 
        pathname === '/gutter-installation' || 
        pathname === '/waterproofing' || 
        pathname === '/roofing-repair' || 
        pathname === '/siding';

    // Handle mouse enter with delay
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setServicesOpen(true);
    };

    // Handle mouse leave with delay
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 150); // 150ms delay before closing
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Close mobile menu when clicking on a link
    const closeMobileMenu = () => {
        setMenuOpen(false);
        setServicesOpen(false);
    };

    return (
        <nav className='bg-[#E07B3B] px-4 md:px-12'>
            <div className='container mx-auto h-24 flex items-center justify-between'>
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

                    {/* SERVICES DROPDOWN */}
                    <li 
                        className="relative group"
                        ref={servicesRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex items-center gap-1">
                            <Link href="/services">
                                <span
                                    className={`transition-colors duration-300 ${isServiceActive || pathname === '/services' ? 'text-[#36454f]' : 'text-white'
                                        }`}
                                >
                                    SERVICES
                                </span>
                            </Link>
                            <FaChevronDown className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </div>
                        <span
                            className={`absolute left-0 bottom-0 top-6 h-[2px] bg-[#36454f] transition-all duration-300 ${isServiceActive || pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                        ></span>
                        
                        {/* Dropdown Menu with bridge */}
                        <div 
                            className={`absolute left-0 top-full w-56 transition-all duration-200 ease-out ${servicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}
                            style={{ zIndex: 20 }}
                        >
                            {/* Invisible bridge to prevent gap */}
                            <div className="h-2 w-full bg-transparent"></div>
                            
                            <div className="bg-[#E07B3B] rounded-md shadow-lg border border-[#36454f]">
                                <div className="py-1">
                                    <Link href="/skylight-repair-hawthorne-nj">
                                        <span className={`block px-4 py-2 hover:bg-[#36454f] hover:text-white transition-colors duration-200 ${pathname === '/skylight-repair-hawthorne-nj' ? 'bg-[#36454f] text-white' : 'text-white'}`}>
                                            SKYLIGHTS
                                        </span>
                                    </Link>
                                    <Link href="/gutter-installation-hawthorne-nj">
                                        <span className={`block px-4 py-2 hover:bg-[#36454f] hover:text-white transition-colors duration-200 ${pathname === '/gutter-installation-hawthorne-nj' ? 'bg-[#36454f] text-white' : 'text-white'}`}>
                                            GUTTER INSTALLATION
                                        </span>
                                    </Link>
                                    <Link href="/water-proofing-hawthorne-nj">
                                        <span className={`block px-4 py-2 hover:bg-[#36454f] hover:text-white transition-colors duration-200 ${pathname === '/water-proofing-hawthorne-nj' ? 'bg-[#36454f] text-white' : 'text-white'}`}>
                                            WATERPROOFING
                                        </span>
                                    </Link>
                                    <Link href="/roof-repair-hawthorne-nj">
                                        <span className={`block px-4 py-2 hover:bg-[#36454f] hover:text-white transition-colors duration-200 ${pathname === '/roof-repair-hawthorne-nj' ? 'bg-[#36454f] text-white' : 'text-white'}`}>
                                            ROOFING REPAIR
                                        </span>
                                    </Link>
                                    <Link href="/siding-services-hawthorne-nj">
                                        <span className={`block px-4 py-2 hover:bg-[#36454f] hover:text-white transition-colors duration-200 ${pathname === '/siding-services-hawthorne-nj' ? 'bg-[#36454f] text-white' : 'text-white'}`}>
                                            SIDING
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
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

            {/* Mobile Menu */}
            <div
                className={`lg:hidden bg-[#E07B3B] transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="container mx-auto px-4 py-2">
                    <ul className="flex flex-col gap-2 text-white">
                        <li className="border-b border-[#ffffff50] py-1">
                            <Link href="/" onClick={closeMobileMenu}>
                                <span className={`text-sm ${pathname === '/' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                    HOME
                                </span>
                            </Link>
                        </li>

                        <li className="border-b border-[#ffffff50] py-1">
                            <Link href="/about" onClick={closeMobileMenu}>
                                <span className={`text-sm ${pathname === '/about' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                    ABOUT
                                </span>
                            </Link>
                        </li>

                        {/* Mobile Services Dropdown */}
                        <li className="border-b border-[#ffffff50] py-1">
                            <div 
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                <span className={`text-sm ${isServiceActive || pathname === '/services' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                    SERVICES
                                </span>
                                <FaChevronDown className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                            </div>
                            
                            {/* Mobile Dropdown Content */}
                            <div 
                                ref={mobileServicesRef}
                                className={`pl-4 mt-1 space-y-1 transition-all duration-300 ease-in-out ${servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div onClick={closeMobileMenu}>
                                    <Link href="/skylight-repair-hawthorne-nj">
                                        <span className={`flex items-center py-1 text-sm ${pathname === '/skylight-repair-hawthorne-nj' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                            SKYLIGHTS
                                        </span>
                                    </Link>
                                </div>
                                <div onClick={closeMobileMenu}>
                                    <Link href="/gutter-installation-hawthorne-nj">
                                        <span className={`flex items-center py-1 text-sm ${pathname === '/gutter-installation-hawthorne-nj' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                            GUTTER INSTALLATION
                                        </span>
                                    </Link>
                                </div>
                                <div onClick={closeMobileMenu}>
                                    <Link href="/water-proofing-hawthorne-nj">
                                        <span className={`flex items-center py-1 text-sm ${pathname === '/water-proofing-hawthorne-nj' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                            WATERPROOFING
                                        </span>
                                    </Link>
                                </div>
                                <div onClick={closeMobileMenu}>
                                    <Link href="/roof-repair-hawthorne-nj">
                                        <span className={`flex items-center py-1 text-sm ${pathname === '/roof-repair-hawthorne-nj' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                            ROOFING REPAIR
                                        </span>
                                    </Link>
                                </div>
                                <div onClick={closeMobileMenu}>
                                    <Link href="/siding-services-hawthorne-nj">
                                        <span className={`flex items-center py-1 text-sm ${pathname === '/siding-services-hawthorne-nj' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                                            SIDING
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </li>

                        <li className="border-b border-[#ffffff50] py-1">
                            <Link href="/gallery" onClick={closeMobileMenu}>
                                <span className={`text-sm ${pathname === '/gallery' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                    GALLERY
                                </span>
                            </Link>
                        </li>

                        <li className="border-b border-[#ffffff50] py-1">
                            <Link href="/contact" onClick={closeMobileMenu}>
                                <span className={`text-sm ${pathname === '/contact' ? 'text-[#36454f] font-bold' : 'text-white'}`}>
                                    CONTACT US
                                </span>
                            </Link>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-6 pb-4 text-white">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-white rounded-full p-2 flex items-center justify-center"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="#"
                            aria-label="X (Twitter)"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-white rounded-full p-2 flex items-center justify-center"
                        >
                            <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="currentColor" d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0ZM849.338 111.684H1072.09L649.877 670.246L849.338 111.684ZM150.662 111.684H373.415L751.123 631.246L373.415 1115.32H150.662L572.875 556.754L150.662 111.684ZM1072.09 1115.32H849.338L471.63 595.246L849.338 111.684H1072.09L649.877 670.246L1072.09 1115.32Z"/>
                                </g>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-white rounded-full p-2 flex items-center justify-center"
                        >
                            <FaFacebookF size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;