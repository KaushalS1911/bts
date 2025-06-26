import React from 'react';
import Image from "next/image";
import star from "../../../public/assets/images/about/Star 1.png";

export default function ContactIntro() {
    return (
        <div className="bg-[#1A1818] relative overflow-hidden">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center min-h-[40vh] py-16 overflow-hidden">
                <div className="absolute top-20 left-100 w-10 h-10">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="absolute bottom-20 right-100 w-10 h-10">
                    <Image
                        src={star}
                        alt="star"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] leading-[110%] font-semibold text-white text-center mb-4">
                        Let&apos;s Build Something Beyond.
                    </h1>
                    <p className="text-[18px] sm:text-[22px] md:text-[24px] leading-[110%] font-normal text-gray-300 text-center max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? We&apos;d love to hear from you.
                    </p>
                </div>
            </div>
        </div>
    );
}
