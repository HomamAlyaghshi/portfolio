import React from "react";

const Appbar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
<div className="flex justify-around items-center w-full">
<button className="btn btn-ghost hidden sm:flex text-xl">Home</button>
        <button className="btn btn-ghost text-xl">About</button>
        <button className="btn btn-ghost text-2xl sm:text-5xl">JS</button>
        <button className="btn btn-ghost text-xl">Projects</button>
        <button className="btn btn-ghost text-xl">d</button>
      </div>
    </div>
  );
};

export default Appbar;
