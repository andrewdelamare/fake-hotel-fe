import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Nav"
import { Calendar } from "./Calendar";
function App() {
  return (

    <BrowserRouter>
      <div className="container overflow-x-hidden">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
