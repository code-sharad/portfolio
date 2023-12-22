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
  return (
    <section
      ref={ref}
      id="home"
      className=" my-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex  items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className=" object-cover rounded-full border-2 md:h-[192px] md:w-[290px]   bg-gray-100 bg-opacity-30 border-white border-opacity-40 shadow-black/[0.03] sm:h-32 sm:w-32">
              <Image
                className=" transition-all  object-cover  rounded-full"
                // src={"https://avatars.githubusercontent.com/u/61672294?v=4"}
                src={"/profile.png"}
                priority={true}
                alt="Sharad Bhadait"
                quality={95}
                width={192}
                height={192}
              />
            </div>
          </motion.div>
          <motion.span
            className="absolute hover:scale-105 bottom-1 right-3  text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sharad.</span> I'm a student{" "}
        <span className="font-bold"></span> I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">MERN stack </span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a href="mailto:codesharad@gmail.com">
          <span className="bg-gray-900 text-white px-7 py-3 flex gap-2 items-center justify-center rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group">
            <button type="submit">Contact me here </button>
            <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition " />
          </span>
        </a>
        <a
          href="/CV.pdf"
          download={"true"}
          className="cursor-pointer borderBlack dark:bg-white/10 bg-white flex gap-2 justify-center items-center p-4 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group borderBlack"
        >
          Download CV
          <HiDownload className=" opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/sharad-bhadait-378753251/"
          target="_blank"
          className="dark:bg-white/20 border-white/60 bg-white hover:text-gray-950 text-gray-700 flex gap-2 justify-center items-center p-4 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/code-sharad"
          target="_blank"
          className="dark:bg-white/20 border-white/60 bg-white  hover:text-gray-950 text-gray-700 flex gap-2 justify-center items-center p-4 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
