"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Tag, CheckCircle2, User, Send, Bot, Calendar, Sparkles } from "lucide-react";

interface MockContact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  status: "open" | "pending" | "closed";
  tag: string;
}

interface MockMessage {
  id: string;
  sender: "client" | "agent" | "bot";
  text: string;
  time: string;
}

export default function HeroMockup() {
  const [contacts, setContacts] = useState<MockContact[]>([
    {
      id: "1",
      name: "Sarah Jenkins",
      avatar: "SJ",
      lastMessage: "Is my order shipped yet?",
      time: "10:24 AM",
      unread: true,
      status: "open",
      tag: "Lead-Hot",
    },
    {
      id: "2",
      name: "David Chen",
      avatar: "DC",
      lastMessage: "Thanks, that works!",
      time: "9:45 AM",
      unread: false,
      status: "closed",
      tag: "Customer",
    },
    {
      id: "3",
      name: "Amara Okoro",
      avatar: "AO",
      lastMessage: "Can we schedule a demo call?",
      time: "Yesterday",
      unread: false,
      status: "pending",
      tag: "Enterprise",
    },
  ]);

  const [activeContactId, setActiveContactId] = useState("1");
  const [typedMessage, setTypedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [chats, setChats] = useState<Record<string, MockMessage[]>>({
    "1": [
      { id: "101", sender: "client", text: "Hello, I saw your product catalog on WhatsApp.", time: "10:20 AM" },
      { id: "102", sender: "bot", text: "Welcome to our store! 🛍️ Here is our latest catalog. Let me know if you have any questions.", time: "10:20 AM" },
      { id: "103", sender: "client", text: "Awesome! I want to check the pricing for the Enterprise model.", time: "10:22 AM" },
      { id: "104", sender: "agent", text: "Hi Sarah! Our Enterprise model includes custom integrations and dedicated support. Let me know if you would like me to set up a quick Zoom call to discuss this.", time: "10:23 AM" },
      { id: "105", sender: "client", text: "Is my order shipped yet?", time: "10:24 AM" },
    ],
    "2": [
      { id: "201", sender: "client", text: "Can you send the invoice for the last renewal?", time: "9:40 AM" },
      { id: "202", sender: "agent", text: "Sure thing David! Here is the PDF invoice for your subscription.", time: "9:42 AM" },
      { id: "203", sender: "client", text: "Thanks, that works!", time: "9:45 AM" },
    ],
    "3": [
      { id: "301", sender: "client", text: "Hi, I have a team of 45 agents. Can we deploy this on our own servers?", time: "Yesterday" },
      { id: "302", sender: "agent", text: "Hello Amara! Yes, you can self-host the CRM on your own infrastructure. You have complete data ownership. Let's schedule a brief call to walk you through the architecture.", time: "Yesterday" },
      { id: "303", sender: "client", text: "Can we schedule a demo call?", time: "Yesterday" },
    ],
  });

  // Simulated auto message arrival
  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate Sarah sending a follow up
      setChats((prev) => ({
        ...prev,
        "1": [
          ...prev["1"],
          { id: "106", sender: "client", text: "Also, do you support webhook integrations?", time: "10:28 AM" },
        ],
      }));
      setContacts((prev) =>
        prev.map((c) =>
          c.id === "1"
            ? { ...c, lastMessage: "Also, do you support webhook integrations?", unread: true, time: "10:28 AM" }
            : c
        )
      );
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMsg: MockMessage = {
      id: Date.now().toString(),
      sender: "agent",
      text: typedMessage,
      time: "Just now",
    };

    setChats((prev) => ({
      ...prev,
      [activeContactId]: [...prev[activeContactId], newMsg],
    }));

    setContacts((prev) =>
      prev.map((c) =>
        c.id === activeContactId ? { ...c, lastMessage: typedMessage, unread: false } : c
      )
    );

    const userQuery = typedMessage;
    setTypedMessage("");

    // Simulate Bot response if they say specific keywords
    if (userQuery.toLowerCase().includes("webhook") || userQuery.toLowerCase().includes("integration")) {
      setIsTyping(true);
      setTimeout(() => {
        const botMsg: MockMessage = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "🤖 [Automation Engine]: Yes! Webhooks can be triggered instantly inside visual automation flows on incoming messages, state changes, or keywords.",
          time: "Just now",
        };
        setChats((prev) => ({
          ...prev,
          [activeContactId]: [...prev[activeContactId], botMsg],
        }));
        setIsTyping(false);
      }, 1500);
    }
  };

  const activeContact = contacts.find((c) => c.id === activeContactId) || contacts[0];
  const activeChats = chats[activeContactId] || [];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[550px] font-sans">
      {/* Sidebar: Chats list */}
      <div className="w-full md:w-80 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-slate-50 dark:bg-slate-900/50 flex-shrink-0">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-slate-850 dark:text-slate-100 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-violet-500" />
            <span>Active Conversations</span>
          </h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300">
            {contacts.filter((c) => c.unread).length} New
          </span>
        </div>

        {/* List */}
        <div className="flex-grow overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/40">
          {contacts.map((contact) => {
            const isActive = contact.id === activeContactId;
            return (
              <button
                key={contact.id}
                onClick={() => {
                  setActiveContactId(contact.id);
                  setContacts((prev) =>
                    prev.map((c) => (c.id === contact.id ? { ...c, unread: false } : c))
                  );
                }}
                className={`w-full text-left p-4 transition-colors flex gap-3 items-start ${
                  isActive
                    ? "bg-violet-500/10 dark:bg-slate-800"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/30"
                }`}
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-violet-500/10 flex-shrink-0">
                  {contact.avatar}
                </div>

                {/* Details */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 truncate">
                      {contact.name}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                    {contact.lastMessage}
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      #{contact.tag}
                    </span>
                    {contact.unread && (
                      <span className="w-2 h-2 rounded-full bg-violet-600 mt-1.5 ml-auto flex-shrink-0" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main chat interface */}
      <div className="flex-grow flex flex-col bg-white dark:bg-slate-900 min-w-0 h-full">
        {/* Active Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
              {activeContact.avatar}
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                {activeContact.name}
              </h4>
              <p className="text-[10px] text-emerald-500 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Connected via Cloud API</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-900/50 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{activeContact.status.toUpperCase()}</span>
            </span>
          </div>
        </div>

        {/* Chat Threads */}
        <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
          {activeChats.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2.5 ${
                msg.sender === "client" ? "justify-start" : "justify-end"
              }`}
            >
              {msg.sender === "client" && (
                <div className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-slate-800 flex items-center justify-center text-[10px] text-violet-600 dark:text-slate-400 font-bold">
                  C
                </div>
              )}
              <div
                className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-xs shadow-sm ${
                  msg.sender === "client"
                    ? "bg-white dark:bg-slate-800 text-slate-850 dark:text-slate-100 rounded-bl-none border border-slate-100 dark:border-slate-750"
                    : msg.sender === "bot"
                    ? "bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-350 rounded-br-none border border-emerald-100/50 dark:border-emerald-900/30 flex items-center gap-1.5 font-medium"
                    : "bg-violet-600 text-white rounded-br-none"
                }`}
              >
                {msg.sender === "bot" && <Bot className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />}
                <p>{msg.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                B
              </div>
              <div className="bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 px-3.5 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2"
        >
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => setTypedMessage(e.target.value)}
            placeholder="Type agent reply (try typing 'webhook' for auto response)..."
            className="flex-grow px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-violet-500/20 focus:border-violet-500 dark:focus:border-emerald-500 transition-all duration-200"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition-colors flex items-center justify-center flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Right Column: CRM Context Metadata Panel */}
      <div className="hidden lg:flex w-64 border-l border-slate-200 dark:border-slate-800 flex-col bg-slate-50 dark:bg-slate-900/50 p-4 space-y-4 flex-shrink-0">
        <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span>CRM Context</span>
        </h4>

        {/* Client details card */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-violet-500" />
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Contact Info</span>
          </div>
          <div className="space-y-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            <div>Name: {activeContact.name}</div>
            <div>Phone: +1 (555) 0192</div>
            <div>Source: Web Form</div>
          </div>
        </div>

        {/* Automation Status */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-3">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Active Automations</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-750">
              <span className="text-slate-700 dark:text-slate-350 truncate">Welcome Catalog Autoreply</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            </div>
            <div className="flex items-center justify-between text-[10px] px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-750">
              <span className="text-slate-700 dark:text-slate-350 truncate">Lead Scoring Engine</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Lead scoring pipeline status */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Active Deal Value</span>
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent">
            {activeContact.id === "1" ? "$4,500" : activeContact.id === "3" ? "$12,000" : "$0 (Won)"}
          </div>
          <div className="text-[10px] text-slate-450 dark:text-slate-500">
            Pipeline stage: {activeContact.id === "1" ? "Discovery" : activeContact.id === "3" ? "Demo Booked" : "Closed Won"}
          </div>
        </div>
      </div>
    </div>
  );
}
