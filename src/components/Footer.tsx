import React from "react";
import { BottomMenu } from "./BottomMenu";
import Link from "next/link";
import BackToTop from "./BackToTop";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <section>
        <div className="bg-[#e07b3b] py-6 px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-y-8 md:gap-y-0 md:gap-x-12">
            {/* ABOUT US */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h1 className="text-sm font-semibold text-white mb-4">
                  ABOUT US
                </h1>
                <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
              </div>
              <p className="text-sm text-white">
                Nick Roofing has provided top-quality residential, commercial, and
                industrial roofing in Northern New Jersey. We&apos;re known for
                integrity, craftsmanship, and exceptional customer care. With
                expert installation and premium materials, we ensure durable,
                reliable roofs. Your roof, our expertise—built to last!
              </p>
            </div>

            {/* SERVICES */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h2 className="text-sm font-semibold text-white mb-4">
                  QUICK LINKS
                </h2>
                <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
              </div>
              <ul className="list-disc ml-4 text-sm text-white space-y-2">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
                <li>
                  <Link href="/services">SERVICES</Link>
                </li>
                <li>
                  <Link href="/gallery">GALLERY</Link>
                </li>
                <li>
                  <Link href="contact">CONTACT US</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT US */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h2 className="text-sm font-semibold text-white mb-4">
                  CONTACT US
                </h2>
                <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
              </div>
              <p className="text-white text-sm mb-4">
                Got a roofing project? We&apos;re here to help!
              </p>
              <div
                style={{ fontFamily: "'Oswald', sans-serif" }}
                className="text-white text-sm space-y-2 mb-4"
              >
                <div>
                  <span className="font-semibold">Tel: </span>
                  <a href="tel:+19732070689" className="hover:underline">
                    (973) - 207 - 0689
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:nickcontractorllc@gmail.com"
                    className="hover:underline"
                  >
                    nickcontractorllc@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Location: </span>
                  525 Lafayette Ave, Hawthorne, NJ 07506
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 text-black">
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
                      <path fill="currentColor" d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0ZM849.338 111.684H1072.09L649.877 670.246L849.338 111.684ZM150.662 111.684H373.415L751.123 631.246L373.415 1115.32H150.662L572.875 556.754L150.662 111.684ZM1072.09 1115.32H849.338L471.63 595.246L849.338 111.684H1072.09L649.877 670.246L1072.09 1115.32Z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/nickroofingllc"
                  aria-label="Facebook"
                  className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#364f4f] mb-14 md:mb-0 lg:mb-0 text-white py-5 px-4 md:px-10 lg:px-20 text-center text-sm">
          <p>2025 © Copyright Nick Roofing. All Rights Reserved.</p>
        </div>
        <BottomMenu />
      </section>
      <BackToTop />
    </>
  );
};