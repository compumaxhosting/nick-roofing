import React from 'react'
import Image from "next/image";


export default function Services() {
    const services = [
        {
            title: "SKY LIGHTS",
            subtitle: "Customized to Your Preferences",
            image: "/service1.jpg",
        },
        {
            title: "GUTTER INSTALLATION",
            subtitle: "Attention to Detail Guaranteed",
            image: "/service2.jpg",
        },
        {
            title: "WATERPROOFING",
            subtitle: "Efficient Reliable Service",
            image: "/service3.jpg",
        },
        {
            title: "ROOFING REPAIR",
            subtitle: "Prompt and Professional",
            image: "/service4.jpg",
        },
    ];

    return (
        <section className="py-10 px-4 md:py-20 bg-[#EEEEEE]">
            <div className="max-w-screen-xl mx-auto">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-l font-semibold tracking-[1px] mb-5 text-[#364f4f]" >
                        OUR SERVICES
                    </h2>
                    <span
                        className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"
                    ></span>
                </div>

                {/* Services Grid */}
                <div className="flex flex-wrap justify-center gap-8  ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[47%] lg:w-[35%] xl:w-[22%] flex flex-col items-start p-5  bg-white"
                        >
                            <div className="relative w-full h-72 {/* adjust height as needed */}">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover " // use object-contain if you want full image without cropping
                                />
                            </div>

                            <h2 className="text-[20px] font-semibold mt-5 mb-[7px] text-[#364f4f]">{service.title}</h2>
                            <p className="text-[14px] mb-[30px]">{service.subtitle}</p>
                            <a
                                href="#"
                                className="inline-block text-white bg-[#35454f] py-2.5 px-6"
                            >
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}