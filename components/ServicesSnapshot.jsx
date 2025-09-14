import { Strategies, NavIcons } from "@/assets/assets";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {motion, useTransform, useViewportScroll} from 'framer-motion'
import Link from "next/link";

const Strategy = () => {
    const { scrollY } = useViewportScroll();
    const start = 300; // when animation starts
    const end = 700; // when animation ends
    // Animate y from 8rem to 0 as you scroll from start to end
    const y = useTransform(scrollY, [start, end], ["8rem", "0rem"]);
  return (
    <div className="md:!px-20 !px-6">
      <div className="flex relative flex-col items-center gap-[5rem]">
        <div className="relative w-full overflow-clip  ">
          <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter text-gray-300 text-center flex gap-2 items-center text-center justify-center mb-12">
            OUR TAILORED
            <motion.span
              style={{ y, display: "inline-block" }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              SERVICES
            </motion.span>{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] md:gap-[2rem] items-center justify-center !mt-10">
          {Strategies.map((item, index) => (
            <div
              key={index}
              className={`border !p-3 rounded-2xl  flex flex-col h-[26vh] md:hover:scale-[102%] transition-all duration-500  gap-2 cursor-pointer`}
            >
              <div className={`!p-3 border ${item.color} w-fit rounded-full`}>
                {item.img}
              </div>

              <div className="flex flex-col gap-3 !p-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold">{item.type}</h1>
                  <ArrowUpRightIcon className="!w-5 h-5 font-bold" />
                </div>
                <p className="text-xs text-gray-500">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={'/services'}>
          <Button className={"!px-8 cursor-pointer"}>Explore All Services</Button>
        </Link>
      </div>
    </div>
  );
};

export default Strategy;
