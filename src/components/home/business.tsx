'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Business: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const statRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const ctx = gsap.context(() => {
            if (headingRef.current) {
                gsap.from(headingRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 80%",
                    },
                });
            }
            statRefs.current.forEach((ref, idx) => {
                if (ref) {
                    gsap.from(ref, {
                        opacity: 0,
                        y: 60,
                        scale: 0.95,
                        duration: 0.8,
                        delay: 0.1 * idx,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref,
                            start: "top 90%",
                        },
                    });
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-[#1A1818] text-white py-16 px-4">
            <div className='container mx-auto '>
                <div className="flex items-center justify-center text-center  mb-12 w-full">
                    <div className='max-w-[840px]'>
                        <h2 ref={headingRef} className="text-[32px] md:text-[40px] font-light">
                            Discover why clients entrust their business success to{" "}
                            <span className="text-orange-500 italic font-semibold">Beyond Tech Solution</span>
                        </h2>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center sm:justify-between">
                    <div className="flex flex-col gap-16">
                        <div ref={el => { statRefs.current[0] = el; return undefined; }}>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">50+</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Projects Successfully Delivered</p>
                        </div>
                        <div ref={el => { statRefs.current[1] = el; return undefined; }}>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">2x</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Growth Rate, Consistently Achieved</p>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/assets/images/home/Clip.png"
                            alt="globe-network"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-16">
                        <div ref={el => { statRefs.current[2] = el; return undefined; }}>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">5+</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Year of Experience</p>
                        </div>
                        <div ref={el => { statRefs.current[3] = el; return undefined; }}>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">20+</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Creative Minds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;
