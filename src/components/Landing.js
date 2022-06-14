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
    <div className="items-center justify-center h-600">
      <img
        src={img}
        alt="hotel"
        className="absolute -z-10 object-cover object-center"
      />
      <div className="z-10 pt-64 flex flex-col w-full text-center justify-center text-white">
        <div className="text-5xl">Centeral Finland Fake Hotel</div>
        <div className="text-2xl">
          Boutique luxury acomodation for the discerning traveler
        </div>
      </div>
    </div>
  );
};
