import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../style.css";

const Card = () => {
  return (
    <div className="grid w-full h-full ">
      {/**first card */}
      <div className=" grid gap-20  ">
        <div className="mockup-code my-10 sm:mx-60 mx-10 shadow-2xl shadow-slate-700 p-5">
          <pre className="sm:flex grid gap-4  ">
            <span className="data-prefix gradient-text">homam alyaghshi $</span>
            <code>
              <TypeAnimation sequence={["cat aboutHomam"]} speed={50} />
            </code>
          </pre>
          <pre className="sm:flex grid gap-4   ">
            <span className="gradient-text">aboutHomam (main) $</span>

            <code className="  justify-center items-center">
              <TypeAnimation
                sequence={[
                  "Hello! I'm Homam. I'm a front-end intern, studying Computer Engineering at the University of Damascus. I enjoy teamwork that enhances my experience, and I believe that creativity is the key to the success of any work. You should hire me!",
                ]}
                speed={50}
                wrapper="div"
                repeat={0}
                cursor={true}
                style={{
                  whiteSpace: "pre-wrap", // يسمح بتقسيم النص تلقائيًا عند نهاية السطر
                  wordBreak: "break-word", // يكسر الكلمات الطويلة إذا لزم الأمر
                }}
              />
            </code>
          </pre>
        </div>
      </div>

      {/**sec card */}
      <div className=" grid gap-20">
        <div className="mockup-code my-10 sm:mx-60 mx-10 shadow-2xl shadow-slate-700 p-5">
          <pre className="sm:flex grid gap-4 ">
            <span className="data-prefix gradient-text">homam alyaghshi $</span>
            <TypeAnimation sequence={["cd skills/tools"]} speed={50} />
            </pre>
          <pre className="sm:flex grid gap-4  ">
            <span className="data-prefix gradient-text">
              aboutHomam (main) $
            </span>
            <code className="whitespace-pre-line">
              <TypeAnimation
                sequence={["skills/tools (main) $ ls"]}
                speed={50}
              />
            </code>
          </pre>
          <pre className="sm:flex grid gap-4  ">
            <span className="data-prefix gradient-text">Proficient With </span>
            <code className="grid grid-cols-2 gap-6">
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["CSS3"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["HTML5"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Java Script"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["React.js"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["MaterialUI"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["DaisyUI"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Bootstrap"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Tailwind"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Git"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Github"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["C++"]} speed={500} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["Python"]} speed={500} />
              </span>
            </code>
          </pre>
        </div>
      </div>
      {/**3 card */}
      <div className=" grid gap-20 ">
        <div className="mockup-code my-10 sm:mx-60 mx-10 shadow-2xl shadow-slate-700 p-5">
          <pre className="sm:flex grid gap-4  ">
            <span className="data-prefix gradient-text">
              aboutHomam (main) ${" "}
            </span>
            <code>
              <TypeAnimation sequence={["cd hobbies/interests"]} speed={50} />
            </code>
          </pre>
          <pre className="sm:flex grid gap-4  ">
            <span className="data-prefix gradient-text">
              hobbies/interests (main) $
            </span>
            <code className="whitespace-pre-line grid grid-cols-2 ">
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["🎥 movies"]} speed={50} />
              </span>
              <span className="transform transition-transform duration-500 whitespace-nowrap hover:translate-y-[-5px]">
                <TypeAnimation sequence={["📻 classic music"]} speed={50} />
              </span>
              <span className="transform transition-transform duration-500 hover:translate-y-[-5px]">
                <TypeAnimation sequence={["📖 reading"]} speed={50} />
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Card;
