"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import useSectionInView from "@/lib/hooks";
function Projects() {
  
  const {ref} = useSectionInView('Projects',0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Project</SectionHeading>
      <div>
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
