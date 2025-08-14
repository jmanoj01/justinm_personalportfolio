"use client";
import React, {useContext, useEffect} from "react";
import SectionHeading from "@/components/section-heading";
import {skillsData} from "@/lib/data";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";
import {motion} from "framer-motion";

function Skills() {
  const {ref, inView} = useInView({threshold: 0.75});
  const {setActiveSection} = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView) setActiveSection("Skills");
  }, [inView, setActiveSection]);

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-24 mb-28 max-w-[53rem] text-center sm:mb-24"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="mt-4 flex flex-wrap justify-center gap-2 text-xl text-indigo-950">
        {skillsData.map(({name, Icon}, index) => (
          <motion.li
            key={name}
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.08 * index}}
            className="flex items-center gap-2 rounded-xl border border-black/[0.1]
                       bg-white px-8 py-4 dark:bg-white/10 dark:text-white/80"
          >
            <Icon className="h-6 w-6" />
            {name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
