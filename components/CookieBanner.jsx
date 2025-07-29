// components/CookieBanner.jsx
"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const metadata = {
  title: "Cookie Banner | Lenzro Tech",
  description: "Accepting Cookie makes your website Better.",
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const accepted = Cookies.get("cookiesAccepted");
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotate: -10,
            transition: { duration: 0.5, ease: "backIn" },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-10 left-6 max-w-md z-[9999] bg-white dark:bg-black dark:text-white
            rounded-2xl !p-8 flex flex-col items-center justify-between gap-8 shadow shadow-gray-300 dark:shadow-gray-950"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-2 text-gray-500 !p-2 bg-gray-200 rounded-full hover:text-black dark:hover:text-white transition"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>

          <div>
            <span className="two">
              By clicking "Accept Cookies", you agree to the storing of cookies
              on your device to enhance navigation, analyze site usage, and
              assist in our marketing efforts.
            </span>
          </div>

          <div className="flex gap-2 two font-semibold">
            <Button
              variant="outline"
              size="sm"
              className="!px-10 !py-5 cursor-pointer"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              size="sm"
              className="!px-10 !py-5 cursor-pointer"
              onClick={handleAccept}
            >
              Accept Cookies
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
