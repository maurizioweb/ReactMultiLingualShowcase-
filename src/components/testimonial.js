import React from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "Il cibo era incredibile, con un servizio eccellente. Un'esperienza da ripetere!",
      author: "Mario Rossi"
    },
    {
      text: "La qualità e l'atmosfera erano eccezionali. Tornerò sicuramente!",
      author: "Giuseppe Bianchi"
    },
    {
      text: "Un'esperienza gastronomica indimenticabile. Il personale era molto attento.",
      author: "Laura Verdi"
    }
    // Aggiungi qui altri testimonial se necessario
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'auto',
      padding: '0.5rem',
      margin: '0'
    }}>
      {testimonials.map((testimonial, index) => (
        <div key={index} style={{
          flex: 'none',
          width: '300px',
          margin: '0.5rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          transition: 'transform 0.3s ease, background-color 0.3s ease', // Transizione fluida per gli effetti
          backgroundColor: '#fff', // Colore di sfondo iniziale
          cursor: 'pointer', // Cambia il cursore a pointer per indicare che è interattivo
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Ombra leggera per dare profondità
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Ingrandisce leggermente la card
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Ritorna alla dimensione originale
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7f7f7'} // Cambia colore di sfondo
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'} // Ritorna al colore di sfondo originale
        >
          <p style={{ marginBottom: '0.5rem' }}>{testimonial.text}</p>
          <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;