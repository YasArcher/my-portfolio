import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { certificaciones } from "../constants/certificados";
import { useTheme } from "../context/ThemeContext";
import type { Variants } from "framer-motion";

const Certificaciones = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section
      id="certificados"
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Background decorations */}
      <div
        className={`absolute top-10 left-10 w-20 h-20 rounded-full blur-xl ${
          theme === "dark" ? "bg-blue-500" : "bg-blue-200"
        }`}
      />
      <div
        className={`absolute bottom-10 right-10 w-32 h-32 rounded-full blur-xl ${
          theme === "dark" ? "bg-purple-500" : "bg-purple-200"
        }`}
      />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full blur-lg" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-3 mb-4"
              variants={itemVariants}
            >
              <FaAward className="text-3xl text-yellow-500" />
              <h2
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === "dark"
                    ? "from-gray-100 via-blue-400 to-purple-400"
                    : "from-gray-800 via-blue-600 to-purple-600"
                }`}
              >
                Certifications
              </h2>
              <FaCertificate
                className={`text-3xl ${
                  theme === "dark" ? "text-blue-400" : "text-blue-500"
                }`}
              />
            </motion.div>

            <motion.p
              className={`text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
              variants={itemVariants}
            >
              Continuing education and certifications that support my
              professional experience.
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"
              variants={itemVariants}
            />
          </motion.div>

          {/* Swiper Section */}
          <motion.div variants={itemVariants}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              autoplay={{
                delay: 5000,
                stopOnLastSlide: true,
                disableOnInteraction: false,
              }}
              loop={false}
              effect="coverflow"
              coverflowEffect={{
                rotate: 15,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  effect: "slide",
                },
                768: {
                  slidesPerView: 2,
                  effect: "slide",
                },
                1024: {
                  slidesPerView: 3,
                  effect: "coverflow",
                },
              }}
              className="pb-12"
            >
              {certificaciones.map((cert, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    className="group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] relative ${
                        theme === "dark"
                          ? "bg-gray-800/80 border border-gray-700/50 hover:shadow-2xl"
                          : "bg-white/80 border border-white/50 hover:shadow-2xl"
                      }`}
                    >
                      {/* Gradient overlay on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                          theme === "dark"
                            ? "from-blue-600/20 to-transparent"
                            : "from-blue-600/10 to-transparent"
                        }`}
                      />

                      {/* Image container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={cert.imagen}
                          alt={cert.titulo}
                          className="w-full h-70 object-cover group-hover:scale-110 transition-transform duration-500"
                          style={{
                            filter:
                              theme === "dark"
                                ? "brightness(0.9)"
                                : "brightness(1)",
                          }}
                        />

                        {/* Certificate badge */}
                        <div
                          className={`absolute top-4 right-4 backdrop-blur-sm rounded-full p-2 shadow-lg ${
                            theme === "dark" ? "bg-gray-800/90" : "bg-white/90"
                          }`}
                        >
                          <FaCertificate
                            className={`text-lg ${
                              theme === "dark"
                                ? "text-blue-400"
                                : "text-blue-600"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative z-20">
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            theme === "dark"
                              ? "text-gray-100 group-hover:text-blue-400"
                              : "text-gray-800 group-hover:text-blue-700"
                          }`}
                        >
                          {cert.titulo}
                        </h3>

                        <p
                          className={`mb-4 flex items-center ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <FaAward className="text-yellow-500 mr-2 text-sm" />
                          {cert.institucion}
                        </p>

                        {cert.enlace && (
                          <motion.a
                            href={cert.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 font-semibold transition-colors duration-300 group/link ${
                              theme === "dark"
                                ? "text-blue-400 hover:text-blue-300"
                                : "text-blue-600 hover:text-blue-800"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View certificate</span>
                            <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                className={`swiper-button-prev-custom w-12 h-12 shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-blue-400 hover:text-blue-300 hover:bg-gray-700/80"
                    : "bg-white text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                <svg
                  className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className={`swiper-button-next-custom w-12 h-12 shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-blue-400 hover:text-blue-300 hover:bg-gray-700/80"
                    : "bg-white text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                }`}
              >
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div className="mt-16 text-center" variants={itemVariants}>
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
              <span className="text-sm font-medium">
                {certificaciones.length} completed certifications
              </span>
              <div
                className={`w-8 h-px bg-gradient-to-l from-transparent ${
                  theme === "dark" ? "to-gray-600" : "to-gray-300"
                }`}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet-custom {
          background: ${theme === "dark" ? "#64748b" : "#cbd5e1"};
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Certificaciones;
