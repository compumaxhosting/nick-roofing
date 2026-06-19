import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Roof Repair Ridgewood NJ | Roof Leak Repair, Storm Damage Solutions
            & Residential Roofing Services
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Roof problems can develop gradually or appear suddenly after severe
            weather. Whether you&apos;re dealing with a roof leak, damaged
            shingles, flashing failure, or storm-related issues, timely roof
            repair helps protect your home from water intrusion and costly
            structural damage.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            In{" "}
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Ridgewood, NJ
            </Link>
            , changing weather conditions, aging roofing materials, and seasonal
            storms can affect the performance of residential roofing systems.
            Nick Roofing provides professional roof repair services designed to
            restore protection, improve durability, and extend the life of your
            roof.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/roofing-repair-ridgewood-nj.webp"
              alt="Professional Roof Repair in Ridgewood, NJ"
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
              Roof repair helps prevent leaks, mold growth, and structural
              deterioration.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Ridgewood homes are exposed to rain, snow, ice, wind, and seasonal
              temperature changes that can affect roofing systems.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Professional roof inspections help identify hidden damage before
              major repairs become necessary.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Prompt roof leak repair reduces the risk of interior water damage.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Regular maintenance and repairs can help extend the lifespan of
              your roof.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
