import { createClient } from "@/lib/supabase/server";
import LandingLayout from "@/components/landing/LandingLayout";
import InteractivePricing from "@/components/landing/InteractivePricing";
import { HelpCircle, Star, Sparkles } from "lucide-react";

export const metadata = {
  title: "Simple, Transparent Pricing — WhatsApp Automation CRM",
  description: "Free self-hosted community version, or fully managed cloud setups starting at $29/mo. Choose the best WhatsApp CRM plan for your team.",
};

export default async function PricingPage() {
  let isLoggedIn = false;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
  } catch (e) {
    console.error("Auth check failed:", e);
  }

  const faqs = [
    {
      q: "Is the Community version really free?",
      a: "Yes, 100%! The CRM's source code is distributed under the MIT license. You can clone the repository, run the database migrations, and deploy it to Hostinger, Vercel, AWS, or your own local servers without paying us a single penny.",
    },
    {
      q: "Are there additional costs for Meta's WhatsApp API?",
      a: "Yes. Meta Cloud API uses a conversation-based pricing model. Every WhatsApp Business Account receives 1,000 free service (user-initiated) conversations each month. Beyond that, Meta charges per conversation based on the user's country and category (Utility, Marketing, Authentication, Service). These fees go directly to Meta; we do not charge any markup.",
    },
    {
      q: "Can I upgrade from Community to Startup Cloud later?",
      a: "Absolutely! If you decide to transition from self-hosting to our managed hosting, our engineering team will assist you in securely migrating your Supabase database and Meta setup to our cloud dashboard. There is no downtime for your active chats.",
    },
    {
      q: "Do you offer custom development or setup assistance?",
      a: "Yes, we do. Many businesses require custom database integrations (e.g. syncing CRM deals with internal ERPs) or specific automation nodes. We offer customization consulting packages starting at $999. Reach out via our Contact page to get a quote.",
    },
  ];

  return (
    <LandingLayout isLoggedIn={isLoggedIn}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[100px] left-[15%] w-[320px] h-[320px] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute -top-[80px] right-[15%] w-[320px] h-[320px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Page Header */}
      <section className="relative z-10 pt-20 pb-12 text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-xs font-semibold text-violet-650 dark:text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span>Flexible Hosting Plans</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Flexible pricing for teams of all sizes
        </h1>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-450 max-w-xl mx-auto leading-relaxed">
          Clone and host the codebase yourself for complete control, or let us manage the server hosting, backups, and scalability updates for you.
        </p>
      </section>

      {/* Pricing Cards Section */}
      <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <InteractivePricing />
      </section>

      {/* Detailed FAQs */}
      <section className="relative z-10 py-20 md:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-450 max-w-md mx-auto leading-relaxed">
            Have questions about licenses, conversation fees, or hosting setups? Find quick answers below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-5.5 rounded-2xl border border-slate-200/60 dark:border-slate-850/80 bg-white/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-2.5"
            >
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-start gap-2.5">
                <HelpCircle className="w-4.5 h-4.5 text-violet-500 dark:text-emerald-450 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </LandingLayout>
  );
}
