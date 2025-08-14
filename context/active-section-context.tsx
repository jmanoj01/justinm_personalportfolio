"use client";
import React, {useState} from 'react';
import {links} from "@/lib/data";

type SectionName = "Home" | "About" | "Skills" | "Projects" | "Experience" | "Contact";

export const ActiveSectionContext = React.createContext<{
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}>({
    activeSection: "Home",
    setActiveSection: () => {},
});

function ActiveSectionContextProvider({children}: Readonly<{children: React.ReactNode}>) {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export default ActiveSectionContextProvider;