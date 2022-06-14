// Structure of RoomHero component
//
//  Hero picture on left occupying 2/3 of the screen
//  Room name and basic info on right 1/3 of the screen
//  Button linked to room page under info
//

// import { useState } from "react";

import { useState, useEffect } from "react";
export const RoomHero = ({ room }) => {
  const [imgP, updateImageP] = useState(
    "/images/xlRm/dada_design-q0FiVvo8jww-unsplash.jpg"
  );
  const name = room.name;

  useEffect(() => {
    switch (name) {
      case "Small room":
        console.log("Small Room");
        updateImageP(
          "/images/smRm/point3d-commercial-imaging-ltd-ehTnhW_PhdM-unsplash.jpg"
        );
        break;
      case "Normal room":
        updateImageP("/images/mdRm/dada_design-YmtlGsmTcgk-unsplash.jpg");
        break;
      case "Medium room":
        updateImageP("/images/mdRm/dada_design-40AxEHNrY2c-unsplash.jpg");
        break;
      case "Large room":
        updateImageP("/images/lgRm/dada_design-KDPmuv6yFDI-unsplash.jpg");
        break;
      case "Huge room":
        updateImageP("/images/xlRm/dada_design-q0FiVvo8jww-unsplash.jpg");
        break;
      default:
        console.log("something went wrong...");
        break;
    }
  }, [name]);

  return (
    <div className="w-full flex flex-row bg-slate-800 self-center ">
      <img className="w-2/3" src={process.env.PUBLIC_URL + imgP} alt="room" />
      <div className="w-1/3 text-white self-center p-5 flex flex-col bg-slate-600 rounded-2xl m-5">
        <div className="text-lg  ">{name}</div>
        <div className="text-base text-slate-100">{room.description}</div>
        <button className="bg-slate-800 rounded-xl p-4 self-center mt-10">
          Learn More
        </button>
      </div>
    </div>
  );
};
