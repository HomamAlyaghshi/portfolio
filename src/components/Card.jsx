import React from "react";
import "../style.css";

const Card = () => {
  return (
    <div className="grid ">
      {/**first card */}
      <div className=" grid gap-20 ">
        <div className="mockup-code my-10 mx-60 shadow-2xl shadow-slate-700">
          <pre className="flex gap-4">
            <span className="data-prefix gradient-text">homamalyaghshi $</span>
            <code>cat aboutHomam</code>
          </pre>
          <pre className="flex gap-4">
            <span className="data-prefix gradient-text">
              aboutHomam (main) $
            </span>
            <code className="whitespace-pre-line">
              Hello! I'm Homam. I'm a front-end intern, studying Computer
              Engineering at the University of Damascus. I enjoy teamwork that
              enhances my experience, and I believe that creativity is the key
              to the success of any work. You should hire me!
            </code>
          </pre>
        </div>
      </div>

      {/**sec card */}
      <div className=" grid gap-20">
        <div className="mockup-code my-10 mx-60 shadow-2xl shadow-slate-700">
          <pre className="flex gap-4">
            <span className="data-prefix gradient-text">homamalyaghshi $</span>
            <code>cat aboutHomam</code>
          </pre>
          <pre className="flex gap-4">
            <span className="data-prefix gradient-text">
              aboutHomam (main) $
            </span>
            <code className="whitespace-pre-line">
              Hello! I'm Homam. I'm a front-end intern, studying Computer
              Engineering at the University of Damascus. I enjoy teamwork that
              enhances my experience, and I believe that creativity is the key
              to the success of any work. You should hire me!
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Card;
