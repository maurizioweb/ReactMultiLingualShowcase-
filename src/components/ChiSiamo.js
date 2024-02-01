import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './fonts.css';

const ChiSiamo = () => {
  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Box
      id="chi-siamo"
      sx={{
        padding: '2rem 1rem',
        backgroundColor: '#f5f5f5',
        '@media (max-width: 600px)': {
          // Stili specifici per dispositivi con larghezza fino a 600px
          padding: '1rem',
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={imageAnimation}
            >
              <Typography
                variant="h4"
                color="textPrimary"
                gutterBottom
                align="left"
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  '@media (max-width: 600px)': {
                    // Modifica la dimensione del font per dispositivi mobili
                    fontSize: '1.5rem',
                  },
                }}
              >
                Chi Siamo
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#EDE0D6',
                  fontFamily: 'HardLight',
                  '@media (max-width: 600px)': {
                    // Riduci la dimensione del font per il titolo su dispositivi mobili
                    fontSize: '2.0rem',
                  },
                }}
                gutterBottom
                align="left"
              >
                I Varnelli
              </Typography>
              <Box
                sx={{
                  height: '600px',
                  '@media (max-width: 600px)': {
                    // Riduci l'altezza dell'immagine su dispositivi mobili
                    height: '500px',
                  },
                }}
              >
                <img src="varnelli.jpg" alt="I Varnelli" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={textAnimation}
            >
              <Box
                sx={{
                  paddingTop: '9rem',
                  '@media (max-width: 600px)': {
                    paddingTop: '2rem', // Riduci il padding superiore per il testo su dispositivi mobili
                  },
                }}
              >
                <Typography variant="body1" color="textSecondary" sx={{ fontFamily: 'Montserrat, sans-serif', whiteSpace: 'pre-line' }}>
                  {`Siamo un team di professionisti culinari appassionati di cucina, uniti dalla
missione di offrire esperienze gastronomiche eccezionali e indimenticabili. 
Nel nostro ristorante, la qualità è al centro di tutto ciò che facciamo,
dall'accurata selezione degli ingredienti alla cura nella preparazione di ogni
piatto.

Ci impegniamo nell'innovazione, sperimentando costantemente nuove
tecniche culinarie e combinazioni di sapori per sorprendere e deliziare i nostri
ospiti. Ogni membro del nostro team è dedicato a fornire un servizio eccellente,
assicurando che ogni esperienza presso il nostro ristorante sia unica e
memorabile.

Collaboriamo a stretto contatto con fornitori locali per garantire
che ogni ingrediente rispecchi freschezza e sostenibilità, rafforzando il nostro
impegno verso la qualità e l'ambiente.

Ci dedichiamo alla continua ricerca
dell'eccellenza non solo nella cucina ma anche nell'ambiente e nel servizio. La
nostra strategia si concentra sulla creazione di un'atmosfera accogliente e
rilassante, dove ogni cliente può sentirsi a casa.`}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChiSiamo;