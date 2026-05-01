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
      question: "What is the average cost of roof repair in Hawthorne, NJ? ",
      answer:
        'Look for damp spots, musty odors, or white powdery residue (efflorescence) on basement walls. These areMinor repairs (shingles/flashing) typically range from $300 to $800. Moderate leak repairs usually cost between $800 and $2,500. We provide free, itemized quotes. "pain points" indicating active moisture intrusion that requires professional drainage solutions.',
    },
    {
      question:
        "Do you offer emergency roof repair near me? Is exterior or interior waterproofing better for NJ homes?",
      answer:
        "Yes. We provide emergency roof repair in Hawthorne for storm damage and urgent leaks, often offering same-day service to protect your interior.It depends on your foundation. We offer free inspections to determine if a French drain, interior sump pump, or exterior sealant is the most cost-effective route for your specific property layout.",
    },
    {
      question: "How long does a typical repair take? ",
      answer:
        "Most standard repairs, like shingle or flashing fixes, are completed within 3 to 8 hours. Major storm damage may take 1–2 days.Yes. A dry, certified waterproofed basement protects structural integrity and increases usable square footage, making it a major asset for Hawthorne real estate valuations.",
    },
    
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-slate-600">
          Get answers to common questions about our waterproofing services.
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
                className={`w-5 h-5 text-slate-500 transition-transform ${expandedFaq === index ? "rotate-90" : ""
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

      {/* Featured Snippet Section */}
      <div className="mt-12 bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Featured Snippet & SGE Summary
        </h3>
        <p className="text-slate-700">
          Nick Roofing provides professional waterproofing services in
          Hawthorne, NJ, for homeowners facing basement moisture and foundation
          leaks. We deliver durable, long-term protection using advanced
          drainage and sealing techniques, ensuring your home remains dry and
          mold-free. Trust our local experts to secure your property’s structural
          integrity today.
        </p>
      </div>
    </section>
  );
};