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
      question: "How do I know if I need waterproofing?",
      answer:
        "Signs include basement moisture, musty odors, wall stains, peeling paint, or visible mold. We offer free assessments to determine your needs.",
    },
    {
      question: "How long does waterproofing last?",
      answer:
        "Our systems last between 10 and 20 years, depending on materials used and roof conditions.",
    },
    {
      question: "Can you waterproof my roof in winter?",
      answer:
        "Yes, we offer cold-weather solutions and can work year-round when conditions allow.",
    },
    {
      question: "Is roof coating the same as waterproofing?",
      answer:
        "Roof coatings are a type of waterproofing, but we also offer multi-layered systems for enhanced protection.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Get answers to common questions about our waterproofing services
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
