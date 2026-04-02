"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebookF,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  const navLinkStyle = (active: boolean) =>
    `relative inline-block pb-1 text-white transition duration-300 ${
      active ? "text-black" : "hover:text-black"
    }
    after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:bg-black
    after:origin-left after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
    ${active ? "after:scale-x-100" : ""}`;

  const serviceLinks = [
    { name: "SKYLIGHTS", href: "/skylight-repair-hawthorne-nj" },
    { name: "GUTTER INSTALLATION", href: "/gutter-installation-hawthorne-nj" },
    { name: "WATERPROOFING", href: "/water-proofing-hawthorne-nj" },
    { name: "ROOFING REPAIR", href: "/roof-repair-hawthorne-nj" },
    { name: "SIDING", href: "/siding-services-hawthorne-nj" },
  ];

  const isServiceActive = serviceLinks.some((item) => pathname === item.href);

  return (
    <header className="bg-[#E07B3B] w-full relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Nick Roofing"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
          <Link href="/" className={navLinkStyle(isActive("/"))}>
            HOME
          </Link>

          <Link href="/about" className={navLinkStyle(isActive("/about"))}>
            ABOUT
          </Link>

          {/* SERVICES (No Button Now) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div
              className={`${navLinkStyle(
                isServiceActive,
              )} cursor-pointer flex items-center gap-2`}
            >
              SERVICES <FaChevronDown size={12} />
            </div>

            <div
              className={`absolute left-0 top-full w-56 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <div className="pt-3">
                <div className="bg-[#E07B3B] py-2">
                  {serviceLinks.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`block px-4 py-2 relative text-white transition ${
                          pathname === item.href
                            ? "text-black"
                            : "hover:text-black"
                        }
                        after:absolute after:left-4 after:bottom-1
                        after:h-[2px] after:bg-black
                        after:origin-left after:scale-x-0
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100
                        ${pathname === item.href ? "after:scale-x-100" : ""}`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link href="/gallery" className={navLinkStyle(isActive("/gallery"))}>
            GALLERY
          </Link>

          <Link href="/blog" className={navLinkStyle(isActive("/blog"))}>
            BLOG
          </Link>

          <Link href="/contact" className={navLinkStyle(isActive("/contact"))}>
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white text-2xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-[#E07B3B]
          p-6 text-white transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-xl"
          >
            <FaTimes />
          </button>

          <div className="mb-8">
            <Image src="/logo.webp" alt="Nick Roofing" width={160} height={50} />
          </div>

          <div className="flex flex-col gap-5 font-semibold tracking-wide text-sm">
            <Link href="/" onClick={() => setIsOpen(false)}>
              HOME
            </Link>

            <Link href="/about" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full"
              >
                SERVICES
                <FaChevronDown
                  size={12}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/gallery" onClick={() => setIsOpen(false)}>
              GALLERY
            </Link>

            <Link href="/blog" onClick={() => setIsOpen(false)}>
              BLOG
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#E07B3B] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-3 rounded-full hover:bg-white hover:text-[#E07B3B] transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
