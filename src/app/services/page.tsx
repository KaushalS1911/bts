import React from 'react';
import ServiceIntro from "@/components/Services/serviceIntro";
import WorkingWithUs from "@/components/home/workingWithUs";
import OurClient from "@/components/home/ourClient";
import WeOffer from "@/components/Services/weOffer";

function Page() {
    return (
        <div>
            <ServiceIntro/>
            <WorkingWithUs/>
            <OurClient/>
            <WeOffer/>
        </div>
    );
}

export default Page;