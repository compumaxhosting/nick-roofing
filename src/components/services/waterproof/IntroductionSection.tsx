import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Professional Waterproofing Services in Hawthorne, NJ
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Looking for reliable waterproofing services in Hawthorne, NJ? We
            specialize in residential and commercial waterproofing to protect
            your property from leaks, moisture, and structural damage. Our team
            offers basement waterproofing, foundation sealing, and crawl space
            waterproofing for complete protection.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            We provide both interior and exterior waterproofing solutions,
            including flat roof waterproofing, roof leak waterproofing, and
            waterproof coating for long-lasting durability. As the best
            waterproofing company in Hawthorne, NJ, we deliver affordable
            services without compromising quality.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Our experts handle brick waterproofing, concrete waterproofing, and
            wall sealing to prevent water infiltration. Need urgent help? We
            offer emergency waterproofing services to stop leaks before they
            cause major damage.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="font-semibold text-slate-900 mb-2">
              Why Choose Nick Roofing?
            </h2>
            <p className="text-slate-600 text-sm sm:text-sm">
              We offer emergency waterproofing services to stop leaks before
              they cause major damage.Whether you need residential roof
              waterproofing, commercial waterproofing, or waterproofing repair
              in Hawthorne, we’ve got you covered. Our services also include
              custom waterproofing and sealing solutions for homes and
              businesses.Choose our local waterproofing experts in Hawthorne, NJ
              for quality craftsmanship, competitive pricing, and guaranteed
              results. Contact us today for a free waterproofing cost estimate
              and protect your property from water damage.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/skylights-intro.jpg"
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
