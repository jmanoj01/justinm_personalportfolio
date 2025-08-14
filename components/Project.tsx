"use client";
import React, { useRef, useState } from 'react';
import { useScroll, useTransform } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
    title: string;
    description: string;
    tags: readonly string[];
    year: number; // New prop for project year
    projectUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    index: number;
}

const Project: React.FC<ProjectProps> = ({ 
    title, 
    description, 
    tags, 
    year,
    projectUrl,
    githubUrl,
    demoUrl,
    index
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    const xProgress = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    const handleProjectClick = () => {
        if (projectUrl) {
            window.open(projectUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                x: xProgress
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 last:mb-0"
        >
            <motion.div
                className="group relative overflow-hidden rounded-xl bg-white bg-opacity-60 
                          backdrop-blur-md border border-gray-300
                          hover:border-opacity-60 transition-all duration-500
                          dark:bg-gray-900 dark:bg-opacity-60 dark:border-gray-600 
                          dark:border-opacity-40 dark:hover:border-opacity-60
                          shadow-lg hover:shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ y: -4 }}
                layout
            >
                {/* Animated Background Gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 
                             via-purple-500/5 to-pink-500/5"
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* Main Content */}
                <div className="relative p-6 flex items-center justify-between">
                    {/* Left Section - Project Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-3">
                            {/* Year Badge */}
                            <motion.div
                                className="flex-shrink-0 px-3 py-2 rounded-lg bg-gradient-to-r 
                                         from-blue-600 to-purple-600 flex items-center justify-center
                                         text-white font-bold text-sm shadow-lg min-w-[60px]"
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    rotate: isHovered ? 2 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {year}
                            </motion.div>

                            {/* Title and Status */}
                            <div className="flex-1 min-w-0">
                                <motion.h3
                                    className="text-xl font-bold text-gray-900 dark:text-gray-50 
                                             truncate cursor-pointer"
                                    onClick={handleProjectClick}
                                    whileHover={{ scale: 1.02 }}
                                    animate={{
                                        x: isHovered ? 5 : 0,
                                    }}
                                >
                                    {title}
                                </motion.h3>
                                
                                {/* Project Age Indicator */}
                                <motion.div 
                                    className="flex items-center gap-2 mt-1"
                                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                                >
                                    <CalendarIcon className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        {new Date().getFullYear() - year === 0 
                                            ? 'This year' 
                                            : `${new Date().getFullYear() - year} year${new Date().getFullYear() - year > 1 ? 's' : ''} ago`
                                        }
                                    </span>
                                    
                                    {/* Live Status */}
                                    {projectUrl && (
                                        <>
                                            <div className="w-1 h-1 bg-gray-400 rounded-full mx-1" />
                                            <motion.div
                                                className="w-2 h-2 bg-green-500 rounded-full"
                                                animate={{
                                                    scale: isHovered ? [1, 1.3, 1] : 1,
                                                }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            />
                                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                                Live
                                            </span>
                                        </>
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        {/* Description - Expandable */}
                        <motion.div
                            layout
                            className="mb-4"
                        >
                            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed
                                        ${!isExpanded ? 'line-clamp-2' : ''}`}>
                                {description}
                            </p>
                            
                            {description.length > 100 && (
                                <motion.button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-blue-600 dark:text-blue-400 text-sm font-medium 
                                             mt-1 hover:text-blue-700 dark:hover:text-blue-300
                                             transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {isExpanded ? 'Show less' : 'Read more'}
                                </motion.button>
                            )}
                        </motion.div>

                        {/* Tags - Horizontal Scroll */}
                        <motion.div 
                            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
                            animate={{
                                y: isHovered ? -2 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {tags.map((tag, tagIndex) => (
                                <motion.span
                                    key={tagIndex}
                                    className="flex-shrink-0 px-3 py-1 text-xs font-medium 
                                             bg-indigo-200 dark:bg-indigo-800 text-indigo-800 
                                             dark:text-indigo-200 rounded-full border 
                                             border-indigo-300 dark:border-indigo-700
                                             backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(79, 70, 229, 0.9)",
                                        color: "white"
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Section - Actions */}
                    <motion.div 
                        className="flex items-center gap-3 ml-6"
                        animate={{
                            x: isHovered ? -5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Quick Action Buttons */}
                        <div className="flex gap-2">
                            {projectUrl && (
                                <motion.button
                                    onClick={handleProjectClick}
                                    className="w-10 h-10 rounded-full bg-purple-950 dark:bg-indigo-600 
                                             text-white flex items-center justify-center shadow-lg
                                             hover:bg-purple-900 dark:hover:bg-indigo-500 
                                             transition-colors duration-200 backdrop-blur-sm"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    title="View Project"
                                >
                                    <ExternalLinkIcon className="w-4 h-4" />
                                </motion.button>
                            )}
                            
                            {githubUrl && (
                                <motion.button
                                    onClick={() => window.open(githubUrl, '_blank')}
                                    className="w-10 h-10 rounded-full border-2 border-purple-950 
                                             dark:border-indigo-600 text-purple-950 dark:text-indigo-300
                                             flex items-center justify-center backdrop-blur-sm
                                             hover:bg-purple-950 hover:text-white dark:hover:bg-indigo-600
                                             dark:hover:text-white transition-all duration-200"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    title="View Code"
                                >
                                    <GithubIcon className="w-4 h-4" />
                                </motion.button>
                            )}
                            
                            {demoUrl && (
                                <motion.button
                                    onClick={() => window.open(demoUrl, '_blank')}
                                    className="w-10 h-10 rounded-full bg-gradient-to-r 
                                             from-indigo-600 to-purple-600 dark:from-indigo-500 
                                             dark:to-purple-500 text-white flex items-center 
                                             justify-center shadow-lg backdrop-blur-sm"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    title="Live Demo"
                                >
                                    <PlayIcon className="w-4 h-4" />
                                </motion.button>
                            )}
                        </div>

                        {/* Expand Arrow */}
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700
                                     bg-opacity-60 backdrop-blur-sm flex items-center 
                                     justify-center text-gray-600 dark:text-gray-300 
                                     hover:bg-gray-200 dark:hover:bg-gray-600 
                                     transition-colors duration-200"
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <ChevronDownIcon className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Indigo/Purple Animated Border */}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r 
                             from-indigo-400 via-purple-500 to-indigo-400 
                             dark:from-indigo-500 dark:via-purple-400 dark:to-indigo-500"
                    initial={{ width: "0%" }}
                    animate={{ 
                        width: isHovered ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Themed Floating Particles */}
                <AnimatePresence>
                    {isHovered && (
                        <>
                            <motion.div
                                className="absolute top-4 right-4 w-1 h-1 bg-indigo-400 
                                         dark:bg-indigo-500 rounded-full"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                    y: [0, -15, -30],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute bottom-6 left-8 w-1 h-1 bg-purple-500 
                                         dark:bg-purple-400 rounded-full"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                    x: [0, 15, 30],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

// Icon components remain the same...
const CalendarIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
    </svg>
);

// Other icon components remain the same...
const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
);

const PlayIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 16v-4M12 8v4" />
        <circle cx="12" cy="12" r="10" />
    </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export default Project;
