import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages'; // Assumi che i percorsi siano corretti
import NuovaPagina from './pages/NuovaPagina'; // Assicurati che il percorso sia corretto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/nuova-pagina" element={<NuovaPagina />} /> {/* Aggiungi questa rotta per NuovaPagina */}
        {/* Altre route possono essere aggiunte qui in futuro */}
      </Routes>
    </Router>
  );
}

export default App;