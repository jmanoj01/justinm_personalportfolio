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
    title: "Software Developer",
    organisation: "ChitChat Workplace",
    location: "Boston, MA",
    description: [
      "Engineered ChitChat, an internal communication platform designed to enhance organizational productivity through AI-powered messaging, email integration, and customizable widgets, eliminating the need to switch between multiple applications.",
      "Integrated Microsoft Graph API for email and calendar functionality, utilizing Azure MSAL for secure authentication, and implemented real-time chat, notifications, and user interaction features." 
    ],
    icon: React.createElement(CgWorkAlt),
    date: "04/2025 - Present"
  },
  {
    title: "Software Developer Intern",
    organisation: "GBCS Group/SkyIT Services",
    location: "Alberta, CA",
    description: [
      "Developed and enhanced full-stack web applications using React.js, Next.js, TypeScript, Prisma ORM, PostgreSQL, and deployed on Microsoft Azure, improving functionality and user experience.",
      "Built responsive UI components with Tailwind CSS and implemented modular features; conducted code reviews to ensure quality and adherence to best practices.",
      "Collaborated in Agile teams and created technical documentation to streamline accessibility and onboarding processes."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "03/2025 - Present"
  },
  {
    title: "Undergraduate Student Researcher",
    organisation: "UMass Amherst CICS Undergraduate Research Program",
    location: "Amherst, MA",
    description: [
      "Designed and conducted a comprehensive survey on cyber-threats associated with Generative AI and Large Language Models.",
      "Collaborated with a research team to analyze AI-related attack vectors including jailbreaking, data poisoning, and model inversion attacks. Compiled findings into a research poster on AI-related cybersecurity threats and mitigation techniques."
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2024 – Feb 2025"
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
    title: "Collaborative Sticky Notes App",
    description: "A real-time collaborative brainstorming application that enables teams to create, edit, and organize digital sticky notes. Features live synchronization, team workspaces, and intuitive drag-and-drop functionality for enhanced productivity.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Convex", "Clerk", "LiveBlocks", "Vercel"] as const,
    year: 2024,
    imageUrl: sticky_notes_image,
    projectUrl: "https://sticky-notes-collaborative.vercel.app",
    githubUrl: "https://github.com/jmanoj01/sticky-notes-app",
  },
  {
    title: "Roam Traveler App",
    description: "An intelligent travel planning application powered by OpenAI that generates personalized itineraries, destination recommendations, and budget estimates. Features smart destination analysis, weather integration, and collaborative trip planning.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Convex", "OpenAI API", "Vercel"] as const,
    year: 2024,
    imageUrl: travel_app_image,
    projectUrl: "https://roam-traveler.vercel.app",
    githubUrl: "https://github.com/jmanoj01/roam-traveler",
  },
  {
    title: "Smart Weather App",
    description: "A comprehensive weather application featuring location-based forecasts, interactive maps, and detailed meteorological data. Includes geolocation services, weather alerts, and responsive design optimized for all devices.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind", "OpenWeatherMap API", "Geolocation", "Vercel"] as const,
    year: 2023,
    imageUrl: weather_app_image,
    projectUrl: "https://weather-dashboard-smart.vercel.app",
    githubUrl: "https://github.com/jmanoj01/weather-app"
  },
  {
    title: "URL Shortener App",
    description: "A modern URL shortening app with analytics tracking, custom short codes, and QR code generation. Features user authentication, link management dashboard, and detailed click analytics with geographical insights.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "Tailwind", "Prisma", "Vercel"] as const,
    year: 2023,
    imageUrl: weather_app_image, // Replace with actual image
    projectUrl: "https://short-link-service.vercel.app",
    githubUrl: "https://github.com/jmanoj01/url-shortener"
  },
  {
    title: "Amazon Product Scraper",
    description: "An advanced web scraping tool built with Python that efficiently extracts Amazon product data including prices, ratings, reviews, and availability. Features automated data collection, CSV export, and Docker containerization for scalable deployment.",
    tags: ["Python", "Jupyter Notebook", "Selenium", "BeautifulSoup", "AWS", "Docker", "Data Analysis"] as const,
    year: 2023,
    imageUrl: weather_app_image, // Replace with actual image
    githubUrl: "https://github.com/jmanoj01/amazon-scraper",
  }
] as const;

export const skillsData = [
  // Programming Languages
  { name: "JavaScript", Icon: SiJavascript, category: "languages" },
  { name: "TypeScript", Icon: SiTypescript, category: "languages" },
  { name: "Python", Icon: FaPython, category: "languages" },
  { name: "Java", Icon: FaJava, category: "languages" },
  { name: "C", Icon: FaC, category: "languages" },
  { name: "Swift", Icon: FaSwift, category: "languages" },
  { name: "HTML", Icon: FaHtml5, category: "languages" },
  { name: "CSS", Icon: FaCss3Alt, category: "languages" },
  
  // Frontend Frameworks & Libraries
  { name: "React", Icon: FaReact, category: "frontend" },
  { name: "Next.js", Icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, category: "frontend" },
  { name: "Redux", Icon: SiRedux, category: "frontend" },
  
  // Backend & Databases
  { name: "Flask", Icon: FaFlask, category: "backend" },
  { name: "MySQL", Icon: SiMysql, category: "backend" },
  { name: "PostgreSQL", Icon: SiPostgresql, category: "backend" },
  { name: "Prisma", Icon: SiPrisma, category: "backend" },
  
  // Cloud & DevOps
  { name: "AWS", Icon: FaAws, category: "cloud" },
  { name: "Docker", Icon: SiDocker, category: "cloud" },
  { name: "Vercel", Icon: SiVercel, category: "cloud" },
  
  // Tools & Others
  { name: "Git", Icon: FaGit, category: "tools" },
  { name: "PyTorch", Icon: SiPytorch, category: "tools" },
  { name: "Pandas", Icon: SiPandas, category: "tools" },
  { name: "Jupyter Notebook", Icon: SiJupyter, category: "tools" },
  { name: "LaTeX", Icon: SiLatex, category: "tools" },
  { name: "AutoCAD", Icon: SiAutocad, category: "tools" },
  { name: "Arduino", Icon: SiArduino, category: "tools" }
] as const;

export const skillCategories = {
  languages: "Programming Languages",
  frontend: "Frontend Development",
  backend: "Backend & Databases", 
  cloud: "Cloud & DevOps",
  tools: "Tools & Technologies"
} as const;
