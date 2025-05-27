import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/themes.css';
import 'leaflet/dist/leaflet.css';
import './styles/global.css';

{/*Components*/}
import Menu from './components/Menu/Header'
import Footer from './components/Footer/Footer'

{/*Pages routes*/}
import Inicio from './pages/Inicio/Inicio';
import QuienesSomos from './pages/quienesSomos/quienesSomos';
import MisionVision from './pages/M_Y_V/MisionVision';
import Location from './pages/Location/Location';
import Resolucion from './pages/Resolucion/Resolucion';
import Historia from './pages/Historia/Historia';

function App() {
 

  return (
    <Router>
      <div className="app-container">
        <header>
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sede' element={<Location />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/resolucion" element={<Resolucion />} />
            <Route path='/historia' element={<Historia />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
