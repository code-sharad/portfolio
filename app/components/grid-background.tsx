import React from "react";

// Grid pattern SVGs for per-section use
export const gridSvgLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='rgba(0,0,0,0.05)'%3E%3Cpath d='M24 0L0 0 0 24'/%3E%3C/svg%3E")`;
export const gridSvgDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='rgba(255,255,255,0.04)'%3E%3Cpath d='M24 0L0 0 0 24'/%3E%3C/svg%3E")`;

// Simple background wrapper without full-page grid
export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full dark:bg-stone-950 bg-stone-100 relative">
      <div className="relative z-20 w-full flex items-center justify-center min-h-screen">{children}</div>
    </div>
  );
}

// Reusable section grid overlay - add to individual sections
export function SectionGrid({ className = "" }: { className?: string }) {
  return (
    <>
      {/* Light mode grid */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none dark:hidden ${className}`}
        style={{
          backgroundImage: gridSvgLight,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />
      {/* Dark mode grid */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none hidden dark:block ${className}`}
        style={{
          backgroundImage: gridSvgDark,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />
    </>
  );
}
