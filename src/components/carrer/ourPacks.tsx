import React from 'react';

interface Perk {
    title: string;
    description: string;
}

function OurPerksAndBenefits() {
    const perks: Perk[] = [
        {
            title: "Flexible Working Hours",
            description: "We value balance. Our flexible approach helps you work at your best — without the pressure of rigid 9-to-5 rules."
        },
        {
            title: "Learning Support",
            description: "We invest in growth. From courses to mentorship, we empower our team to stay sharp, curious, and ahead of the curve"
        },
        {
            title: "Remote Opportunities",
            description: "Talent knows no borders. Whether you're across the street or across the globe, we welcome remote collaboration that works."
        },
        {
            title: "Performance-Based Growth",
            description: "Your work speaks — and we listen. Recognition, rewards, and career advancement are all driven by your performance and impact."
        }
    ];

    return (
        <div className="bg-[#1A1818] py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[36px] sm:text-4xl md:text-5xl lg:text-[48px] font-[700] text-white mb-4 leading-tight">
                        Our Perks & Benefits
                    </h2>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-13">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4"
                            >
                                <div className="flex-shrink-0 bg-black rounded-full p-3">
                                    <svg
                                        className="w-6 h-6 text-orange-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-[24px] sm:text-2xl font-semibold text-white mb-4">
                                        {perk.title}
                                    </h3>

                                    <p className="text-[#5D5D5D] text-[20px] sm:text-lg leading-relaxed">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default OurPerksAndBenefits;
