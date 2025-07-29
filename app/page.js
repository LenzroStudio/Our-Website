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
import Testimonials from "@/components/Testimonials";
import WorldMap from "@/components/ui/world-map";

export default function Home() {
  const [openMenu , setmenu] = useState(false);
  return (
    <div>
      <main className="!px-[2rem] !py-4 md:!py-0 flex flex-col gap-[4rem] justify-center items-center">
        <Hero />
        <div>
          <h1>All in One for Your Brand</h1>
          <div>
            
          </div>
        </div>
        <CustomerService />
      </main>
    </div>
  );
}
