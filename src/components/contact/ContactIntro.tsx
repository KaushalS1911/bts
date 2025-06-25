import React from 'react';
import Image from "next/image";
import star from "../../../public/assets/images/about/Star 1.png";

export default function ContactIntro() {
    return (
        <div className="bg-[#1A1818] relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center min-h-[40vh] py-16 overflow-hidden">
                <div className="absolute top-30 left-130 w-10 h-10">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="absolute bottom-30 right-130 w-10 h-10">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font- bold text-white mb-4">Let&apos;s Build
                        Something Beyond.</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or just want to say hello? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>
        </div>
    );
}
