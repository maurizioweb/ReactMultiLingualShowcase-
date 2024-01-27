import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const MenuDegustazionePage = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={0} style={{ padding: '20px', marginTop: '80px' }}>
        <Typography variant="h4" gutterBottom>Esplora il Nostro Esclusivo Menù Degustazione</Typography>
        <Typography paragraph>
         un viaggio di sapori autentici, creati con maestria dal nostro chef: per un'esperienza culinaria personalizzata e memorabile."
        </Typography>
        
      </Paper>
    </Container>
  );
};

export default MenuDegustazionePage;