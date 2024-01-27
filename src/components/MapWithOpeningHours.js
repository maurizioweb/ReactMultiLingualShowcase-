// MapWithOpeningHours.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Typography, Box } from '@mui/material';
import './MapWithOpeningHours.css'; // Assicurati che il percorso del file CSS sia corretto

const MapWithOpeningHours = ({ location }) => {
    return (
        <Box id="dove-siamo">
            <Box sx={{ textAlign: 'center', my: 2 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }} className="animated-text">
                    Dove Siamo
                </Typography>
                <Typography variant="h2" sx={{ color: '#EDE0D6', fontFamily: 'Montserrat, sans-serif' }} align="center" gutterBottom className="animated-text">
                    Vivi l'Esperienza
                </Typography>
            </Box>

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
        </Box>
    );
};

export default MapWithOpeningHours;