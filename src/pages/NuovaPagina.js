import React from 'react';
import MenuDegustazionePage from '../components/MenuDegustazionePage'; // Aggiornato per riflettere il percorso corretto
import Menu from '../components/Menu'; // Aggiornato per riflettere il percorso corretto
import RestaurantMenu from '../components/RestaurantMenu'; // Aggiornato per riflettere

const NuovaPagina = () => {
  return (
    <div>
      <MenuDegustazionePage />
      <Menu />
      <RestaurantMenu />
    </div>
  );
};

export default NuovaPagina;