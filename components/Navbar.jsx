import React, { useState } from "react";
import { ModeToggle } from "./Toogle";
import Link from "next/link";
import { navLinks } from "@/assets/assets";
import { Button } from "./ui/button";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { logo } from "@/public/images";
import { Copy, CopyrightIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar desktop */}
      <div className="flex flex-col bg-glass fixed w-screen z-40">
        <div className="hidden md:grid grid-cols-2 two items-center justify-between !py-[1.5rem] glass !px-[3%] border-b">
          <Link
            href={"/"}
            className="cursor-pointer font-bold flex items-center justify-start"
          >
            <Image src={logo} alt="logo" className="w-32 h-32 absolute" />
            <h1 className="!ml-16 flex flex-col three leading-5 relative ">
              LENZRO
              <span className="text-emerald-500">
                TEAM{" "}
                <CopyrightIcon className="w-2 h-2 absolute top-0 left-[108%]" />
              </span>
            </h1>
          </Link>
          <div className="flex absolute top-[99%] right-0 bg-glass justify-end   w-full !px-[2rem] !py-3  gap-5">
            <FaTwitter className="w-4 h-4" />
            <FaInstagram className="w-4 h-4" />
            <FaWhatsapp className="w-4 h-4" />
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="flex items-center gap-5">
              {navLinks.map((item, index) => {
                return (
                  <Link href={item.url} key={index} className="text-sm group">
                    <p className="group-hover:text-emerald-500">{item.link}</p>
                    <hr className="group-hover:h-1 group-hover:bg-emerald-500 group-hover:opacity-100 bg-transparent opacity-0 outline-none transition-all duration-300 rounded-full" />
                  </Link>
                );
              })}
            </div>
            <Button
              className={
                "!py-2 !px-4 cursor-pointer hover:bg-emerald-800 hover:text-white"
              }
            >
              Contact us
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="w-1  rounded-full bg-emerald-500"></div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex items-center justify-between !py-[1rem] bg-glass !px-[5%] border-b fixed w-screen md:hidden z-50">
        <Link
          href={"/"}
          className="cursor-pointer font-bold flex items-center justify-start"
          onClick={() => setMenuOpen(false)}
        >
          <Image src={logo} alt="logo" className="w-25 h-25 absolute" />
          <h1 className="!ml-13 flex flex-col three text-sm leading-5 relative ">
            LENZRO
            <span className="text-emerald-500">
              TEAM{" "}
              <CopyrightIcon className="w-2 h-2 absolute top-0 left-[108%]" />
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          <Link href={"/Contact-us"}>
            <Button
              className={
                "!py-2 !px-3 cursor-pointer text-xs rounded hover:bg-emerald-500"
              }
            >
              Contact us
            </Button>
          </Link>
          {/* Hamburger/Close Button */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="toggle-module__HksKKG__mobileMenuToggle relative z-50 flex items-center justify-center w-10 h-10 border rounded-full"
            data-expanded={menuOpen}
            type="button"
            style={{ opacity: 1 }}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {/* Top bar */}
            <div
              className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-emerald-500 rounded transition-all duration-300
              ${
                menuOpen
                  ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
                  : "-translate-x-1/2 -translate-y-1.5"
              }`}
              style={{}}
            ></div>
            {/* Bottom bar */}
            <div
              className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-emerald-500 rounded transition-all duration-300
              ${
                menuOpen
                  ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
                  : "-translate-x-1/2 translate-y-1.5"
              }`}
              style={{}}
            ></div>
          </button>
        </div>
      </div>
      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-screen h-screen  bg-white dark:bg-zinc-950 z-40 shadow-lg flex flex-col !p-6 gap-6"
          >
            <div className="flex flex-col gap-4 !mt-20 !ml-3">
              {navLinks.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  className="font-light "
                  onClick={() => setMenuOpen(false)}
                >
                  {item.link}
                </Link>
              ))}
              <ModeToggle />
              <div className="flex gap-4 !mt-6">
                <FaTwitter className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaWhatsapp className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay when menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
