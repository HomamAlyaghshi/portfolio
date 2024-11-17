import React, { useState } from "react";
import { FaReact } from "react-icons/fa"; 




const Projects = () => {
  const [projects] = useState([
    {
      name: "First Project",
      image: "/images/project1.png",
      liveUrl: "https://p1-mauve.vercel.app/",
      sourceUrl: "https://gitlab.com/homamalyaghshi/e-commerce", 
      logo: <FaReact className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "Furnishify",
      image: "/images/project2.png",
      liveUrl: "https://project3-murex-mu.vercel.app/",
      sourceUrl: "https://gitlab.com/homamalyaghshi/project3", 
      logo: <FaReact className="w-8 h-8 text-blue-500" />,

    },
    {
      name: "Foodisphere",
      image: "/images/project3.png",
      liveUrl: "https://foodisphere.vercel.app/",
      sourceUrl: "https://gitlab.com/homamalyaghshi/Foodisphere", 
      logo: <FaReact className="w-8 h-8 text-blue-500" />,

    },
    {
      name: "Portfolio",
      image: "/images/project4.png",
      liveUrl: "https://portfolio-dusky-sigma-50.vercel.app/",
      sourceUrl: "#", 
      logo: <FaReact className="w-8 h-8 text-blue-500" />,
    },
    {
      name:"Recipes",
      image:'/images/project5.png',
      liveUrl:"https://first-nuxt-project-ivory.vercel.app/",
      sourceUrl: "https://gitlab.com/homamalyaghshi/first-nu-project",
      logo: <img alt="#" src="/images/nuxt.png" className="w-10 h-8 rounded-full " />

    }
    
  ]);

  return (
    <div className="w-full h-full">
      <div className="sm:px-16 sm:py-10 my-10 sm:mx-24 mx-4 grid sm:grid-cols-2 justify-center items-center gap-10 font-mono">
        {projects.map((project, index) => (
          <div key={index} className="grid justify-center items-center gap-4">
            <div className="transition-all transform hover:scale-105 duration-700">
              <h1 className="text-center text-2xl">{project.name}</h1>
              <img alt={project.name} src={project.image} />
            </div>
            <div className="flex gap-4 w-full justify-center items-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-1/4"
              >
                Live
              </a>
              <button
                onClick={() => window.open(project.sourceUrl, "_blank")}
                className="btn btn-secondary w-1/4"
              >
                &lt;Source/&gt;
              </button>
              <div className="transition-all duration-500 hover:scale-105">{project.logo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
