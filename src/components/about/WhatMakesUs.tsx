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
    const dotRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
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

            // Animate list items
            itemRefs.current.forEach((item, index) => {
                gsap.from(item, {
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                    y: index === 1 ? 50 : 0,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                    },
                });
            });

            // Animate floating dots
            dotRefs.current.forEach(dot => {
                gsap.to(dot, {
                    y: '+=12',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 2,
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#111010] text-white py-30 px-4 relative overflow-hidden">

            {/* 🌟 Animated Background Dots */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(40)].map((_, i) => {
                    const size = 4 + Math.random() * 6;
                    return (
                        <div
                            key={i}
                            ref={(el) => {dotRefs.current[i] = el!}}
                            className="absolute bg-white"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: 0.05 + Math.random() * 0.2,
                            }}
                        />
                    );
                })}

            </div>

            {/* 🌟 Decorative Star Icons */}
            <div className="absolute top-60 left-70 w-20 h-20 z-10">
                <Image src={star} alt="star" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-20 right-80 w-20 h-20 z-10">
                <Image src={star} alt="star" className="w-full h-full object-contain" />
            </div>

            {/* ✅ Heading */}
            <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-13 relative z-10">
                <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold leading-tight text-center">
                    What Makes Us... <span className="text-[#F2682F] italic">Beyond</span>
                </h2>
                <p className="text-[#CCCCCC] mt-2 text-sm sm:text-base text-[24px]">
                    It’s not just our name. It’s how we work.
                </p>
            </div>

            {/* ✅ Items */}
            <div className="mt-12 space-y-10 max-w-4xl mx-auto px-2 sm:px-4 relative z-10">
                {[
                    {
                        title: 'Beyond the Brief',
                        desc: 'We dive deep to understand the ‘why’ behind your project.',
                        color: '#FAE387'
                    },
                    {
                        title: 'Beyond the Code',
                        desc: 'We build with business, brand, and user in mind.',
                        color: '#FF92D3'
                    },
                    {
                        title: 'Beyond the Launch',
                        desc: 'We stay with you long after the product goes live.',
                        color: '#81BAFF'
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { itemRefs.current[index] = el! }}
                        className={`flex justify-start sm:justify-${index === 1 ? 'center' : index === 2 ? 'end' : 'start'} group cursor-pointer`}
                    >
                        <div>
                            <h3
                                className={`text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#A3A2A2] group-hover:text-[${item.color}] transition-colors duration-300`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`text-[#A3A2A2] sm:ms-10 mt-1 text-sm sm:text-base group-hover:text-[${item.color}] transition-colors duration-300`}
                            >
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatMakesUs;
