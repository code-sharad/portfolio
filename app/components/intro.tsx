"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from "@/context/active-session-context";
import useSectionInView from "@/lib/hooks";

import MagneticButton from "./magnetic-button";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const contactButton = () => {
    const recipientEmail = "codesharad@gmail.com";
    const gmailAppUrl = `googlegmail://co?to=${recipientEmail}`;
    window.location.href = gmailAppUrl;

    // Fallback for desktop or if the Gmail app link doesn't work
    window.setTimeout(() => {
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`;
      window.location.href = gmailWebUrl;
    }, 100);
  };

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="home"
      className=" my-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="relative">
              <div className="z-10 relative">
                <Image
                  src="/sharad.png"
                  alt="Sharad portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-[1.5rem] object-cover border-[0.35rem] border-white shadow-xl shadow-black/10 sm:h-[10rem] sm:w-[10rem] sm:rounded-[2.5rem] dark:border-stone-900/50 dark:shadow-black/40"
                />
              </div>
              {/* Decorative background blur for depth */}
              <div className="absolute inset-0 -z-10 bg-stone-200/50 blur-2xl rounded-full dark:bg-stone-800/50 transform scale-110"></div>
            </div>
          </motion.div>
          <motion.span
            className="absolute bottom-2 right-2 text-3xl  md:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              // type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl overflow-hidden">
        <motion.div
          variants={animation}
          initial="initial"
          animate="enter"
          custom={0}
        >
          <span className="font-bold">Hello, I'm <span className="text-gradient">Sharad.</span></span>
        </motion.div>
        <motion.div
          variants={animation}
          initial="initial"
          animate="enter"
          custom={1}
        >
          I'm a student <span className="font-bold"></span> I enjoy building{" "}
          <span className="italic">sites & apps</span>.
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <MagneticButton>
          <a href="mailto:codesharad@gmail.com">
            <span className="bg-stone-900 text-white px-7 py-3 flex gap-2 items-center justify-center rounded-full outline-none hover:bg-stone-950 transition group shadow-lg shadow-black/[0.1] dark:bg-stone-800 dark:text-white/90 dark:border-white/10 border border-transparent">
              <button type="submit">Contact me here </button>
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
            </span>
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href="/Sharad_Bhadait.pdf"
            download={"Sharad_Bhadait"}
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10 shadow-lg shadow-black/[0.05]"
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href="https://www.linkedin.com/in/sharad-bhadait-378753251/"
            target="_blank"
            className="bg-white p-4 text-stone-700 hover:text-stone-950 flex items-center gap-2 rounded-full transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90 shadow-lg shadow-black/[0.05]"
          >
            <BsLinkedin />
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            href="https://github.com/code-sharad"
            target="_blank"
            className="bg-white p-4 text-stone-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:text-stone-950 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/90 shadow-lg shadow-black/[0.05]"
          >
            <FaGithubSquare />
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
}

export default Intro;
