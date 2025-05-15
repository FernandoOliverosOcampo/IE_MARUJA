import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/themes.css'
import 'leaflet/dist/leaflet.css';

{/*Components*/}
import Menu from './components/Menu/Header'
import Footer from './components/Footer/Footer'

{/*Pages routes*/}
import Inicio from './pages/Inicio/Inicio';
import QuienesSomos from './pages/quienesSomos/quienesSomos';
import MYV from './pages/M_Y_V/MYV.JSX';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
function App() {
 

  return (
    <>
    <Router>
      <Menu/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/sede' element={<Location/>}/>
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/mision-vision" element={<MYV />} />
          <Route path="/contacto" element={<Contact />} />

        </Routes>
      <Footer/>
    </Router>


    </>
  );
}

export default App
