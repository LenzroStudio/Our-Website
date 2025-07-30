"use client";

import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { logo } from "@/public/images";
import Image from "next/image";

const CustomerService = ({openMenu , setmenu}) => {
  const router = useRouter();

  /** Whatever you want to do on click */
  const handleClick = () => {
    openMenu === false ? setmenu(true) : setmenu(false)
  };
  return (
    <div>
      <button
        onClick={handleClick}
        aria-label="Contact us" /* screen‑reader label  */
        className="fixed bottom-8 right-8 rounded-full bg-black dark:border dark:border-white !p-5 active:scale-95 z-40 hover:scale-110 transition-all cursor-pointer">
          <Image src={logo} alt="Logo" className="w-4 h-4 md:w-5 md:h-5"/>
      </button>

      {/* Rest of your page */}
    </div>
  );
};

export default CustomerService;
