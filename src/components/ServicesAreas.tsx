import React from 'react'

// Define types
type ServiceKey = 'roofRepair';

interface ServiceData {
    serviceAreas: string[];
}

const serviceData: Record<ServiceKey, ServiceData> = {
    roofRepair: {
        serviceAreas: ["07417 Franklin Lakes", "07481 Midland Park", "07401 Allendale", "07463 Waldwick", "07446 Ramsey", "07458 Saddle River", "07450 Ridgewood", "07452 Glen Rock", "07410 Fair Lawn", "07013 Clifton", "07652 Paramus", "07506 Hawthorne", "07649 Oradell", "07508 North Haledon", "07512 Totowa", "07470 Wayne"]
    },
}

const ServicesAreas = () => {
    // Define currentService - you can change this based on your needs
    const currentService = serviceData.roofRepair;

    return (
        <section className="pt-3 pb-10 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                    Proudly Serving Northern New Jersey
                </h1>

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
    );
}

export default ServicesAreas