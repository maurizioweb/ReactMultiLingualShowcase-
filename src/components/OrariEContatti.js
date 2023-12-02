import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const OrariEContatti = () => {
  const orariApertura = [
    { giorno: 'Lunedì', orario: '10:00 - 11:00' },
    { giorno: 'Martedì', orario: '10:00 - 12:00' },
    // Aggiungi gli altri giorni...
  ];

  const contatti = [
    { tipo: 'Telefono', valore: '123-456-7890' },
    { tipo: 'Email', valore: 'info@example.com' },
    // Aggiungi altri contatti...
  ];
const headerStyle = {
    color: '#F0821E', // Applicazione del colore rosso scuro
  };
  return (
    <Grid container spacing={2} justifyContent="center">
      {/* Intestazione sopra le tabelle */}
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom style={headerStyle}>
          Orari e Contatti
        </Typography>
      </Grid>

      {/* Tabella Orari di Apertura */}
      <Grid item xs={12} sm={6} style={{ maxWidth: '400px' }}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Orari di apertura">
            <TableHead>
              <TableRow style={headerStyle}>
                <TableCell>Giorno</TableCell>
                <TableCell>Orario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orariApertura.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.giorno}</TableCell>
                  <TableCell>{row.orario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Tabella Contatti */}
      <Grid item xs={12} sm={6} style={{ maxWidth: '400px' }}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Contatti">
            <TableHead>
              <TableRow style={headerStyle}>
                <TableCell>Tipo</TableCell>
                <TableCell>Valore</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contatti.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.valore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OrariEContatti;