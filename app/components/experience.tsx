"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import "react-vertical-timeline-component/style.min.css";
import { InView } from "react-intersection-observer";
import useSectionInView from "@/lib/hooks";
import { TracingBeam } from "./tracing-beam";
function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.3);
  return (
    <section
      ref={ref}
      id="experience"
      className="px-6 scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>

      <TracingBeam
        className={`lg:relative  ${
          inView === true ? "visible" : "invisible"
        }   md:left-20 py-10`}
      >
        <VerticalTimeline
          lineColor="transparent"
          className="lg:absolute  lg:-left-[7.5rem] md:right-[10%] "
        >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                className=""
                contentStyle={{
                  background: "#ffffff",
                  // boxShadow: "2px 2px 2px black",
                  border: "1px solid rgb(0 0 0 / 0.1)",
                  borderRadius: "1rem",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  // WebkitBoxShadow: "2px 2px 20px #bebebe ",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                }}
              >
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p>{item.location}</p>
                <p className="">{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </TracingBeam>
    </section>
  );
}

export default Experience;
