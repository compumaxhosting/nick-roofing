export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Gutter Services Offered
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Seamless Gutter Installation
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our seamless gutters reduce the risk of leaks and improve curb
              appeal. Designed for performance and durability, they come in
              multiple colors and finishes to complement your property.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Gutter Guards Installation
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tired of cleaning your gutters every fall? Our advanced gutter
              guard systems keep out leaves, twigs, and debris, ensuring
              year-round flow and minimal maintenance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Downspout Design & Replacement
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We optimize your downspouts for efficient water channeling away
              from your home’s foundation— critical in areas with heavy rainfall
              like Passaic County and Bergen County.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Commercial Gutter Systems
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Protect your commercial roof and exterior with our large-scale
              gutter installations. Ideal for warehouses, apartment buildings,
              schools, and office complexes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
