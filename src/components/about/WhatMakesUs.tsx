'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import star from '../../../public/assets/images/about/Star 1.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatMakesUs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title section from bottom
            gsap.from(titleRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
            });

            // Animate each list item
            gsap.from(itemRefs.current[0], {
                x: -100, opacity: 0, duration: 1,
                scrollTrigger: { trigger: itemRefs.current[0], start: 'top 80%' }
            });
            gsap.from(itemRefs.current[1], {
                y: 50, opacity: 0, duration: 1,
                scrollTrigger: { trigger: itemRefs.current[1], start: 'top 80%' }
            });
            gsap.from(itemRefs.current[2], {
                x: 100, opacity: 0, duration: 1,
                scrollTrigger: { trigger: itemRefs.current[2], start: 'top 80%' }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#111010] text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-50 left-100 w-10 h-10">
                <Image src={star} alt="star" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-20 right-110 w-10 h-10">
                <Image src={star} alt="star" className="w-full h-full object-contain" />
            </div>

            {/* Title Section Animation */}
            <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-13">
                <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold leading-tight text-center">
                    What Makes Us... <span className="text-[#F2682F] italic">Beyond</span>
                </h2>
                <p className="text-[#CCCCCC] mt-2 text-sm sm:text-base text-[24px]">
                    It’s not just our name. It’s how we work.
                </p>
            </div>

            <div className="mt-12 space-y-10 max-w-4xl mx-auto px-2 sm:px-4">
                <div ref={(el) => {itemRefs.current[0] = el!}} className="flex justify-start group cursor-pointer">
                    <div>
                        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] group-hover:text-[#FAE387] transition-colors duration-300">
                            Beyond the Brief
                        </h3>
                        <p className="text-[#A3A2A2] sm:ms-10 mt-1 text-sm sm:text-base group-hover:text-[#FAE387] transition-colors duration-300">
                            We dive deep to understand the ‘why’ behind your project.
                        </p>
                    </div>
                </div>

                <div ref={(el) => {itemRefs.current[1] = el!}} className="flex justify-start sm:justify-center group cursor-pointer">
                    <div>
                        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] group-hover:text-[#FF92D3] transition-colors duration-300">
                            Beyond the Code
                        </h3>
                        <p className="text-[#A3A2A2] sm:ms-10 mt-1 text-sm sm:text-base group-hover:text-[#FF92D3] transition-colors duration-300">
                            We build with business, brand, and user in mind.
                        </p>
                    </div>
                </div>

                <div ref={(el) => {itemRefs.current[2] = el!}} className="flex justify-start sm:justify-end group cursor-pointer">
                    <div>
                        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] group-hover:text-[#81BAFF] transition-colors duration-300">
                            Beyond the Launch
                        </h3>
                        <p className="text-[#A3A2A2] sm:ms-10 mt-1 text-sm sm:text-base group-hover:text-[#81BAFF] transition-colors duration-300">
                            We stay with you long after the product goes live.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUs;
