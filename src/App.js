import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Homepages'; // Importazione aggiornata

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        {/* Altre route possono essere aggiunte qui in futuro */}
      </Routes>
    </Router>
  );
}

export default App;