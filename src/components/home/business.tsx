'use client';
import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingWireframeSphere from "@/components/home/RotatingWireframeSphere";

gsap.registerPlugin(ScrollTrigger);

const Business: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate stats
            gsap.from(".stat-item", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            // Animate globe image
            gsap.from(".globe-image", {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            });

            // Animate heading
            gsap.from(headingRef.current, {
                y: 30,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 90%',
                }
            });

        }, sectionRef);

        return () => ctx.revert(); // cleanup
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#1A1818] text-white py-16 px-4">
            <div className="container mx-auto">
                {/* Heading Section */}
                <div
                    ref={headingRef}
                    className="flex items-center justify-center text-center mb-12 w-full"
                >
                    <div className="max-w-[840px]">
                        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-light leading-snug">
                            Discover why clients entrust their business success to{" "}
                            <span className="text-orange-500 italic font-semibold">
                                Beyond Tech Solution
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-0">
                    {/* Left Stats */}
                    <div className="flex flex-col lg:flex-col sm:flex-row gap-12 text-center lg:text-left">
                        <div className="stat-item">
                            <h3 className="text-[44px] sm:text-[54px] md:text-[64px] font-semibold">50+</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Projects Successfully Delivered
                            </p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-[44px] sm:text-[54px] md:text-[64px] font-semibold">2x</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Growth Rate, Consistently Achieved
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="bg-[#1A1818] w-[400px] sm:w-[320px] md:w-[600px] h-[400px] sm:h-[320px] md:h-[600px] globe-image">
                        <RotatingWireframeSphere />
                    </div>

                    {/* Right Stats */}
                    <div className="flex flex-col lg:flex-col sm:flex-row gap-12 text-center lg:text-right">
                        <div className="stat-item">
                            <h3 className="text-[44px] sm:text-[54px] md:text-[64px] font-semibold">5+</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Years of Experience
                            </p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-[44px] sm:text-[54px] md:text-[64px] font-semibold">20+</h3>
                            <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-[240px] mx-auto lg:mx-0">
                                Creative Minds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;
