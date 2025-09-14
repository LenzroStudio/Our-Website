"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Building2, BarChart2, FileText, CheckCircle2 } from "lucide-react";
import {
  companyNiches,
  meetingTimes,
  NavIcons,
  countries,
} from "@/assets/assets";
import { toast } from "sonner";
import Link from "next/link";

const budgetRanges = ["$200–$500", "$500–$1000", "$1000–$5000", "$5000+"];
const workPeriods = ["1 month", "3 months", "6 months", "Ongoing"];
const projectTypes = ["Single Project", "Multiple Projects"];

const stepMeta = [
  { icon: <Building2 className="w-6 h-6" />, label: "Company Info" },
  { icon: <BarChart2 className="w-6 h-6" />, label: "Profile" },
  { icon: <FileText className="w-6 h-6" />, label: "Details" },
  { icon: <CheckCircle2 className="w-6 h-6" />, label: "Review" },
];

const steps = [
  "Welcome",
  "Company Info",
  "Company Profile",
  "Project Details",
  "Review & Submit",
  "Confirmation",
];

function CountrySelect({ value, onChange }) {
  return (
    <Select
      value={value ? value.code : ""}
      onValueChange={(code) => {
        const selected = countries.find((c) => c.code === code);
        onChange(selected || null);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Choose a country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <span className="flex items-center gap-2">
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                alt=""
                className="inline-block"
              />
              {country.label} ({country.code}) +{country.phone}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default function SurveyForm({ onClose }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    companyName: "",
    country: null,
    email: "",
    phone: "",
    niche: "",
    services: [],
    budget: "",
    projectType: "",
    workPeriod: "",
    notes: "",
    confirm: false,
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const progress = Math.round((step / (steps.length - 1)) * 100);

  // Validation logic
  const validate = () => {
    let err = {};
    if (step === 1) {
      if (!form.companyName) err.companyName = "Company name required";
      if (!form.country) err.country = "Select a country";
      if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
        err.email = "Valid email required";
      if (!form.phone || form.phone.length < 6) err.phone = "Enter valid phone";
    }
    if (step === 2) {
      if (!form.niche) err.niche = "Select a niche";
      if (!form.services.length) err.services = "Select at least one service";
      if (!form.budget) err.budget = "Select budget";
    }
    if (step === 3) {
      if (!form.projectType) err.projectType = "Select project type";
      if (!form.workPeriod) err.workPeriod = "Select work period";
      if (!form.notes) err.notes = "Add additional information";
    }
    if (step === 4) {
      if (!form.confirm) err.confirm = "Please confirm your information";
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

  // Navigation
  const nextStep = () => {
    if (validate()) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  // Submit to Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const formData = new FormData();
    formData.append("access_key", "508d811d-c126-44ce-9814-b04236ddd63b");
    formData.append("Company Name", form.companyName);
    formData.append("Country", form.country ? form.country.label : "");
    formData.append("Email", form.email);
    formData.append("Phone", form.phone);
    formData.append("Niche", form.niche);
    formData.append("Services", form.services.join(", "));
    formData.append("Budget", form.budget);
    formData.append("Project Type", form.projectType);
    formData.append("Work Period", form.workPeriod);
    formData.append("Notes", form.notes);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setSending(false);

    if (data.success) {
      toast.success("Inquiry sent! We'll be in touch soon.");
      setStep(5);
    } else {
      toast.error(data.message || "Submission failed.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-black/40 !px-0 !py-0">
      <div className="relative w-full mx-auto bg-white dark:bg-zinc-900 !p-0 flex flex-col justify-center items-center min-h-[83vh]">
        {/* Progress Bar */}
        <div className="w-full !px-6 !pt-6">
          <div className="flex items-center justify-between !mb-4">
            <span className="font-bold text-lg">{steps[step]}</span>
            <span className="text-xs text-gray-500">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        {/* Stepper Icons */}
        {step > 0 && step < 5 && (
          <div className="flex items-center justify-center gap-6 !py-6 w-full">
            {stepMeta.map((meta, i) => (
              <div key={meta.label} className="flex flex-col items-center">
                <div
                  className={`rounded-full !p-3 transition-all duration-300 ${
                    step === i + 1
                      ? "bg-black text-white"
                      : "bg-gray-200 dark:bg-zinc-800 text-gray-500"
                  }`}
                >
                  {meta.icon}
                </div>
                <span className="text-xs !mt-2">{meta.label}</span>
              </div>
            ))}
          </div>
        )}
        {/* Form content */}
        <form
          className="flex flex-col gap-[3rem] !px-[5%] !pb-[5%] w-full !mx-auto"
          onSubmit={
            step === 4
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  nextStep();
                }
          }
        >
          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="flex flex-col items-center justify-center !py-12">
              <h2 className="text-2xl font-bold !mb-4">
                Let’s Build Your Brand Together
              </h2>
              <p className="text-gray-500 !mb-8 text-center">
                This quick survey will take 2–3 minutes. Please fill in your
                details to get started.
              </p>
              <Button
                className="!px-8 !py-4 text-lg font-semibold"
                onClick={() => setStep(1)}
              >
                Start
              </Button>
            </div>
          )}
          {/* Step 1: Company Info */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold !mb-2">
                  Company Name
                </label>
                <Input
                  value={form.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  placeholder="Enter company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs !mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">Country</label>
                <CountrySelect
                  value={form.country}
                  onChange={(country) => handleChange("country", country)}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs !mt-1">{errors.country}</p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs !mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="flex items-center !px-3 dark:bg-zinc-700 rounded-l border border-r-0">
                    {form.country ? `+${form.country.phone}` : ""}
                  </span>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      const maxLen = form.country?.phone?.length > 4 ? 12 : 10;
                      handleChange("phone", val.slice(0, maxLen));
                    }}
                    placeholder="Enter phone number"
                    className="rounded-l-none"
                    disabled={!form.country}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs !mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          )}
          {/* Step 2: Company Profile */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold !mb-2">
                  Industry/Niche
                </label>
                <Select
                  value={form.niche}
                  onValueChange={(v) => handleChange("niche", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your niche" />
                  </SelectTrigger>
                  <SelectContent>
                    {companyNiches.map((niche) => (
                      <SelectItem key={niche} value={niche}>
                        {niche}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.niche && (
                  <p className="text-red-500 text-xs !mt-1">{errors.niche}</p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">
                  Required Services
                </label>
                <div className="flex flex-wrap gap-2">
                  {NavIcons.map((service) => (
                    <Button
                      key={service.name}
                      type="button"
                      variant={
                        form.services.includes(service.name)
                          ? "default"
                          : "outline"
                      }
                      className={`!px-3 !py-2 flex items-center gap-2 ${
                        form.services.includes(service.name)
                          ? "bg-black text-white"
                          : ""
                      }`}
                      onClick={() =>
                        handleMultiSelect("services", service.name)
                      }
                    >
                      {service.icon}
                      {service.name}
                    </Button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-500 text-xs !mt-1">
                    {errors.services}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">
                  Estimated Budget
                </label>
                <Select
                  value={form.budget}
                  onValueChange={(v) => handleChange("budget", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-red-500 text-xs !mt-1">{errors.budget}</p>
                )}
              </div>
            </div>
          )}
          {/* Step 3: Project Details */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold !mb-2">
                  Type of Project(s)
                </label>
                <div className="flex gap-4 !mt-2">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={form.projectType === type}
                        onChange={() => handleChange("projectType", type)}
                        className="accent-blue-500"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-xs !mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold !mb-2">
                  Preferred Work Period
                </label>
                <Select
                  value={form.workPeriod}
                  onValueChange={(v) => handleChange("workPeriod", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select work period" />
                  </SelectTrigger>
                  <SelectContent>
                    {workPeriods.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.workPeriod && (
                  <p className="text-red-500 text-xs !mt-1">
                    {errors.workPeriod}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block font-semibold !mb-2">
                  Additional Information
                </label>
                <Textarea
                  value={form.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Add any notes about your company or project"
                  rows={4}
                />
                {errors.notes && (
                  <p className="text-red-500 text-xs !mt-1">{errors.notes}</p>
                )}
              </div>
            </div>
          )}
          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Review your details:</h3>
              <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg !p-4 text-sm">
                <div>
                  <strong>Company Name:</strong> {form.companyName}
                </div>
                <div>
                  <strong>Country:</strong>{" "}
                  {form.country ? form.country.label : ""}
                </div>
                <div>
                  <strong>Email:</strong> {form.email}
                </div>
                <div>
                  <strong>Phone:</strong> {form.phone}
                </div>
                <div>
                  <strong>Niche:</strong> {form.niche}
                </div>
                <div>
                  <strong>Service:</strong> {form.services.join(", ")}
                </div>
                <div>
                  <strong>Budget:</strong> {form.budget}
                </div>
                <div>
                  <strong>Project Type:</strong> {form.projectType}
                </div>
                <div>
                  <strong>Work Period:</strong> {form.workPeriod}
                </div>
                <div>
                  <strong>Notes:</strong> {form.notes}
                </div>
              </div>
              <div className="flex items-center gap-2 !mt-4">
                <Checkbox
                  checked={form.confirm}
                  onCheckedChange={(v) => handleChange("confirm", v)}
                  className="accent-blue-500"
                />
                <span className="text-sm">
                  I confirm the above information is correct
                </span>
              </div>
              {errors.confirm && (
                <p className="text-red-500 text-xs !mt-1">{errors.confirm}</p>
              )}
            </div>
          )}
          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="flex flex-col items-center justify-center !py-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 !mb-4" />
              <h2 className="text-2xl font-bold !mb-2">
                Thank you! Your inquiry has been sent.
              </h2>
              <p className="text-gray-500 !mb-8 text-center">
                We’ll review your details and contact you shortly via email.
              </p>
              <Link href={'/'}>
                <Button className="!px-8 !py-4 text-lg font-semibold">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
          {/* Navigation Buttons */}
          {step > 0 && step < 5 && (
            <div className="flex justify-between !mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="!py-2 !px-8 bg-gray-200 cursor-pointer"
                disabled={step === 1}
              >
                Back
              </Button>
              <Button
                type={step === 4 ? "submit" : "button"}
                disabled={sending}
                className="!py-2 !px-8 flex w-fit cursor-pointer"
                onClick={step === 4 ? undefined : nextStep}
              >
                {step === 4 ? (sending ? "Sending..." : "Submit") : "Next"}
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
