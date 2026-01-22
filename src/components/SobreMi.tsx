import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaChartBar, FaMobileAlt, FaUniversity } from "react-icons/fa";
import TecnologiasGrid from "./TecnologiasGrid";
import type { Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const SobreMi = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Back-End Development",
      description:
        "Design and implementation of APIs, business logic and secure file management systems.",
    },
    {
      icon: <FaChartBar className="text-2xl" />,
      title: "Business Intelligence",
      description:
        "Data analysis and reporting with Power BI for institutional decision-making.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Cross-Platform Solutions",
      description:
        "Desktop and mobile applications integrated with synchronized backends.",
    },
    {
      icon: <FaUniversity className="text-2xl" />,
      title: "Academic Research",
      description:
        "Thesis on intellectual property process automation at UTA using BI and clean architecture.",
    },
  ];

  return (
    <section
      id="sobre-mi"
      className={`min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Bubbles and decorative particles */}
      <motion.div
        className={`absolute top-10 left-10 w-20 h-20 rounded-full blur-xl ${
          theme === "dark" ? "bg-blue-500" : "bg-blue-200"
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-10 right-10 w-32 h-32 rounded-full blur-xl ${
          theme === "dark" ? "bg-purple-500" : "bg-purple-200"
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative particles (only visible in dark mode) */}
      {theme === "dark" && (
        <>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-gray-100 via-blue-400 to-purple-400"
                  : "from-gray-800 via-blue-600 to-purple-600"
              }`}
              variants={itemVariants}
            >
              About me
            </motion.h2>
            <motion.div
              className={`w-24 h-1 mx-auto rounded-full ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-500 to-purple-500"
              }`}
              variants={itemVariants}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div
              className={`rounded-3xl p-8 md:p-12 shadow-xl border relative overflow-hidden ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* Background decoration */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 opacity-50 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-blue-600/30 to-purple-600/30"
                    : "bg-gradient-to-br from-blue-100 to-purple-100"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12 opacity-50 ${
                  theme === "dark"
                    ? "bg-gradient-to-tr from-indigo-600/30 to-pink-600/30"
                    : "bg-gradient-to-tr from-indigo-100 to-pink-100"
                }`}
              />

              <div className="relative z-10">
                <motion.div className="mb-8" variants={itemVariants}>
                  <p
                    className={`text-xl leading-relaxed mb-6 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I'm a passionate Full-Stack Developer from{" "}
                    <motion.span
                      className="font-bold text-2xl bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 bg-clip-text text-transparent bg-[length:200%_100%]"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #FDE047 0%, #FDE047 33%, #2563EB 33%, #2563EB 66%, #DC2626 66%, #DC2626 100%)",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                      }}
                      transition={{
                        scale: { type: "spring", stiffness: 300 },
                        backgroundPosition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      Ecuador
                    </motion.span>
                    , with a{" "}
                    <span
                      className={
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }
                    >
                      backend focus
                    </span>
                    . I specialize in building scalable,{" "}
                    <span
                      className={
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }
                    >
                      secure APIs
                    </span>
                    , and efficient{" "}
                    <span
                      className={
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      }
                    >
                      databases
                    </span>{" "}
                    that optimize{" "}
                    <span
                      className={
                        theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                      }
                    >
                      information flows
                    </span>
                    .
                  </p>
                </motion.div>

                <motion.div className="mb-8" variants={itemVariants}>
                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    With practical experience in technologies such as{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-blue-400 bg-blue-900/30"
                          : "text-blue-600 bg-blue-50"
                      }`}
                    >
                      React
                    </span>
                    ,{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-purple-400 bg-purple-900/30"
                          : "text-purple-700 bg-purple-50"
                      }`}
                    >
                      .NET
                    </span>
                    ,{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-orange-400 bg-orange-900/30"
                          : "text-orange-600 bg-orange-50"
                      }`}
                    >
                      SQL Server
                    </span>{" "}
                    and{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-yellow-400 bg-yellow-900/30"
                          : "text-gray-800 bg-yellow-100"
                      }`}
                    >
                      Express
                    </span>
                    . I am always eager to collaborate on meaningful projects
                    and contribute to innovative teams that drive technological
                    advancement.
                  </p>
                </motion.div>

                <motion.div
                  className={`p-6 rounded-2xl border-l-4 ${
                    theme === "dark"
                      ? "border-blue-400 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"
                      : "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50"
                  }`}
                  variants={itemVariants}
                >
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      🎓 Thesis Project:
                    </span>{" "}
                    I successfully completed my research at{" "}
                    <strong
                      className={
                        theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                      }
                    >
                      "Universidad Técnica de Ambato"
                    </strong>
                    , focused on tracking academic intellectual property
                    projects using{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded ${
                        theme === "dark"
                          ? "text-green-400 bg-green-900/30"
                          : "text-green-600 bg-green-50"
                      }`}
                    >
                      BI
                    </span>{" "}
                    and tools like{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-purple-400 bg-purple-900/30"
                          : "text-purple-700 bg-purple-50"
                      }`}
                    >
                      Blazor
                    </span>
                    ,{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-red-400 bg-red-900/30"
                          : "text-red-600 bg-red-50"
                      }`}
                    >
                      SQL Server
                    </span>{" "}
                    and{" "}
                    <span
                      className={`font-semibold px-2 py-1 rounded-lg ${
                        theme === "dark"
                          ? "text-yellow-400 bg-yellow-900/30"
                          : "text-yellow-600 bg-yellow-100"
                      }`}
                    >
                      Power BI
                    </span>
                    .
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 backdrop-blur-sm"
                    : "bg-white border-gray-100 hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`p-3 text-white rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-blue-500 to-purple-600"
                        : "bg-gradient-to-br from-blue-500 to-purple-600"
                    }`}
                  >
                    {highlight.icon}
                  </div>
                  <h3
                    className={`font-bold text-lg ${
                      theme === "dark" ? "text-gray-100" : "text-gray-800"
                    }`}
                  >
                    {highlight.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies Section */}
          <motion.div variants={itemVariants}>
            <TecnologiasGrid />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SobreMi;
