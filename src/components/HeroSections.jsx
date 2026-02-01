import React from "react";
import { motion } from "framer-motion";
import "../style.css";
import { TypeAnimation } from "react-type-animation";
import { FaFileDownload, FaArrowDown } from 'react-icons/fa';

const HeroSections = () => {

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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


  return (
    <section 
      className="hero container mx-auto pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
        {/* --- قسم النصوص والمعلومات --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 sm:flex-[7] text-center sm:text-left min-w-0"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            <motion.span 
              className="waving-hand text-4xl sm:text-5xl md:text-6xl inline-block mr-2"
              animate={{ 
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              👋
            </motion.span>
            <span className="block sm:inline">Hi, I'm </span>
            <span className="gradient-text block sm:inline-block sm:min-w-[300px] md:min-w-[400px] lg:min-w-[450px]">
              <TypeAnimation
                sequence={["Homam", 2000, "a Developer", 2000, "a Creator", 2000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-base-content/80 mb-8 leading-relaxed"
          >
            I build dynamic and responsive web applications from Syria. 
            <span className="block mt-2">Open to new opportunities worldwide. 🌍</span>
          </motion.p>
          
          {/* --- أزرار الدعوة لاتخاذ إجراء (CTA) --- */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start mb-8"
          >
            <motion.a 
              href="/projectspage" 
              className="btn btn-primary w-full sm:w-auto rounded-lg text-base px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
            <motion.a 
              href="/Homam_Alyaghshi_CV.pdf" 
              download 
              className="btn btn-outline w-full sm:w-auto rounded-lg text-base px-8 border-2 hover:bg-base-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="mr-2"/>
              Download CV
            </motion.a>
          </motion.div>

          {/* معلومات الاتصال */}
          <motion.div 
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <a 
              href="mailto:homamalyaghshi@gmail.com" 
              className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-all duration-300 group"
            >
              <span className="text-lg">✉️</span>
              <span className="text-base sm:text-lg font-medium group-hover:underline">
                homamalyaghshi@gmail.com
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* --- قسم الصورة الشخصية --- */}
        <div className="flex-[5] flex justify-center sm:justify-end flex-shrink-0 basis-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0"
          >
            {/* تأثير التوهج المحسّن */}
            <motion.div 
              className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-20"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Border ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            
            <motion.img
              alt="صورة شخصية لهمام"
              src="/images/homam.jpg"
              className="relative w-full h-full object-cover bg-mycolor rounded-full shadow-2xl border-4 border-base-100"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-base-content/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSections;