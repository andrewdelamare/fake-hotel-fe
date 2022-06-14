import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Nav";
import { Calendar } from "./Calendar";
import Rooms from "./Rooms";
import { Landing } from "./Landing";
function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden flex flex-col">
        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
