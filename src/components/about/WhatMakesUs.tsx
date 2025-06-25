import React from 'react';
import Image from 'next/image';
import star from '../../../public/assets/images/about/Star 1.png'

const WhatMakesUs = () => {
    return (
        <section className="bg-[#111010] text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-50 left-100 w-10 h-10">
                <Image
                    src={star}
                    alt="star"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="absolute bottom-20 right-110 w-10 h-10">
                <Image
                    src={star}
                    alt="star"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center mb-13">
                <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold leading-tight text-center">
                    What Makes Us... <span className="text-[#F2682F] italic">Beyond</span>
                </h2>
                <p className="text-[#CCCCCC] mt-2 text-sm sm:text-base text-[24px]">
                    It’s not just our name. It’s how we work.
                </p>
            </div>

            <div className="mt-12 space-y-10 max-w-4xl mx-auto px-2 sm:px-4">
                <div className="text-left group cursor-pointer">
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] transition-colors duration-300 group-hover:text-[#FAE387]">
                        Beyond the Brief
                    </h3>
                    <p className="text-[#A3A2A2] mt-1 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#FAE387]">
                        We dive deep to understand the ‘why’ behind your project.
                    </p>
                </div>

                <div className="text-center group cursor-pointer">
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] transition-colors duration-300 group-hover:text-[#FF92D3]">
                        Beyond the Code
                    </h3>
                    <p className="text-[#A3A2A2] mt-1 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#FF92D3]">
                        We build with business, brand, and user in mind.
                    </p>
                </div>

                <div className="text-right group cursor-pointer">
                    <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] transition-colors duration-300 group-hover:text-[#81BAFF]">
                        Beyond the Launch
                    </h3>
                    <p className="text-[#A3A2A2] mt-1 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#81BAFF]">
                        We stay with you long after the product goes live.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUs;
