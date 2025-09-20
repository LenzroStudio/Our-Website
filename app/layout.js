"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";
import Loading from "./loading";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || showLoader) {
    return <Loading onComplete={() => setShowLoader(false)} />;
  }

  return (
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
  );
}
