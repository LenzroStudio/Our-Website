"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const slides = [
  { label: "Website", des: "Custom-designed, responsive websites to showcase your brand and engage your audience.", type: "image" },
  { label: "Mobile App", des: "User-friendly mobile applications for iOS and Android to reach customers on the go.", type: "image" },
  { label: "Social Media Post", des: "Creative social media content to boost your online presence and connect with followers.", type: "image" },
  { label: "Business Email", des: "Professional business email solutions for secure and reliable communication.", type: "image" },
  { label: "SMS Dashboard", des: "Efficient SMS marketing dashboard to manage and automate your messaging campaigns.", type: "image" },
];

export default function MarketingCarousel() {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalShift = -324 * slides.length;
    controls.start({
      x: [0, totalShift],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section className="w-full overflow-hidden ">
      <div className="relative w-full h-[320px] overflow-hidden !px-4">
        <motion.div
          className="flex gap-6 absolute will-change-transform"
          ref={carouselRef}
          animate={controls}
        >
          {[...slides, ...slides].map(({ label, des, type }, i) => (
            <div
              key={label + i}
              className="min-w-[320px] h-[170px] rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-gray-100 Ex shadow-lg bg-glass !py-6 !px-4"
            >
              <span className="text-lg font-bold">{label}</span>
              <span className="text-xs text-gray-600 !mt-2 text-center">{des}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
