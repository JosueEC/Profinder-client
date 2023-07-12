import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar/Navbar.jsx'
import Categories from './views/Categories/Categories'
import HomePage from '../src/views/HomePage/HomePage'
import FromProvider from './views/FromProvider/FromProvider'
import HowDoesItWork from '../src/components/HowDoesItWork/HowDoesItWork'
import Footer from './components/Footer/Footer'
import DetailSupplier from './views/DetailsSupplier/DetailsSupplier'
import UserLogin from './views/UserLogin/UserLogin'
import UserRegister from './views/UserRegister/UserRegister.jsx'
import FormCliente from './views/FormCliente/FormCliente.jsx'

function App () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/comofunciona' element={<HowDoesItWork />} />
        <Route path='/registerProvider' element={<FromProvider />} />
        <Route path='/registerCliente' element={<FormCliente />} />
        <Route path='/detail/:supplierID' element={<DetailSupplier />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/userRegister' element={<UserRegister />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
