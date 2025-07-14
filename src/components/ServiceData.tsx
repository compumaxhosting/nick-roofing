'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star, Shield, Award, Phone } from 'lucide-react';

type ServiceKey = 'skylights' | 'gutter-installation' | 'waterproofing' | 'roofing-repair'| 'siding';

interface Feature {
    title: string;
    description: string;
}

interface ServiceData {
    title: string;
    heroSubtitle: string;
    heroImage: string;
    metaTitle: string;
    metaDescription: string;
    introTitle: string;
    introText: string;
    introImage: string;
    features: Feature[];
    benefits: string[];
    galleryImages: string[];
    ctaTitle: string;
    ctaText: string;
    faqItems: { question: string; answer: string; }[];
    serviceAreas: string[];
    warranty: string;
    emergencyAvailable: boolean;
    serviceTitle: string; // Optional for services that may not have this
}

interface ServicePageProps {
    service: ServiceKey;
}

const serviceData: Record<ServiceKey, ServiceData> = {
    'skylights': {
        title: 'Skylight Installation',
        heroSubtitle: 'Bringing Natural Light to Northern New Jersey Homes for 35 Years',
        heroImage: '/skylights-intro.jpeg',
        metaTitle: 'Skylight Installation NJ | Nick Roofing - 35 Years Experience',
        metaDescription: 'Professional skylight installation in Northern New Jersey. Custom sizing, energy efficient, weatherproof. 35 years experience. Free estimates. Call today!',
        introTitle: 'Expert Skylight Installation Services',
        introText: ` Natural light transforms any space, making it feel more open, energizing, and welcoming. At Nick
 Roofing, we specialize in professional skylight installation in Hawthorne, NJ, and across Northern
 New Jersey, helping homeowners and businesses harness the beauty and energy-efficiency of sunlight`,
        introImage: '/skylights-intro.jpg',
        serviceTitle: 'Skylight Services Offered',
        features: [
            {
                title: "Residential Skylight Installation",
                description: "Make your living room, kitchen, or bathroom brighter and more inviting. Our expert team handles skylight installations on sloped and flat roofs with meticulous attention to detail.",
            },
            {
                title: "Commercial Skylights",
                description: "From warehouses to office buildings, we install skylights that reduce energy bills and increase employee satisfaction by introducing natural lighting into workspaces.",
            },
            {
                title: "Skylight Replacement & Repair",
                description: "Is your existing skylight leaking, fogged up, or outdated? We provide skylight replacement and emergency repairs in Northern NJ with modern, energy-efficient options.",
            },
            {
                title: "Emergency Skylight Repair",
                description: "Searching for “emergency roof repair near me”? We respond quickly to leaks, cracks, or broken glass caused by storms, accidents, or age.",
            }
        ],
        benefits: [
            "Increases natural light without compromising privacy",
            "Potential 15-20% reduction in energy costs",
            "Enhances home value and aesthetic appeal",
            "Improves indoor air quality and mood",
            "10-year comprehensive warranty on materials and workmanship"
        ],
        galleryImages: ['/skylight1.png', '/skylights1.jpg', '/skylights3.jpg'],
        ctaTitle: "Ready to Brighten Your Home?",
        ctaText: "Get your free skylight consultation and estimate today",
        faqItems: [
            {
                question: "How long does skylight installation take?",
                answer: "Most residential skylight installations can be completed in 1-2 days, depending on roof type and skylight complexity."
            },
            {
                question: "Will skylights cause leaks?",
                answer: "Not when installed by the experts at Nick Roofing. We use flashing kits and waterproofing materials to ensure leak-proof results."
            },
            {
                question: "What types of skylights do you install?",
                answer: "We install fixed, venting, tubular, and custom skylights in various sizes and materials to match your home's architecture."
            },
            {
                question: "Are skylights energy-efficient?",
                answer: "Yes! We install ENERGY STAR®-rated skylights that include glazing, insulation, and UV coatings to reduce heat transfer."
            }
        ],
        serviceAreas: ["Wayne", "Paterson", "Ridgewood", "Paramus ", "Fair Lawn", "Clifton", "Hackensack", "Bergen County", "Passaic County", "Morris County", "Essex County"],
        warranty: "10-Year Comprehensive Warranty",
        emergencyAvailable: false
    },
    'gutter-installation': {
        title: 'Gutter Installation',
        heroSubtitle: 'Protecting Northern New Jersey Homes Since 35 years',
        heroImage: '/gutter-installation-hero.png',
        metaTitle: 'Gutter Installation NJ | Seamless Gutters | Nick Roofing',
        metaDescription: 'Professional gutter installation in Northern NJ. Seamless gutters, leaf protection, 35 years experience. Free estimates. Protect your home today!',
        introTitle: 'Gutter Installation Services',
        introText: 'When it comes to preserving the integrity of your home or commercial building, high-quality gutters are your first line of defense. At Nick Roofing, we specialize in durable, efficient, and seamless gutter installation in Northern New Jersey. With precision craftsmanship and premium materials, we help prevent water damage, protect foundations, and extend the lifespan of your roofing system.',
        introImage: '/gutter-installation-hero.png',
        serviceTitle: 'Gutter Services Offered',
        features: [
            {
                title: "Seamless Gutter Installation",
                description: "Our seamless gutters reduce the risk of leaks and improve curb appeal. Designed for performance and durability, they come in multiple colors and finishes to complement your property.",
            },
            {
                title: "Gutter Guards Installation",
                description: "Tired of cleaning your gutters every fall? Our advanced gutter guard systems keep out leaves, twigs, and debris, ensuring year-round flow and minimal maintenance.",
            },
            {
                title: "Downspout Design & Replacement",
                description: "We optimize your downspouts for efficient water channeling away from your home’s foundation— critical in areas with heavy rainfall like Passaic County and Bergen County.",
            },
            {
                title: "Commercial Gutter Systems",
                description: "Protect your commercial roof and exterior with our large-scale gutter installations. Ideal for warehouses, apartment buildings, schools, and office complexes.",
            }
        ],
        benefits: [
            "Prevents foundation damage and basement flooding",
            "Protects siding, windows, and landscaping",
            "Reduces maintenance with quality materials",
            "Increases curb appeal and home value",
            "25-year warranty on materials and workmanship"
        ],
        galleryImages: ['/gutter1.png', '/gutter2.png', '/gutter3.png'],
        ctaTitle: "Protect Your Home Investment",
        ctaText: "Schedule your free gutter assessment and quote",
        faqItems: [
            {
                question: "How often should gutters be replaced?",
                answer: "Quality gutters typically last 20-25 years. Signs for replacement include rust, cracks, sagging, or frequent clogs."
            },
            {
                question: "Do you offer gutter guards?",
                answer: "Yes, we install premium micro-mesh gutter guards that keep leaves and debris out while allowing water to flow freely."
            },
            {
                question: "What's the difference between seamless and sectional gutters?",
                answer: "Seamless gutters are custom-formed on-site with no joints, eliminating common leak points that occur with sectional gutters."
            },
            {
                question: "What size gutters do I need?",
                answer: "Most residential homes benefit from 5\" or 6\" seamless gutters. We also offer oversized systems for commercial buildings."
            },
            {
                question: "How long does gutter installation take?",
                answer: "Most installations are completed within a single day, depending on the building size and system type."
            }
        ],
        serviceAreas: ["Wayne", "Paterson", "Ridgewood", "Paramus ", "Fair Lawn", "Clifton", "Hackensack", "Bergen County", "Passaic County", "Morris County", "Essex County"],
        warranty: "25-Year Materials & Workmanship Warranty",
        emergencyAvailable: false
    },
    'waterproofing': {
        title: 'Waterproofing Services',
        heroSubtitle: 'Comprehensive Moisture Protection for 35 Years',
        heroImage: '/waterproofing2.jpg',
        metaTitle: 'Waterproofing Services NJ | Foundation & Basement | Nick Roofing',
        metaDescription: 'Professional waterproofing services in Northern NJ. Foundation, basement, and roof waterproofing. 35 years experience. Free estimates available.',
        introTitle: 'Complete Waterproofing Solutions',
        introText: ' Water intrusion is one of the leading causes of structural damage, mold growth, and roof failure. At Nick Roofing, we provide expert flat roof waterproofing services, residential and commercial waterproofing, and protective coatings that defend against even the harshest Northern New Jersey weather.',
        introImage: '/waterproofing-hero.png',
        serviceTitle: 'Waterproofing Services Offered',
        features: [
            {
                title: "Flat Roof Waterproofing",
                description: "Specializing in flat roof waterproofing services for homes, warehouses, and industrial buildings. Our systems prevent ponding water, leaks, and UV damage.",
            },
            {
                title: "Roof Coatings",
                description: "Extend the life of your roof with reflective and waterproof elastomeric roof coatings. Ideal for metal, flat, and low-slope roofs.",
            },
            {
                title: "Leak Detection & Repair",
                description: "We utilize infrared scanning and moisture meters to locate hidden leaks and provide permanent repair solutions.",
            },
            {
                title: "Waterproofing for Basements & Foundations",
                description: "Protect your home from below-grade water intrusion with external coatings, drainage systems, and vapor barriers.",
            }
        ],
        benefits: [
            "Prevents costly water damage and mold growth",
            "Improves indoor air quality and comfort",
            "Protects structural integrity and foundation",
            "Increases property value and marketability",
            "Reduces humidity and energy costs"
        ],
        galleryImages: ['/waterproofing1.jpg', '/waterproofing2.jpg', '/waterproofing3.jpg'],
        ctaTitle: "Protect Your Property Today",
        ctaText: "Get your free waterproofing evaluation and quote",
        faqItems: [
            {
                question: "How do I know if I need waterproofing?",
                answer: "Signs include basement moisture, musty odors, wall stains, peeling paint, or visible mold. We offer free assessments to determine your needs."
            },
            {
                question: "How long does waterproofing last?",
                answer: "Our systems last between 10 and 20 years, depending on materials used and roof conditions."
            },
            {
                question: "Can you waterproof my roof in winter?",
                answer: " Yes, we offer cold-weather solutions and can work year-round when conditions allow."
            },
            {
                question: "Is roof coating the same as waterproofing?",
                answer: "Roof coatings are a type of waterproofing, but we also offer multi-layered systems for enhanced protection."
            }
        ],
        serviceAreas: ["Wayne", "Paterson", "Ridgewood", "Paramus ", "Fair Lawn", "Clifton", "Hackensack", "Bergen County", "Passaic County", "Morris County", "Essex County"],
        warranty: "15-Year Waterproofing Warranty",
        emergencyAvailable: true
    },
    'roofing-repair': {
        title: 'Roof Repair Services',
        heroSubtitle: 'Your roof, our expertise—built to last',
        heroImage: '/slide1.jpeg',
        metaTitle: 'Roof Repair NJ | Emergency Roofing | Nick Roofing - 35 Years',
        metaDescription: 'Professional roof repair services in Northern NJ. Emergency repairs, storm damage, all roof types. 35 years experience. 24/7 emergency service available.',
        introTitle: 'Expert Roof Repair Services',
        introText: 'When your roof is leaking, damaged, or aging, time is of the essence. At Nick Roofing, we specialize in emergency roof repair near me, scheduled maintenance, and complete restoration services for residential, commercial, and industrial buildings. Proudly serving Northern New Jersey, we bring expert craftsmanship and rapid response to every repair job.',
        introImage: '/gallery6.jpg',
        serviceTitle: 'Roofing Repair Services Offered',
        features: [
            {
                title: "Leak Detection & Damage Repair",
                description: "We quickly detect roof leaks and repair storm-related damage using advanced tools and expert techniques."
            },
            {
                title: "Shingle & Flat Roof Repairs",
                description: "From missing shingles to flat roof issues, we restore surface protection with matching materials and precision work.",
            },
            {
                title: "Flashing & Structural Fixes",
                description: "We reseal flashing around chimneys and vents, and repair damaged roof decks to restore strength and stop future leaks.",
            },
            {
                title: "Preventive Maintenance",
                description: "Stay ahead of costly repairs with routine roof checkups and small fixes that extend your roof’s lifespan.",
            }
        ],
        benefits: [
            "Extends roof lifespan and prevents replacement costs",
            "Prevents interior water damage and mold growth",
            "Improves energy efficiency and comfort",
            "Maintains home value and insurance compliance",
            "Fast response prevents small problems from becoming major issues"
        ],
        galleryImages: ['/roof-repair1.jpg', '/roof-repair2.jpg', '/gallery5.jpg'],
        ctaTitle: "Need Fast, Reliable Roof Repair?",
        ctaText: "Call now for immediate service or schedule your inspection",
        faqItems: [
            {
                question: "How do I know if I need roof repair",
                answer: " Look for signs like water stains, missing shingles, clogged gutters, or drafty attic areas. If in doubt, schedule an inspection with us"
            },
            {
                question: " Do you handle insurance claims?",
                answer: " Yes, we help homeowners navigate the insurance process from inspection to documentation and claims support."
            },
            {
                question: "What kind of roofs do you repair?",
                answer: " We repair asphalt shingle, metal, slate, flat/low-slope (EPDM, TPO), wood shake, and tile roofs."
            },
            {
                question: "Will I need a full roof replacement?",
                answer: " Not necessarily. Many issues can be solved affordably with targeted repairs. If a full replacement is needed, we provide transparent guidance and quotes."
            }
        ],
        serviceAreas: ["Wayne", "Paterson", "Ridgewood", "Paramus ", "Fair Lawn", "Clifton", "Hackensack", "Bergen County", "Passaic County", "Morris County", "Essex County"],
        warranty: "5-Year Repair Warranty",
        emergencyAvailable: true
    },
    'siding': {
        title: 'Siding Services',
        heroSubtitle: 'Enhance Your Home’s Curb Appeal',
        heroImage: '/siding-hero.png',
        metaTitle: 'Siding Installation NJ | Quality Siding Services | Nick Roofing - 35 Years',
        metaDescription: 'Professional siding installation and repair services in Northern NJ. Enhance your home’s exterior with quality materials and expert craftsmanship. 35 years experience.',
        introTitle: 'Siding Services',
        introText: ' At Nick Roofing, we don’t just protect your home from above—we also safeguard it from the sides. Our professional siding installation and repair services in Northern New Jersey help homeowners elevate their property’s appearance, energy efficiency, and durability. Whether you\'re looking for vinyl siding in Hawthorne NJ, fiber cement panels, or custom exterior facelifts, we have the experience and precision to deliver flawless results',
        introImage: '/siding1.png',
        serviceTitle: 'Siding Repair Services Offered',
        features: [
            {
                title: "Vinyl & Fiber Cement Siding",
                description: "Affordable vinyl siding in a variety of colors and textures, or premium James Hardie fiber cement for a durable, wood-like finish."
            },
            {
                title: "Siding Repairs & Replacements",
                description: "From cracked or warped panels to hail and storm damage, we offer precise repairs and partial replacements without needing to redo your entire exterior.",
            },
            {
                title: "Soffits, Fascia & Trim Work",
                description: "Protect your roofline with professional installation of vented soffits, fascia, and custom trim work—ensuring proper ventilation and a finished look.",
            },
            {
                title: "Insulated & Storm-Resistant Solutions",
                description: "Boost energy efficiency with insulated vinyl siding, and rely on our team for storm damage restoration, including emergency repairs and insurance assistance.",
            }
        ],
        benefits: [
            "Boosts curb appeal and resale value",
            "Protects your home from moisture and pests",
            "Improves insulation and lowers energy bills",
            "Low maintenance and long-lasting beauty",
            "Custom colors and textures to match your vision"
        ],
        galleryImages: ['/siding3.png', '/siding2.jpg', '/gallery5.jpg'],
        ctaTitle: "Request a Free Siding Estimate Today",
        ctaText: "Call now for immediate service or schedule your inspection",
        faqItems: [
            {
                question: "What’s the best siding for New Jersey homes?",
                answer: "Vinyl and fiber cement are both excellent for NJ weather. We help you choose the right option for your budget and goals."
            },
            {
                question: "How long does siding last?",
                answer: "Properly installed siding can last 25–50 years or more, depending on the material."
            },
            {
                question: "Do I need to replace all my siding if some is damaged?",
                answer: "No! We specialize in targeted siding repairs that blend perfectly with your existing panels"
            },
            {
                question: "Can siding improve my home’s energy efficiency?",
                answer: "Yes—insulated siding can help reduce thermal transfer and lower your energy bills"
            }
        ],
        serviceAreas: ["Wayne", "Paterson", "Ridgewood", "Paramus ", "Fair Lawn", "Clifton", "Hackensack", "Bergen County", "Passaic County", "Morris County", "Essex County"],
        warranty: "5-Year Repair Warranty",
        emergencyAvailable: true
    }
};

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const currentService = serviceData[service];

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={currentService.heroImage}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent">
                    <div className="h-full flex items-center">
                        <div className="max-w-6xl mx-auto px-4 w-full">
                            <div className="max-w-2xl">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {currentService.title}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                                    {currentService.heroSubtitle}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="bg-[#e07b3b] hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Get Free Estimate
                                    </Link>
                                    <Link
                                        href="tel:(973) - 207 - 0689"
                                        className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                                    >
                                        Call Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            { icon: <Award className="w-8 h-8 text-[#e07b3b] mb-2" />, label: 'Years Experience', value: '35+' },
                            { icon: <Star className="w-8 h-8 text-[#e07b3b] mb-2" />, label: 'Customer Rating', value: '5-Star' },
                            { icon: <Shield className="w-8 h-8 text-[#e07b3b] mb-2" />, label: '& Insured', value: 'Licensed' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center min-w-[140px]">
                                {item.icon}
                                <span className="text-2xl font-bold text-slate-900">{item.value}</span>
                                <span className="text-slate-600 text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                            {currentService.introTitle}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                            {currentService.introText}
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-slate-900 mb-2">Why Choose Nick Roofing?</h3>
                            <p className="text-slate-600 text-sm sm:text-base">
                                With 35 years of experience serving Northern New Jersey, we&apos;ve built our reputation on quality craftsmanship, reliability, and exceptional customer service.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src={currentService.introImage}
                                alt={`${currentService.title} example`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            {currentService.serviceTitle}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {currentService.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center items-center text-center"
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                            Benefits of {currentService.title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            Invest in quality workmanship that delivers lasting value for your home.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {currentService.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                                <div className="bg-[#e07b3b] rounded-full p-1 mr-4 flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-base text-slate-200">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600">
                        Get answers to common questions about our {currentService.title.toLowerCase()} services.
                    </p>
                </div>
                <div className="space-y-4">
                    {currentService.faqItems.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                            </button>
                            {expandedFaq === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                        Proudly Serving Northern New Jersey
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        For 35 years, we&apos;ve been the trusted choice for homeowners throughout Northern New Jersey.
                        Contact us to see if we service your area.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
                        {currentService.serviceAreas.map((area, index) => (
                            <span
                                key={index}
                                className="bg-white px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>


            {/* Gallery Section */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                        Our {currentService.title} Gallery
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600">
                        See examples of our quality workmanship and attention to detail.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentService.galleryImages.map((image, index) => (
                        <div key={index} className="relative h-72 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <Image
                                src={image}
                                alt={`${currentService.title} project ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-16 bg-gradient-to-r from-[#e07b3b] to-blue-700 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{currentService.ctaTitle}</h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100">{currentService.ctaText}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link
                            href="/contact"
                            className="bg-white text-[#e07b3b] px-8 py-4 rounded-lg font-semibold hover:bg-[#e07b3b] hover:text-white transition-colors shadow-lg"
                        >
                            Get Free Estimate
                        </Link>
                        <Link
                            href="tel:(973) - 207 - 0689"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#e07b3b] px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default ServicePage;