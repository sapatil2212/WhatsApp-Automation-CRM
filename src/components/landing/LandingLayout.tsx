"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIChatbot from "./AIChatbot";

interface LandingLayoutProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

export default function LandingLayout({ children, isLoggedIn }: LandingLayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read theme preference from localStorage on mount
    const savedTheme = localStorage.getItem("landing.theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("landing.theme", nextTheme);
  };

  if (!mounted) {
    // SSR Fallback
    return (
      <div className="dark">
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased flex flex-col">
          <div className="flex-grow">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-violet-500 selection:text-white transition-colors duration-300 flex flex-col">
        {/* Navbar */}
        <Navbar theme={theme} toggleTheme={toggleTheme} isLoggedIn={isLoggedIn} />

        {/* Page Content */}
        <main className="flex-grow relative overflow-hidden">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Chatbot */}
        <AIChatbot />
      </div>
    </div>
  );
}
