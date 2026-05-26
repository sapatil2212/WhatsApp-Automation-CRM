import { createClient } from "@/lib/supabase/server";
import LandingLayout from "@/components/landing/LandingLayout";
import HeroMockup from "@/components/landing/HeroMockup";
import HowItWorks from "@/components/landing/HowItWorks";
import Link from "next/link";
import { ArrowRight, Bot, Zap, Shield, BarChart3, Users, Star, MessageSquare } from "lucide-react";

export const metadata = {
  title: "WhatsApp Automation CRM — Streamline Customer Operations",
  description: "Self-hostable CRM for WhatsApp built on Next.js and Supabase. Shared inbox, visual automations, sales pipelines, and bulk broadcasts.",
};

export default async function HomePage() {
  let isLoggedIn = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch (e) {
    console.error("Auth check failed:", e);
  }

  const features = [
    {
      title: "Shared Inbox",
      icon: <Users className="w-5 h-5 text-violet-500" />,
      description: "Allow multiple agents to manage support and sales from a single WhatsApp number. Assign chats, take notes, and coordinate responses.",
    },
    {
      title: "Visual Automations",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      description: "Build visual automation rules. Trigger responses on keywords, schedules, or inbound events. Connect delays, actions, and custom webhooks.",
    },
    {
      title: "Kanban Sales Pipelines",
      icon: <BarChart3 className="w-5 h-5 text-emerald-500" />,
      description: "Manage lead qualification and sales stages with customizable pipeline boards. Link active deals directly to chat histories.",
    },
  ];

  const stats = [
    { label: "Delivery Success Rate", value: "99.9%" },
    { label: "Average Response Time reduction", value: "85%" },
    { label: "Self-Host Setup Time", value: "< 15m" },
    { label: "Active Integrations Supported", value: "100+" },
  ];

  return (
    <LandingLayout isLoggedIn={isLoggedIn}>
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[200px] left-[10%] w-[350px] h-[350px] rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/5" />
        <div className="absolute -top-[150px] right-[10%] w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/5" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-28 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Banner badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 text-xs text-violet-650 dark:text-emerald-400 backdrop-blur-sm shadow-sm animate-fade-in">
          <Bot className="w-4 h-4 text-violet-500 dark:text-emerald-400" />
          <span className="font-semibold">Self-Hostable WhatsApp CRM is Live</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-450 bg-clip-text text-transparent">
          The Self-Hostable CRM built for{" "}
          <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent px-1">
            WhatsApp Business API
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Coordinate team replies in a shared inbox, design powerful visual workflows, run template broadcasts, and keep absolute control of your customer data with Supabase.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-violet-500/15 flex items-center justify-center space-x-1.5 hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/sapatil2212/WhatsApp-Automation-CRM.git"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-250 font-semibold text-sm border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center space-x-1.5 hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <span>Clone Repository</span>
          </Link>
        </div>

        {/* Ratings / Social Proof */}
        <div className="flex items-center justify-center space-x-2.5 pt-2 text-xs text-slate-400 dark:text-slate-500">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>Loved by 200+ self-hosting developers and business owners</span>
        </div>
      </section>

      {/* Interactive Mockup Container */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 overflow-hidden max-w-7xl mx-auto">
        <HeroMockup />
      </section>

      {/* Core Features Overview */}
      <section className="py-20 md:py-28 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Everything your team needs to run WhatsApp support
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Eliminate chaotic chat threads. Empower your team with tools designed to scale operations and speed up customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-slate-250/60 dark:border-slate-850/80 bg-white/50 dark:bg-slate-900/20 backdrop-blur-sm space-y-4 hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-650 dark:text-emerald-400 hover:underline"
          >
            <span>Explore all features</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/10 border-y border-slate-250/60 dark:border-slate-900/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              Launch in four easy steps
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              From source code configuration to active WhatsApp messaging in less than fifteen minutes. Here is the workflow:
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 dark:bg-slate-900/40 border border-slate-800 text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-450 dark:text-slate-400 font-medium max-w-[150px] mx-auto leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-28 text-center relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
          Ready to scale your customer operations?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          Clone the project, insert your WhatsApp credentials, and run it on your own server. Your data stays Yours. Always.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold text-sm hover:opacity-95 shadow-lg shadow-violet-500/15 flex items-center justify-center space-x-1.5 hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/sapatil2212/WhatsApp-Automation-CRM.git"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-250 font-semibold text-sm border border-slate-200/50 dark:border-slate-800 hover:border-slate-700 flex items-center justify-center space-x-1.5 hover:scale-102 active:scale-98 transition-all duration-200"
          >
            <span>GitHub Repository</span>
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}
