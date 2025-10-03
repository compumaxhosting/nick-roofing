"use client";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src="/siding-hero.png"
        alt="Siding Services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent">
        <div className="h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Siding Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                Enhance Your Home’s Curb Appeal
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#e07b3b] hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Estimate
                </Link>
                <Link
                  href="tel:(973) - 207 - 0689"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
