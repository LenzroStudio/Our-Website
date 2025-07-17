import React from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaServer,
  FaEnvelope,
  FaPaintBrush,
  FaShareAlt,
  FaCommentDots,
  FaBrain,
  FaCashRegister,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className=" w-5 h-5" />,
    title: "Website Development",
    desc: "Business sites, e-commerce, portfolios (HTML, WordPress, React)",
  },
  {
    icon: <FaMobileAlt className=" w-5 h-5" />,
    title: "Mobile App Development",
    desc: "Android/iOS apps using Java, Kotlin, or React Native",
  },
  {
    icon: <FaServer className=" w-5 h-5" />,
    title: "Domain & Hosting",
    desc: "Global domain registration + secure hosting",
  },
  {
    icon: <FaEnvelope className=" w-5 h-5" />,
    title: "Business Email Setup",
    desc: "info@yourcompany.com via Zoho, Titan, or Google Workspace",
  },
  {
    icon: <FaPaintBrush className=" w-5 h-5" />,
    title: "Graphic & Brand Design",
    desc: "Logos, social posts, flyers, branding kits",
  },
  {
    icon: <FaShareAlt className=" w-5 h-5" />,
    title: "Social Media Management",
    desc: "Strategy, posting, growth & advertising",
  },
  {
    icon: <FaCommentDots className=" w-5 h-5" />,
    title: "Bulk SMS & WhatsApp Blasts",
    desc: "Messaging tools using Africa's Talking, Twilio, or WhatsApp API",
  },
  {
    icon: <FaBrain className=" w-5 h-5" />,
    title: "Tech Training & Workshops",
    desc: "Digital skills classes for beginners & businesses",
  },
  {
    icon: <FaCashRegister className=" w-5 h-5" />,
    title: "POS & Inventory Systems",
    desc: "Full POS solutions for retail, salons, cafés, and more",
  },
];

const OurServices = () => {
  return (
    <div className="flex flex-col items-center   gap-8 min-h-[100vh] !py-12">
      <h1 className="text-3xl font-bold three !mb-4">OUR SERVICES</h1>
      <div className="grid !px-6 grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 w-full max-w-7xl">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="flex flex-col  rounded-xl !p-6 gap-3 shadow-sm shadow-gray-300 border dark:border-gray-800 dark:shadow-gray-900  hover:shadow-gray-400  cursor-pointer transition-all duration-500"
          >
            <span className="md:text-4xl !mb-2 border  w-fit !p-3 rounded-full">{service.icon}</span>
            <h2 className="md:text-xl three font-semibold">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-700 text-xs md:text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
