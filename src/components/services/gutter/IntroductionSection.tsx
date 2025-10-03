import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Expert Gutter Installation Services in Hawthorne, NJ
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Looking for gutter installation in Hawthorne, NJ? We provide
            affordable gutter installation solutions for both residential and
            commercial properties. Our local gutter installers specialize in
            seamless gutter installation, ensuring durability and a perfect fit
            for your home or business.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            We offer complete services, including custom gutter installation,
            downspout installation, and gutter system installation. Whether you
            need aluminum, copper, or vinyl gutter installation, our team
            guarantees top-quality materials and craftsmanship.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            As the best gutter installation company in Hawthorne, NJ, we also
            handle gutter repair and installation, gutter cleaning, and
            emergency gutter services. From roof gutter installation to new
            gutter installation, we ensure your property stays protected from
            water damage.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="font-semibold text-slate-900 mb-2">
              Why Choose Nick Roofing?
            </h2>
            <p className="text-slate-600 text-sm sm:text-sm">
              Our gutter installation cost in Hawthorne, NJ is competitive and
              transparent. We provide professional gutter installation for rain
              gutters, custom designs, and full replacements. Choose us for
              reliable gutter installation and expert gutter installers you can
              trust. Contact us today for a free quote and keep your home safe
              with our premium gutter solutions.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/gutter-installation-hero.png"
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
