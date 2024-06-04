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
            className="mb-28 max-w-[50rem] text-center
            sm:mb-0 scroll-mt-[100rem]"
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
                               alt="srikar photo"
                               width="192"
                               height="192"
                               quality="100"
                               priority={true}
                               className="rounded-full object-cover shadow-xl h-36 w-36 border-[0.35rem] border-white"
                        />
                    </motion.div>
                    <motion.span
                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{type: "spring", stiffness: 325, duration: 2 }}
                        className="text-5xl absolute right-0 bottom-0">
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial = {{ opacity: 0, y: 100 }}
                animate = {{ opacity: 1, y: 0 }}
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            >
                <span className="font-bold">{`Hello, I'm Srikar Ummineni.`}</span> {`I'm`} a{" "}
                <span className="font-bold">full-stack developer</span> with over{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps. </span> My expertise lies in
                <span className="font-bold"> React, Next.js</span> in the frontend and{" "}
                <span className="font-bold">Node.js, Express, Spring boot, Java</span> in the backend along with{" "}
                <span className="font-bold">MongoDB, MySQL, PostgreSQL</span> databases. At the architecture level, I have experience in{" "}
                developing and deploying <span className="italic">Microservices</span> utilising <span className="font-bold">AWS services</span>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.2}}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 text-lg font-medium"
            >
                <Link href="#contact"
                      className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2
                                 rounded-full outline-none focus:scale-110 hover:scale-110
                                 hover:bg-gray-950 active:scale-105 transition"
                >
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition"/>
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                               outline-none focus:scale-110 hover:scale-110
                               active:scale-105 transition cursor-pointer border
                               border-gray-900/20 dark:bg-white/10"
                    href = "/usrikar_resume_sde_3.pdf"
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
                    href="https://www.linkedin.com/in/srikar-ummineni-67864316b/"
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
                    href="https://github.com/Ferogle"
                    target="_blank"
                >
                    <BsGithub/>
                </a>
            </motion.div>
        </section>
    );
}

export default Intro;