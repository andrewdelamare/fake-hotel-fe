import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Nav";
import { Calendar } from "./Calendar";
import { Rooms } from "./Rooms";
function App() {
  return (
    <BrowserRouter>
      <div className="container overflow-x-hidden mx-auto">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
