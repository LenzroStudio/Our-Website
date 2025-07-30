"use client";

import React, { useState } from "react";
import { ModeToggle } from "./Toogle";
import Link from "next/link";
import { NavIcons, navLinks } from "@/assets/assets";
import { Button } from "./ui/button";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { logo } from "@/public/images";
import {
  CopyrightIcon,
  ChevronDown,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Navbar | Lenzro Tech",
  description: "Navigate your Way through the Website.",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [submenu, setSubmenu] = useState(null); // Add this state
  const pathname = usePathname();

  const getIconByName = (name) => {
    const match = NavIcons.find((item) => item.name === name);
    return match?.icon || <></>;
  };

  // Animation variants
  const listVariants = {
    visible: { transition: { staggerChildren: 0.12 } },
    hidden: {},
  };
  const itemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="">
      {/* Navbar desktop */}
      <div className="flex flex-col  z-40">
        <div className="hidden md:grid grid-cols-3 two items-center justify-between !py-[1.5rem] glass !px-[2%]">
          <Link
            href={"/"}
            className="font-bold flex items-center justify-start"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image src={logo} alt="logo" className="w-6 fixed h-6" />
            <h1 className="!ml-8 text-lg flex relative">
              Lenzro
              <span>
                Tech
                <CopyrightIcon className="w-2 h-2 absolute top-0 left-[100%]" />
              </span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {navLinks.map((item, index) => (
              <div
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={index}
              >
                <motion.div className="!px-3 !py-2 rounded-md min-w-[8vw] text-sm cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all duration-500 flex items-center justify-center border-2 border-transparent group-hover:border-transparent relative">
                  <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none z-0"
                    style={{
                      border: "2px solid transparent",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      animation: "linear 2s infinite",
                    }}
                  />
                  <span className="relative z-10 transition-colors duration-300 flex items-center gap-2">
                    {item.link}
                    {item.drop && item.drop.length > 0 && (
                      <motion.span
                        initial={false}
                        animate={{
                          rotate: hoveredIndex === index ? 180 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="ml-1"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                  </span>
                </motion.div>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.drop?.length > 0 && hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 top-full -translate-x-1/2 !mt-2 min-w-[300px] bg-white dark:bg-black rounded-xl shadow-xl !py-2 !px-2 z-20"
                    >
                      {item.drop.map((dropItem) =>
                        dropItem.url ? (
                          <Link
                            href={dropItem.url}
                            key={dropItem.link}
                            className="!px-4 !py-3 flex items-center gap-3 text-black dark:text-gray-200 text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl transition"
                          >
                            <div className="border-1 !p-3 border-gray-300 dark:border-white rounded-full">
                              {getIconByName(dropItem.link)}
                            </div>
                            {dropItem.link}
                          </Link>
                        ) : null
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center w-[95%] justify-end">
            <ModeToggle />
            <Button className="!py-2 !px-4 cursor-pointer fixed hover:bg-yellow-300 hover:text-black">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="w-1 rounded-full bg-emerald-500"></div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between !py-[1rem] bg-glass !px-[5%] border-b  md:hidden z-50">
        <Link
          href={"/"}
          className="cursor-pointer font-bold two flex items-center justify-start"
        >
          <Image src={logo} alt="logo" className="w-5 fixed h-8" />
          <h1 className="!ml-8 text-md flex relative">
            Lenzro
            <span className="text-emerald-500">
              Tech
              <CopyrightIcon className="w-2 h-2 absolute top-0 left-[100%]" />
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="toggle-module__HksKKG__mobileMenuToggle relative z-50 flex items-center justify-center w-10 h-10 border rounded-full"
            data-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div
              className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-black dark:bg-white rounded transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
                  : "-translate-x-1/2 -translate-y-1.5"
              }`}
            />
            <div
              className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-black dark:bg-white rounded transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
                  : "-translate-x-1/2 translate-y-1.5"
              }`}
            />
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
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed two right-0 w-screen h-screen bg-white dark:bg-black z-40 shadow-lg flex flex-col !p-6 gap-6"
          >
            <div className="flex flex-col gap-4 !mt-20 !ml-3">
              {/* If submenu is open, show dropdown content */}
              <AnimatePresence mode="wait">
                {submenu ? (
                  <motion.ul
                    key="submenu"
                    className="flex flex-col gap-4 text-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                  >
                    <motion.li
                      variants={itemVariants}
                      className="flex items-center mb-4"
                    >
                      <button
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-zinc-800"
                        onClick={() => setSubmenu(null)}
                      >
                        <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                      </button>
                    </motion.li>
                    {submenu.drop.map((dropItem) =>
                      dropItem.url ? (
                        <motion.li variants={itemVariants} key={dropItem.link}>
                          <Link
                            href={dropItem.url}
                            className="font-light two flex items-center gap-3"
                            onClick={() => {
                              setMenuOpen(false);
                              setSubmenu(null);
                            }}
                          >
                            <span className="border-1 !p-2 border-gray-300 dark:border-white rounded-full">
                              {getIconByName(dropItem.link)}
                            </span>
                            {dropItem.link}
                          </Link>
                        </motion.li>
                      ) : (
                        <motion.li
                          variants={itemVariants}
                          key={dropItem.link}
                          className="font-light text-gray-400 cursor-default flex items-center gap-3"
                        >
                          <span className="border-1 p-2 border-gray-300 dark:border-white rounded-full">
                            {getIconByName(dropItem.link)}
                          </span>
                          {dropItem.link}
                        </motion.li>
                      )
                    )}
                  </motion.ul>
                ) : (
                  <motion.ul
                    key="mainmenu"
                    className="flex flex-col gap-4 text-lg"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                  >
                    {navLinks.map((item, index) =>
                      item.url ? (
                        <motion.li variants={itemVariants} key={index}>
                          <Link
                            href={item.url}
                            className="font-light two"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.link}
                          </Link>
                        </motion.li>
                      ) : item.drop && item.drop.length > 0 ? (
                        <motion.li variants={itemVariants} key={index}>
                          <button
                            className="font-light two text-left flex items-center gap-2"
                            onClick={() => setSubmenu(item)}
                          >
                            {item.link}
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </motion.li>
                      ) : (
                        <motion.li
                          variants={itemVariants}
                          key={index}
                          className="font-light text-gray-400 cursor-default"
                        >
                          {item.link}
                        </motion.li>
                      )
                    )}
                    <motion.li variants={itemVariants}>
                      <ModeToggle onClick={() => setMenuOpen(false)} />
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <div className="flex gap-4 !mt-6">
                        <FaTwitter className="w-5 h-5" />
                        <FaInstagram className="w-5 h-5" />
                        <FaWhatsapp className="w-5 h-5" />
                      </div>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
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
