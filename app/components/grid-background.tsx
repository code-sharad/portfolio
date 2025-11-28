import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full dark:bg-stone-950 bg-stone-100  dark:bg-grid-white/[0.03] bg-grid-black/[0.05] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-stone-950 bg-stone-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
}
