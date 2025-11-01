import React from "react";
import myImg from '../assets/Bima_about.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 py-16 bg-white">
      
      {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={myImg}
          alt="Bima Hanan Maulidyarta"
          className="w-94 h-94 object-cover border-7 border-stone-900 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center mr-10 md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          About Me
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Hi! I'm <span className="font-semibold text-stone-800">Bima Hanan Maulidyarta</span>, 
          adalah mahasiswa Informatika di Binus Malang dengan fokus pada 
          pengembangan web yang user-friendly dan responsif. Saya senang mengubah 
          ide menjadi desain yang fungsional menggunakan HTML, CSS, JavaScript, React, 
          dan Tailwind CSS. Tujuan saya adalah membuat pengalaman yang tidak hanya 
          menarik secara visual tetapi juga intuitif untuk digunakan. 
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Selama studi, saya telah mengerjakan berbagai proyek akademik dan mandiri, mulai dari halaman web
          interaktif hingga pengembangan fitur dasar aplikasi web. Saya fokus pada pembuatan antarmuka pengguna 
          yang nyaman, struktur kode yang rapi, serta pengalaman pengguna yang baik. Saat ini, saya terus
          mempelajari konsep backend, API, database, dan alur kerja aplikasi untuk memperkuat kemampuan full-stack saya.
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
         >
          </p>
          Saya aktif mengembangkan kemampuan melalui eksplorasi teknologi modern, 
          penggunaan AI untuk mendukung produktivitas, dan latihan mandiri. Di luar dunia teknologi, 
          saya menikmati musik dan gaming sebagai cara untuk menjaga kreativitas dan kemampuan problem solving.
         
        {/* Highlights Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          {[
            { title: "Frontend Dev", desc: "Terampil membangun tampilan website menggunakan HTML, CSS, JavaScript, React, dan Tailwind CSS." },
            { title: "Responsive Design", desc: "Mampu membuat layout website yang responsif dan kompatibel di berbagai ukuran layar." },
            { title: "Creative Coding", desc: "Menggabungkan kreativitas dengan kemampuan teknis untuk mengembangkan tampilan web interaktif dan menarik." }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-orange-50 border-2 border-stone-900 p-4 rounded-lg shadow"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-stone-800 text-lg"
                style={{ fontFamily: 'satoshi-bold' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-zinc-600 mt-2"
                style={{ fontFamily: 'satoshi-medium' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
