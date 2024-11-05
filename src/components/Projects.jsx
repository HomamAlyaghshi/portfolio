import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-full ">
      <div className="sm:px-16 sm:py-10  my-10 sm:mx-24 mx-4 grid sm:grid-cols-2  justify-center items-center gap-10 font-mono">
        <div className="grid  justify-center items-center gap-4">
          <div className="transition-all transform hover:scale-105 duration-700">
            <h1 className="text-center text-2xl">First Project</h1>
            <img alt="project1" src="/images/project1.png" />
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <a
              href="https://p1-mauve.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-1/4"
            >
              Live
            </a>{" "}
            <button className="btn btn-secondary w-1/4">&lt;Source/&gt;</button>
          </div>
        </div>
        <div className="grid justify-center items-center gap-4">
          <div className="transition-all transform hover:scale-105 duration-700">
            <h1 className="text-center text-2xl">Furnishify</h1>
            <img alt="project2" src="/images/project2.png" />
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <a
              href="https://project3-murex-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-1/4"
            >
              Live
            </a>{" "}
            <button className="btn btn-secondary w-1/4">&lt;Source/&gt;</button>
          </div>
        </div>
        <div className="grid justify-center items-center gap-4">
          <div className="transition-all transform hover:scale-105 duration-700">
            <h1 className="text-center text-2xl">Foodisphere</h1>
            <img alt="project3" src="/images/project3.png" />
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <a
              href="https://foodisphere.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-1/4"
            >
              Live
            </a>{" "}
            <button className="btn btn-secondary w-1/4">&lt;Source/&gt;</button>
          </div>
        </div>
        <div className="grid justify-center items-center gap-4">
          <div className="transition-all transform hover:scale-105 duration-700">
            <h1 className="text-center text-2xl">Portfolio</h1>
            <img alt="project4" src="/images/project4.png" />
          </div>
          <div className="flex gap-4 w-full justify-center items-center">
            <a
              href="https://portfolio-dusky-sigma-50.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-1/4"
            >
              Live
            </a>{" "}
            <button className="btn btn-secondary w-1/4">&lt;Source/&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
