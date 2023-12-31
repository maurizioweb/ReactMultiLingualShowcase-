import React from 'react';
import ResponsiveAppBar from '../components/Header';
import CloneHeroSection from '../components/CloneHeroSection'; // Assicurati che il percorso sia corretto
import Footer from '../components/Footer'; // Assicurati che il percorso sia corretto
import MenuDegustazionePage from '../components/MenuDegustazionePage'; // Aggiornato per riflettere il percorso corretto
import Menu from '../components/Menu'; // Aggiornato per riflettere il percorso corretto
import RestaurantMenu from '../components/RestaurantMenu'; // Aggiornato per riflettere
import OrariEContatti from '../components/OrariEContatti'; // Assicurati 
const NuovaPagina = () => {
  return (
 <div>
      <ResponsiveAppBar />
      <CloneHeroSection />
      <MenuDegustazionePage />
     
      <RestaurantMenu />
      <OrariEContatti />
      <Footer />
    </div>
  );
};

export default NuovaPagina;