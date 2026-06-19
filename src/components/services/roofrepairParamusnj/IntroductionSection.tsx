import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Roofing Contractor Paramus NJ | Roof Repair, Replacement &
            Full-Service Roofing Solutions
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Roofing issues in Paramus, NJ rarely happen all at once. They
            usually begin as small vulnerabilities—loose shingles, aging
            flashing, minor leaks—that gradually develop into larger structural
            concerns if ignored.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            With year-round exposure to rain, snow, wind, and temperature
            shifts, Paramus properties require consistent roofing attention to
            maintain long-term durability and safety.
            <br />
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Nick Roofing
            </Link>{" "}
            provides professional roofing services throughout Paramus and Bergen
            County, helping homeowners and businesses address roofing issues
            early and maintain strong, weather-resistant roofing systems.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/roofing-repair-paramus-nj.webp"
              alt="Professional Roof Repair in Paramus, NJ"
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
              Roofing issues often begin silently before visible damage appears.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Local weather in Paramus accelerates roof wear over time.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Early inspections help prevent costly structural repairs.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Roof performance depends on both installation quality and
              maintenance.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Professional roofing extends system lifespan and improves property
              protection.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
