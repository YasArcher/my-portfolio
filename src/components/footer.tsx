import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import type { Variants } from "framer-motion";

const Footer = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/YasArcher",
      label: "GitHub",
      color: theme === "dark" ? "hover:text-gray-400" : "hover:text-gray-600",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/marlon-masabanda-6b4984239/",
      label: "LinkedIn",
      color: theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600",
    },
    {
      icon: FaEnvelope,
      href: "mailto:marlon25.masabanda@proton.me",
      label: "Email",
      color: theme === "dark" ? "hover:text-green-400" : "hover:text-green-600",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      className={`relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-800"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Efectos de fondo */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"
            : "bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-cyan-200/20"
        }`}
      ></div>
      <div className="absolute inset-0">
        <div
          className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse ${
            theme === "dark" ? "bg-blue-500/20" : "bg-blue-200/40"
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-xl animate-pulse delay-1000 ${
            theme === "dark" ? "bg-purple-500/20" : "bg-purple-200/40"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-lg animate-bounce ${
            theme === "dark" ? "bg-cyan-500/30" : "bg-cyan-200/50"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Información personal */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCode
                className={`text-2xl ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h3
                className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === "dark"
                    ? "from-blue-400 to-purple-400"
                    : "from-blue-600 to-purple-600"
                }`}
              >
                Marlon Masabanda
              </h3>
            </motion.div>

            <motion.p
              className={`mb-2 flex items-center justify-center md:justify-start gap-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
              variants={itemVariants}
            >
              <FaRocket
                className={`${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
              Software Developer
            </motion.p>

            <motion.p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
              variants={itemVariants}
            >
              Universidad Técnica de Ambato
            </motion.p>
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            className="flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 backdrop-blur-sm rounded-full transition-all duration-300 ${
                    social.color
                  } hover:scale-110 hover:shadow-2xl hover:shadow-current/25 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border border-gray-700/50"
                      : "bg-white/80 border border-gray-200/50 shadow-lg"
                  }`}
                  variants={socialIconVariants}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl transition-transform duration-300 group-hover:rotate-12" />

                  {/* Tooltip */}
                  <span
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
                      theme === "dark"
                        ? "bg-gray-900 text-white border border-gray-700"
                        : "bg-gray-800 text-white border border-gray-600"
                    }`}
                  >
                    {social.label}
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        theme === "dark"
                          ? "border-t-gray-900"
                          : "border-t-gray-800"
                      }`}
                    ></div>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mensaje inspiracional */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <motion.p
              className={`mb-2 flex items-center justify-center md:justify-end gap-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              <span>and</span>
              <FaCode
                className={`${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </motion.p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Building the future, one line of code at a time.
            </p>
          </motion.div>
        </div>

        {/* Línea divisora animada */}
        <motion.div className="my-12" variants={itemVariants}>
          <div
            className={`h-px bg-gradient-to-r from-transparent to-transparent relative ${
              theme === "dark" ? "via-gray-600" : "via-gray-300"
            }`}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 ${
                theme === "dark" ? "opacity-50" : "opacity-30"
              }`}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div className="text-center" variants={itemVariants}>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            © {new Date().getFullYear()} Marlon Masabanda. All rights reserved.
          </p>
          <motion.p
            className={`text-xs mt-2 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
            variants={itemVariants}
          >
            Built with React, Framer Motion, Tailwind CSS, and a lot of ☕
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
