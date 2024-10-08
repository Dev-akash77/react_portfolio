import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = ({ show, setShow }) => {
  const mern = [
    {
      name: "mongodb",
      icon: <SiMongodb />,
      color: "#47a248",
    },
    {
      name: "express.js",
      icon: <SiExpress />,
      color: "#ffffff",
    },
    {
      name: "react.js",
      icon: <FaReact />,
      color: "#61dafb",
    },
    {
      name: "node.js",
      icon: <FaNodeJs />,
      color: "#8cc84b",
    },
  ];
  return (
    <div
      className={`text-white transform origin-top-right ${
        show ? `scale-100` : `scale-0`
      } transition-transform duration-500 ease-in-out overflow-hidden absolute z-50 bg-[rgba(0,0,0,.8)] w-full h-full cc`}
    >
      <div className="about_cont w-[95%] md:w-[80%] h-[90%] bg-sub_black rounded-lg">
        <div className="mt-2 w-[98%] flex justify-end">
          <div
            className="cursor-pointer p-2 rounded-full bg-slate-700 group"
            onClick={() => setShow(false)}
          >
            <RxCross2 className="group-hover:rotate-180 transform duration-500" />
          </div>
        </div>
        <div>
          <div className="cc">
            <div className="md:w-[95%] flex items-center justify-center">
              <div className="flex flex-col gap-2 md:gap-5 items-center md:items-start">
                <h2 className="text-blue text-4xl md:text-3xl font-semibold uppercase mb-2 md:mb-0">
                  About Me
                </h2>
                <p className="text-md md:text-md px-3 md:w-[80%] md:px-0 mb-4 md:mb-0">
                  I help business owners and busy web developers to design &
                  develop creative websites that fits their vision and attracts
                  the visitors to stay for ever. Technologies and tools that I
                  use to create such awesome websites.
                </p>
                <div className="flex flex-wrap gap-2 md:w-[80%] px-2 md:px-0">
                  {[
                    "react",
                    "html",
                    "css",
                    "tailwind",
                    "javascript",
                    "mongoDB",
                    "expressjs",
                    "nodejs",
                    "git",
                    "github",
                    "bootstrap",
                    "api",
                    "ejs",
                    "redux",
                    "aws",
                    "adobexd",
                    "figma",
                    "jsx",
                    "mongoose",
                    "sass",
                  ].map((cur, id) => {
                    return (
                      <button
                        key={id}
                        className="px-3 py-1 border-2 rounded-3xl cc text-sm w-max border-gray-700 capitalize"
                      >
                        {`#${cur}`}
                      </button>
                    );
                  })}
                </div>
                <h2 className="text-blue text-3xl font-semibold uppercase md:mt-10 mt-5">
                  MERN STACK
                </h2>
                <div className="flex gap-7 mt-4">
                  {mern.map((cur, id) => {
                    return (
                      <div key={id} className="flex flex-col gap-3 items-center justify-center cursor-pointer">
                        <div style={{ color: cur.color }} className="text-5xl">{cur.icon}</div>
                        <p className="uppercase text-2xl font-bold" style={{ color: cur.color }}>{cur.name[0]}</p>

                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cc">
                <img
                  src="https://anuragsinghbam.netlify.app/images/coder.svg"
                  alt="anout sectopn image"
                  className="w-[112rem] hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
