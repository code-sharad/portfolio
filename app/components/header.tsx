"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-session-context";
import { time } from "console";
import { useState } from "react";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
    const [hideSign, setHideSign] = useState(false);
    setTimeout(() => {
      setHideSign(true);
    },2400)
  return (
    <>
      {hideSign ? (
        <header className="z-[999] relative ">
          <motion.div
            className="fixed  top-0 left-1/2  h-[4.5rem] w-full shadow-lg  rounded-none border border-white border-opacity-40 bg-white bg-opacity-60 shadow-black/[0.06] backdrop-blur-[1rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem]  sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75   dark:border-black/40"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>
          <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className={clsx(
                    " h-3/4 flex items-center justify-center relative"
                  )}
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    className={clsx(
                      "w-full flex outline-none items-center justify-center p-3   hover:text-gray-950 transition hover:dark:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-300":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="dark:bg-gray-800  bg-indigo-100 rounded-full absolute inset-0 -z-10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>
      ) : (
        <div className="flex fixed top-[0.15rem] 2 h-12  sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          
          <svg
            className="lg:mt-3 lg:ml-8 ml-4 mt-2 "
            id="svg-sign"
            width="70"
            height="80"
            viewBox="0 0 229 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="signature"
              d="M51.5 219.5C58.1671 185.2 66.0075 135.981 70.7196 101.227C73.9047 77.7357 78.4941 52.3142 72.967 28.7831C71.0054 20.4318 67.7516 11.6062 63.4156 4.60071C60.4799 -0.142377 60.4146 2.19306 61.3843 6.87427C66.5525 31.8236 75.44 55.4646 85.8463 77.8714C97.7341 103.468 114.222 127.66 120.594 156.413C123.171 168.04 124.225 184.176 115.624 192.841C107.052 201.478 94.1371 201.706 83.9447 198.164C61.4043 190.33 41.8684 174.183 26.1607 153.622C13.8242 137.475 2.15189 118.158 2.00119 95.3365C1.90373 80.5773 7.80524 67.1681 18.8566 60.1997C34.9018 50.0824 45.2522 66.2108 46.7762 84.7955C49.4135 116.957 37.2796 152.012 26.5929 180.698C22.1868 192.525 19.1437 199.725 13.6704 210.461C11.2081 215.291 1.74045 227.578 5.71803 224.516C26.4601 208.547 -14.0936 236.784 26.8954 207.361C63.1108 181.365 101.234 160.126 140.259 140.911C168.756 126.88 197.844 114.577 227 102.674"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
}

export default Header;
