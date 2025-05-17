
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, } from "react-icons/fa";
import { LuGraduationCap , LuBuilding} from "react-icons/lu";
import corpcommentImg from "@/public/codeSharad.png";
import rmtdevImg from "@/public/pythonprojects.png";
import wordanalyticsImg from "@/public/airbnb.png";
import summarize from "@/public/summarize.png";
import projecthub from "@/public/projecthubs.png";
import invoice from "@/public/invoice-managemtn.png";
import ecesa from "@/public/ecesa.png";
import certifyPro from "@/public/certifyPro.png";

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
  
] as const;

export const experiencesData = [
  {
    title: "Orchid English School",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description: "I have done my Schooling from Orchid English School.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2020",
  },
  {
    title: "Orchid Techo College",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description: "I have completed by 11th and 12th.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Arohi Softwares",
    location: "Remote, India",
    description:
      "Built the frontend and backend for the Employee Management System (EMS).Developed product pages, categories, and filters for Apna Bazar. Designed and built the company website's UI using react.js, tailwindcss, framer-motion for Arohi Softwares. Developed the backend and video transcoding system for thc Learning Managcmcnt Systcm (LLMS) using Express.js, AWS S3, and CloudFront. Containerized EMS and LMS by creating Docker images and deployed them to Amazon ECS for scalable and efficient management.",
    icon: React.createElement(LuBuilding),
    date: "June 2024 - Sept 2024",
  },
  {
    title: "Maharashtra Institute of Technology",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description:
      "Pursuing a Bachelor's degree in Electronics and Computor Engineering. I'm currently in my 2rd year",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title:"Invoice Management System",
    description:"I have created a web app for managing invoices. It's a simple app that allows you to create, edit, and delete invoices.",
    tags:['React','tailwindcss','nodejs','expressjs','mongodb','backend GCP'],
    imageUrl:invoice
  },
  {
    title:"Ecesa",
    description:"Developed a full-stack web platform for student enrollment in college workshops and events.",
    tags:['React','tailwindcss','nextjs','postgres'],
    imageUrl:ecesa
  },
  {
    title:"CertifyPro",
    description:"Built a platform to generate bulk certificates using CSV uploads and a drag-and-drop editor. Features include font customization, live preview, ZIP download.",
    tags:['vercel'],
    imageUrl:certifyPro
  },
  {
    title:"ProjectHub",
    description:"It's a platform where students can share their projects with the world. Whether you're into coding, design, engineering, or any other field, you can upload your projects.",
    tags:['ReactJS','tailwindcss','appwrite','DigitalOcean'],
    imageUrl:projecthub
  },
  {
    title: "Personal Accounts",
    description:
      "I have created a web app of my personal social media accounts.",
    tags: ["HTML", "CSS", "Javascript", "service worker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Video and Text Summarizer",
    description:
      "I have created a web app for summarizing the text and video.",
    tags: ["React", "Langchain", "Openai", "Shadcn"],
    imageUrl:summarize ,
  },
  {
    title: "Python Projects",
    description: "To know more about Python projects checkout GitHub",
    tags: ["Python", "Flask", "API"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AirBnB Clone",
    description:
      "I have created airbnb clone with frontend and backend and also add features of uploading the image and Authentication of users .",
    tags: ["React", "Next.js", "MongoDB", "Express", "Tailwind", "Framer"],
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
  "Figma",
  "Docker",
  "AWS",
  "DigitalOcean",
  "Azure"
] as const;