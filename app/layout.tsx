import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme_switch";
import ThemeContextProvider from "@/context/theme-switch-context";

export const metadata: Metadata = {
  title: "Srikar Ummineni | Personal Portfolio",
  description: "Srikar is a full stack developer with a passion for building beautiful and functional web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body className={`bg-indigo-100 text-purple-950 relative h-[500rem] 
    pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}>
        <div className="bg-[#bbf7d0] absolute top-[-6rem] right-[11rem]
        h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#a5f3fc] absolute top-[-1rem] left-[-35rem]
        h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Toaster position={"top-right"}/>
            <Footer/>
            <ThemeSwitch/>
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
    </body>
    </html>
  );
}
