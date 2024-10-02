import React from 'react';
import Tilt from 'react-parallax-tilt';
const Card = ({ icon, heading, id, description }) => {
  return (
    <Tilt tiltMaxAngleX={30} tiltMaxAngleY={30} scale={1.01} transitionSpeed={0}>
      <div className="backdrop-blur-lg shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden border-2 border-white/30 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,43,226,0.6)]">
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
          <p className="absolute bottom-6 left-7 text-white text-2xl">{`${id<10 ?`0${id}`:id}`}</p>
        </div>
      {icon}
        <h1 className="font-bold text-xl">{heading}</h1>
        <p className="text-md text-zinc-500 leading-6">
          {description}
        </p>
      </div>
    </Tilt>
  );
};

export default Card;
