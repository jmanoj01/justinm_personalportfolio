"use client";
import React, {useRef} from 'react';
import Image, {StaticImageData} from "next/image";
import {useScroll, useTransform} from "framer-motion";
import {motion} from "framer-motion";

interface ProjectProps {
    title: string;
    description: string,
    tags: readonly string[];
    imageUrl: StaticImageData;
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, imageUrl }) => {

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["0 1","1.2 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1])

    return (
        <motion.div
            style = {
                {
                    scale: scaleProgress,
                    opacity: opacityProgress
                }
            }
            ref = {ref}
            className = "group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                className="bg-gray-100 max-w-[42rem] border border-black/5
                overflow-hidden sm:pr-8 relative sm:h-[28rem]
                hover:bg-fuchsia-100 transition rounded-lg sm:group-even:pl-8
                dark:text-white dark:bg-white/10 dark:hover:bg-white/20 "
            >
                <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex
                flex-col h-full sm:group-even:ml-[18rem]"
                >
                    <h3
                        className="text-2xl font-semibold"
                    >
                        {title}
                    </h3>
                    <p
                        className="mt-2 leading-relaxed text-gray-700 dark:text-white/70"
                    >{description}</p>
                    <ul
                        className="flex flex-wrap mt-4 gap-2 sm:mt-auto"
                    >
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="bg-violet-950/[0.7] px-3 py-1 text-[0.7rem]
                            uppercase tracking-wider text-white rounded-full dark:text-white
                            dark:bg-violet-600"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={"Project image"}
                       quality={95}
                       className="absolute hidden sm:block top-[2rem] -right-80 w-[38.25rem] rounded-lg
                       shadow-2xl h-[20rem] group-even:right-[initial] group-even:-left-80
                       group-hover:-translate-x-3 group-hover:translate-y-3
                       group-hover:-rotate-[5deg] transition
                       group-hover:scale-[1.05]
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-[5deg]"

                />
            </section>
        </motion.div>
    );
};

export default Project;