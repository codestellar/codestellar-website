"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Layers,
  ShieldCheck,
  Users,
  Building,
  Rocket,
  Code,
  Globe,
  Award,
  Milestone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERIENCES = [
  {
    id: "niwi",
    company: "NIWIAI",
    title: "Co-Founder & CTO",
    duration: "2022 - Present",
    period: "3 yrs 10 mos",
    location: "Hybrid",
    icon: <Rocket className="w-5 h-5" />,
    color: "emerald",
    details: [
      "Spearheaded technical implementation for niwi's mobile apps and ecosystem.",
      "Optimized Azure infra for cost-effectiveness and 99.9% uptime.",
      "Championed the company vision and led organizational alignment.",
      "Mentored a cross-functional team of 10+ engineers.",
    ],
    skills: ["Azure DevOps", "AI Strategy", "Leadership", "Microservices"],
  },
  {
    id: "techrbm",
    company: "TechRBM",
    title: "Solutions Architect",
    duration: "2021 - 2024",
    period: "3 yrs 3 mos",
    location: "Remote",
    icon: <Globe className="w-5 h-5" />,
    color: "blue",
    details: [
      "Designed scalable cloud-native solutions for enterprise clients.",
      "Established standards for Microsoft Fabric and React.js ecosystems.",
      "Reduced system latency by 40% through architectural refactoring.",
    ],
    skills: ["Microsoft Fabric", "React.js", "System Design"],
  },
  {
    id: "technossus",
    company: "Technossus",
    title: "Software Architect",
    duration: "2015 - 2021",
    period: "7 yrs 1 mo",
    location: "Ludhiana Area",
    icon: <Layers className="w-5 h-5" />,
    color: "purple",
    details: [
      "Principal Consultant for Dignity Health (Common Spirit).",
      "Managed teams of 8-10 people for healthcare data solutions.",
      "Migrated monolithic patient management systems to Microservices.",
    ],
    skills: ["ASP.NET Core", "GraphQL", "CI/CD", "Angular"],
  },
  {
    id: "infosys",
    company: "Infosys",
    title: "Sr. Systems Engineer",
    duration: "2012 - 2014",
    period: "2 yrs 6 mos",
    location: "Chandigarh",
    icon: <Code className="w-5 h-5" />,
    color: "blue",
    details: [
      "Worked on Google Maps API integrations and Java backends.",
      "Developed .NET based projects for international clients.",
      "Awarded for high-performance delivery during trainee tenure.",
    ],
    skills: ["Java", ".NET", "Silverlight", "Google Maps API"],
  },
];

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState(EXPERIENCES[0]);

  return (
    <section className="py-24 pb-8 bg-white dark:bg-[#030303] overflow-hidden px-6">
      <div className="container max-w-7xl mx-auto py-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs"
            >
              <Milestone size={16} />
              Career Path
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white">
              Professional <br />{" "}
              <span className="text-zinc-400">Archive.</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 dark:text-zinc-400 font-medium text-sm leading-relaxed">
            13+ years of architecting scalable systems and leading technical
            teams across global industries.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="w-full md:w-1/3 lg:w-1/4 space-y-2">
            <h2 className="text-2xl font-black mb-10 text-black dark:text-white uppercase tracking-tighter">
              Timeline <span className="text-emerald-500">.</span>
            </h2>

            <div className="relative space-y-1">
              {EXPERIENCES.map((exp) => {
                const isActive = activeTab.id === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(exp)}
                    className={cn(
                      "w-full text-left px-4 py-4 rounded-xl transition-all relative group",
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-900 shadow-sm"
                        : "hover:bg-zinc-50 dark:hover:bg-white/5",
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-emerald-500 rounded-full"
                      />
                    )}
                    <p
                      className={cn(
                        "hidden sm:block text-xs font-bold uppercase tracking-widest mb-1",
                        isActive ? "text-emerald-500" : "text-zinc-400",
                      )}
                    >
                      {exp.duration}
                    </p>

                    <h4
                      className={cn(
                        "font-bold transition-colors",
                        isActive
                          ? "text-black dark:text-white"
                          : "text-zinc-500",
                      )}
                    >
                      {exp.company}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE CONTENT PANEL --- */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 shadow-2xl"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-lg">
                        {activeTab.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white">
                        {activeTab.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {activeTab.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {activeTab.location}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-tighter">
                    {activeTab.company}
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3 space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      Key Impact <ChevronRight size={12} />
                    </h4>
                    <ul className="space-y-4">
                      {activeTab.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-zinc-600 dark:text-zinc-300 flex items-start gap-3 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Stack Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTab.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/10 text-xs font-semibold text-black dark:text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mt-10">
                      <Award className="w-6 h-6 text-emerald-500 mb-2" />
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        Focused on{" "}
                        <span className="text-black dark:text-white font-bold">
                          Performance & Reliability
                        </span>{" "}
                        across {activeTab.period}.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
