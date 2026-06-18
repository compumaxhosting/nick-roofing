import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Skylight Repair Hawthorne NJ: Expert Skylight Leak Repair &
            Replacement
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Skylight repair in Hawthorne, NJ helps homeowners stop leaks,
            improve energy efficiency, and restore natural daylight without
            unnecessary roof damage. Professional skylight repair addresses
            issues such as water intrusion, cracked glass, damaged flashing,
            condensation, and aging skylight systems.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/skylights-intro.webp"
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
              Professional skylight repair prevents roof leaks and water damage.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Damaged flashing is one of the most common causes of skylight
              leaks.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Many skylights can be repaired instead of fully replaced.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Energy-efficient skylights improve natural lighting and indoor
              comfort.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Timely repairs help extend the life of both the skylight and
              roofing system.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
