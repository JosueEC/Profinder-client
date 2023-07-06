import "./App.css";
import Navbar from "./components/navBar/Navbar.jsx";
import HomePage from "../src/views/HomePage/HomePage";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import { Routes, Route } from "react-router-dom";
import FromProvider from "./views/FromProvider/FromProvider";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <Route path="/login" element={<FromProvider />} />
      </Routes>
    </div>
  );
}

export default App;
