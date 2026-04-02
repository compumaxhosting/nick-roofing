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
      question: "What’s the best siding for New Jersey homes?",
      answer:
        "Vinyl and fiber cement are both excellent for NJ weather. We help you choose the right option for your budget and goals.",
    },
    {
      question: "How long does siding last?",
      answer:
        "Properly installed siding can last 25–50 years or more, depending on the material.",
    },
    {
      question: "Do I need to replace all my siding if some is damaged?",
      answer:
        "No! We specialize in targeted siding repairs that blend perfectly with your existing panels.",
    },
    {
      question: "Can siding improve my home’s energy efficiency?",
      answer:
        "Yes—insulated siding can help reduce thermal transfer and lower your energy bills.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Get answers to common questions about our siding services services.
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
