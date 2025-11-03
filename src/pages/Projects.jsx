import React from "react";
import nusaEneriImg from "../assets/nusaenergi.png";
import ecBookstoreImg from "../assets/ecbookstore.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "NusaEnergi Website",
      description:
        "The Flower Shop is a static website designed to showcase a variety of flowers available for purchase. This website provides users with an easy-to-navigate interface to explore different flower types, view details, and make inquiries.",
      image: nusaEnergiImg,
      link: "https://nusa-energi.vercel.app/",
      tech: ["HTML", "CSS", "PHP"],
    },
    {
      title: "E-Commerce Web App",
      description:
        "An E-Commerce bookstore web application where users can browse, search, and purchase books online.  Built with React, Node.js, and MongoDB — providing a smooth, and dynamic shopping experience.",
      image: ecBookstoreImg,
      link: "https://github.com/rchll-16/e-commerce",
      tech: ["JavaScript", "React", "NodeJS", "MongoDB"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on, showcasing my skills in
          creating functional, visually appealing, and user-friendly websites.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-300 border-1 border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-blue-400 transition-colors"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
