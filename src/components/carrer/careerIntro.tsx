'use client';
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import star from "../../../public/assets/images/about/Star 1.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CareerIntro() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                },
            });

            gsap.from(paragraphRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: paragraphRef.current,
                    start: 'top 85%',
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#1A1818] relative overflow-hidden lg:pt-30 pt-10">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center min-h-[40vh] py-16 overflow-hidden">
                <div className="absolute top-20 left-100 w-20 h-20">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="absolute bottom-20 right-100 w-20 h-20">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 ref={headingRef} className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] leading-[110%] font-semibold text-white text-center mb-4">
                        Work With Us.
                    </h1>
                    <p ref={paragraphRef} className="text-[18px] sm:text-[22px] md:text-[24px] leading-[110%] font-normal text-gray-300 text-center max-w-2xl mx-auto">
                        We’re not just hiring — we’re building a team of thinkers, doers, and dreamers who go beyond.
                    </p>
                </div>
            </div>
        </div>
    );
}
