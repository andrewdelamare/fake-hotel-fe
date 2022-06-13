// Structure of RoomHero component
//
//  Hero picture on left occupying 2/3 of the screen
//  Room name and basic info on right 1/3 of the screen
//  Button linked to room page under info
//

// import { useState } from "react";

export const RoomHero = ({ room }) => {
  return (
    <div>
      <img src={room.imageHero} />
      <div>{room}</div>
    </div>
  );
};
