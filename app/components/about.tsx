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
      className="my-28 max-w-[45rem] text-center leading-7 sm:leading-8 sm:sm-40 scroll-mt-28"
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

        </span>
      </SectionHeading>
      <p className="mb-3">
        I’m a final-year B.Tech student at the Maharashtra Institute of
        Technology with a strong passion for {" "}
        <span className="font-medium">full‑stack web development</span> and
        emerging technologies. My core stack includes {" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>,
        and I enjoy building applications that balance functionality with a great
        user experience.
      </p>

      <p className="mb-3">
        For me, programming is all about {" "}
        <span className="italic">problem‑solving</span>—breaking down complex
        issues and finding elegant solutions that work in the real world. I’m
        also exploring {" "}
        <span className="font-medium">Agentic AI</span> and {" "}
        <span className="font-medium">Generative AI</span>, focusing on how
        intelligent agents and large language models can create smarter, more
        adaptive applications. Over time, I’ve gained experience with cloud
        technologies, Docker, and modern deployment workflows, allowing me to
        take projects from idea to production efficiently.
      </p>

      <p>
        Beyond coding, I’m deeply interested in self‑development and often read
        books on personal growth to sharpen my mindset and broaden my
        perspective. I also enjoy playing badminton, exploring anime, and gaming
        to recharge and stay creative.
      </p>
    </motion.section>
  );
}

export default About;
