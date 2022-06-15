// Navbar
// Book Your Stay With Us
// Selector for options
// Calendar with available dates for selected options
//
//
import { Calendar } from "./Calendar";

export const Booking = () => {
  return (
    <div className="contianter text-center">
      <div className="text-2xl ">Select the dates for your stay</div>
      <Calendar />
    </div>
  );
};
