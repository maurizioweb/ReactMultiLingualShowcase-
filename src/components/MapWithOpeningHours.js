// MapWithOpeningHours.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Typography, Box } from '@mui/material';
import './MapWithOpeningHours.css'; // Assicurati che il percorso del file CSS sia corretto

const MapWithOpeningHours = ({ location }) => {
    return (
        <Box id="dove-siamo">
            {/* Sezione per le scritte animate */}
            <Box sx={{ textAlign: 'center', my: 2 }}>
                {/* Utilizzo di variant="h4" per "Dove Siamo" per adattarsi allo stile di "Il Ristorante" */}
                <Typography variant="h4" align="center" gutterBottom className="animated-text">
                    Dove Siamo
                </Typography>
                {/* Utilizzo di variant="h2" e stile personalizzato per "Vivi l'Esperienza" per adattarsi allo stile di "Dove il gusto è tradizione" */}
                <Typography variant="h2" style={{ color: '#EDE0D6' }} align="center" gutterBottom className="animated-text">
                    Vivi l'Esperienza
                </Typography>
            </Box>

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
        </Box>
    );
};

export default MapWithOpeningHours;