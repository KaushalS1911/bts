'use client';

import React from 'react';
import Image from 'next/image';

const sections = {
    projectStory: {
        title: 'Project Story',
        content: `The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it.

We cannot imagine a wedding without the opportunity to capture it on film; we would not be able to remember the growing up of children or the holidays if we did not have pictures.`,
        images: [
            '/assets/images/portfolio/img1.jpg',
            '/assets/images/portfolio/img2.jpg',
        ],
    },
    about: {
        title: 'About',
        content: `Everywhere we are haunted by photography: in newspapers, magazines, advertisements on television or the internet. But we still zero down on one need.

And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills.`,
    },
};

export default function ProjectDetailPage() {
    return (
        <div className="bg-[#1A1818] text-white py-12 space-y-16 px-4 sm:px-6 lg:px-12 lg:pt-30 pt-10">
            <div className="container mx-auto space-y-16">
                <header className="space-y-1 ">
                    <div className="md:text-[56px] sm:text-[52px] text-[34px] font-semibold">
                        NFT Glimps
                    </div>
                    <p className="md:text-[18px] text-[16px] font-semibold text-[#949494]">Details About The Project</p>
                    <div className="mt-6 flex justify-center">
                        <Image
                            src="/assets/images/portfolio/NFT Glimps.jpg"
                            alt="Main NFT"
                            width={1400}
                            height={636}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                </header>

                {/* Project Story Section */}
                <section className="space-y-6 container mx-auto">
                    <div className="text-2xl md:text-[32px] sm:text-[28px] text-[24px] max-w-6xl mx-auto font-semibold">{sections.projectStory.title}</div>
                    <p className="text-[#E0E0E0] font-normal md:text-[18px] text-[16px] max-w-6xl mx-auto whitespace-pre-line">
                        {sections.projectStory.content}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {sections.projectStory.images.map((src, idx) => (
                            <Image
                                key={idx}
                                src={src}
                                alt={`Project image ${idx + 1}`}
                                width={555}
                                height={600}
                                className="w-full h-[600px] object-cover rounded-[16px]"
                            />
                        ))}
                    </div>

                </section>

                {/* About Section */}
                <section className="space-y-6 max-w-6xl mx-auto">
                    <h2 className="text-[#FFFFFF] font-bold  md:text-[32px] sm:text-[28px] text-[24px] ">{sections.about.title}</h2>
                    <p className="text-[#E0E0E0] md:text-[18px]  text-[16px] font-normal whitespace-pre-line">{sections.about.content}</p>
                </section>
            </div>
        </div>
    );
}
