"use client"
import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl md:text-6xl lg:text-9xl text-gray-300">
        TESTIMONIAL
      </h1>
      <h5 className=" w-[100%] text-sm flex items-center justify-center ">
        What our Client Say
      </h5>
      <p className="!mt-8 w-[75%] text-center text-zinc-500">
        Hear What Our Happy Clients Have to Say About Their Unforgettable
        Experiences and Seamless Journey With Us.
      </p>
    </div>
  );
};

export default Title;
