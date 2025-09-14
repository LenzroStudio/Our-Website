import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="w-full max-w-7xl mx-auto !py-12 flex justify-center">
      <div
        className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[340px] bg-black"
        style={{
          backgroundImage:
            "url('https://assets.aceternity.com/pro/hero-sections.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full !px-6 !py-12">
          <div className="text-white text-right w-full text-sm !mb-2">
            (Book Your Free Consultation Now!)
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white !mb-4 text-center leading-tight">
            Exclusive Winter Deal Days Get a Free Consultation!
          </h2>
          <p className="text-white text-center text-base md:text-lg !mb-8 max-w-2xl mx-auto">
            Take advantage of this limited-time offer to discuss your design
            needs with an experienced UI/UX and product designer.
          </p>
          <a
            href="/book-consultation"
            className="text-white text-lg font-semibold underline flex items-center gap-2"
          >
            Let’s talk <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
