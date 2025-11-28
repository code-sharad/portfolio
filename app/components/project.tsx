"use client";

import Image from "next/image";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { LuLink } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";

function Project(props: ProjectProps) {
  const { title, description, tags, imageUrl } = props;
  const url = (props as any).url as string | undefined;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [0, 30]); // Parallax effect

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scaleOpacity,
      }}
      className="group sm:mb-8 last:mb-0 sm:last:mb-8 w-[85vw] sm:w-full flex-shrink-0 snap-center flex flex-col"
    >
      <section className="relative bg-white max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-stone-900 dark:border-white/10 dark:hover:bg-stone-800 flex-1 flex flex-col">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] flex-grow">

          {/* Mobile Image */}
          {imageUrl ? (
             <div className="block sm:hidden mb-4 rounded-lg overflow-hidden shadow-md">
               <Image
                 src={imageUrl}
                 alt={title}
                 quality={95}
                 className="w-full h-auto object-cover"
               />
             </div>
          ) : null}

          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">{title}</h3>
          </div>
          <p className="mt-2 leading-relaxed text-stone-700 dark:text-stone-200">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-stone-900/80 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/10 dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {url ? (
            <div className="mt-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/50 dark:bg-stone-800 dark:hover:bg-stone-700"
              >
                View Project
                <LuLink className="w-4 h-4" />
              </a>
            </div>
          ) : null}
        </div>

        {/* Desktop Image */}
        {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
            />
        ) : null}
      </section>
    </motion.div>
  );
}

type ProjectProps = (typeof projectsData)[number] & { url?: string };

export default Project;
