"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          // Defer the onComplete callback to avoid React setState warning
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
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <DotLottieReact
        src="https://lottie.host/ae191bb1-91c1-49ff-8ad9-b12668cd7490/PXSdoZ1S0h.lottie"
        loop
        autoplay
        className="w-80"
      />
      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-300 dark:bg-gray-700 mt-6 overflow-hidden rounded">
        <div
          className="h-full bg-black dark:bg-white transition-all duration-100 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
