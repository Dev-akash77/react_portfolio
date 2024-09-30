import React from "react";
import { DiMongodb } from "react-icons/di";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div className=" mt-5 cc">
      <div className="container cc relative">
        <div className="py-16 overflow-hidden w-screen cc">
          <div className="relative rounded-full cc w-[17rem] h-[17rem] md:w-[33rem] md:h-[33rem] main_r_b border-4 border-grey">
            <div className="absolute cc alsk text-7xl -top-9 md:-top-14 z-30 bg-white">
              <DiMongodb className="text-green-700" />
            </div>
            <div className="absolute cc alsk text-7xl  -left-9 md:-left-14 z-30 bg-white">
              <FaJava className="text-red-600" />
            </div>
            <div className="absolute cc alsk text-7xl  -right-9 md:-right-14 z-30 bg-white">
              <FaNodeJs className="text-green-600" />
            </div>
            <div className="absolute cc alsk text-7xl  -bottom-9 md:-bottom-14 z-30 bg-white">
              <FaReact className="text-blue" />
            </div>
          </div>
        </div>
        <div className="absolute alsk cc">
          <img
            src="./images/name-logo.svg"
            alt="developer logo"
            className="w-16"
          />
        </div>
        <div className="absolute bglight"></div>
      </div>
    </div>
  );
};

export default Skills;
