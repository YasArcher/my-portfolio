import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import type { Variants } from "framer-motion";
import { experiences } from "../constants/experiencia";

const Experiencia = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  // Variantes para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Variantes para el título
  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Variantes para cada experiencia
  const experienceVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variantes para la línea de tiempo
  const timelineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="experiencia"
      className={`py-20 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div
        className={`absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl ${
          theme === "dark" ? "bg-blue-500" : "bg-blue-200"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl ${
          theme === "dark" ? "bg-purple-500" : "bg-purple-200"
        }`}
        animate={{
          scale: [1, 0.8, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Partículas decorativas adicionales para modo oscuro */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-10 blur-2xl"
        animate={{
          scale: [1, 0.7, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Título mejorado */}
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaBriefcase
              className={`text-3xl ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <h2
              className={`text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-gray-100 via-blue-400 to-purple-400"
                  : "from-gray-800 via-blue-600 to-purple-600"
              }`}
            >
              My Experience
            </h2>
          </motion.div>
          <motion.p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A journey through the projects and roles that have defined my career
          </motion.p>
        </motion.div>

        {/* Timeline mejorada */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea de tiempo animada */}
          <motion.div
            className={`absolute left-8 top-0 bottom-0 w-1 rounded-full origin-top ${
              theme === "dark"
                ? "bg-gradient-to-b from-blue-500 via-purple-600 to-pink-600"
                : "bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500"
            }`}
            variants={timelineVariants}
            style={{ transformOrigin: "top" }}
          />

          {/* Experiencias */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative mb-12 ml-16"
              variants={experienceVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Punto de la timeline */}
              <motion.div
                className="absolute -left-12 top-6 z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: idx * 0.2 + 0.8,
                  duration: 0.6,
                  ease: "backOut",
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-4 ${
                    exp.color
                  } shadow-lg ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}
                >
                  <motion.div
                    className={`absolute inset-0.5 rounded-full opacity-0 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-blue-400 to-purple-500"
                    }`}
                    animate={{ opacity: [0, 0.7, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  />
                </div>
              </motion.div>

              {/* Tarjeta de experiencia */}
              <motion.div
                className={`backdrop-blur-sm p-8 rounded-2xl shadow-xl relative overflow-hidden group ${
                  theme === "dark"
                    ? "bg-gray-800/80 border border-gray-700/50"
                    : "bg-white/80 border border-white/50"
                }`}
                whileHover={{
                  y: -5,
                  boxShadow:
                    theme === "dark"
                      ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Efecto de brillo al hover */}
                <motion.div
                  className={`absolute inset-0 -translate-x-full ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
                      : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  }`}
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                {/* Fecha con estilo mejorado */}
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2 text-white rounded-full text-sm font-semibold mb-4 shadow-md ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-blue-600 to-purple-700"
                      : "bg-gradient-to-r from-blue-500 to-purple-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="text-xs" />
                  {exp.date}
                </motion.div>

                {/* Título del puesto */}
                <motion.h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-100 group-hover:text-blue-400"
                      : "text-gray-800 group-hover:text-blue-600"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {exp.title}
                </motion.h3>

                {/* Información de la empresa */}
                <div
                  className={`flex flex-wrap items-center gap-4 mb-6 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <motion.div
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaBuilding
                      className={
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }
                    />
                    <span className="font-medium">{exp.company}</span>
                  </motion.div>

                  <motion.div
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaMapMarkerAlt
                      className={
                        theme === "dark" ? "text-red-400" : "text-red-500"
                      }
                    />
                    <span>{exp.location}</span>
                  </motion.div>
                </div>

                {/* Responsabilidades mejoradas */}
                <div className="space-y-3">
                  {exp.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 + i * 0.1 + 1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-400 to-purple-500"
                            : "bg-gradient-to-r from-blue-500 to-purple-600"
                        }`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <p
                        className={`leading-relaxed transition-colors ${
                          theme === "dark"
                            ? "text-gray-300 group-hover/item:text-gray-100"
                            : "text-gray-700 group-hover/item:text-gray-900"
                        }`}
                      >
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Línea conectora para desktop */}
              {idx < experiences.length - 1 && (
                <motion.div
                  className={`hidden md:block absolute -left-8 -bottom-6 w-4 h-6 border-l-2 border-b-2 border-dashed rounded-bl-lg ${
                    theme === "dark" ? "border-gray-600" : "border-gray-300"
                  }`}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: idx * 0.2 + 1.2, duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Estadísticas o call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Experiencia;
