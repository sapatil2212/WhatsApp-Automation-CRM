"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Sparkles,
  Users,
  BarChart3,
  Bot,
  Zap,
  CheckCircle,
  ChevronDown,
  Play,
  ArrowUpRight,
  TrendingUp,
  UserCheck,
  FolderLock,
  Building,
  Activity,
  HeartPulse,
  ShoppingBag,
  Laptop,
  GraduationCap,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatedButton } from "@/components/landing/animated-button";
import { GlowCard } from "@/components/landing/glow-card";
import { StatsCounter } from "@/components/landing/stats-counter";
import { AIChatSimulation } from "@/components/landing/ai-chat-simulation";
import { WorkflowBuilder } from "@/components/landing/workflow-builder";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { TestimonialSlider } from "@/components/landing/testimonial-slider";

// FAQ List
const FAQS = [
  {
    q: "Do I need an official WhatsApp Business API account?",
    a: "Yes, WACRM integrates with the official Meta WhatsApp Cloud API. We guide you step-by-step through the process which takes less than 15 minutes, allowing you to use your existing phone number or a new one.",
  },
  {
    q: "Is there any setup fee or long-term contract?",
    a: "No. All our plans are month-to-month with no contracts, no hidden fees, and you can cancel anytime. If you choose yearly billing, you get a 20% discount.",
  },
  {
    q: "Can I assign chats to specific agents automatically?",
    a: "Absolutely. WACRM has smart routing rules. You can route chats based on agent load, client tags, previous assignees, or keywords in the incoming messages.",
  },
  {
    q: "Is the AI chatbot builder easy to customize?",
    a: "Yes, WACRM features a no-code visual automation builder. You can drag and drop steps, create branching logic based on client replies, and qualify leads without writing a single line of code.",
  },
  {
    q: "How secure is my data on WACRM?",
    a: "We prioritize security. Tokens are encrypted using AES-256-GCM, and Row Level Security (RLS) is applied on every database table. Your client records are protected by enterprise-grade security protocols.",
  },
];

// Use Cases
const USE_CASES = [
  { name: "Agencies", icon: <Laptop className="w-5 h-5 text-indigo-500" />, desc: "Nurture clients, share inquiries, and coordinate team response times." },
  { name: "Real Estate", icon: <Building className="w-5 h-5 text-blue-500" />, desc: "Instantly send brochures, schedule site visits, and update deal pipelines." },
  { name: "Clinics", icon: <HeartPulse className="w-5 h-5 text-rose-500" />, desc: "Send automated appointment reminders, collect feedback, and triage patients." },
  { name: "Coaches", icon: <GraduationCap className="w-5 h-5 text-emerald-500" />, desc: "Manage client applications, automate drip followups, and process bookings." },
  { name: "Ecommerce", icon: <ShoppingBag className="w-5 h-5 text-pink-500" />, desc: "Automate abandoned cart recovery, send shipping updates, and handle returns." },
  { name: "Restaurants", icon: <UtensilsCrossed className="w-5 h-5 text-amber-500" />, desc: "Manage table bookings, send digital menus, and run broadcast promos." },
];

export default function HomePage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Background Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-100/30 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-purple-100/20 blur-[130px] pointer-events-none z-0" />

      {/* SECTION 1 - HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="text-center flex flex-col items-center gap-6 max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-full px-4 py-1.5 text-xs text-emerald-800 font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
            <span>Next-Gen CRM & AI WhatsApp Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:leading-[1.05]"
          >
            Scale Your Sales on{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium"
          >
            Automate conversations, route inquiries instantly, follow up with automated templates, and close more clients with an all-in-one shared inbox and sales pipeline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <AnimatedButton href="/signup" variant="primary" showArrow>
              Start Free Trial
            </AnimatedButton>
            <AnimatedButton href="/book-demo" variant="secondary">
              Request Live Demo
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Hero UI Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-5xl mx-auto shadow-2xl rounded-3xl"
        >
          <DashboardPreview />
        </motion.div>
      </section>

      {/* SECTION 2 - TRUSTED BY */}
      <section className="bg-white py-12 border-y border-slate-100 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Trusted by fast-growing brands worldwide
          </p>
        </div>
        {/* Infinite Logo Marquee */}
        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap opacity-65">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center justify-around min-w-full">
              <span className="text-lg font-bold text-slate-700">Apex Agency</span>
              <span className="text-lg font-bold text-slate-700">Metro Dental</span>
              <span className="text-lg font-bold text-slate-700">Horizon Realtors</span>
              <span className="text-lg font-bold text-slate-700">Prime E-com</span>
              <span className="text-lg font-bold text-slate-700">Dr. Ron Hill</span>
              <span className="text-lg font-bold text-slate-700">Acme Corporation</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 - CORE FEATURES BENTO GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Complete Suite for Scaling Sales
          </h2>
          <p className="text-slate-500 font-medium">
            Everything your team needs to deliver premium, multi-agent support and automated marketing directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlowCard className="md:col-span-2">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Shared Multi-Agent Inbox</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Collaborate in real time. Assign incoming conversations to specific agents, add internal team notes, and tag customers for clean followups.
                </p>
              </div>
              <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-2xl text-[11px] text-slate-400 font-mono shadow-inner w-full">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="text-slate-300 font-semibold">Agent Assignments</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg">
                    <span>Chat #4182 (Acme Corp)</span>
                    <span className="text-emerald-400 font-semibold">&rarr; Alex Carter</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-950 p-2 rounded-lg">
                    <span>Chat #1002 (Dr. Roy)</span>
                    <span className="text-emerald-400 font-semibold">&rarr; Bot Automated</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No-Code Automations</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Trigger triggers based on keywords, inbound requests, or schedules. Automate standard replies instantly.
              </p>
            </div>
          </GlowCard>

          <GlowCard>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">AI Chatbot Agent</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Let your smart assistant automatically query interest, qualify lead budget, and book meetings into calendar slots.
              </p>
            </div>
          </GlowCard>

          <GlowCard className="md:col-span-2">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">CRM & Deal Pipelines</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Track property transactions, advertising commissions, or dental appointments with visual Kanban pipelines linked directly to WhatsApp.
                </p>
              </div>
              <div className="flex-1 flex gap-2 h-28 items-end justify-around w-full">
                {[60, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="w-6 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-md" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* SECTION 4 - AUTOMATION WORKFLOW BUILDER SHOWCASE */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            How The Workflow Operates
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Watch leads flow from their initial inquiry to automated AI nurturing, CRM assignment, and successful booking notifications.
          </p>
        </div>
        <WorkflowBuilder />
      </section>

      {/* SECTION 5 - USE CASES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Your Industry
          </h2>
          <p className="text-slate-500 font-medium">
            Discover how diverse businesses leverage WACRM to automate communication and accelerate sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase) => (
            <GlowCard key={useCase.name} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <h4 className="text-base font-bold text-slate-800">{useCase.name}</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {useCase.desc}
              </p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* SECTION 6 - AI CHATBOT INTERACTIVE SIMULATION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-full px-3 py-1 text-xs text-emerald-800 font-semibold w-fit">
              <Bot className="w-3.5 h-3.5 text-emerald-500" />
              <span>AI Lead Qualification</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              An AI Agent That Sells 24/7
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Automatically screen customer inquiries, respond with marketing collateral, and schedule calls onto your team's calendar. No more missed middle-of-the-night leads.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Instant PDF Brochures
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Calendar Booking Sync
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Automatic Reminders
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Custom System Prompts
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <AIChatSimulation />
          </div>
        </div>
      </section>

      {/* SECTION 7 - TEAM COLLABORATION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            {/* Visual Team Mockup */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-lg max-w-md w-full relative">
              <h4 className="text-sm font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Active Agents Status</span>
                <span className="text-[10px] text-slate-400">4 Online</span>
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { name: "John Doe (Lead Agent)", status: "Active", time: "Handling Acme Corp chat" },
                  { name: "Sarah Connor (Support)", status: "Active", time: "Replying to Dr. Roy" },
                  { name: "WACRM Booking Bot", status: "Automated", time: "Monitoring 12 live threads" },
                ].map((agent, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">{agent.name}</h5>
                      <p className="text-[10px] text-slate-500 mt-0.5">{agent.time}</p>
                    </div>
                    <span className="text-[9px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                      {agent.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6 max-w-xl text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-full px-3 py-1 text-xs text-emerald-800 font-semibold w-fit">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              <span>Multi-Agent Platform</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              One Number. Uncapped Collaboration.
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Unify your client communications under a single official WhatsApp Business number. Let multiple team members respond, delegate tasks, and add internal notes without stepping on each other's toes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 - STATS COUNTER */}
      <section className="py-16 bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <StatsCounter end={10} suffix="M+" label="Messages Sent" />
          <StatsCounter end={14800} suffix="+" label="Deals Won" />
          <StatsCounter end={98.4} suffix="%" decimals={1} label="Customer Satisfaction" />
          <StatsCounter end={15} suffix="m" label="Avg Setup Time" />
        </div>
      </section>

      {/* SECTION 9 - TESTIMONIALS */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our Customers
          </h2>
          <p className="text-slate-500 font-medium">
            Find out why agencies, real estate firms, and coaches trust WACRM to automate patient and customer intake.
          </p>
        </div>
        <TestimonialSlider />
      </section>

      {/* SECTION 10 - PRICING */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pricing Tailored to Your Scale
          </h2>
          <p className="text-slate-500 font-medium">
            Start small and expand as your messaging volume grow. 20% discount on annual subscriptions.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className={`text-xs font-semibold ${billingPeriod === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
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
            <span className={`text-xs font-semibold ${billingPeriod === "yearly" ? "text-slate-900 animate-pulse" : "text-slate-400"}`}>
              Yearly (Save 20%)
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Starter</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$29" : "$23"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">Perfect for small startup agencies or single coaches.</p>
              <ul className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                {[
                  "1 Active WhatsApp Number",
                  "Up to 3 Agent Accounts",
                  "1,000 Free Monthly Sessions",
                  "Basic Custom Fields & Tags",
                  "Core Kanban Pipeline Board",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AnimatedButton href="/signup" variant="outline" className="w-full mt-8">
              Choose Starter
            </AnimatedButton>
          </div>

          {/* Growth Plan (Highlighted) */}
          <div className="bg-white border-2 border-emerald-500/80 p-8 rounded-3xl flex flex-col justify-between shadow-md relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <div>
              <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">Growth</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$79" : "$63"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">Built for growing businesses and active clinics.</p>
              <ul className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                {[
                  "2 Active WhatsApp Numbers",
                  "Up to 10 Agent Accounts",
                  "5,000 Free Monthly Sessions",
                  "No-Code Visual Automations",
                  "AI Qualifying Booking Agent",
                  "Advanced CSV Import & Filters",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AnimatedButton href="/signup" variant="primary" className="w-full mt-8 shadow-md">
              Choose Growth
            </AnimatedButton>
          </div>

          {/* Scale Plan */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-300 shadow-sm hover:shadow-md transition">
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Scale</span>
              <div className="flex items-baseline mt-4 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingPeriod === "monthly" ? "$149" : "$119"}
                </span>
                <span className="text-slate-400 text-xs ml-1">/ month</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">Designed for larger organizations with multi-department support.</p>
              <ul className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                {[
                  "5 Active WhatsApp Numbers",
                  "Uncapped Agent Accounts",
                  "15,000 Free Monthly Sessions",
                  "Custom System Prompts & Logic",
                  "API Access & Webhooks",
                  "Priority Chat & Video Support",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AnimatedButton href="/signup" variant="outline" className="w-full mt-8">
              Choose Scale
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* SECTION 11 - FAQ ACCORDION */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col gap-3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-medium">
              Got questions about our plans, Meta WhatsApp Cloud API settings, or setup? We've got answers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-slate-800 hover:text-slate-950 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
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
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 border-t border-slate-100 pt-4 leading-relaxed whitespace-pre-line">
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

      {/* SECTION 12 - FINAL CTA */}
      <section className="relative z-10 py-24 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 text-white text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Start Automating WhatsApp Conversations Today
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base font-medium">
            Setup in less than 15 minutes. 7-day free trial on all plans. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <AnimatedButton href="/signup" variant="primary" showArrow>
              Start Free Trial Now
            </AnimatedButton>
            <AnimatedButton href="/book-demo" variant="secondary" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
              Book Call with Advisor
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
