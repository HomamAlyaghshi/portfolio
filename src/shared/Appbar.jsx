import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the burger menu
import DarkMode from "../components/DarkMode";

const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex justify-between items-center w-full sm:ml-28">
        {/* DarkMode button stays outside of the menu */}
        <button className="btn btn-ghost text-xl">
          <DarkMode />
        </button>
        
        {/* Burger icon for toggling the menu */}
        <button
          className="sm:hidden btn btn-ghost"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Regular menu visible on larger screens */}
        <div className="hidden sm:flex justify-around items-center w-full">
          <Link to={"/"}>
            <button className="btn btn-ghost text-xl">Home</button>
          </Link>
          <Link to={"/"}>
            <button className="btn btn-ghost text-5xl gradient-text">JS</button>
          </Link>
          <Link to={"/aboutpage"}>
            <button className="btn btn-ghost text-xl">About</button>
          </Link>
          <Link to={"/projectspage"}>
            <button className="btn btn-ghost text-xl">Projects</button>
          </Link>
        </div>
      </div>

      {/* Dropdown menu visible only when the menu is toggled on small screens */}
      {menuOpen && (
        <div className="flex flex-col items-start sm:hidden mt-2 space-y-2">
          <Link to={"/"}>
            <button className="btn btn-ghost text-xl">Home</button>
          </Link>
          <Link to={"/aboutpage"}>
            <button className="btn btn-ghost text-xl">About</button>
          </Link>

          <Link to={"/projectspage"}>
            <button className="btn btn-ghost text-xl">Projects</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Appbar;
