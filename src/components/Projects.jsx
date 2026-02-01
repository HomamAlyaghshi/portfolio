import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Search } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // all | completed | inprogress
  const [techFilter, setTechFilter] = useState("all");
  const [query, setQuery] = useState("");

  const projects = useMemo(
    () => [
      {
        name: "First Project",
        image: "/images/project1.png",
        liveUrl: "https://p1-mauve.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/e-commerce",
        description:
          "An e-commerce project built with React, offering product browse and a modern responsive UI.",
        tags: ["React", "TailwindCSS"],
        completed: true,
      },
      {
        name: "Furnishify E-commerce",
        image: "/images/project2.png",
        liveUrl: "https://project3-murex-mu.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/project3",
        description:
          "A full-stack e-commerce platform for furniture with a clean UI and robust features: catalog, auth, cart.",
        tags: ["React", "TailwindCSS", "Redux"],
        completed: true,
      },
      {
        name: "Foodisphere",
        image: "/images/project3.png",
        liveUrl: "https://foodisphere.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/Foodisphere",
        description:
          "Recipe discovery app to find and save dishes via external API with a smooth UI.",
        tags: ["React", "TailwindCSS", "API", "MUI"],
        completed: true,
      },
      {
        name: "Portfolio",
        image: "/images/project4.png",
        liveUrl: "https://portfolio-dusky-sigma-50.vercel.app/",
        sourceUrl: "#",
        description:
          "Personal portfolio showcasing projects and skills using modern design and smooth interactions.",
        tags: ["React", "TailwindCSS"],
        completed: true,
      },
      {
        name: "Recipes",
        image: "/images/project5.png",
        liveUrl: "https://first-nuxt-project-ivory.vercel.app/",
        sourceUrl: "https://gitlab.com/homamalyaghshi/first-nu-project",
        description:
          "Simple Nuxt.js recipe website featuring category filtering and detailed recipe pages.",
        tags: ["Nuxt.js", "Vuex", "TailwindCSS"],
        completed: true,
      },
      {
        name: "Hotel Dashboard",
        image: "/images/project8.png",
        liveUrl: "https://hotel-dashboard-peach.vercel.app/",
        sourceUrl: "#",
        description:
          "Admin panel for managing hotel bookings and rooms with reports and charts.",
        tags: ["React", "TailwindCSS", "Zustand"],
        completed: true,
      },
      {
        name: "My Graduation Project",
        image: "/images/project6.png",
        liveUrl: "https://my-graduation-project-one.vercel.app/",
        sourceUrl: "#",
        description:
          "University graduation project under development aiming to solve a real-world problem.",
        tags: ["React", "TailwindCSS", "API", "MongoDB", "Node"],
        completed: true,
      },
      {
        name: "tamayoz LMS",
        image: "/images/project7.png",
        liveUrl: "#",
        sourceUrl: "#",
        description:
          "Feature-rich Learning Management System under development for an educational platform.",
        tags: ["Nuxt.js", "Vuex", "Vuetify"],
        completed: false,
      },
      {
        name: "Alemad Charity",
        image: "/images/project9.png",
        liveUrl: "https://alemadcharity.org/",
        sourceUrl: "#",
        description:
          "Official website for Alemad Charity, showcasing initiatives, projects, and donation opportunities.",
        tags: ["HTML", "CSS", "JavaScript"],
        completed: true,
      },
      {
        name: "What to Read",
        image: "/images/project12.png",
        liveUrl: "https://what-to-read-two.vercel.app/",
        sourceUrl: "#",
        description:
          "Book recommendations platform that helps users find books based on interests, mood, and reading time.",
        tags: ["React", "TailwindCSS", "Google Books API"],
        completed: true,
      },
      {
        name: "Clinic Dashboard",
        image: "/images/project10.png",
        liveUrl: "https://clinic-management-system-sehu.vercel.app/",
        sourceUrl: "#",
        description:
          "Clinic management dashboard for appointments, patients, and reports using React Context API.",
        tags: ["React", "TailwindCSS", "Context API"],
        completed: true,
      },
      {
        name: "Dashboard",
        image: "/images/project11.png",
        liveUrl: "https://dashboard-lovat-beta.vercel.app/",
        sourceUrl: "#",
        description:
          "Dashboard template with clean design and UI components for management systems.",
        tags: ["React", "TailwindCSS"],
        completed: true,
      },
      {
        name: "Task Manager",
        image: "/images/project13.png",
        liveUrl: "https://task-manager-beta-eight-17.vercel.app/",
        sourceUrl: "https://github.com/HomamAlyaghshi/Task-Manager",
        description:
          "Task manager built with Next.js and Redux Toolkit, feature-based structure and clean UI.",
        tags: ["Next.js", "Redux Toolkit", "TailwindCSS"],
        completed: true,
      },
      {
        name: "BUNAT",
        image: "/images/project14.png",
        liveUrl: "https://bunat.moad.gov.sy/",
        sourceUrl: "#",
        description: "BUNAT – official governmental platform for building permits and administrative services, providing citizens with access to construction-related procedures and document submission.",
        tags: ["Government", "Public Service", "Web Platform"],
        completed: true,
    },
    ],
    []
  );

  // ESC to close modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const statusOk =
        statusFilter === "all" ||
        (statusFilter === "completed" && p.completed) ||
        (statusFilter === "inprogress" && !p.completed);

      const techOk = techFilter === "all" || p.tags.includes(techFilter);

      const queryOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return statusOk && techOk && queryOk;
    });
  }, [projects, statusFilter, techFilter, query]);

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-10 bg-base-100 text-base-content"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:gap-5 mb-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                My <span className="text-primary">Projects</span>
              </h2>
              <p className="text-base sm:text-lg text-base-content/70 mt-2">
                Browse, filter, and open details… 
              </p>
            </div>

            <div className="stats shadow bg-base-200 border border-base-300">
              <div className="stat py-3">
                <div className="stat-title text-base-content/70">Total</div>
                <div className="stat-value text-2xl">{projects.length}</div>
              </div>
              <div className="stat py-3">
                <div className="stat-title text-base-content/70">Completed</div>
                <div className="stat-value text-2xl">
                  {projects.filter((p) => p.completed).length}
                </div>
              </div>
              <div className="stat py-3">
                <div className="stat-title text-base-content/70">In Progress</div>
                <div className="stat-value text-2xl">
                  {projects.filter((p) => !p.completed).length}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            <div className="join w-full lg:w-auto">
              <button
                className={`btn join-item ${
                  statusFilter === "all" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setStatusFilter("all")}
              >
                All
              </button>
              <button
                className={`btn join-item ${
                  statusFilter === "completed" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setStatusFilter("completed")}
              >
                Completed
              </button>
              <button
                className={`btn join-item ${
                  statusFilter === "inprogress" ? "btn-primary" : "btn-ghost"
                }`}
                onClick={() => setStatusFilter("inprogress")}
              >
                In Progress
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <label className="input input-bordered flex items-center gap-2 w-full sm:w-80 bg-base-200 border-base-300">
                <Search className="w-4 h-4 opacity-70" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className="grow"
                  placeholder="Search by name, tag, or description…"
                />
              </label>

              <select
                className="select select-bordered bg-base-200 border-base-300 w-full sm:w-60"
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t === "all" ? "All technologies" : t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.name}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="card bg-base-200 border border-base-300 shadow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    {project.completed ? (
                      <span className="badge badge-success gap-2">
                        Completed
                      </span>
                    ) : (
                      <span className="badge badge-warning gap-2">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="card-body p-5">
                  <h3 className="card-title text-lg sm:text-xl leading-tight">
                    {project.name}
                  </h3>

                  <p className="text-sm text-base-content/75 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <button
                        key={tag}
                        className="badge badge-outline hover:text-primary transition cursor-pointer"
                        onClick={() => setTechFilter(tag)}
                        title="Filter by this tech"
                      >
                        {tag}
                      </button>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="badge badge-ghost">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="card-actions justify-between items-center pt-3">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View details
                    </button>

                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-ghost btn-sm ${
                          !project.completed || project.liveUrl === "#"
                            ? "btn-disabled"
                            : ""
                        }`}
                        aria-disabled={!project.completed || project.liveUrl === "#"}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-ghost btn-sm ${
                          project.sourceUrl === "#" ? "btn-disabled" : ""
                        }`}
                        aria-disabled={project.sourceUrl === "#"}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 alert bg-base-200 border border-base-300">
            <span className="text-base-content/80">
              No projects match your filters… جرّب تغيّر البحث أو الفلاتر.
            </span>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-4xl bg-base-200 border border-base-300 rounded-2xl shadow-xl overflow-hidden"
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-base-200/90 backdrop-blur border-b border-base-300 px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary truncate">
                    {selectedProject.name}
                  </h3>
                  <div className="mt-1">
                    {selectedProject.completed ? (
                      <span className="badge badge-success">Completed</span>
                    ) : (
                      <span className="badge badge-warning">In Progress</span>
                    )}
                  </div>
                </div>

                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 max-h-[78vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
                  <div className="lg:col-span-3">
                    <div className="rounded-xl overflow-hidden border border-base-300 bg-base-100">
                      <div className="aspect-[16/10]">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">About</h4>
                      <p className="text-sm text-base-content/80 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Tech stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="badge badge-outline">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                      <h4 className="font-semibold mb-3">Links</h4>
                      <div className="flex flex-col gap-2">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-primary btn-sm justify-start ${
                            !selectedProject.completed ||
                            selectedProject.liveUrl === "#"
                              ? "btn-disabled"
                              : ""
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={selectedProject.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-outline btn-sm justify-start ${
                            selectedProject.sourceUrl === "#" ? "btn-disabled" : ""
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>

                      <p className="text-xs text-base-content/60 mt-3">
                        Tip… Use ESC to close this window.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
