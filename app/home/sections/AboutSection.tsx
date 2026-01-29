"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CornerDownLeft, Terminal, Linkedin, Github, Mail } from "lucide-react";

const ABOUT_DATA = [
  { label: "self.currentLocation", value: '"LDH, India"' },
  {
    label: "self.interests",
    value: '["cloud_architecture", "ai_strategy", "mentoring"]',
  },
  { label: "self.education", value: '"B.Tech - Giani Zail Singh College of Engg. and Technology, Bathinda"' },
  {
    label: "self.skills",
    value:
      '["C#", "AspNet Core", "Azure", "Next.js", "TypeScript", "Microservices"]',
  },
  { label: "co-founder_CTO", value: '"NIWIAI Private Limited"' },
  { label: "self.experience", value: '"12+ Years Industry Excellence"' },
];

export default function TerminalAbout() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [contactText, setContactText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const CONTACT_FULL_TEXT = "self.contactMe() [Linkedin, Github, Email]";

  const startSequence = () => {
    if (!hasStarted) setHasStarted(true);
  };

  // Typewriter for ABOUT_DATA
  useEffect(() => {
    if (!hasStarted || currentLineIndex >= ABOUT_DATA.length) return;

    const line = ABOUT_DATA[currentLineIndex];
    const fullLineText = `> ${line.label} ${line.value}`;

    if (displayedText.length < fullLineText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullLineText.slice(0, displayedText.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setDisplayedText("");
      }, 400);
      return () => clearTimeout(pause);
    }
  }, [hasStarted, currentLineIndex, displayedText]);

  // Typewriter for Contact Section
  useEffect(() => {
    if (currentLineIndex === ABOUT_DATA.length && !showContact) {
      setShowContact(true);
    }

    if (showContact && contactText.length < CONTACT_FULL_TEXT.length) {
      const timeout = setTimeout(() => {
        setContactText(CONTACT_FULL_TEXT.slice(0, contactText.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, showContact, contactText]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") startSequence();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-20 bg-zinc-50 dark:bg-[#030303] transition-colors duration-500 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          onClick={startSequence}
          className="relative group cursor-pointer w-full min-h-[480px] bg-zinc-900 dark:bg-[#0c0c0c] rounded-2xl border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden font-mono text-sm md:text-base"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-800 dark:bg-[#1a1a1a] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-xs">
              <Terminal size={14} />
              <span>gaurav—zsh</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-4">
            {/* Prompt */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-zinc-100 flex items-center gap-2">
                self.learnAboutMe()
              </span>
            </div>
            {!hasStarted && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="flex items-center gap-2 text-zinc-500 text-xs"
              >
                <CornerDownLeft size={14} />
                <span>Press Enter / Tap</span>
              </motion.div>
            )}

            {/* Status Message */}
            <AnimatePresence>
              {hasStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blue-400 italic text-sm"
                >
                  <span className="text-emerald-500 mr-2">ok</span> Fetching
                  identity parameters...
                </motion.div>
              )}
            </AnimatePresence>

            {/* Finished Lines */}
            <div className="space-y-2">
              {ABOUT_DATA.slice(0, currentLineIndex).map((line, i) => (
                <div key={i} className="flex gap-2 flex-wrap">
                  <span className="text-emerald-500/80">&gt; {line.label}</span>
                  <span className="text-amber-200 break-all">{line.value}</span>
                </div>
              ))}

              {/* Currently Typing Line */}
              {hasStarted && currentLineIndex < ABOUT_DATA.length && (
                <div className="text-amber-200 break-all">
                  <span className="text-emerald-500/80">
                    {displayedText.startsWith("> ") ? "" : "> "}
                  </span>
                  {displayedText}
                  <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse" />
                </div>
              )}
            </div>

            {/* Contact Section */}
            {showContact && (
              <div className="pt-4 border-t border-white/5 mt-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>&gt; {contactText}</span>
                  {contactText.length < CONTACT_FULL_TEXT.length && (
                    <span className="inline-block w-2 h-4 bg-emerald-500 animate-pulse" />
                  )}
                </div>

                {contactText.length === CONTACT_FULL_TEXT.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap items-center gap-4 pl-4"
                  >
                    <span className="text-zinc-500">[</span>
                    {[
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://linkedin.com/in/codestellar",
                      },
                      {
                        icon: Github,
                        label: "Github",
                        href: "https://github.com/codestellar",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        href: "mailto:gaurav.madaan@niwi.ai",
                      },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        className="flex items-center gap-1.5 text-emerald-400 hover:text-white transition-colors group"
                      >
                        <link.icon
                          size={14}
                          className="group-hover:scale-110 transition-transform"
                        />
                        <span className="underline underline-offset-4 decoration-emerald-500/30 hover:decoration-emerald-500">
                          {link.label}
                        </span>
                      </a>
                    ))}
                    <span className="text-zinc-500">]</span>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
