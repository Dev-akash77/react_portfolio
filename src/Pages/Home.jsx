import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const social = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/your-profile", // add your link
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/your-profile", // add your link
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/your-profile", // add your link
    },
    {
      name: "Email",
      icon: <MdOutlineMailOutline />,
      link: "mailto:your-email@example.com", // add your email link
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Dev-akash77", // add your GitHub link
    },
  ];

  const [typeEffect] = useTypewriter({
    words: ['Fullstack Developer', 'JavaScript Developer', 'Android Developer', 'Software Developer'],
    loop: {},
    typeSpeed: 30,
    deleteSpeed: 10,
  });

  // State to hold cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Effect to update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cc h-screen w-screen relative bg-sub_black">
      <div 
        className="cursur absolute bg-white rounded-full w-10 h-10 hidden md:block "
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)', 
        }}
      />
      <img src="/images/name-logo.svg" alt="logo images" className="absolute w-[80vw] md:w-[40vw]" />
      <div className="container flex justify-between items-center z-30">
        <div className="right_hero">
          <h1 className="text-4xl font-semibold md:text-7xl text-white">Akash Biswas</h1>
          <p className="my-10 h-10 text-2xl w-max pr-1 text-golden font-semibold md:text-3xl md:font-normal">
            {typeEffect}
            <Cursor cursorStyle="|" />
          </p>
          <Button text={`About Me`} />
        </div>

        <div className="social_icon flex flex-col gap-7 left_hero">
          {social.map((cur, index) => (
            <a 
              href={cur.link} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-4xl text-grey hover:text-white duration-150 hover:scale-105"
            >
              {cur.icon}
            </a>
          ))}
        </div>
      </div>
        <div className="lets_work_btn absolute bottom-10">
          <Button text={`Latest Works`}/>
        </div>
    </div>
  );
};

export default Home;
