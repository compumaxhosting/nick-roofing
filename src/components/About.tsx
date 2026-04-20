"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/skylights-intro.webp",
    "/gutter1.webp",
    "/waterproofing3.webp",
    "/roof-repair2.webp",
    "/gallery5.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-10 px-2 md:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="w-[85%] md:w-1/2">
            <h2 className="text-xl md:text-l font-bold mb-[20px] tracking-[1px] text-[#364f4f]">
              Roofing Company in Hawthorne NJ With 35+ Years of Experience
            </h2>

            <span className="block w-[40px] h-[2px] bg-[#364f4f] mb-[30px]"></span>

            <p className="mb-[15px] text-L leading-relaxed text-[#333] font-semibold">
              Trusted Roofing & Exterior Pros Right Here in Hawthorne, NJ
            </p>

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              Keeping a home bone-dry in North Jersey is no small feat,
              especially with our unpredictable mix of humid summers and heavy
              winter snow. At Nick Roofing, we specialize in complete roofing
              and exterior solutions in Hawthorne, NJ, helping your home stand
              strong against the elements. Whether you’re dealing with a
              stubborn leak near Goffle Brook Park or looking to brighten up
              your living room with a new skylight, we bring local expertise to
              every shingle and seam.
            </p>

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              Nick Roofing provides complete roofing and exterior solutions in
              Hawthorne, NJ, for homeowners needing reliable repairs, siding,
              and gutter systems. Our primary benefit is long-term moisture
              protection; by combining advanced waterproofing with expert roof
              repair and maintenance, we ensure your property remains leak-free
              and energy-efficient year-round.
            </p>

            <Link
              href="/about"
              className="mt-4 inline-block text-white text-sm uppercase px-[25px] py-[10px] bg-[#36454F] hover:bg-[#2e3d45] transition-all duration-300"
            >
              Learn More About Our Roofing Company
            </Link>
          </div>

          {/* RIGHT IMAGE CAROUSEL */}
          <div className="w-full md:w-1/2 relative">
            <div className="hidden md:block w-full h-[400px] relative shadow-lg overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                {images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt="Nick Roofing roof repair and installation services in Hawthorne NJ"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-full h-[300px] relative shadow-lg overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image}
                      alt="Nick Roofing roofing services in Hawthorne NJ"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
