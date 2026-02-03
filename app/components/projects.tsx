"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView('Projects', 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full px-4">
      <SectionHeading>Projects</SectionHeading>

      {/* Mobile Swipe Hint */}
      <div className="flex sm:hidden justify-center items-center gap-2 mb-6 text-stone-400 dark:text-stone-500 text-sm">
        <span>Swipe to explore</span>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Backhand%20Index%20Pointing%20Right.webp"
          alt="Swipe right"
          className="w-6 h-6"
        />
      </div>

      {/* Project Grid */}
      <div className="
        flex w-full overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 
        sm:grid sm:grid-cols-1 md:grid-cols-2 sm:overflow-visible sm:gap-8 sm:pb-0 sm:px-0
        scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
        max-w-5xl mx-auto
      ">
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
