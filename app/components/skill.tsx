"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";

// Infinite scrolling skills with alternating row directions
function SkillsMarquee() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  interface SkillRow {
    skills: string[];
    y: number;
    offset: number;
    direction: number; // 1 = right, -1 = left
    speed: number;
  }

  const rowsRef = useRef<SkillRow[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rowHeight = 50;
    const fontSize = 16;
    const baseSpeed = 0.5;

    const initRows = (width: number, height: number) => {
      const numRows = Math.ceil(height / rowHeight);
      const rows: SkillRow[] = [];

      for (let i = 0; i < numRows; i++) {
        // Shuffle skills for each row
        const shuffled = [...skillsData].sort(() => Math.random() - 0.5);
        // Duplicate to create seamless loop
        const duplicated = [...shuffled, ...shuffled, ...shuffled];

        rows.push({
          skills: duplicated,
          y: i * rowHeight + rowHeight / 2 + 8,
          offset: Math.random() * 200,
          direction: i % 2 === 0 ? 1 : -1, // Alternate direction per row
          speed: baseSpeed + Math.random() * 0.3,
        });
      }
      rowsRef.current = rows;
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.offsetWidth * dpr;
        canvas.height = parent.offsetHeight * dpr;
        canvas.style.width = `${parent.offsetWidth}px`;
        canvas.style.height = `${parent.offsetHeight}px`;
        ctx.scale(dpr, dpr);

        initRows(parent.offsetWidth, parent.offsetHeight);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      if (!ctx || !canvas) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, width, height);
      ctx.font = `500 ${fontSize}px "SF Mono", "Fira Code", "Consolas", monospace`;

      rowsRef.current.forEach((row) => {
        // Move offset based on direction
        row.offset += row.speed * row.direction;

        // Calculate total width of all skills in row
        const gap = 60;
        let totalWidth = 0;
        row.skills.forEach((skill) => {
          totalWidth += ctx.measureText(skill).width + gap;
        });
        const singleSetWidth = totalWidth / 3; // We have 3 copies

        // Wrap around for seamless loop
        if (row.direction === 1 && row.offset > singleSetWidth) {
          row.offset -= singleSetWidth;
        } else if (row.direction === -1 && row.offset < -singleSetWidth) {
          row.offset += singleSetWidth;
        }

        // Draw skills
        let x = row.offset - singleSetWidth;
        row.skills.forEach((skill) => {
          const textWidth = ctx.measureText(skill).width;

          // Only draw if visible (with some buffer)
          if (x + textWidth > -100 && x < width + 100) {
            // Edge fade effect
            const edgeFade = Math.min(
              (x + 50) / 80,
              (width - x - 50) / 80,
              1
            );
            const alpha = Math.max(0, Math.min(1, edgeFade)) * (isDark ? 0.6 : 0.7);

            if (alpha > 0.05) {
              ctx.fillStyle = isDark
                ? `rgba(168, 162, 158, ${alpha})`
                : `rgba(87, 83, 78, ${alpha})`;
              ctx.fillText(skill, x, row.y);
            }
          }

          x += textWidth + gap;
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isDark]);

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full skills-mask"
      />
      <style>{`
        .skills-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        @media (max-width: 640px) {
          .skills-mask {
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 100%);
          }
        }
      `}</style>
    </div>
  );
}

function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[53rem] px-4 scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <SkillsMarquee />
    </section>
  );
}

export default Skills;
