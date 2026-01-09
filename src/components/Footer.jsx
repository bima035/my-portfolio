import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaHeart } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ]

  const socialLinks = [
    {
      href: "https://github.com/bima035",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      href: "https://www.linkedin.com/in/bima-hanan-704b13314/",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      href: "https://www.instagram.com/bimzbim_/",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      href: "mailto:bimahanan073@gmail.com",
      icon: <FaEnvelope size={24} />,
      label: "Email",
      gradient: "from-red-500 to-orange-500"
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2
              className="text-3xl mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'satoshi-black' }}
            >
              Bima Hanan Maulidyarta
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md" style={{ fontFamily: 'satoshi-medium' }}>
              Web Developer passionate about creating clean, responsive, and modern websites.
              Let's build something amazing together!
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MdEmail className="text-purple-400" size={20} />
                <span className="text-sm">bimahanan073@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MdPhone className="text-purple-400" size={20} />
                <span className="text-sm">+62 898 342 4304</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MdLocationOn className="text-purple-400" size={20} />
                <span className="text-sm">Malang, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-6 font-bold" style={{ fontFamily: 'satoshi-bold' }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
                    style={{ fontFamily: 'satoshi-medium' }}
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-6 font-bold" style={{ fontFamily: 'satoshi-bold' }}>Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${social.gradient} hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="text-xs mt-2 font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/30 mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left" style={{ fontFamily: 'satoshi-medium' }}>
            © {currentYear} Bima Hanan Maulidyarta. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span style={{ fontFamily: 'satoshi-medium' }}>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
            <span style={{ fontFamily: 'satoshi-medium' }}>and React</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  )
}

export default Footer
