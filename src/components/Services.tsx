import React from "react";
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
      link: "/roof-repair-hawthorne-nj",
    },
    {
      title: "Siding Services",
      subtitle: "Durable & Professional Siding Installation",
      image: "/gallery5.webp",
      link: "/siding-services-hawthorne-nj",
    },
  ];

  return (
    <section className="py-10 px-4 md:py-20 bg-[#EEEEEE]">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-semibold tracking-[1px] mb-5 text-[#364f4f]">
            Roofing Services in Hawthorne, NJ
          </h2>
          <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>

          <p className="max-w-2xl mx-auto text-sm text-[#333] leading-relaxed">
            Nick Roofing provides professional roof repair, roof installation,
            gutter installation, skylight repair, waterproofing, and siding
            services in Hawthorne, NJ and surrounding areas. Our experienced
            roofing contractors deliver durable, weather-resistant solutions
            built to protect your home or business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[47%] lg:w-[35%] xl:w-[22%] flex flex-col items-start p-5 bg-white shadow-sm"
            >
              <div className="relative w-full h-72">
                <Image
                  src={service.image}
                  alt={`${service.title} in Hawthorne NJ by Nick Roofing`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-[20px] font-semibold mt-5 mb-[7px] text-[#364f4f]">
                {service.title}
              </h3>

              <p className="text-[14px] mb-[30px] text-[#555]">
                {service.subtitle}
              </p>

              <Link
                href={service.link}
                className="inline-block text-white bg-[#35454f] py-2.5 px-6 hover:bg-[#2e3d45] transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
