import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, } from "react-icons/fa";
import { LuGraduationCap, LuBuilding } from "react-icons/lu";
import corpcommentImg from "@/public/codeSharad.png";
import rmtdevImg from "@/public/pythonprojects.png";
import wordanalyticsImg from "@/public/airbnb.png";
import summarize from "@/public/summarize.png";
import projecthub from "@/public/projecthubs.png";
import invoice from "@/public/invoice-managemtn.png";
import ecesa from "@/public/ecesa.png";
import certifyPro from "@/public/certifyPro.png";
import agent from "@/public/agent.png";
import pdfQaRag from "@/public/pdf_qa.png";
import appointmentBooking from "@/public/appointment.png";
import formGenerator from "@/public/ai_form.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },

] as const;

export const experiencesData = [
  {
    title: "Orchid English School",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2020",
  },
  {
    title: "Orchid Techo College",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Arohi Softwares",
    location: "Remote, India",
    description:
      "Built the frontend and backend for the Employee Management System (EMS).Developed product pages, categories, and filters for Apna Bazar. Designed and built the company website's UI using React.",
    icon: React.createElement(LuBuilding),
    date: "June 2024 - Sept 2024",
  },
  {
    title: "TechlyAssist",
    location: "Full Stack Developer",
    description:
      "Developed end-to-end Stripe payment integration with automated subscription management, JWT authentication, and RESTful API architecture for user onboarding. Integrated 5+ third-party OAuth services (Slack, Gmail, Trello, GitHub, Jira) with secure token encryption, asynchronous job processing using BullMQ, and error handling. Implemented LangSmith monitoring framework for AI agent diagnostics, reducing troubleshooting time by 60% through real-time tracing and performance analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2025 – Present",
  },
  {
    title: "Maharashtra Institute of Technology",
    location: "Chh Sambhaji Nagar, Maharashtra, India",
    description:
      "Pursuing a Bachelor's degree in Electronics and Computor Engineering. I'm currently in my final year",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Coding Agent",
    slug: "coding-agent",
    description:
      "An AI-powered coding assistant that reads your codebase, edits files intelligently, and opens pull requests automatically. Runs in a secure Vercel sandbox and is powered by GPT-4.1 with tools for code editing, testing, and GitHub integration.",
    tags: ["Agentic AI", "Generative AI", "GPT-4.1", "Vercel", "GitHub", "Automation"],
    imageUrl: agent,
    url: "https://agent31.vercel.app"
  },
  {
    title: "PDF Q&A Chat Application",
    slug: "pdf-qa-chat",
    description: "A modern, real-time PDF question-answering application featuring AI-powered document analysis with streaming responses. Upload PDFs and ask questions to get intelligent answers using advanced semantic search and vector embeddings.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "OpenAI", "LangChain", "Pinecone", "Vercel AI SDK"],
    imageUrl: pdfQaRag,
    url: "https://chat31.vercel.app"
  },
  {
    title: "AI-Powered Form Generator",
    slug: "ai-form-generator",
    description: "An intelligent form builder that generates custom forms from natural language prompts. Features drag-and-drop form builder, real-time preview, submission analytics dashboard, and Cloudinary integration for file uploads.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Express", "MongoDB", "JWT", "Cloudinary", "Recharts"],
    imageUrl: formGenerator,
    url: "https://form-generator31.vercel.app"
  },
  {
    title: "Appointment Booking System",
    slug: "appointment-booking",
    description: "A full-stack appointment booking platform with Google Calendar integration, timezone support, and role-based management. Features real-time booking, automated calendar sync with Google Meet links, and OAuth authentication.",
    tags: ["Next.js", "TypeScript", "NextAuth.js", "PostgreSQL", "Drizzle ORM", "Tailwind", "Google Calendar API"],
    imageUrl: appointmentBooking,
    url: "https://appointment-booking2.vercel.app"
  },
  {
    title: "Invoice Management System",
    slug: "invoice-management",
    description: "I have created a web app for managing invoices. It's a simple app that allows you to create, edit, and delete invoices.",
    tags: ['React', 'Tailwindcss', 'Nodejs', 'Expressjs', 'Mongodb', 'backend GCP'],
    imageUrl: invoice,
    url: "https://invoice31.vercel.app/"
  },
  {
    title: "ECESA",
    slug: "ecesa",
    description: "Developed a full-stack web platform for student enrollment in college workshops and events.",
    tags: ['React', 'Tailwindcss', 'Nextjs', 'PostgresSQL', 'Razorpay'],
    imageUrl: ecesa,
    url: "https://ecesa2.vercel.app"
  },
  {
    title: "CertifyPro",
    slug: "certify-pro",
    description: "Built a platform to generate bulk certificates using CSV uploads and a drag-and-drop editor. Features include font customization, live preview, ZIP download.",
    tags: ['Vercel', 'Nextjs', 'Tailwindcss', 'MongoDB', 'Nodejs'],
    imageUrl: certifyPro,
    url: "https://certifygen31.vercel.app/"
  },
  {
    title: "ProjectHub",
    slug: "project-hub",
    description: "It's a platform where students can share their projects with the world. Whether you're into coding, design, engineering, or any other field, you can upload your projects.",
    tags: ['ReactJS', 'Tailwindcss', 'Appwrite', 'DigitalOcean'],
    imageUrl: projecthub,
    url: "https://projecthubs.vercel.app/"
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