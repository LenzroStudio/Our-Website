"use client";
import { useState, useEffect } from "react";
import { Outfit, Poppins, Fira_Code, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Loading from "./loading";
import Footer from "@/components/Footer";

// ✅ Add metadata here (recommended Next.js 13+ way)
export const metadata = {
  title: "Lenzro — Digital Agency in Eastleigh",
  description:
    "We are Lenzro, a digital agency helping brands grow through design, marketing, and technology solutions. Driven by creativity and innovation.",
};

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
    setLoading(false);
  }, []);

  const [showLoader, setShowLoader] = useState(true);

  if (loading || showLoader) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          {/* fallback title while loading */}
          <title>Lenzro — Loading...</title>
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
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
