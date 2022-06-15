// Structure of Landing component
//  Navbar
//  Hero pictures of hotel, slideshow
//  Big button to book your stay
//
//  Description of hotel, fake history, fake location.
//
//  Boxes with amenities offered, links to amenity sub pages
//
//  Map with fake locaiton of hotel & points of interest around it
//
//  Footer
import { Link } from "react-router-dom";
import img from "../zero-take-WvHrrR1C5Po-unsplash.jpg";

const LandingHero = () => (
  <div className="relative">
    <div className="">
      <img src={img} alt="hotel" className="h-600 w-full object-cover" />
    </div>

    <div className="absolute top-1/2 left-1/4 right-1/4 text-white backdrop-blur-sm">
      <div className="text-5xl">Central Finland Fake Hotel</div>
    </div>
  </div>
);

const Amenity = ({ title, desc, className, img, linkLoc }) => (
  <div className={className + " relative place-content-center flex flex-col"}>
    <Link
      to={linkLoc}
      className="w-auto h-full mr-4 mb-4  bg-slate-200 text-center place-content-center flex flex-col"
    >
      <div className="text-2xl">{title}</div>
      <div>{desc}</div>
    </Link>
  </div>
);

const Amenities = () => (
  <div className="block w-full h-auto pt-4 pl-4 pb-4 relative">
    <Amenity
      className="w-3/5 h-80 float-left relative"
      title="Accomadations"
      desc="Find your paradise"
      linkLoc="/rooms"
    />
    <Amenity
      className="w-2/5 h-96 float-right relative"
      title="Gourmet Cuisine"
      desc="World class service, locally inspired"
      linkLoc="/"
    />
    <Amenity
      className="w-3/5 h-64 float-left relative"
      title="Meetings & Events"
      linkLoc="/"
    />
    <Amenity
      className="w-2/5 h-36 float-right relative"
      title="Wellness Spa"
      linkLoc="/"
    />
  </div>
);

export const Landing = () => {
  return (
    <div>
      <LandingHero />
      <Amenities />
    </div>
  );
};
