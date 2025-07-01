import { tecnologias } from "../constants/tecnologias";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const TecnologiasGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      className={`py-16 px-4 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Bubbles and decorative particles */}
      <motion.div
        className={`absolute top-20 left-20 w-16 h-16 rounded-full blur-lg ${
          theme === "dark" ? "bg-blue-500" : "bg-blue-200"
        }`}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-20 right-20 w-24 h-24 rounded-full blur-lg ${
          theme === "dark" ? "bg-purple-500" : "bg-purple-200"
        }`}
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative particles (only visible in dark mode) */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 ${
              theme === "dark"
                ? "from-gray-100 via-blue-400 to-purple-400"
                : "from-gray-800 via-blue-600 to-purple-600"
            }`}
            variants={itemVariants}
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            variants={itemVariants}
          >
            Tools and technologies I work with to build innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tecnologias.map((tec, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className={`relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70"
                    : "bg-white border-gray-100 hover:bg-gray-50"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileHover={{
                  boxShadow:
                    theme === "dark"
                      ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Efecto de brillo al hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  }`}
                />

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className={`text-4xl md:text-5xl transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-blue-400"
                        : "text-gray-700 group-hover:text-blue-600"
                    }`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {tec.icono}
                  </motion.div>

                  <h3
                    className={`font-semibold transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-200 group-hover:text-white"
                        : "text-gray-800 group-hover:text-gray-900"
                    }`}
                  >
                    {tec.nombre}
                  </h3>
                </div>

                {/* Decoración de esquina */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                      : "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Elemento decorativo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div
            className={`inline-flex items-center space-x-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <div
              className={`w-8 h-px bg-gradient-to-r from-transparent ${
                theme === "dark" ? "to-gray-600" : "to-gray-300"
              }`}
            ></div>
            <span className="text-sm font-medium">Always learning more</span>
            <div
              className={`w-8 h-px bg-gradient-to-l from-transparent ${
                theme === "dark" ? "to-gray-600" : "to-gray-300"
              }`}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TecnologiasGrid;
