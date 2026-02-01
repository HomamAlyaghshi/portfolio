import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaGitlab } from 'react-icons/fa';

const SocialMedia = () => {
    const socialLinks = [
        {
            name: "Facebook",
            icon: FaFacebook,
            href: "https://www.facebook.com/hummam.yag?mibextid=kFxxJD",
            color: "text-blue-600",
            hoverBg: "hover:bg-blue-100",
            hoverColor: "group-hover:text-blue-700",
            delay: 0.1
        },
        {
            name: "GitHub",
            icon: FaGithub,
            href: "https://github.com/HomamAlyaghshi",
            color: "text-gray-800",
            hoverBg: "hover:bg-gray-100",
            hoverColor: "group-hover:text-gray-900",
            delay: 0.2
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/homam-alyaghshi-ab78351a6/",
            color: "text-blue-700",
            hoverBg: "hover:bg-blue-50",
            hoverColor: "group-hover:text-blue-800",
            delay: 0.3
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            href: "https://www.instagram.com/homam_yaghshi/profilecard/?igsh=YTB4dXN2ZDV3cWE0",
            color: "text-pink-500",
            hoverBg: "hover:bg-pink-50",
            hoverColor: "group-hover:text-pink-600",
            delay: 0.4
        },
        {
            name: "GitLab",
            icon: FaGitlab,
            href: "https://gitlab.com/homamalyaghshi/",
            color: "text-orange-500",
            hoverBg: "hover:bg-orange-50",
            hoverColor: "group-hover:text-orange-600",
            delay: 0.5
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-12 sm:py-16 px-4 bg-base-100">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        Connect with me
                    </h2>
                    <p className="text-base-content/70 text-sm sm:text-base">
                        Let's build something amazing together
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10"
                >
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                whileHover={{ scale: 1.15, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl 
                                           bg-base-200 border-2 border-base-300 shadow-md 
                                           ${link.hoverBg} transition-all duration-300 ease-in-out
                                           hover:shadow-xl hover:border-primary/30`}
                                aria-label={`${link.name} Profile`}
                            >
                                <Icon
                                    size="28px"
                                    className={`${link.color} ${link.hoverColor} transition-colors duration-300 sm:size-[32px]`}
                                />
                                
                                {/* Enhanced Tooltip */}
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5
                                                  bg-base-content text-base-100 text-xs font-medium rounded-lg
                                                  opacity-0 group-hover:opacity-100
                                                  transition-all duration-300 whitespace-nowrap pointer-events-none
                                                  shadow-lg before:content-[''] before:absolute before:top-full 
                                                  before:left-1/2 before:-translate-x-1/2 before:border-4 
                                                  before:border-transparent before:border-t-base-content">
                                    {link.name}
                                </span>

                                {/* Ripple effect on hover */}
                                <span className="absolute inset-0 rounded-2xl bg-primary/20 scale-0 group-hover:scale-100 
                                                  transition-transform duration-500 opacity-0 group-hover:opacity-100"></span>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialMedia;