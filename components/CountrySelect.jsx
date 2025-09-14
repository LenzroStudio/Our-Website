import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { countries } from "@/assets/assets";

export default function CountrySelect({ value, onChange }) {
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
