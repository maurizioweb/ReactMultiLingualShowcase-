// MapWithOpeningHours.jsx

// Importazioni necessarie
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MapWithOpeningHours = ({ location, openingHours }) => {
    return (
        <div>
            {/* Mappa Interattiva */}
            <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={location}>
                    <Popup>
                        Siamo qui!
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Tabella Orari e Date con Stile Personalizzato */}
            <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: 'primary.main', '& th': { color: 'common.white', fontWeight: 'bold' } }}>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Ora di Apertura</TableCell>
                            <TableCell>Ora di Chiusura</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {openingHours.map((entry, index) => (
                            <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
                                <TableCell component="th" scope="row">
                                    {entry.date}
                                </TableCell>
                                <TableCell>{entry.open}</TableCell>
                                <TableCell>{entry.close}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MapWithOpeningHours;