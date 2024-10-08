import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
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
  return (
    <div className="mt-[5rem] bg-black text-white cc py-8">
      <div className="container">
        <p className="text-sm cc">Akash Biswas @ 2024</p>
        <div className="cc mt-2">
          <img src="./images/name-logo-white.svg" alt="our a logo" />
        </div>
        <div className="flex items-center justify-center gap-6 mt-2">
          {social.map((cur, index) => (
            <a
              key={index}
              href={
                cur.name === "Email"
                  ? `mailto:akashrahul2006@gmail.com`
                  : cur.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-grey hover:text-white duration-150 hover:scale-105"
            >
              {cur.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
