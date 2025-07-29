"use client";
import { useState, useEffect } from "react";
import { Outfit, Poppins, Fira_Code, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Loading from "./loading";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400"],
});
const FiraCode = Fira_Code({
  variable: "--font-firacode",
  subsets: ["latin"],
  weight: ["300", "400"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensures loading state is only set on the client after mount
    setLoading(false); // Only triggers after first mount (hydration)
  }, []);

  const [showLoader, setShowLoader] = useState(true);

  if (loading || showLoader) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <title>Lenzro Tech</title>
        </head>
        <body
          className={`${outfit.variable} ${poppins.variable} ${FiraCode.variable} ${montserrat.variable} antialiased two`}
        >
          <Loading onComplete={() => setShowLoader(false)} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Lenzro Tech</title>
      </head>
      <body
        className={`${outfit.variable} ${poppins.variable} ${FiraCode.variable} ${montserrat.variable} antialiased two`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Navbar />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
