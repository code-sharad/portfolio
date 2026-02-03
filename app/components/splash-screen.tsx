"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while splash screen is active
        document.body.style.overflow = "hidden";

        // Start exit sequence after animation completes
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
        }, 2000); // 1s draw + 1s hold

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-3xl"
                >
                    <div className="relative">
                        <svg
                            width="300"
                            height="300"
                            viewBox="0 0 229 227"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-64 md:w-96 h-auto drop-shadow-2xl dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <defs>
                                <linearGradient id="splash-signature-gradient" x1="0" y1="0" x2="229" y2="227" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" className="text-stone-600 dark:text-stone-400" stopColor="currentColor" />
                                    <stop offset="100%" className="text-stone-900 dark:text-stone-100" stopColor="currentColor" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M51.5 219.5C58.1671 185.2 66.0075 135.981 70.7196 101.227C73.9047 77.7357 78.4941 52.3142 72.967 28.7831C71.0054 20.4318 67.7516 11.6062 63.4156 4.60071C60.4799 -0.142377 60.4146 2.19306 61.3843 6.87427C66.5525 31.8236 75.44 55.4646 85.8463 77.8714C97.7341 103.468 114.222 127.66 120.594 156.413C123.171 168.04 124.225 184.176 115.624 192.841C107.052 201.478 94.1371 201.706 83.9447 198.164C61.4043 190.33 41.8684 174.183 26.1607 153.622C13.8242 137.475 2.15189 118.158 2.00119 95.3365C1.90373 80.5773 7.80524 67.1681 18.8566 60.1997C34.9018 50.0824 45.2522 66.2108 46.7762 84.7955C49.4135 116.957 37.2796 152.012 26.5929 180.698C22.1868 192.525 19.1437 199.725 13.6704 210.461C11.2081 215.291 1.74045 227.578 5.71803 224.516C26.4601 208.547 -14.0936 236.784 26.8954 207.361C63.1108 181.365 101.234 160.126 140.259 140.911C168.756 126.88 197.844 114.577 227 102.674"
                                stroke="url(#splash-signature-gradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
