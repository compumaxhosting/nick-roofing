import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Professional Gutter Installation in Hawthorne, NJ
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
           Protect your home from water damage with expert gutter installation in Hawthorne, NJ from Nick Roofing. Our team delivers seamless, durable, and efficient gutter solutions tailored to your property’s needs.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
  <h2 className="font-semibold text-slate-900 mb-4">
    Why Choose Nick Roofing?
  </h2>

  <ul className="space-y-3 text-slate-600 text-sm sm:text-sm">
    <li>
      <span className="font-medium text-slate-800">
        Experience & Expertise:
      </span>{" "}
      Years of hands-on roofing and gutter installation experience.
    </li>

    <li>
      <span className="font-medium text-slate-800">
        Customized Solutions:
      </span>{" "}
      Gutters designed for Hawthorne’s local weather conditions.
    </li>

    <li>
      <span className="font-medium text-slate-800">
        High-Quality Materials:
      </span>{" "}
      Durable, long-lasting materials requiring minimal maintenance.
    </li>

    <li>
      <span className="font-medium text-slate-800">
        Reliable Service:
      </span>{" "}
      Timely installations and excellent customer support.
    </li>
  </ul>
</div>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gutter-installation-hero.webp"
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
