// Navbar
// Book Your Stay With Us
// Selector for options
// Calendar with available dates for selected options
//
//

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRooms } from "../services/roomService";
import { Calendar } from "./Calendar";

export const Booking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelRoom] = useState(null);

  const chooseRoom = (room) => {
    setSelRoom(room);
  };

  const { size } = useParams();

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
  });

  const szSwitch = async () => {
    let rm;
    switch (size) {
      case "sm":
        rm = rooms.filter((room) => room.name === "Small room");
        chooseRoom(rm[0]);
        break;
      case "base":
        rm = rooms.filter((room) => room.name === "Normal room");
        chooseRoom(rm[0]);
        break;
      case "md":
        rm = rooms.filter((room) => room.name === "Medium room");
        chooseRoom(rm[0]);
        break;
      case "lg":
        rm = rooms.filter((room) => room.name === "Large room");
        chooseRoom(rm[0]);
        break;
      case "xl":
        rm = rooms.filter((room) => room.name === "Huge room");
        chooseRoom(rm[0]);
        break;
      default:
        console.log("something broke in szSwitch at Booking.js useEffect");
    }
  };
  if (rooms.length !== 0 && selectedRoom === null) {
    szSwitch();
  }
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
              className="p-10 border-2 border-slate-800 bg-indigo-400 z-10"
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
