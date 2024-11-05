import React from "react";
import "../style.css";
import { TypeAnimation } from "react-type-animation";

const HeroSections = () => {
  return (
    <div className="flex justify-center items-center sm:h-[400px] h-full w-full">
      <div className="sm:flex grid gap-10 items-center text-center ">
        <div className="flex justify-center">
          <img
            alt="my pic"
            src="/images/withoutback.png"
            className="w-80 h-80 sm:w-60 sm:h-60 bg-mycolor rounded-full shadow-2xl shadow-gray-500"
          />
        </div>
        <div className="grid gap-y-4 py-8 font-mono font-bold ">

          <div className="flex justify-center items-center ">
            <div className="sm:text-5xl text-3xl whitespace-nowrap flex items-center justify-center gap-4 ">
              <div>Hi
              <span className="waving-hand">👋</span>
              ,I'm</div>
              <span className="gradient-text sm:text-5xl text-3xl text-left sm:w-[230px] w-[150px] justify-center items-center">
                <TypeAnimation
                  sequence={[
                    "Homam",
                    1000,
                    "Frontend",
                  1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              </div>
          </div>
          <div className="text-2xl sm:text-left text-center">
            I'm a Frontend Developer.
          </div>
          <div className="grid sm:justify-start justify-center">
            <div className="flex gap-4 items-center transform transition-transform duration-500 hover:translate-y-[-5px]">
              <div className="text-2xl">🌍</div>
              <span>Based in Syria</span>
            </div>
            <div className="flex gap-4 items-center transform transition-transform duration-500 hover:translate-y-[-5px]">
              <div className="text-2xl">📧</div>
              <span>homamalyaghshi@gmail.com</span>
            </div>
            <div className="flex gap-4 items-center transform transition-transform duration-500 hover:translate-y-[-5px]">
              <div className="text-2xl">🖥️</div>
              <span>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
