"use client";
import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import { useState } from "react";

export default function Home() {
  const [openMenu , setmenu] = useState(false);
  return (
    <div>
      <main className=" px-[1rem] md:!px-[2rem] !py-4 md:!py-0 flex flex-col gap-[4rem] justify-center items-center">
        <Hero />
        <Strategy/>
      </main>
    </div>
  );
}
