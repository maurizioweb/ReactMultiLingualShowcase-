import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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

  return (
    <Grid container spacing={2}>
      {/* Tabella Orari di Apertura */}
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Orari di apertura">
            <TableHead>
              <TableRow>
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
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Contatti">
            <TableHead>
              <TableRow>
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