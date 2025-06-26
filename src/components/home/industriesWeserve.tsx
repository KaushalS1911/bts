'use client';

import React from 'react';
import Image from 'next/image';

interface IndustryPair {
    parent: {
        title: string;
        icon: string;
    };
    child: {
        title: string;
        icon: string;
    };
}

const industryPairs: IndustryPair[] = [
    {
        parent: { title: 'Manufacture', icon: '/assets/images/home/Vector (3).png' },
        child: { title: 'Hospital', icon: '/assets/images/home/Vector (4).png' }
    },
    {
        parent: { title: 'Finance', icon: '/assets/images/home/Vector (5).png' },
        child: { title: 'Real Estate', icon: '/assets/images/home/Vector (6).png' }
    },
    {
        parent: { title: 'Education', icon: '/assets/images/home/tdesign_education-filled.png' },
        child: { title: 'Restaurant', icon: '/assets/images/home/Vector (7).png' }
    },
    {
        parent: { title: 'E-commerce', icon: '/assets/images/home/streamline-ultimate_e-commerce-apparel-bold.png' },
        child: { title: 'Furniture', icon: '/assets/images/home/maki_furniture.png' }
    },
    {
        parent: { title: 'Automobile', icon: '/assets/images/home/Vector (8).png' },
        child: { title: 'Cosmetics', icon: '/assets/images/home/solar_cosmetic-bold.png' }
    }
];

const IndustriesWeServe: React.FC = () => {
    return (
        <div className="relative bg-black text-white py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 min-h-screen">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2">
                Industries We serve
            </h2>

            {/* Desktop Layout (unchanged) */}
            <div className="hidden lg:flex flex-col items-center max-w-6xl mx-auto">
                {/* Center Icon */}
                <div className="bg-[#2A2A2A] rounded-2xl p-4 mb-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-600 rounded-2xl flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="white" strokeWidth="2"/>
                            <circle cx="20" cy="20" r="6" fill="white"/>
                            <path d="M20 4v32M4 20h32" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>

                {/* Main vertical line down from center */}
                <div className="w-0.5 h-12 bg-pink-500"></div>

                {/* Main horizontal line */}
                <div className="relative w-[55vw] ">
                    <div className="h-0.5 bg-pink-500 w-full"></div>

                    {/* Vertical lines going up from horizontal line */}
                    {industryPairs.map((_, index) => (
                        <div
                            key={index}
                            className="absolute top-0 w-0.5 h-12 bg-pink-500 transform -translate-x-0.5"
                            style={{
                                left: `${(100 / (industryPairs.length - 1)) * index}%`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Industry pairs */}
                <div className="flex justify-between w-full  mt-12">
                    {industryPairs.map((pair, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Parent Industry */}
                            <div className="bg-[#2A2A2A] rounded-2xl w-24 h-24 flex flex-col items-center justify-center mb-4 relative">
                                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                                    <Image
                                        src={pair.parent.icon}
                                        alt={pair.parent.title}
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-xs text-center leading-tight">{pair.parent.title}</p>
                            </div>

                            {/* Vertical line down */}
                            <div className="w-0.5 h-12 bg-pink-500"></div>

                            {/* Child Industry */}
                            <div className="bg-[#2A2A2A] rounded-2xl w-24 h-24 flex flex-col items-center justify-center">
                                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                                    <Image
                                        src={pair.child.icon}
                                        alt={pair.child.title}
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-xs text-center leading-tight">{pair.child.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile & Tablet Layout - Enhanced Responsiveness */}
            <div className="lg:hidden">
                {/* Center Icon - More responsive sizing */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="bg-[#2A2A2A] rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4">
                        <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 40 40"
                                fill="none"
                                className="xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            >
                                <circle cx="20" cy="20" r="16" fill="none" stroke="white" strokeWidth="2"/>
                                <circle cx="20" cy="20" r="6" fill="white"/>
                                <path d="M20 4v32M4 20h32" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Enhanced Mobile Grid Layout */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto">
                    {industryPairs.map((pair, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 xs:space-y-3">
                            {/* Parent Industry - Enhanced responsive sizing */}
                            <div className="bg-[#2A2A2A] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col items-center justify-center relative transition-all duration-200 hover:bg-[#333333]">
                                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-0.5 xs:mb-1 sm:mb-1 md:mb-2 flex items-center justify-center">
                                    <Image
                                        src={pair.parent.icon}
                                        alt={pair.parent.title}
                                        width={16}
                                        height={16}
                                        className="object-contain xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                    />
                                </div>
                                <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-center leading-tight px-0.5 xs:px-1 font-medium">
                                    {pair.parent.title}
                                </p>
                            </div>

                            {/* Connecting line - Responsive height */}
                            <div className="w-0.5 h-3 xs:h-4 sm:h-4 md:h-6 bg-pink-500"></div>

                            {/* Child Industry - Enhanced responsive sizing */}
                            <div className="bg-[#2A2A2A] rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col items-center justify-center transition-all duration-200 hover:bg-[#333333]">
                                <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-0.5 xs:mb-1 sm:mb-1 md:mb-2 flex items-center justify-center">
                                    <Image
                                        src={pair.child.icon}
                                        alt={pair.child.title}
                                        width={16}
                                        height={16}
                                        className="object-contain xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                    />
                                </div>
                                <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs text-center leading-tight px-0.5 xs:px-1 font-medium">
                                    {pair.child.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional responsive spacing for very small screens */}
                <div className="h-4 sm:h-6 md:h-8"></div>
            </div>
        </div>
    );
};

export default IndustriesWeServe;