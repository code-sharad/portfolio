"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-session-context";
import useSectionInView from "@/lib/hooks";
function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-7 sm:leading-8 sm:sm-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>
        <span className="flex flex-col font-serif items-center">
          {" "}
          About me{" "}
          <svg
            width="125"
            height="8"
            viewBox="0 0 125 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative bottom-1"
          >
            <path
              d="M1 6.99999C16.687 3.5864 32.9688 2.50884 49.317 1.74115C75.9148 0.492128 96.8903 1.39152 123.5 4.74113"
              stroke="#5D5D5D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </SectionHeading>
      <p className="mb-3">
        I am a dedicated student currently pursuing a B.Tech degree at the
        Maharashtra Institute of Technology. I am currently in my third year of
        the program, and my educational journey is marked by a deep passion for
        computer science. My primary area of focus is full-stack web
        development, and I thrive on the creative challenges that the world of
        programming presents.{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic ">
          My favorite part of programming
        </span>{" "}
        is the problem-solving aspect. I{" "}
        <span className="">
          love
        </span>{" "}
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-medium ">
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
