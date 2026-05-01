import Image from "next/image";
import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
        Nick Roofing offers expert roof repair in Hawthorne, NJ, for residential
        and commercial properties. We specialize in fixing leaks, storm damage,
        and shingle deterioration. Our licensed team provides fast, affordable
        repairs with 35+ years of local experience, ensuring long-lasting
        protection for your Northern New Jersey home.
      </p>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Professional Roof Repair in Hawthorne, NJ | Nick Roofing
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Don&apos;t let a small leak turn into an expensive replacement.{" "}
            <Link href="/" className="no-underline text-inherit">
              Nick Roofing
            </Link>{" "}
            is your trusted local expert for roof repair in Hawthorne, NJ. With
            35+ years of experience, we provide fast, high-quality repairs for
            homeowners and businesses across Passaic County.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Common Warning Signs You Need Roof Repair
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-4 leading-relaxed">
            In New Jersey&apos;s volatile climate, early detection saves
            thousands. Contact us if you notice:
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Active Leaks:</strong> Water stains on ceilings or
                walls.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Damaged Shingles:</strong> Missing, curling, or cracked
                roofing material.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Gutter Granules:</strong> Excessive &quot;sand&quot; in
                gutters indicating shingle decay.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Structural Red Flags:</strong> Sagging rooflines or
                daylight visible in the attic.
              </span>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Our Comprehensive Roofing Solutions
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-4 leading-relaxed">
            From our base at 525 Lafayette Ave, we offer specialized services
            tailored to Hawthorne&apos;s unique home styles:
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Emergency Roof Repair:</strong> Rapid response for
                storm, wind, and tree damage.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Leak Detection & Repair:</strong> Precision fixes for
                chimneys, skylights, and vents.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Shingle & Flat Roof Work:</strong> Expert repair for
                asphalt, EPDM, and TPO systems.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <strong>Preventive Maintenance:</strong> Inspections that extend
                your roof&apos;s lifespan.
              </span>
            </li>
          </ul>

          <p className="text-base sm:text-base text-slate-600 mt-6 leading-relaxed font-medium">
            Fix your roof today. Get Your Free Estimate or call (973) 207-0689.
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
      <div className="bg-blue-50 p-6 mt-4 rounded-lg">
        <h2 className="font-semibold text-slate-900 mb-4">
          Why Hawthorne Chooses Us
        </h2>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li>
            <span className="font-medium text-slate-800">Locally Owned:</span>{" "}
            Based in Hawthorne, serving Wayne, Ridgewood, and beyond.
          </li>
          <li>
            <span className="font-medium text-slate-800">
              E-E-A-T Excellence:
            </span>{" "}
            5-star rated, fully licensed, and insured.
          </li>
          <li>
            <span className="font-medium text-slate-800">
              Honest Estimates:
            </span>{" "}
            Free, transparent pricing with no hidden fees.
          </li>
        </ul>
      </div>
    </section>
  );
};
