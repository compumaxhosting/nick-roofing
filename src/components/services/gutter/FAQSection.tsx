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
    question: "How long does gutter installation take?",
    answer:
      "Most residential gutter installations in Hawthorne, NJ are completed within 1–2 days, depending on home size and complexity.",
  },
  {
    question: "Do you offer leaf guard options?",
    answer:
      "Yes! We provide durable leaf guard systems to prevent clogging and reduce maintenance.",
  },
  {
    question: "Can you repair old gutters?",
    answer:
      "Absolutely. Our team can repair or replace damaged gutters efficiently.",
  },
];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
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
      <div className="mt-12 text-justify">
        <p className="text-slate-600 text-base sm:text-lg">
          Nick Roofing provides professional gutter installation in Hawthorne, NJ, offering seamless, durable gutters for residential homes. Our services prevent water damage, reduce maintenance, and improve property value—ideal for homeowners seeking reliable, customized gutter solutions with expert installation.
        </p>
      </div>
    </section>
  );
};
