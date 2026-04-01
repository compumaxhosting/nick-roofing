"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/skylights-intro.jpg",
    "/gutter1.png",
    "/waterproofing3.jpg",
    "/roof-repair2.jpg",
    "/gallery5.jpg",
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

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              Nick Roofing is a trusted roofing contractor serving Hawthorne, NJ
              and surrounding Passaic County communities. We specialize in
              <strong>
                {" "}
                roof repair, roof installation, gutter installation, skylights,
                and waterproofing services
              </strong>{" "}
              for residential and commercial properties.
            </p>

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              With over <strong>35 years of hands-on roofing experience</strong>
              , our team delivers durable, weather-resistant roofing solutions
              designed to protect your home or business year-round. We proudly
              serve Hawthorne, Franklin Lakes, Midland Park, Allendale,
              Waldwick, Ramsey, Saddle River, Ridgewood, Glen Rock, Fair Lawn,
              Clifton, Paramus, Oradell, North Haledon, Totowa, and Wayne.
            </p>

            <p className="mb-[15px] text-sm leading-relaxed text-[#333]">
              Whether you need emergency roof repair, new roof installation, or
              professional gutter services, Nick Roofing provides quality
              workmanship, honest pricing, and reliable service you can trust.
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
