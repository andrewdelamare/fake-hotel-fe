// Structure of RoomHero component
//
//  Hero picture on left occupying 2/3 of the screen
//  Room name and basic info on right 1/3 of the screen
//  Button linked to room page under info
//

// import { useState } from "react";

import { Link } from "react-router-dom";
export const RoomHero = ({ title, desc, img, link }) => {
  return (
    <div className="w-full flex flex-row self-center overflow-hidden my-5 bg-stone-200">
      <img className="w-2/3" src={process.env.PUBLIC_URL + img} alt="room" />
      <div className="w-1/3 text-white self-center p-5 flex flex-col bg-stone-500  m-5">
        <div className="text-3xl font-serif  ">{title}</div>
        <div className="text-base text-slate-100 font-sans">{desc}</div>
        <Link to={link} className="bg-stone-800 p-2 self-center mt-10 ">
          Book Your Stay
        </Link>
      </div>
    </div>
  );
};
