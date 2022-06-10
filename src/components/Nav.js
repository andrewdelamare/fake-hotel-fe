/* import { ReactComponent as HomeIcon } from "../icons/home.svg"
import { ReactComponent as PersonIcon } from "../icons/user.svg"
import { ReactComponent as CodeIcon } from "../icons/briefcase.svg"
import { ReactComponent as ContactIcon } from "../icons/comment-alt.svg" */
import { Link } from "react-router-dom";
export const NavBar = () => {

  return (
    <nav className="inline-flex justify-between sm:mr-4 sticky top-0 float-right w-full font-sans bg-slate-100 z-50">
      <div className="pl-5 pt-3 mt-4 text-xl sm:text-2xl">Hotel Name</div>
      <div className="flex flex-row justify-between sm:mr-5 " >
        
        <Link to="/" className="inline-flex  border-0 pt-5 pb-2 px-3 mt-3 sm:px-6 focus:outline-none" >Home</Link>
        
        <Link to="/Rooms" className="inline-flex  border-0 pt-5 pb-2 px-3 mt-3 sm:px-6 focus:outline-none" >Rooms</Link>
        
        <Link to="/App" className="inline-flex  border-0 pt-5 pb-2 px-3 mt-3 sm:px-6 focus:outline-none" >About</Link>
        
        <Link to="/App" className="inline-flex  border-0 pt-5 pb-2 px-3 mt-3 sm:px-6 focus:outline-none" >Book</Link>
      </div>
    </nav>
  )
}