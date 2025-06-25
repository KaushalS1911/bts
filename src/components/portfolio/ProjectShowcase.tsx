"use client";
import React from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

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

    return (
        <section className="bg-[#1A1818] text-white py-12 px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 container mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-xl">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div
                                className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white cursor-pointer flex items-center gap-5"
                                onClick={() => router.push(project.navigate)}
                            >
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

                            <div className="mt-1 text-sm text-gray-400">
                                <p>
                                    <span
                                        className="font-normal text-[#606060] md:text-[18px] text-[16px]">Client:</span>{" "}
                                    <span
                                        className="md:text-[18px] text-[16px] font-normal text-white">{project.client}</span>
                                </p>
                                <p>
                                    <span
                                        className="font-normal text-[#606060] md:text-[18px] text-[16px]">Work:</span>{" "}
                                    <span
                                        className="md:text-[18px] text-[16px] font-normal text-white">{project.work}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div
                className="mt-16 bg-[#302d2d] rounded-2xl py-15 px-6 sm:px-12 container mx-auto text-white border border-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
                    <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                        Hire the best developers and designers around!
                    </h2>
                    <div className="sm:justify-self-end flex flex-col items-center">
                        {/* Top Image */}
                        <Image
                            src="/assets/images/portfolio/Group 38.png"         // Replace with your actual image path
                            alt="Top Decoration"
                            width={100}                  // Adjust width/height as needed
                            height={50}
                            className="sm:mb-5"
                        />

                        {/* Contact Button */}
                        <button
                            className="mt-4 sm:mt-0 text-white font-bold py-[14px] px-[65px] rounded-full shadow-lg transition"
                            style={{
                                backgroundImage: 'linear-gradient(to left, #EE2A6D, #F2682F)',
                            }}
                        >
                            Contact Us
                        </button>

                        {/* Bottom Image */}
                        <Image
                            src="/assets/images/portfolio/Group 39.png"      // Replace with your actual image path
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
