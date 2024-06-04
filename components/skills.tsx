"use client";
import React, {useContext, useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import {skillsData} from "@/lib/data";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";
import {motion} from "framer-motion";

function Skills() {
    const {ref, inView} = useInView({threshold: 0.75});
    const {setActiveSection} = useContext(ActiveSectionContext);
    useEffect(() => {
        if (inView) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection]);
    return (
        <section
            className="mb-28 max-w-[53rem] scroll-mt-28
        text-center sm:mb-40 "
            ref={ref}
            id={"skills"}
        >
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 mt-4
            text-lg text-indigo-950"
            >
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.08*index}}
                        className="bg-white border border-black/[0.1]
                        rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;