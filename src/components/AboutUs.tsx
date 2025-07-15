"use client";
import Image from "next/image";
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

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <section className="py-10 px-4 md:py-14 md:px-2 bg-white">
      <div className="max-w-screen-xl mx-auto md:px-10">
        {/* Top Section with Image and First Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 mb-10">
          {/* Left Content */}
          <div className="w-full px-2 md:px-0 md:w-1/2">
            <h2 className="mb-[20px] tracking-[1px] text-[#364f4f]">
              <span className="text-lg md:text-xl font-bold">About Nick Roofing – </span>
              <span className="text-base md:text-lg font-normal">Expert Skylight, Gutter, Waterproofing, Roof Repair & Siding Services in New Jersey</span>
            </h2>

            <span className="block w-[40px] h-[2px] bg-[#364f4f] mb-[30px]"></span>

            <h3 className="text-lg font-semibold mb-3 text-[#364f4f]">
              Your Local Roofing & Home Improvement Experts
            </h3>

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              Welcome to Nick Roofing, the trusted choice for homeowners across New Jersey. For over 35 years, we&apos;ve provided reliable and affordable roofing and home improvement solutions, specializing in:
            </p>

            <ul className="mb-[15px] text-sm leading-relaxed text-[#333] list-disc pl-5 space-y-1">
              <li><strong>Skylight Installation</strong> – Brighten your home with natural light.</li>
              <li><strong>Gutter Installation</strong> – Protect your property with seamless, durable gutters.</li>
              <li><strong>Waterproofing Services</strong> – Stop leaks and safeguard your home from water damage.</li>
              <li><strong>Roof Repair Services</strong> – Restore and maintain your roof&apos;s strength and safety.</li>
              <li><strong>Siding Services</strong> – Upgrade your home&apos;s exterior for beauty and durability.</li>
            </ul>
          </div>

          {/* Right Image Carousel */}
          <div className="w-full px-2 md:px-0 md:w-1/2 relative">
            {/* Image Carousel for medium+ screens */}
            <div className="hidden md:block w-full h-[400px] relative shadow-lg overflow-hidden">
              <div className="relative w-full h-full">
                {/* Carousel Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
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
                  {images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex
                        ? 'bg-white scale-110'
                        : 'bg-white/60 hover:bg-white/80'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-full h-[300px] relative shadow-lg overflow-hidden rounded-lg">
              <div className="relative w-full h-full">
                {/* Carousel Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
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
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200 z-10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Mobile Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
                  {images.map((_: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${index === currentImageIndex
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

        {/* Full Width Content Below Image */}
        <div className="w-full px-2 md:px-0">
          <h3 className="text-lg font-semibold mb-3 text-[#364f4f]">
            Why Choose Nick Roofing?
          </h3>

          <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
            Our experienced team understands the unique challenges of New Jersey&apos;s climate. We deliver high-quality craftsmanship, personalized solutions, and exceptional customer service to keep your home safe and beautiful year-round.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-[#364f4f]">
            Serving Communities Near You
          </h3>

          <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
            We proudly serve Hawthorne, Franklin Lakes, Midland Park, Allendale, Waldwick, Ramsey, Saddle River, Ridgewood, Glen Rock, Fair Lawn, Clifton, Paramus, Oradell, North Haledon, Totowa, Wayne, and surrounding NJ areas.
          </p>

          <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
            Looking for &quot;roof repair near me&quot; or &quot;gutter installation in New Jersey&quot;? Nick Roofing is your local expert for all roofing and exterior services.
          </p>

          <h3 className="text-lg font-semibold mb-3 text-[#364f4f]">
            Contact Us Today
          </h3>

          <p className="mb-[20px] text-sm leading-relaxed text-[#333]">
            Ready to improve your home? Call Nick Roofing at <a href="tel:+19732070689" className="font-bold text-[#364f4f] hover:text-[#2e3d45] transition-colors duration-200">(973) - 207 - 0689</a> for a free estimate or visit our website. Experience the best roofing and home improvement services in New Jersey!
          </p>

        </div>
      </div>
    </section>
  );
}