"use client";

import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Search, Terminal, ArrowRight, Layers, Cpu } from "lucide-react";

const SKILLS = [
  { name: "React", category: "web", icon: "react" },
  { name: "Angular", category: "web", icon: "angular" },
  { name: "ASP.NET Core", category: "web", icon: "dotnet" },
  { name: "TypeScript", category: "web", icon: "typescript" },
  { name: "Python", category: "ai", icon: "python" },
  { name: "Flask", category: "ai", icon: "flask" },
  { name: "OpenAI", category: "ai", icon: "openai" },
  { name: "n8n", category: "ai", icon: "n8n" },
  { name: "Azure", category: "cloud", icon: "azure" },
  { name: "AWS", category: "cloud", icon: "aws" },
  { name: "Docker", category: "cloud", icon: "docker" },
  { name: "Kubernetes", category: "cloud", icon: "kubernetes" },
  { name: "Terraform", category: "cloud", icon: "terraform" },
  { name: "PostgreSQL", category: "cloud", icon: "postgres" },
  { name: "GitHub", category: "tools", icon: "github" },
  { name: "VS Code", category: "tools", icon: "vscode" },
];

const CATEGORIES = ["all", "web", "ai", "cloud", "tools"];

const SkillCard = ({ skill }: { skill: (typeof SKILLS)[0] }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      <div className="h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0A0A0A] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-500">
        <div
          style={{ transform: "translateZ(30px)" }}
          className="flex flex-col gap-6"
        >
          <div className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500">
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {skill.name}
            </h4>
            <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-400 mt-1">
              {skill.category}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ModernTechStack() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredSkills = useMemo(() => {
    return SKILLS.filter(
      (s) =>
        (filter === "all" || s.category === filter) &&
        s.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [filter, search]);

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Fixed Header Info */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-24 h-fit">
            <div className="space-y-4">
                <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-500 font-bold tracking-[0.2em] uppercase text-xs"
            >
              <Cpu size={16} />
              Technical Arsenal
            </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-black dark:text-white"
              >
                Tech <br /> <span className="text-zinc-400">Stack.</span>
              </motion.h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-sm font-medium">
                A specialized selection of technologies I use to build scalable,
                high-performance applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative group max-w-sm">
                <Search
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-4 pl-8 pr-4 outline-none focus:border-zinc-900 dark:focus:border-white transition-all text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                      filter === cat
                        ? "bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-black"
                        : "border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-zinc-100 dark:border-zinc-900 hidden lg:block">
              <div className="flex items-center gap-4 text-zinc-400">
                <Terminal size={18} />
                <span className="text-xs font-bold tracking-widest uppercase">
                  System Operational
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrollable Grid */}
          <div className="lg:col-span-8">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-40 border-2 border-dashed border-zinc-100 dark:border-zinc-900 rounded-3xl">
                <p className="text-zinc-400 font-medium">
                  No matches found for your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
