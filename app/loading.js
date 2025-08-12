"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode from system or localStorage
    const checkDark = () => {
      if (typeof window !== "undefined") {
        // Check localStorage first (if you use it for theme)
        const localTheme = localStorage.getItem("theme");
        if (localTheme === "dark") return true;
        if (localTheme === "light") return false;
        // Otherwise, check system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      return false;
    };
    setIsDark(checkDark());

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          requestAnimationFrame(() => {
            onComplete();
          });
        }
        return next;
      });
    }, 40); // ~4 seconds in total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <DotLottieReact
        src="https://lottie.host/ae191bb1-91c1-49ff-8ad9-b12668cd7490/PXSdoZ1S0h.lottie"
        loop
        autoplay
        className="w-80"
      />
      {/* Progress bar */}
      <div
        className={`w-64 h-1 ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        } mt-6 overflow-hidden rounded`}
      >
        <div
          className={`h-full ${
            isDark ? "bg-white" : "bg-black"
          } transition-all duration-100 ease-in-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
