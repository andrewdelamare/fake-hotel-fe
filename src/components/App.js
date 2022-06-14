import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Nav";
import { Calendar } from "./Calendar";
import Rooms from "./Rooms";
function App() {
  return (
    <BrowserRouter>
      <div className="container overflow-x-hidden mx-auto self-center">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
