// CloneHerosection.js

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import './fonts.css'; // Aggiusta il percorso in base alla tua struttura
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

const CloneHeroSection = () => {
  return (
   <Box
  sx={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundImage: 'url(/immagine2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '20vh',
    position: 'relative', // Aggiunto per posizionare correttamente l'overlay
    '&::before': { // Inizio della definizione dell'overlay
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Colore dell'overlay (nero con opacità)
      zIndex: 1, // Assicurati che sia sotto il contenuto del box
    },
    zIndex: 2, // Assicurati che il contenuto del box sia sopra l'overlay
  }}
>
      <Container sx={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.0)', zIndex: 2  }}>
        <AnimatedTypography 
          variant="h2" 
          sx={{ 
            fontStyle: 'italic',
            color: 'white',
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
			fontFamily: 'HardItalic', // Usa il nome del font definito in @font-face
          }}
        >
          Gusto inconfondibile
        </AnimatedTypography>

        <AnimatedTypography 
          variant="h4" 
          sx={{ 
            mt: 1,
            mb: 4,
            fontStyle: 'italic',
            color: 'white',
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
			fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Dove ogni piatto racconta una storia
        </AnimatedTypography>

        <AnimatedBox>
          <Button 
            variant="contained" 
            sx={{ 
              mr: 2,
              backgroundColor: '#718872',
              '&:hover': {
                backgroundColor: '#5a6f5c'
				
              },
			  fontFamily: 'Montserrat, sans-serif', 
            }}
			href="#alla-carta" // Imposta l'href per puntare all'ID della sezione
          >
            Vedi il Menù
          </Button>
          <Button 
            variant="outlined" 
            sx={{ 
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: '#F0821E',
                borderColor: '#F0821E',
              },
			  fontFamily: 'Montserrat, sans-serif', 
            }}
			 
component="a" // Aggiungi il componente "a" per creare un link
  href="https://bacchanalia.co.uk/wp-content/uploads/2023/10/Bacchanalia-A-La-Carte-Menu-October.pdf" // Aggiungi l'URL desiderato
  target="_blank" // Opzionale: apre il link in una nuova scheda
  rel="noopener noreferrer" // Buona pratica per la sicurezza quando si usano link esterni
          >
            Consulta il Menù in PDF
          </Button>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default CloneHeroSection;