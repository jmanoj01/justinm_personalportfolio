"use client";
import React, {useEffect, useState} from 'react';
import {BsMoon, BsSun} from "react-icons/bs";
import {useTheme} from "@/context/theme-switch-context";

function ThemeSwitch() {

const {theme, toggleTheme} = useTheme();

    return (
        <button className="fixed bottom-7 right-7 bg-white w-[3rem]
        h-[3rem] bg-opacity-60 backdrop-blur-[0.5rem] border border-white
        border-opacity-40 shadow-2xl rounded-full flex items-center
        justify-center hover:scale-[1.15] active:scale-[1.05]
        transition-all dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50"
        onClick={toggleTheme}
        >
            {theme == "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}

export default ThemeSwitch;