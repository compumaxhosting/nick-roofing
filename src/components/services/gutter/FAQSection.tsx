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
      question: "How often should gutters be replaced?",
      answer:
        "Quality gutters typically last 20-25 years. Signs for replacement include rust, cracks, sagging, or frequent clogs.",
    },
    {
      question: "Do you offer gutter guards?",
      answer:
        "Yes, we install premium micro-mesh gutter guards that keep leaves and debris out while allowing water to flow freely.",
    },
    {
      question: "What's the difference between seamless and sectional gutters?",
      answer:
        "Seamless gutters are custom-formed on-site with no joints, eliminating common leak points that occur with sectional gutters.",
    },
    {
      question: "What size gutters do I need?",
      answer:
        "Most residential homes benefit from 5 or 6 seamless gutters. We also offer oversized systems for commercial buildings.",
    },
    {
      question: "How long does gutter installation take?",
      answer:
        "Most installations are completed within a single day, depending on the building size and system type.",
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
