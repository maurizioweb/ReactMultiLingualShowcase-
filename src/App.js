import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChiSiamo from './components/ChiSiamo'; // Importa il componente ChiSiamo
import Galleria from './components/galleria'; // Importa il componente Galleria
import TestimonialSlider from './components/testimonial'; // Importa il componente TestimonialSlider
import MapWithOpeningHours from './components/MapWithOpeningHours'; // Importa il nuovo componente
import OrariEContatti from './components/OrariEContatti'; // Aggiusta il percorso se necessario
import Footer from './components/Footer'; // Aggiusta il percorso se necessario

function App() {
  const location = { lat: 42.3601, lng: -71.0589 }; // Esempio di coordinate per la mappa
  const openingHours = [
    // Esempio di orari di apertura
    { date: '2023-01-01', open: '09:00', close: '17:00' },
    { date: '2023-01-02', open: '10:00', close: '18:00' },
    // Altri orari...
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <ChiSiamo />
      <Galleria />
      <TestimonialSlider />
      {/* Aggiungi qui il componente MapWithOpeningHours */}
      <MapWithOpeningHours location={location} openingHours={openingHours} />
      {/* Puoi continuare ad aggiungere altre sezioni o componenti qui... */}
	   <OrariEContatti />
	     <Footer />
    </div>
  );
}


export default App;