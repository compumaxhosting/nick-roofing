"use client";

import Script from "next/script";

export default function Reviews() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      {/* Elfsight platform script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-10">
          <span className="text-red-600 uppercase text-sm font-semibold tracking-wide">
            Customer Feedback
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
            Our Google Reviews
          </h2>

          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Reviews widget */}
        <div className="bg-white shadow-xl rounded-2xl p-4 md:p-8">
          <div
            className="elfsight-app-00f09a90-c8ed-4302-b6c5-e7cd33337904"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
