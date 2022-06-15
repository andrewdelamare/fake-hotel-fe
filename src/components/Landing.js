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
import img from "../zero-take-WvHrrR1C5Po-unsplash.jpg";
export const Landing = () => {
  return (
    <div className="relative">
      <div className="">
        <img src={img} alt="hotel" className="h-600 w-full object-cover" />
      </div>

      <div className="absolute top-1/2 left-1/4 right-1/4 text-white">
        <div className="text-5xl">Central Finland Fake Hotel</div>
        <div className="text-2xl">
          Boutique luxury acomodation for the discerning traveler
        </div>
      </div>
    </div>
  );
};
