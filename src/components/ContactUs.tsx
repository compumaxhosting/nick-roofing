"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const ContactUs = () => {
  return (
    <section className="py-16 px-0">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-2xl font-semibold tracking-[1px] mb-5 text-[#364f4f]">
          Contact Our Roofing Company in Hawthorne, NJ
        </h1>
        <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>

        <p className="max-w-2xl mx-auto text-sm text-[#333] leading-relaxed">
          Need professional roof repair, roof installation, gutter installation,
          skylight services, or siding in Hawthorne, NJ? Contact Nick Roofing
          today for reliable service backed by over 35 years of experience.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 px-4 py-8 max-w-7xl mx-auto">
        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex flex-col items-start w-64 flex-shrink-0">
          <div className="flex flex-col pb-6">
            <h3 className="text-sm font-semibold text-[#364f4f] mb-4">
              Get In Touch
            </h3>
            <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
          </div>

          <p className="mb-8 text-sm">
            Have a roofing project in Hawthorne or nearby areas? Our experienced
            roofing contractors are ready to provide dependable, high-quality
            solutions for residential and commercial properties.
          </p>

          <div style={{ fontFamily: "'Oswald', sans-serif" }}>
            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Tel: </span>
              <Link href="tel:19732070689" className="hover:underline">
                (973) - 207 - 0689
              </Link>
            </div>

            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Email: </span>
              <Link
                href="mailto:nickcontractorllc@gmail.com"
                className="hover:underline"
              >
                nickcontractorllc@gmail.com
              </Link>
            </div>

            <div className="mb-4 text-[#666666]">
              <span className="font-semibold text-black">Location: </span>
              <Link
                href="https://www.google.com/maps?q=525+Lafayette+Ave,+Hawthorne,+NJ+07506"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                525 Lafayette Ave, Hawthorne, NJ 07506
              </Link>
            </div>

            <div>
              <span className="font-semibold">Business Hours: </span>
              <div className="ml-2">
                <p>Mon - Sat: 7:30 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-black pt-6">
            <Link
              href="https://www.instagram.com/nickroofingnj/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </Link>

            <Link
              href="https://x.com/nickroofingnj"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              {/* X Logo */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0Z" />
              </svg>
            </Link>

            <Link
              href="https://www.facebook.com/NickroofingNJ"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              <FaFacebookF size={20} />
            </Link>

            <Link
              href="https://maps.app.goo.gl/RMCBhtSQia5Vzor76"
              aria-label="Google Maps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
            >
              <FaGoogle size={20} />
            </Link>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1">
          <ContactForm />

          <div className="overflow-hidden flex-shrink-0 w-full lg:w-80 h-64 lg:h-auto lg:min-h-[500px]">
            <iframe
              title="Nick Roofing Contractor in Hawthorne NJ - Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.1416884146156!2d-74.1548818!3d40.95647479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fdb2acb897b1%3A0xdf8cadd431064b06!2sNick%20Roofing%20Contractor%20%7C%20nickroofing.com!5e0!3m2!1sen!2sin!4v1771856775118!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
