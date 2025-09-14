import { testimonials } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { SlackIcon } from "lucide-react";
import Image from "next/image";

const avatars = [
  "/images/client1.jpg",
  "/images/client2.jpg",
  "/images/client3.jpg",
  "/images/client4.jpg",
  "/images/client5.jpg",
  "/images/client6.jpg",
];

export default function ClientLogosTestimonials() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col gap-[2rem] items-center justify-center !px-[2rem] !py-16 md:!px-[4rem]">
      {/* Avatars row */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-8 h-8 rounded-full"
              style={{ marginLeft: i === 0 ? 0 : -10 }}
            />
          ))}
        </div>
      </div>
      <div className="text-gray-500 text-center  font-medium">
        700k+ Designers &amp; developers trust Lenzro
      </div>
      {/* Subheadline */}
      {/* Headline */}
      <h2 className="text-xl md:text-5xl font-bold text-center mb-6 leading-tight">
        Helping teams streamline their workflow and deliver faster
      </h2>
      {/* Action buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
        <Button
          variant="outline"
          className="text-sm !px-6 !py-2 rounded-md cursor-pointer"
        >
          <SlackIcon /> Join our community
        </Button>
        <Button
          variant="outline"
          className="text-sm  !px-6 !py-2 rounded-md cursor-pointer"
        >
          Read more reviews
        </Button>
      </div>
      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {testimonials.slice(0, 8).map((t, i) => (
          <div
            key={t.name + i}
            className="rounded-2xl border border-gray-200 dark:border-gray-900 !p-6 flex flex-col justify-between min-h-[220px]"
          >
            <p className="text-gray-800 dark:text-gray-400 text-sm !mb-4">{t.experience}</p>
            <div className="flex items-center gap-5 mt-auto">
              <Image
                src={t.img}
                alt={t.name}
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <div className="text-sm">{t.name}</div>
                <div className="text-xs text-gray-500">Designer</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
