import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { FaReact } from "react-icons/fa"; // وأي أيقونات تقنيات أخرى

// يمكنك استخدام مكون TechIcon إذا أردت عرض أيقونات التقنيات في النافذة المنبثقة
// const TechIcon = ({ tag }) => { ... };

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // سنستخدم بيانات المشاريع الغنية بالتفاصيل لتغذية النافذة المنبثقة
    const [projects] = useState([
    {
        name: "First Project",
        image: "/images/project1.png",
        liveUrl: "https://p1-mauve.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/e-commerce",
        description: "An e-commerce project built with React, offering product browsing and a modern responsive UI.",
        tags: ["React", "TailwindCSS"],
        completed: true,
    },
    {
        name: "Furnishify E-commerce",
        image: "/images/project2.png",
        liveUrl: "https://project3-murex-mu.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/project3",
        description: "A full-stack e-commerce platform for furniture with a clean user interface and robust back-end, featuring product catalogs, user authentication, and a shopping cart.",
        tags: ["React", "TailwindCSS", "Redux"],
        completed: true,
    },
    {
        name: "Foodisphere",
        image: "/images/project3.png",
        liveUrl: "https://foodisphere.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/Foodisphere",
        description: "A recipe discovery app that allows users to find and save their favorite dishes from a vast online database via an API.",
        tags: ["React", "TailwindCSS", "API" , "MUI"],
        completed: true,
    },
    {
        name: "Portfolio",
        image: "/images/project4.png",
        liveUrl: "https://portfolio-dusky-sigma-50.vercel.app/",
        sourceUrl: "#",
        description: "My personal portfolio showcasing my projects and skills using modern design and smooth interactions.",
        tags: ["React", "TailwindCSS"],
        completed: true,
    },
    {
        name: "Recipes",
        image: "/images/project5.png",
        liveUrl: "https://first-nuxt-project-ivory.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/first-nu-project",
        description: "A simple Nuxt.js recipe website featuring category filtering and detailed recipe pages.",
        tags: ["Nuxt.js", "Vuex", "TailwindCSS"],
        completed: true,
    },
    {
        name: "Hotel Dashboard",
        image: "/images/project8.png",
        liveUrl: "https://hotel-dashboard-peach.vercel.app/",
        sourceUrl: "#",
        description: "An admin panel for managing hotel bookings, rooms, and generating insightful reports with Chart.js.",
        tags: ["React", "TailwindCSS", "Zustand"],
        completed: true,
    },
    {
        name: "My Graduation Project",
        image: "/images/project6.png",
        liveUrl: "#",
        sourceUrl: "#",
        description: "My university graduation project which is still under development and aims to solve real-world problems.",
        tags: ["React", "TailwindCSS", "API","MangoDB" , "Node"],
        completed: false,
    },
    {
        name: "tamayoz LMS",
        image: "/images/project7.png",
        liveUrl: "#",
        sourceUrl: "#",
        description: "A feature-rich Learning Management System for an educational platform, currently under development.",
        tags: ["Nuxt.js", "Vuex", "Vuetify"],
        completed: false,
    },
    {
        name: "Alemad Charity",
        image: "/images/project9.png",
        liveUrl: "https://alemadcharity.org/",
        sourceUrl: "#",
        description: "The official website for Alemad Charity, showcasing their initiatives, projects, and donation opportunities.",
        tags: ["HTML", "CSS", "JavaScript"],
        completed: true,
    },
    {
        name: "What to Read",
        image: "/images/project12.png",
        liveUrl: "https://what-to-read-two.vercel.app/",
        sourceUrl: "#",
        description: "A book recommendation platform that helps users find books based on their interests, mood, and reading time.",
        tags: ["React", "TailwindCSS", "Google Books API"],
        completed: true,
    },
 {
    name: "Clinic Dashboard",
    image: "/images/project10.png",
    liveUrl: "https://clinic-management-system-sehu.vercel.app/",
    sourceUrl: "#",
    description: "A comprehensive clinic management system dashboard for handling appointments, patients, and reports. The project utilizes React Context API for efficient state management across components.",
    tags: ["React", "TailwindCSS", "Context API"],
    completed: true,
},
    {
        name: "Dashboard",
        image: "/images/project11.png",
        liveUrl: "https://dashboard-lovat-beta.vercel.app/",
        sourceUrl: "#",
        description: "A simple dashboard template with clean design and various UI components for management systems.",
        tags: ["React", "TailwindCSS"],
        completed: true,
    },
]);

    const cardHoverVariant = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div id="projects" className="bg-gray-900 text-white py-20 px-4 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-cyan-400">Projects</span></h2>
                <p className="text-lg text-gray-400 text-center mb-12">
                    Click on any project to see the details.
                </p>

                {/* هنا نستخدم طريقة العرض القديمة (الشبكة الكلاسيكية) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.name}
                            className="relative group rounded-lg overflow-hidden shadow-lg  cursor-pointer"
                            variants={cardHoverVariant}
                            whileHover="hover"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-full w-full overflow-hidden">
                                <img
                                    alt={project.name}
                                    src={project.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* طبقة شفافة تظهر عند التمرير مع زر "عرض المشروع" */}
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                                <div className="flex items-center text-cyan-400 font-semibold">
                                    <span>View Details</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>

                             {/* شارة "قيد التنفيذ" للمشاريع غير المكتملة */}
                             {!project.completed && (
                                <div className="absolute top-3 right-3 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                                    In Progress
                                </div>
                            )}

                            {/* العنوان الدائم في أسفل البطاقة (يختفي عند التمرير) */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* هنا نستخدم النافذة المنبثقة (Modal) من التصميم الجديد */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex justify-center items-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()} // لمنع إغلاق النافذة عند النقر داخلها
                        >
                            <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm p-4 flex justify-between items-center z-10 border-b border-gray-700">
                                <h2 className="text-2xl font-bold text-cyan-400">{selectedProject.name}</h2>
                                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white transition-colors">
                                    <X />
                                </button>
                            </div>
                            <div className="p-6">
                                <img src={selectedProject.image} alt={selectedProject.name} className="w-full rounded-lg mb-6 shadow-lg"/>
                                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="bg-gray-700 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-5 py-2 bg-cyan-500 text-white rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:scale-105 ${!selectedProject.completed || selectedProject.liveUrl === '#' ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}>
                                        <ExternalLink size={18}/> Live Demo
                                    </a>
                                    <a href={selectedProject.sourceUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105 ${selectedProject.sourceUrl === '#' ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}>
                                        <Github size={18}/> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;