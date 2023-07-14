/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { useSessionState } from "./services/zustand/useSession";
import Categories from "./views/Categories/Categories";
import HomePage from "../src/views/HomePage/HomePage";
import FromProvider from "./views/FromProvider/FromProvider";
import HowDoesItWork from "../src/components/HowDoesItWork/HowDoesItWork";
import Footer from "./components/Footer/Footer";
import DetailSupplier from "./views/DetailsSupplier/DetailsSupplier";
import UserLogin from "./views/UserLogin/UserLogin";
import UserRegister from "./views/UserRegister/UserRegister.jsx";
import FormCliente from "./views/FormCliente/FormCliente.jsx";
import NavbarDashboard from "./views/DashboardSuppliers/NavbarDashboard.jsx";
import DashboardClient from "./views/DashboardClient/DashboardClient.jsx";
import FeedbackForm from './components/Feedback/FormFeedback.jsx'
import LoggedNavbar from './components/LoggedNavbar/LoggedNavbar.jsx'
import Navbar from "./components/navBar/Navbar";

function App() {
  const setSessionState = useSessionState(state => state.setSessionState)
  const session = useSessionState(state => state.session)
  // const location = useLocation();
  // const hideNavbar = location.pathname === "/dashboardSuppliers" || location.pathname === "/dashboardClient";

  useEffect(() => {
    const userSession = window.localStorage.getItem('userSession')
    if (userSession) {
      const user = JSON.parse(userSession)
      setSessionState(user)
    }
  }, [])

  return (
    <div>
      {session.status ? <LoggedNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackForm/>} />
        <Route path="/dashboardClient" element={<DashboardClient/>} />
        <Route path="/dashboardSuppliers" element={<NavbarDashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/comofunciona" element={<HowDoesItWork />} />
        <Route path="/registerProvider" element={<FromProvider />} />
        <Route path="/registerCliente" element={<FormCliente />} />
        <Route path="/detail/:supplierID" element={<DetailSupplier />} />
        <Route
          path="/userLogin"
          element={<UserLogin />}
        />
        <Route path="/userRegister" element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
