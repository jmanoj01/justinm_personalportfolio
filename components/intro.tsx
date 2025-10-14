"use client";
import React, {Fragment, useContext, useEffect} from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";

function Intro() {
    const {ref, inView} = useInView(
        {threshold: 1});
    const {setActiveSection} = useContext(ActiveSectionContext);
    useEffect(() => {
        if (inView) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection]);
    return (
        <section
            ref={ref}
            className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
            id={"home"}
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity:0, scale: 0 }}
                        animate={{ opacity:1, scale: 1 }}
                        transition={{ duration: 0.2, type:"tween" }}
                    >
                        <Image src='/portfolio-img-crop.jpg'
                               alt="justin photo"
                               width="196"
                               height="196"
                               quality="100"
                               priority={true}
                               className="rounded-full object-cover shadow-xl h-42 w-42 border-[0.25rem] border-white"
                        />
                    </motion.div>
                    <motion.span
                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{type: "spring", stiffness: 325, duration: 2 }}
                        className="text-6xl absolute right-0 bottom-0">
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-3xl"
            >
                <div className="text-3xl mt-2">
                    Hi, I&apos;m Justin! I&apos;m an undergraduate student at the University of Massachusetts-Amherst pursuing a {" "}
                    <span className="font-bold">B.S in Computer Science and Mathematics</span>, seeking new opportunities to learn and expand my abilities as an engineer. I&apos;m interested in{" "}
                    <span className="font-bold">full-stack development, machine learning, and data science</span>, and I love to innovate and solve problems. Browse through my site to view work, including research and some of my favorite personal projects!
                </div>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.2}}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 text-lg font-medium"
            >
                <Link href="#contact"
                      className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                                 outline-none focus:scale-110 hover:scale-110
                                 active:scale-105 transition cursor-pointer border
                                 border-gray-900/20 dark:bg-white/10"
                >
                    Contact<BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition"/>
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                               outline-none focus:scale-110 hover:scale-110
                               active:scale-105 transition cursor-pointer border
                               border-gray-900/20 dark:bg-white/10"
                    href = "/Justin_Manoj_cv1.pdf"
                    download
                >
                    Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center
                               gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
                               active:scale-105 transition cursor-pointer border
                               border-gray-900/20 hover:text-blue-500 dark:bg-white/10
                               dark:text-white/60 dark:hover:text-blue-500"
                    href="https://www.linkedin.com/in/justinmmanoj/"
                    target="_blank"
                >
                    <BsLinkedin/>
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center
                               gap-2 rounded-full text-[1.2rem] focus:scale-[1.15]
                               hover:scale-[1.15] active:scale-105 transition
                               cursor-pointer border border-gray-900/20
                               hover:text-white hover:bg-black dark:bg-white/10 dark:text-white/60
                               dark:hover:text-white dark:hover:bg-black"
                    href="https://github.com/jmanoj01"
                    target="_blank"
                >
                    <BsGithub/>
                </a>
            </motion.div>
        </section>
    );
}

export default Intro;