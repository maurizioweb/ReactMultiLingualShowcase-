import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChiSiamo from './components/ChiSiamo'; // Importa il componente ChiSiamo
import Galleria from './components/galleria'; // Importa il componente Galleria
import TestimonialSlider from './components/testimonial'; // Importa il componente TestimonialSlider

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ChiSiamo /> {/* Sezione Chi Siamo */}
      <Galleria /> {/* Sezione Galleria */}
      <TestimonialSlider /> {/* Sezione Testimonial Slider */}
      {/* Qui puoi inserire ulteriori componenti o sezioni... */}
    </div>
  );
}

export default App;