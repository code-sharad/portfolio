"use client";

import Image from "next/image";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scaleOpacity,
      }}
      className="sm:mb-8  mb-3 group "
    >
      <section className=" bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition rounded-md sm:group-even:pl-8 mb-28">
        <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-750">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl sm:group-even:-right-[initial] sm:group-even:-left-40
          group-hover:-translate-x-3
          group-hover:translate-y-3
          groupt-hover:-rotate-10
          group-hover:scale-[1.04]
          transition"
          />{" "}
        </div>
      </section>
    </motion.div>
  );
}

type ProjectProps = (typeof projectsData)[number];

export default Project;
