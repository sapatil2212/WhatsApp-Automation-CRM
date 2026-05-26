import { createClient } from "@/lib/supabase/server";
import LandingLayout from "@/components/landing/LandingLayout";
import Link from "next/link";
import {
  MessageSquare,
  Workflow,
  BarChart4,
  Megaphone,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Search,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "CRM Features — WhatsApp Automation CRM",
  description: "Explore the features of WhatsApp CRM. Shared inbox, visual automations flow builder, sales pipeline, and broadcast templates.",
};

export default async function FeaturesPage() {
  let isLoggedIn = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch (e) {
    console.error("Auth check failed:", e);
  }

  const sections = [
    {
      id: "inbox",
      title: "Shared Inbox Manager",
      tagline: "Collaborative Customer Support",
      description: "Manage all incoming and outgoing WhatsApp messages from a single dashboard. Assign conversations to agents, mark threads as open/pending/closed, and leave internal context notes that only your team can see.",
      icon: <MessageSquare className="w-6 h-6 text-violet-500" />,
      bullets: [
        "Multiple agents on a single phone number",
        "Per-conversation agent assignment & claim workflow",
        "Internal agent notes & timeline markers",
        "Tag-based search filters and customizable labels",
        "Real-time database sync using Supabase Realtime WSS",
      ],
      previewContent: (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 space-y-4 shadow-md font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase">Inbox UI Preview</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
              Active Connection
            </span>
          </div>
          <div className="space-y-2">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs border border-slate-100 dark:border-slate-850">
              <div className="flex justify-between font-bold text-slate-700 dark:text-slate-350">
                <span>Customer Query</span>
                <span>10:20 AM</span>
              </div>
              <p className="mt-1 text-slate-500 dark:text-slate-450">Can you check if my order #2819 has shipped?</p>
            </div>
            <div className="p-3 rounded-xl bg-violet-600 text-white text-xs border border-violet-750 self-end ml-10">
              <div className="flex justify-between font-bold">
                <span>Agent Reply (You)</span>
                <span>10:22 AM</span>
              </div>
              <p className="mt-1">Yes, Sarah! It was picked up by DHL this morning. Tracking: DHL-981273</p>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] border border-amber-500/25 italic flex items-center gap-1.5">
              <span>Note added: Client requested expedited shipping tags.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "automations",
      title: "No-Code Automations Visual Builder",
      tagline: "Automate Support Workflows",
      description: "Build robust, automated action trees without writing code. Listen for incoming message keywords, trigger webhooks, assign pipeline cards, apply custom tags, and set up delayed actions to check back with clients.",
      icon: <Workflow className="w-6 h-6 text-amber-500" />,
      bullets: [
        "Inbound message keyword and context trigger rules",
        "Wait steps (wait 2 hours, wait 3 days) for follow ups",
        "Conditional branches based on tags, database values, or text",
        "Instantly trigger external API Webhooks to Shopify, HubSpot, etc.",
        "Automatic tag assignment and status modification",
      ],
      previewContent: (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 space-y-4 shadow-md text-slate-300 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-850">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Automation Visual Block</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Trigger</span>
              <span>Inbound Message contains "pricing"</span>
            </div>
            <div className="h-6 w-0.5 bg-slate-800 ml-8" />
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-450 border border-emerald-900/40">Action</span>
              <span>Send Catalog template message</span>
            </div>
            <div className="h-6 w-0.5 bg-slate-800 ml-8" />
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-violet-950 text-violet-400 border border-violet-900/40">Delay</span>
              <span>Wait 24 Hours</span>
            </div>
            <div className="h-6 w-0.5 bg-slate-800 ml-8" />
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Check</span>
              <span>If client tag !== "Purchased"</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "pipelines",
      title: "Sales Kanban Pipelines",
      tagline: "Track Deals & Revenue",
      description: "Optimize your sales funnel. Drag and drop deals across stages (Discovery, Proposal, Negotitation, Closed Won). Calculate aggregate pipeline metrics and keep track of individual deal values linked directly to chats.",
      icon: <BarChart4 className="w-6 h-6 text-emerald-500" />,
      bullets: [
        "Drag and drop visual Kanban cards",
        "Pipeline value aggregates updating dynamically",
        "Custom deal labels (Value, Expected Close, Assignee)",
        "Direct link from deal card to chat thread history",
        "Historical sales reports and conversions analytics",
      ],
      previewContent: (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 space-y-4 shadow-md font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase">Pipeline stage tracker</span>
            <span className="text-xs font-bold text-violet-600 dark:text-emerald-400">$24,500 Total</span>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Proposal ($8,500)</div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Amara Okoro</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">$6,500 &bull; Enterprise</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Won ($16,000)</div>
              <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">David Chen</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">$4,500 &bull; SaaS license</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "broadcasts",
      title: "Broadcast Campaigns with Analytics",
      tagline: "Reach Customers at Scale",
      description: "Broadcast rich templates directly to hundreds of qualified leads. Merge personal database parameters (first name, order details) dynamically for every recipient. Review read, delivery, and click logs instantly.",
      icon: <Megaphone className="w-6 h-6 text-indigo-500" />,
      bullets: [
        "Sync pre-approved templates from Meta Manager API",
        "Custom variables substitution per recipient (CSV file or tags)",
        "Delivery, failure, and read tracking metrics log",
        "Targeted broadcasts by tags and list parameters",
        "Rate limiting safety margins avoiding WhatsApp spam bans",
      ],
      previewContent: (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 space-y-4 shadow-md font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 uppercase">Broadcast Metrics</span>
            <span className="text-[10px] font-bold text-slate-450 uppercase">Order Promo Sync</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850">
              <div className="text-lg font-bold text-slate-900 dark:text-white">450</div>
              <div className="text-[9px] font-medium text-slate-450 dark:text-slate-500">Sent</div>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30">
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">98%</div>
              <div className="text-[9px] font-medium text-emerald-600/80 dark:text-emerald-400/85">Delivered</div>
            </div>
            <div className="p-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/20 border border-violet-100/50 dark:border-violet-900/30">
              <div className="text-lg font-bold text-violet-650 dark:text-violet-400">84%</div>
              <div className="text-[9px] font-medium text-violet-650/80 dark:text-violet-400/85">Read Rate</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <LandingLayout isLoggedIn={isLoggedIn}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[100px] left-[20%] w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute -top-[50px] right-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Hero Header */}
      <section className="relative z-10 pt-20 pb-12 text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-xs font-semibold text-violet-600 dark:text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span>Detailed Capabilities</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Engineered for fast, reliable customer communication
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-450 max-w-xl mx-auto leading-relaxed">
          From developer integrations to agent-friendly interfaces, explore how WhatsApp Automation CRM enhances support and converts leads.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="relative z-10 py-12 space-y-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={section.id}
              id={section.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content info */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-violet-650 dark:text-emerald-400 uppercase tracking-widest">
                      {section.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white mt-0.5">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start text-xs text-slate-650 dark:text-slate-350">
                      <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-slate-100 dark:bg-slate-850 text-violet-600 dark:text-emerald-400 flex items-center justify-center mr-2.5 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 fill-current bg-white dark:bg-slate-950 rounded-full" />
                      </span>
                      <span className="leading-5">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual preview */}
              <div className="lg:w-1/2 w-full max-w-lg">
                <div className="relative group">
                  {/* Backdrop glow glow */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-emerald-500 opacity-20 blur-[15px] group-hover:opacity-30 transition-all duration-300 pointer-events-none" />
                  <div className="relative relative z-10 bg-white dark:bg-slate-950 rounded-2xl shadow-xl">
                    {section.previewContent}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Privacy / Self Hosting banner */}
      <section className="relative z-10 py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-100 dark:bg-slate-900/10 border border-slate-200/60 dark:border-slate-900/60 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-3.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 text-red-650 dark:text-red-400 border border-red-200/50 dark:border-red-950/50 text-xs font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>Absolute Data Ownership</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Your customer data stays Yours. Period.
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Unlike third-party SaaS CRMs that charge per user and store your sensitive messaging data, self-hosting this WhatsApp template with Supabase keeps you in control. No hidden tracking, no seat license pricing caps, and zero vendor lock-in.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/pricing"
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-95 flex items-center justify-center gap-1.5"
            >
              <span>View Hosting Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
