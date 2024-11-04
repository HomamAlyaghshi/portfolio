import React from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex justify-around items-center w-full">
        <Link to={"/"}>
          <button className="btn btn-ghost hidden sm:flex text-xl">Home</button>
        </Link>
        <Link to={"/aboutpage"}>
          <button className="btn btn-ghost text-xl">About</button>
        </Link>
        <Link to={"/"}>
          <button className="btn btn-ghost hidden sm:flex text-5xl sm:2xl">JS</button>
        </Link>{" "}
        <Link to={'/projectspage'}>
        <button className="btn btn-ghost text-xl">Projects</button>
        </Link>
        <button className="btn btn-ghost text-xl">d</button>
      </div>
    </div>
  );
};

export default Appbar;
