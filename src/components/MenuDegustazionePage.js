import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const MenuDegustazionePage = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={0} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Esplora il Nostro Esclusivo Menù Degustazione</Typography>
        <Typography paragraph>
          Il nostro menù degustazione offre un'esperienza culinaria unica e memorabile, perfetta per assaporare la vasta gamma di sapori e creatività della nostra cucina. Disponibile esclusivamente su prenotazione, questo menù è pensato per deliziare tutti i sensi, con una selezione curata dei migliori piatti creati dal nostro chef.
        </Typography>
        <Typography paragraph>
          Un Viaggio attraverso Sapori Autentici...
          {/* Aggiungi qui il resto del testo */}
        </Typography>
        <Typography paragraph>
          Esperienze Culinarie su Misura...
        </Typography>
        <Typography paragraph>
          Atmosfera Intima e Servizio Impeccabile...
        </Typography>
        <Typography paragraph>
          Un Invito alla Scoperta...
        </Typography>
      </Paper>
    </Container>
  );
};

export default MenuDegustazionePage;