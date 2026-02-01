/**
 * Extract all unique tags from projects array
 * @param {Array} projects - Array of project objects
 * @returns {Array} Sorted array of unique tags with "all" as first item
 */
export const getAllTags = (projects) => {
  const set = new Set();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
};

/**
 * Filter projects based on status, technology, and search query
 * @param {Array} projects - Array of project objects
 * @param {string} statusFilter - Filter by status: "all" | "completed" | "inprogress"
 * @param {string} techFilter - Filter by technology tag
 * @param {string} query - Search query string
 * @returns {Array} Filtered array of projects
 */
export const filterProjects = (projects, statusFilter, techFilter, query) => {
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
};

/**
 * Calculate project statistics
 * @param {Array} projects - Array of project objects
 * @returns {Object} Object containing total, completed, and inProgress counts
 */
export const getProjectStats = (projects) => {
  return {
    total: projects.length,
    completed: projects.filter((p) => p.completed).length,
    inProgress: projects.filter((p) => !p.completed).length,
  };
};
