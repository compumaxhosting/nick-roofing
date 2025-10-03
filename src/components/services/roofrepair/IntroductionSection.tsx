import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Reliable Roof Repair Services in Hawthorne, NJ
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Our experts handle brick waterproofing, concrete waterproofing, and
            wall sealing to prevent water infiltration. Need urgent help? We
            offer emergency waterproofing services to stop leaks before they
            cause major damage.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            We specialize in emergency roof repair in Hawthorne, NJ, including
            storm damage repair and emergency leak detection. Our experts handle
            all types of roofing, such as flat roof repair, asphalt shingle
            repair, slate roof repair, tile roof repair, and metal roof repair.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            As the best roof repair company in Hawthorne, we offer roof flashing
            repair, gutter repair, and complete roof restoration services. We
            also provide roof inspection and maintenance to prevent costly
            issues and extend your roof’s life.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="font-semibold text-slate-900 mb-2">
              Why Choose Nick Roofing?
            </h2>
            <p className="text-slate-600 text-sm sm:text-sm">
              Whether you need residential or commercial roof repair, our local
              roof repair contractors deliver top-quality craftsmanship. We also
              offer roof replacement and repair services at competitive rates.
              Looking for affordable roof leak repair or emergency storm roof
              repair in Hawthorne? Contact us today for a free quote and
              experience reliable, professional roofing solutions from
              Hawthorne’s trusted experts.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery6.jpg"
              alt="Skylight Installation example"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
