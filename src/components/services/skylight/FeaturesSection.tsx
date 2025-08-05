export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Skylight Services Offered
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Residential Skylight Installation
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Make your living room, kitchen, or bathroom brighter and more
              inviting. Our expert team handles skylight installations on sloped
              and flat roofs with meticulous attention to detail.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Commercial Skylights
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From warehouses to office buildings, we install skylights that
              reduce energy bills and increase employee satisfaction by
              introducing natural lighting into workspaces.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Skylight Replacement & Repair
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Is your existing skylight leaking, fogged up, or outdated? We
              provide skylight replacement and emergency repairs in Northern NJ
              with modern, energy-efficient options.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Emergency Skylight Repair
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Searching for &quot;emergency roof repair near me&quot;? We respond quickly
              to leaks, cracks, or broken glass caused by storms, accidents, or
              age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
