import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Siding Services Hawthorne NJ | Professional Home Siding Installation
            & Repair
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Siding services in Hawthorne, NJ help homeowners protect, improve,
            and maintain their exterior walls with durable siding installation,
            repair, and replacement solutions.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Professional siding improves curb appeal, energy efficiency, weather
            protection, and the long-term performance of residential properties.
            Nick Roofing provides siding services throughout Hawthorne NJ,
            Passaic County, Bergen County, and surrounding Northern New Jersey
            areas.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/siding1.webp"
              alt="Skylight Installation example"
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
            Professional siding protects homes from weather, moisture, and
            exterior damage.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-3 text-green-600 font-bold">✓</span>
          <span>
            Siding replacement can improve energy efficiency and curb appeal.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-3 text-green-600 font-bold">✓</span>
          <span>
            Proper installation helps prevent water intrusion and structural
            problems.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-3 text-green-600 font-bold">✓</span>
          <span>
            Different siding materials offer different durability and
            maintenance benefits.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-3 text-green-600 font-bold">✓</span>
          <span>
            Expert siding contractors ensure correct installation and long-term
            performance.
          </span>
        </li>
      </ul>
      </div>
    </section>
  );
};
