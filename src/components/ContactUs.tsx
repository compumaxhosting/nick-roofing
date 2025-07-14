import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export const ContactUs = () => {
    return (
        <section className="py-16 px-0 md:px-0 lg:px-0 ">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-l font-semibold tracking-[1px] mb-5 text-[#364f4f]" >
                    CONTACT US
                </h2>
                <span
                    className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"
                ></span>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-4 lg:gap-6 px-4 py-8 max-w-7xl mx-auto '>
                {/* Contact Info - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex flex-col items-start w-64 flex-shrink-0">
                    <div className="flex flex-col pb-6">
                        <h2 className="text-sm  font-semibold text-[#364f4f] mb-4 ">
                            Contact Us
                        </h2>
                        <span className="block w-10 h-0.5 bg-[#36454F] mb-2"></span>
                    </div>
                    <p className='mb-8 text-sm'>
                        Got a roofing project? We&apos;re here to help! Whether you need residential, commercial, or industrial roofing services in New Jersey, our team is ready to assist you.
                    </p>
                    <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <div className='mb-4 text-[#666666]'>
                            <span className='font-semibold text-black'>Tel: </span>
                            <a href="tel:19732070689" className="hover:underline">
                                (973) - 207 - 0689
                            </a>
                        </div>
                        <div className='mb-4 text-[#666666]'>
                            <span className='font-semibold text-black'>Email: </span>
                            <a href="mailto:nickcontractorllc@gmail.com" className="hover:underline">
                                nickcontractorllc@gmail.com
                            </a>
                        </div>
                        <div className='mb-4 text-[#666666]'>
                            <span className='font-semibold text-black'>Location: </span>
                            <a
                                href="https://www.google.com/maps?q=525+Lafayette+Ave,+Hawthorne,+NJ+07506"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                525 Lafayette Ave, Hawthorne, NJ 07506
                            </a>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-4 pb-4 text-black">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            aria-label="X (Twitter)"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            {/* X (Twitter) SVG logo */}
                            <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="currentColor" d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0ZM849.338 111.684H1072.09L649.877 670.246L849.338 111.684ZM150.662 111.684H373.415L751.123 631.246L373.415 1115.32H150.662L572.875 556.754L150.662 111.684ZM1072.09 1115.32H849.338L471.63 595.246L849.338 111.684H1072.09L649.877 670.246L1072.09 1115.32Z"/>
                                </g>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>

                {/* Contact Form and Map Container */}
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1'>
                    {/* Contact Form */}
                    <div className='py-8 flex-1 lg:flex-[2]'>
                        <div className="w-full">
                            <div className="mb-7">
                                <input
                                    type="text"
                                    id="name"
                                    className="sm:w-full md:w-full lg:w-[80%] w-full  border py-3 px-5 lg:ml-12"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-7">
                                <input
                                    type="email"
                                    id="email"
                                    className="sm:w-full md:w-full lg:w-[80%] w-full border py-3 px-5 lg:ml-12"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-7">
                                <input
                                    type="tel"
                                    id="phone"
                                    className="sm:w-full md:w-full lg:w-[80%] w-full border py-3 px-5 lg:ml-12"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="mb-7">
                                <select
                                    id="service"
                                    className="sm:w-full md:w-full lg:w-[80%] w-full border py-3 px-5 lg:ml-12 bg-white"
                                >
                                    <option value="">Select a Service</option>
                                    <option value="skylights">Skylights</option>
                                    <option value="waterproofing">Waterproofing</option>
                                    <option value="gutter-installation">Gutter Installation</option>
                                    <option value="roof-repair">Roof Repair</option>
                                    <option value="siding">Siding</option>
                                </select>
                            </div>
                            <div className="mb-8">
                                <textarea
                                    id="message"
                                    className="sm:w-full md:w-full lg:w-[80%] w-full border py-3 px-5 lg:ml-12 resize-vertical"
                                    rows={4}
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className=" lg:ml-12 sm:w-auto sm:min-w-[200px] bg-[#36454F] text-white py-3 px-8 hover:bg-[#2c3e50] transition-colors duration-200 font-medium"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='overflow-hidden flex-shrink-0 w-full lg:w-80 h-64 lg:h-auto lg:min-h-[500px]'>
                        <iframe
                            title="Nick Roofing Contractor Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4189642748006!2d-74.1640458240497!3d40.94959467135309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fae2e8c6b6e9%3A0x6e0e2b8949dcd51d!2s525%20Lafayette%20Ave%2C%20Hawthorne%2C%20NJ%2007506%2C%20USA!5e0!3m2!1sen!2sus!4v1718038450000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Contact Info - Shown on mobile only */}
                <div className="lg:hidden flex flex-col items-start mt-8">
                    <div className="flex flex-col pb-6">
                        <h2 className="text-lg font-semibold text-[#364f4f] mb-4">
                            Contact Us
                        </h2>
                        <span className="block mx-auto w-12 h-0.5 bg-[#36454F] mb-2"></span>
                    </div>
                    <p className='mb-8 text-sm'>
                        Got a roofing project? We&apos;re here to help! Whether you need residential, commercial, or industrial roofing services in New Jersey, our team is ready to assist you.
                    </p>
                    <div style={{ fontFamily: "'Oswald', sans-serif" }}>
                        <div className='mb-4 text-[#666666]'>
                            <span className='font-semibold text-black'>Tel: </span>
                            (973) - 207 - 0689
                        </div>
                        <div className='mb-4 text-[#666666]'>
                            <span className='font-semibold text-black'>Email: </span>
                            nickcontractorllc@gmail.com
                        </div>
                        <div className='mb-4 text-[#666666]'>
                            <p><span className='font-semibold text-black'>Location: </span>
                                525 Lafayette Ave, Hawthorne, NJ 07506</p>
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-4 pb-4 text-black">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            aria-label="X (Twitter)"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            {/* X (Twitter) SVG logo */}
                            <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="currentColor" d="M1199.61 0H944.726L599.805 464.344L255.274 0H0L462.982 631.246L0 1227H254.895L599.805 762.656L944.726 1227H1199.61L736.627 601.754L1199.61 0ZM849.338 111.684H1072.09L649.877 670.246L849.338 111.684ZM150.662 111.684H373.415L751.123 631.246L373.415 1115.32H150.662L572.875 556.754L150.662 111.684ZM1072.09 1115.32H849.338L471.63 595.246L849.338 111.684H1072.09L649.877 670.246L1072.09 1115.32Z"/>
                                </g>
                            </svg>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-[#36454f] transition-colors duration-300 border-2 border-black rounded-md p-2 flex items-center justify-center"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}