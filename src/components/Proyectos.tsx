import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaCode,
  FaMobile,
  FaGlobe,
  FaRocket,
  FaEye,
  FaDesktop,
  FaLock,
} from "react-icons/fa";
import { proyectosData } from "../constants/proyectos";
import { useTheme } from "../context/ThemeContext";
import type { Variants } from "framer-motion";

const Proyectos = () => {
  const { theme } = useTheme();
  const [filtro, setFiltro] = useState<"Todos" | "Web" | "Móvil">("Todos");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const proyectosFiltrados = proyectosData.filter((proy) =>
    filtro === "Todos" ? true : proy.tipo === filtro,
  );

  const categories = [
    {
      id: "Todos",
      label: "All Projects",
      icon: FaCode,
      color: "from-gray-500 to-gray-700",
      count: proyectosData.length,
    },
    {
      id: "Web",
      label: "Web Applications",
      icon: FaGlobe,
      color: "from-blue-500 to-blue-700",
      count: proyectosData.filter((p) => p.tipo === "Web").length,
    },
    {
      id: "Mobile",
      label: "Mobile Applications",
      icon: FaMobile,
      color: "from-green-500 to-green-700",
      count: proyectosData.filter((p) => p.tipo === "Mobile").length,
    },
    {
      id: "Desktop",
      label: "Desktop Applications",
      icon: FaDesktop,
      color: "from-purple-500 to-purple-700",
      count: proyectosData.filter((p) => p.tipo === "Desktop").length,
    },
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
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

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Web":
        return (
          <FaGlobe
            className={`${theme === "dark" ? "text-blue-300" : "text-white"}`}
          />
        );
      case "Mobile":
        return (
          <FaMobile
            className={`${theme === "dark" ? "text-green-300" : "text-white"}`}
          />
        );
      case "Desktop":
        return (
          <FaDesktop
            className={`${theme === "dark" ? "text-purple-300" : "text-white"}`}
          />
        );
      default:
        return (
          <FaCode
            className={`${theme === "dark" ? "text-gray-300" : "text-white"}`}
          />
        );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Web":
        return theme === "dark"
          ? "from-blue-500 to-blue-600"
          : "from-blue-500 to-blue-700";
      case "Mobile":
        return theme === "dark"
          ? "from-green-500 to-green-600"
          : "from-emerald-500 to-emerald-700";
      case "Desktop":
        return theme === "dark"
          ? "from-purple-500 to-purple-600"
          : "from-purple-500 to-purple-700";
      default:
        return theme === "dark"
          ? "from-gray-600 to-gray-700"
          : "from-gray-500 to-gray-700";
    }
  };

  return (
    <section
      id="proyectos"
      className={`py-20 px-4 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
      ref={sectionRef}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div
        className={`absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl ${
          theme === "dark"
            ? "bg-blue-500"
            : "bg-gradient-to-r from-blue-200 to-purple-200"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-20 blur-3xl ${
          theme === "dark"
            ? "bg-purple-500"
            : "bg-gradient-to-r from-purple-200 to-pink-200"
        }`}
        animate={{
          scale: [1, 0.8, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
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
            <FaRocket
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
              My Projects
            </h2>
          </motion.div>
          <motion.p
            className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A selection of projects that demonstrate my technical skills and
            creativity
          </motion.p>
        </motion.div>

        {/* Filtros mejorados */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={filterVariants}
        >
          {categories.map((categoria) => {
            const IconComponent = categoria.icon;
            return (
              <motion.button
                key={categoria.id}
                onClick={() => setFiltro(categoria.id as typeof filtro)}
                className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden group ${
                  filtro === categoria.id
                    ? "text-white shadow-lg scale-105"
                    : theme === "dark"
                      ? "text-gray-100 bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-gray-700/50"
                      : "text-gray-700 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border border-white/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filtro === categoria.id && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${categoria.color}`}
                    layoutId="activeFilter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <IconComponent className="text-lg relative z-10" />
                <span className="relative z-10">{categoria.label}</span>
                <motion.span
                  className="relative z-10 px-2 py-1 bg-white/20 rounded-full text-xs font-bold"
                  whileHover={{ scale: 1.1 }}
                >
                  {categoria.count}
                </motion.span>

                {/* Efecto de brillo */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full ${
                    theme === "dark" ? "via-blue-400/10" : "via-white/20"
                  }`}
                  whileHover={{ translateX: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {proyectosFiltrados.map((proyecto, index) => (
              <motion.div
                key={`${proyecto.titulo}-${filtro}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className={`rounded-2xl shadow-lg overflow-hidden relative backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-gray-800/80 border border-gray-700/50"
                      : "bg-white/90 border border-white/50"
                  }`}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      theme === "dark"
                        ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Header de la tarjeta */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(
                          proyecto.tipo,
                        )} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {getTypeIcon(proyecto.tipo)}
                      </motion.div>

                      <motion.div
                        className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(
                          proyecto.tipo,
                        )} text-white text-xs font-semibold rounded-full`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {proyecto.tipo}
                      </motion.div>
                    </div>

                    <motion.h3
                      className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-gray-100 group-hover:text-blue-400"
                          : "text-gray-800 group-hover:text-blue-600"
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {proyecto.titulo}
                    </motion.h3>

                    {/* Descripción (si existe en los datos) */}
                    {proyecto.descripcion && (
                      <p
                        className={`text-sm mb-4 line-clamp-3 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {proyecto.descripcion}
                      </p>
                    )}

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4
                        className={`text-sm font-semibold mb-2 flex items-center gap-2 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <FaCode className="text-xs" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proyecto.tecnologias.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full font-medium border transition-colors duration-300 ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-300 border-gray-600"
                                : "bg-gray-100 text-gray-700 border-gray-300"
                            }`}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor:
                                theme === "dark" ? "#374151" : "#E5E7EB",
                              borderColor:
                                theme === "dark" ? "#4B5563" : "#9CA3AF",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer de la tarjeta - SECCIÓN CORREGIDA */}
                  <div className="px-6 pb-6 relative z-20">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex gap-2">
                        {proyecto.enlaceFront && (
                          <motion.a
                            href={proyecto.enlaceFront}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-3 py-2 font-semibold rounded-lg shadow text-sm transition-colors duration-300 relative z-30 cursor-pointer ${
                              theme === "dark"
                                ? "bg-blue-600 hover:bg-blue-500 text-white"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                            style={{ pointerEvents: "auto" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                            onMouseLeave={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                            onClick={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                          >
                            <FaEye className="text-xs" />
                            Frontend
                            <FaExternalLinkAlt className="text-xs" />
                          </motion.a>
                        )}
                        {proyecto.enlaceBack && (
                          <motion.a
                            href={proyecto.enlaceBack}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-3 py-2 font-semibold rounded-lg shadow text-sm transition-colors duration-300 relative z-30 cursor-pointer ${
                              theme === "dark"
                                ? "bg-purple-600 hover:bg-purple-500 text-white"
                                : "bg-purple-600 hover:bg-purple-700 text-white"
                            }`}
                            style={{ pointerEvents: "auto" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                            onMouseLeave={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                            onClick={(e: React.MouseEvent) =>
                              e.stopPropagation()
                            }
                          >
                            <FaEye className="text-xs" />
                            Backend
                            <FaExternalLinkAlt className="text-xs" />
                          </motion.a>
                        )}
                        {proyecto.isPrivate ? (
                          <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                              theme === "dark"
                                ? "bg-amber-900/30 text-amber-400 border border-amber-700"
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}
                          >
                            <FaLock className="text-xs" />
                            Private
                          </span>
                        ) : !proyecto.enlaceFront && !proyecto.enlaceBack ? (
                          <span
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-400"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            <FaCode className="text-xs" />
                            Developing
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover - NO INTERFIERE */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full pointer-events-none ${
                      theme === "dark" ? "via-blue-400/10" : "via-white/10"
                    }`}
                    animate={
                      hoveredProject === index ? { translateX: "100%" } : {}
                    }
                    transition={{ duration: 0.6 }}
                  />

                  {/* Indicador de hover */}
                  <motion.div
                    className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                      theme === "dark" ? "bg-blue-400" : "bg-blue-500"
                    }`}
                    animate={
                      hoveredProject === index ? { scale: [1, 1.5, 1] } : {}
                    }
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mensaje si no hay proyectos */}
        {proyectosFiltrados.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCode
              className={`text-4xl mx-auto mb-4 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              No hay proyectos en esta categoría
            </p>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#presentacion"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Do you have a project in mind?</span>
            <FaRocket />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Proyectos;
