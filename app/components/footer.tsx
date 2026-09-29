"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Animated glyph icon that randomly changes characters
// Animated glyph icon that randomly changes characters
function GlyphIcon() {
  const glyphChars = "✦✧❖⟐⟡◈";
  const [currentGlyph, setCurrentGlyph] = useState("⬡");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * glyphChars.length);
      setCurrentGlyph(glyphChars[randomIndex]);
      setKey(prev => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute text-2xl font-light text-stone-400 dark:text-stone-500"
          aria-hidden="true"
        >
          {currentGlyph}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Main content */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Brand with animated glyph icon */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <GlyphIcon />
            </div>

            <div>  <Link
              href="/"
              className="text-lg font-semibold text-stone-900 dark:text-stone-100 tracking-tight"
            >
              Sharad Bhadait
            </Link>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Building products that matter.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/code-sharad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
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
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
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
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar with Artist's Mark */}
        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <p className="text-sm text-stone-400 dark:text-stone-500">
            © {currentYear} Sharad. All rights reserved.
          </p>

          {/* Artist's Mark - subtle signature seal */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 229 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-30 hover:opacity-60 transition-opacity duration-300"
            aria-label="Artist's Mark"
          >
            <defs>
              <linearGradient id="footer-signature-gradient" x1="0" y1="0" x2="229" y2="227" gradientUnits="userSpaceOnUse">
                <stop offset="0%" className="text-stone-400 dark:text-stone-500" stopColor="currentColor" />
                <stop offset="100%" className="text-stone-600 dark:text-stone-300" stopColor="currentColor" />
              </linearGradient>
            </defs>
            <path
              d="M51.5 219.5C58.1671 185.2 66.0075 135.981 70.7196 101.227C73.9047 77.7357 78.4941 52.3142 72.967 28.7831C71.0054 20.4318 67.7516 11.6062 63.4156 4.60071C60.4799 -0.142377 60.4146 2.19306 61.3843 6.87427C66.5525 31.8236 75.44 55.4646 85.8463 77.8714C97.7341 103.468 114.222 127.66 120.594 156.413C123.171 168.04 124.225 184.176 115.624 192.841C107.052 201.478 94.1371 201.706 83.9447 198.164C61.4043 190.33 41.8684 174.183 26.1607 153.622C13.8242 137.475 2.15189 118.158 2.00119 95.3365C1.90373 80.5773 7.80524 67.1681 18.8566 60.1997C34.9018 50.0824 45.2522 66.2108 46.7762 84.7955C49.4135 116.957 37.2796 152.012 26.5929 180.698C22.1868 192.525 19.1437 199.725 13.6704 210.461C11.2081 215.291 1.74045 227.578 5.71803 224.516C26.4601 208.547 -14.0936 236.784 26.8954 207.361C63.1108 181.365 101.234 160.126 140.259 140.911C168.756 126.88 197.844 114.577 227 102.674"
              stroke="url(#footer-signature-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
