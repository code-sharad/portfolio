"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useSectionInView from "@/lib/hooks";
import { SectionGrid } from "./grid-background";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-[85vh] flex flex-col items-center justify-center px-6 scroll-mt-[100rem] relative"
    >
      <SectionGrid />
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative">
          <Image
            src="/sharad.png"
            alt="Sharad"
            width="224"
            height="224"
            quality={100}
            priority={true}
            className="h-36 w-36 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-3xl object-cover border-none border-white dark:border-stone-800 shadow-xl"
          />

        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
          Hi, I'm Sharad
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-stone-500 dark:text-stone-400 leading-relaxed">
          Full-stack developer building web applications with{" "}
          <span className="text-stone-900 dark:text-stone-100 font-medium">React</span>,{" "}
          <span className="text-stone-900 dark:text-stone-100 font-medium">Next.js</span>, and{" "}
          <span className="text-stone-900 dark:text-stone-100 font-medium">AI</span>.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {/* Primary CTA */}
        <a
          href="mailto:codesharad@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm"
        >
          Get in touch
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Secondary CTA */}
        <a
          href="/Sharad_Bhadait.pdf"
          download="Sharad_Bhadait"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
        >
          Download CV
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 flex items-center gap-4"
      >
        <a
          href="https://github.com/code-sharad"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-all"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sharad-bhadait/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-all"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://x.com/BhadaitSharad"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-all"
          aria-label="X"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
