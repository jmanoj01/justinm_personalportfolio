import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import live_stream_png from "@/public/live_streaming_online.png";
import live_board_png from "@/public/live_board_sharing.png";
import notion_clone_png from "@/public/notion_clone.png";
import trello_clone_png from "@/public/trello_clone.png";
import discord_clone_png from "@/public/discord_clone.png";
import saas_ai_png from "@/public/saas_ai_platform.png";

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
        title: "Graduate Research Assistant",
        organisation: "WirelessVT",
        location: "Falls Church, Virginia",
        description:
        [
            "Designed and implemented optimized Dockerfiles for both frontend (Angular) and backend (Django) components " +
            "improving deployment efficiency and consistency by using multi-stage builds to minimize the image size and enhance performance.",
            "Modelling context awareness and policy adaptation dynamic spectrum sharing between 5G terrestrial and " +
            "incumbent networks over the satellite bands in Python using various OOPs and design principles"
        ],
        icon: React.createElement(LuGraduationCap),
        date: "11/2023 - Present",
    },
    {
        title: "Software Engineer 1",
        organisation: "Cadence Design Systems",
        location: "Bangalore, India",
        description:
        [
            "Architected the development of cloud-native microservices using Spring Cloud for the CRM platform, enabling dynamic scaling to handle high volumes of customer interactions and data processing, resulting in a 40% reduction in maintenance costs by simplifying service management and deployment.",
            "Led the implementation of secured REST endpoints utilizing API versioning, Spring Security, OAuth2, and JWTs, reducing security vulnerabilities by 35% and increasing overall API security by 15%, ensuring the protection of sensitive customer information and compliance with data privacy regulations.",
            "Implemented data persistence using Spring Data JPA and Hibernate, along with a distributed caching system like Redis, achieving an 80% increase in system performance and a 90% reduction in response times, providing faster access to customer data and improving user experience for CRM users.",
            "Built Spring Boot scheduled tasks to monitor and track customer interactions and follow-ups based on set parameters, integrating with notification systems (e.g., email, SMS) to automatically initiate 95% of reminder and follow-up actions, ensuring timely customer engagement and improved relationship management.",
            "Successfully deployed and managed microservices on AWS, utilizing services such as EC2, S3, Lambda, RDS, IAM, CloudFormation, CloudWatch, Elastic Beanstalk, and SQS, enhancing the platform's scalability and reliability to support growing customer databases and interaction logs.",
            "Utilized Apache Kafka to build a real-time event-driven architecture, enabling the system to handle over 1000+ customer events per second, facilitating real-time updates and notifications for customer interactions and support tickets.",
            "Implemented a continuous integration/deployment pipeline, including pull requests, code reviews, and load/stress testing, as well as unit, integration, and end-to-end testing, ensuring robust and reliable CRM platform deployments with minimal downtime.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "01/2022 - 07/2023",
    },
    {
        title: "Full-Stack Developer",
        organisation: "NimbleWork (formerly Digite, Inc)",
        location: "Mumbai, India",
        description:
        [
            "Worked on B2B Saas Project Management application.",
            "Developed a microservice for task management using Spring boot, Docker and integrated it with a microfrontend architecture into a single, highly maintainable service, simplifying deployment and significantly reducing deployment costs.",
            "Moved traditional JSPs to React components and improved runtime performance by 30%.",
            "Refactored legacy and reduced overall database calls by 65%.",
            "Collaborated with the Licensing Management team to develop an email sending system using Spring Boot and Apache Freemarker Template.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "06/2021 - 01/2022",
    },
    {
        title: "Software Engineer Intern",
        organisation: "Crio.do",
        location: "Bangalore, India",
        description:
        [
            "Worked on their project based learning platform in MERN stack.",
            "Enhanced \"Streaks\" feature, which incentivized consistent platform usage and resulted in a 25% increase in user engagement.",
            "Developed a session management system that streamlined creation, administration, and attendance tracking. This resulted in a 40% increase in average session attendance.",
            "Enhanced certificate generation service, reducing new certificate creation time by 50% from 2 days to 1 day",
        ],
        icon: React.createElement(FaReact),
        date: "12/2020 - 05/2021",
    },
] as const;

export const projectsData = [
    {
        title: "Online Live Streaming Platform",
        description:
            "A video live-streaming service with real-time chat, video player, followers, block and unblock users, using local tunnels, webhooks and  using RTMP, WHIP protocols to connect to OBS",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "NoSQL"],
        imageUrl: live_stream_png,
    },
    {
        title: "Collaborative Real-time Whiteboard",
        description:
            "A real-time whiteboard collaborating with multiple users and whiteboard from scratch with ability to draw rectangles, ellipses, sticky notes, and free hand pencil drawing",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Convex", "Clerk", "LiveBlocks"],
        imageUrl: live_board_png,
    },
    {
        title: "Collaborative Note-taking Application",
        description:
            "End-to-end fullstack note taking application, all with proper editor, cover images, nested documents, publishing documents to public, real-time database, delete an restore from trash, etc.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Convex"],
        imageUrl: notion_clone_png,
    },
    {
        title: "Social Communication Platform",
        description:
            "A real-time instant messaging platform with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles and file attachments.",
        tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma"],
        imageUrl: discord_clone_png,
    },
    {
        title: "Saas AI Platform",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: saas_ai_png,
    },
    {
        title: "Kanban-style Project Management Tool",
        description:
            "A web-based, kanban-style, list-making application with workspaces, boards, lists, cards, audit logs / activity as well as member roles and permissions.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: trello_clone_png,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Prisma",
    "MongoDB",
    "NoSQL",
    "MySQL",
    "Context API",
    "Django",
    "Redux",
    "GraphQL",
    "Express",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Django",
    "Framer Motion",
    "AWS",
    "Docker",
    "Kubernetes",
    "Apache Kafka",
    "Hibernate",
    "JPA",
    "Redis"
] as const;