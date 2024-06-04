"use client";
import React from 'react';
import { motion } from 'framer-motion';

function SectionDivider() {
    return (
        <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: 0.4, y:0 }}
            className="bg-gray-300 my-24 h-16 w-1
            rounded-full hidden sm:block opacity-40"
            transition={{ delay: 0.2 }}
        >

        </motion.div>
    );
}

export default SectionDivider;