import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
        Nick Roofing provides professional gutter installation in Hawthorne, NJ,
        offering high-quality seamless gutters and leaf guards for local
        homeowners. Our expert solutions prevent foundation erosion and water
        damage, ensuring long-term property protection. Trust our 35+ years of
        experience for durable, affordable, and efficient gutter systems.
      </p>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Expert Gutter Installation in Hawthorne, NJ | Nick Roofing
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Is your home protected from the next New Jersey storm? At{" "}
            <Link href="/" className="no-underline text-inherit">
              Nick Roofing
            </Link>
            , we specialize in professional gutter installation in Hawthorne,
            NJ, providing custom-engineered systems designed to divert water
            away from your foundation. With over 35 years of local experience,
            we ensure your home remains dry, safe, and beautiful.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Our Core Services Include:
          </h3>

          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Old, leaky, or clogged gutters do more than just drip—they threaten
            your siding, landscaping, and structural integrity. We provide
            advanced seamless gutters in Hawthorne, NJ, fabricated on-site to
            ensure a perfect fit with zero leaks.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Our Core Services Include:
          </h3>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Precision Gutter Replacement: Upgrading old systems with durable
                aluminum gutters.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Seamless Technology: Custom-fit channels that eliminate joints
                and prevent leaks.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Gutter Guard Installation: High-grade leaf protection to end
                seasonal cleaning.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                Emergency Gutter Repair: Rapid response for storm damage near
                Goffle Brook Park and surrounding neighborhoods.
              </span>
            </li>
          </ul>

          <p className="text-base sm:text-base text-slate-600 mt-6 leading-relaxed font-medium">
            Don&apos;t wait for the next downpour. Schedule Your Free Estimate
            Today!
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gutter-installation-hero.webp"
              alt="Professional Gutter Installation in Hawthorne, NJ"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg mt-4">
        <h3 className="font-semibold text-slate-900 mb-4">
          Why Choose Nick Roofing?
        </h3>
        <p className="text-slate-600 text-sm mb-4">
          We don&apos;t just hang gutters; we engineer drainage systems. Whether
          you are near Lafayette Ave or up by the High School, our team
          understands Hawthorne&apos;s unique architecture and weather patterns.
        </p>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li>
            <span className="font-medium text-slate-800">Local Expertise:</span>{" "}
            Serving Passaic County for three decades.
          </li>
          <li>
            <span className="font-medium text-slate-800">
              Quality Materials:
            </span>{" "}
            Heavy-gauge aluminum and copper options.
          </li>
          <li>
            <span className="font-medium text-slate-800">Value-Driven:</span>{" "}
            Affordable gutter installation in NJ without compromising on E-E-A-T
            standards.
          </li>
        </ul>
      </div>
    </section>
  );
};
