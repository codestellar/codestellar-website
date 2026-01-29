"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, ArrowRight, Loader2, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Matches your Career Path Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs"
            >
              <Mail size={16} />
              Contact
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white leading-[0.9]">
              Start a <br />
              <span className="text-zinc-400">Conversation.</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 dark:text-zinc-400 font-medium text-sm leading-relaxed">
            Available for strategic consulting, architectural reviews, and 
            high-scale full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center border-2 border-dashed border-emerald-500/20 rounded-[2.5rem] bg-emerald-500/[0.02]"
              >
                <CheckCircle2 size={64} className="text-emerald-500 mb-6" />
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Transmission Received</h3>
                <p className="text-zinc-500 mt-2">I will review your message and respond shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-black uppercase tracking-widest text-emerald-500 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                    <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Message</label>
                  <textarea required name="message" rows={5} placeholder="Project details, timeline, and goals..." className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 focus:border-zinc-900 dark:focus:border-white outline-none transition-all text-zinc-900 dark:text-white resize-none" />
                </div>

                <motion.button
                  whileHover={{ gap: "1.5rem" }}
                  disabled={status === "loading"}
                  className="flex items-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs disabled:opacity-50 transition-all"
                >
                  {status === "loading" ? <Loader2 className="animate-spin" /> : <><Send size={16} /> Dispatch Message</>}
                </motion.button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-[#080808] space-y-8">
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500">Contact Details</h4>
                <p className="text-xl font-bold text-zinc-900 dark:text-white">gaurav.madaan@niwi.ai</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-emerald-500">Location</h4>
                <p className="text-xl font-bold text-zinc-900 dark:text-white">Amritsar, Punjab, India</p>
                <p className="text-xs text-zinc-500 tracking-widest uppercase">GMT +5:30</p>
              </div>
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-[#080808]" />)}
                </div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Typically responds in &lt; 24h</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 px-8">
               <MessageSquare size={14} className="text-emerald-500" />
               SECURE_ENCRYPTED_CHANNEL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}