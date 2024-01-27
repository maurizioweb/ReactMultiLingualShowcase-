// HeroSectionEng.js

import React from 'react';
import { Box, Container, Button } from '@mui/material';
import { styled } from '@mui/system';

const AnimatedBox = styled(Box)({
  animation: 'slideIn 0.5s ease forwards',
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-50%)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
});

const HeroSectionEng = () => {
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
      <Container sx={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
        <AnimatedBox>
          {/* Utilizzo di <a> per aprire il PDF nella stessa pagina */}
          <a href= 'https://www.uliassi.com' target="_self" style={{ textDecoration: 'none' }}>
            <Button 
              variant="outlined" 
              sx={{ 
                fontSize: '1.5em',
                padding: '10px 60px',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: '#F0821E',
                  borderColor: '#F0821E',
                }
              }}
            >
               Menù
            </Button>
          </a>
        </AnimatedBox>
      </Container>
    </Box>
  );
};

export default HeroSectionEng;