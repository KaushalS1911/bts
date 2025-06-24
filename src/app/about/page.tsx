import React from 'react';
import HeroSection from "@/components/about/HeroSection";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import AboutIntro from "@/components/about/AboutIntro";

function Page() {
    return (
        <div>
            <HeroSection />
            <MissionVisionValues />
            <AboutIntro />
        </div>
    );
}

export default Page;