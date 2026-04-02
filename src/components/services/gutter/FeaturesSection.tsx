export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Our Gutter Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[130px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Gutter Installation & Replacement 
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Seamless gutters for effective drainage.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[130px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Gutter Repair & Maintenance
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
               Fix leaks, clogs, or damaged sections.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[130px] flex flex-col justify-center items-center text-center">
            <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
             Leaf Guards & Water Diversion Systems
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
               Prevent clogging and protect your foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
