
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/codeSharad.png";
import rmtdevImg from "@/public/pythonprojects.png";
import wordanalyticsImg from "@/public/airbnb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Orchid English School",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description:
      "I have done my Schooling from Orchid English School.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2020",
  },
  {
    title: "Orchid Techo College",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description:
      "I have completed by 11th and 12th.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Maharashtra Institute of Technology",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description:
      "Pursuing a Bachelor's degree in Electronics and Computor Engineering. I'm currently in my 2rd year",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Accounts",
    description:
      "I have created a web app of my personal social media accounts.",
    tags: ["HTML", "CSS", "Javascript", "service worker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Personal Portfolio",
    description:"",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AirBnB Clone",
    description:
      "I have created airbnb clone with frontend and backend and also add features of uploading the image and Authentication of users .",
    tags: ["React", "Next.js", "MongoDB","Express", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C++",
  "C",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "REST API",
  "Linux",
  "Express",
  "Python",
  "Framer Motion",
] as const;