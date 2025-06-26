import React from 'react';
import Openings from "@/components/carrer/openings";
import WhyWorkWithUs from "@/components/carrer/whyWork";
import OurPerksAndBenefits from "@/components/carrer/ourPacks";
import ApplyHereForm from "@/components/carrer/applyHere";

function Page() {
    return (
        <div>
            <Openings/>
            <WhyWorkWithUs/>
            <OurPerksAndBenefits/>
            <ApplyHereForm/>
        </div>
    );
}

export default Page;