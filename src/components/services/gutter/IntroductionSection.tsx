import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Gutter Installation Hawthorne NJ | Professional Gutter Replacement &
            Repair
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Gutter installation in Hawthorne, NJ helps protect residential
            roofing systems by directing rainwater away from roofs, foundations,
            siding, and landscaping. Professional gutter installation improves
            water drainage, reduces water damage risks, and supports long-term
            property protection.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Nick Roofing provides gutter installation, gutter replacement,
            gutter repair, and exterior water management solutions for
            homeowners throughout Hawthorne NJ, Passaic County, Bergen County,
            and surrounding Northern New Jersey areas.
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
      <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          Key Takeaways
        </h3>

        <ul className="space-y-4 text-slate-700">
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Proper gutter installation helps prevent roof leaks and foundation
              damage.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Professional gutters improve drainage and protect residential
              roofing systems.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Damaged or outdated gutters may require repair or replacement.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Gutter systems work together with roofs, flashing, and
              waterproofing.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Regular inspections help prevent costly water intrusion problems.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
