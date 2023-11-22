import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Galleria = () => {
  const numeroDiPlaceholder = 6; // Numero di placeholder da mostrare
  const placeholderAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Il Ristorante
        </Typography>
        <Typography variant="h2" style={{ color: '#EDE0D6' }} align="center" gutterBottom>
          Dove il gusto è tradizione
        </Typography>
        <Grid container spacing={2}>
          {Array.from({ length: numeroDiPlaceholder }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={placeholderAnimation}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200, // Altezza del placeholder
                    backgroundColor: '#e0e0e0', // Colore di sfondo del placeholder
                    border: '1px solid #ccc' // Bordo del placeholder
                  }}
                >
                  {/* Qui puoi inserire un'icona o un'immagine statica come placeholder */}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        {/* Aggiunta del paragrafo */}
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