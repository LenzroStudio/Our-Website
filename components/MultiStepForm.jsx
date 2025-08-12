"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import emailjs from "emailjs-com";
import { X } from "lucide-react";
import CountrySelect from "./CountrySelect";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "UAE",
  "Germany",
  "France",
  "India",
  "Other",
];
const projectTypes = ["Website", "App", "Branding", "Ads", "SEO", "UI/UX"];
const durations = ["One-time", "Monthly", "Quarterly", "Long-term"];
const services = [
  "Web Development",
  "Mobile App",
  "Branding",
  "Digital Marketing",
  "UI/UX",
  "SEO",
  "Other",
];
const budgets = ["$200–$500", "$500–$1000", "$1000–$5000", "$5000+"];

const initialData = {
  companyName: "",
  country: null, // store country object
  email: "",
  phone: "",
  niche: "",
  projectTypes: [],
  duration: "",
  services: [],
  budget: "",
  about: "",
  goals: "",
  meeting: null,
};

const steps = [
  "Company Details",
  "Business Category",
  "Service Selection",
  "Additional Information",
  "Review & Submit",
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation logic
  const validate = () => {
    let err = {};
    if (step === 0) {
      if (!form.companyName) err.companyName = "";
      if (!form.country) err.country = "Select a country";
      if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
        err.email = "Valid email ";
      if (!form.phone || form.phone.length < 6) err.phone = "Enter valid phone";
    }
    if (step === 1) {
      if (!form.niche) err.niche = "";
      if (!form.projectTypes.length) err.projectTypes = "Select at least one";
      if (!form.duration) err.duration = "";
    }
    if (step === 2) {
      if (!form.services.length) err.services = "Select at least one";
      if (!form.budget) err.budget = "";
    }
    if (step === 3) {
      if (!form.about) err.about = "";
      if (!form.goals) err.goals = "";
      if (!form.meeting) err.meeting = "";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // Handle input changes
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Handle multi-select
  const handleMultiSelect = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Handle next/prev
  const nextStep = () => {
    if (validate()) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // EmailJS integration (replace with your own service/template IDs)
  const sendEmail = async () => {
    setSending(true);
    try {
      await emailjs.send(
        "service_xxx", // your EmailJS service ID
        "template_xxx", // your EmailJS template ID
        {
          ...form,
          meeting: form.meeting ? format(form.meeting, "PPPp") : "",
        },
        "user_xxx" // your EmailJS user ID
      );
      setSuccess(true);
    } catch (e) {
      setErrors({ submit: "Failed to send. Please try again." });
    }
    setSending(false);
  };

  // Step content
  return (
    <div className="absolute top-31 border border-gray-300 z-50 w-screen flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-zinc-900 h-[83vh] overflow-y-scroll !p-6 w-full relative">
        <button
          className="absolute !p-2 border-2 rounded-full top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
          onClick={""}
        >
          <X className="w-4 h-4" />
        </button>
        <div className="!mb-6 flex items-center">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center w-full">
              <div
                className={`w-9 h-8 rounded-full  flex items-center justify-center font-bold text-xs ${
                  step === i
                    ? "bg-black text-white"
                    : "bg-gray-200 dark:bg-zinc-800 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-[100%] h-[0.5px] bg-gray-400" />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold !mb-[2rem]">{steps[step]}</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (step === steps.length - 1) sendEmail();
            else nextStep();
          }}
        >
          {step === 0 && (
            <div className="flex flex-col gap-[1rem] w-[40%]">
              <label className="block font-medium">Company Name</label>
              <Input
                value={form.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Enter company name"
                className={"border-2"}
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs">{errors.companyName}</p>
              )}

              <label className="block font-medium !mt-2">Country</label>
              <CountrySelect
                value={form.country}
                onChange={(country) => handleChange("country", country)}
              />
              {errors.country && (
                <p className="text-red-500 text-xs">{errors.country}</p>
              )}

              <label className="block font-medium !mt-2">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter email"
                className={"border-2"}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}

              <label className="block font-medium !mt-2">Phone Number</label>
              <div className="flex items-center">
                <span className="flex items-center justify-center h-[4.9vh] w-[4vw] bg-gray-100 rounded-l border border-r-0">
                  {form.country ? `+${form.country.phone}` : ""}
                </span>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    // Only allow numbers, max length based on country
                    const val = e.target.value.replace(/\D/g, "");
                    // Example: limit to 10 digits for most countries, adjust as needed
                    const maxLen = form.country?.phone?.length > 4 ? 12 : 10;
                    handleChange("phone", val.slice(0, maxLen));
                  }}
                  placeholder="Enter phone number"
                  className={"border-2 border-tl-0 border-bl-0"}
                  disabled={!form.country}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col gap-[1rem] w-[40%]">
              <label className="block font-medium">Company Niche</label>
              <Input
                value={form.niche}
                onChange={(e) => handleChange("niche", e.target.value)}
                placeholder="e.g. Tech, Fashion, Food"
                className={"border-2"}
              />
              {errors.niche && (
                <p className="text-red-500 text-xs">{errors.niche}</p>
              )}

              <label className="block font-medium !mt-2">
                Type of Project(s)
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <Checkbox
                    key={type}
                    checked={form.projectTypes.includes(type)}
                    onCheckedChange={() =>
                      handleMultiSelect("projectTypes", type)
                    }
                    className="!mr-2"
                  >
                    {type}
                  </Checkbox>
                ))}
              </div>
              {errors.projectTypes && (
                <p className="text-red-500 text-xs">{errors.projectTypes}</p>
              )}

              <label className="block font-medium !mt-2">
                How long do you want to work with us?
              </label>
              <Select
                value={form.duration}
                onValueChange={(v) => handleChange("duration", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.duration && (
                <p className="text-red-500 text-xs">{errors.duration}</p>
              )}
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-[1rem] w-[40%]">
              <label className="block font-medium"> Services</label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Checkbox
                    key={service}
                    checked={form.services.includes(service)}
                    onCheckedChange={() =>
                      handleMultiSelect("services", service)
                    }
                    className="mr-2"
                  >
                    {service}
                  </Checkbox>
                ))}
              </div>
              {errors.services && (
                <p className="text-red-500 text-xs">{errors.services}</p>
              )}

              <label className="block font-medium !mt-2">Budget Range</label>
              <Select
                value={form.budget}
                onValueChange={(v) => handleChange("budget", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgets.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && (
                <p className="text-red-500 text-xs">{errors.budget}</p>
              )}
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-[1rem] w-[40%]">
              <label className="block font-medium">
                Tell us more about your company
              </label>
              <Textarea
                value={form.about}
                onChange={(e) => handleChange("about", e.target.value)}
                placeholder="Describe your company"
              />
              {errors.about && (
                <p className="text-red-500 text-xs">{errors.about}</p>
              )}

              <label className="block font-medium mt-2">
                Any specific goals or expectations?
              </label>
              <Textarea
                value={form.goals}
                onChange={(e) => handleChange("goals", e.target.value)}
                placeholder="Your goals or expectations"
              />
              {errors.goals && (
                <p className="text-red-500 text-xs">{errors.goals}</p>
              )}

              <label className="block font-medium mt-2">
                Schedule a meeting
              </label>
              <Calendar
                selected={form.meeting}
                onSelect={(date) => handleChange("meeting", date)}
                mode="single"
                className="rounded border"
              />
              {errors.meeting && (
                <p className="text-red-500 text-xs">{errors.meeting}</p>
              )}
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col gap-[1rem] w-[40%]">
              <div className="space-y-2">
                <h3 className="font-semibold">Review your details:</h3>
                <div className="text-sm !my-2">
                  <strong className="!p-2 text-md underline font-light">
                    Company Name:
                  </strong>{" "}
                  {form.companyName}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Country:
                  </strong>{" "}
                  {form.country ? form.country.label : ""}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Email:
                  </strong>{" "}
                  {form.email}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Phone:
                  </strong>{" "}
                  {form.phone}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Niche:
                  </strong>{" "}
                  {form.niche}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Project Types:
                  </strong>{" "}
                  {form.projectTypes.join(", ")}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Duration:
                  </strong>{" "}
                  {form.duration}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Services:
                  </strong>{" "}
                  {form.services.join(", ")}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Budget:
                  </strong>{" "}
                  {form.budget}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    About:
                  </strong>{" "}
                  {form.about}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Goals:
                  </strong>{" "}
                  {form.goals}
                  <br />
                  <strong className="!p-2 text-md underline font-light">
                    Meeting:
                  </strong>{" "}
                  {form.meeting ? format(form.meeting, "PPPp") : ""}
                </div>
              </div>
              {errors.submit && (
                <p className="text-red-500 text-xs">{errors.submit}</p>
              )}
              {success && (
                <div className="text-green-600 font-semibold mt-2">
                  Inquiry sent! We'll be in touch soon.
                </div>
              )}
            </div>
          )}
          <div className="flex justify-between !mt-6 w-full">
            {step > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className={"!py-2 !px-8 bg-gray-200"}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              disabled={sending}
              className={"!py-2 !px-8 flex w-fit"}
            >
              {step === steps.length - 1
                ? sending
                  ? "Sending..."
                  : "Send Inquiry"
                : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
