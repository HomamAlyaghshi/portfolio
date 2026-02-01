import { useMemo } from "react";
import { filterProjects, getAllTags, getProjectStats } from "../utils/projectsUtils";

/**
 * Custom hook for managing projects filtering and data
 * @param {Array} projects - Array of project objects
 * @param {string} statusFilter - Filter by status: "all" | "completed" | "inprogress"
 * @param {string} techFilter - Filter by technology tag
 * @param {string} query - Search query string
 * @returns {Object} Object containing filtered projects, all tags, and statistics
 */
export const useProjectsFilter = (projects, statusFilter, techFilter, query) => {
  const allTags = useMemo(() => getAllTags(projects), [projects]);

  const filtered = useMemo(
    () => filterProjects(projects, statusFilter, techFilter, query),
    [projects, statusFilter, techFilter, query]
  );

  const stats = useMemo(() => getProjectStats(projects), [projects]);

  return {
    allTags,
    filtered,
    stats,
  };
};
