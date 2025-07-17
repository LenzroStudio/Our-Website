import { PinIcon } from 'lucide-react';
import React from 'react'
import { FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';

const OurInfo = ({openMenu}) => {
  return (
    <div className={`${openMenu === false ? "hidden" : ""} fixed bottom-30 right-20 border  min-h-[50vh] w-[300px] !p-4 rounded-xl   z-50 bg-emerald-50 flex  flex-col gap-[1rem] text-white cursor-pointer`}>
      <p className="flex items-center gap-3 !p-5 text-sm bg-emerald-600 text-white rounded-full h-[5vh]">
        <FaWhatsapp className="w-6 h-6" />
        WhatsApp Chat Instantly
      </p>
      <p className="text-sm text-gray-500">
        Email:{" "}
        <a
          href="mailto:team@lenzro.com"
          className="text-xs underline text-blue-700"
        >
          team@lenzro.com
        </a>
      </p>
      <p className="text-sm text-gray-500">
        Phone:{" "}
        <span className="text-xs text-blue-500 underline">+254700809559</span>
      </p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30705.633617760668!2d36.8380108!3d-1.2792793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170b1905d029%3A0x34d92f603e5aff18!2sBusiness%20Bay%20Square%20(BBS%20Mall)!5e1!3m2!1sen!2ske!4v1752758962740!5m2!1sen!2ske"
          width="600"
          height="450"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className='w-full h-[30vh]'
        ></iframe>
      </div>
    </div>
  );
}

export default OurInfo
