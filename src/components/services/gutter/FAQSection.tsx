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
    question:
      "How do I know if I need a full gutter replacement in Hawthorne, NJ? ",
    answer:
      "If you notice peeling paint, basement moisture, or sagging troughs, it’s time for a replacement. Our team provides honest assessments to determine if a repair or a new residential gutter installation is necessary.",
  },
  {
    question: "What are the benefits of seamless gutters?",
    answer:
      "Unlike sectional gutters, seamless systems have no joints, which significantly reduces the risk of leaks and clogs, providing better protection for your Hawthorne property.",
  },
  {
    question: "Do you offer gutter repair services near Hawthorne, NJ?",
    answer:
      "Yes! We provide comprehensive gutter repair services for minor leaks, loose brackets, and downspout realignments throughout Northern New Jersey.",
  },
];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
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
