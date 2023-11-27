import React from 'react';

const Menu = () => {
  const testimonials = [
    {
      text: "MENU'ALLA CARTA",
      
      url: "https://bacchanalia.co.uk/wp-content/uploads/2023/10/Bacchanalia-A-La-Carte-Menu-October.pdf" // Inserisci qui il tuo URL
    },
    {
      text: "MENU' CLASSICO"
      
    },
    {
      text: "MENU' LAB",
      
    },
    {
      text: "MENU'CACCIA",
     
    },
    {
      text: "MENU' EASY CLASSICO",
      
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
               height: '150px', // Riduci l'altezza del div della testimonianza
               margin: '10px',
               padding: '10px',
               border: '1px solid #ccc',
               borderRadius: '5px',
               cursor: testimonial.url ? 'pointer' : 'default',
               fontSize: '14px',
               textAlign: 'center',
               display: 'flex', 
               flexDirection: 'column', 
               justifyContent: 'center', // Centra il contenuto verticalmente
               transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transizione per l'effetto hover
             }}
             onMouseEnter={e => {
               e.currentTarget.style.transform = 'scale(1.05)'; // Effetto ingrandimento al passaggio del mouse
               e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Effetto ombra al passaggio del mouse
             }}
             onMouseLeave={e => {
               e.currentTarget.style.transform = 'scale(1)';
               e.currentTarget.style.boxShadow = 'none';
             }}
             onClick={() => testimonial.url && handleClick(testimonial.url)}
        >
          <p>{testimonial.text}</p>
          <p style={{ fontWeight: 'bold' }}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;