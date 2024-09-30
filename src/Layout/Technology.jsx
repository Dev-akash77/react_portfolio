import React, { useRef } from "react";
import {
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiCss3,
  SiDocker,
  SiBootstrap,
  SiExpress,
  SiPython,
  SiC,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiFigma,
  SiAngular,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
const Technology = () => {
  const all_tech = [
    {
      name: "html",
      icon: <FaHtml5 />,
      color: "#f0582f",
    },
    {
      name: "css",
      icon: <SiCss3 />,
      color: "#004ce8",
    },
    {
      name: "Java script",
      icon: <FaJs />,
      color: "#ffdf00",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "#3fabd3",
    },
    {
      name: "Node",
      icon: <FaNodeJs />,
      color: "#42a047",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill />,
      color: "#004ce8",
    },
    {
      name: "Next js",
      icon: <RiNextjsFill />,
      color: "#000",
    },
    {
      name: "Mongo DB",
      icon: <DiMongodb />,
      color: "#4caf50",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      color: "#000",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      color: "#2496ed",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "#f89820",
    },
    {
      name: "AWS",
      icon: <FaAws />,
      color: "#ff9900",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      color: "#7952b3",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: "#000",
    },
    {
      name: "Python",
      icon: <SiPython />,
      color: "#3776ab",
    },
    {
      name: "C",
      icon: <SiC />,
      color: "#00599c",
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
      color: "#00599c",
    },
    {
      name: "Django",
      icon: <SiDjango />,
      color: "#092e20",
    },
    {
      name: "Flask",
      icon: <SiFlask />,
      color: "#000",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "#f24e1e",
    },
    {
      name: "Angular",
      icon: <SiAngular />,
      color: "#dd0031",
    },
  ];

  const perent = useRef(null);
  return (
    <div className="cc mb-[10rem] mt-16">
      <div className="container">
        <h2 className="md:text-4xl text-3xl text-blue font-semibold cc">
          Technology We Know
        </h2>
        <div
          className="technology_cart w-full bg-slate-100 md:py-16 py-5 px-5 rounded-lg mt-12 grid md:grid-cols-7 gap-5 grid-cols-3"
          ref={perent}
        >
          {all_tech.map((cur) => {
            return (
              <motion.div
                drag
                dragConstraints={perent}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.2}
                className="bg-transparent w-max rounded-full cursor-pointer"
                key={cur.name}
              >
                <p className="text-5xl" style={{ color: `${cur.color}` }}>
                  {cur.icon}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
