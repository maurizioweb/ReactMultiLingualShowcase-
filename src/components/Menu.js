import React from 'react';

const Menu = () => {
  const testimonials = [
    {
      text: "MENU'ALLA CARTA",
      
      url: "https://bacchanalia.co.uk/wp-content/uploads/2023/10/Bacchanalia-A-La-Carte-Menu-October.pdf", // Inserisci qui il tuo URL
	 author: "€ 25,00" 
    },
    {
      text: "MENU' CLASSICO",
     author: "€ 25,00"  
    },
    {
      text: "MENU' LAB",
     author: "€ 25,00" 
    },
    {
      text: "MENU'CACCIA",
     author: "€ 25,00"
    },
    {
      text: "MENU' EASY CLASSICO",
	  author: "€ 25,00"
      
    }
  ];

 const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      flexWrap: 'wrap', 
      margin: '0 auto', 
      maxWidth: '80%',
    }}>
      {testimonials.map((testimonial, index) => (
        <div key={index} 
             style={{
               flex: '1',
               minWidth: '180px', 
               maxWidth: '200px',
               
               margin: '20px',
               padding: '20px',
               border: '1px solid #ccc',
               borderRadius: '5px',
               cursor: testimonial.url ? 'pointer' : 'default',
               fontSize: '16px',
               textAlign: 'center',
               display: 'flex', 
               flexDirection: 'column', 
               justifyContent: 'space-between', // Centra il contenuto verticalmente
               transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transizione per l'effetto hover
			 
             }}
             onMouseEnter={e => {
               e.currentTarget.style.transform = 'scale(1.05)'; // Effetto ingrandimento al passaggio del mouse
               e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Effetto ombra al passaggio del mouse
			   e.currentTarget.style.backgroundColor = '#EDE0D6'; // Cambia il colore di sfondo al passaggio del mouse
             }}
             onMouseLeave={e => {
               e.currentTarget.style.transform = 'scale(1)';
               e.currentTarget.style.boxShadow = 'none';
			    e.currentTarget.style.backgroundColor = ''; // Rimetti lo sfondo iniziale (o un altro colore) quando il mouse lascia l'elemento
             }}
             onClick={() => testimonial.url && handleClick(testimonial.url)}
        >
          <p style={{ marginBottom: '4px' }}>{testimonial.text}</p> {/* Riduci il margine inferiore */}
    <p style={{ marginTop: '0', fontWeight: 'bold' }}> {testimonial.author}</p> {/* Riduci il margine superiore */}
        </div>
      ))}
    </div>
  );
};

export default Menu;