"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import useSectionInView from "@/lib/hooks";
function Projects() {

  const { ref } = useSectionInView('Projects', 0.1);  // Changed threshold from 0.5 to 0.1
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full">
      <SectionHeading>My Project</SectionHeading>

      {/* Mobile Swipe Hint */}
      <div className="flex sm:hidden justify-center items-center gap-2 mb-4 text-stone-500 dark:text-stone-400 text-sm animate-pulse">
        <span>Swipe to explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

      <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 sm:grid sm:overflow-visible sm:gap-0 sm:pb-0 sm:mx-0 sm:px-0 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
