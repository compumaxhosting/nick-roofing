export const FeaturesSection = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Siding Repair Services Offered
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Vinyl & Fiber Cement Siding
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Affordable vinyl siding in a variety of colors and textures, or
              premium James Hardie fiber cement for a durable, wood-like finish.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Siding Repairs & Replacements
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From cracked or warped panels to hail and storm damage, we offer
              precise repairs and partial replacements without needing to redo
              your entire exterior.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Soffits, Fascia & Trim Work
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Protect your roofline with professional installation of vented
              soffits, fascia, and custom trim work—ensuring proper ventilation
              and a finished look.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center">
            <h5 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Insulated & Storm-Resistant Solutions
            </h5>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Boost energy efficiency with insulated vinyl siding, and rely on
              our team for storm damage restoration, including emergency repairs
              and insurance assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
