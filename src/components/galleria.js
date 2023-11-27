import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Galleria = () => {
  const elementi = [
    "/ristorante.jpg", // Percorso dell'immagine reale
	"/ristorante2.jpg", // Percorso dell'immagine reale
	"/ristorante.jpg", // Percorso dell'immagine reale
	"/ristorante2.jpg", // Percorso dell'immagine reale
	
    
    // Aggiungi qui quanti placeholder vuoi
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Box id="galleria" sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Il Ristorante
        </Typography>
        <Typography variant="h2" style={{ color: '#EDE0D6' }} align="center" gutterBottom>
          Dove il gusto è tradizione
        </Typography>

        <Slider {...settings}>
          {elementi.map((elemento, index) => (
            <div key={index}>
              {elemento ? (
                <img src={elemento} alt={`Immagine ${index}`} style={{ width: '100%', height: 'auto' }} />
              ) : (
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  backgroundColor: '#e0e0e0',
                  border: '1px solid #ccc'
                }}>
                  {/* Inserisci un'icona o un'immagine statica qui come placeholder */}
                </Box>
              )}
            </div>
          ))}
        </Slider>

        {/* Paragrafo descrittivo */}
        <Typography variant="body1" color="textPrimary" align="center" sx={{ marginTop: 4 }}>
          Benvenuti al nostro ristorante, dove ogni piatto racconta una storia di sapori e tradizioni. 
          La nostra passione per la cucina autentica e l'attenzione ai dettagli si riflette in ogni nostra 
          creazione. Speriamo di offrirvi un'esperienza culinaria indimenticabile.
        </Typography>
      </Container>
    </Box>
  );
};

export default Galleria;