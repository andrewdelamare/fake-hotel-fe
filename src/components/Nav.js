/* import { ReactComponent as HomeIcon } from "../icons/home.svg"
import { ReactComponent as PersonIcon } from "../icons/user.svg"
import { ReactComponent as CodeIcon } from "../icons/briefcase.svg"
import { ReactComponent as ContactIcon } from "../icons/comment-alt.svg" */
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="flex justify-between fixed z-20 bg-stone-200 top-0 w-full ">
      <div className="m-7 text-xl sm:text-4xl font-serif ">
        Central Finland Fake Hotel
      </div>
      <div className="flex flex-row justify-between m-7 items-center">
        <Link to="/" className="inline-flex border-0 px-5 focus:outline-none">
          Home
        </Link>

        <Link
          to="/rooms"
          className="inline-flex border-0 px-5  focus:outline-none"
        >
          Rooms
        </Link>

        <Link
          to="/spa"
          className="inline-flex border-0 px-5 focus:outline-none"
        >
          Spa
        </Link>

        <Link
          to="/restaurant"
          className="inline-flex border-0 px-5  focus:outline-none"
        >
          Restaurant
        </Link>
        <Link
          to="/book"
          className="inline-flex border-0 px-5  focus:outline-none"
        >
          Book
        </Link>
      </div>
    </nav>
  );
};
