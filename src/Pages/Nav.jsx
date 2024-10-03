import React from "react";
import { PiTelegramLogoDuotone } from "react-icons/pi";
const Nav = () => {
  return (
    <div className="flex items-center justify-center absolute top-0 z-50 h-[5rem] w-screen">
      <div className="container flex items-center justify-between py-2">
        <div className="lgogo w-[5rem] cursor-pointer relative cc">
          <img
            src="./images/name-logo-white.svg"
            alt="logo images"
            className="overflow-hidden z-30"
          />
          <div className="absolute cursur logo_cursor"></div>
        </div>
        <a
          href="https://wa.me/918101602709?text=Hi,I want to build website!"
          className="text-3xl cursor-pointer text-white"
        >
          <PiTelegramLogoDuotone />
        </a>
      </div>
    </div>
  );
};

export default Nav;
