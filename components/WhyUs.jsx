import { WHy } from '@/public/images'
import { Check, CheckCircle, CheckSquare, CheckSquare2 } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className="flex flex-col gap-4  !py-[5%] !px-[6%] two">
      <h1 className="text-2xl  font-bold !my-5">Why Choose Us:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div className='flex flex-col gap-5'>
          <p className='text-lg'>Show off your value and global approach:</p>
          <ol className='!p-8 flex flex-col gap-5'>
            <li className='flex items-center gap-3 '><CheckSquare2 className='text-emerald-500'/> Remote-first, work with anyone, anywhere</li>
            <li className='flex items-center gap-3 '><CheckSquare2 className='text-emerald-500'/> Clear, affordable pricing with no surprises</li>
            <li className='flex items-center gap-3 '><CheckSquare2 className='text-emerald-500'/> Fast turnaround & post-launch support</li>
            <li className='flex items-center gap-3 '><CheckSquare2 className='text-emerald-500'/> All-in-one digital partner: tech + design + marketing</li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src={WHy} alt="Why us" className="w-[500px] rounded-xl " />
        </div>
      </div>
    </div>
  );
}

export default WhyUs
