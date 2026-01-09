import React, { useEffect, useRef } from 'react';

const ParticleCanvas = ({ density = 100, color = 'rgba(147, 51, 234, 0.5)' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX *= -1;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY *= -1;
                }

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 3;
                    const directionY = forceDirectionY * force * 3;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            draw() {
                // Array of blue-white colors for variety
                const colors = [
                    `rgba(59, 130, 246, ${this.opacity})`,   // Blue
                    `rgba(147, 197, 253, ${this.opacity})`,  // Light Blue
                    `rgba(255, 255, 255, ${this.opacity})`,  // White
                    `rgba(191, 219, 254, ${this.opacity})`,  // Very Light Blue
                ];
                const colorIndex = Math.floor(Math.random() * colors.length);
                ctx.fillStyle = colors[colorIndex];
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000 * (density / 100);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };
        init();

        // Connect particles
        const connect = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = 1 - distance / 100;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connect();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Mouse move event
        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Mouse leave event
        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };
        window.addEventListener('mouseout', handleMouseOut);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density, color]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleCanvas;
