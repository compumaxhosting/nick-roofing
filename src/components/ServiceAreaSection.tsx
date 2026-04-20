"use client";
import { useState } from "react";

export default function ServiceAreasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the main cause of roof leaks in Hawthorne?",
      answer:
        "In our area, ice dams and debris buildup in gutters are the biggest culprits. Regular maintenance and proper gutter installation are your best defenses.",
    },
    {
      question: "Does new siding actually improve insulation?",
      answer:
        "Yes! Modern siding acts like a protective blanket for your home, keeping you warmer in the winter and cooler during those humid NJ summers.",
    },
    {
      question: "How long does a typical roof repair take?",
      answer:
        "Most minor repairs or skylight fixes can be completed in a single day, minimizing disruption to your family’s routine.",
    },
  ];

  return (
    <section className="px-4 md:px-12 py-10 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Why Choose Us Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#364f4f] mb-3">
            Why Hawthorne Neighbors Choose Us
          </h2>

          <span className="block w-12 h-[2px] bg-[#364f4f] mb-4"></span>

          <p className="text-sm leading-relaxed text-[#333]">
            We know the local architecture and the specific weather challenges
            of Passaic County. We don’t just provide a service; we provide peace
            of mind through honest pricing, durable materials, and a commitment
            to keeping our community’s homes safe.
          </p>
        </div>

        {/* Section Heading */}
        <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#364f4f] mb-4">
          Roofing Service Areas in Hawthorne, NJ & Surrounding Communities
        </h2>

        <span className="block w-12 h-[2px] bg-[#364f4f] mb-6"></span>

        {/* Intro Paragraph */}
        <p className="text-sm leading-relaxed text-[#333] mb-4">
          Nick Roofing is a trusted roofing contractor based in Hawthorne, NJ,
          proudly serving homeowners and commercial property owners throughout
          Passaic County and Bergen County. Our team delivers expert roof
          repair, roof installation, gutter installation, skylight services,
          siding, and waterproofing solutions tailored to each property.
        </p>

        {/* Cities */}
        <p className="text-sm leading-relaxed text-[#333] mb-4">
          We provide professional roofing services in Prospect Park, North
          Haledon, Haledon, Fair Lawn, Glen Rock, Ridgewood, Paramus, Clifton,
          Totowa, Little Falls, Woodland Park, Wayne, Midland Park, Wyckoff,
          Elmwood Park, Saddle Brook, Lodi, Hackensack, and Maywood, NJ.
        </p>

        {/* Closing SEO Paragraph */}
        <p className="text-sm leading-relaxed text-[#333] mb-8">
          If you are searching for a reliable roofing company near Hawthorne,
          NJ, our experienced team is ready to provide durable,
          weather-resistant solutions backed by over 35 years of hands-on
          experience. Contact Nick Roofing today for dependable service and
          honest pricing.
        </p>

        {/* FAQ Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#364f4f] mb-4">
            FAQ
          </h2>
          <span className="block w-12 h-[2px] bg-[#364f4f] mb-6"></span>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                >
                  <span className="font-medium text-[#333]">
                    {faq.question}
                  </span>
                  <span className="text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-4 pb-4 pt-4 text-md text-[#555]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
