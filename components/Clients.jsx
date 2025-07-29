"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/assets/assets";

const Clients = () => {
  const date = new Date();
  const today = date.getHours();
  const [myClients, setClients] = useState([]);

  const applyFilter = () => {
    today < 12
      ? setClients(testimonials.slice(0, 3))
      : setClients(testimonials.slice(3, 6));
  };

  useEffect(() => {
    applyFilter();
  }, [today, testimonials]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-9xl max-h-1.5 gap-8 md:!px-[7%]">
      {myClients.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Animate every time it's in view
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="!p-8 border rounded-lg flex flex-col gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-sm">{item.experience}</p>
            <div className="flex items-center gap-3">
              <Image
                className="w-12 rounded-full"
                src={item.img}
                alt="client img"
              />
              <p>{item.name}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Clients;
