import React from "react";
import "../style.css";

const Card = () => {
  return (
    <div className="grid ">
      {/**first card */}
      <div className=" grid gap-20 ">
        <div className="mockup-code my-10 mx-60 shadow-2xl shadow-slate-700">
          <pre className="flex gap-4 typing-animation ">
            <span className="data-prefix gradient-text">homamalyaghshi $</span>
            <code>cat aboutHomam</code>
          </pre>
          <pre className="flex gap-4 typing-animation  ">
            <span className="data-prefix gradient-text">
              aboutHomam (main) $
            </span>
            <code className=" ">
              Hello! I'm Homam. I'm a front-end intern, studying Computer<br/>
              Engineering at the University of Damascus. I enjoy teamwork that<br/>
              enhances my experience, and I believe that creativity is the key<br/>
              to the success of any work. You should hire me!
            </code>
          </pre>
        </div>
      </div>

      {/**sec card */}
      <div className=" grid gap-20">
        <div className="mockup-code my-10 mx-60 shadow-2xl shadow-slate-700">
          <pre className="flex gap-4 typing-animation">
            <span className="data-prefix gradient-text">homamalyaghshi $</span>
            <code>cd skills/tools</code>
          </pre>
          <pre className="flex gap-4 typing-animation ">
            <span className="data-prefix gradient-text">
              aboutHomam (main) $
            </span>
            <code className="whitespace-pre-line">
            skills/tools (main) $ ls
            </code  >
     
          </pre>
          <pre className="flex gap-4 typing-animation ">
            <span className="data-prefix gradient-text">Proficient With</span>
            <code className="grid grid-cols-2 gap-6">
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">CSS3</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">HTML5</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">Java Script</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">React.js</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">MaterialUI</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">DaisyUI</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">Bootstrap</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">Tailwind</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">git</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">github</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">c++</span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">python</span>
 
            </code>
          </pre>
        </div>
      </div>
      {/**3 card */}
      <div className=" grid gap-20 ">
        <div className="mockup-code my-10 mx-60 shadow-2xl shadow-slate-700">
          <pre className="flex gap-4 typing-animation ">
            <span className="data-prefix gradient-text">homamalyaghshi $</span>
            <code>cd hobbies/interests</code>
          </pre>
          <pre className="flex gap-4 typing-animation ">
            <span className="data-prefix gradient-text">
            hobbies/interests (main) $
            </span>
            <code className="whitespace-pre-line grid grid-cols-2 gap-6">
            <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">🎥 movies</span>
            <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">📻 classic music</span>
            <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">📖 reading</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Card;
