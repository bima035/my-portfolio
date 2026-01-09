import React from "react";
import nusaEnergiImg from "../assets/nusaenergi.png";
import enertrackImg from "../assets/enertrack.png";
import taskManagementImg from "../assets/taskmanagement.png";
import bimzStoreImg from "../assets/bimz_store.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientMesh from '../components/GradientMesh';
import FloatingBlobs from '../components/FloatingBlobs';
import ParticleBackground from '../components/ParticleBackground';

const Projects = () => {
  const projects = [
    {
      title: "NusaEnergi Website",
      description:
        "The Flower Shop is a static website designed to showcase a variety of flowers available for purchase. This website provides users with an easy-to-navigate interface to explore different flower types, view details, and make inquiries.",
      image: nusaEnergiImg,
      link: "https://nusa-energi.vercel.app/",
      tech: ["HTML", "CSS", "PHP"],
      gradient: "from-blue-500 to-green-500",
      isInternal: false
    },
    {
      title: "Enertrack - Energy Monitoring",
      description:
        "A modern energy monitoring platform with AI-powered insights. Track real-time electricity usage, get smart recommendations, calculate device consumption, and reduce your carbon footprint with intelligent notifications.",
      image: enertrackImg,
      link: "https://bima035.github.io/Enertrack_Web/",
      tech: ["HTML", "CSS", "JavaScript", "AI Integration"],
      gradient: "from-cyan-500 to-blue-500",
      isInternal: false
    },
    {
      title: "3D Task Manager",
      description:
        "An interactive 3D task management application built with React Three Fiber. Features include drag-and-drop task cards, status filtering (All, Pending, In Progress, Completed), real-time statistics, and immersive 3D environment with particle effects.",
      image: taskManagementImg,
      link: "https://bima035.github.io/Task_Management/",
      tech: ["React", "Three.js", "React Three Fiber", "3D Graphics"],
      gradient: "from-green-500 to-cyan-500",
      isInternal: false
    },
    {
      title: "BIMZ STORE - Game Top Up",
      description:
        "A modern game top-up store platform featuring a clean UI, multi-step ordering process, and secure payment integration. Supports various popular games and provides an instant top-up experience.",
      image: bimzStoreImg,
      link: "/topup",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      gradient: "from-purple-500 to-cyan-500",
      isInternal: true
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-16 overflow-hidden">

      {/* Background Effects */}
      <GradientMesh variant="default" />
      <FloatingBlobs count={4} />
      <ParticleBackground density={10} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-white mb-8 text-gradient-vibrant"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mb-16 text-gray-300 leading-relaxed max-w-3xl mx-auto text-center text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on, showcasing my skills in
          creating functional, visually appealing, and user-friendly websites.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-premium rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button */}
                {project.isInternal ? (
                  <Link
                    to={project.link}
                    className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/60`}
                    style={{ fontFamily: "satoshi-bold" }}
                  >
                    View Project →
                  </Link>
                ) : (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg transition-all duration-300`}
                    style={{ fontFamily: "satoshi-bold" }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project →
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
