"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVarients = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

import useSectionInView from "@/lib/hooks";
function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVarients}
            custom={index}
            initial="initial"
            whileInView="animate"
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
