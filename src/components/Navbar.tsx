import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { FaDownload, FaBars, FaTimes, FaCode, FaHome } from "react-icons/fa";
import type { Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("presentacion");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  // Detectar scroll para cambiar estilo del navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "presentacion",
        "experiencia",
        "proyectos",
        "certificados",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "experiencia", label: "Experience" },
    { id: "proyectos", label: "Projects" },
    { id: "certificados", label: "Certifications" },
    { id: "presentacion", label: "Contact" }
  ];

  // Variantes para el navbar
  const navVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variantes para items del menú
  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // Variantes para menú móvil
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700/50"
              : "bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20"
            : theme === "dark"
            ? "bg-gray-900/95 backdrop-blur-sm shadow-md"
            : "bg-white/95 backdrop-blur-sm shadow-md"
        }`}
        variants={navVariants}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("presentacion")}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaCode className="text-white text-lg" />
              </motion.div>
              <div>
                <h1
                  className={`text-xl font-bold bg-gradient-to-r ${
                    theme === "dark"
                      ? "from-gray-100 to-blue-400"
                      : "from-gray-800 to-blue-600"
                  } bg-clip-text text-transparent`}
                >
                  Marlon Masabanda
                </h1>
                <p
                  className={`text-xs -mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-13">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-blue-500"
                          : theme === "dark"
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}

                      {/* Indicador de sección activa */}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          layoutId="activeIndicator"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Efecto hover */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg -z-10 ${
                          theme === "dark" ? "bg-gray-800/50" : "bg-blue-50"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                } shadow-lg`}
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 25px -5px rgba(251, 191, 36, 0.3)"
                      : "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: theme === "dark" ? 0 : 180 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {theme === "dark" ? (
                    <FaSun className="text-lg" />
                  ) : (
                    <FaMoon className="text-lg" />
                  )}
                </motion.div>
              </motion.button>

              {/* CTA Button */}
              <motion.a
                href="/CVMARLON.pdf"
                download
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? (
                  <FaSun className="text-sm" />
                ) : (
                  <FaMoon className="text-sm" />
                )}
              </motion.button>

              <motion.button
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }
                >
                  {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden absolute top-full left-0 right-0 shadow-lg ${
            theme === "dark"
              ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700"
              : "bg-white/95 backdrop-blur-md border-b border-gray-200"
          } ${isMobileMenuOpen ? "block" : "hidden"}`}
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.div key={item.id} variants={mobileItemVariants}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? theme === "dark"
                        ? "bg-gray-800 text-blue-400 border-l-4 border-blue-500"
                        : "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div
              variants={mobileItemVariants}
              className={`pt-4 border-t ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <motion.a
                href="/CV_Marlon.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-40 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          scale: isScrolled ? 1 : 0,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection("presentacion")}
      >
        <FaHome />
      </motion.button>
    </>
  );
};

export default Navbar;
