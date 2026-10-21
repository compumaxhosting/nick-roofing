"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#364f4f]"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[#364f4f] pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`flex-shrink-0 w-5 h-5 text-[#364f4f] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 pt-2 text-base text-slate-700 leading-relaxed border-t border-gray-100 bg-slate-50">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
