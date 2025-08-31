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
  const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scaleOpacity,
      }}
      className="sm:mb-8 mb-3 group"
    >
      <section className="relative max-w-[42rem] mb-28 overflow-hidden rounded-xl border border-black/5 bg-gray-100 lg:bg-white/60 lg:backdrop-blur-sm shadow-md transition hover:bg-white/80 hover:shadow-xl ring-1 ring-black/5 sm:pr-8 sm:group-even:pl-8">
        <div className="py-5 pb-7 px-5 sm:pl-10 sm:pr-6 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] gap-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h3>

          </div>
          <p className="mt-1 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-900/80 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/50"
              >
                View Project
                <LuLink className="w-4 h-4" />
              </a>
            </div>
          ) : null}
          {imageUrl ? (
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
            />
          ) : null}{" "}
        </div>
      </section>
    </motion.div>
  );
}

type ProjectProps = (typeof projectsData)[number] & { url?: string };

export default Project;
