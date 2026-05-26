"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("general");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300 font-sans">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-450 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Thank you, {name}!
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Your inquiry has been received. One of our core engineers will reach out to you at <span className="font-semibold">{email}</span> within 24 hours.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
            setTopic("general");
          }}
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="form-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="form-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="form-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            disabled={isSubmitting}
            className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="form-topic" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          What are you interested in?
        </label>
        <select
          id="form-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={isSubmitting}
          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all"
        >
          <option value="general">General Query / Help</option>
          <option value="hosting">Managed Hosting Setup</option>
          <option value="consulting">Custom Nodes / Integrations</option>
          <option value="partner">Enterprise Partnerships</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="form-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          Message Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="form-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please describe your requirements, active team size, or support questions..."
          disabled={isSubmitting}
          className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-emerald-600 text-white font-semibold text-sm hover:opacity-95 disabled:opacity-75 flex items-center justify-center space-x-2 shadow-md shadow-violet-500/10 active:scale-98 transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}
