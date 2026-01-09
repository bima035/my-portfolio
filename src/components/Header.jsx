import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

const navMenu = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl backdrop-blur-lg"
        : "bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80 backdrop-blur-md"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">

        {/* Logo with Gradient */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-green-400 hover:to-blue-400 transition-all duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            BH<span className="text-white">.</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-8 text-white text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.href}
                className={`relative group transition-all duration-300 hover:text-cyan-300 ${location.pathname === link.href
                  ? "text-cyan-300 font-bold"
                  : ""
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 transition-all duration-300 ${location.pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 hover:from-blue-600 hover:via-green-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-cyan-300 transition-all duration-200"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-slate-900 to-blue-900 border-t border-blue-500/30 px-6 py-4 space-y-4"
        >
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded-lg p-3 transition-all duration-300 ${location.pathname === link.href
                ? "bg-blue-600 text-white"
                : "text-white hover:bg-blue-600/50"
                }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={() => {
              setSheetOpen(true);
              setIsOpen(false);
            }}
            className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 hover:from-blue-600 hover:via-green-600 hover:to-cyan-600 text-white"
          >
            Contact Me
          </Button>
        </motion.div>
      )}

      {/* Contact Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="bg-gradient-to-b from-slate-900 to-blue-900 text-white border-l border-blue-500/30">
          <SheetHeader>
            <SheetTitle className="text-2xl px-4 mt-10 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'satoshi-bold' }}>
              Get in Touch
            </SheetTitle>
          </SheetHeader>
          <div className="px-10 space-y-6 mt-8" style={{ fontFamily: "satoshi-medium" }}>
            {/* Email */}
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <MdEmail className="text-cyan-400" size={24} />
              <span className="text-gray-200">bimahanan073@gmail.com</span>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <MdPhone className="text-cyan-400" size={24} />
              <span className="text-gray-200">+62 898 342 4304</span>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <MdLocationOn className="text-cyan-400" size={24} />
              <span className="text-gray-200">Malang, Indonesia</span>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6 mt-6 border-t border-blue-500/30">
              <h4 className="text-white mb-4 text-lg" style={{ fontFamily: 'satoshi-bold' }}>Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/bima035"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bima-hanan-704b13314/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="text-white" size={24} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/bimzbim_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="text-white" size={24} />
                </motion.a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};

export default Header
