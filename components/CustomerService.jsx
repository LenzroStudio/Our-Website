"use client";

import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const CustomerService = ({openMenu , setmenu}) => {
  const router = useRouter();

  /** Whatever you want to do on click */
  const handleClick = () => {
    openMenu === false ? setmenu(true) : setmenu(false)
  };
  return (
    <div>
      {/* Floating Lottie button */}
      <button
        onClick={handleClick}
        aria-label="Contact us" /* screen‑reader label  */
        className="fixed bottom-8 right-8 rounded-full bg-emerald-500 p-2 active:scale-95 z-40 hover:scale-110 transition-all cursor-pointer"
      >
        <DotLottieReact
          src="https://lottie.host/a09087c0-0b58-4209-885b-235b1e755cb1/Hj3mrWnnV8.lottie"
          loop
          autoplay
          style={{ width: 50, height: 50 }}
        />
      </button>

      {/* Rest of your page */}
    </div>
  );
};

export default CustomerService;
