"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Mail,
  Terminal,
  Cpu,
  MessageCircle,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HeroSection() {
  const name = "Gaurav Madaan";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#030303] transition-colors duration-500 pt-38 sm:30 md:pt-14">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-neutral-200 dark:bg-zinc-800/30 rounded-full blur-[120px] pointer-events-none"
        />
      </div>

      <div className="container relative z-10 px-4 max-w-7xl py-8 lg:py-0">
        {/* Add vertical padding that adjusts for screen size */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* --- LEFT CONTENT --- */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-10">
            {/* Adjust spacing for different screens */}

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  CTO & Co-founder • NIWIAI
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white leading-[0.85] mt-4 lg:mt-0">
                <div className="flex flex-wrap">
                  {name.split("").map((char, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors cursor-default"
                      initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
                <span className="block text-xl sm:text-2xl md:text-4xl font-light text-neutral-400 mt-4 tracking-normal">
                  Architecting Tomorrow.
                </span>
              </h1>
            </div>

            <div className="space-y-4 max-w-xl">
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                With{" "}
                <span className="text-black dark:text-white font-semibold">
                  13+ years
                </span>{" "}
                of engineering mastery, I bridge the gap between complex
                business logic and high-performance cloud solutions.
              </p>

              <div className="flex items-center gap-3 text-black dark:text-white font-mono text-base sm:text-lg bg-black/5 dark:bg-white/5 w-fit px-4 py-2 rounded-lg border border-black/5 dark:border-white/10">
                <Terminal className="w-4 h-4" />
                <Typewriter
                  words={[
                    "Microservices Expert",
                    "Cloud Architect",
                    "TEDx Speaker",
                    "Technical Leader",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="default"
                  className="h-10 sm:h-12 px-12 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-all font-semibold text-sm sm:text-md group shadow-2xl shadow-black/20"
                >
                  Let's Connect
                  <ArrowUpRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                </Button>
              </Link>

              {/* Combined Social Links */}
              <div className="flex items-center gap-2 sm:gap-4 p-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm">
                <Link
                  href="https://www.linkedin.com/in/codestellar/"
                  target="_blank"
                  className="p-2 sm:p-3 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://github.com/codestellar"
                  target="_blank"
                  className="p-2 sm:p-3 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="mailto:gaurav.madaan@niwi.ai"
                  className="p-2 sm:p-3 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* --- RIGHT VISUAL --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 relative perspective-1000 mt-8 lg:mt-0"
          >
            <div className="relative p-1 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent shadow-xl sm:shadow-2xl">
              <div className="bg-white dark:bg-[#0a0a0a] rounded-[1.8rem] sm:rounded-[2.8rem] p-6 sm:p-8 space-y-6 sm:space-y-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-500/10 blur-3xl rounded-full" />

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white">
                    Technical Core
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Asp.Net Core",
                      "Angular",
                      "Azure DevOps",
                      "Microservices",
                      "AI/ML",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-[10px] sm:text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter border border-black/5 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50 text-black dark:text-white">
                      Public Presence
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    TEDx Speaker & MRSPTU Industry Representative.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-3 sm:p-4 bg-white dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-black/5 dark:border-white/10 hidden xl:block"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-tighter">
                  Available for Advisory
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
