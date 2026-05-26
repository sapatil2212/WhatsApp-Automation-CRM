"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Sparkles } from "lucide-react";

export default function InteractivePricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Community",
      description: "Perfect for developers and self-hosters wanting absolute data ownership.",
      priceMonthly: 0,
      priceYearly: 0,
      features: [
        "100% Self-Hostable",
        "Full access to MIT Source Code",
        "Supabase RLS database setup",
        "1 WhatsApp Business Number",
        "Unlimited Custom Automations",
        "Community Discord Support",
      ],
      cta: "Clone Repository",
      href: "https://github.com/sapatil2212/WhatsApp-Automation-CRM.git",
      popular: false,
    },
    {
      name: "Startup Cloud",
      description: "For small teams wanting a ready-to-use CRM without database maintenance ops.",
      priceMonthly: 29,
      priceYearly: 24,
      features: [
        "Fully managed Cloud hosting",
        "Secure Supabase database hosting",
        "Automatic database backups",
        "Up to 3 Agent Seats",
        "1 WhatsApp Business Number",
        "Meta API Webhook Handler",
        "Email Support (24h response)",
      ],
      cta: "Start Free Trial",
      href: "/signup",
      popular: true,
    },
    {
      name: "Growth Scale",
      description: "For scaling customer operations requiring advanced workflows and seats.",
      priceMonthly: 79,
      priceYearly: 69,
      features: [
        "Everything in Startup Cloud",
        "Up to 10 Agent Seats Included",
        "2 WhatsApp Business Numbers",
        "Multi-agent Chat Routing Rules",
        "Advanced Analytics & Charts",
        "Priority Email & Slack Support",
        "SLA Guarantee",
      ],
      cta: "Start Free Trial",
      href: "/signup",
      popular: false,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Toggle */}
      <div className="flex justify-center items-center space-x-4">
        <span className={`text-sm font-medium ${!isYearly ? "text-violet-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>
          Monthly Billing
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors focus:outline-none"
          aria-label="Toggle billing interval"
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 shadow-md transition-transform duration-300 ${
              isYearly ? "translate-x-7" : ""
            }`}
          />
        </button>
        <span className={`text-sm font-medium flex items-center gap-1.5 ${isYearly ? "text-violet-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>
          <span>Yearly Billing</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-250/20">
            Save ~15%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => {
          const price = isYearly ? plan.priceYearly : plan.priceMonthly;
          return (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.popular
                  ? "border-violet-500 dark:border-emerald-500 shadow-xl shadow-violet-500/5 dark:shadow-emerald-500/5 bg-white dark:bg-slate-900/60 scale-102 z-10"
                  : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 hover:border-slate-350 dark:hover:border-slate-700"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-emerald-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 min-h-[34px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price block */}
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    ${price}
                  </span>
                  <span className="ml-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {plan.priceMonthly === 0 ? "" : isYearly ? "/month, billed yearly" : "/month"}
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-xs text-slate-650 dark:text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-800 text-violet-500 dark:text-emerald-400 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-action button */}
              <div className="mt-8">
                <Link
                  href={plan.href}
                  className={`w-full text-center block px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-emerald-600 text-white hover:opacity-95 shadow-md shadow-violet-500/10 active:scale-98"
                      : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-98"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust banner */}
      <div className="max-w-3xl mx-auto mt-12 p-5 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/10 flex items-center justify-center gap-3.5 text-center flex-col sm:flex-row">
        <ShieldCheck className="w-8 h-8 text-violet-600 dark:text-emerald-400 flex-shrink-0" />
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
          Need a dedicated enterprise deployment behind custom firewalls or custom WhatsApp API integrations? We provide consulting, setup, and support services.{" "}
          <Link href="/contact" className="text-violet-600 dark:text-emerald-400 font-semibold hover:underline">
            Contact Sales Options &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
