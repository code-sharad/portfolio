"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface PixelBlock {
    id: number;
    x: number;
    y: number;
    delay: number;
    size: number;
}

export function PixelTransitionEffect() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pixels, setPixels] = React.useState<PixelBlock[]>([]);
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        const pixelSize = 20; // Size of each pixel block
        const cols = Math.ceil(dimensions.width / pixelSize);
        const rows = Math.ceil(dimensions.height / pixelSize);
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;

        const newPixels: PixelBlock[] = [];
        let id = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * pixelSize;
                const y = row * pixelSize;

                // Calculate distance from center for radial animation
                const distanceFromCenter = Math.sqrt(
                    Math.pow(x + pixelSize / 2 - centerX, 2) +
                    Math.pow(y + pixelSize / 2 - centerY, 2)
                );

                // Normalize delay based on max distance
                const maxDistance = Math.sqrt(
                    Math.pow(dimensions.width / 2, 2) + Math.pow(dimensions.height / 2, 2)
                );
                const delay = (distanceFromCenter / maxDistance) * 1.5;

                newPixels.push({
                    id: id++,
                    x,
                    y,
                    delay,
                    size: pixelSize,
                });
            }
        }

        setPixels(newPixels);
    }, [dimensions]);

    return (
        <>
            {/* Light mode pixels */}
            <div
                ref={containerRef}
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden dark:hidden"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 20%, transparent 60%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 20%, transparent 60%)",
                }}
            >
                {pixels.map((pixel) => (
                    <motion.div
                        key={pixel.id}
                        className="absolute bg-stone-300/40"
                        style={{
                            left: pixel.x,
                            top: pixel.y,
                            width: pixel.size - 2,
                            height: pixel.size - 2,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0.3, 0.5, 0.2],
                            scale: [0, 1, 0.8, 1, 0.9],
                        }}
                        transition={{
                            duration: 4,
                            delay: pixel.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Dark mode pixels */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden dark:block"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 20%, transparent 60%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 20%, transparent 60%)",
                }}
            >
                {pixels.map((pixel) => (
                    <motion.div
                        key={`dark-${pixel.id}`}
                        className="absolute bg-stone-500/20"
                        style={{
                            left: pixel.x,
                            top: pixel.y,
                            width: pixel.size - 2,
                            height: pixel.size - 2,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0.2, 0.35, 0.15],
                            scale: [0, 1, 0.8, 1, 0.9],
                        }}
                        transition={{
                            duration: 4,
                            delay: pixel.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </>
    );
}

// Alternative: Lightweight CSS-only pixel grid with shimmer effect
export function PixelShimmerEffect() {
    return (
        <>
            {/* Light mode shimmer */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none dark:hidden overflow-hidden"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                }}
            >
                <div className="absolute inset-0 pixel-grid-light" />
                <div className="absolute inset-0 pixel-shimmer-light" />
            </div>

            {/* Dark mode shimmer */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none hidden dark:block overflow-hidden"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 65%)",
                }}
            >
                <div className="absolute inset-0 pixel-grid-dark" />
                <div className="absolute inset-0 pixel-shimmer-dark" />
            </div>

            <style jsx>{`
        .pixel-grid-light {
          background-image: linear-gradient(
              to right,
              rgba(120, 113, 108, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(120, 113, 108, 0.08) 1px,
              transparent 1px
            );
          background-size: 16px 16px;
        }

        .pixel-grid-dark {
          background-image: linear-gradient(
              to right,
              rgba(168, 162, 158, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(168, 162, 158, 0.06) 1px,
              transparent 1px
            );
          background-size: 16px 16px;
        }

        .pixel-shimmer-light {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 30%,
            rgba(120, 113, 108, 0.15) 45%,
            rgba(120, 113, 108, 0.25) 50%,
            rgba(120, 113, 108, 0.15) 55%,
            transparent 70%,
            transparent 100%
          );
          background-size: 400% 400%;
          animation: pixel-shimmer 8s ease-in-out infinite;
        }

        .pixel-shimmer-dark {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 30%,
            rgba(168, 162, 158, 0.08) 45%,
            rgba(168, 162, 158, 0.12) 50%,
            rgba(168, 162, 158, 0.08) 55%,
            transparent 70%,
            transparent 100%
          );
          background-size: 400% 400%;
          animation: pixel-shimmer 8s ease-in-out infinite;
        }

        @keyframes pixel-shimmer {
          0% {
            background-position: 200% 200%;
          }
          50% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }
      `}</style>
        </>
    );
}

// Canvas-based pixel transition for better performance
export function PixelCanvasEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const [isDark, setIsDark] = React.useState(false);

    useEffect(() => {
        // Check for dark mode
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

        const pixelSize = 18;
        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        resize();
        window.addEventListener("resize", resize);

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cols = Math.ceil(canvas.width / pixelSize);
            const rows = Math.ceil(canvas.height / pixelSize);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * pixelSize;
                    const y = row * pixelSize;
                    const px = x + pixelSize / 2;
                    const py = y + pixelSize / 2;

                    const dist = Math.sqrt(
                        (px - centerX) * (px - centerX) + (py - centerY) * (py - centerY)
                    );
                    const normalizedDist = dist / maxDist;

                    // Create radial fade effect
                    const radialFade = Math.max(0, 1 - normalizedDist * 1.5);

                    // Wave animation based on distance and time
                    const wave =
                        Math.sin(dist * 0.02 - time * 0.02) * 0.5 +
                        Math.sin(dist * 0.01 + time * 0.015) * 0.5;
                    const opacity = (wave + 1) * 0.5 * radialFade;

                    if (opacity > 0.05) {
                        const alpha = opacity * (isDark ? 0.12 : 0.2);
                        ctx.fillStyle = isDark
                            ? `rgba(168, 162, 158, ${alpha})`
                            : `rgba(120, 113, 108, ${alpha})`;

                        ctx.fillRect(x + 1, y + 1, pixelSize - 2, pixelSize - 2);
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
    }, [isDark]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 25%, transparent 60%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 25%, transparent 60%)",
                }}
            />
        </div>
    );
}

// Parallax Pixel Effect for Scroll Interactions
export function PixelParallaxEffect({
    opacity = 1
}: {
    opacity?: number
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
    const [pixels, setPixels] = React.useState<PixelBlock[]>([]);
    const { scrollY } = useScroll();

    // Create a spring-smoothed scroll value for smoother parallax
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        if (dimensions.width === 0 || dimensions.height === 0) return;

        // Use larger pixels for parallax effect to be more visible and performant
        const pixelSize = 40;
        const cols = Math.ceil(dimensions.width / pixelSize);
        const rows = Math.ceil(dimensions.height / pixelSize) + 4; // Add extra rows for scroll buffer

        const newPixels: PixelBlock[] = [];
        let id = 0;

        for (let row = -2; row < rows; row++) { // Start from negative to cover top edge
            for (let col = 0; col < cols; col++) {
                // Randomly skip some pixels to create a scattered look
                if (Math.random() > 0.4) continue;

                const x = col * pixelSize;
                const y = row * pixelSize;

                // Random parallax factor (depth)
                // 0.1 = far away (moves slow), 0.5 = close (moves fast)
                const depth = 0.05 + Math.random() * 0.3;

                newPixels.push({
                    id: id++,
                    x,
                    y,
                    delay: depth, // Using delay property to store depth for this effect
                    size: pixelSize,
                });
            }
        }

        setPixels(newPixels);
    }, [dimensions]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
            style={{ opacity }}
        >
            {pixels.map((pixel) => (
                <ParallaxPixel
                    key={pixel.id}
                    pixel={pixel}
                    scrollY={smoothScrollY}
                />
            ))}
        </div>
    );
}

// Helper component to handle individual pixel parallax
function ParallaxPixel({
    pixel,
    scrollY
}: {
    pixel: PixelBlock;
    scrollY: any;
}) {
    // Create transform based on scroll position and pixel depth (stored in delay)
    const y = useTransform(scrollY, [0, 1000], [0, pixel.delay * 800 * -1]);
    const opacity = useTransform(scrollY, [0, 300, 600], [0.1, 0.4, 0]);

    return (
        <motion.div
            className="absolute rounded-sm bg-stone-400/20 dark:bg-stone-500/20 backdrop-blur-[1px]"
            style={{
                left: pixel.x,
                top: pixel.y,
                width: pixel.size - 4,
                height: pixel.size - 4,
                y,
                opacity: Number(pixel.delay) > 0.2 ? opacity : 0.1 // Closer pixels are more visible
            }}
        />
    );
}
