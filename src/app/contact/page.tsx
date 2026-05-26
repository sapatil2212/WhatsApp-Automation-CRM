import { createClient } from "@/lib/supabase/server";
import LandingLayout from "@/components/landing/LandingLayout";
import ContactForm from "./ContactForm";
import { Mail, MessageSquare, Building2, Clock, Sparkles } from "lucide-react";

export const metadata = {
  title: "Get in Touch — WhatsApp Automation CRM",
  description: "Contact our team for deployment support, consulting services, custom integrations, or general queries. We'd love to help.",
};

export default async function ContactPage() {
  let isLoggedIn = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch (e) {
    console.error("Auth check failed:", e);
  }

  const contactInfo = [
    {
      title: "Email Support",
      icon: <Mail className="w-5 h-5 text-violet-500" />,
      detail: "support@crm.example.com",
      description: "Ask technical setup questions. We reply within 24 hours.",
    },
    {
      title: "Chat with Sales",
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      detail: "+1 (555) 0192",
      description: "WhatsApp message us directly for enterprise setups.",
    },
    {
      title: "Office Hours",
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      detail: "Mon - Fri, 9:00 AM - 6:00 PM EST",
      description: "Our core engineering team is available for calls.",
    },
    {
      title: "HQ Address",
      icon: <Building2 className="w-5 h-5 text-indigo-500" />,
      detail: "100 Pine Street, San Francisco, CA 94111",
      description: "WhatsApp CRM Inc.",
    },
  ];

  return (
    <LandingLayout isLoggedIn={isLoggedIn}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[100px] left-[20%] w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute -top-[50px] right-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Page Header */}
      <section className="relative z-10 pt-20 pb-12 text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-xs font-semibold text-violet-650 dark:text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span>Have Questions?</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          How can we help your business grow?
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-450 max-w-xl mx-auto leading-relaxed">
          Reach out to our core team for technical support packages, custom visual nodes development, or dedicated cloud deployment questions.
        </p>
      </section>

      {/* Main Grid: Form on left, info on right */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact form on left */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-xl">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Info cards on right */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-850/80 bg-white/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {info.title}
                  </h3>
                </div>
                <div className="space-y-1 pl-1">
                  <p className="text-xs font-semibold text-slate-850 dark:text-slate-250 select-all">
                    {info.detail}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
