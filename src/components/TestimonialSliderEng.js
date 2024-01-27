import React from 'react';

const TestimonialSliderEng = () => {
  const testimonials = [
    {
      text: "The food was incredible, with excellent service. An experience to repeat!",
      author: "Mario Rossi"
    },
    {
      text: "The quality and atmosphere were exceptional. I will definitely return!",
      author: "Giuseppe Bianchi"
    },
    {
      text: "An unforgettable gastronomic experience. The staff was very attentive.",
      author: "Laura Verdi"
    }
    // Add more testimonials if necessary
  ];

  return (
    <div id="testimonials">
      <h2 style={{
        textAlign: 'center',
        margin: '1rem 0' // Add margins as needed
      }}>
        What They Say About Us
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

export default TestimonialSliderEng;