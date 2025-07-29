"use client"
import React from "react";
import Title from "./Title";
import Clients from "./Clients";

const Testimonials = () => {
  return (
    <div id="testimonials" className="flex flex-col items-center gap-[5rem] !pb-[5rem]">
      <Title />
      <Clients />
    </div>
  );
};

export default Testimonials;
