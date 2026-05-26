"use client";

import { useState } from "react";
import { Link, CheckCircle, ArrowRight, PlayCircle, KeyRound, Workflow, MessageSquare } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Connect Meta Cloud API",
      icon: <KeyRound className="w-5 h-5" />,
      description: "Set up a Meta Developer account, add the WhatsApp product, and paste your Permanent Access Token, Phone Number ID, and App Secret into the configuration panel.",
      badge: "Takes 5 minutes",
      code: `// .env.local configuration
NEXT_PUBLIC_SUPABASE_URL=https://project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=ey...
ENCRYPTION_KEY=your-aes-256-key
META_APP_SECRET=your-meta-secret`,
    },
    {
      title: "2. Sync Approved Templates",
      icon: <PlayCircle className="w-5 h-5" />,
      description: "Directly import your pre-approved WhatsApp templates from Facebook Business Manager. The CRM queries Meta API and populates templates ready for broadcast variables.",
      badge: "Instant Sync",
      code: `// API Endpoint: GET /api/whatsapp/templates/sync
{
  "status": "success",
  "syncedTemplatesCount": 18,
  "lastSynced": "2026-05-26T08:45:00Z"
}`,
    },
    {
      title: "3. Design Workflow Automations",
      icon: <Workflow className="w-5 h-5" />,
      description: "Use our no-code builder to map triggers (inbound message keywords, tag updates) to conditional paths (IF client is 'VIP', wait 2 hours, dispatch webhook notification).",
      badge: "No-Code Visual Builder",
      code: `// Automation Schema example
{
  "trigger": "message_received",
  "conditions": [{ "field": "body", "operator": "contains", "value": "order" }],
  "actions": [
    { "type": "apply_tag", "tag": "Order-Query" },
    { "type": "webhook", "url": "https://api.store.com/order-lookup" }
  ]
}`,
    },
    {
      title: "4. Collaborative Shared Inbox",
      icon: <MessageSquare className="w-5 h-5" />,
      description: "Your agents log in and manage conversations in real-time. Assign threads, leave internal notes, change pipeline deals, and coordinate tags from a central hub.",
      badge: "Multiple agents, one number",
      code: `// Real-time Supabase subscription active
supabase
  .channel('realtime_inbox')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, 
      (payload) => handleNewMessage(payload))
  .subscribe()`,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
      {/* Left pane: interactive steps */}
      <div className="lg:col-span-5 space-y-4">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                isActive
                  ? "bg-white dark:bg-slate-900 border-violet-500 dark:border-emerald-500 shadow-lg shadow-violet-500/5 dark:shadow-emerald-500/5 scale-102"
                  : "bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div
                className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                  isActive
                    ? "bg-violet-600 dark:bg-emerald-600 text-white shadow-md shadow-violet-500/10"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-450"
                }`}
              >
                {step.icon}
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-bold text-sm ${isActive ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-350"}`}>
                    {step.title}
                  </span>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {step.badge}
                  </span>
                </div>
                {isActive && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {step.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Right pane: visual preview code/status board */}
      <div className="lg:col-span-7 h-full flex flex-col justify-center">
        <div className="rounded-2xl bg-slate-900 dark:bg-slate-950 border border-slate-850 p-6 shadow-2xl relative overflow-hidden font-mono min-h-[300px] flex flex-col justify-between">
          {/* Mock code terminal top bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-850">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {activeStep === 0
                ? "Configuration"
                : activeStep === 1
                ? "Meta Response"
                : activeStep === 2
                ? "Rule Engine Schema"
                : "Realtime Socket"}
            </span>
          </div>

          {/* Code display */}
          <div className="flex-grow pt-6">
            <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto selection:bg-slate-800">
              <code>{steps[activeStep].code}</code>
            </pre>
          </div>

          {/* Decorative tag */}
          <div className="mt-8 pt-4 border-t border-slate-850 flex items-center justify-between text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Integration Setup</span>
            </div>
            <span>v0.2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
