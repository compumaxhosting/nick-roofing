"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
  className: string;
}

export default function Gallery() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const galleryImages: GalleryImageType[] = [
    {
      src: "/gallery8.webp",
      alt: "Gallery Image 10",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery7.webp",
      alt: "Gallery Image 9",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery9.webp",
      alt: "Gallery Image 11",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery10.webp",
      alt: "Gallery Image 12",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery11.webp",
      alt: "Gallery Image 13",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery12.webp",
      alt: "Gallery Image 14",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery1.webp",
      alt: "Gallery Image 1",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery2.webp",
      alt: "Gallery Image 2",
      width: 1920,
      height: 1280,
    },
    {
      src: "/service1.webp",
      alt: "Gallery Image 3",
      width: 1920,
      height: 1280,
    },
    {
      src: "/service3.webp",
      alt: "Gallery Image 4",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery5.webp",
      alt: "Gallery Image 7",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery6.webp",
      alt: "Gallery Image 8",
      width: 1920,
      height: 1280,
    },
  ];

  const openSlider = (index: number) => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSlider = useCallback(() => {
    setIsSliderOpen(false);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSliderOpen) return;

      if (e.key === "Escape") closeSlider();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSliderOpen, nextImage, prevImage, closeSlider]);

  const GalleryImage: React.FC<GalleryImageProps> = ({
    src,
    alt,
    index,
    className,
  }) => (
    <div
      className={`${className} relative group cursor-pointer overflow-hidden`}
      onClick={() => openSlider(index)}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Search className="text-white opacity-0 group-hover:opacity-100 transition" />
      </div>
    </div>
  );

  return (
    <>
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-xl font-semibold tracking-[2px] text-[#364f4f]">
            Gallery
          </h1>
          <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mt-3"></span>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-10">
          {/* FIRST 4 */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <GalleryImage
              {...galleryImages[0]}
              index={0}
              className="w-full lg:w-1/2 h-[600px]"
            />

            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <GalleryImage
                {...galleryImages[1]}
                index={1}
                className="w-full h-[295px]"
              />
              <div className="flex gap-4">
                <GalleryImage
                  {...galleryImages[2]}
                  index={2}
                  className="w-1/2 h-[295px]"
                />
                <GalleryImage
                  {...galleryImages[3]}
                  index={3}
                  className="w-1/2 h-[295px]"
                />
              </div>
            </div>
          </div>

          {/* REST */}
          {showAll && (
            <>
              {galleryImages[4] && galleryImages[5] && galleryImages[6] && (
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="flex gap-4">
                      <GalleryImage
                        {...galleryImages[4]}
                        index={4}
                        className="w-1/2 h-[295px]"
                      />
                      <GalleryImage
                        {...galleryImages[5]}
                        index={5}
                        className="w-1/2 h-[295px]"
                      />
                    </div>
                    <GalleryImage
                      {...galleryImages[6]}
                      index={6}
                      className="w-full h-[295px]"
                    />
                  </div>

                  {galleryImages[7] && (
                    <GalleryImage
                      {...galleryImages[7]}
                      index={7}
                      className="w-full lg:w-1/2 h-[600px]"
                    />
                  )}
                </div>
              )}

              {galleryImages[8] && (
                <div className="flex flex-col lg:flex-row gap-4">
                  <GalleryImage
                    {...galleryImages[8]}
                    index={8}
                    className="w-full lg:w-1/2 h-[600px]"
                  />

                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {galleryImages[9] && (
                      <GalleryImage
                        {...galleryImages[9]}
                        index={9}
                        className="w-full h-[295px]"
                      />
                    )}
                    <div className="flex gap-4">
                      {galleryImages[10] && (
                        <GalleryImage
                          {...galleryImages[10]}
                          index={10}
                          className="w-1/2 h-[295px]"
                        />
                      )}
                      {galleryImages[11] && (
                        <GalleryImage
                          {...galleryImages[11]}
                          index={11}
                          className="w-1/2 h-[295px]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* BUTTON */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#364f4f] text-white rounded-md"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isSliderOpen && galleryImages[currentImageIndex] && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeSlider}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeSlider();
            }}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white"
          >
            <ChevronRight size={40} />
          </button>

          <Image
            src={galleryImages[currentImageIndex].src}
            alt=""
            width={1200}
            height={800}
            className="max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}
