"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

// Highlight marker component - Attio-style subtle marker effect
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block text-stone-900 dark:text-stone-100 font-medium">
    <span className="relative z-10">{children}</span>
    <span
      className="absolute inset-0 -inset-x-1 bottom-0 h-[90%] bg-amber-200/60 dark:bg-amber-500/10 -z-0 rounded-sm"
      aria-hidden="true"
    />
  </span>
);

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-28 max-w-3xl mx-auto px-6 scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SectionHeading>
        <span className="inline-flex items-center gap-2">
          About
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Technologist.webp"
            alt="Technologist"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />
        </span>
      </SectionHeading>

      <div className="space-y-6">
        {/* Intro paragraph */}
        <p className="text-stone-600 dark:text-stone-400 leading-[1.8] text-[1.0625rem]">
          I&apos;m a final-year B.Tech student at the{" "}
          <Highlight>Maharashtra Institute of Technology</Highlight>{" "}
          with a passion for building products that solve real problems. I specialize in{" "}
          <Highlight>full-stack development</Highlight>
          , working primarily with React, Next.js, Node.js, and PostgreSQL.
        </p>

        {/* Core interests */}
        <p className="text-stone-600 dark:text-stone-400 leading-[1.8] text-[1.0625rem]">
          What excites me most is the intersection of{" "}
          <Highlight>AI and software engineering</Highlight>
          . I&apos;m exploring agentic AI systems and how large language models can create
          smarter, more adaptive applications. From automated workflows to intelligent assistants—
          I believe AI will fundamentally change how we build and interact with software.
        </p>

        {/* Technical depth */}
        <p className="text-stone-600 dark:text-stone-400 leading-[1.8] text-[1.0625rem]">
          I care about the details: clean architecture, type safety, and developer experience.
          I&apos;ve worked with Docker, cloud platforms, and modern CI/CD pipelines to ship
          production-grade applications. For me, great software is about{" "}
          <Highlight>solving problems elegantly</Highlight>—not just making things work.
          When I&apos;m not coding, you&apos;ll find me reading about personal development,
          playing badminton, or exploring new anime series.
        </p>


      </div>
    </motion.section>
  );
}

export default About;
