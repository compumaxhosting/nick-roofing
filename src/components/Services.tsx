"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Skylight Repair & Installation",
      subtitle: "Customized Skylight Solutions in Hawthorne NJ",
      image: "/skylight1.webp",
      link: "/skylight-repair-hawthorne-nj",
    },
    {
      title: "Gutter Installation",
      subtitle: "Seamless Gutters with Attention to Detail",
      image: "/service2.webp",
      link: "/gutter-installation-hawthorne-nj",
    },
    {
      title: "Waterproofing Services",
      subtitle: "Efficient & Reliable Protection for Your Property",
      image: "/service3.webp",
      link: "/water-proofing-hawthorne-nj",
    },
    {
      title: "Roof Repair",
      subtitle: "Prompt & Professional Roofing Repair Services",
      image: "/service4.webp",
      link: "/roofing-repair-hawthorne-nj",
    },
    {
      title: "Siding Services",
      subtitle: "Durable & Professional Siding Installation",
      image: "/gallery5.webp",
      link: "/siding-services-hawthorne-nj",
    },
  ];

  const [visibleSlides, setVisibleSlides] = useState(4);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // ✅ Responsive (1 / 2 / 4)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ Duplicate for infinite
  const extended = [...services, ...services];

  // ✅ Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Smooth infinite reset
  useEffect(() => {
    if (index >= services.length) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
        }
        setIndex(0);
        setTimeout(() => {
          if (sliderRef.current) {
            sliderRef.current.style.transition = "transform 0.5s ease";
          }
        }, 50);
      }, 500);
    }
  }, [index, services.length]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  return (
    <section className="py-10 px-4 md:py-20 bg-[#EEEEEE]">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-[1px] mb-5 text-[#364f4f]">
            Roofing Services in Hawthorne, NJ
          </h2>
          <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>

          <div className="max-w-4xl mx-auto text-sm text-[#333] leading-relaxed text-left space-y-4">
            <h3 className="font-semibold text-[#364f4f] text-base">
              Total Protection From Top to Bottom
            </h3>

            <p>
              We focus on the &quot;big picture&quot; of your home’s exterior to
              ensure one problem doesn&apos;t lead to another. Our team handles
              everything your home needs to stay efficient and protected:
            </p>

            <div>
              <span className="font-semibold">
                <Link
                  href="/roofing-repair-hawthorne-nj"
                  className="hover:underline"
                >
                  Roof Repair
                </Link>{" "}
                & Maintenance:
              </span>
              <span>
                {" "}
                From fixing minor leaks to replacing aged materials, we stop
                damage in its tracks.
              </span>
            </div>

            <div>
              <span className="font-semibold">
                <Link
                  href="/skylight-repair-hawthorne-nj"
                  className="hover:underline"
                >
                  Skylights
                </Link>{" "}
                &{" "}
                <Link
                  href="/gutter-installation-hawthorne-nj"
                  className="hover:underline"
                >
                  Gutters
                </Link>
                :
              </span>
              <span>
                {" "}
                Professional installation to bring in natural light while
                ensuring water drains safely away from your foundation.
              </span>
            </div>

            <div>
              <span className="font-semibold">
                <Link
                  href="/water-proofing-hawthorne-nj"
                  className="hover:underline"
                >
                  Waterproofing
                </Link>{" "}
                &{" "}
                <Link
                  href="/siding-services-hawthorne-nj"
                  className="hover:underline"
                >
                  Siding
                </Link>
                :
              </span>
              <span>
                {" "}
                Advanced moisture barriers and high-quality siding that boost
                your curb appeal and lower your energy bills.
              </span>
            </div>

            <div>
              <span className="font-semibold">
                Early-Detection Inspections:{" "}
              </span>
              <span>
                We spot the &quot;invisible&quot; issues before they turn into
                expensive midnight emergencies.
              </span>
            </div>
          </div>
        </div>

        {/* 🔥 Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / extended.length)}%)`,
              width: `${(extended.length / visibleSlides) * 100}%`,
            }}
          >
            {extended.map((service, i) => (
              <div
                key={i}
                style={{ width: `${100 / visibleSlides}%` }}
                className="px-3"
              >
                <div className="flex flex-col p-5 bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="relative w-full h-72">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  <h3 className="text-[20px] font-semibold mt-5 mb-2 text-[#364f4f]">
                    {service.title}
                  </h3>

                  <p className="text-[14px] mb-5 text-[#555]">
                    {service.subtitle}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-block text-white bg-[#35454f] py-2.5 px-6 rounded-md hover:bg-[#2e3d45] transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#35454f] text-white px-3 py-1 rounded"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#35454f] text-white px-3 py-1 rounded"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
