"use client";
import React, {useContext, useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";

function Projects() {
    const {ref, inView} = useInView();
    const {setActiveSection} = useContext(ActiveSectionContext);
    useEffect(() => {
        if (inView) {
            setActiveSection("Projects");
        }
    },[inView, setActiveSection]);
    return (
        <section
            id={"projects"}
            className="scroll-mt-28 mb-28"
            ref={ref}
        >
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment
                        key={index}
                    >
                        <Project {...project}/>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Projects;