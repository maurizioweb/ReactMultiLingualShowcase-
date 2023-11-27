import React from 'react';

const Menu = () => {
  const testimonials = [
    {
      text: "Prima testimonianza... [Testo qui]",
      author: "Autore Uno",
      url: "https://www.sito-web-esterno.com" // Inserisci qui il tuo URL
    },
    {
      text: "Seconda testimonianza... [Testo qui]",
      author: "Autore Due"
    },
    {
      text: "Terza testimonianza... [Testo qui]",
      author: "Autore Tre"
    },
    {
      text: "Quarta testimonianza... [Testo qui]",
      author: "Autore Quattro"
    },
    {
      text: "Quinta testimonianza... [Testo qui]",
      author: "Autore Cinque"
    }
  ];

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {testimonials.map((testimonial, index) => (
        <div key={index} 
             style={{
               flex: 'none',
               minWidth: '300px',
               margin: '10px',
               padding: '15px',
               border: '1px solid #ccc',
               borderRadius: '5px',
               cursor: testimonial.url ? 'pointer' : 'default',
             }}
             onClick={() => testimonial.url && handleClick(testimonial.url)}
        >
          <p>{testimonial.text}</p>
          <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;