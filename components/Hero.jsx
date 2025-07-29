// export const metadata = [
//   {
//     title: "Hero section page",
//     description: "The first impression to our website"
//   }
// ]
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Circle, MousePointer2, PlusIcon, Sparkle } from "lucide-react";
import Image from "next/image";
import { five, four, one, six, three, two } from "@/public/images";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";


const Hero = () => {
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const rafRef = useRef();
  const [isMdUp, setIsMdUp] = useState(true);

  // Detect screen size for cursor
  useEffect(() => {
    const checkScreen = () => setIsMdUp(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Smooth cursor movement (only on md+)
  useEffect(() => {
    if (!hovered || !isMdUp) {
      setCursor((c) => ({ ...c, visible: false }));
      return;
    }
    setCursor((c) => ({ ...c, visible: true }));
    const animate = () => {
      setCursor((prev) => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        return {
          ...prev,
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mouse, hovered, isMdUp]);

  const handleMouseMove = (e) => {
    if (isMdUp) setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="border group transition-all duration-500 border-black/[0.2] dark:border-white/[0.2]  !p-5 md:!p-4 relative "
      onMouseMove={hovered && isMdUp ? handleMouseMove : undefined}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Plus Icons */}
      <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white t" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white " />
      <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white " />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white" />

      {/* CORNER IMAGES FOR SMALL SCREENS */}
      <div className="block lg:hidden">
        {/* Top Left */}
        <div className="absolute top-2 left-2 z-10">
          <Image
            src={one}
            className="w-16 h-16 rounded-md object-cover"
            alt="one"
          />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-2 left-2 z-10">
          <Image
            src={two}
            className="w-16 h-16 rounded-md object-cover"
            alt="two"
          />
        </div>
        {/* Top Right */}
        <div className="absolute top-2 right-2 z-10">
          <Image
            src={four}
            className="w-16 h-16 rounded-md object-cover"
            alt="four"
          />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-2 right-2 z-10">
          <Image
            src={five}
            className="w-16 h-16 rounded-md object-cover"
            alt="five"
          />
        </div>
      </div>

      {/* FLEX ROW LAYOUT FOR LARGE SCREENS */}
      <div className="hidden lg:flex flex-row items-center justify-between gap-[2rem]">
        {/* LEFT IMAGES */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image src={one} className="w-32 rounded-md" alt="one" />
          <Image src={two} className="w-32 rounded-md" alt="two" />
          <Image src={three} className="w-32 rounded-md" alt="three" />
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col items-center gap-[3rem]">
          <div className="text-xs border !py-1 !px-6 rounded-full">
            Business Startups & Brands Trust LenzroTech
          </div>

          <div className="one text-2xl text-center leading-12 md:leading-16 md:text-4xl lg:text-4xl !px-[1rem] md:max-w-4xl lg:max-w-6xl">
            <h1>
              <span
                className={`transition-all duration-500 px-2 py-1 cursor-none
                  ${
                    hovered === "innovative"
                      ? "md:bg-cyan-500"
                      : "border border-blue-400 md:hover:bg-blue-400"
                  }
                  bg-cyan-500 md:bg-transparent
                `}
                onMouseEnter={() => isMdUp && setHovered("innovative")}
                onMouseLeave={() => setHovered(null)}
              >
                Innovative
              </span>{" "}
              Tech Solutions , Brand{" "}
              <span
                className={`transition-all duration-500 !px-2 !py-1 cursor-none
                  ${
                    hovered === "marketing"
                      ? "md:bg-pink-500"
                      : "border border-pink-500 md:hover:bg-pink-400"
                  }
                  bg-pink-500 md:bg-transparent
                `}
                onMouseEnter={() => isMdUp && setHovered("marketing")}
                onMouseLeave={() => setHovered(null)}
              >
                Marketing
              </span>{" "}
              &<br /> A Lasting Digital{" "}
              <span
                className={`transition-all duration-500 !px-2 !py-1 cursor-none !ml-5
                  ${
                    hovered === "presence"
                      ? "md:bg-amber-500"
                      : "border border-amber-400 md:hover:bg-amber-400"
                  }
                  bg-amber-500 md:bg-transparent
                `}
                onMouseEnter={() => isMdUp && setHovered("presence")}
                onMouseLeave={() => setHovered(null)}
              >
                Presence
              </span>
            </h1>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-[2rem]">
            <Link
              href="/"
              className="border border-yellow-300 dark:text-black dark:hover:bg-yellow-200 !py-2 !px-20 bg-yellow-300 hover:bg-transparent transition-all duration-500 hover:shadow-xl rounded-md"
            >
              Build your Brand
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image src={four} className="w-32 rounded-md" alt="four" />
          <Image src={five} className="w-32 rounded-md" alt="five" />
          <Image src={six} className="w-32 rounded-md" alt="six" />
        </div>
      </div>

      {/* MIDDLE SECTION FOR SMALL SCREENS */}
      <div className="flex flex-col items-center gap-[3rem] lg:hidden">
        <div className="text-xs border !py-1 !px-6 rounded-full">
          Business Startups & Brands Trust LenzroTech
        </div>

        <div className="one text-2xl text-center leading-12 md:leading-16 md:text-4xl lg:text-4xl !px-[1rem] !py-[2rem] md:max-w-4xl lg:max-w-6xl">
          <h1>
            <span
              className={`transition-all duration-500 px-2 py-1 cursor-none
                ${
                  hovered === "innovative"
                    ? "md:bg-cyan-500"
                    : "border border-blue-400 md:hover:bg-blue-400"
                }
                bg-cyan-500 md:bg-transparent
              `}
              onMouseEnter={() => isMdUp && setHovered("innovative")}
              onMouseLeave={() => setHovered(null)}
            >
              Innovative
            </span>{" "}
            Tech Solutions , Brand{" "}
            <span
              className={`transition-all duration-500 !px-2 !py-1 cursor-none
                ${
                  hovered === "marketing"
                    ? "md:bg-pink-500"
                    : "border border-pink-500 md:hover:bg-pink-400"
                }
                bg-pink-500 md:bg-transparent
              `}
              onMouseEnter={() => isMdUp && setHovered("marketing")}
              onMouseLeave={() => setHovered(null)}
            >
              Marketing
            </span>{" "}
            &<br /> A Lasting Digital{" "}
            <span
              className={`transition-all duration-500 !px-2 !py-1 cursor-none !ml-5
                ${
                  hovered === "presence"
                    ? "md:bg-amber-500"
                    : "border border-amber-400 md:hover:bg-amber-400"
                }
                bg-amber-500 md:bg-transparent
              `}
              onMouseEnter={() => isMdUp && setHovered("presence")}
              onMouseLeave={() => setHovered(null)}
            >
              Presence
            </span>
          </h1>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-[1rem] md:gap[4rem]"></div>
      </div>

      {/* CUSTOM CURSOR (only on md+) */}
      {cursor.visible && isMdUp && (
        <div
          className="hidden md:flex"
          style={{
            position: "fixed",
            left: cursor.x + 12,
            top: cursor.y + 12,
            pointerEvents: "none",
            zIndex: 9999,
            flexDirection: "column",
            alignItems: "center",
            transition: "opacity 0.18s, transform 0.18s",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.95)",
          }}
        >
          <MousePointer2
            className={`w-8 h-8 drop-shadow-lg ${
              hovered === "innovative"
                ? "text-cyan-500"
                : hovered === "marketing"
                ? "text-pink-500"
                : "text-amber-400"
            }`}
          />
          <div
            className={`rounded-full !px-3 !py-1 !mt-1 text-white text-xs shadow-lg ${
              hovered === "innovative"
                ? "bg-cyan-500"
                : hovered === "marketing"
                ? "bg-pink-500"
                : "bg-amber-400"
            }`}
          >
            {hovered === "innovative"
              ? "Design"
              : hovered === "marketing"
              ? "Strategy"
              : "Long"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
