import {
  CopyrightIcon,
  Instagram,
  Linkedin,
  Slack,
  Sparkles,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { logo } from "@/public/images";
import Image from "next/image";

const productLinks = [
  "What's New",
  "AI Site Builder",
  "Webflow Library",
  "Figma Library",
  "React Library",
  "Chrome Extension",
  "Libraries",
  "Pricing",
];

const powerUpsLinks = [
  "Relume Icons",
  "Color Palettes",
  "Attributes",
  "Untitled UI",
  "Learn",
  "Webflow Style Guide",
  "Client-First Docs",
];

const communityLinks = [
  "Community Roadmap",
  "Community Love",
  "Showcase",
  "Inspiration Feed",
  "Slack",
  "Request Components",
  "Provide Feedback",
  "Hire an Expert",
  "Become an Expert",
  "Become an Affiliate",
];

const companyLinks = [
  { name: "Careers", badge: "Hiring!" },
  { name: "Contact Sales" },
  { name: "Support" },
  { name: "FAQ" },
  { name: "Privacy Policy" },
  { name: "Terms & Conditions" },
  { name: "Licensing Agreement" },
  { name: "Cookie Settings" },
];

const communityAvatars = [
  "/images/client1.jpg",
  "/images/client2.jpg",
  "/images/client3.jpg",
  "/images/client4.jpg",
  "/images/client5.jpg",
  "/images/client6.jpg",
];

const socialIcons = [
  {
    icon: <FaWhatsapp className="w-4 h-4" />,
    url: "https://wa.me/254722261776?text=Hello%20I%27d%20like%20to%20know%20more%20about%20your%20services",
  },
  { icon: <Linkedin className="w-4 h-4" />, url: "#" },
  { icon: <Youtube className="w-4 h-4" />, url: "#" },
  { icon: <Instagram className="w-4 h-4" />, url: "#" },
  { icon: <FaTiktok className="w-4 h-4" />, url: "#" },
  { icon: <TwitterIcon className="w-4 h-4" />, url: "#" },
  { icon: <Slack className="w-4 h-4" />, url: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 !pt-20 !pb-8 !px-[5%] border-t border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-bold !mb-4">
              Experience the power of our <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                AI Site Builder
              </span>{" "}
              today
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white  rounded-md !py-3 !px-8 text-sm flex items-center gap-2 shadow-none">
              <Sparkles className="w-5 h-5 text-amber-400" /> Try the Site
              Builder
            </Button>
            <span className="text-gray-500 text-sm !mt-1">
              Build a website in under 5 minutes. Yes really.
            </span>
          </div>
        </div>
        <hr className="!my-10 border-gray-200 dark:border-zinc-800" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 !mb-10">
          <div>
            <h3 className="font-semibold !mb-3">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold !mb-3">Power ups</h3>
            <ul className="space-y-2">
              {powerUpsLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold !mb-3">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:underline text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold !mb-3">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:underline text-sm flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-pink-100 text-pink-600 text-xs font-semibold !px-2 !py-0.5 rounded ml-1">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
            <div className="!p-3 rounded-full bg-black dark:bg-transparent  fixed z-50">
              <Image src={logo} alt="logo" className="w-4  h-4" />
            </div>
            <h1 className="!ml-12 text-lg flex relative">
              Lenzro
              <span>
                Tech
                <CopyrightIcon className="w-2 h-2 absolute top-0 left-[100%]" />
              </span>
            </h1>
          </Link>
          <span className="text-gray-400 text-sm">
            © 2025 Lenzro. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between !mt-8 gap-6">
          <div className="flex items-center gap-1">
            {communityAvatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Community member ${idx + 1}`}
                className="w-8 h-8 rounded-full border border-gray-200 object-cover"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Join our community</span>
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
