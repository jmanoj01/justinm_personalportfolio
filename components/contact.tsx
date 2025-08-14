"use client";
import React, {useContext, useEffect} from 'react';
import SectionHeading from "@/components/section-heading";
import {FaPaperPlane} from "react-icons/fa";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {ActiveSectionContext} from "@/context/active-section-context";
import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";

function Contact() {
    const {ref, inView} = useInView({threshold: 0.1});
    const {setActiveSection} = useContext(ActiveSectionContext);
    const [emailPending, setEmailPending] = React.useState<"true"|"false">("false");
    useEffect(() => {
        if (inView) {
            setActiveSection("Contact");
        }
    }, [inView, setActiveSection, emailPending]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailPending("true");
        let res = null;
        try {
            const formData = new FormData(e.currentTarget);
            res = await sendEmail(formData);
            await new Promise(r => setTimeout(r, 3000));
            setEmailPending("false");
        } catch (e: any) {
            toast.error(e.message);
            return {
                error: e.message,
            }
        }
        toast.success("Email sent successfully!");
        return {
            res
        }
    }

    return (
        <motion.section
            ref={ref}
            className="mt-20 mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)]
            text-center"
            id={"contact"}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
        >
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <p className="mb-3 text-gray-700 -mt-6 dark:text-white/80">
                If you would like to get in touch with me, please feel free to send me an email at{" "}
                <a className={"underline"}
                    href="mailto:justinmmanoj@gmail.com">
                    justinmmanoj@gmail.com
                </a> or through this form.
            </p>
            <form
                className="mt-10 flex flex-col dark:text-black"
                onSubmit={e => handleSubmit(e)}
            >
                <input
                    required
                    maxLength={100}
                    placeholder="Your email"
                    className="h-14 px-4 rounded-lg border border-black/10
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                    transition-all dark:outline-none"
                    type="email"
                    name="senderEmail"
                />
                <textarea
                    required
                    maxLength={5000}
                    className="h-52 my-3 rounded-lg border-black/10 p-4
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                    transition-all dark:outline-none"
                    placeholder="Your message"
                    name="message"
                />
                <button
                    className="group flex items-center justify-center gap-2
                    h-[3rem] w-[8rem] bg-violet-800 text-white rounded-full
                    outline-none transition-all focus:scale-105 hover:scale-105
                    active:scale-105 hover:bg-violet-950 active:bg-violet-950
                    disabled:scale-100 disabled:bg-opacity-50
                    disabled:cursor-not-allowed dark:bg-white dark:bg-opacity-10"
                    disabled={emailPending === "true"}
                >
                    {emailPending === "true" ?
                        <div className="w-5 h-5 border-2 border-t-2 rounded-full animate-spin"></div> :
                        (
                            <>
                                Submit
                                <FaPaperPlane
                                    className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                                />{" "}
                            </>
                        )
                    }
                </button>
            </form>
        </motion.section>
    );
}

export default Contact;