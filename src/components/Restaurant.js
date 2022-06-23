import img from "../lycs-architecture-5JGENcbOl14-unsplash.jpg";
import { Link } from "react-router-dom";
const Hero = () => (
  <div className="relative">
    <div className="">
      <img
        src={img}
        alt="hotel"
        className="h-600 w-full object-cover saturate-75 contrast-75 "
      />
    </div>

    <div className="absolute top-1/2 left-1/3 right-1/4 text-white font-serif">
      <div className="text-6xl">Gourmet Restaurant</div>
    </div>
  </div>
);

const Card = ({ title, desc, className, img, linkLoc }) => (
  <div className={className + " relative place-content-center flex flex-col"}>
    <Link
      to={linkLoc}
      className={
        "w-auto h-full mr-4 mb-4 place-content-center bg-cover bg-[center_left_0rem] flex flex-col z-0 contrast-50 " +
        img
      }
    />
    <div className=" opacity-100 z-10 blur-none absolute self-center text-white">
      <div className="text-3xl font-serif">{title}</div>
      <div>{desc}</div>
    </div>
  </div>
);

export const Restaurant = () => {
  return (
    <div className="flex flex-col mt-[96px]">
      <Hero />
      <p className="m-16 w-1/2 self-center text-2xl text-justify first-letter:text-6xl first-letter:text-slate-900 first-letter:mr-2 first-letter:float-left">
        One of the finest dining experiences available in Finland, we aim to
        provide an unforgettable culinary experience to each of our guests. Our
        unparalleled service and seasonally inspired menu has been recognized
        nationally and globally for its excellence.
      </p>
      <div className="m-10 p-10 w-2/3 self-center text-3xl font-serif text-center bg-stone-200 ">
        Explore our world class menu and wine list below.
      </div>
      <div className="flex flex-row w-3/4 justify-center self-center h-400">
        <Card
          title="Menu"
          desc=""
          className="h-[300px] w-2/5 float-left relative"
          img="bg-menu "
          linkLoc="/"
        />
        <Card
          title="Wine List"
          desc=""
          className="h-[300px] w-2/5 float-right relative"
          img="bg-wine "
          linkLoc="/"
        />
      </div>
    </div>
  );
};
