"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const slides = [
  { id: 1, image: "/slide1.jpeg" },
  { id: 2, image: "/slide4.png" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[65vh] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Nick Roofing providing roof repair and installation services in Hawthorne NJ"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* CONTENT OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-10 pl-4 md:pl-16 lg:pl-16 xl:pl-80 text-white z-20">
          {/* 🔥 SEO OPTIMIZED H1 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Roofing Contractor in Hawthorne NJ <br />
            Residential & Commercial Roofing Experts
          </h1>

          {/* First 100 words matter for SEO */}
          <p className="text-md md:text-2xl mb-4">
            Nick Roofing is a trusted roofing contractor in Hawthorne, NJ
            delivering professional roof repair, roof installation, and gutter
            services backed by 35+ years of experience.
          </p>

          <p className="text-md md:text-2xl mb-6">
            Licensed, insured, and committed to protecting homes and businesses
            throughout Passaic County.
          </p>

          <Link
            href="tel:9732070689"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#e07b3b] hover:bg-transparent transition-colors text-2xl font-bold duration-500"
          >
            Call Now: (973) 207-0689
          </Link>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white transition-colors z-30 duration-500"
          aria-label="Previous Slide"
        >
          <FaArrowLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white transition-colors z-30 duration-500"
          aria-label="Next Slide"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* CTA BAR */}
      <section className="bg-[#36454F] py-5 lg:px-20 xl:px-80">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-white sm:text-[16px] md:text-[18px] lg:text-[20px] flex-1"
            style={{
              fontFamily: `"Playfair Display", serif`,
              fontStyle: "italic",
            }}
          >
            Need roof repair or a new roof installation in Hawthorne, NJ? Nick
            Roofing provides reliable, high-quality roofing solutions you can
            trust.
          </p>

          <Link
            href="/contact"
            className="text-white border border-white px-[25px] py-[10px] hover:bg-white hover:text-[#36454F] transition-colors duration-300 whitespace-nowrap flex-shrink-0"
          >
            Get a Free Roofing Quote
          </Link>
        </div>
      </section>
    </>
  );
}
