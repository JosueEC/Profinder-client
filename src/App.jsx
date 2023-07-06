import './App.css'
import Navbar from "./components/navBar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import HomePage from "../src/views/HomePage/HomePage"
import { Routes, Route } from "react-router-dom";
import FromProvider from "./views/FromProvider/FromProvider";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<FromProvider />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
