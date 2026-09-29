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
  // {
  //   name: "Skills",
  //   hash: "/#skills",
  // },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Posts",
    hash: "/post",
  },

] as const;

export const experiencesData = [
  {
    title: "Maharashtra Institute of Technology",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    description:
      "Bachelor of Technology in Electronics & Computer Engineering (CGPA: 7.65).",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
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
    title: "Freelance Software Developer",
    location: "Invoice Management System",
    description:
      "Built a full-stack invoice management system for small businesses to simplify accounting and inventory tracking — real-time inventory updates, product search and categorization, invoice generation, and automated tax calculations. Built with React, Express, and MongoDB, deployed on GCP using Docker for containerization.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2025",
  },
  {
    title: "TechlyAssist",
    location: "Full Stack Developer Intern",
    description:
      "Developed end-to-end Stripe payment integration with automated subscription management, JWT authentication, and RESTful API architecture for user onboarding. Integrated 5+ third-party OAuth services (Slack, Gmail, Trello, GitHub, Jira) with secure token encryption, asynchronous job processing using BullMQ, and error handling. Implemented LangSmith tracing and performance monitoring to improve debugging and identify bottlenecks in AI agent workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2025 - Feb 2026",
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
    description: "A full-stack invoice management system for small businesses — real-time inventory updates, product search and categorization, invoice generation, and automated tax calculations. Built with React, Express, and MongoDB, deployed on GCP with Docker.",
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'GCP'],
    imageUrl: invoice,
    url: "https://invoice31.vercel.app/"
  },
  {
    title: "ECESA",
    slug: "ecesa",
    description: "Developed a full-stack web platform for student enrollment in college workshops and events.",
    tags: ['React', 'Tailwind CSS', 'Next.js', 'PostgreSQL', 'Razorpay'],
    imageUrl: ecesa,
    url: "https://ecesa2.vercel.app"
  },
  {
    title: "CertifyPro",
    slug: "certify-pro",
    description: "Built a platform to generate bulk certificates using CSV uploads and a drag-and-drop editor. Features include font customization, live preview, ZIP download.",
    tags: ['Vercel', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    imageUrl: certifyPro,
    url: "https://certifygen31.vercel.app/"
  },
  {
    title: "ProjectHub",
    slug: "project-hub",
    description: "It's a platform where students can share their projects with the world. Whether you're into coding, design, engineering, or any other field, you can upload your projects.",
    tags: ['ReactJS', 'Tailwind CSS', 'Appwrite', 'DigitalOcean'],
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