"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Users,
  BarChart3,
  Bot,
  Zap,
  CheckCircle2,
  ChevronDown,
  Building,
  HeartPulse,
  ShoppingBag,
  Laptop,
  GraduationCap,
  UtensilsCrossed,
  ShieldAlert,
  Fingerprint,
  Lock,
} from "lucide-react";
import { SpotlightCard } from "@/components/landing/spotlight-card";
import { MagneticButton } from "@/components/landing/magnetic-button";
import { StatsCounter } from "@/components/landing/stats-counter";
import { AIChatSimulation } from "@/components/landing/ai-chat-simulation";
import { WorkflowVisualizer } from "@/components/landing/workflow-visualizer";
import { AnimatedCRMBoard } from "@/components/landing/animated-crm-board";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { TestimonialSlider } from "@/components/landing/testimonial-slider";

const FAQS = [
  {
    q: "How does WACRM handle official WhatsApp Business API integration?",
    a: "We connect directly with the official Meta WhatsApp Cloud API. Setup is entirely automated and takes less than 15 minutes. You can use your current business number or register a new one directly in the dashboard settings panel.",
  },
  {
    q: "Can WACRM sync metadata with custom webhooks?",
    a: "Yes. Every trigger event (inbound messages, automation steps, status ticks, read logs) emits standard JSON webhooks. You can connect them to Zapier, make HTTP calls, or sync database states securely.",
  },
  {
    q: "Is patient or realtor client data isolated?",
    a: "Absolutely. WACRM uses strict Row Level Security (RLS) on top of PostgreSQL. Every agent account is bounded by tenancy permissions, meaning colleagues only see conversations and deals allocated to them.",
  },
  {
    q: "How does the AI assistant handle calendar bookings?",
    a: "Our conversational booking agent queries patient or buyer requirements, matches them to open slots via Google Calendar/Cal.com integrations, drafts bookings, and triggers automated SMS/WhatsApp reminders.",
  },
];

const USE_CASES = [
  { name: "Agencies & B2B", icon: <Laptop className="w-5 h-5 text-indigo-500" />, desc: "Delegate chats, note prospect criteria, and forecast contract cycles." },
  { name: "Real Estate Brokers", icon: <Building className="w-5 h-5 text-blue-500" />, desc: "Instantly drop project blueprints, schedule showings, and move pipelines." },
  { name: "Medical Clinics", icon: <HeartPulse className="w-5 h-5 text-rose-500" />, desc: "Automate check-in forms, trigger triage routing, and reduce no-shows by 85%." },
  { name: "Coaching & Mentors", icon: <GraduationCap className="w-5 h-5 text-emerald-500" />, desc: "Nurture enrollment leads, verify payment screenshots, and host group drops." },
  { name: "E-commerce Teams", icon: <ShoppingBag className="w-5 h-5 text-pink-500" />, desc: "Automate cart recovery, send delivery maps, and handle returns dynamically." },
  { name: "Restaurant Bookings", icon: <UtensilsCrossed className="w-5 h-5 text-amber-500" />, desc: "Manage digital menus, table reservation logs, and exclusive promo codes." },
];

export default function HomePage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-28 md:pt-24 md:pb-36 flex flex-col items-center">
        {/* Animated tag indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-50/50 border border-emerald-200/40 rounded-full px-4.5 py-1.5 text-xs text-emerald-800 font-bold mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500/20" />
          <span>Billion-Dollar CRM Infrastructure</span>
        </motion.div>

        {/* Cinematic headline */}
        <div className="text-center flex flex-col items-center gap-8 max-w-5xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.02] md:leading-[0.98] font-sans"
          >
            The Sales Operating System{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent block sm:inline">
              Built for WhatsApp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-slate-500 max-w-3xl leading-relaxed font-medium"
          >
            Unify support, sync lead records, qualify Budgets with conversational AI, and track deal stages on a visual pipeline linked to your WhatsApp Business API.
          </motion.p>

          {/* Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4 z-30"
          >
            <MagneticButton href="/signup" variant="primary" showArrow>
              Claim Your Number
            </MagneticButton>
            <MagneticButton href="/book-demo" variant="secondary">
              Request Advisory Call
            </MagneticButton>
          </motion.div>
        </div>

        {/* Hero Interactive Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto rounded-[3rem] p-2 bg-slate-900/5 border border-slate-200/50 shadow-2xl backdrop-blur-sm"
        >
          <DashboardPreview />
        </motion.div>
      </section>

      {/* SECTION 2 - TRUSTED BRANDS MARQUEE */}
      <section className="bg-white py-14 border-y border-slate-100/80 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">
            Empowering client relationships at scale
          </p>
        </div>
        <div className="flex gap-14 items-center animate-marquee whitespace-nowrap opacity-70">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center justify-around min-w-full font-sans text-sm font-black tracking-wider text-slate-700">
              <span>APEX AGENCY</span>
              <span>METRO HEALTH CLINICS</span>
              <span>HORIZON REALTORS</span>
              <span>PRIME COMMERCE</span>
              <span>ALPHA FIT LABS</span>
              <span>ACME CORP</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 - PRODUCT SHOWCASE GRID */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Designed for High-Ticket Teams
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg">
            Say goodbye to clunky configurations. WACRM integrates team tools, chats, and automated lead qualifiers into a single canvas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Spotlight Card 1 */}
          <SpotlightCard className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-1 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner">
                  <Users className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Shared Multi-Agent Inbox</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  Unify incoming chat requests. Assign threads to specialists, tag leads based on interest, and leave internal private notes to brief team members.
                </p>
              </div>
              <div className="flex-1 bg-slate-950 border border-slate-800 p-5 rounded-[2rem] text-[10px] text-slate-400 font-mono shadow-xl w-full">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
                  <span className="text-slate-200 font-bold">Inbox Assignment Log</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-900 p-2.5 rounded-xl flex items-center justify-between border border-slate-800/60">
                    <span>Inquiry #4802 (Horizon Real Estate)</span>
                    <span className="text-emerald-400 font-bold">&rarr; John Doe</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl flex items-center justify-between border border-slate-800/60">
                    <span>Inquiry #1102 (Metro Clinic)</span>
                    <span className="text-emerald-400 font-bold">&rarr; AI booking bot</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Spotlight Card 2 */}
          <SpotlightCard>
            <div className="flex flex-col gap-5 h-full justify-between">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 shadow-inner">
                <Bot className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Conversational AI</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  Qualify lead budgets, respond to product FAQs, and write schedule bookings directly onto agent calendars 24/7.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Spotlight Card 3 */}
          <SpotlightCard>
            <div className="flex flex-col gap-5 h-full justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 shadow-inner">
                <Zap className="w-5.5 h-5.5" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">No-Code Automations</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  Trigger automated messages, drip sequences, status updates, or custom external webhooks based on inbound keywords.
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Spotlight Card 4 */}
          <SpotlightCard className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
              <div className="flex-1 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 shadow-inner">
                  <BarChart3 className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Visual Kanban Pipelines</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  Link transaction value directly to conversation threads. Drag-and-drop deals, track conversion goals, and monitor revenue stats dynamically.
                </p>
              </div>
              <div className="flex-1 flex items-end justify-between gap-3 h-28 w-full pt-4">
                {[45, 60, 52, 70, 95, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-lg" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 4 - AUTOMATION WORKFLOW VISUALIZER */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden z-10 border-y border-slate-850">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16 flex flex-col gap-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
            Automate Intake Cycles Visually
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-base font-semibold">
            Map out customer journey tracks. Watch client replies trigger document assets, qualify metrics, and alert agents automatically.
          </p>
        </div>
        <div className="relative z-10">
          <WorkflowVisualizer />
        </div>
      </section>

      {/* SECTION 5 - AI CHATBOT PREVIEW SIMULATOR */}
      <section className="py-28 relative z-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-full px-4 py-1.5 text-xs text-emerald-800 font-bold w-fit">
              <Bot className="w-4 h-4 text-emerald-600" />
              <span>AI Lead Qualifiers</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.08] tracking-tight">
              An Intelligent Assistant Operating 24/7
            </h2>
            <p className="text-slate-500 leading-relaxed font-semibold text-sm sm:text-base">
              Automatically capture cold leads, deliver PDF brochures, answer product FAQs, and write confirmed bookings onto calendars while you sleep.
            </p>
            <div className="grid grid-cols-2 gap-4 text-left w-full">
              {[
                "Instant PDF brochure deliveries",
                "Direct Google Calendar Sync",
                "Automated drip SMS follow-ups",
                "Tenancy client data guardrails",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-xs font-bold text-slate-650">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <AIChatSimulation />
          </div>
        </div>
      </section>

      {/* SECTION 6 - CRM PIPELINE EXPERIENCE */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 w-full">
            <AnimatedCRMBoard />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-full px-4 py-1.5 text-xs text-emerald-800 font-bold w-fit">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>SaaS Sales Operations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.08] tracking-tight">
              Drag-and-Drop Deal Pipeline Canvas
            </h2>
            <p className="text-slate-500 leading-relaxed font-semibold text-sm sm:text-base">
              Monitor open values, update contract stages visually, and track team response rates. Align client threads to deal metrics without swapping dashboard views.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - USE CASES */}
      <section className="py-28 bg-slate-50 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Configured for Your Industry
            </h2>
            <p className="text-slate-500 font-semibold text-base sm:text-lg">
              Unlock conversational conversions tailored to your unique department models and client workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.map((useCase) => (
              <SpotlightCard key={useCase.name} className="flex flex-col gap-4 border-slate-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                    {useCase.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-extrabold text-slate-800 tracking-tight">
                    {useCase.name}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {useCase.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - STATS COUNTER */}
      <section className="py-20 bg-white relative z-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatsCounter end={10} suffix="M+" label="Automated Pings Sent" />
          <StatsCounter end={14800} suffix="+" label="Deals Captured & Won" />
          <StatsCounter end={98.4} suffix="%" decimals={1} label="Team Customer Rating" />
          <StatsCounter end={15} suffix="m" label="Advisory Setup Speed" />
        </div>
      </section>

      {/* SECTION 9 - CUSTOMER STORIES */}
      <section className="py-28 relative z-10 bg-slate-50/50">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Success Metrics That Speak
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg">
            See how clinicians, realtor groups, and creators recover cart drop-offs and scale message conversions.
          </p>
        </div>
        <TestimonialSlider />
      </section>

      {/* SECTION 10 - PRICING */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-5">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Flexible Scale Plans
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg">
            Start free, configure variables, and scale agent counts on your timeline.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className={`text-xs font-bold uppercase tracking-wider ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="w-12 h-6 bg-emerald-600 rounded-full p-1 transition-all flex items-center relative cursor-pointer"
            >
              <motion.span
                layout
                className="w-4 h-4 bg-white rounded-full block shadow-sm"
                animate={{ x: billingPeriod === "yearly" ? 24 : 0 }}
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider ${billingPeriod === "yearly" ? "text-slate-900 animate-pulse" : "text-slate-400"}`}>
              Yearly (Save 20%)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <SpotlightCard className="flex flex-col justify-between bg-white border-slate-200">
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Starter</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$29" : "$23"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">For single realtors, clinics, or coach startups.</p>
              <ul className="flex flex-col gap-3.5 border-t border-slate-100 pt-6">
                {[
                  "1 Active WhatsApp Number",
                  "Up to 3 Agent Accounts",
                  "1,000 Free Monthly Sessions",
                  "Basic Custom Fields & Tags",
                  "Core Kanban Pipeline Board",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-650 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MagneticButton href="/signup" variant="outline" className="w-full mt-8">
              Select Starter
            </MagneticButton>
          </SpotlightCard>

          {/* Plan 2 */}
          <SpotlightCard className="flex flex-col justify-between border-2 border-emerald-500/80 bg-white relative">
            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-700 tracking-wider">Growth</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$79" : "$63"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">Designed for active sales teams and medical clinics.</p>
              <ul className="flex flex-col gap-3.5 border-t border-slate-100 pt-6">
                {[
                  "2 Active WhatsApp Numbers",
                  "Up to 10 Agent Accounts",
                  "5,000 Free Monthly Sessions",
                  "No-Code Visual Automations",
                  "AI Qualifying Booking Agent",
                  "Advanced CSV Import & Filters",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-650 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MagneticButton href="/signup" variant="primary" className="w-full mt-8 shadow-md">
              Select Growth
            </MagneticButton>
          </SpotlightCard>

          {/* Plan 3 */}
          <SpotlightCard className="flex flex-col justify-between bg-white border-slate-200">
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Scale</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$149" : "$119"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">For multi-department business routing needs.</p>
              <ul className="flex flex-col gap-3.5 border-t border-slate-100 pt-6">
                {[
                  "5 Active WhatsApp Numbers",
                  "Uncapped Agent Accounts",
                  "15,000 Free Monthly Sessions",
                  "Custom System Prompts & Logic",
                  "API Access & Webhooks",
                  "Priority Chat & Video Support",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-650 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <MagneticButton href="/signup" variant="outline" className="w-full mt-8">
              Select Scale
            </MagneticButton>
          </SpotlightCard>
        </div>
      </section>

      {/* SECTION 11 - FAQ */}
      <section className="py-28 bg-slate-50 relative z-10 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Questions & Answers
            </h2>
            <p className="text-slate-500 font-semibold text-base sm:text-lg">
              Everything you need to know about official WhatsApp API tokens, webhooks, and secure RLS.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-slate-800 hover:text-slate-950 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 border-t border-slate-100 pt-4 leading-relaxed font-semibold">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 - ENTERPRISE SECURITY */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-inner">
            <Fingerprint className="w-7 h-7" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Enterprise-Grade Data Isolation
          </h2>
          <p className="text-slate-500 leading-relaxed font-semibold text-sm sm:text-base max-w-2xl">
            We prioritize data protection. Every request validates against Supabase Postgres policies, encrypting sensitive variables like Meta tokens with secure AES-256-GCM encryptions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-650 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span>AES-256-GCM Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-650 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span>Row Level Security (RLS)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-650 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-sm">
              <ShieldAlert className="w-4 h-4 text-emerald-500" />
              <span>HMAC-Verified Webhooks</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 - FINAL CTA */}
      <section className="relative z-10 py-32 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 text-white text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent opacity-70 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-8 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Scale Conversations. Close More Deals.
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-base font-semibold">
            Integrate your business line, sync pipelines, and launch AI qualifiers in less than 15 minutes. 7-day free trial on all plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <MagneticButton href="/signup" variant="primary" showArrow>
              Start Free Trial Now
            </MagneticButton>
            <MagneticButton href="/book-demo" variant="secondary" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-750">
              Speak to Advisor
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
