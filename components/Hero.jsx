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
    <div className="flex flex-col !px-[5%] !pt-[8rem]   w-[100%] items-center z-30 gap-[3rem] justify-center two">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold    flex flex-wrap items-center justify-center gap-1">
          We&nbsp;
          <FlipWords words={words} className="inline-block" />
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold  two text-center">
            Your digital Presence
          </div>
        </div>
        <TypewriterEffectSmooth words={typewriterWords} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button className="w-[300px] rounded-full h-[6vh] bg-white text-black border border-gray-300 hover:bg-emerald-800 hover:text-white transition-all duration-500 cursor-pointer">
          Get a Free Quote
        </Button>
        <Button className="w-[300px] rounded-full h-[6vh] bg-emerald-400 hover:bg-emerald-800 hover:text-white  transition-all duration-500 cursor-pointer">
          See Our Work
        </Button>
      </div>
      <MarketingCarousel />
    </div>
  );
};

export default Hero;
