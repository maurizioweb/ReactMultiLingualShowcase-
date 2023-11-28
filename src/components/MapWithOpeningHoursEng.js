// MapWithOpeningHoursEng.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Typography, Box } from '@mui/material';
import './MapWithOpeningHours.css'; // Assicurati che il percorso del file CSS sia corretto

const MapWithOpeningHoursEng = ({ location }) => {
    return (
        <Box id="find-us">
            {/* Section for animated texts */}
            <Box sx={{ textAlign: 'center', my: 2 }}>
                {/* Use variant="h4" for "Find Us" to match the style of "The Restaurant" */}
                <Typography variant="h4" align="center" gutterBottom className="animated-text">
                    Find Us
                </Typography>
                {/* Use variant="h2" and custom style for "Experience It" to match the style of "Where Taste Meets Tradition" */}
                <Typography variant="h2" style={{ color: '#EDE0D6' }} align="center" gutterBottom className="animated-text">
                    Experience It
                </Typography>
            </Box>

            {/* Interactive Map */}
            <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={location}>
                    <Popup>
                        We are here!
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default MapWithOpeningHoursEng;