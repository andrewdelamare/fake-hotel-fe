// Navbar
// Book Your Stay With Us
// Selector for options
// Calendar with available dates for selected options
// Continue Button which reveals form
// Form with info and submit button
// On submit either display success or failure
//
//
//
//
//
//
//
//
//
//
//

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRooms } from "../services/roomService";
import { addBooking } from "../services/bookingService";
import { Calendar } from "./Calendar";

export const Booking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelRoom] = useState(null);

  const setSelStylez = (room) => {
    return selectedRoom != null && room === selectedRoom.name
      ? "ring-2 ring-slate-900 border-2"
      : "";
  };

  const chooseRoom = (room) => {
    setSelRoom(room);
  };

  const { size } = useParams();

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

  useEffect(() => {
    trySwitch(rooms);
  }, [rooms]);

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
        console.log("no room size specified");
    }
  };
  if (rooms.length !== 0 && selectedRoom === null) {
    szSwitch();
  }
  return (
    <div className="flex flex-col w-full mx-auto mt-10 text-center items-center mb-64">
      <div className="text-xl pb-10">Select the dates for your stay</div>
      <Calendar />
      <div className="inline-flex place-items-center justify-center">
        <div className="flex justify-center w-1/3 m-5">
          <form className=" w-64 rounded-3xl flex flex-col text-left bg-slate-200 p-2 border-2 border-slate-900">
            <label className="block">
              <span className="block font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                First Name
              </span>
              <input className="border-2"></input>
            </label>
            <label className="block">
              <span className="block font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                Surname
              </span>
              <input className="border-2"></input>
            </label>
            <label>
              <span className="block font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                Email address
              </span>
              <input className="border-2"></input>
            </label>
            <label>
              <span className="block after:content-['*'] after:ml-0.5 after:text-red-500">
                Group size
              </span>
              <select name="people" className="bg-white p-1 mb-3">
                <option>Please select</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </label>
            <button
              type="button"
              className="border-2 bg-indigo-400 rounded-xl w-1/2 self-center"
              onClick={(event) => event.preventDefault()}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col text-center m-5 w-1/3">
          <div className="text-xl">Select a room</div>
          <div className="flex flex-wrap place-content-center">
            {rooms.map((room) => (
              <button
                type="button"
                className={`h-24 w-24 m-2 rounded-3xl self-center bg-indigo-400 z-10 ${setSelStylez(
                  room.name
                )}`}
                onClick={() => chooseRoom(room)}
                key={room.id}
              >
                <div>{room.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
