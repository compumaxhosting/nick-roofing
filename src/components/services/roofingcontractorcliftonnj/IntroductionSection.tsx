import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Roofing Contractor Clifton NJ | Roof Repair, Replacement & Full
            Roofing Services
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Clifton, NJ properties face constant exposure to seasonal weather
            shifts, including heavy rain, snow, wind, and temperature changes.
            These conditions gradually wear down roofing systems, leading to
            leaks, missing shingles, flashing failures, and long-term structural
            risks.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            A roofing contractor in Clifton, NJ plays a critical role in
            protecting both residential and commercial buildings by maintaining,
            repairing, and upgrading roofing systems before small issues become
            expensive damage.
            <br />
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Nick Roofing
            </Link>{" "}
            provides full-service roofing solutions throughout Clifton and
            Passaic County, focusing on durability, weather resistance, and
            long-term protection.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/roofing-contractor-clifton-nj.webp"
              alt="Professional Roofing Contractor in Clifton, NJ"
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
              Roofing issues in Clifton often develop due to seasonal storms and
              aging materials.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Early roof repairs help prevent structural damage and interior
              water intrusion.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Professional inspections identify hidden issues before they
              escalate.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Local roofing experience improves repair accuracy and material
              selection.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Regular maintenance significantly extends roof lifespan.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
