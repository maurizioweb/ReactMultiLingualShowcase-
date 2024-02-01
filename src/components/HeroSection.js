// Herosection.js

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import './fonts.css'; // Assicurati che il percorso sia corretto

// Creazione di componenti con animazione
const AnimatedTypography = styled(Typography)({
  animation: 'slideIn 0.5s ease forwards',
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(50%)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
});

const AnimatedBox = styled(Box)({
  animation: 'slideIn 0.5s ease forwards',
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(50%)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundImage: 'url(/immagine.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container sx={{ textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
        <AnimatedTypography 
          variant="h2" 
          sx={{ 
            fontStyle: 'italic', 
            color: '#EDE0D6', 
            fontFamily: 'HardLight', 
            '@media (max-width:600px)': {
              fontSize: '2.0rem', // Riduci la dimensione del font per dispositivi mobili
              marginBottom: '10px', // Riduci il margine inferiore per dispositivi mobili
            }
          }}
        >
          Vivi
        </AnimatedTypography>
        <AnimatedTypography 
          variant="h2" 
          sx={{ 
            fontStyle: 'italic', 
            color: '#EDE0D6', 
            fontFamily: 'HardLight',
			  marginBottom: '20px',
            '@media (max-width:600px)': {
              fontSize: '2.0rem', // Riduci la dimensione del font per dispositivi mobili
              marginBottom: '20px', // Aumenta il margine inferiore per spaziare tra il testo e i pulsanti
            }
          }}
        >
          l'esperienza
        </AnimatedTypography>

        <AnimatedBox>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2, 
              backgroundColor: '#718872', 
              '&:hover': { backgroundColor: '#5a6f5c' },
              fontFamily: 'Montserrat', // Specifica il font Montserrat per i pulsanti
              '@media (max-width:600px)': {
                fontSize: '0.8rem', // Riduci la dimensione del font per i pulsanti su dispositivi mobili
                padding: '6px 12px', // Riduci il padding dei pulsanti su dispositivi mobili
              }
            }}
          >
            Prenota
          </Button>
          <Button 
            variant="outlined" 
            sx={{ 
              color: 'white', 
              borderColor: 'white', 
              '&:hover': { backgroundColor: '#F0821E', borderColor: '#F0821E' },
              fontFamily: 'Montserrat', // Specifica il font Montserrat per i pulsanti
              '@media (max-width:600px)': {
                fontSize: '0.8rem', // Riduci la dimensione del font per i pulsanti su dispositivi mobili
                padding: '6px 12px', // Riduci il padding dei pulsanti su dispositivi mobili
              }
            }}
          >
            Scopri il Menù
          </Button>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default HeroSection;