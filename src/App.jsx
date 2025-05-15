import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/themes.css'
import 'leaflet/dist/leaflet.css';

{/*Components*/}
import Menu from './components/Menu/Header'
import Footer from './components/Footer/Footer'

{/*Pages routes*/}
import Inicio from './pages/Inicio/Inicio';
import Contact from './pages/Contact/Contact';
import MYV from './pages/M_Y_V/MYV.JSX';
import MasInfo from './pages/MasInfo/MasInfo';
function App() {
 

  return (
    <>
    <Router>
      <Menu/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path="/contacto" element={<Contact />} />
          <Route path="/mision-vision" element={<MYV />} />
          <Route path="/mas-informacion" element={<MasInfo />} />

        </Routes>
      <Footer/>
    </Router>


    </>
  );
}

export default App
