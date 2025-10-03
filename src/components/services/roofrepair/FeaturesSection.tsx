export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Roofing Repair Services Offered
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Leak Detection & Damage Repair
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We quickly detect roof leaks and repair storm-related damage using
              advanced tools and expert techniques.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Shingle & Flat Roof Repairs
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From missing shingles to flat roof issues, we restore surface
              protection with matching materials and precision work.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Flashing & Structural Fixes
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We reseal flashing around chimneys and vents, and repair damaged
              roof decks to restore strength and stop future leaks.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h5 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Preventive Maintenance
            </h5>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Stay ahead of costly repairs with routine roof checkups and small
              fixes that extend your roof’s lifespan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
