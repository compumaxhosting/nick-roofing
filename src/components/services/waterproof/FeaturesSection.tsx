export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Waterproofing Services Offered
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Flat Roof Waterproofing
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Specializing in flat roof waterproofing services for homes,
              warehouses, and industrial buildings. Our systems prevent ponding
              water, leaks, and UV damage.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Roof Coatings
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Extend the life of your roof with reflective and waterproof
              elastomeric roof coatings. Ideal for metal, flat, and low-slope
              roofs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Leak Detection & Repair
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We utilize infrared scanning and moisture meters to locate hidden
              leaks and provide permanent repair solutions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Waterproofing for Basements & Foundations
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Protect your home from below-grade water intrusion with external
              coatings, drainage systems, and vapor barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
