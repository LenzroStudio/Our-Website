import { projects } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="flex flex-col items-center  gap-8 min-h-[100vh] !py-12">
      <h1 className="text-3xl font-bold three !mb-4">OUR WORK</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] !px-[3rem]">
        {projects.map((item, index) => {
          return (
            <div className="border-2 rounded-2xl" key={index}>
              {item.isActive ? (
                <div className="!p-4 flex flex-col gap-4  rounded-2xl">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-[400px] rounded-2xl"
                  />
                  <h1 className="text-emerald-500">{item.name}</h1>
                  <p className="text-xs text-gray-600">{item.des}</p>
                </div>
              ) : (
                <div className="!p-4 flex flex-col gap-4">
                  <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-950 dark:text-white rounded-2xl flex items-center justify-center">
                    COMING SOON
                  </div>
                  <h1 className="text-red-500">{item.name}</h1>
                  <p className="text-xs text-gray-600">{item.des}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Link href={'/Projects'}>
        <Button className="!mt-10 w-[300px] h-[6vh] rounded-full hover:bg-emerald-700 hover:text-white duration-500 transition-all cursor-pointer">
          Find More
        </Button>
      </Link>
    </div>
  );
}

export default Projects
