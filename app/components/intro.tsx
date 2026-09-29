"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useSectionInView from "@/lib/hooks";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-[85vh] flex flex-col items-center justify-center px-6 scroll-mt-[100rem] relative"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 relative z-10"
      >
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-300 dark:from-stone-700 dark:via-stone-800 dark:to-stone-700 rounded-3xl blur-2xl opacity-50 dark:opacity-20 scale-105" />

        {/* Gradient ring effect */}
        <div className="relative p-1 rounded-3xl bg-transparent ">
          <div className="relative p-2 rounded-3xl bg-transparent">
            <Image
              src="/sharad-unbac.png"
              alt="Portrait of Sharad Bhadait"
              width="224"
              height="224"
              sizes="(max-width: 640px) 144px, 224px"
              priority={true}
              className="h-36 w-36 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-3xl object-cover shadow-xl dark:shadow-md shadow-stone-100 dark:shadow-stone-950 bg-transparent backdrop-blur-lg border-[1px] border-stone-200 dark:border-stone-900"
            />
          </div>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center max-w-2xl z-10"
      >
        <h1 className="font-garamond italic font-normal text-4xl sm:text-5xl md:text-6xl tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
          Hi, I'm Sharad Bhadait{" "}
          <img
            src="/emojis/waving-hand.webp"
            alt="Waving hand"
            className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-stone-500 dark:text-stone-400 leading-relaxed">
          I design and build{" "}
          <span className="text-stone-900 dark:text-stone-100 font-medium">web applications</span> end-to-end —
          from <span className="text-stone-900 dark:text-stone-100 font-medium">database schema</span> to{" "}
          <span className="text-stone-900 dark:text-stone-100 font-medium">deployed product</span>.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 z-10"
      >
        {/* Primary CTA */}
        <a
          href="mailto:bhadaitsharad7@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors shadow-sm"
        >
          Get in touch
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Secondary CTA */}
        <a
          href="/Sharad_Bhadait_CV.pdf"
          download="Sharad_Bhadait_CV"
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
        className="mt-8 flex items-center gap-4 z-10"
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 z-10"
      >
        <Link
          href="/post"
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-stone-500 dark:text-stone-400 rounded-full border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-300 hover:shadow-sm hover:bg-stone-50 dark:hover:bg-stone-900/50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Read my posts
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

export default Intro;
