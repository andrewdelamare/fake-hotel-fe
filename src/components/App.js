import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { NavBar } from "./Nav";
import Rooms from "./Rooms";
import { Landing } from "./Landing";
import { Booking } from "./Booking";
import { Footer } from "./Footer";
function App() {
  let { size } = useParams();

  return (
    <BrowserRouter>
      <div className="overflow-x-hidden flex flex-col">
        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<Booking />}>
            <Route path=":size" element={<Booking size={size} />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
