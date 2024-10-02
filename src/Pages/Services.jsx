import React from "react";
import Card from "./../UI/Card";
import {
  MdOutlineDraw,
  MdCode,
  MdOutlineWeb,
  MdStorefront,
  MdAnimation,
  MdOutlineDeveloperMode,
  MdOutlineSearch,
  MdApi,
  MdSmartToy,
  MdBrush,
} from "react-icons/md";
import { color } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <MdOutlineDraw className="fill-violet-500 text-5xl" />,
      heading: "UI / UX Creative Design",
      description: "I am an expert UI / UX designer with 3 years of experience",
    },
    {
      icon: <MdCode className="fill-violet-500 text-5xl" />,
      heading: "Frontend Development",
      description:
        "Specialized in HTML, CSS, JavaScript, and modern frontend frameworks.",
    },
    {
      icon: <MdOutlineDeveloperMode className="fill-violet-500 text-5xl" />,
      heading: "Backend Development",
      description:
        "Experienced in building REST APIs and server-side applications.",
    },
    {
      icon: <MdOutlineWeb className="fill-violet-500 text-5xl" />,
      heading: "Full Stack Development",
      description:
        "Providing end-to-end development solutions using both frontend and backend technologies.",
    },
    {
      icon: <MdOutlineWeb className="fill-violet-500 text-5xl" />,
      heading: "React Development",
      description:
        "Building interactive and scalable web applications with React.js.",
    },
    {
      icon: <MdSmartToy className="fill-violet-500 text-5xl" />,
      heading: "Artificial Intelligence",
      description:
        "Implementing AI solutions to automate processes and enhance user experience.",
    },
  ];

  return (
    <div className="cc mt-6 mb-[10rem]">
      <div className="container">
        <h2 className="md:text-4xl text-3xl text-blue font-semibold cc">
          Services We Provide
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-5 md:gap-10 mt-10">
          {services.map((cur, id) => {
            return (
              <Card
                key={id}
                id={id + 1}
                icon={cur.icon}
                heading={cur.heading}
                description={cur.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
