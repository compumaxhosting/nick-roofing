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
      question: "How do I know if I need a skylight replacement?",
      answer:
        "If you notice condensation between panes or water stains on your ceiling, it’s time for a skylight replacement in NJ. Modern units offer significantly better insulation than older models.",
    },
    {
      question: "Is custom installation available for unique roof types?",
      answer:
        "Yes. We specialize in custom roof skylight installation in Hawthorne, NJ, ensuring a seamless fit for both flat and pitched roofs.",
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
      <p className="text-slate-900 pt-4">[Get Your Free Skylight Estimate Today]</p>
    </section>
  );
};
