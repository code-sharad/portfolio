import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return <h1 className="text-3xl font-medium capitalize mb-8 text-center text-gradient font-garamond italic underline decoration-[1px] underline-offset-[6px]">{children}</h1>;
}

export default SectionHeading;
