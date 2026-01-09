import React from "react";
import myImg from '../assets/Bima_about.jpg';
import { motion } from "framer-motion";
import GradientMesh from '../components/GradientMesh';
import FloatingBlobs from '../components/FloatingBlobs';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 md:px-16 overflow-hidden">

      {/* Background Effects */}
      <GradientMesh variant="purple" />
      <FloatingBlobs count={3} />
      <ParticleBackground density={10} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-white mb-16 text-gradient-vibrant"
          style={{ fontFamily: 'satoshi-black' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse-glow" />
              <img
                src={myImg}
                alt="Bima Hanan Maulidyarta"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50"
              />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'satoshi-medium' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hi! I'm <span className="font-bold text-gradient-vibrant">Bima Hanan Maulidyarta</span>,
              mahasiswa Informatika di Binus Malang dengan fokus pada
              pengembangan web yang user-friendly dan responsif. Saya senang mengubah
              ide menjadi desain yang fungsional menggunakan HTML, CSS, JavaScript, React,
              dan Tailwind CSS.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'satoshi-medium' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Selama studi, saya telah mengerjakan berbagai proyek akademik dan mandiri, mulai dari halaman web
              interaktif hingga pengembangan fitur dasar aplikasi web. Saya fokus pada pembuatan antarmuka pengguna
              yang nyaman, struktur kode yang rapi, serta pengalaman pengguna yang baik.
            </motion.p>

            <motion.p
              className="text-gray-300 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'satoshi-medium' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Saya aktif mengembangkan kemampuan melalui eksplorasi teknologi modern,
              penggunaan AI untuk mendukung produktivitas, dan latihan mandiri. Di luar dunia teknologi,
              saya menikmati musik dan gaming sebagai cara untuk menjaga kreativitas dan kemampuan problem solving.
            </motion.p>
          </motion.div>
        </div>

        {/* Highlights Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Frontend Dev",
              desc: "Terampil membangun tampilan website menggunakan HTML, CSS, JavaScript, React, dan Tailwind CSS.",
              gradient: "from-blue-500 to-green-500"
            },
            {
              title: "Responsive Design",
              desc: "Mampu membuat layout website yang responsif dan kompatibel di berbagai ukuran layar.",
              gradient: "from-green-500 to-cyan-500"
            },
            {
              title: "Creative Coding",
              desc: "Menggabungkan kreativitas dengan kemampuan teknis untuk mengembangkan tampilan web interaktif dan menarik.",
              gradient: "from-cyan-500 to-purple-500"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card-premium p-6 rounded-2xl group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full mb-4`} />
              <h3
                className="text-white text-xl md:text-2xl font-bold mb-3"
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
