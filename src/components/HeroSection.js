// Herosection.js

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import './fonts.css'; // Assicurati che il percorso sia corretto
import './reset.css'; // Assicurati che il percorso sia corretto

// Creazione di componenti con animazione
const AnimatedTypography = styled(Typography)(({ theme }) => ({
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
}));

const AnimatedBox = styled(Box)(({ theme }) => ({
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
}));

const HeroSection = () => {
  return (
    <Box
  sx={{
    height: '100vh',
    width: '100vw',
    m: 0,
    p: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundImage: {
      xs: 'url(/immaginemobile.jpg)', // Immagine per schermi < 600px
      sm: 'url(/immagine.jpg)', // Immagine predefinita per schermi > 600px
    },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
      <Container maxWidth="lg" sx={{ p: '0 !important', textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
        <AnimatedTypography variant="h2" sx={{ fontStyle: 'italic', color: '#EDE0D6', fontFamily: 'HardLight', mb: 2 }}>
          Vivi
        </AnimatedTypography>
        <AnimatedTypography variant="h2" sx={{ fontStyle: 'italic', color: '#EDE0D6', fontFamily: 'HardLight', mb: 4 }}>
          l'esperienza
        </AnimatedTypography>

        <AnimatedBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: '#718872', '&:hover': { backgroundColor: '#5a6f5c' }, fontFamily: 'Montserrat' }}>
            HOTEL
          </Button>
          <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', '&:hover': { backgroundColor: '#F0821E', borderColor: '#F0821E' }, fontFamily: 'Montserrat' }}>
            Scopri il Menù
          </Button>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default HeroSection;