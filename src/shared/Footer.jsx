import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative mt-20 sm:mt-24 py-8 sm:py-12 border-t border-base-300 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base text-base-content/70">
            <span>Template created with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="text-primary inline-block"
            >
              <FaHeart />
            </motion.span>
            <span>by</span>
            <span className="font-semibold text-base-content gradient-text">
              Homam Alyaghshi
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-base-content/60">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>

          {/* Decorative line */}
          <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
