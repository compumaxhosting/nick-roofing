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
      question: "How do I know if I need roof repair?",
      answer:
        "Look for signs like water stains, missing shingles, clogged gutters, or drafty attic areas. If in doubt, schedule an inspection with us",
    },
    {
      question: "Do you handle insurance claims?",
      answer:
        "Yes, we help homeowners navigate the insurance process from inspection to documentation and claims support.",
    },
    {
      question: "What kind of roofs do you repair?",
      answer:
        "We repair asphalt shingle, metal, slate, flat/low-slope (EPDM, TPO), wood shake, and tile roofs.",
    },
    {
      question: "Will I need a full roof replacement?",
      answer:
        "Not necessarily. Many issues can be solved affordably with targeted repairs. If a full replacement is needed, we provide transparent guidance and quotes.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          Get answers to common questions about our roof repair services
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
