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
    <Box  id="chi-siamo"sx={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Colonna per titoli e immagine */}
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
                {/* Qui inserisci l'immagine */}
                <img src="varnelli.jpg" alt="Descrizione dell'immagine" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </Box>
            </motion.div>
          </Grid>
          {/* Colonna per il paragrafo */}
          <Grid item xs={12} md={6}>
            {/* ... Il resto del codice del testo ... */}
			 <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={textAnimation}
            >
              <Box sx={{ paddingTop: '9rem' }}> {/* Aumenta il padding per allineare con l'inizio del pacheloader */}
                <Typography variant="body1" color="textSecondary">

"Siamo un team di professionisti culinari appassionati, uniti dalla missione di offrire esperienze gastronomiche eccezionali e indimenticabili. Nel nostro ristorante, la qualità è al centro di tutto ciò che facciamo, dall'accurata selezione degli ingredienti alla cura nella preparazione di ogni piatto. Ci impegniamo nell'innovazione, sperimentando costantemente nuove tecniche culinarie e combinazioni di sapori per sorprendere e deliziare i nostri ospiti.

La nostra cucina si fonda sulla velocità nel servire piatti squisiti, senza mai compromettere la qualità. Ogni membro del nostro team è dedicato a fornire un servizio eccellente, assicurando che ogni esperienza presso il nostro ristorante sia unica e memorabile. Collaboriamo a stretto contatto con fornitori locali per garantire che ogni ingrediente rispecchi freschezza e sostenibilità, rafforzando il nostro impegno verso la qualità e l'ambiente.

Ci dedichiamo alla continua ricerca dell'eccellenza non solo nella cucina ma anche nell'ambiente e nel servizio. La nostra strategia si concentra sulla creazione di un'atmosfera accogliente e rilassante, dove ogni cliente può sentirsi a casa. Lavoriamo insieme per realizzare esperienze personalizzate, rispondendo con attenzione alle preferenze e alle esigenze di ciascuno dei nostri ospiti.

Nel nostro ristorante, ogni pasto è un'opera d'arte, e ogni visita è un'avventura nel mondo dei sapori. Ci impegniamo a mantenere elevati standard di eccellenza e innovazione per rendere ogni momento trascorso con noi un'esperienza indimenticabile e arricchente. Venite a scoprire la passione e la maestria che si celano dietro ogni nostro piatto, e lasciatevi trasportare in un viaggio culinario che stimolerà tutti i vostri sensi."
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