"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-10 px-2 md:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto  md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-[85%] md:w-1/2">
          <h2 className="text-xl md:text-l font-bold mb-[20px] tracking-[1px] text-[#364f4f]">
            WHO ARE WE2
          </h2>

          <span className="block w-[40px] h-[2px] bg-[#364f4f] mb-[30px]"></span>

          <p className="mb-[10px] text-sm leading-relaxed text-[#333]">
            Welcome to Nick Roofing, your trusted partner for all your home improvement needs.
            Specializing in skylight installation, gutter installation, and waterproofing services,
            we pride ourselves on delivering high-quality craftsmanship and exceptional customer service.
          </p>

          <p className="mb-[10px] text-sm leading-relaxed text-[#333]">
            With <span className="font-bold">35 years of experience in roofing business in NJ</span>, Nick Roofing has
            earned a reputation for reliability and expertise. Whether you&apos;re looking to brighten up
            your home with a new skylight, protect it from water damage with expert waterproofing solutions,
            or enhance its efficiency with seamless gutter installation, we have the skills and knowledge
            to exceed your expectations.
          </p>

          <button className="mt-4 text-white text-sm uppercase px-[25px] py-[10px] bg-[#36454F] hover:bg-[#2e3d45] transition-all duration-300">
            More About Us 
          </button>
        </div>

        {/* Right Image with Overlay */}
        <div className="w-full md:w-1/2 relative">
          {/* Image for medium+ screens */}
          <div className="hidden md:block w-full h-[400px] relative shadow-lg overflow-hidden">
            <Image
              src={"/slide1.jpeg"}
              alt="About Nick Roofing"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay box extending out of image */}

          </div>
            <div
            className={`quote-02__text text-white text-sm leading-relaxed shadow-xl border-[5px] border-white
          bg-[#36454f] md:bg-[#36454f]/80 p-5 font-[Playfair_Display] italic
          md:absolute md:right-[-20px] md:bottom-[-30px] h-[380px] md:min-h-[380px] md:w-[300px]
          w-[300px] mt-6 md:mt-0 `}
            >
            Nick Roofing has built a reputation in Northern New Jersey for quality,
            integrity, and exceptional customer care. We provide superior residential,
            industrial, and commercial roofing with a personal touch often missing in
            today&apos;s industry. Choose Nick Roofing for expert guidance and a roof
            you’ll be proud to call your own.
            </div>

          {/* For small screens: only overlay visible */}
          {/* <div
            className="block quote-02__text md:hidden  border-[5px] border-white text-white text-sm pt-12 px-5"
            style={{
              backgroundColor: "rgba(54, 69, 79, 0.8)",
              width: "300px",
              fontFamily: `"Playfair Display", serif`,
              fontStyle: "italic",
              minHeight: "380px",
            }}
          >
            Nick Roofing has built a reputation in Northern New Jersey for quality,
            integrity, and exceptional customer care. We provide superior residential,
            industrial, and commercial roofing with a personal touch often missing in
            today&apos;s industry. Choose Nick Roofing for expert guidance and a roof
            you’ll be proud to call your own.
          </div> */}
        </div>


      </div>
      </div>
    </section>
  );
}
