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
    <Box id="chi-siamo" sx={{ padding: '2rem 1rem', backgroundColor: '#f5f5f5' }}> {/* Riduci il padding per usare più spazio */}
      <Container maxWidth="xl"> {/* Imposta su 'xl' o rimuovi per massimizzare la larghezza */}
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
                sx={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Chi Siamo
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ color: '#EDE0D6', fontFamily: 'Montserrat, sans-serif' }} 
                gutterBottom 
                align="left"
              >
                I Varnelli
              </Typography>
              <Box
                sx={{
                  height: '600px',
                }}
              >
                <img src="varnelli.jpg" alt="I Varnelli" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
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
              <Box sx={{ paddingTop: '9rem' }}>
                <Typography 
                  variant="body1" 
                  color="textSecondary"
                  sx={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {"Siamo un team di professionisti culinari appassionati..."}
                  {/* Il resto del testo rimane invariato */}
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