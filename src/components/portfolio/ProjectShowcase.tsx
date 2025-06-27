"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
    title: string;
    client: string;
    work: string;
    imageUrl: string;
    navigate: string;
};

const projects: Project[] = [
    {
        title: "Brand Journey Improvements",
        client: "Organc",
        work: "Website Development",
        imageUrl: "/assets/images/portfolio/BrandJourney.jpg",
        navigate: "/portfolio/organc"
    },
    {
        title: "Brand Grouping",
        client: "FR",
        work: "App Development",
        imageUrl: "/assets/images/portfolio/Brand Grouping.jpg",
        navigate: "/portfolio/fr"
    },
    {
        title: "NFT Glimps",
        client: "Rumanda",
        work: "Custom Software Development",
        imageUrl: "/assets/images/portfolio/NFT Glimps.jpg",
        navigate: "/portfolio/rumanda"
    },
    {
        title: "Brand Suggestions",
        client: "T3d",
        work: "App Development",
        imageUrl: "/assets/images/portfolio/Brand Suggestions.jpg",
        navigate: "/portfolio/t3d"
    }
];

const ProjectShowcase: React.FC = () => {
    const router = useRouter();
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        projectRefs.current.forEach((el, i) => {
            if (!el) return;

            const fromDirection = i % 2 === 0 ? -100 : 100; // Alternate left/right

            gsap.fromTo(
                el,
                { opacity: 0, x: fromDirection },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        if (ctaRef.current) {
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 2.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="bg-[#1A1818] text-white pb-5 px-4 sm:px-6 lg:px-12 lg:pt-30 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => {projectRefs.current[index] = el}}
                        className="space-y-4 cursor-pointer opacity-0 transform"
                        onClick={() => router.push(project.navigate)}
                    >
                        <div className="relative w-full h-[620px] rounded-xl overflow-hidden md:mt-6 mt-2">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white leading-[32px] flex items-center gap-5">
                                {project.title}
                                <span>
                                    <Image
                                        src="/assets/images/portfolio/Line 3.png"
                                        alt="Decorative Line"
                                        width={60}
                                        height={50}
                                    />
                                </span>
                            </div>

                            <div className="mt-5">
                                <p>
                                    <span className="font-normal text-[#606060] md:text-[18px] text-[16px] leading-[22px] tracking-[0.25px]">Client:</span>{" "}
                                    <span className="md:text-[18px] text-[16px] leading-[22px] tracking-[0.25px] font-normal text-white">{project.client}</span>
                                </p>
                                <p className="mt-2">
                                    <span className="font-normal text-[#606060] leading-[22px] tracking-[0.25px] md:text-[18px] text-[16px]">Work:</span>{" "}
                                    <span className="md:text-[18px] text-[16px] leading-[22px] tracking-[0.25px] font-normal text-white">{project.work}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div
                ref={ctaRef}
                className="lg:mt-15  mt-13 bg-[#302d2d] rounded-2xl py-15 px-6 sm:px-12 container mx-auto text-white border border-white opacity-0 transform"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
                    <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                        Hire the best developers and designers around!
                    </h2>
                    <div className="sm:justify-self-end flex flex-col items-center">
                        <Image
                            src="/assets/images/portfolio/Group 38.png"
                            alt="Top Decoration"
                            width={100}
                            height={50}
                            className="sm:mb-5"
                        />
                        <button
                            className="mt-4 sm:mt-0 text-white font-bold py-[14px] px-[65px] rounded-full shadow-lg transition"
                            style={{
                                backgroundImage: 'linear-gradient(to left, #EE2A6D, #F2682F)',
                            }}
                        >
                            Contact Us
                        </button>
                        <Image
                            src="/assets/images/portfolio/Group 39.png"
                            alt="Bottom Decoration"
                            width={100}
                            height={50}
                            className="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;