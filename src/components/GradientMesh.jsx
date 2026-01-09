import React from 'react';
import { motion } from 'framer-motion';

const GradientMesh = ({ variant = 'default' }) => {
    const variants = {
        default: {
            colors: ['#3b82f6', '#10b981', '#06b6d4', '#14b8a6'],
            positions: [
                { top: '10%', left: '10%' },
                { top: '20%', right: '15%' },
                { bottom: '15%', left: '20%' },
                { bottom: '20%', right: '10%' }
            ]
        },
        purple: {
            colors: ['#3b82f6', '#10b981', '#06b6d4', '#14b8a6'],
            positions: [
                { top: '15%', left: '15%' },
                { top: '10%', right: '10%' },
                { bottom: '10%', left: '10%' },
                { bottom: '15%', right: '15%' }
            ]
        },
        blue: {
            colors: ['#3b82f6', '#06b6d4', '#10b981', '#0ea5e9'],
            positions: [
                { top: '20%', left: '20%' },
                { top: '15%', right: '20%' },
                { bottom: '20%', left: '15%' },
                { bottom: '10%', right: '20%' }
            ]
        }
    };

    const config = variants[variant] || variants.default;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

            {config.colors.map((color, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl opacity-30"
                    style={{
                        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                        width: '600px',
                        height: '600px',
                        ...config.positions[index]
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -40, 60, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 15 + index * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                />
            ))}

            {/* Additional overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
        </div>
    );
};

export default GradientMesh;
