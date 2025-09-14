import { Button } from "@/components/ui/button";
export default function LeadMagnet() {
  return (
    <section className="w-full max-w-5xl mx-auto !py-12 text-center">
      <h2 className="text-2xl font-bold !mb-4">
        Estimate Your Growth with Lenzro
      </h2>
      <p className="text-gray-500 !mb-6">
        Try our free ROI calculator and see your potential results.
      </p>
      <Button className="text-lg !px-8 !py-4" asChild>
        <a href="/roi-calculator">Try ROI Calculator</a>
      </Button>
    </section>
  );
}
