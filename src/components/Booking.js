import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRooms } from "../services/roomService";
import { addBooking } from "../services/bookingService";
import { Calendar } from "./Calendar";

const RoomButton = ({ name, chooseRoom, setSelStylez }) => {
  return (
    <button
      type="button"
      className={`h-24 w-24 m-2  self-center bg-stone-400 z-10 border-2 ${setSelStylez(
        name
      )}`}
      onClick={() => chooseRoom(name)}
      key={0}
    >
      <div>{name}</div>
    </button>
  );
};

export const Booking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelRoom] = useState(null);

  const setSelStylez = (room) => {
    return selectedRoom != null && room === selectedRoom.name
      ? "ring-2 ring-slate-900 border-2"
      : "";
  };

  const chooseRoom = (name) => {
    const rm = rooms.filter((room) => room.name === name);
    setSelRoom(rm[0]);
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
    switch (size) {
      case "sm":
        chooseRoom("Small Room");
        break;
      case "base":
        chooseRoom("Standard Room");
        break;
      case "md":
        chooseRoom("Medium Room");
        break;
      case "lg":
        chooseRoom("Large Room");
        break;
      default:
        console.log("no room size specified");
    }
  };
  if (rooms.length !== 0 && selectedRoom === null) {
    szSwitch();
  }
  return (
    <div className="flex flex-col w-full mx-auto mt-[192px] text-center items-center mb-64">
      <div className="text-xl pb-10">Select the dates for your stay</div>
      <Calendar />
      <div className="inline-flex place-items-center justify-center">
        <div className="flex justify-center w-1/3 m-5">
          <form className=" w-64 flex flex-col text-left bg-stone-200 p-2 border-2 border-slate-900">
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
              className="border-2 bg-stone-400 rounded-xl w-1/2 self-center"
              onClick={(event) => event.preventDefault()}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col text-center m-5 w-1/3 border-2 border-slate-900 bg-stone-200 ">
          <div className="text-xl">Select a room</div>
          <div className="flex flex-wrap place-content-center">
            <RoomButton
              name="Small Room"
              chooseRoom={chooseRoom}
              setSelStylez={setSelStylez}
            />
            <RoomButton
              name="Standard Room"
              chooseRoom={chooseRoom}
              setSelStylez={setSelStylez}
            />
            <RoomButton
              name="Medium Room"
              chooseRoom={chooseRoom}
              setSelStylez={setSelStylez}
            />
            <RoomButton
              name="Large Room"
              chooseRoom={chooseRoom}
              setSelStylez={setSelStylez}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
