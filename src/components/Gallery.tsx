import React from 'react'
import Image from "next/image";

export default function Gallery() {
    return (
        <section className="py-16 px-4 md:px-10 lg:px-20 ">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-l font-semibold tracking-[2px] mb-5 text-[#364f4f]" >
                    Gallery
                </h2>
                <span
                    className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"
                ></span>
            </div>
            {/* Gallery Grid */}

            <div className="w-full max-w-7xl mx-auto px-4 py-10">
                {/* Upper Section */}
                <div className="flex flex-col md:flex-col lg:flex-row gap-4 mb-4">
                    {/* Left - One large vertical image */}
                    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative group cursor-pointer overflow-hidden flex-shrink-0">
                        <Image src="/gallery1.JPG" alt="img1" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                <Search className="w-6 h-6 text-white" />
                            </div> */}
                        </div>
                    </div>

                    {/* Right - Top 1 + Bottom 2 */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {/* Top full-width */}
                        <div className="w-full h-[250px] sm:h-[270px] md:h-[295px] relative group cursor-pointer overflow-hidden">
                            <Image src="/gallery2.jpg" alt="img2" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                    <Search className="w-6 h-6 text-white" />
                                </div> */}
                            </div>
                        </div>

                        {/* Bottom 2 half-width images */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2 h-[250px] sm:h-[295px] relative group cursor-pointer overflow-hidden">
                                <Image src="/service1.jpg" alt="img3" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                        <Search className="w-6 h-6 text-white" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 h-[250px] sm:h-[295px] relative group cursor-pointer overflow-hidden">
                                <Image src="/service3.jpg" alt="img4" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                        <Search className="w-6 h-6 text-white" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Lower Section (Mirrored) */}
                <div className="flex flex-col md:flex-col lg:flex-row gap-4">
                    {/* Left - Top 1 + Bottom 2 */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {/* Bottom 2 half-width images */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2 h-[250px] sm:h-[295px] relative group cursor-pointer overflow-hidden">
                                <Image src="/gallery3.jpg" alt="img6" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                        <Search className="w-6 h-6 text-white" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 h-[250px] sm:h-[295px] relative group cursor-pointer overflow-hidden">
                                <Image src="/gallery4.jpg" alt="img7" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                        <Search className="w-6 h-6 text-white" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Top full-width */}
                        <div className="w-full h-[250px] sm:h-[270px] md:h-[295px] relative group cursor-pointer overflow-hidden">
                            <Image src="/gallery5.jpg" alt="img5" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* <div className="w-14 h-14 border-white border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                    <Search className="w-6 h-6 text-white" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right - One large vertical image */}
                    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative group cursor-pointer overflow-hidden flex-shrink-0">
                        <Image src="/gallery6.jpg" alt="img8" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                                <Search className="w-6 h-6 text-white" />
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}

