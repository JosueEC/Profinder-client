import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./components/navBar/Navbar.jsx";
import HomePage from "../src/views/HomePage/HomePage"
import { Routes, Route } from "react-router-dom";
import FromProvider from "./views/FromProvider/FromProvider";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<FromProvider />} />
        </Routes>
      </ChakraProvider>
    </div>
  )
}

export default App
