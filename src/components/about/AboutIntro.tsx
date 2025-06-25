import React from 'react';
import Image from 'next/image';
import logoThumbnail from '../../../public/assets/images/about/video-thumbnail.png';
import {Play} from 'lucide-react';

const AboutIntro = () => {
    return (
        <section className="bg-[#1A1818] py-30 px-4 text-white">
            <div className="container mx-auto px-4">
                {/* Heading outside container but visually aligned */}
                <div className="container mx-auto px-4">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-13 leading-tight text-center">
                        We are Beyond Tech Solution
                    </h2>
                </div>

                <div
                    className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
                    {/* Left - Thumbnail + Play */}
                    <div className="relative rounded-[24px] overflow-hidden w-full max-w-[380px]">
                        <Image
                            src={logoThumbnail}
                            alt="Beyond Tech Video Thumbnail"
                            width={400}
                            height={250}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div
                                className="bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-md cursor-pointer">
                                <Play className="w-6 h-6"/>
                            </div>
                        </div>
                    </div>

                    {/* Right - Paragraphs */}
                    <div
                        className="max-w-2xl w-full text-center lg:text-left space-y-5 text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed font-normal">
                        <p>
                            Founded with a belief that tech should be human–first, we started Beyond Tech with one goal
                            — to deliver
                            solutions that feel intelligent, seamless, and global.
                        </p>
                        <p>
                            What began as a small team of passionate builders has grown into a full–stack IT powerhouse
                            — trusted by
                            clients across industries and continents.
                        </p>
                        <p>
                            We aren’t just a service provider — we’re a tech partner on your journey to digital growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
