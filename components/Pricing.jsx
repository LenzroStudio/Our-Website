import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Check, UserRound, UsersRound } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month for one person",
    features: [
      "1 project",
      "1 page",
      "Share – Read-only link",
      "Export – Figma only",
      "30 Webflow components",
      "30 React components",
      "1,000+ Figma components",
    ],
    button: { text: "Get started", color: "bg-gray-200 text-black" },
    description:
      "New to the industry and Lenzro. Usual projects are basic 1-page landing pages, requiring little to no collaboration",
    role: "New Designer or Developer",
    accent: "border-gray-200",
    icon: <UserRound />,
  },
  {
    name: "Lenzro",
    price: "$18",
    period: "/month for one person",
    features: [
      "1 project",
      "5 pages",
      "Share – Commenting",
      "Export – Figma, Webflow & React",
      "1,000+ Webflow components",
      "1,000+ React components",
      "1,000+ Figma components",
    ],
    button: { text: "Start 7-day free trial", color: "bg-black text-white" },
    description:
      "New to the industry and Lenzro. Usual projects are basic 1-page landing pages, requiring little to no collaboration",
    role: "Part-time Freelancer",
    accent: "border-pink-200",
    icon: <UserRound />,
  },
  {
    name: "Lenzro",
    price: "$40",
    period: "/month for one person",
    features: [
      "Unlimited Projects",
      "Unlimited Pages",
      "Share – Commenting",
      "Export – Figma, Webflow & React",
      "1,000+ Webflow components",
      "1,000+ React components",
      "1,000+ Figma components",
    ],
    button: { text: "Start 7-day free trial", color: "bg-black text-white" },
    description:
      "New to the industry and Lenzro. Usual projects are basic 1-page landing pages, requiring little to no collaboration",
    role: "Full-time Freelancer",
    accent: "border-pink-500",
    icon: <UserRound />,
  },
  {
    name: "Lenzro",
    price: "$36",
    period: "/month per person (Min 3 people)",
    features: [
      "3 users included",
      "Each user with Pro features",
      "Team workspace",
      "Branded sharing",
    ],
    button: { text: "Start 7-day free trial", color: "bg-black text-white" },
    description:
      "New to the industry and Lenzro. Usual projects are basic 1-page landing pages, requiring little to no collaboration",
    role: "Agency or Team",
    accent: "border-purple-300",
    icon: <UsersRound />,
  },
];

export default function Pricing() {
  return (
    <section className="w-full min-h-[70vh] !py-16 !px-2 flex flex-col items-center gap-5">
      <div>
        <h1 className="text-4xl font-bold text-center !mb-2">
          Plans that evolve with your projects.
        </h1>
        <h2 className="text-3xl font-bold text-center !mb-8">
          Try with your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            team
          </span>{" "}
          for free.
        </h2>
      </div>
      <div className="flex items-center gap-2 !mb-8">
        <span className="text-gray-500 text-sm">Yearly discount (30%)</span>
        <BadgeCheck className="w-5 h-5 text-pink-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center !px-4 gap-8 w-full max-w-6xl">
        {plans.map((plan, idx) => (
          <Card
            key={plan.name}
            className={`
              flex-1 ${
                idx === 2
                  ? "bg-white dark:bg-zinc-950"
                  : idx === 1
                  ? "bg-white dark:bg-zinc-950"
                  : idx === 3
                  ? "bg-white dark:bg-zinc-950"
                  : "bg-zinc-100 dark:bg-zinc-950"
              } shadow-none rounded-2xl border ${
              plan.accent
            }  flex flex-col items-center !px-4 md:min-w-[280px] md:max-w-[350px] min-h-[65vh]
              ${idx === 2 ? "border-[2px]" : "border-[1.5px]"},
              ${
                idx === 2
                  ? "border-[#ec4899] dark:border-pink-900"
                  : idx === 1
                  ? "border-[#ffd8ef] dark:border-gray-900"
                  : idx === 3
                  ? "border-[#c4b5fd] dark:border-gray-900"
                  : "border-[#e5e7eb] dark:border-gray-900"
              }
            `}
          >
            <CardContent className="w-full !p-0 flex flex-col gap-3">
              <p
                className={`!ml-5 border-[1px] border-t-0 border-gray-200 dark:border-gray-900 w-[150px] !pl-4 !py-2 rounded-b-md text-lg`}
              >
                {plan.name}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {idx === 2
                    ? " Pro"
                    : idx === 1
                    ? " Starter"
                    : idx === 3
                    ? " Team"
                    : ""}
                </span>
              </p>
              <div className="!px-4 flex flex-col gap-5">
                <p className="text-sm text-gray-400">{plan.description}</p>
                <p className="text-4xl">
                  {plan.price} <span className="text-sm">/month</span>
                </p>
                <Button className={'!mt-5'}>
                  {idx === 2
                    ? "Start 7 day free trial"
                    : idx === 1
                    ? "Start 7 day free trial"
                    : idx === 3
                    ? "Start 7 day free trial"
                    : "Get Started"}
                </Button>
                <ul>
                  {plan.features.map((item , index) => {
                    return <li className="text-sm flex items-center gap-2" key={index}><Check className="w-5 h-5 text-fuchsia-500"/> {item}</li>
                  })}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
