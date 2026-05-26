"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { AuroraBackground } from "@/components/landing/aurora-background";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AuroraBackground className="text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </AuroraBackground>
  );
}

