"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of 5 images for the carousel
  const images = [
    "/skylights-intro.jpg",
    "/gutter1.png", 
    "/waterproofing3.jpg",
    "/roof-repair2.jpg",
    "/gallery5.jpg"
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <section className="py-10 px-2 md:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto  md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="w-[85%] md:w-1/2">
            <h2 className="text-xl md:text-l font-bold mb-[20px] tracking-[1px] text-[#364f4f]">
              WHO ARE WE
            </h2>

            <span className="block w-[40px] h-[2px] bg-[#364f4f] mb-[30px]"></span>

            <p className="mb-[10px] text-sm leading-relaxed text-[#333]">
              Welcome to Nick Roofing, your trusted partner for all your home
              improvement needs. Specializing in skylight installation, gutter
              installation, and waterproofing services, we pride ourselves on
              delivering high-quality craftsmanship and exceptional customer
              service.
            </p>

            <p className="mb-[10px] text-sm leading-relaxed text-[#333]">
              With{" "}
              <span className="font-bold">
                35 years of experience in roofing business in NJ
              </span>
              , Nick Roofing has earned a reputation for reliability and
              expertise. Whether you&apos;re looking to brighten up your home
              with a new skylight, protect it from water damage with expert
              waterproofing solutions, or enhance its efficiency with seamless
              gutter installation, we have the skills and knowledge to exceed
              your expectations.
            </p>

            <Link
              href="/about"
              className="mt-4 inline-block text-white text-sm uppercase px-[25px] py-[10px] bg-[#36454F] hover:bg-[#2e3d45] transition-all duration-300"
            >
              More About Us
            </Link>
          </div>

          {/* Right Image Carousel */}
          <div className="w-full md:w-1/2 relative">
            {/* Image Carousel for medium+ screens */}
            <div className="hidden md:block w-full h-[400px] relative shadow-lg overflow-hidden">
              <div className="relative w-full h-full">
                {/* Carousel Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Nick Roofing ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-full h-[300px] relative shadow-lg overflow-hidden">
              <div className="relative w-full h-full">
                {/* Carousel Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Nick Roofing ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Mobile Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}