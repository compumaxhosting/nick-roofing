import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Velux Skylight Installers & Skylight Services in Hawthorne, New
            Jersey
          </h2>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            As a trusted local contractor, we understand the climate and
            building codes in Hawthorne and the surrounding Passaic County area.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            We specialize in residential and commercial skylight installation in
            NJ, including flat roof skylight installation. Our certified team
            offers Velux skylight repair, skylight glass replacement, and
            skylight flashing repair in Hawthorne, NJ, to keep your home
            leak-free.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            As one of the best skylight companies in NJ, we provide emergency
            skylight services in Hawthorne, fast skylight leak repairs, and
            complete skylight maintenance solutions. Trust our Hawthorne
            skylight experts for custom skylight installation, skylight dome
            installation, and precise skylight cost estimates in NJ.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-2">
              Why Choose Nick Roofing?
            </h3>
            <p className="text-slate-600 text-sm sm:text-sm">
              We are Velux-certified skylight installers, offering professional
              skylight services you can rely on. From skylight replacement NJ to
              local skylight repair, we handle every project with expertise and
              care. Contact us today for top-rated skylight installation
              specialists in NJ. Brighten your home with natural light and enjoy
              lasting performance from your skylight.
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
