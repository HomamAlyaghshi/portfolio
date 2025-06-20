import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for active link styling
import { FaBars, FaTimes } from "react-icons/fa";

const Appbar = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route location

  // Effect to apply theme to the document's HTML tag
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme); // Use document.documentElement for consistency
  }, [theme]);

  // Function to handle theme toggle
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  // Function to close menu on navigation (important for mobile UX)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Define navigation links for easier management and mapping
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutpage" },
    { name: "Projects", path: "/projectspage" },
    // Add more links here if needed, e.g., Contact
    // { name: "Contact", path: "/contactpage" },
  ];

  return (
    <nav className="navbar w-full shadow-md z-50 relative"> {/* Added shadow and z-index */}
      <div className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-28 py-2"> {/* Improved padding */}

        {/* Logo/Brand Name */}
        <div className="flex-shrink-0">
          <Link to={"/"} className="text-3xl font-bold gradient-text" onClick={closeMenu}>
            JS
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center ml-auto mr-4 sm:mr-0"> {/* Adjusted positioning */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={theme === "dark"}
              aria-label="Toggle dark mode" // Accessibility improvement
            />
            {/* Sun icon */}
            <svg
              className="swap-on h-8 w-8 fill-current text-yellow-500" // Added color for sun
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-off h-8 w-8 fill-current text-blue-500" // Added color for moon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* Burger icon for toggling the menu on small screens */}
        <div className="sm:hidden">
          <button className="btn btn-ghost p-2" onClick={toggleMenu} aria-expanded={menuOpen}> {/* Added accessibility attributes */}
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Regular menu visible on larger screens */}
        <div className="hidden sm:flex items-center space-x-6"> {/* Used space-x for better spacing */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`btn btn-ghost text-lg ${location.pathname === link.path ? "btn-active" : ""}`} // Active link styling
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Dropdown menu for small screens - conditionally rendered */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg sm:hidden flex flex-col items-start px-4 py-4 space-y-3 animate-fade-in-down"> {/* Added animation and improved styling */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`btn btn-ghost text-lg w-full text-left ${location.pathname === link.path ? "btn-active" : ""}`}
              onClick={closeMenu} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Appbar;