"use client";
import Hero from "@/components/Hero";
import Strategy from "@/components/ServicesSnapshot";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import CaseStudies from "@/components/CaseStudies";
import LeadMagnet from "@/components/LeadMagnet";
import WhyChooseUs from "@/components/Pricing";
import ClientLogosTestimonials from "@/components/ClientLogosTestimonials";
import BlogPreviews from "@/components/BlogPreviews";
import FinalCTA from "@/components/FinalCTA";
import { useState } from "react";
import Feautured from "@/components/Feautured";
import Pricing from "@/components/Pricing";

export default function Home() {
  const [openMenu, setmenu] = useState(false);
  return (
    <div>
      <main className="px-[1rem] md:!px-[2rem] !py-4 md:!py-0 flex flex-col gap-[4rem] justify-center items-center">
        <Hero />
        <Feautured/>
        <ServicesSnapshot />
        <CaseStudies />
        <Pricing/>
        <ClientLogosTestimonials />
        <BlogPreviews />
      </main>
    </div>
  );
}
