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
                About Me
            </SectionHeading>
            <p>
                My coding journey began at <span className="italic font-bold">IIEST, Shibpur</span>, where the initial sessions of the <span className={"italic"}>codeIIEST</span> club were transformative for me.
            <span className="font-bold"> Competitive programming</span> honed my problem-solving skills, while my coursework allowed me to delve deeper into various areas of computer science.
            My foray into web development started when a professor challenged me to develop a full-stack application,
            even though I was unfamiliar with HTML and CSS at the time. By following online resources, I successfully created a basic <span className="italic">  bank management system.</span>
                This ignited a passion for continuous learning and upskilling with industry-relevant tools and I learned to build more <span className="underline">complex applications using MERN stack.</span>
            </p>
            <p>
            <span className="font-bold">React and Node.js</span> particularly captivated me, as they made it easy to set up a server and display results with just a few lines of code.
            This led to the development of several projects, giving me valuable experience which made me fall in love in with <span className={"underline"}>building and fixing applications</span>.
            My efforts paid off when I landed an <span className="italic"> internship at Crio.do </span>, where I worked on the MERN stack and gained my first industry experience.
            </p>
            <p>
            Since then, I have <span className="underline">contributed</span> to various exciting projects, from converting JSP components to React components to playing a
            critical role in developing and deploying microservices (please refer to my Experience section for more details).
                My <span className="underline">expertise</span> lies in <span className="font-bold"> React.js and Next.js for the frontend, and {`Java's`} Spring framework and {`Node.js'`} Express for the backend.
            {`I've`} worked with multiple databases, including MySQL, NoSQL, and PostgreSQL. Additionally, I have experience deploying and managing applications on AWS,
            utilizing services such as EC2, S3, Lambda, RDS, IAM, CloudFormation, Route 53, CloudWatch, Elastic Beanstalk, and SQS.
            I was a key developer in implementing the Apache Kafka message broker for microservices communication.  </span>
            </p>
            <p>
            Currently, I am pursuing <span className="italic">Master of Engineering</span> at <span className="font-bold italic">Virginia Tech</span> with <span className="underline">Software Engineering</span> concentration.
                I am <span className="underline">expanding</span> my skill set by learning Angular and Django as part of my <span className="italic">Graduate Research Assistantship.</span>
            </p>
                <p><span className="font-bold">I will be graduating in December 2024 and am actively seeking full-time positions.</span></p>

        </motion.section>
    );
}

export default About;