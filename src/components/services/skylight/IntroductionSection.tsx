import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Professional Skylight Installation in Hawthorne, NJ
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Brighten your home and slash energy costs with expert roof skylight installation. At Nick Roofing, we bridge the gap between aesthetic beauty and structural integrity. Whether you are searching for skylight installers near me for a new build or need a high-performance skylight replacement in NJ, our team delivers leak-proof results tailored to the Garden State’s changing seasons.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            As the best skylight contractors in Hawthorne, New Jersey, we don’t just &quot;fit&quot; windows—we engineer solutions. From custom roof skylight installation to repairs, our Velux skylight installation specialists ensure every unit is perfectly flashed to prevent moisture intrusion.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="font-semibold text-slate-900 mb-4">
              Why Choose Nick Roofing?
            </h2>

            <ul className="space-y-3 text-slate-600 text-sm sm:text-sm">
              <li>
                <span className="font-medium text-slate-800">
                  Residential Skylight Installation Services:
                </span>{" "}
                Modern, energy-efficient designs for any room.
              </li>

              <li>
                <span className="font-medium text-slate-800">
                  Skylight Repair in Hawthorne, NJ:
                </span>{" "}
                Fast, reliable fixes for foggy glass or stubborn leaks.
              </li>

              <li>
                <span className="font-medium text-slate-800">
                  Affordable Solutions:
                </span>{" "}
                Premium craftsmanship that fits your home improvement budget.
              </li>
            </ul>
          </div>
          
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
      <div className="p-6 rounded-lg">
        <h2 className="font-semibold text-slate-900 mb-3">
          Skylight Installation in Hawthorne, NJ: Direct Answer
        </h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Nick Roofing provides professional skylight installation in Hawthorne, NJ, for homeowners seeking natural light and ventilation. Our specialists offer skylight repair and replacement using premium Velux products. Protect your roof and enhance your interior with our leak-proof, energy-efficient skylight solutions today.
        </p>
      </div>
    </section>
  );
};
