"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
    {
        id: 1,
        image: "/slide1.jpeg",
    },
    {
        id: 2,
        image: "/slide2.jpeg",
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
        <div className="relative w-full h-[87.5vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0  flex flex-col justify-center items-start p-10 pl-20 text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NICK ROOFING</h1>
                        <p className="text-lg md:text-2xl mb-4">35 years of experience in roofing business</p>
                        <p className="text-md md:text-2xl mb-6">Residential & Commercial Services</p>

                        <a
                            href="tel:9732070689"
                            className="inline-flex items-center gap-3  px-6 py-3  hover:bg-[#e07b3b] transition-colors text-2xl"
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
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white  transition-colors z-20"
            >
                <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#364f4f] hover:bg-[#e07b3b] text-white  transition-colors z-20"
            >
                <FaArrowRight />
            </button>
        </div>

    );
}
