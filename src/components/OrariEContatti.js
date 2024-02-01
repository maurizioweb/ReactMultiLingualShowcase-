import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';
import './fonts.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion'; // Assicurati di importare motion da framer-motion

const OrariEContatti = () => {
  const orariApertura = [
    { giorno: 'Lunedì', orario: '11:00-15:00/17:00-00:00' },
    { giorno: 'Martedì', orario: '10:00-12:00/13:00-14:00' },
	{ giorno: 'Mercoledì', orario: '10:00-12:00/13:00-14:00' },
	{ giorno: 'Giovedì', orario: '10:00-12:00/13:00-14:00' },
	{ giorno: 'Venerdì', orario: '10:00-12:00/13:00-14:00' },
	{ giorno: 'Sabato', orario: '10:00-12:00/13:00-14:00' },
	{ giorno: 'Domenica', orario: '10:00-12:00/13:00-14:00' },
    // Aggiungi gli altri giorni...
  ];

 const tableVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
}; 

  const headerStyle = {
    color: '#211F1D', // Utilizza un colore scuro per l'intestazione
	marginTop: '80px', // Aumenta la distanza dalla sezione precedente
	fontFamily: 'HardLight', // Applica il font Hard Light
  };
const footerSpacingStyle = {
  marginBottom: '80px', // Aumenta la distanza dal footer
};
  // Stile per nascondere i bordi delle tabelle e delle righe
  const tableStyle = {
    boxShadow: 'none', // Rimuove l'ombra per nascondere il bordo del TableContainer
    border: 'none', // Nasconde il bordo del TableContainer
  };

  const rowStyle = {
    borderBottom: 'none', // Nasconde il bordo inferiore di ogni riga
  };
  const cellStyle = {
  fontSize: '1.092rem', // Aumenta la dimensione del font
  fontWeight: '400', // Aumenta lo spessore del font
  
};
 

  return (
    <Grid container spacing={5} justifyContent="center" style={footerSpacingStyle}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom style={headerStyle}>
          Contatti
        </Typography>
      </Grid>

      {/* Tabella Orari di Apertura */}
      <Grid item xs={12} sm={5} style={{ maxWidth: '550px',  paddingRight: '14px' /* Stile di distanziamento qui */ }}>
	    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    variants={tableVariants} // Applica le varianti di animazione
  >
        <TableContainer component={Paper} style={tableStyle}>
          <Table aria-label="Orari di apertura">
            
            <TableBody>
              {orariApertura.map((row, index) => (
                <TableRow key={index} style={rowStyle}>
                  <TableCell style={cellStyle}>{row.giorno}</TableCell>
                  <TableCell style={cellStyle}>{row.orario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
		 </motion.div>
      </Grid>

      {/* Tabella Contatti */}
      <Grid item xs={12} sm={5} style={{ maxWidth: '430px',   paddingRight: '0px' /* Stile di distanziamento qui */ }}>
	   <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    variants={tableVariants} // Applica le varianti di animazione
  >
        <TableContainer component={Paper} style={tableStyle}>
          <Table aria-label="Contatti">
            
            <TableBody>
  <TableRow>
    <TableCell style={cellStyle}><PhoneIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />Telefono</TableCell>
    <TableCell style={cellStyle}>{'081 1808 7876'}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell style={cellStyle}><EmailIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />Email</TableCell>
    <TableCell style={cellStyle}>{'info@example.com'}</TableCell>
  </TableRow>
  {/* Aggiungi altre righe se necessario */}
</TableBody>
          </Table>
        </TableContainer>
		</motion.div>
      </Grid>
    </Grid>
  );
};

export default OrariEContatti;