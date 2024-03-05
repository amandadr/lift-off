import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import BarbellCalc from "./components/calculators/BarbellCalc";
import OneRepMaxCalc from "./components/calculators/ORMCalc";
import LoadCalc from "./components/calculators/LoadCalc";
import WarmUpCalc from "./components/calculators/WarmUpCalc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/barbell" element={<BarbellCalc />} />
        <Route path="/one-rep-max" element={<OneRepMaxCalc />} />
        <Route path="/optimal-load" element={<LoadCalc />} />
        <Route path="/warm-up-sets" element={<WarmUpCalc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
