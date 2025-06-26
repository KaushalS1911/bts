'use client'
import React from 'react';
import Image from 'next/image';

const Business: React.FC = () => {
    return (
        <section className="bg-black text-white py-16 px-4">
            <div className='container mx-auto '>
                <div className="flex items-center justify-center text-center  mb-12 w-full">
                    <div className='max-w-[840px]'>
                        <h2 className="text-[32px] md:text-[40px] font-light">
                            Discover why clients entrust their business success to{" "}
                            <span className="text-orange-500 italic font-semibold">Beyond Tech Solution</span>
                        </h2>
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-center sm:justify-between">
                    <div className="flex flex-col gap-16">
                        <div>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">50+</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Projects Successfully Delivered</p>
                        </div>
                        <div>
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
                        <div>
                            <h3 className="md:text-[64px] sm:text-[54px] text-[44px] text font-semibold">5+</h3>
                            <p className="md:text-[24px] text-[20px] max-w-[240px]">Year of Experience</p>
                        </div>
                        <div>
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
