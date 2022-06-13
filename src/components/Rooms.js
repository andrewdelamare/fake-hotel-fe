import { useState, useEffect } from "react";
import { getRooms } from "../services/roomService";
import { RoomHero } from "./RoomHero";

// Structure of Rooms page
//
// Navbar
// Page title
// Room heros with pics and description
// |
// |
// |
// v
// End of room heros
// Calendar with room slider/selecter to see availabe dates by room or room type.
//
// Footer
//

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const trySwitch = async (rooms) => {
      switch (rooms.length) {
        case 0:
          const rs = await getRooms();
          setRooms(rs);
          console.log(rs);
          break;
        default:
          console.log("there are already rooms in the rooms array", rooms);
      }
    };
    trySwitch(rooms);
  });
  //{rooms.map(room => <RoomHero room={room} />)}
  return (
    <div className="container overflow-x-hidden">
      {rooms.length > 0 ? (
        rooms.map((room) => {
          console.log(room, "this is the room");
          return <div key={room.id}>{room.name}</div>;
        })
      ) : (
        <div>Something Went Wrong</div>
      )}
    </div>
  );
};

export default Rooms;