"use client";

import Image from "next/image";
import Link from "next/link";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { BsArrowUpRight } from "react-icons/bs";

function Project(props: ProjectProps) {
  const { title, description, tags, imageUrl } = props;
  const url = (props as any).url as string | undefined;
  const slug = (props as any).slug as string | undefined;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group w-[85vw] sm:w-full max-w-3xl flex-shrink-0 snap-center mb-0 sm:mb-12 last:mb-0"
    >
      <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-stone-900/50 transition-all duration-300 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-lg hover:shadow-stone-200/50 dark:hover:shadow-stone-900/50">

        {/* Image */}
        {imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-stone-800">
            <Image
              src={imageUrl}
              alt={title}
              fill
              quality={95}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-stone-500 dark:text-stone-400 leading-relaxed text-[0.9375rem] line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/80 rounded-md"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium text-stone-400 dark:text-stone-500">
                +{tags.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 pt-5 border-t border-stone-100 dark:border-stone-800 flex items-center gap-3">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-full hover:bg-stone-800 dark:hover:bg-white transition-colors"
              >
                View Live
                <BsArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {slug && (
              <Link
                href={`/project/${slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

type ProjectProps = (typeof projectsData)[number] & { url?: string };

export default Project;
