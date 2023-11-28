import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const OpeningHoursAndContacts = () => {
  const openingHours = [
    { day: 'Monday', time: '10:00 AM - 11:00 AM' },
    { day: 'Tuesday', time: '10:00 AM - 12:00 PM' },
    // Add other days...
  ];

  const contacts = [
    { type: 'Phone', value: '123-456-7890' },
    { type: 'Email', value: 'info@example.com' },
    // Add other contacts...
  ];

  return (
    <Grid container spacing={2}>
      {/* Opening Hours Table */}
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Opening hours">
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {openingHours.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.day}</TableCell>
                  <TableCell>{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      {/* Contacts Table */}
      <Grid item xs={6}>
        <TableContainer component={Paper} style={{ height: '100%' }}>
          <Table aria-label="Contacts">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OpeningHoursAndContacts;