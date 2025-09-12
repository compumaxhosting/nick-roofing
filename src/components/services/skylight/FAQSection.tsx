"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does skylight installation take?",
      answer:
        "Most residential skylight installations can be completed in 1-2 days, depending on roof type and skylight complexity.",
    },
    {
      question: "Will skylights cause leaks?",
      answer:
        "Not when installed by the experts at Nick Roofing. We use flashing kits and waterproofing materials to ensure leak-proof results.",
    },
    {
      question: "What types of skylights do you install?",
      answer:
        "We install fixed, venting, tubular, and custom skylights in various sizes and materials to match your home's architecture.",
    },
    {
      question: "Are skylights energy-efficient?",
      answer:
        "Yes! We install ENERGY STAR®-rated skylights that include glazing, insulation, and UV coatings to reduce heat transfer.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Get answers to common questions about our Skylight Installation
          services.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-slate-200 rounded-lg">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-semibold text-slate-900">
                {faq.question}
              </span>
              <ChevronRight
                className={`w-5 h-5 text-slate-500 transition-transform ${
                  expandedFaq === index ? "rotate-90" : ""
                }`}
              />
            </button>
            {expandedFaq === index && (
              <div className="px-6 pb-4">
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
