"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  GitBranch, 
  Star, 
  Activity, 
  Code2, 
  ExternalLink, 
  GitPullRequest, 
  ChevronRight,
  Cpu,
  Zap,
  Terminal
} from "lucide-react";


const STATS = [
  { label: "Total Commits", value: "2,400+", icon: <Activity size={18} />, color: "text-emerald-500" },
  { label: "Pull Requests", value: "180+", icon: <GitPullRequest size={18} />, color: "text-blue-500" },
  { label: "Stars Earned", value: "450+", icon: <Star size={18} />, color: "text-amber-500" },
  { label: "Repositories", value: "45+", icon: <Code2 size={18} />, color: "text-purple-500" },
];

const LANGUAGES = [
  { name: "TypeScript", percent: 45, color: "bg-zinc-800 dark:bg-zinc-200" },
  { name: "C# / .NET", percent: 25, color: "bg-zinc-500" },
  { name: "React/Next.js", percent: 20, color: "bg-emerald-500" },
  { name: "Python", percent: 10, color: "bg-zinc-300 dark:bg-zinc-700" },
];

export default function GitHubStats() {
  const username = "codestellar";

  return (
    <section className="py-4 sm:py-16 px-6 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs"
            >
              <Github size={16} />
              Open Source
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
              Code <br />
              <span className="text-zinc-400">Contributions.</span>
            </h2>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Contribution Card - ENHANCED */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-8 group relative rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] overflow-hidden flex flex-col transition-all duration-500 shadow-2xl shadow-emerald-500/5"
          >
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L40 40M0 40L40 40' fill='none' stroke='currentColor' stroke-width='1'/%3E%3C/svg%3E")` }} 
            />

            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">System Contributions</h3>
                  </div>
                  <p className="text-[10px] text-zinc-400 font-black tracking-widest uppercase">Node: {username}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest sm:hidden">
                  Swipe <ChevronRight size={12} className="animate-bounce-x" />
                </div>
              </div>
              
              {/* Heatmap Section */}
              <div className="relative w-full overflow-hidden mb-12">
                <div className="overflow-x-auto no-scrollbar pb-4 -mb-4">
                  <div className="min-w-[700px] sm:min-w-0">
                    <img 
                      src={`https://ghchart.rshah.org/10b981/${username}`} 
                      alt="GitHub Contributions" 
                      className="w-full h-auto object-contain transition-all duration-500 dark:invert-[0.85] dark:hue-rotate-180 dark:brightness-125 dark:contrast-150" 
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-zinc-50/50 dark:from-[#080808] to-transparent pointer-events-none sm:hidden" />
              </div>

              {/* NEW: Extended Content for Large Screens */}
              <div className="hidden md:grid grid-cols-3 gap-8 py-8 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter font-bold text-[10px]">
                    <Zap size={14} className="text-amber-500" /> Commit Velocity
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 100, 75].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm group-hover:bg-emerald-500/30 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter font-bold text-[10px]">
                    <Terminal size={14} className="text-emerald-500" /> Focus Area
                  </div>
                  <div className="text-2xl font-black text-zinc-900 dark:text-white leading-none tracking-tighter">
                    BACKEND <br />
                    <span className="text-emerald-500 underline decoration-zinc-800 underline-offset-4 font-medium text-lg tracking-normal">Architecture</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter font-bold text-[10px]">
                    <Zap size={14} className="text-amber-500" /> Performance
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">99.9% Uptime</div>
                    <div className="text-[10px] text-zinc-400">Validated across 45+ Repos</div>
                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-1 rounded-full mt-1 overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} className="h-full bg-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Info */}
              <div className="mt-auto flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50 pt-6">
                <div className="flex items-center gap-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                   <span>Archive 2025-2026</span>
                   <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                   <span className="text-emerald-500">Live Feedback</span>
                </div>
                <div className="hidden sm:flex gap-1">
                  {[0.1, 0.3, 0.6, 1].map((op) => (
                    <div key={op} className="w-3 h-3 rounded-sm bg-emerald-500" style={{ opacity: op }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Stats */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm"
              >
                <div className={stat.color}>{stat.icon}</div>
                <div className="mt-4">
                  <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Breakdown */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Technical Language Mix</h3>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-[0.2em]">Based on repository data</p>
              </div>

              <div className="flex-1 max-w-2xl w-full">
                <div className="flex h-3 w-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  {LANGUAGES.map((lang) => (
                    <div 
                      key={lang.name}
                      style={{ width: `${lang.percent}%` }}
                      className={`${lang.color} transition-all duration-1000`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 mt-4">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${lang.color}`} />
                      <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tighter">{lang.name}</span>
                      <span className="text-[10px] font-medium text-zinc-400">{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[10px] font-black uppercase tracking-widest pt-8 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Metrics_Online
            </span>
            <span className="text-zinc-200 dark:text-zinc-800">|</span>
            <span>API_V.4.2</span>
          </div>
          <a href={`https://github.com/${username}`} target="_blank" className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Source: github.com/{username} <ExternalLink size={12} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
}