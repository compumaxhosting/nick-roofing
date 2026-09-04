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
      src: "/gallery-17.webp",
      alt: "Gutter Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery-16.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery13.webp",
      alt: "Roofing Contractor in Hawthorne, NJ",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery14.webp",
      alt: "Roofing Contractor in Hawthorne, NJ",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery8.webp",
      alt: "Roofing Contractor in Hawthorne, NJ",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery7.webp",
      alt: "Silicon Roof Coating",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery10.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery11.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery12.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery1.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery2.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/service1.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery6.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/gallery5.webp",
      alt: "Roofing Services",
      width: 1920,
      height: 1280,
    },
    {
      src: "/service3.webp",
      alt: "Roofing Services",
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
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSliderOpen, nextImage, prevImage, closeSlider]);
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
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
      {" "}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />{" "}
      <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />{" "}
      <div className="absolute inset-0 flex items-center justify-center">
        {" "}
        <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />{" "}
      </div>{" "}
    </div>
  );
  return (
    <>
      {" "}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        {" "}
        <div className="text-center mb-10">
          {" "}
          <h1 className="text-xl font-semibold tracking-[2px] text-[#364f4f]">
            {" "}
            Gallery{" "}
          </h1>{" "}
          <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mt-3"></span>{" "}
        </div>{" "}
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
          {" "}
          {/* FIRST 4 IMAGES */}{" "}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {" "}
            <GalleryImage
              {...galleryImages[0]}
              index={0}
              className="w-full lg:w-1/2 h-[600px]"
            />{" "}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {" "}
              <GalleryImage
                {...galleryImages[1]}
                index={1}
                className="w-full h-[295px]"
              />{" "}
              <div className="flex gap-4">
                {" "}
                <GalleryImage
                  {...galleryImages[2]}
                  index={2}
                  className="w-1/2 h-[295px]"
                />{" "}
                <GalleryImage
                  {...galleryImages[3]}
                  index={3}
                  className="w-1/2 h-[295px]"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* REST OF THE GALLERY */}{" "}
          {showAll && (
            <>
              {" "}
              {/* IMAGES 5 - 8 */}{" "}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                {" "}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  {" "}
                  <div className="flex gap-4">
                    {" "}
                    <GalleryImage
                      {...galleryImages[4]}
                      index={4}
                      className="w-1/2 h-[295px]"
                    />{" "}
                    <GalleryImage
                      {...galleryImages[5]}
                      index={5}
                      className="w-1/2 h-[295px]"
                    />{" "}
                  </div>{" "}
                  <GalleryImage
                    {...galleryImages[6]}
                    index={6}
                    className="w-full h-[295px]"
                  />{" "}
                </div>{" "}
                <GalleryImage
                  {...galleryImages[7]}
                  index={7}
                  className="w-full lg:w-1/2 h-[600px]"
                />{" "}
              </div>{" "}
              {/* IMAGES 9 - 12 */}{" "}
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                {" "}
                <GalleryImage
                  {...galleryImages[8]}
                  index={8}
                  className="w-full lg:w-1/2 h-[600px]"
                />{" "}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  {" "}
                  <GalleryImage
                    {...galleryImages[9]}
                    index={9}
                    className="w-full h-[295px]"
                  />{" "}
                  <div className="flex gap-4">
                    {" "}
                    <GalleryImage
                      {...galleryImages[10]}
                      index={10}
                      className="w-1/2 h-[295px]"
                    />{" "}
                    <GalleryImage
                      {...galleryImages[11]}
                      index={11}
                      className="w-1/2 h-[295px]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* IMAGES 13 - 15 */}{" "}
              <div className="flex flex-col lg:flex-row gap-4">
                {" "}
                <GalleryImage
                  {...galleryImages[12]}
                  index={12}
                  className="w-full lg:w-1/3 h-[295px]"
                />{" "}
                <GalleryImage
                  {...galleryImages[13]}
                  index={13}
                  className="w-full lg:w-1/3 h-[295px]"
                />{" "}
                <GalleryImage
                  {...galleryImages[14]}
                  index={14}
                  className="w-full lg:w-1/3 h-[295px]"
                />{" "}
              </div>{" "}
            </>
          )}{" "}
          {/* VIEW MORE / VIEW LESS BUTTON */}{" "}
          <div className="text-center mt-8">
            {" "}
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 bg-[#364f4f] text-white rounded-md transition-colors duration-300 hover:bg-[#2c4141]"
            >
              {" "}
              {showAll ? "View Less" : "View More"}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* IMAGE MODAL / SLIDER */}{" "}
      {isSliderOpen && galleryImages[currentImageIndex] && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeSlider}
        >
          {" "}
          {/* CLOSE BUTTON */}{" "}
          <button
            type="button"
            aria-label="Close image gallery"
            onClick={(e) => {
              e.stopPropagation();
              closeSlider();
            }}
            className="absolute top-4 right-4 text-white z-10 hover:opacity-80 transition-opacity"
          >
            {" "}
            <X size={32} />{" "}
          </button>{" "}
          {/* PREVIOUS BUTTON */}{" "}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white z-10 hover:opacity-80 transition-opacity"
          >
            {" "}
            <ChevronLeft size={40} />{" "}
          </button>{" "}
          {/* NEXT BUTTON */}{" "}
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white z-10 hover:opacity-80 transition-opacity"
          >
            {" "}
            <ChevronRight size={40} />{" "}
          </button>{" "}
          {/* MODAL IMAGE */}{" "}
          <Image
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].alt}
            width={1200}
            height={800}
            sizes="100vw"
            className="max-h-[90vh] max-w-[90vw] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />{" "}
        </div>
      )}{" "}
    </>
  );
}
