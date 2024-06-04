'use client';
import React, {useContext, useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {experiencesData} from "@/lib/data";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";
import {useTheme} from "@/context/theme-switch-context";

function Experience() {
    const {ref, inView} = useInView({threshold: 0.1});
    const {setActiveSection} = useContext(ActiveSectionContext);
    useEffect(() => {
        if (inView) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection]);

    const {theme} = useTheme();

    return (
        <section
            ref={ref}
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-32"
        >
            <SectionHeading>
                Experience
            </SectionHeading>
            <VerticalTimeline
                animate = {true}
                lineColor = {theme==="light"?"#3b82f6":""}
            >
            {
                experiencesData.map((experienceItem, index) => {
                    // const {ref, inView} = useInView({triggerOnce: true});
                    return <React.Fragment key={index} >
                            <VerticalTimelineElement
                                date={experienceItem.date}
                                contentStyle={{
                                    background: theme==="light"?"#93c5fd":"rgba(255,255,255,0.15)",
                                    color: "text-gray-700",
                                    boxShadow: "none",
                                    border: theme === "light" ? "1px solid #dcfce7" : "1px solid rgba(0, 0, 0, 0.05)",

                                }}
                                contentArrowStyle = {{
                                    borderRight: theme==="light" ? "7px solid  #172554" : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                }}
                                icon = {experienceItem.icon}
                                iconStyle = {{
                                    background: theme==="light" ? "#172554" : "rgba(255, 255, 255, 0.25)",
                                    color: "#fff",
                                }}
                                visible={true}
                            >
                                <div className="flex flex-row justify-between">
                                    <span
                                        className="font-semibold capitalize inline-block
                                        dark:text-lime-300"
                                    >
                                        {experienceItem.title}
                                    </span>
                                    <span className="font-normal italic
                                    dark:text-lime-300">
                                        {experienceItem.organisation}
                                    </span>
                                </div>
                                <ul className="mt1 !font-normal text-gray-700 dark:text-white/75">
                                    {
                                        experienceItem.description.map((desc, index) => (
                                            <li key={index} className="dark:text-gray-300">➡️{desc}</li>
                                        ))
                                    }
                                </ul>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    }
                )
            }
            </VerticalTimeline>
        </section>
    );
}

export default Experience;