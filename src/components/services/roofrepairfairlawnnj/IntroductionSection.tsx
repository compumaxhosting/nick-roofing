import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Roof Repair Fair Lawn NJ | Professional Roof Leak Repair & Roofing
            Services
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Roof repair in Fair Lawn, NJ helps homeowners protect their
            properties from leaks, weather damage, structural issues, and
            premature roof deterioration. Professional roof repair services
            identify roofing problems early and restore the safety, durability,
            and performance of your roofing system.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Nick Roofing
            </Link>{" "}
            provides expert roof repair, roof leak repair, roofing inspections,
            waterproofing, and residential roofing services for homeowners
            throughout Fair Lawn NJ and surrounding Bergen County communities.
          </p>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery6.webp"
              alt="Professional Roof Repair in Hawthorne, NJ"
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
              Roof repair helps prevent water damage and costly structural
              repairs.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Professional roof inspections identify hidden roofing problems
              early.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Roof leaks often require targeted repairs instead of full
              replacement.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Proper flashing, ventilation, and waterproofing extend roof
              lifespan.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Local roofing expertise matters for New Jersey weather conditions.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
