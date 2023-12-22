"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-session-context";
import useSectionInView from "@/lib/hooks";
function About() {
  const {ref} = useSectionInView('About',0.5);
 

  return (
    <motion.section
      ref={ref}
      id="About"
      className="mb-28 max-w-[45rem] text-center leading-7 sm:leading-8 sm:sm-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a dedicated student currently pursuing a B.Tech degree at the
        Maharashtra Institute of Technology. I am currently in my second year of
        the program, and my educational journey is marked by a deep passion for
        computer science. My primary area of focus is full-stack web
        development, and I thrive on the creative challenges that the world of
        programming presents.{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic underline decoration-wavy underline-offset-4  decoration-indigo-500 decoration-1">
          My favorite part of programming
        </span>{" "}
        is the problem-solving aspect. I{" "}
        <span className="underline decoration-wavy underline-offset-4  decoration-indigo-500 decoration-1">
          love
        </span>{" "}
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-medium text-indigo-500">
          React, Next.js, Node.js, and MongoDB{" "}
        </span>
        Outside of my academic and coding pursuits, I have a strong interest in
        self-development. I find inspiration in reading books on personal growth
        and self-improvement. These books not only expand my knowledge but also
        help me develop a well-rounded and balanced perspective on life.{" "}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime. I also enjoy playing badminton and{" "}
        <span className="font-medium">learning new things</span>. 
        {/* I am currently */}
        {/* learning about{" "} */}
        {/* <span className="font-medium">Constitution of India and Fitness</span>. */}
      </p>
    </motion.section>
  );
}

export default About;
