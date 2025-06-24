import React from 'react';
import Image from 'next/image';
import hands from '../../../public/assets/images/about/hands.png';

const MissionVisionValues = () => {
    return (
        <section className="bg-[#1A1818] py-5">
            <div className="relative flex justify-center items-center">
                {/* Gradient Glow Behind */}
                <div className="absolute inset-0 z-0 flex justify-center items-center w-full">
                    <div className="w-full h-full rounded-[200px] bg-[#EF3A65] blur-[100px] opacity-40"></div>
                </div>

                {/* Main Content Card - Full Width */}
                <div className="relative z-10 w-full bg-[#111010] rounded-[60px] sm:rounded-[120px] lg:rounded-[220px] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-20 py-6 sm:py-8 lg:py-5 xl:py-10 shadow-xl max-w-none gap-y-6">

                    {/* Left - Circle Image */}
                    <div>
                        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
                            <Image
                                src={hands}
                                alt="Teamwork Hands"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Center - Headings */}
                    <div className="flex flex-col justify-center text-center lg:text-left space-y-1 min-w-[200px] lg:mx-4">
                        <h2 className="text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[35px] xl:text-[50px] font-bold">
                            Our Mission
                        </h2>
                        <h3 className="text-[#888888] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[35px] xl:text-[50px] font-semibold">
                            Our Vision
                        </h3>
                        <h3 className="text-[#888888] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[35px] xl:text-[50px] font-semibold">
                            Our Values
                        </h3>
                    </div>

                    {/* Right - Paragraph */}
                    <div className="lg:ml-4 max-w-sm text-center lg:text-left px-3 lg:px-0">
                        <p className="text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-relaxed tracking-wide">
                            To empower businesses with innovative IT solutions that blend strategy, design, and technology for impactful, future-ready experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;