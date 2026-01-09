import React from 'react';
import { motion } from 'framer-motion';

const FloatingBlobs = ({ count = 3 }) => {
    const blobs = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 300 + Math.random() * 200,
        color: ['#3b82f6', '#10b981', '#06b6d4'][i % 3],
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {blobs.map((blob) => (
                <motion.div
                    key={blob.id}
                    className="absolute rounded-full blur-2xl opacity-20"
                    style={{
                        width: blob.size,
                        height: blob.size,
                        background: `radial-gradient(circle, ${blob.color}, transparent)`,
                        left: `${blob.initialX}%`,
                        top: `${blob.initialY}%`,
                    }}
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -80, 100, 0],
                        scale: [1, 1.3, 0.8, 1],
                        rotate: [0, 90, 180, 360],
                    }}
                    transition={{
                        duration: 20 + blob.id * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: blob.id * 1.5,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingBlobs;
