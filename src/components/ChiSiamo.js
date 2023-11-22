import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const ChiSiamo = () => {
  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <Box sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Colonna per titoli e pacheloader */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={imageAnimation}
            >
              <Typography variant="h4" color="textPrimary" gutterBottom align="left">
                Chi Siamo
              </Typography>
              <Typography variant="h2" style={{ color: '#EDE0D6' }} gutterBottom align="left">
                I Varnelli
              </Typography>
              <Box
                sx={{
                  height: '600px',
                  backgroundColor: 'grey',
                }}
              >
                {/* Qui inserisci il pacheloader */}
              </Box>
            </motion.div>
          </Grid>
          {/* Colonna per il paragrafo */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={textAnimation}
            >
              <Box sx={{ paddingTop: '9rem' }}> {/* Aumenta il padding per allineare con l'inizio del pacheloader */}
                <Typography variant="body1" color="textSecondary">
                  Siamo un team di professionisti appassionati con l'obiettivo di creare esperienze digitali 
                  indimenticabili. Il nostro focus è sulla qualità, l'innovazione e la velocità per portare 
                  soluzioni eccellenti ai nostri clienti. Siamo dedicati alla continua ricerca dell'eccellenza 
                  nel design, nello sviluppo e nella strategia digitale, lavorando a stretto contatto con i nostri 
                  clienti per realizzare progetti su misura che rispondano perfettamente alle loro esigenze.
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