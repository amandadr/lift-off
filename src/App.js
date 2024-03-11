import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import PlatesCalc from "./components/calculators/PlatesCalc";
import OneRepMaxCalc from "./components/calculators/ORMCalc";
import OptimalRepsCalc from "./components/calculators/OptimalRepsCalc";
import WarmUpCalc from "./components/calculators/WarmUpCalc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plates" element={<PlatesCalc />} />
        <Route path="/one-rep-max" element={<OneRepMaxCalc />} />
        <Route path="/optimal-reps" element={<OptimalRepsCalc />} />
        <Route path="/warm-up-sets" element={<WarmUpCalc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
