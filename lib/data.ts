import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaSwift,
  FaGit,
  FaFlask,
  FaAws,
  FaRegFileCode
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiLatex,
  SiArduino,
  SiMysql,
  SiPytorch,
  SiRedux,
  SiPandas,
  SiAutocad,
  SiJupyter,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiTableau,
  SiCplusplus,
  SiGo,
  SiRust,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNumpy,
  SiAmazon,
  SiNodedotjs,
  SiScikitlearn,
  SiAuth0,
  SiJest
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaC } from "react-icons/fa6";

// Import your actual project images
import chitchat_image from "@/public/live_streaming_online.png";
import sticky_notes_image from "@/public/live_board_sharing.png";
import travel_app_image from "@/public/notion_clone.png";
import weather_app_image from "@/public/discord_clone.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" }
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Software Engineer",
    organisation: "ChitChat Workplace",
    location: "Boston, MA",
    description: [
      "Integrated chat, email, video calls, and calendar into one workspace using React, Next.js, TypeScript, and Microsoft Graph.",
      "Reduced context switching by 10+ hours/month by unifying communications and scheduling in a single surface.",
      "Added OpenAI API copilot for smart replies, meeting summaries, priority notifications, and context-aware suggestions.",
      "Built real-time WebSocket+Redis pipeline for 5,000+ messages/day; shipped React widget SDK for third-party embeds."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2025 – Present"
  },
  {
    title: "Software Engineer Intern",
    organisation: "GBCS Group/SkyIT Services",
    location: "Alberta, CA",
    description: [
      "Migrated 8 REST endpoints to GraphQL in order to eliminate over-fetching and shrink client requests on internal SaaS platform.",
      "Optimized React Query, code splitting, and PostgreSQL indexes to cut page load times by 30%.",
      "Delivered 60+ reusable TypeScript/Tailwind components and enforced code quality across 100+ PRs by implementing TypeScript linting rules, Jest utilities, and component documentation."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2025 – Present"
  },
  {
    title: "Undergraduate Student Researcher",
    organisation: "Early Research Scholars Program - UMass Amherst",
    location: "Amherst, MA",
    description: [
      "Developed Python framework to detect malicious prompts in 500+ test cases, reducing manual review time by 70%.",
      "Enabled repeatable regression testing for GPT-4, Claude, and Llama with parameterized cases and standardized outputs.",
      "Tested 10+ LLM attack vectors and proposed security hardening recommendations for production deployment."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2024 – Feb 2025"
  },
  {
    title: "Software Engineer",
    organisation: "BUILD UMass",
    location: "Amherst, MA",
    description: [
      "Built application to help students find events and organizations on campus.",
      "Implemented backend with Node.js, Express, and PostgreSQL to store and retrieve event data.",
      "Created frontend with React and Tailwind CSS to display event information and allow users to filter and search for events."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2024 – Present"
  },
  {
    title: "Lead Programmer",
    organisation: "NRHS Robotics Team, FIRST Robotics, VEX Robotics",
    location: "Thiells, NY",
    description: [
      "Designed and implemented robot autonomous functions utilizing C++, focusing on computer vision, object detection, path-finding algorithms, and sensor integration for competitive robotics.",
      "Led software development team and collaborated cross-functionally to ensure seamless integration of mechanical, electrical, and software components for regional and national competitions."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2022 - Jun 2023"
  },
  {
    title: "Mathematics Tutor",
    organisation: "NRHS Math Lab & Private Tutoring",
    location: "Thiells, NY",
    description: [
      "Provide individualized tutoring support in mathematics for high school students covering topics from Algebra I through AP Calculus BC, resulting in improved academic performance and confidence.",
      "Conduct SAT/ACT math preparation sessions, developing customized study plans and test-taking strategies that help students achieve target scores for college admissions."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Present"
  },
] as const;

export const projectsData = [
  {
    title: "ChitChat Workplace",
    description: "A comprehensive internal communication platform designed for organizations, featuring AI-powered messaging, seamless email integration, and customizable productivity widgets. Built with modern web technologies and deployed on Azure cloud infrastructure.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Azure", "Microsoft Graph API"] as const,
    year: 2025,
    imageUrl: chitchat_image,
    projectUrl: "https://chitchatwork.com",
  },
  {
    title: "UMass Dining Recommendation Engine",
    description: "ML recommendation system using PyTorch and Sentence-Transformers to help students discover meals at UMass Amherst across 100+ daily menu items from 4 dining hall commons (Franklin, Worcester, Hampshire, and Berkshire) using a personalized dietary-preference matching algorithm.",
    tags: ["PyTorch", "FastAPI", "Python", "Next.js", "PostgreSQL", "Redis", "Scikit-learn", "Sentence-Transformers", "OpenAI API"] as const,
    year: 2025,
    imageUrl: weather_app_image,
  },
  {
    title: "Terminal Clipboard History Manager",
    description: "A cross-platform (Linux, MacOS, Windows) terminal clipboard history manager built with Go, using BubbleTea TUI library and storing data in SQLite database, featuring JSON-backed storage, fuzzy search, auto-categorization, and syntax highlighting via Chroma, supporting up to 500-600 text/image entries with duplicate detection and export functionality.",
    tags: ["Go", "SQLite", "BubbleTea", "Chroma", "Lipgloss", "JSON", "Fuzzy Search", "Auto-Categorization", "Syntax Highlighting"] as const,
    year: 2025,
    imageUrl: weather_app_image,
    projectUrl: "https://github.com/jmanoj01/clipboard_manager",
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built with React, Next.js, TypeScript, Tailwind, and Vercel to showcase my projects and skills.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"] as const,
    year: 2025,
    imageUrl: weather_app_image,
    projectUrl: "https://jmmanoj.vercel.app",
    githubUrl: "https://github.com/jmanoj01/portfolio-website"
  },
  {
    title: "Collaborative Sticky Notes Application",
    description: "A real-time collaborative brainstorming application that enables teams to create, edit, and organize digital sticky notes. Features live synchronization, team workspaces, and intuitive drag-and-drop functionality for enhanced productivity.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Convex", "Clerk", "LiveBlocks", "Vercel"] as const,
    year: 2024,
    imageUrl: sticky_notes_image,
    projectUrl: "https://sticky-notes-collaborative.vercel.app",
    githubUrl: "https://github.com/jmanoj01/sticky-notes-app",
  },
  {
    title: "Roam - AI Travel Planning Platform",
    description: "An intelligent travel planning application powered by OpenAI that generates personalized itineraries, destination recommendations, and budget estimates. Features smart destination analysis, weather integration, and collaborative trip planning.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Convex", "OpenAI API", "Vercel"] as const,
    year: 2024,
    imageUrl: travel_app_image,
    projectUrl: "https://roam-traveler.vercel.app",
    githubUrl: "https://github.com/jmanoj01/roam-traveler",
  },
  {
    title: "Smart Weather Application",
    description: "A comprehensive weather application featuring location-based forecasts, interactive maps, and detailed meteorological data. Includes geolocation services, weather alerts, and responsive design optimized for all devices.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "OpenWeatherMap API", "Geolocation", "Vercel"] as const,
    year: 2023,
    imageUrl: weather_app_image,
    projectUrl: "https://weather-dashboard-smart.vercel.app",
    githubUrl: "https://github.com/jmanoj01/weather-app"
  },
  {
    title: "URL Shortener Application",
    description: "A modern URL shortening app with analytics tracking, custom short codes, and QR code generation. Features user authentication, link management dashboard, and detailed click analytics with geographical insights.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "Tailwind", "Prisma", "Vercel"] as const,
    year: 2023,
    imageUrl: weather_app_image, // Replace with actual image
    projectUrl: "https://short-link-service.vercel.app",
    githubUrl: "https://github.com/jmanoj01/url-shortener"
  },
] as const;

export const skillsData = [
  // Programming Languages
  { name: "JavaScript", Icon: SiJavascript, category: "languages" },
  { name: "TypeScript", Icon: SiTypescript, category: "languages" },
  { name: "Python", Icon: FaPython, category: "languages" },
  { name: "Java", Icon: FaJava, category: "languages" },
  { name: "C", Icon: FaC, category: "languages" },
  { name: "C++", Icon: SiCplusplus, category: "languages" },
  { name: "Go", Icon: SiGo, category: "languages" },
  { name: "Rust", Icon: SiRust, category: "languages" },
  { name: "HTML", Icon: FaHtml5, category: "languages" },
  { name: "CSS", Icon: FaCss3Alt, category: "languages" },
  { name: "SQL", Icon: FaRegFileCode, category: "languages" },
  
  // Frontend Frameworks & Libraries
  { name: "React", Icon: FaReact, category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, category: "frontend" },
  { name: "Redux", Icon: SiRedux, category: "frontend" },
  
  // Backend & Databases
  { name: "Flask", Icon: FaFlask, category: "backend" },
  { name: "Node.js", Icon: SiNodedotjs, category: "backend" },
  { name: "Express", Icon: SiExpress, category: "backend" },
  { name: "GraphQL", Icon: SiGraphql, category: "backend" },
  { name: "MySQL", Icon: SiMysql, category: "backend" },
  { name: "PostgreSQL", Icon: SiPostgresql, category: "backend" },
  { name: "MongoDB", Icon: SiMongodb, category: "backend" },
  { name: "Prisma", Icon: SiPrisma, category: "backend" },
  { name: "Redis", Icon: FaRegFileCode, category: "backend" },
  
  // Cloud & DevOps
  { name: "AWS", Icon: FaAws, category: "cloud" },
  { name: "Azure", Icon: SiAmazon, category: "cloud" },
  { name: "Docker", Icon: SiDocker, category: "cloud" },
  { name: "Vercel", Icon: SiVercel, category: "cloud" },
  
  // Tools & Others
  { name: "Git", Icon: FaGit, category: "tools" },
  { name: "PyTorch", Icon: SiPytorch, category: "tools" },
  { name: "Pandas", Icon: SiPandas, category: "tools" },
  { name: "NumPy", Icon: SiNumpy, category: "tools" },
  { name: "Scikit-learn", Icon: SiScikitlearn, category: "tools" },
  { name: "Jupyter Notebook", Icon: SiJupyter, category: "tools" },
  { name: "OAuth", Icon: SiAuth0, category: "tools" },
  { name: "Azure SDK", Icon: FaRegFileCode, category: "tools" },
  { name: "Jest", Icon: SiJest, category: "tools" },
  { name: "LaTeX", Icon: SiLatex, category: "tools" },
  { name: "Tableau", Icon: SiTableau, category: "tools" },
  { name: "AutoCAD", Icon: SiAutocad, category: "tools" },
  { name: "Arduino", Icon: SiArduino, category: "tools" }
] as const;