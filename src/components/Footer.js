import { Link } from "react-router-dom";
import { Map } from "./Map";
export const Footer = () => {
  return (
    <div className="flex w-full items-center content-between justify-between mx-auto">
      <div className="flex flex-col w-1/4 mx-auto self-center ">
        <span className="">Quick Menu </span>
        <Link to="/">Home</Link>
        <Link to="/rooms">Accommodations</Link>
        <Link to="/">Spa</Link>
        <Link to="/">Restaurant</Link>
        <Link to="/">Meetings & Events</Link>
        <Link to="/book">Book</Link>
      </div>
      <Map id="map" />
      <div className="flex flex-col w-1/4 mx-auto items-center">
        <span>Central Finland Fake Hotel</span>
        <span>1 Fake Street</span>
        <span>40100 Jyväskylä, Keski-Suomi</span>
        <span>info@thisIsFake.doNotemail</span>
        <span>+123(456)789101112</span>
      </div>
    </div>
  );
};
