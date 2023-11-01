import { type } from "os";
import React from "react";

type sectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: sectionHeadingProps) {
  return <h1 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h1>;
}

export default SectionHeading;
