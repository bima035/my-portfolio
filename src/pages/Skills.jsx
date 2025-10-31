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
import { SiTailwindcss, SiVite } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-8xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400 text-8xl" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-orange-600 text-8xl" />, name: "Git" },
    { icon: <SiVite className="text-purple-500 text-8xl" />, name: "Vite" },
  ];

  const services = [
    {
      icon: <CgWebsite className="text-stone-800 text-6xl mb-4" />,
      title: "Static Website Development",
      description:
        "Simple, fast-loading, and lightweight websites perfect for portfolios, landing pages, or business profiles.",
    },
    {
      icon: <RiPagesLine className="text-stone-800 text-6xl mb-4" />,
      title: "Single-Page Applications",
      description:
        "Modern, app-like web experiences built for speed and smooth navigation.",
    },
    {
      icon: <GrOptimize className="text-stone-800 text-6xl mb-4" />,
      title: "Website Redesign & Optimization",
      description:
        "Revamping existing sites for better performance, visuals, and usability.",
    },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
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
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          I specialize in front-end web development, creating responsive and visually
          engaging websites using HTML5, CSS3, Tailwind CSS, JavaScript, and React.
          With Vite for fast builds and Git for version control, I deliver everything
          from static sites to single-page applications focused on performance,
          accessibility, and great user experience.
        </motion.p>

        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent className="flex items-center">
            {skills.map((skill, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 md:basis-1/6 flex flex-col items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {skill.icon}
                  <p
                    className="mt-2 text-sm"
                    style={{ fontFamily: "satoshi-medium" }}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
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
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
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
                className="bg-rose-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5
                  className="mb-3 text-lg md:text-xl text-stone-800"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-zinc-600"
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
