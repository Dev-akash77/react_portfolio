import React from "react";
import { RxCross2 } from "react-icons/rx";

const About = ({ show, setShow }) => {
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
        <h1 className="h-[93.5%] cc text-2xl md:text-7xl font-semibold">
          Coming soon
        </h1>
      </div>
    </div>
  );
};

export default About;
