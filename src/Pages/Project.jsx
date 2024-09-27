import React from "react";
import projects from "../api/project.json";
import { FaExternalLinkAlt } from "react-icons/fa";
const Project = () => {
  return (
    <div className="mb-[8rem] cc">
      <div className="border-2 border-t-0 border-blue text-4xl p-3 text-blue font-semibold rounded-md">
        Latest Works
      </div>
      <div className="container relative flex items-center justify-center">
        <div className="all_projects_main flex flex-col md:gap-[2rem] gap-5">
          {projects.map((cur, index) => {
            return (
              <div
                className="project_des gap-y-4 md:gap-0 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 mt-[2rem]"
                key={cur.id}
              >
                <div
                  className={`rtl relative flex items-center justify-start ${
                    index % 2 != 0 && "second_col md:justify-end"
                  }`}
                >
                  <a
                    href={cur.link}
                    target="_blank"
                    className="z-40 relative flex items-center justify-center rtl_img w-full md:w-max flex-col md:flex-row"
                    style={{
                      "--dynamic-color": `#${cur.color}`, // Set the variable on the container
                    }}
                  >
                    <img
                      src={cur.image}
                      alt="country app"
                      className="w-[26rem] hover:scale-110 duration-150 z-30"
                    />
                    <a
                      className="md:absolute project_popup text-white px-5 py-2 rounded-md flex gap-2 items-center justify-center md:my-0 my-5"
                      href={cur.link}
                      style={{ backgroundColor: `#${cur.color}` }}
                    >
                      {cur.name} <FaExternalLinkAlt />
                    </a>
                  </a>

                  {/* Inline style for dynamic background color */}
                  <div
                    className={`absolute h-[.1rem] w-[80%] right-0 hidden md:block ${
                      index % 2 != 0 && "left-0"
                    }`}
                    style={{
                      backgroundColor: `#${cur.color}`,
                    }}
                  ></div>

                  {/* Inline style for dynamic border color */}
                  <a
                    className={`absolute border-2 bg-white z-50 h-[1rem] w-[1rem] rounded-full cursor-pointer -right-[.5rem] hover:scale-125 duration-150 hidden md:block ${
                      index % 2 != 0 && "-left-[.5rem]"
                    }`}
                    style={{ borderColor: `#${cur.color}` }}
                    href={cur.link}
                    target="_blank"
                  ></a>
                </div>

                <div
                  className={`ltr flex flex-col md:gap-2 gap-0 md:ml-7 ${
                    index % 2 != 0 && "first_col"
                  }`}
                >
                  {/* Inline style for dynamic text color */}
                  <h2
                    className="md:text-[2rem] text-[1.8rem] font-semibold"
                    style={{ color: `#${cur.color}` }}
                  >
                    {cur.name}
                  </h2>

                  <p
                    className="md:text-[1.5rem] text-[1.2rem]"
                    style={{ color: `#${cur.color}` }}
                  >
                    ({cur.title})
                  </p>
                  <p className="md:text-[1.2rem] text-[1rem] w-[98%]">
                    {cur.description}
                  </p>

                  <div className="flex items-center flex-wrap gap-3 mt-1 w-[98%]">
                    {cur.technology.map((cur, id) => (
                      <div
                        key={id}
                        className="border border-gray-400 py-1 px-3 rounded-2xl md:text-[1rem] text-[.8rem] cursor-pointer"
                      >{`#${cur}`}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="line_project bg-blue w-[.1rem] h-full absolute top-0 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Project;
