import React from 'react';
import Header from './components/Header'; // Assicurati che il percorso sia corretto
import HeroSection from './components/HeroSection'; // Assicurati che il percorso sia corretto
import ChiSiamo from './components/ChiSiamo'; // Importa il componente ChiSiamo

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ChiSiamo /> {/* Inserisci qui la sezione Chi Siamo */}
      {/* Qui puoi inserire ulteriori componenti o sezioni... */}
    </div>
  );
}

export default App;