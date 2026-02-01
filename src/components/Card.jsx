import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style.css";

const ModernTabsCard = () => {
  const [activeTab, setActiveTab] = useState("about");

  const skills = [
    "CSS3", "HTML5", "JavaScript", "React.js", "Next.js", "MaterialUI",
    "DaisyUI", "Vue3.js", "Nuxt.js", "Tailwind CSS", "Git", "Github",
    "C++", "Python"
  ];

  const hobbies = [
    "🎥 Watching Movies", "📻 Classic Music", "📖 Reading Books", 
    "🎮 Gaming", "🚶‍♂️ Hiking"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderTabContent = () => {
    return (
      <AnimatePresence mode="wait">
        {activeTab === "about" && (
          <motion.div
            key="about"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-6 md:p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text"
            >
              About Homam
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-base-content/80 leading-relaxed"
            >
              Hello! I'm Homam. I'm a front-end developer, studying Computer Engineering at the University of Damascus. I enjoy teamwork that enhances my experience, and I believe that creativity is the key to the success of any work. You should hire me!
            </motion.p>
          </motion.div>
        )}

        {activeTab === "skills" && (
          <motion.div
            key="skills"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-6 md:p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text"
            >
              Skills & Tools
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-base-content text-lg"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-base-200 border border-base-300 rounded-xl shadow-md text-center
                             transition-all duration-300 ease-in-out
                             hover:bg-primary hover:text-primary-content hover:shadow-lg cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}

        {activeTab === "hobbies" && (
          <motion.div
            key="hobbies"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-6 md:p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text"
            >
              Hobbies & Interests
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base-content text-lg"
            >
              {hobbies.map((hobby, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-base-200 border border-base-300 rounded-xl shadow-md text-center
                             transition-all duration-300 ease-in-out
                             hover:bg-accent hover:text-accent-content hover:shadow-lg cursor-pointer"
                >
                  {hobby}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-base-200 rounded-2xl shadow-2xl overflow-hidden
                      border border-base-300"
        >
          {/* شريط التبويبات العلوي */}
          <div className="flex flex-col sm:flex-row justify-center bg-base-300 p-3 md:p-4 border-b border-base-300 gap-2">
            {[
              { id: "about", label: "About Me" },
              { id: "skills", label: "Skills & Tools" },
              { id: "hobbies", label: "Hobbies" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 rounded-xl text-lg font-semibold
                            transition-all duration-300 ease-in-out
                            ${
                              activeTab === tab.id
                                ? "bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg shadow-primary/30"
                                : "bg-base-100 text-base-content hover:bg-base-content/10"
                            }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* منطقة عرض المحتوى */}
          <div className="relative min-h-[400px] flex items-center justify-center bg-base-200">
            {renderTabContent()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTabsCard;