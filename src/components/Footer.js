import { Link } from "react-router-dom";
import { Map } from "./Map";
export const Footer = () => {
  return (
    <div className="flex w-full h-400 items-center content-between justify-between mx-auto overflow-hidden bg-stone-200 ">
      <div className=" flex flex-col w-1/4 mx-auto h-full mt-[170px]">
        <div className="self-center flex flex-col h-full">
          <span className="text-2xl font-serif pb-5">Quick Menu </span>
          <Link to="/">Home</Link>
          <Link to="/rooms">Accommodations</Link>
          <Link to="/spa">Spa</Link>
          <Link to="/restaurant">Restaurant</Link>
          <Link to="/">Meetings & Events</Link>
          <Link to="/book">Book</Link>
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <Map id="map" />
      </div>
      <div className="flex flex-col w-1/4 mx-auto h-full mt-[170px]">
        <div className="self-center flex flex-col items-end h-full ">
          <span className="text-2xl font-serif pb-5 ">
            Central Finland Fake Hotel
          </span>
          <span>1 Fake Street</span>
          <span>40100 Jyväskylä</span>
          <span>Keski-Suomi, Finland</span>
          <span>info@thisIsFake.doNotEmail</span>
          <span>+123(456)789101112</span>
        </div>
      </div>
    </div>
  );
};
