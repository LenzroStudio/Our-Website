import React from "react";
import {
  FaBoxOpen,
  FaRocket,
  FaGlobe,
  FaEnvelope,
  FaMobileAlt,
  FaImages,
  FaPaintBrush,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

const packages = [
  {
    icon: <FaRocket className="w-7 h-7" />,
    title: "Starter Launch Pack",
    price: "$200",
    features: [
      { icon: <FaGlobe />, text: ".com or .co domain + hosting (1 year)" },
      { icon: <FaBoxOpen />, text: "Up to 5-page website" },
      { icon: <FaEnvelope />, text: "Professional business email setup" },
      { icon: <FaMobileAlt />, text: "Mobile & tablet responsive design" },
    ],
  },
  {
    icon: <FaBoxOpen className="w-7 h-7" />,
    title: "Business Growth Pack",
    price: "$350",
    features: [
      { icon: <FaGlobe />, text: "Everything in Starter" },
      { icon: <FaFacebook />, text: "Social media setup + 10 custom graphics" },
      { icon: <FaPaintBrush />, text: "Logo + business card design" },
      {
        icon: <FaFacebook />,
        text: "Facebook Ads setup (excluding ad budget)",
      },
      { icon: <FaGoogle />, text: "Google Business profile setup" },
    ],
  },
];

const Packages = () => {
  return (
    <div className="flex flex-col items-center text-center gap-8 min-h-[100vh] !py-12 !px-6 ">
      <h1 className="text-3xl font-bold !mb-10 flex items-center gap-4">
        READY-TO-GO PACKAGES
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-3xl min-h-[70vh] ">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="flex flex-col items-center  rounded-xl   !p-8 gap-4  shadow  shadow-gray-400  cursor-pointer dark:shadow-gray-700 transition-all duration-500"
          >
            <span className="text-4xl !mb-2 border border-black dark:border-white rounded-full w-[70px] h-[70px] flex items-center justify-center">
              {pkg.icon}
            </span>
            <h2 className="text-xl font-semibold">{pkg.title}</h2>
            <div className="text-2xl text-emerald-600 !mb-2">{pkg.price}</div>
            <ul className="flex flex-col gap-6 items-start w-full max-w-xs mx-auto">
              {pkg.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-200 text-base"
                >
                  <span className="text-emerald-500">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
