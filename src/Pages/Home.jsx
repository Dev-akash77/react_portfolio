import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import About from "./About";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false)
  const social = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/akash-biswas-486435289/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/developer_akash77/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=100044966861269",
    },
    {
      name: "Email",
      icon: <MdOutlineMailOutline />,
      link: "akashrahul2006@gmail.com",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Dev-akash77",
    },
  ];

  const [typeEffect] = useTypewriter({
    words: [
      "Fullstack Developer",
      "JavaScript Developer",
      "Android Developer",
      "Software Developer",
    ],
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

  const scrollAnim = useRef(null);

  // Animation variants for each line
  const lineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.5,
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    }),
  };

  return (
    <div
      className="cc h-screen w-screen relative bg-sub_black"
      ref={scrollAnim}
    >
      <div
        className="cursur absolute bg-white rounded-full w-10 h-10 hidden md:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        src="/images/name-logo.svg"
        alt="logo images"
        className="absolute w-[80vw] md:w-[40vw]"
      />
      <div className="container flex justify-between items-center z-30">
        <div className="right_hero">
          {/* Motion heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            custom={0} // Line 1
            viewport={{ root: scrollAnim }}
            className="text-4xl font-semibold md:text-7xl text-white"
          >
            Akash Biswas
          </motion.h1>

          {/* Motion paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            custom={1} // Line 2
            viewport={{ root: scrollAnim }}
            className="my-10 h-10 text-2xl w-max pr-1 text-golden font-semibold md:text-3xl md:font-normal"
          >
            {typeEffect}
            <Cursor cursorStyle="|" />
          </motion.p>

          {/* Button animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            custom={2} // Line 3
            viewport={{ root: scrollAnim }}
            onClick={()=>{setShowAbout(!showAbout)}}
          >
            <Button text={`About Me`} />
          </motion.div>
        </div>

        {/* Social icons animation */}
        <motion.div
          className="social_icon flex flex-col gap-7 left_hero"
          initial="hidden"
          animate="visible"
          viewport={{ root: scrollAnim }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {social.map((cur, index) => (
            <motion.a
              key={index}
              href={
                cur.name === "Email"
                  ? `mailto:akashrahul2006@gmail.com`
                  : cur.link
              }
              target="_blank"
              rel="noopener noreferrer"
              variants={lineVariants}
              custom={index} // Staggered animation for icons
              className="text-4xl text-grey hover:text-white duration-150 hover:scale-105"
            >
              {cur.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="lets_work_btn absolute bottom-10 flex flex-col items-center justify-center group">
        <Button text={`Latest Works`} />
        <FaArrowDownLong className="text-white text-3xl transform transition-transform duration-300 group-hover:scale-125 mt-3 w-max" />
      </div>
      <About show={showAbout} setShow={setShowAbout}/>
    </div>
  );
};

export default Home;
