import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-[#1A1818] text-white py-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold leading-tight mb-3">
                    We Build What’s Beyond.
                </h1>
                <p className="text-white text-[16px] sm:text-[18px] font-normal md:text-[20px] max-w-3xl mx-auto leading-relaxed">
                    Technology isn’t just tools — it’s transformation. At Beyond Tech Solution, we craft digital experiences that help businesses scale, adapt, and lead.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
