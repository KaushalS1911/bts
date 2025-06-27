import React from 'react';
import ServiceIntro from "@/components/Services/serviceIntro";
import WorkingWithUs from "@/components/home/workingWithUs";
import OurClient from "@/components/home/ourClient";
import TechnicalProficiency from "@/components/Services/TechnicalProficiency";
import Project from "@/components/Services/project";
import WeOffer from "@/components/Services/weOffer";

function Page() {
    return (
        <div>
            <ServiceIntro/>
            <Project/>
            <TechnicalProficiency/>
            <WorkingWithUs/>
            <OurClient/>
            <WeOffer/>
        </div>
    );
}

export default Page;