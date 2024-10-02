import React from 'react';
import { MdOutlineDraw } from 'react-icons/md';
import Tilt from 'react-parallax-tilt';

const Card = ({ icon, heading, id, description }) => {
  // Determine if the screen size is small (e.g., less than 768px)
  const isSmallDevice = window.innerWidth < 768;

  return (
    <>
      {isSmallDevice ? (
        <div
          className="bg-white/30 backdrop-blur-lg shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden border-2 border-white/30 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,43,226,0.6)]"
        >
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
          </div>
          {icon}
          <h1 className="font-bold text-xl">{heading}</h1>
          <p className="text-md text-zinc-500 leading-6">{description}</p>
        </div>
      ) : (
        <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.08} transitionSpeed={20}>
          <div
            className="bg-white/30 backdrop-blur-lg shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden border-2 border-white/30 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,43,226,0.6)]"
          >
            <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">02</p>
            </div>
            {icon}
            <h1 className="font-bold text-xl">{heading}</h1>
            <p className="text-md text-zinc-500 leading-6">{description}</p>
          </div>
        </Tilt>
      )}
    </>
  );
};

export default Card;
