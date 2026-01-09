import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/Bima.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode, FaCode, FaPalette } from 'react-icons/fa'
import { motion } from 'framer-motion'
import GradientMesh from '../components/GradientMesh'
import FloatingBlobs from '../components/FloatingBlobs'
import ParticleBackground from '../components/ParticleBackground'
import SectionDivider from '../components/SectionDivider';

const LandingPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 overflow-hidden">

        {/* Background Effects */}
        <GradientMesh variant="purple" />
        <FloatingBlobs count={4} />
        <ParticleBackground density={12} />

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">

          {/* Profile Image with 3D Effect */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <img
                src={profileImg}
                alt="Bima Hanan Maulidyarta"
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50 animate-float-3d"
              />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: 'satoshi-black' }}
            >
              Hi, I'm <span className="text-gradient-vibrant">Bima Hanan</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4"
              style={{ fontFamily: 'satoshi-medium' }}
            >
              Aspiring{' '}
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'UI Designer',
                  2000,
                  'Frontend Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-vibrant font-bold"
              />
            </p>
            <p
              className="text-lg md:text-xl text-purple-300 italic"
              style={{ fontFamily: 'satoshi-medium' }}
            >
              Your vision, my code.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 text-white font-bold rounded-full text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 animate-gradient-rotate"
              style={{ fontFamily: 'satoshi-bold' }}
            >
              View My Work →
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <motion.div
                className="w-2 h-2 bg-purple-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* FEATURES SECTION - Bento Style */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden">
        <GradientMesh variant="blue" />
        <ParticleBackground density={10} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center text-white mb-12 text-gradient-vibrant"
            style={{ fontFamily: 'satoshi-black' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What I Do Best
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLaptopCode size={60} />,
                title: 'Clean Code',
                desc: 'Writing semantic, maintainable code with modern best practices',
                color: 'from-blue-500 to-green-500'
              },
              {
                icon: <FaPalette size={60} />,
                title: 'Modern UI',
                desc: 'Crafting stunning interfaces with Tailwind CSS and React',
                color: 'from-green-500 to-cyan-500'
              },
              {
                icon: <FaCode size={60} />,
                title: 'Interactive UX',
                desc: 'Building dynamic, user-friendly components and experiences',
                color: 'from-cyan-500 to-purple-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card-premium p-8 rounded-2xl text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <motion.div
                  className={`text-white mb-6 flex justify-center bg-gradient-to-r ${item.color} w-20 h-20 rounded-2xl items-center mx-auto shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: 'satoshi-bold' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-300 text-sm md:text-base"
                  style={{ fontFamily: 'satoshi-medium' }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ABOUT PREVIEW SECTION */}
      <section className="relative py-20 px-6 md:px-16 overflow-hidden">
        <GradientMesh variant="default" />
        <ParticleBackground density={8} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 gradient-text-animated"
            style={{ fontFamily: 'satoshi-bold' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            style={{ fontFamily: 'satoshi-medium' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Saya seorang web developer yang antusias dalam membangun website yang rapi, responsif, dan
            mudah digunakan. Saya senang mengubah ide menjadi pengalaman interaktif
            menggunakan HTML, CSS, JavaScript, React, dan Tailwind CSS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about"
              className="inline-block px-6 py-3 glass-premium text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
              style={{ fontFamily: 'satoshi-bold' }}
            >
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
