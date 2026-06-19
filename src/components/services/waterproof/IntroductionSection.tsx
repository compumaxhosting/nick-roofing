import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Waterproofing Hawthorne NJ | Basement, Roof & Exterior Waterproofing
            Services
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Waterproofing in Hawthorne, NJ helps protect homes from water
            intrusion, moisture damage, leaks, and structural deterioration by
            creating a reliable barrier against unwanted water entry.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Professional waterproofing solutions help protect residential
            roofing systems, foundations, basements, exterior walls, and other
            vulnerable areas from New Jersey weather conditions.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Nick Roofing
            </Link>{" "}
            provides waterproofing, roof leak repair, roofing inspection, and
            exterior protection services throughout Hawthorne NJ, Passaic
            County, Bergen County, and surrounding Northern New Jersey areas.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/waterproofing2.webp"
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
              Professional waterproofing helps prevent water intrusion and
              structural damage.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Roof flashing and drainage systems play a major role in moisture
              protection.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Waterproofing solutions address leaks, foundation moisture, and
              exterior water problems.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Roofing inspections help identify hidden moisture issues early.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Proper waterproofing improves long-term property protection.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
