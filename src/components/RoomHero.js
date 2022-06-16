// Structure of RoomHero component
//
//  Hero picture on left occupying 2/3 of the screen
//  Room name and basic info on right 1/3 of the screen
//  Button linked to room page under info
//

// import { useState } from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const RoomHero = ({ room }) => {
  const [imgP, updateImageP] = useState(
    "/images/xlRm/dada_design-q0FiVvo8jww-unsplash.jpg"
  );
  const [link, updateLink] = useState("/book");
  const name = room.name;

  useEffect(() => {
    switch (name) {
      case "Small room":
        updateLink("/book/sm");
        updateImageP(
          "/images/smRm/point3d-commercial-imaging-ltd-ehTnhW_PhdM-unsplash.jpg"
        );
        break;
      case "Normal room":
        updateLink("/book/base");
        updateImageP("/images/mdRm/dada_design-YmtlGsmTcgk-unsplash.jpg");
        break;
      case "Medium room":
        updateLink("/book/md");
        updateImageP("/images/mdRm/dada_design-40AxEHNrY2c-unsplash.jpg");
        break;
      case "Large room":
        updateLink("/book/lg");
        updateImageP("/images/lgRm/dada_design-KDPmuv6yFDI-unsplash.jpg");
        break;
      case "Huge room":
        updateLink("/book/xl");
        updateImageP("/images/xlRm/dada_design-q0FiVvo8jww-unsplash.jpg");
        break;
      default:
        console.log("something went wrong...");
        break;
    }
  }, [name]);

  return (
    <div className="w-full flex flex-row self-center ">
      <img className="w-2/3" src={process.env.PUBLIC_URL + imgP} alt="room" />
      <div className="w-1/3 text-white self-center p-5 flex flex-col bg-slate-600 rounded-2xl m-5">
        <div className="text-lg  ">{name}</div>
        <div className="text-base text-slate-100">{room.description}</div>
        <Link
          to={link}
          className="bg-slate-800 rounded-xl p-4 self-center mt-10"
        >
          Book Your Stay
        </Link>
      </div>
    </div>
  );
};
