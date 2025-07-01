import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import perfil2 from '../assets/perfil2.jpg';
import { useTheme } from "../context/ThemeContext";

const Presentacion = () => {
  const { theme } = useTheme();

  // Variantes de animación para el contenedor principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Variantes para la imagen de perfil
  const profileVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.34, 1.56, 0.64, 1], // curva tipo backOut
        delay: 0.2, // aquí va el delay general
      },
    },
  };

  // Variantes para el texto del nombre
  const nameVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variantes para la descripción con efecto de escritura
  const descriptionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="presentacion"
      className={`min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Elementos decorativos de fondo */}
      <motion.div
        className={`absolute top-20 left-20 w-32 h-32 rounded-full opacity-20 ${
          theme === 'dark' 
            ? "bg-blue-500" 
            : "bg-blue-200"
        }`}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-20 ${
          theme === 'dark' 
            ? "bg-purple-500" 
            : "bg-purple-200"
        }`}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Partículas adicionales para modo oscuro */}
      {theme === 'dark' && (
        <>
          <motion.div
            className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      <motion.div
        className="max-w-2xl text-center flex flex-col items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Imagen de perfil con animaciones avanzadas */}
        <motion.div className="relative mb-8" variants={profileVariants}>
          <motion.div
            className={`absolute inset-0 rounded-full ${
              theme === 'dark'
                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                : "bg-gradient-to-r from-blue-400 to-purple-500"
            }`}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={perfil2}
            alt="Foto de perfil"
            className={`relative w-48 h-48 rounded-full object-cover shadow-2xl border-4 ${
              theme === 'dark' 
                ? "border-gray-700" 
                : "border-white"
            }`}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: theme === 'dark' 
                ? "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {/* Indicador de estado online */}
          <motion.div
            className={`absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-3 ${
              theme === 'dark' 
                ? "border-gray-700" 
                : "border-white"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Nombre con animación llamativa */}
        <motion.h1
          className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent ${
            theme === 'dark'
              ? "from-gray-100 via-blue-400 to-purple-400"
              : "from-gray-800 via-blue-600 to-purple-600"
          }`}
          variants={nameVariants}
          whileHover={{
            scale: 1.05,
            textShadow: theme === 'dark' 
              ? "0 0 20px rgba(96, 165, 250, 0.6)"
              : "0 0 20px rgba(59, 130, 246, 0.5)",
          }}
        >
          Hi! I'm Marlon Masabanda
        </motion.h1>

        {/* Descripción con animación de aparición gradual */}
        <motion.p
          className={`text-xl md:text-2xl leading-relaxed max-w-3xl ${
            theme === 'dark' 
              ? "text-gray-300" 
              : "text-gray-600"
          }`}
          variants={descriptionVariants}
        >
          Full-stack developer with a strong{" "}
          <motion.span
            className={`font-semibold ${
              theme === 'dark' ? "text-blue-400" : "text-blue-600"
            }`}
            whileHover={{ 
              scale: 1.1, 
              color: theme === 'dark' ? "#60A5FA" : "#3B82F6" 
            }}
            transition={{ duration: 0.2 }}
          >
            backend focus
          </motion.span>
          , skilled in designing{" "}
          <motion.span
            className={`font-semibold ${
              theme === 'dark' ? "text-purple-400" : "text-purple-600"
            }`}
            whileHover={{ 
              scale: 1.1, 
              color: theme === 'dark' ? "#C084FC" : "#9333EA" 
            }}
            transition={{ duration: 0.2 }}
          >
            secure APIs
          </motion.span>
          , managing{" "}
          <motion.span
            className={`font-semibold ${
              theme === 'dark' ? "text-green-400" : "text-green-600"
            }`}
            whileHover={{ 
              scale: 1.1, 
              color: theme === 'dark' ? "#4ADE80" : "#16A34A" 
            }}
            transition={{ duration: 0.2 }}
          >
            databases
          </motion.span>
          , and optimizing{" "}
          <motion.span
            className={`font-semibold ${
              theme === 'dark' ? "text-yellow-400" : "text-yellow-600"
            }`}
            whileHover={{ 
              scale: 1.1, 
              color: theme === 'dark' ? "#FBBF24" : "#D97706" 
            }}
            transition={{ duration: 0.2 }}
          >
            information flows
          </motion.span>{" "}
          to improve the operability of business systems.
        </motion.p>

        {/* Botones de acción con animaciones */}
        <motion.div
          className="flex gap-4 mt-8 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/YasArcher"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-full shadow-lg transition-colors ${
              theme === 'dark'
                ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500"
                : "bg-gradient-to-r from-gray-800 to-gray-600 text-white"
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: theme === 'dark' 
                ? "0 10px 25px -5px rgba(75, 85, 99, 0.4)"
                : "0 10px 25px -5px rgba(55, 65, 81, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -2, 0] }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <FaGithub className="text-xl" />
            GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/marlon-masabanda-6b4984239/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-full transition-colors ${
              theme === 'dark'
                ? "border-blue-400 text-blue-400 hover:bg-blue-900/20"
                : "border-blue-500 text-blue-600 hover:bg-blue-50"
            }`}
            whileHover={{
              scale: 1.05,
              borderColor: theme === 'dark' ? "#60A5FA" : "#2563EB",
              backgroundColor: theme === 'dark' ? "rgba(59, 130, 246, 0.1)" : "#EFF6FF",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className={`text-xl ${
              theme === 'dark' ? "text-blue-400" : "text-blue-600"
            }`} />
            LinkedIn
          </motion.a>

          {/* Botón de CORREO */}
          <motion.a
            href="mailto:marlon25.masabanda@proton.me"
            className={`flex items-center gap-2 px-6 py-3 border-2 font-semibold rounded-full transition-colors ${
              theme === 'dark'
                ? "border-green-400 text-green-400 hover:bg-green-900/20"
                : "border-green-500 text-green-600 hover:bg-green-50"
            }`}
            onClick={() => {
              navigator.clipboard.writeText("marlon25.masabanda@proton.me");
              toast.success("Correo copiado al portapapeles ✉️");
            }}
            whileHover={{
              scale: 1.05,
              borderColor: theme === 'dark' ? "#4ADE80" : "#16A34A",
              backgroundColor: theme === 'dark' ? "rgba(34, 197, 94, 0.1)" : "#ECFDF5",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className={`text-xl ${
              theme === 'dark' ? "text-green-400" : "text-green-600"
            }`} />
            Send email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Presentacion;