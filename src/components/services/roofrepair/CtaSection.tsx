import Link from "next/link";
import { Phone } from "lucide-react";

export const CtaSection = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-r from-[#e07b3b] to-blue-700 text-white"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Need Fast, Reliable Roof Repair?
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100">
          Call now for immediate service or schedule your inspection
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="bg-white text-[#e07b3b] px-8 py-4 rounded-lg font-semibold hover:bg-[#e07b3b] hover:text-white transition-colors shadow-lg"
          >
            Get Quote Now
          </Link>
          <Link
            href="tel:(973) - 207 - 0689"
            className="border-2 border-white text-white hover:bg-white hover:text-[#e07b3b] px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
};
