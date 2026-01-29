"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
  { name: "Expertise", href: "/tools" },
  { name: "Blogs", href: "/blog" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/codestellar", label: "Github" },
  { icon: Linkedin, href: "https://linkedin.com/in/codestellar", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/codestellar/", label: "Twitter" },
  { icon: Mail, href: "mailto:gaurav.madaan@niwi.ai", label: "Email" },
];

export default function AnimatedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white dark:bg-[#030303] pt-20 pb-10 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Massive CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              LET'S BUILD <br /> 
              <span className="text-emerald-500">SOMETHING EPIC.</span>
            </h2>
            
            <motion.a
              href="mailto:gaurav.madaan@niwi.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-3 py-3 pl-4 sm:px-4 sm:py-4 sm:pl-6 rounded-full font-medium text-md sm:text-lg group transition-shadow hover:shadow-xl hover:shadow-emerald-500/20"
            >
              Start a Conversation
              <div className="bg-emerald-500 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={20} className="text-white dark:text-zinc-900" />
              </div>
            </motion.a>
          </motion.div>

          {/* Right Side: Links & Brand */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation Group */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Navigation</h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all text-lg"
                    >
                      <span>{link.name}</span>
                      <ArrowRight 
                        size={16} 
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Group */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Socials</h4>
              <ul className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target="_blank"
                      className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all text-lg"
                    >
                      <link.icon size={18} />
                      <span>{link.label}</span>
                      <ArrowUpRight 
                        size={16} 
                        className="opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ease-out text-emerald-500" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold tracking-tight">
            <div className="p-2 bg-emerald-500 rounded-lg">
              {/* <Cpu size={20} className="text-white" /> */}
            </div>
            CODESTELLAR <span className="text-zinc-400 font-normal ml-1">© {currentYear}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Link href="https://niwi.ai/" target='_blank'>
                NIWIAI
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}