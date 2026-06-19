import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Roof Repair Hawthorne NJ | Expert Roof Leak Repair & Replacement
            Solutions
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Roof repair in Hawthorne, NJ helps homeowners protect their
            properties from leaks, water intrusion, storm damage, and roofing
            deterioration. Professional roof repair restores damaged roofing
            systems and prevents costly structural issues.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            <Link
              href="/"
              className="text-[#e07b3b] font-semibold hover:underline"
            >
              Nick Roofing
            </Link>{" "}
            provides roof repair, roof leak repair, roofing inspection,
            waterproofing, and residential roofing solutions throughout
            Hawthorne NJ, Passaic County, Bergen County, and surrounding
            Northern New Jersey communities.
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
              Professional roof repair helps prevent leaks and structural
              damage.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Early inspections identify roofing problems before they become
              expensive repairs.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Roof flashing and waterproofing are critical for leak prevention.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Storm damage, aging materials, and moisture intrusion are common
              repair causes.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>
              Proper repairs extend roof lifespan and protect property value.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
