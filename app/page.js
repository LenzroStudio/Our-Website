"use client";
import Hero from "@/components/Hero";
import CustomerService from "@/components/CustomerService";
import OurServices from "@/components/OurServices";
import { Spotlight } from "@/components/ui/spotlight-new";
import Packages from "@/components/Packages";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import OurInfo from "@/components/OurInfo";
import { useState } from "react";

export default function Home() {
  const [openMenu , setmenu] = useState(false);
  return (
    <div>
      <main className="relative flex flex-col gap-8 row-start-2 !py-[4rem] items-center justify-center sm:items-start min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
        {/* Spotlight as background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Spotlight />
        </div>
        {/* Content above the spotlight */}
        <div className="relative z-10 w-full">
          <OurInfo openMenu={openMenu}/>
          <CustomerService openMenu={openMenu} setmenu={setmenu}/>
          <Hero />
        </div>
      </main>
      <WhyUs/>
      <OurServices />
      <Packages/>
      <Projects/>
    </div>
  );
}
