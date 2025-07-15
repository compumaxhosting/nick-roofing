"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";





const slides = [
    {
        id: 1,
        image: "/slide1.jpeg",
    },
    {
        id: 2,
        image: "/slide4.png",
    },
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
            <div className="relative w-full h-[65vh] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            fill
                            className="object-cover"
                            priority={index === 0} />
                        <div className="absolute inset-0  flex flex-col justify-center items-start p-10 pl-4 md:pl-16 lg:pl-16 xl:pl-80 text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">NICK ROOFING</h1>
                            <p className="text-md md:text-2xl mb-4">35 years of experience in roofing business</p>
                            <p className="text-md md:text-2xl mb-6">Residential & Commercial Services</p>

                            <a
                                href="tel:9732070689"
                                className="inline-flex items-center gap-3  px-6 py-3  hover:bg-transparent  bg-[#e07b3b] transition-colors text-2xl font-bold duration-500"
                            >
                                (973) - 207 - 0689
                                {/* <span className="w-10 h-10 flex items-center justify-center  hover:bg-[#e07b3b] transition-colors ">
                            <FaArrowRight className="text-white" />
                            </span> */}
                            </a>
                        </div>
                    </div>
                ))}
                {/* Left Arrow */}
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="hidden lg:flex absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white transition-colors z-20 duration-500"
                >
                    <FaArrowLeft />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="hidden lg:flex absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white transition-colors z-20 duration-500"
                >
                    <FaArrowRight />
                </button>

            </div>
            <section className="bg-[#36454F] py-5 lg:px-20 xl:px-80">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className={`text-white sm:text-[16px] md:text-[18px] lg:text-[20px] `} style={{
                        fontFamily: `"Playfair Display", serif`,
                        fontStyle: "italic",
                    }}>
                        Looking for a high-quality roofing company for your project? Nick Roofing has you covered!
                    </p>
                    <Link
                        href="/contact"
                        className="text-white border border-white px-[25px] py-[10px] hover:bg-white hover:text-[#36454F] transition-colors duration-300"
                    >
                        Get a Quote
                    </Link>
                </div>
            </section>

        </>

    );

}
