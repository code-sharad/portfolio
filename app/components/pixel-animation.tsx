"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";

type AnimationStyle =
    | "glyph-matrix"      // Nothing Phone Glyph Matrix style
    | "organic-pulse"     // Organic breathing/pulsing effect
    | "matrix-rain"       // Matrix-style falling pixels
    | "reactive-wave"     // Mouse-reactive wave patterns
    | "constellation"     // Connected nodes forming constellations
    | "dna-helix"         // Double helix DNA-style animation
    | "neural-network"    // Neural network-style connections
    | "skills-matrix";    // Tech skills floating animation

interface PixelAnimationProps {
    style?: AnimationStyle;
    intensity?: number;       // 0-1, controls animation visibility
    speed?: number;           // Animation speed multiplier
    pixelSize?: number;       // Size of each pixel block
    colorScheme?: "monochrome" | "gradient" | "rainbow";
    interactive?: boolean;    // Enable mouse interaction
}

// ========================
// GLYPH MATRIX EFFECT - Nothing Phone Inspired
// ========================
export function GlyphMatrixEffect({
    intensity = 0.3,
    speed = 4,
    pixelSize = 12
}: Omit<PixelAnimationProps, 'style'>) {
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;
        const glyphChars = "○●◐◑◒◓◔◕◖◗◦◎◉◌◍◈◇◆▪▫□■";

        // Store random values for each pixel for consistent random behavior
        let pixelData: { phase: number; speed: number; char: number; depth: number }[][] = [];

        const initPixelData = (cols: number, rows: number) => {
            pixelData = [];
            for (let row = 0; row < rows; row++) {
                pixelData[row] = [];
                for (let col = 0; col < cols; col++) {
                    pixelData[row][col] = {
                        phase: Math.random() * Math.PI * 2,      // Random starting phase
                        speed: 0.5 + Math.random() * 1.5,        // Random fade speed
                        char: Math.floor(Math.random() * glyphChars.length),
                        depth: Math.random() * 0.5               // Random depth for parallax (0 to 0.5)
                    };
                }
            }
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

                const cols = Math.ceil(parent.offsetWidth / pixelSize);
                const rows = Math.ceil(parent.offsetHeight / pixelSize);
                initPixelData(cols, rows);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);
            ctx.font = `${pixelSize * 0.8}px monospace`;

            const cols = Math.ceil(width / pixelSize);
            const rows = Math.ceil(height / pixelSize);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    if (!pixelData[row] || !pixelData[row][col]) continue;

                    const x = col * pixelSize;
                    const y = row * pixelSize;
                    const pixel = pixelData[row][col];

                    // Apply parallax offset
                    // We move pixels down based on scroll position and their depth
                    // Deeper pixels (higher depth value) move more, creating standard parallax feel
                    const scrollY = window.scrollY;
                    const parallaxY = y + (scrollY * pixel.depth * 0.5); // 0.5 is a dampening factor

                    const px = x + pixelSize / 2;
                    const py = parallaxY + pixelSize / 2;

                    // Skip if out of view (considering some buffer)
                    if (parallaxY < -pixelSize || parallaxY > height + pixelSize) continue;

                    // Rectangular edge fade (re-calculated with parallaxY)
                    const edgeFadeX = Math.min(px / (width * 0.15), (width - px) / (width * 0.15), 1);
                    const edgeFadeY = Math.min(py / (height * 0.15), (height - py) / (height * 0.15), 1);
                    const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                    // Random per-pixel fade animation
                    const randomFade = Math.sin(time * 0.02 * speed * pixel.speed + pixel.phase) * 0.5 + 0.5;

                    // Add some extra randomness - occasionally change character
                    if (Math.random() < 0.001) {
                        pixel.char = Math.floor(Math.random() * glyphChars.length);
                    }

                    const opacity = randomFade * rectangularFade * intensity;

                    if (opacity > 0.1) {
                        const alpha = opacity * (isDark ? 0.4 : 0.5);
                        ctx.fillStyle = isDark
                            ? `rgba(168, 162, 158, ${alpha})`
                            : `rgba(87, 83, 78, ${alpha})`;

                        ctx.fillText(glyphChars[pixel.char], x, parallaxY + pixelSize * 0.8);
                    }
                }
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// ORGANIC PULSE EFFECT
// ========================
export function OrganicPulseEffect({
    intensity = 0.5,
    speed = 1,
    pixelSize = 16
}: Omit<PixelAnimationProps, 'style'>) {
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);

            const cols = Math.ceil(width / pixelSize);
            const rows = Math.ceil(height / pixelSize);
            const centerX = width / 2;
            const centerY = height / 2;
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * pixelSize;
                    const y = row * pixelSize;
                    const px = x + pixelSize / 2;
                    const py = y + pixelSize / 2;

                    // Rectangular edge fade
                    const edgeFadeX = Math.min(px / (width * 0.15), (width - px) / (width * 0.15), 1);
                    const edgeFadeY = Math.min(py / (height * 0.15), (height - py) / (height * 0.15), 1);
                    const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                    // Organic breathing animation - multiple frequencies
                    const breath1 = Math.sin(time * 0.008 * speed + (px + py) * 0.01) * 0.5 + 0.5;
                    const breath2 = Math.sin(time * 0.012 * speed - (px - py) * 0.015) * 0.5 + 0.5;
                    const breath3 = Math.sin(time * 0.006 * speed + col * 0.05) * 0.5 + 0.5;

                    // Organic cell-like variation
                    const cellNoise = Math.sin(col * 0.8) * Math.cos(row * 0.8) * 0.3 + 0.7;

                    const combined = (breath1 * 0.4 + breath2 * 0.35 + breath3 * 0.25) * cellNoise;
                    const opacity = combined * rectangularFade * intensity;

                    if (opacity > 0.05) {
                        const size = pixelSize - 3;
                        const scale = 0.7 + combined * 0.3;
                        const scaledSize = size * scale;
                        const offset = (pixelSize - scaledSize) / 2;

                        const alpha = opacity * (isDark ? 0.2 : 0.3);

                        // Create subtle gradient effect
                        const hue = 30 + Math.sin((px + py) * 0.02 + time * 0.005) * 10;
                        ctx.fillStyle = isDark
                            ? `hsla(${hue}, 8%, 65%, ${alpha})`
                            : `hsla(${hue}, 10%, 45%, ${alpha})`;

                        // Rounded rectangles for organic feel
                        ctx.beginPath();
                        const radius = scaledSize * 0.15;
                        ctx.roundRect(x + offset, y + offset, scaledSize, scaledSize, radius);
                        ctx.fill();
                    }
                }
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// MATRIX RAIN EFFECT
// ========================
export function MatrixRainEffect({
    intensity = 0.5,
    speed = 1,
    pixelSize = 14
}: Omit<PixelAnimationProps, 'style'>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const dropsRef = useRef<number[]>([]);
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Sanskrit single characters only (no conjuncts or combining marks to avoid overlap)
        // ॐ (Om), vowels, and consonants
        const chars = "ॐअआइईउऊएओकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह";

        // Wider column spacing for Devanagari characters
        const columnWidth = pixelSize * 1.5;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);

                // Initialize drops with wider spacing
                const cols = Math.ceil(parent.offsetWidth / columnWidth);
                dropsRef.current = Array(cols).fill(0).map(() => Math.random() * -100);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            const centerX = width / 2;

            // Fade effect
            ctx.fillStyle = isDark
                ? "rgba(28, 25, 23, 0.08)"
                : "rgba(250, 250, 249, 0.08)";
            ctx.fillRect(0, 0, width, height);

            // Use Noto Sans Devanagari or fallback to system fonts
            ctx.font = `${pixelSize}px "Noto Sans Devanagari", "Mangal", sans-serif`;

            dropsRef.current.forEach((drop, i) => {
                const x = i * columnWidth;
                const y = drop * pixelSize;

                // Rectangular horizontal edge fade
                const edgeFade = Math.min(x / (width * 0.15), (width - x) / (width * 0.15), 1);

                if (edgeFade > 0.1) {
                    const char = chars[Math.floor(Math.random() * chars.length)];

                    // Gradient from bright to dim
                    const alpha = intensity * edgeFade * (isDark ? 0.6 : 0.7);
                    ctx.fillStyle = isDark
                        ? `rgba(168, 162, 158, ${alpha})`
                        : `rgba(87, 83, 78, ${alpha})`;

                    ctx.fillText(char, x, y);
                }

                // Reset drop at bottom or randomly
                if (drop * pixelSize > height && Math.random() > 0.98) {
                    dropsRef.current[i] = 0;
                }

                dropsRef.current[i] += 0.3 * speed;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// REACTIVE WAVE EFFECT (Mouse Interactive)
// ========================
export function ReactiveWaveEffect({
    intensity = 0.5,
    speed = 1,
    pixelSize = 16
}: Omit<PixelAnimationProps, 'style'>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
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
            }
        };

        resize();
        window.addEventListener("resize", resize);
        canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
        canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);

            const cols = Math.ceil(width / pixelSize);
            const rows = Math.ceil(height / pixelSize);
            const centerX = width / 2;
            const centerY = height / 2;
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * pixelSize;
                    const y = row * pixelSize;
                    const px = x + pixelSize / 2;
                    const py = y + pixelSize / 2;

                    // Rectangular edge fade
                    const edgeFadeX = Math.min(px / (width * 0.15), (width - px) / (width * 0.15), 1);
                    const edgeFadeY = Math.min(py / (height * 0.15), (height - py) / (height * 0.15), 1);
                    const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                    // Base wave animation
                    let wave = Math.sin((px + py) * 0.02 - time * 0.025 * speed) * 0.5 + 0.5;

                    // Add mouse interaction
                    if (mouseRef.current.active) {
                        const mouseDistX = px - mouseRef.current.x;
                        const mouseDistY = py - mouseRef.current.y;
                        const mouseDist = Math.sqrt(mouseDistX ** 2 + mouseDistY ** 2);
                        const mouseWave = Math.sin(mouseDist * 0.05 - time * 0.05 * speed) * 0.5 + 0.5;
                        const mouseInfluence = Math.max(0, 1 - mouseDist / 200);
                        wave = wave * (1 - mouseInfluence) + mouseWave * mouseInfluence;
                    }

                    const opacity = wave * rectangularFade * intensity;

                    if (opacity > 0.05) {
                        const size = pixelSize - 2;
                        const alpha = opacity * (isDark ? 0.25 : 0.35);

                        ctx.fillStyle = isDark
                            ? `rgba(168, 162, 158, ${alpha})`
                            : `rgba(87, 83, 78, ${alpha})`;

                        ctx.fillRect(x + 1, y + 1, size, size);
                    }
                }
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
            canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// CONSTELLATION EFFECT
// ========================
interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    brightness: number;
}

export function ConstellationEffect({
    intensity = 0.5,
    speed = 1
}: Omit<PixelAnimationProps, 'style' | 'pixelSize'>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const starsRef = useRef<Star[]>([]);
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const numStars = 80;
        const connectionDistance = 120;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);

                // Initialize stars if empty
                if (starsRef.current.length === 0) {
                    const width = parent.offsetWidth;
                    const height = parent.offsetHeight;
                    starsRef.current = Array(numStars).fill(null).map(() => ({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 0.3 * speed,
                        vy: (Math.random() - 0.5) * 0.3 * speed,
                        size: Math.random() * 2 + 2,
                        brightness: Math.random() * 0.5 + 0.5
                    }));
                }
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            const centerX = width / 2;
            const centerY = height / 2;
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

            ctx.clearRect(0, 0, width, height);

            // Update and draw stars
            starsRef.current.forEach((star) => {
                // Update position
                star.x += star.vx;
                star.y += star.vy;

                // Bounce off edges
                if (star.x < 0 || star.x > width) star.vx *= -1;
                if (star.y < 0 || star.y > height) star.vy *= -1;

                // Keep in bounds
                star.x = Math.max(0, Math.min(width, star.x));
                star.y = Math.max(0, Math.min(height, star.y));
            });

            // Draw connections
            for (let i = 0; i < starsRef.current.length; i++) {
                for (let j = i + 1; j < starsRef.current.length; j++) {
                    const star1 = starsRef.current[i];
                    const star2 = starsRef.current[j];

                    const dx = star1.x - star2.x;
                    const dy = star1.y - star2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const midX = (star1.x + star2.x) / 2;
                        const midY = (star1.y + star2.y) / 2;
                        // Rectangular edge fade
                        const edgeFadeX = Math.min(midX / (width * 0.15), (width - midX) / (width * 0.15), 1);
                        const edgeFadeY = Math.min(midY / (height * 0.15), (height - midY) / (height * 0.15), 1);
                        const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                        const lineAlpha = (1 - distance / connectionDistance) * intensity * rectangularFade * 0.3;

                        ctx.beginPath();
                        ctx.moveTo(star1.x, star1.y);
                        ctx.lineTo(star2.x, star2.y);
                        ctx.strokeStyle = isDark
                            ? `rgba(168, 162, 158, ${lineAlpha})`
                            : `rgba(87, 83, 78, ${lineAlpha})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw stars
            starsRef.current.forEach((star) => {
                // Rectangular edge fade for stars
                const edgeFadeX = Math.min(star.x / (width * 0.15), (width - star.x) / (width * 0.15), 1);
                const edgeFadeY = Math.min(star.y / (height * 0.15), (height - star.y) / (height * 0.15), 1);
                const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));
                const alpha = star.brightness * intensity * rectangularFade * (isDark ? 0.5 : 0.6);

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 162, 158, ${alpha})`
                    : `rgba(87, 83, 78, ${alpha})`;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// DNA HELIX EFFECT
// ========================
export function DNAHelixEffect({
    intensity = 0.5,
    speed = 1,
    pixelSize = 8
}: Omit<PixelAnimationProps, 'style'>) {
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            const centerX = width / 2;
            const centerY = height / 2;

            ctx.clearRect(0, 0, width, height);

            const numStrands = 40;
            const amplitude = 80;
            const frequency = 0.02;
            const verticalSpacing = height / numStrands;

            for (let i = 0; i < numStrands; i++) {
                const baseY = i * verticalSpacing;
                // Rectangular edge fade for top and bottom
                const edgeFadeY = Math.min(baseY / (height * 0.15), (height - baseY) / (height * 0.15), 1);
                const rectangularFade = Math.max(0, edgeFadeY);

                // Two strands with phase offset
                const phase1 = time * 0.03 * speed + i * frequency * 50;
                const phase2 = phase1 + Math.PI;

                const x1 = centerX + Math.sin(phase1) * amplitude;
                const x2 = centerX + Math.sin(phase2) * amplitude;

                // 3D-like depth effect
                const depth1 = Math.cos(phase1) * 0.5 + 0.5;
                const depth2 = Math.cos(phase2) * 0.5 + 0.5;

                const size1 = pixelSize * (0.5 + depth1 * 0.5);
                const size2 = pixelSize * (0.5 + depth2 * 0.5);

                const alpha1 = intensity * rectangularFade * (0.3 + depth1 * 0.4) * (isDark ? 0.6 : 0.8);
                const alpha2 = intensity * rectangularFade * (0.3 + depth2 * 0.4) * (isDark ? 0.6 : 0.8);

                // Draw connecting bar
                if (i % 3 === 0) {
                    ctx.beginPath();
                    ctx.moveTo(x1, baseY);
                    ctx.lineTo(x2, baseY);
                    ctx.strokeStyle = isDark
                        ? `rgba(168, 162, 158, ${alpha1 * 0.3})`
                        : `rgba(87, 83, 78, ${alpha1 * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                // Draw strand 1
                ctx.beginPath();
                ctx.arc(x1, baseY, size1, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 162, 158, ${alpha1})`
                    : `rgba(87, 83, 78, ${alpha1})`;
                ctx.fill();

                // Draw strand 2
                ctx.beginPath();
                ctx.arc(x2, baseY, size2, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 162, 158, ${alpha2})`
                    : `rgba(87, 83, 78, ${alpha2})`;
                ctx.fill();
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// NEURAL NETWORK EFFECT
// ========================
interface Neuron {
    x: number;
    y: number;
    layer: number;
    pulsePhase: number;
    connections: number[];
}

export function NeuralNetworkEffect({
    intensity = 0.5,
    speed = 1
}: Omit<PixelAnimationProps, 'style' | 'pixelSize'>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const neuronsRef = useRef<Neuron[]>([]);
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

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
                ctx.scale(dpr, dpr);

                // Create neural network structure
                const width = parent.offsetWidth;
                const height = parent.offsetHeight;
                const layers = 5;
                const neuronsPerLayer = [4, 6, 8, 6, 4];

                neuronsRef.current = [];
                let neuronIndex = 0;

                for (let l = 0; l < layers; l++) {
                    const layerX = (width / (layers + 1)) * (l + 1);
                    const neuronsInLayer = neuronsPerLayer[l];

                    for (let n = 0; n < neuronsInLayer; n++) {
                        const layerY = (height / (neuronsInLayer + 1)) * (n + 1);

                        // Connect to previous layer neurons
                        const connections: number[] = [];
                        if (l > 0) {
                            const prevLayerStart = neuronsRef.current.findIndex(neu => neu.layer === l - 1);
                            const prevLayerNeurons = neuronsRef.current.filter(neu => neu.layer === l - 1);
                            prevLayerNeurons.forEach((_, i) => {
                                if (Math.random() > 0.3) {
                                    connections.push(prevLayerStart + i);
                                }
                            });
                        }

                        neuronsRef.current.push({
                            x: layerX,
                            y: layerY,
                            layer: l,
                            pulsePhase: Math.random() * Math.PI * 2,
                            connections
                        });

                        neuronIndex++;
                    }
                }
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);
            const centerX = width / 2;
            const centerY = height / 2;
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

            ctx.clearRect(0, 0, width, height);

            // Draw connections with pulse animation
            neuronsRef.current.forEach((neuron) => {
                neuron.connections.forEach((connIndex) => {
                    const connectedNeuron = neuronsRef.current[connIndex];
                    if (!connectedNeuron) return;

                    const midX = (neuron.x + connectedNeuron.x) / 2;
                    const midY = (neuron.y + connectedNeuron.y) / 2;
                    // Rectangular edge fade
                    const edgeFadeX = Math.min(midX / (width * 0.15), (width - midX) / (width * 0.15), 1);
                    const edgeFadeY = Math.min(midY / (height * 0.15), (height - midY) / (height * 0.15), 1);
                    const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                    // Pulse traveling along connection
                    const pulsePos = (Math.sin(time * 0.02 * speed + neuron.pulsePhase) + 1) / 2;
                    const pulseX = connectedNeuron.x + (neuron.x - connectedNeuron.x) * pulsePos;
                    const pulseY = connectedNeuron.y + (neuron.y - connectedNeuron.y) * pulsePos;

                    // Draw connection line
                    ctx.beginPath();
                    ctx.moveTo(connectedNeuron.x, connectedNeuron.y);
                    ctx.lineTo(neuron.x, neuron.y);
                    ctx.strokeStyle = isDark
                        ? `rgba(168, 162, 158, ${0.1 * intensity * rectangularFade})`
                        : `rgba(87, 83, 78, ${0.15 * intensity * rectangularFade})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Draw pulse
                    ctx.beginPath();
                    ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
                    ctx.fillStyle = isDark
                        ? `rgba(168, 162, 158, ${0.4 * intensity * rectangularFade})`
                        : `rgba(87, 83, 78, ${0.5 * intensity * rectangularFade})`;
                    ctx.fill();
                });
            });

            // Draw neurons
            neuronsRef.current.forEach((neuron) => {
                // Rectangular edge fade for neurons
                const edgeFadeX = Math.min(neuron.x / (width * 0.15), (width - neuron.x) / (width * 0.15), 1);
                const edgeFadeY = Math.min(neuron.y / (height * 0.15), (height - neuron.y) / (height * 0.15), 1);
                const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                const pulse = Math.sin(time * 0.03 * speed + neuron.pulsePhase) * 0.3 + 0.7;
                const size = 5 + pulse * 3;
                const alpha = intensity * rectangularFade * pulse * (isDark ? 0.5 : 0.6);

                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(168, 162, 158, ${alpha})`
                    : `rgba(87, 83, 78, ${alpha})`;
                ctx.fill();
            });

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// SKILLS MATRIX EFFECT - Tech Skills Animation
// ========================
export function SkillsMatrixEffect({
    intensity = 0.5,
    speed = 1,
    pixelSize = 14
}: Omit<PixelAnimationProps, 'style'>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const [isDark, setIsDark] = React.useState(false);

    // Tech skills to display
    const skills = [
        "Docker", "React", "Node.js", "Express", "Linux", "TypeScript",
        "AWS", "MongoDB", "PostgreSQL", "Redis", "GraphQL", "Next.js",
        "Python", "Git", "Kubernetes", "Nginx", "Firebase", "Tailwind",
        "JavaScript", "HTML", "CSS", "REST API", "CI/CD", "Vercel",
        "Go", "Rust", "WebSocket", "Redux", "Vue.js", "Angular"
    ];

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

    // Store skill positions and animations
    interface SkillItem {
        skill: string;
        x: number;
        y: number;
        phase: number;
        fadeSpeed: number;
        fontSize: number;
    }

    const skillItemsRef = useRef<SkillItem[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let time = 0;

        const initSkillItems = (width: number, height: number) => {
            const items: SkillItem[] = [];
            const gridCols = Math.floor(width / 120);
            const gridRows = Math.floor(height / 50);

            // Create a grid of skills
            for (let row = 0; row < gridRows; row++) {
                for (let col = 0; col < gridCols; col++) {
                    const skillIndex = (row * gridCols + col) % skills.length;
                    items.push({
                        skill: skills[skillIndex],
                        x: col * 120 + 20 + Math.random() * 40,
                        y: row * 50 + 25 + Math.random() * 20,
                        phase: Math.random() * Math.PI * 2,
                        fadeSpeed: 0.3 + Math.random() * 0.7,
                        fontSize: pixelSize + Math.floor(Math.random() * 4) - 2
                    });
                }
            }
            skillItemsRef.current = items;
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

                initSkillItems(parent.offsetWidth, parent.offsetHeight);
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);

            skillItemsRef.current.forEach((item) => {
                // Rectangular edge fade
                const edgeFadeX = Math.min(item.x / (width * 0.15), (width - item.x) / (width * 0.15), 1);
                const edgeFadeY = Math.min(item.y / (height * 0.15), (height - item.y) / (height * 0.15), 1);
                const rectangularFade = Math.max(0, Math.min(edgeFadeX, edgeFadeY));

                // Random per-skill fade animation
                const fadeCycle = Math.sin(time * 0.015 * speed * item.fadeSpeed + item.phase) * 0.5 + 0.5;

                const opacity = fadeCycle * rectangularFade * intensity;

                if (opacity > 0.1) {
                    const alpha = opacity * (isDark ? 0.5 : 0.6);

                    ctx.font = `${item.fontSize}px "SF Mono", "Fira Code", "Consolas", monospace`;
                    ctx.fillStyle = isDark
                        ? `rgba(168, 162, 158, ${alpha})`
                        : `rgba(87, 83, 78, ${alpha})`;

                    ctx.fillText(item.skill, item.x, item.y);
                }
            });

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isDark, intensity, speed, pixelSize, skills]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
                }}
            />
        </div>
    );
}

// ========================
// UNIFIED PIXEL ANIMATION COMPONENT
// ========================
export function PixelAnimation({
    style = "glyph-matrix",
    intensity = 0.5,
    speed = 1,
    pixelSize = 14,
}: PixelAnimationProps) {
    switch (style) {
        case "glyph-matrix":
            return <GlyphMatrixEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        case "organic-pulse":
            return <OrganicPulseEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        case "matrix-rain":
            return <MatrixRainEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        case "reactive-wave":
            return <ReactiveWaveEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        case "constellation":
            return <ConstellationEffect intensity={intensity} speed={speed} />;
        case "dna-helix":
            return <DNAHelixEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        case "neural-network":
            return <NeuralNetworkEffect intensity={intensity} speed={speed} />;
        case "skills-matrix":
            return <SkillsMatrixEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
        default:
            return <GlyphMatrixEffect intensity={intensity} speed={speed} pixelSize={pixelSize} />;
    }
}
