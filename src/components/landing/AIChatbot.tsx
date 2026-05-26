"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! 👋 I'm your WhatsApp CRM AI assistant. How can I help you scale your business operations today?",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { label: "What is this CRM?", value: "what" },
    { label: "Can I build automations?", value: "automations" },
    { label: "How much does it cost?", value: "cost" },
    { label: "How to set up Supabase?", value: "supabase" },
  ];

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("what is") || q.includes("crm") || q.includes("details")) {
      return "WhatsApp Automation CRM is a self-hostable solution built on Next.js and Supabase. It provides teams with a unified inbox to manage multiple agents on one WhatsApp number, contacts database with custom tags, sales pipelines (Kanban), broadcasts with templates, and automated workflows.";
    }
    if (q.includes("automation") || q.includes("workflow") || q.includes("builder")) {
      return "Yes! It includes a no-code visual automation builder. You can trigger flows based on incoming messages, contact updates, keywords, or cron schedules. Actions include sending messages, conditional branching (IF/ELSE), delays/waits, assigning tags, and dispatching custom Webhooks.";
    }
    if (q.includes("cost") || q.includes("pricing") || q.includes("price") || q.includes("pay")) {
      return "The template is fully open-source and free to self-host! For organizations that want managed hosting, automatic updates, and dedicated support, our Startup plan starts at $29/mo, and our Growth plan is $79/mo. Check our Pricing page for more details!";
    }
    if (q.includes("supabase") || q.includes("setup") || q.includes("database") || q.includes("migration")) {
      return "Setup is super simple: 1. Create a free Supabase project. 2. Run the SQL files inside `/supabase/migrations` in the SQL Editor. 3. Copy your project URL and service/anon keys into your `.env.local` file. Our documentation covers this step-by-step!";
    }
    if (q.includes("contact") || q.includes("help") || q.includes("support") || q.includes("email")) {
      return "You can get in touch with us directly via the Contact page or send an email to support@crm.example.com. We usually respond within a couple of hours!";
    }
    return "That's a good question! Our CRM is fully customizable. You can modify any React page or database schema easily since you have full access to the source code. Let me know if you would like info on specific features like the inbox, broadcasts, or pipelines!";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const reply = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-tr from-violet-600 to-emerald-500 text-white shadow-xl shadow-violet-500/20 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Open chat assistant"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
            Chat with AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[500px] rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-violet-600 to-emerald-600 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight">AI Assistant</h4>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-100 font-medium uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-slate-50 dark:bg-slate-900/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white ${
                    msg.sender === "user"
                      ? "bg-slate-600 dark:bg-slate-800"
                      : "bg-gradient-to-tr from-violet-600 to-emerald-500"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                    msg.sender === "user"
                      ? "bg-violet-600 text-white rounded-tr-none"
                      : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-850 rounded-tl-none"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 px-4 py-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && !isTyping && (
            <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-900/50 flex flex-wrap gap-1.5">
              {quickReplies.map((reply) => (
                <button
                  key={reply.value}
                  onClick={() => handleSend(reply.label)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-violet-500 dark:hover:border-emerald-500 hover:text-violet-600 dark:hover:text-emerald-400 text-slate-600 dark:text-slate-400 transition-colors duration-200"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask a question..."
                className="flex-grow px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-violet-600 dark:bg-emerald-600 text-white hover:bg-violet-700 dark:hover:bg-emerald-500 disabled:opacity-50 disabled:hover:bg-violet-600 dark:disabled:hover:bg-emerald-600 transition-colors duration-200"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
