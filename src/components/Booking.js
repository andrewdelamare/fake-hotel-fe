// Navbar
// Book Your Stay With Us
// Selector for options
// Calendar with available dates for selected options
//
//

import { useState, useEffect } from "react";
import { getRooms } from "../services/roomService";
import { Calendar } from "./Calendar";

export const Booking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelRoom] = useState(null);

  const chooseRoom = (room) => {
    setSelRoom(room);
    console.log(selectedRoom);
  };

  useEffect(() => {
    const trySwitch = async (rooms) => {
      switch (rooms.length) {
        case 0:
          const rs = await getRooms();
          setRooms(rs);
          break;
        default:
          console.log("useEffect firing at booking.js");
      }
    };
    trySwitch(rooms);
  }, [rooms]);

  return (
    <div className="inline-flex">
      <div className="flex flex-col w-7/12 text-center items-center">
        <div className="text-xl pb-10">Select the dates for your stay</div>
        <Calendar />
      </div>
      <div className="flex flex-col w-5/12 text-center">
        <div className="text-xl">Select a room</div>
        <div className="flex flex-col h-full">
          {rooms.map((room) => (
            <button
              className="p-10 border-2 border-slate-800 z-10"
              onClick={() => chooseRoom(room)}
              key={room.id}
            >
              <div>{room.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
