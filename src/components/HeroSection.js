// Herosection.js

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

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
        backgroundImage: 'url(/immagine.jpg)', // Utilizzo dell'immagine di sfondo dalla cartella public
        backgroundSize: 'cover', // Assicura che l'immagine copra l'intera area
        backgroundPosition: 'center center', // Centra l'immagine
        backgroundRepeat: 'no-repeat', // Impedisce la ripetizione dell'immagine
      }}
    >
      <Container sx={{ textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}> {/* Aggiungi un overlay scuro per migliorare la leggibilità */}
        {/* Prima parola: "Vivi" */}
        <AnimatedTypography 
          variant="h2" 
          sx={{ 
            mt: -8,
            fontStyle: 'italic',
            color: '#EDE0D6',
          }}
        >
          Vivi
        </AnimatedTypography>

        {/* Seconda parola: "l'esperienza" */}
        <AnimatedTypography 
          variant="h2" 
          sx={{ 
            mt: 1,
            mb: 4,
            fontStyle: 'italic',
            color: '#EDE0D6',
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
              '&:hover': {
                backgroundColor: '#5a6f5c'
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
              '&:hover': {
                backgroundColor: '#F0821E',
                borderColor: '#F0821E',
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