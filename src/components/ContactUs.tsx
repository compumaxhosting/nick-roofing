"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";

export const ContactUs = () => {
  return (
    <section className="py-16">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center">
        <h1 className="mb-5 text-xl font-semibold tracking-[1px] text-[#364f4f] md:text-2xl">
          Contact Our Roofing Company in Hawthorne, NJ
        </h1>

        <span className="mx-auto mb-7 block h-0.5 w-10 bg-[#36454F]" />

        <p className="text-sm leading-relaxed text-[#333]">
          Need professional roof repair, roof installation, gutter installation,
          skylight services, or siding in Hawthorne, NJ? Contact Nick Roofing
          today for reliable service backed by over 35 years of experience.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-72 lg:flex-shrink-0">
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-semibold text-[#364f4f]">
              Get In Touch
            </h3>

            <span className="mb-5 block h-0.5 w-10 bg-[#36454F]" />

            <p className="text-sm leading-7 text-[#555]">
              Have a roofing project in Hawthorne or nearby areas? Our
              experienced roofing contractors are ready to provide dependable,
              high-quality solutions for residential and commercial properties.
            </p>
          </div>

          <div
            className="space-y-5 text-[#666]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            <div>
              <span className="font-semibold text-black">Tel:</span>{" "}
              <Link href="tel:19732070689" className="hover:underline">
                (973) - 207 - 0689
              </Link>
            </div>

            <div>
              <span className="font-semibold text-black">Email:</span>{" "}
              <Link
                href="mailto:nickcontractorllc@gmail.com"
                className="break-all hover:underline"
              >
                nickcontractorllc@gmail.com
              </Link>
            </div>

            <div>
              <span className="font-semibold text-black">Location:</span>{" "}
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
              <span className="font-semibold text-black">Business Hours:</span>

              <div className="mt-2 ml-2 space-y-1">
                <p>Mon - Sat: 7:30 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 3:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://www.instagram.com/nickroofingnj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-md border-2 border-black p-2 transition hover:text-[#36454f]"
            >
              <FaInstagram size={20} />
            </Link>

            <Link
              href="https://x.com/nickroofingnj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="rounded-md border-2 border-black p-2 transition hover:text-[#36454f]"
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
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-md border-2 border-black p-2 transition hover:text-[#36454f]"
            >
              <FaFacebookF size={20} />
            </Link>

            <Link
              href="https://maps.app.goo.gl/RMCBhtSQia5Vzor76"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="rounded-md border-2 border-black p-2 transition hover:text-[#36454f]"
            >
              <FaGoogle size={20} />
            </Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="w-full flex-1">
          <ContactForm />
        </div>

        {/* RIGHT */}
        <div className="flex w-full flex-col gap-3 lg:w-[340px] lg:flex-shrink-0">
          {/* Review Card */}
          <Link
            href="https://g.page/r/CQZLBjHUrYzfEBM/review"
            target="_blank"
            rel="noreferrer"
            className="group rounded-[2rem] border border-[#a89276]/30 bg-primary p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#847361]">
              Review Us
            </div>

            <div className="relative mx-auto my-5 aspect-square w-full max-w-[190px] overflow-hidden rounded-xl bg-white p-2">
              <Image
                src="/scanner-review.jpg"
                alt="Scan to leave a review"
                fill
                className="object-contain"
              />
            </div>

            <div className="rounded-xl border border-[#eab308]/20 bg-[#2d2312] px-4 py-4 text-center text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.1)] transition group-hover:bg-[#362a14]">
              <p className="text-sm font-bold">★ Click or Scan</p>
              <p className="text-sm font-bold">to Leave a 5-Star</p>
              <p className="text-sm font-bold">Review</p>
            </div>
          </Link>

          {/* Full Width Google Map */}
        </div>
      </div>
      <div className="mt-10 m-auto overflow-hidden rounded-2xl shadow-lg w-2/3">
        <iframe
          title="Nick Roofing Contractor in Hawthorne NJ - Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.1416884146156!2d-74.1548818!3d40.95647479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fdb2acb897b1%3A0xdf8cadd431064b06!2sNick%20Roofing%20Contractor%20%7C%20nickroofing.com!5e0!3m2!1sen!2sin!4v1771856775118!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
