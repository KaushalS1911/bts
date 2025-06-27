"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        title: "Discovery & Documentation",
        number: "1",
        description:
            "We start by understanding your goals, user needs, and technical requirements through research and discussions — creating a clear, documented roadmap to move forward.",
        icon: "/assets/images/service/steps.png",
    },
];

export default function DevelopmentProcess() {
    return (
        <div className="bg-black text-white py-20 pl-4 ">
            {/* Heading Section */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Our Development Process
                </h2>
                <p className="text-md md:text-lg max-w-xl mx-auto text-gray-400 leading-relaxed">
                    From concept to code — we follow a proven, agile-driven process to
                    deliver impactful, high-performing digital solutions.
                </p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ">
                {/* Step Text */}
                <div className="flex flex-col sm:flex-row items-start gap-4 md:col-span-8 col-span-12 xl:ml-5 lg:ml-3 md:ml-3 sm:ml-2 ml-2">
                    {/* Step Number Image */}
                    <div className=" ">
                        <Image
                            src="/assets/images/service/one.png"
                            alt="Step 1"
                            width={56}
                            height={112}
                            className="w-14 h-28 object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-[800px] w-full">
                        <h4 className="text-[22px] sm:text-[25px] md:text-[27px] xl:text-[41px] font-semibold leading-tight">
                            {steps[0].title}
                        </h4>
                        <p className="mt-2 text-[22px] sm:text-[20px] md:text-[25px] lg:text-[33px] text-gray-300 leading-snug tracking-wide">
                            {steps[0].description}
                        </p>
                    </div>

                </div>

                {/* Step Icon Image */}
                <div className="flex justify-center md:justify-end md:col-span-4 col-span-12">
                    <Image
                        src={steps[0].icon}
                        alt="Discovery Icon"
                        width={542}
                        height={241}
                        className="w-full max-w-[542px] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
