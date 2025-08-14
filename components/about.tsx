"use client";
import React, {useContext, useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {ActiveSectionContext} from "@/context/active-section-context";

function About() {
    const {ref, inView} = useInView({threshold: 0.75});
    const {setActiveSection} = useContext(ActiveSectionContext);
    useEffect(() => {
        if (inView) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection]);
    return (
        <motion.section
            ref={ref}
            id={"about"}
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            className="mb-28 max-w-[45rem] text-center
            leading-8 sm:mb-40 scroll-mt-28"
        >
            <SectionHeading>
                <b>About Me</b>
            </SectionHeading>
            <p className="mb-4 mt-0">
                Hello, I&apos;m Justin Manoj, a Computer Science student at the University of Massachusetts-Amherst in the 4+1 M.S Program and Honors College. My passion lies in distributed systems, performance optimization, and building software that scales, combining deep technical knowledge with a product-minded approach to create solutions that handle millions of users and complex data processing challenges.
            </p>
            <div className="mt-10">
            </div>
        </motion.section>
    );
}

export default About;