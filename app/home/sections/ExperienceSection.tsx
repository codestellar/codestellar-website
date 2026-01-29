"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Shield, 
  Workflow,
  ExternalLink
} from "lucide-react";

const EXPERIENCES = [
  {
    id: "01",
    company: "NIWIAI",
    role: "Co-Founder & CTO",
    period: "Apr 2022 - Present",
    stats: "3 yrs 10 mos",
    tags: ["Strategy", "Azure", "AI"],
    description: "Spearheaded technical implementation for innovative products and mobile apps. Managed Azure infrastructure/DevOps and championed company culture.",
  },
  {
    id: "02",
    company: "TechRBM",
    role: "Solutions Architect",
    period: "2021 - 2024",
    stats: "3 yrs 3 mos",
    tags: ["React.js", "Fabric", "Architecture"],
    description: "Designed high-performance solutions using React and Microsoft Fabric. Acted as a bridge between business needs and technical execution.",
  },
  {
    id: "03",
    company: "Technossus",
    role: "Software Architect",
    period: "2015 - 2021",
    stats: "7 yrs 1 mo",
    tags: ["Microservices", ".NET", "Healthcare"],
    description: "Led teams of 8-10 for California's largest Healthcare orgs. Architected migrations from Monolith to Microservices.",
  },
  {
    id: "04",
    company: "Infosys",
    role: "Sr. Systems Engineer",
    period: "2012 - 2014",
    stats: "2 yrs 6 mos",
    tags: ["Java", "Google Maps API", "WCF"],
    description: "Started as a Trainee and quickly moved to Sr. Engineer, developing complex mapping and .NET services.",
  }
];

export default function Experience() {
  return (
    <section className="py-24 bg-white dark:bg-[#030303] px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">
              // Career_Architecture
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black dark:text-white">
              Experience.
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed">
            A decade of scaling systems and leading engineering teams across Telecom, Medical, and AI sectors.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 flex flex-col justify-between min-h-[400px] hover:border-emerald-500/50 transition-all duration-500"
            >
              {/* Card Decoration */}
              <div className="absolute top-6 right-8 text-4xl font-black text-black/5 dark:text-white/5 group-hover:text-emerald-500/10 transition-colors">
                {exp.id}
              </div>

              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-emerald-500 font-mono tracking-tighter uppercase">
                    {exp.period}
                  </p>
                  <h3 className="text-2xl font-bold text-black dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-500 font-medium text-sm">
                    {exp.company} • {exp.stats}
                  </p>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-4">
                  {exp.description}
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-bold bg-white dark:bg-black border border-black/5 dark:border-white/10 text-zinc-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:gap-3 transition-all">
                  Details <ArrowUpRight size={14} className="text-emerald-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Capability Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-8 rounded-[2rem] border border-dashed border-black/10 dark:border-white/10 flex flex-wrap justify-around gap-8 text-center"
        >
          <div className="space-y-1">
            <Workflow className="mx-auto mb-2 text-zinc-400" size={20} />
            <p className="text-[10px] font-bold uppercase text-zinc-500">Methodology</p>
            <p className="text-sm font-bold dark:text-white">Agile / DevOps</p>
          </div>
          <div className="space-y-1">
            <Shield className="mx-auto mb-2 text-zinc-400" size={20} />
            <p className="text-[10px] font-bold uppercase text-zinc-500">Security</p>
            <p className="text-sm font-bold dark:text-white">Enterprise Grade</p>
          </div>
          <div className="space-y-1">
            <Layers className="mx-auto mb-2 text-zinc-400" size={20} />
            <p className="text-[10px] font-bold uppercase text-zinc-500">Scalability</p>
            <p className="text-sm font-bold dark:text-white">Microservices</p>
          </div>
          <div className="space-y-1">
            <Cpu className="mx-auto mb-2 text-zinc-400" size={20} />
            <p className="text-[10px] font-bold uppercase text-zinc-500">Cloud</p>
            <p className="text-sm font-bold dark:text-white">Azure / AWS</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

