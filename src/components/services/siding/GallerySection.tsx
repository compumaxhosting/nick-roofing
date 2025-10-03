import Image from "next/image";

export const GallerySection = () => {
  const images = [
    { src: "/siding3.png", alt: "Skylight Installation project 1" },
    { src: "/siding2.jpg", alt: "Skylight Installation project 2" },
    { src: "/gallery5.jpg", alt: "Skylight Installation project 3" },
  ];

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Our Siding Services Gallery
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          See examples of our quality workmanship and attention to detail.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
