import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <section className="py-6 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Expert Siding Services in Hawthorne, NJ
          </h1>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Need top-quality siding services in Hawthorne, NJ? At Nick Roofing &
            Siding, we provide expert siding installation, repair, and
            replacement tailored to New Jersey homes.
          </p>
          <p className="text-base sm:text-base text-slate-600 mb-6 leading-relaxed">
            Whether you need durable vinyl siding, classic wood siding, or
            modern fiber cement options, our experienced team delivers lasting
            results with honest pricing and dependable service. As a trusted
            local contractor, we understand the climate and building codes in
            Hawthorne and the surrounding Passaic County area.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="font-semibold text-slate-900 mb-2">
              Why Choose Nick Roofing?
            </h2>
            <p className="text-slate-600 text-sm sm:text-sm">
              We help homeowners choose the right siding materials to protect
              their property and boost curb appeal. From storm damage repairs to
              full exterior upgrades, we handle every siding project with
              precision and care.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/siding1.png"
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
