'use client'

import React from 'react';
import Image from 'next/image';
import personImage from '../../../public/assets/images/about/mockup.png'
import checkIcon from '../../../public/assets/images/about/checkmark.png'

const WhyWeBest = () => {
    return (
        <section className="bg-[#1A1818] text-white py-20 px-4">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
                {/* Left - Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold leading-tight">Why we best?</h2>
                    <p className="text-[#CCCCCC] text-base sm:text-lg max-w-lg">
                        At Beyond Tech Solution, we don’t just build products — we build partnerships. Here’s why businesses trust us:
                    </p>

                    {/* Points */}
                    <div className="space-y-6">
                        {[
                            {
                                title: 'Uncompromised Quality',
                                desc: 'We deliver top-tier solutions with precision, performance, and long-term reliability.',
                            },
                            {
                                title: 'Reliable Support',
                                desc: 'Our team is with you every step of the way — before, during, and after project delivery.',
                            },
                            {
                                title: 'Innovation-Driven',
                                desc: 'We stay ahead of the curve, using cutting-edge technology to future-proof your business.',
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-8 h-8 min-w-[24px] mt-1">
                                    <Image src={checkIcon} alt="check" className="w-full h-full object-contain" />
                                </div>
                                <div className="max-w-md">
                                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                                    <p className="text-[#CCCCCC] text-sm sm:text-base mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="rounded-3xl bg-[#F2682F1A] px-5 sm:px-8 relative">
                        {/* Logo or shapes if any, can go here */}
                        <Image
                            src={personImage}
                            alt="person"
                            className="w-full h-auto object-contain rounded-2xl"
                            width={400}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeBest;
