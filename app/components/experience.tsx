"use client";

import React from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/lib/hooks";
import TimelineComponent from "./timeline";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <section
      ref={ref}
      id="experience"
      className="px-6 scroll-mt-28 mb-28 sm:mb-40 max-w-2xl mx-auto"
    >
      <SectionHeading>My Experience</SectionHeading>
      <TimelineComponent />
    </section>
  );
}

export default Experience;
