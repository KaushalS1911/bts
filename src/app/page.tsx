// import { CustomCursor } from "@/components/home/CustomCursor";
import { HeroSection } from "@/components/home/HeroSection";
import Busines from "@/components/home/business";
import WhatWeDeliver from "@/components/home/whatWeDeliver";
// import IndustriesWeserve from "@/components/home/industriesWeserve";
import OurClient from "@/components/home/ourClient";
import WorkingWithUs from "@/components/home/workingWithUs";
import NewsInsight from "@/components/home/newsInsight";
// import { ScrollCardsParallax } from "@/components/Services/ScrollCardsParallax";
// import DevelopmentProcess from "@/components/development-process/development-process";
// import {Header} from "@/layouts/main/header";

 const App: React.FC = () => {
  return (
      <>

      <div className="relative">
      {/* Custom Cursor */}
      {/*<CustomCursor />*/}

      {/* Header */}
      {/* <Header />*/}

      {/* Hero Section */}
      <HeroSection />
          <Busines/>
          <WhatWeDeliver/>
          {/*<IndustriesWeserve/>*/}
          <OurClient/>
          <WorkingWithUs/>
          <NewsInsight/>



      {/* Parallax Cards Section */}
      {/*  <ScrollCardsParallax />*/}

        {/*<DevelopmentProcess />*/}

    </div>
      </>
  );
};


export default App;