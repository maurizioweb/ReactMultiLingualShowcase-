import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages';
import NuovaPagina from './pages/NuovaPagina';
import WhatsAppIcon from './components/WhatsAppIcon'; // Importa il componente WhatsAppIcon

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/nuova-pagina" element={<NuovaPagina />} />
        {/* Altre route possono essere aggiunte qui in futuro */}
      </Routes>
      <WhatsAppIcon /> {/* Questo renderizza l'icona di WhatsApp su tutte le pagine */}
    </Router>
  );
}

export default App;