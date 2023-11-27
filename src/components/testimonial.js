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
    <div id="testimonianze">
      <h2 style={{
        textAlign: 'center',
        margin: '1rem 0' // Aggiungi margini secondo necessità
		

      }}>
        Dicono di Noi
      </h2>
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
            height: '200px',
            margin: '0.5rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            backgroundColor: '#fff',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#f7f7f7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#fff';
          }}>
            <p style={{ marginBottom: '0.5rem' }}>{testimonial.text}</p>
            <p style={{ textAlign: 'right', fontWeight: 'bold' }}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;