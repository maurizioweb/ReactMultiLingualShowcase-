import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ChiSiamo = () => {
  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Chi Siamo
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Siamo un team di professionisti appassionati con l'obiettivo di creare esperienze digitali 
          indimenticabili. Il nostro focus è sulla qualità, l'innovazione e la velocità per portare 
          soluzioni eccellenti ai nostri clienti.
        </Typography>
        {/* Aggiungi qui ulteriori contenuti se necessario */}
      </Container>
    </Box>
  );
};

export default ChiSiamo