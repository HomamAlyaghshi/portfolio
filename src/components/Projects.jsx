import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-full">
      <div className="px-16 py-10  my-10 mx-24 grid grid-cols-2 justify-center items-center gap-10">
        <div className="grid  justify-center items-center gap-4">
          <img alt="project1" src="/images/project1.png" />
          <button className="btn btn-primary">Live</button>
          <button className="btn btn-accent">&lt;Source/&gt;</button>

        </div>
        <div className="grid justify-center items-center gap-4">
          <img alt="project2" src="/images/project2.png" />
          <button className="btn btn-primary">Live</button>
          <button className="btn btn-accent">&lt;Source/&gt;</button>

        </div>
        <div className="grid justify-center items-center gap-4">
          <img alt="project3" src="/images/project3.png" />
          <button className="btn btn-primary">Live</button>
          <button className="btn btn-accent">&lt;Source/&gt;</button>

        </div>
        <div className="grid justify-center items-center gap-4">
          <img alt="project4" src="/images/project4.png" />
          <button className="btn btn-primary">Live</button>
          <button className="btn btn-accent">&lt;Source/&gt;</button>

        </div>
      </div>
    </div>
  );
};

export default Projects;
