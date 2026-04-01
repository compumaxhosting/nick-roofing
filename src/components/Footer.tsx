import React from "react";
import { BottomMenu } from "./BottomMenu";
import Link from "next/link";
import BackToTop from "./BackToTop";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <section>
        <div className="bg-[#e07b3b] py-6 px-6 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-y-8 md:gap-y-0 md:gap-x-12">
            {/* ABOUT */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  About Nick Roofing
                </h3>
                <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
              </div>

              <p className="text-sm text-white">
                Nick Roofing provides reliable residential, commercial, and
                industrial roofing services in Hawthorne, NJ and surrounding
                areas. With over 35 years of experience, we are known for
                quality craftsmanship, honest pricing, and long-lasting roofing
                solutions.
              </p>
            </div>

            {/* QUICK LINKS – OLD LINKS KEPT */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Quick Links
                </h3>
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
                  <Link href="/blog">BLOG</Link>
                </li>
                <li>
                  <Link href="/contact">CONTACT US</Link>
                </li>
                <li>
                  <Link href="/site-map">SITE MAP</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col pb-6">
                <h3 className="text-sm font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
              </div>

              <p className="text-white text-sm mb-4">
                Looking for a trusted roofing contractor in Hawthorne, NJ?
                Contact Nick Roofing today for a free estimate.
              </p>

              <div
                style={{ fontFamily: "'Oswald', sans-serif" }}
                className="text-white text-sm space-y-2 mb-4"
              >
                <div>
                  <span className="font-semibold">Tel: </span>
                  <Link href="tel:+19732070689" className="hover:underline">
                    (973) - 207 - 0689
                  </Link>
                </div>

                <div>
                  <span className="font-semibold">Email: </span>
                  <Link
                    href="mailto:nickcontractorllc@gmail.com"
                    className="hover:underline"
                  >
                    nickcontractorllc@gmail.com
                  </Link>
                </div>

                <div>
                  <span className="font-semibold">Location: </span>
                  525 Lafayette Ave, Hawthorne, NJ 07506
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 text-black">
                <Link
                  href="https://www.instagram.com/nickroofingnj/"
                  target="_blank"
                  className="border-2 border-black rounded-md p-2"
                >
                  <FaInstagram size={20} />
                </Link>

                <Link
                  href="https://x.com/nickroofingnj"
                  target="_blank"
                  className="border-2 border-black rounded-md p-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 1200 1227"
                    fill="currentColor"
                  >
                    <path d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0Z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.facebook.com/NickroofingNJ"
                  target="_blank"
                  className="border-2 border-black rounded-md p-2"
                >
                  <FaFacebookF size={20} />
                </Link>

                <Link
                  href="https://maps.app.goo.gl/RMCBhtSQia5Vzor76"
                  target="_blank"
                  className="border-2 border-black rounded-md p-2"
                >
                  <FaGoogle size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#364f4f] mb-14 md:mb-0 text-white py-5 text-center text-sm">
          <p>© 2026 Nick Roofing. All Rights Reserved.</p>
        </div>

        <BottomMenu />
      </section>

      <BackToTop />
    </>
  );
};
