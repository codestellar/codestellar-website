"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Trophy, Target, Zap, Milestone, ArrowRight, Mic2, Code2, GraduationCap, Spotlight } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Target className="text-emerald-500" size={20} />,
    title: "Solutions Architect",
    desc: "13+ years of experience architecting high-performance systems for Telecom, Medical, and Insurance industries."
  },
  {
    icon: <Zap className="text-amber-500" size={20} />,
    title: "Cloud & AI Enthusiast",
    desc: "Expert in Azure DevOps, Infrastructure as Code (IaC), and Microsoft Fabric."
  },
  {
    icon: <Mic2 className="text-blue-500" size={20} />,
    title: "Public Speaker",
    desc: "TEDx Speaker and Industry Representative for MRSPTU, sharing knowledge through global tech meetups."
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-[#030303] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs"
            >
              <User size={16} />
              Gaurav Madaan
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white leading-[0.9]">
              Building <br />
              <span className="text-zinc-400">Reliability.</span>
            </h2>
          </div>
          <div className="max-w-xs space-y-4">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm leading-relaxed">
              Co-founder & CTO at niwi. A seasoned architect bridging the gap between 
              complex business problems and elegant technical execution.
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold rounded text-zinc-600">FLASK</span>
               <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold rounded text-zinc-600">REACT.JS</span>
               <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold rounded text-zinc-600">AZURE</span>
            </div>
          </div>
        </div>

        {/* Main Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bio Card - Spans 7 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-[#080808] flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                High-performance solutions for <span className="text-emerald-500">global impact.</span>
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-light">
                With 13+ years of experience, I lead technical implementation strategies that prioritize 
                quality and consistency. My expertise ranges from splitting monoliths into 
                microservices to authoring IAC scripts for enterprise-grade Azure infrastructure.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-light">
                Currently, I manage teams and design ecosystems using .NET Core, React, and GraphQL, 
                ensuring every line of code serves a business purpose while maintaining strict 
                security and performance standards.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">13+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Years Exp</span>
               </div>
               <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">CTO</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">at niwi</span>
               </div>
               <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-zinc-900 dark:text-white">TEDx</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Speaker</span>
               </div>
            </div>
          </motion.div>

          {/* Highlights Sidebar - Spans 5 cols */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] group transition-all hover:border-emerald-500/30"
              >
                <div className="mb-4 p-3 w-fit rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Banner - Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-[#050505] relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Milestone size={200} className="text-zinc-900 dark:text-white" />
             </div>
             <div className="relative z-10 max-w-2xl">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">The Philosophy</h4>
                <h3 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6 italic">
                  "Code is temporary, <br /> Engineering is permanent."
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                  I believe in building software that outlasts trends. My approach is rooted in 
                  Clean Code principles, Domain-Driven Design, and a relentless pursuit of 
                  technical excellence.
                </p>
             </div>
          </motion.div>

          {/* Personal Banner - Full Width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-[#0A0A0A] relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Spotlight size={200} className="text-zinc-900 dark:text-white" />
             </div>
             
             <div className="relative z-10 max-w-2xl">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Beyond the Code</h4>
                <h3 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter mb-6 italic">
                  "Poet by heart, <br /> Engineer by choice."
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                  When I'm not architecting cloud systems or leading development teams, I express my 
                  creativity through poetry in my native language. I am a dedicated community builder 
                  who believes in the power of continuous learning and sharing knowledge with peers.
                </p>
             </div>
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-16 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 pt-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-zinc-400">
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">Available for Technical Leadership</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <GraduationCap size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">B.Tech Honors, GZSCCET </span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Trophy size={14} className="text-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Cloud Digital Leader </span>
                </div>
            </div>
            <motion.a 
              href="https://www.linkedin.com/in/codestellar"
              target="_blank"
              whileHover={{ gap: "1rem" }}
              className="flex items-center gap-2 text-[10px] font-black text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all uppercase tracking-widest cursor-pointer"
            >
                View LinkedIn Profile <ArrowRight size={14} />
            </motion.a>
        </div>
      </div>
    </section>
  );
}