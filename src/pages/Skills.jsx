import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";
import GradientMesh from '../components/GradientMesh';
import FloatingBlobs from '../components/FloatingBlobs';
import ParticleBackground from '../components/ParticleBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML", level: 90 },
    { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS", level: 85 },
    { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript", level: 80 },
    { icon: <FaReact className="text-cyan-400 text-8xl" />, name: "React", level: 75 },
    { icon: <SiTailwindcss className="text-sky-400 text-8xl" />, name: "Tailwind CSS", level: 90 },
    { icon: <FaGitAlt className="text-orange-600 text-8xl" />, name: "Git", level: 70 },
    { icon: <SiFigma className="text-purple-500 text-8xl" />, name: "Figma", level: 65 },
  ];

  const services = [
    {
      icon: <CgWebsite className="text-white text-6xl mb-4" />,
      title: "Static Website Development",
      description:
        "Simple, fast-loading, and lightweight websites perfect for portfolios, landing pages, or business profiles.",
      gradient: "from-blue-500 to-green-500"
    },
    {
      icon: <RiPagesLine className="text-white text-6xl mb-4" />,
      title: "Single-Page Applications",
      description:
        "Modern, app-like web experiences built for speed and smooth navigation.",
      gradient: "from-green-500 to-cyan-500"
    },
    {
      icon: <GrOptimize className="text-white text-6xl mb-4" />,
      title: "Website Redesign & Optimization",
      description:
        "Revamping existing sites for better performance, visuals, and usability.",
      gradient: "from-cyan-500 to-purple-500"
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden">
        <GradientMesh variant="blue" />
        <FloatingBlobs count={3} />
        <ParticleBackground density={12} />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 text-gradient-vibrant"
            style={{ fontFamily: "satoshi-black" }}
          >
            My Tech Stack
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I specialize in front-end web development, creating responsive and visually
            engaging websites using HTML5, CSS3, Tailwind CSS, JavaScript, and React.
            With Git for version control, I deliver everything from static sites to
            single-page applications focused on performance, accessibility, and great
            user experience.
          </motion.p>

          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="flex items-center">
              {skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/5 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center glass-card p-6 rounded-2xl"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <div className="animate-pulse-glow">
                      {skill.icon}
                    </div>
                    <p
                      className="mt-3 text-sm font-bold text-white"
                      style={{ fontFamily: "satoshi-medium" }}
                    >
                      {skill.name}
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden">
        <GradientMesh variant="purple" />
        <ParticleBackground density={10} />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 gradient-text-animated"
            style={{ fontFamily: "satoshi-black" }}
          >
            What Can I Do
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I create responsive, visually appealing, and user-friendly websites that
            combine great design with smooth functionality, turning ideas into fast,
            engaging digital products.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-premium p-8 rounded-2xl flex flex-col items-center text-center group"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div
                  className={`bg-gradient-to-r ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h5
                  className="mb-4 text-xl md:text-2xl text-white font-bold"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-gray-300 text-sm md:text-base"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
