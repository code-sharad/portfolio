"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVarients = {
  initial: {
    opacity: 0.3,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    // transition: {
    //   delay: 0.02 * index,
    // },
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
      <ul className="flex flex-wrap  justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVarients}
            // custom={index}
            initial="initial"
            // whileInView="animate"
            whileInView="animate"
            exit={{ opacity: 0 }}
            className="bg-white border shadow-lg border-indigo-600/[0.3] rounded-xl px-5 py-3"
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
