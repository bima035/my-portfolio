import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
    return (
        <div className="relative w-full h-24 overflow-hidden">
            {/* Gradient Line */}
            <motion.div
                className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
            />

            {/* Center Ornament */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg shadow-blue-500/50" />
            </motion.div>
        </div>
    );
};

export default SectionDivider;
