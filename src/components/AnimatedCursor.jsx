import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Add to trail
            setTrail((prev) => {
                const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
                return newTrail.slice(-10); // Keep only last 10 positions
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Only show on desktop
    if (window.innerWidth < 768) return null;

    return (
        <>
            {/* Trail effect */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed pointer-events-none z-50 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        width: `${8 - index * 0.5}px`,
                        height: `${8 - index * 0.5}px`,
                        opacity: 0.6 - index * 0.06,
                        transform: 'translate(-50%, -50%)',
                        transition: 'opacity 0.3s ease-out',
                    }}
                />
            ))}

            {/* Main cursor */}
            <div
                className={`fixed pointer-events-none z-50 rounded-full border-2 transition-all duration-200 ${isHovering
                    ? 'border-blue-500 bg-blue-500/20 w-12 h-12'
                    : 'border-purple-500 bg-purple-500/10 w-8 h-8'
                    }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default AnimatedCursor;
