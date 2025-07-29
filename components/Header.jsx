import { logo } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Join our Community | Lenzro Tech",
  description: "Join our community through this page.",
};


const Header = () => {
  return (
    <div className="flex bg-gray-950 text-white items-center  justify-center text-xs text-center md:text-sm w-full h-[4vh] !py-5">
      <p className='flex  items-center gap-1'>
        <Image src={logo} alt='logo' className='w-4'/>
        Join Our <Link href={'/'} target='_blank' className='underline'>Community</Link>And Be Part of our Tech Movement
      </p>
    </div>
  );
}

export default Header
