import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/themes.css';
import 'leaflet/dist/leaflet.css';
import './styles/global.css';

// Components
const Menu = lazy(() => import('./components/Menu/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Pages (lazy loaded)
const Inicio = lazy(() => import('./pages/Inicio/Inicio'));
const QuienesSomos = lazy(() => import('./pages/quienesSomos/quienesSomos'));
const MisionVision = lazy(() => import('./pages/M_Y_V/MisionVision'));
const Location = lazy(() => import('./pages/Location/Location'));
const Resolucion = lazy(() => import('./pages/Resolucion/Resolucion'));
const Historia = lazy(() => import('./pages/Historia/Historia'));

// Loading component
const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh' 
  }}>
    <div>Cargando...</div>
  </div>
);

function App() {
 

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="app-container">
          <header>
            <Menu />
          </header>
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sede' element={<Location />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/mision-vision" element={<MisionVision />} />
                <Route path="/resolucion" element={<Resolucion />} />
                <Route path='/historia' element={<Historia />} />
              </Routes>
            </Suspense>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
