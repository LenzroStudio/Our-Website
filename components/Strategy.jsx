import { Strategies } from '@/assets/assets';
import { Arrow } from '@radix-ui/react-dropdown-menu';
import { ArrowUpRightIcon } from 'lucide-react';
import React from 'react'

const Strategy = () => {
  return (
    <div className="min-h-[100vh] !px-6">
      <div className="flex relative flex-col items-center gap-[6rem]">
        <div className="flex items-center  justify-center text-center flex-col   codepen-button2 ">
          <span className="text-xs rounded-none md:text-lg bg-white text-black dark:bg-black dark:text-white  ">
            Hired by Leading Companies, Brands and Influencers around the World
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] md:gap-[5rem] items-center justify-center">
          {Strategies.map((item, index) => (
            <div
              key={index}
              className={`border-2 !p-3 rounded-md  flex flex-col h-[26vh] md:hover:scale-[102%] transition-all duration-500  gap-2 cursor-pointer`}
            >
              <div className={`!p-4 border ${item.color} w-fit rounded-full`}>
                {item.img}
              </div>

              <div className="flex flex-col gap-3 !p-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold">{item.type}</h1>
                  <ArrowUpRightIcon className="!w-5 h-5 font-bold" />
                </div>
                <p className="text-xs text-gray-500">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Strategy
