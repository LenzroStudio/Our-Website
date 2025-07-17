import React from "react";
import { Button } from "./ui/button";
import MarketingCarousel from "./MarketingCarousel";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero = () => {
  const words = ["Design", "Build", "Grow"];
  const typewriterWords = [
    { text: "Websites," },
    { text: "Apps," },
    { text: "Branding," },
    { text: "and" },
    { text: "Marketing" },
    { text: "–" },
    { text: "Tailored" },
    { text: "for" },
    { text: "Startups," },
    { text: "Creators," },
    { text: "and" },
    { text: "Businesses" },
    { text: "Worldwide." },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] md:min-h-[95vh] w-full !px-4 md:!px-[5%] gap-12 z-30">
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-wrap items-center justify-center gap-1 w-full text-center">
          We&nbsp;
          <FlipWords words={words} className="inline-block" />
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold two text-center w-full">
            Your digital Presence
          </div>
        </div>
        <TypewriterEffectSmooth words={typewriterWords} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        <Button className="w-full md:w-[300px] rounded-full h-[6vh] bg-white text-black border border-gray-300 hover:bg-emerald-800 hover:text-white transition-all duration-500 cursor-pointer">
          Get a Free Quote
        </Button>
        <Button className="w-full md:w-[300px] rounded-full h-[6vh] bg-emerald-400 hover:bg-emerald-800 hover:text-white transition-all duration-500 cursor-pointer">
          See Our Work
        </Button>
      </div>
      <MarketingCarousel />
    </div>
  );
};

export default Hero;
