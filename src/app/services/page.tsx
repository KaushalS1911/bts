import React from 'react';
import ServiceIntro from "@/components/Services/serviceIntro";
import WorkingWithUs from "@/components/home/workingWithUs";
import OurClient from "@/components/home/ourClient";

function Page() {
    return (
        <div>
            <ServiceIntro/>
            <WorkingWithUs/>
            <OurClient/>
        </div>
    );
}

export default Page;