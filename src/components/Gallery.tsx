'use client'
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Gallery images array with dimensions
    const galleryImages: GalleryImageType[] = [
        { src: "/gallery1.JPG", alt: "Gallery Image 1", width: 1920, height: 1280 },
        { src: "/gallery2.jpg", alt: "Gallery Image 2", width: 1920, height: 1280 },
        { src: "/service1.jpg", alt: "Gallery Image 3", width: 1920, height: 1280 },
        { src: "/service3.jpg", alt: "Gallery Image 4", width: 1920, height: 1280 },
        { src: "/gallery3.jpg", alt: "Gallery Image 5", width: 1920, height: 1280 },
        { src: "/gallery4.jpg", alt: "Gallery Image 6", width: 1920, height: 1280 },
        { src: "/gallery5.jpg", alt: "Gallery Image 7", width: 1920, height: 1280 },
        { src: "/gallery6.jpg", alt: "Gallery Image 8", width: 1920, height: 1280 }
    ];

    const openSlider = (index: number) => {
        setCurrentImageIndex(index);
        setIsSliderOpen(true);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeSlider = useCallback(() => {
        setIsSliderOpen(false);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
    }, []);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    }, [galleryImages.length]);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    }, [galleryImages.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isSliderOpen) return;
            
            if (e.key === 'Escape') {
                e.preventDefault();
                closeSlider();
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextImage();
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevImage();
            }
        };

        if (isSliderOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isSliderOpen, nextImage, prevImage, closeSlider]);

    const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, index, className }) => (
        <div 
            className={`${className} relative group cursor-pointer overflow-hidden`}
            onClick={() => openSlider(index)}
        >
            <Image src={src} alt={alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(192,133,94,0.6)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 border-white border-2 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 ease-out">
                    <Search className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <section className="py-16 px-4 md:px-10 lg:px-20">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-l font-semibold tracking-[2px] mb-5 text-[#364f4f]">
                        Gallery
                    </h2>
                    <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>
                </div>

                {/* Gallery Grid */}
                <div className="w-full max-w-7xl mx-auto px-4 py-10">
                    {/* Upper Section */}
                    <div className="flex flex-col md:flex-col lg:flex-row gap-4 mb-4">
                        {/* Left - One large vertical image */}
                        <GalleryImage 
                            src={galleryImages[0].src}
                            alt={galleryImages[0].alt}
                            index={0}
                            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0"
                        />

                        {/* Right - Top 1 + Bottom 2 */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            {/* Top full-width */}
                            <GalleryImage 
                                src={galleryImages[1].src}
                                alt={galleryImages[1].alt}
                                index={1}
                                className="w-full h-[250px] sm:h-[270px] md:h-[295px]"
                            />

                            {/* Bottom 2 half-width images */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <GalleryImage 
                                    src={galleryImages[2].src}
                                    alt={galleryImages[2].alt}
                                    index={2}
                                    className="w-full sm:w-1/2 h-[250px] sm:h-[295px]"
                                />
                                <GalleryImage 
                                    src={galleryImages[3].src}
                                    alt={galleryImages[3].alt}
                                    index={3}
                                    className="w-full sm:w-1/2 h-[250px] sm:h-[295px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lower Section (Mirrored) */}
                    <div className="flex flex-col md:flex-col lg:flex-row gap-4">
                        {/* Left - Top 1 + Bottom 2 */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            {/* Bottom 2 half-width images */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <GalleryImage 
                                    src={galleryImages[4].src}
                                    alt={galleryImages[4].alt}
                                    index={4}
                                    className="w-full sm:w-1/2 h-[250px] sm:h-[295px]"
                                />
                                <GalleryImage 
                                    src={galleryImages[5].src}
                                    alt={galleryImages[5].alt}
                                    index={5}
                                    className="w-full sm:w-1/2 h-[250px] sm:h-[295px]"
                                />
                            </div>

                            {/* Top full-width */}
                            <GalleryImage 
                                src={galleryImages[6].src}
                                alt={galleryImages[6].alt}
                                index={6}
                                className="w-full h-[250px] sm:h-[270px] md:h-[295px]"
                            />
                        </div>

                        {/* Right - One large vertical image */}
                        <GalleryImage 
                            src={galleryImages[7].src}
                            alt={galleryImages[7].alt}
                            index={7}
                            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0"
                        />
                    </div>
                </div>
            </section>

            {/* Image Slider Modal - Fixed version */}
            {isSliderOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={closeSlider}
                >
                    {/* Close Button - Fixed positioning and z-index */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            closeSlider();
                        }}
                        className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-[60] p-2 bg-black bg-opacity-50 rounded-full"
                        aria-label="Close gallery"
                    >
                        <X size={32} className="sm:w-8 sm:h-8 w-6 h-6" />
                    </button>

                    {/* Previous Button - Fixed positioning and responsive sizing */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[60] p-2 bg-black bg-opacity-50 rounded-full"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={48} className="sm:w-12 sm:h-12 w-8 h-8" />
                    </button>

                    {/* Next Button - Fixed positioning and responsive sizing */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[60] p-2 bg-black bg-opacity-50 rounded-full"
                        aria-label="Next image"
                    >
                        <ChevronRight size={48} className="sm:w-12 sm:h-12 w-8 h-8" />
                    </button>

                    {/* Main Image Container - Responsive sizing */}
                    <div 
                        className="relative flex items-center justify-center w-full h-full p-4 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative max-w-[90vw] max-h-[90vh]">
                            <Image
                                src={galleryImages[currentImageIndex].src}
                                alt={galleryImages[currentImageIndex].alt}
                                width={galleryImages[currentImageIndex].width}
                                height={galleryImages[currentImageIndex].height}
                                className="object-contain max-w-full max-h-full"
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '90vw',
                                    maxHeight: '90vh'
                                }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Counter - Responsive text sizing */}
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base z-[60]">
                        {currentImageIndex + 1} / {galleryImages.length}
                    </div>

                    {/* Thumbnail Strip - Responsive sizing and scrolling */}
                    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 no-scrollbar z-[60]">
                        {galleryImages.map((image: GalleryImageType, index: number) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded overflow-hidden border-2 transition-all relative flex-shrink-0 ${
                                    index === currentImageIndex 
                                        ? 'border-white scale-110' 
                                        : 'border-gray-500 hover:border-gray-300'
                                }`}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Add this to your global CSS for better scrollbar handling */}
            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </>
    );
}